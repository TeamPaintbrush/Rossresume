/**
 * jobController — read/write the file-based Jobs/ tracker over HTTP.
 *
 * Data lives in <repo>/Jobs/, not MongoDB. The file-store layer is the same
 * module the CLI uses (scripts/lib/jobs.js) so both stay in lock-step.
 */

const fs = require('fs');
const path = require('path');
const L = require('../../../scripts/lib/jobs');

/** Shape a job dir into the API response object. */
function serialize(entry, { full = false } = {}) {
  const d = entry.data || L.readJob(entry.dir);
  const computedFit = L.computeFit(d.fit);
  const base = {
    id: entry.id,
    company: d.company,
    role: d.role,
    team: d.team || null,
    location: d.location || null,
    url: d.url || null,
    status: d.status,
    priority: d.priority ?? null,
    fit: {
      score: d.fit?.score ?? computedFit,
      computed: computedFit,
      verdict: d.fit?.verdict || null,
    },
    dates: d.dates || {},
    resumeVariant: d.resumeVariant || null,
    nextAction: d.nextAction || null,
    tags: d.tags || [],
  };
  if (!full) return base;

  const readIf = (name) => {
    const p = path.join(entry.dir, name);
    return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null;
  };
  return {
    ...base,
    fit: { ...base.fit, criteria: d.fit?.criteria || [], strengths: d.fit?.strengths || [], gaps: d.fit?.gaps || [], analyzedAt: d.fit?.analyzedAt || null },
    improvementPlan: d.improvementPlan || null,
    comp: d.comp || {},
    source: d.source || null,
    postingType: d.postingType || null,
    contacts: d.contacts || [],
    links: d.links || [],
    history: d.history || [],
    docs: {
      posting: readIf('posting.md'),
      fitAnalysis: readIf('fit-analysis.md'),
      coverLetter: readIf('cover-letter.md'),
      notes: readIf('notes.md'),
    },
  };
}

function findOr404(req, res) {
  const idish = req.params.company && req.params.role
    ? `${req.params.company}/${req.params.role}`
    : req.params.id;
  let entry;
  try {
    entry = L.resolveJob(idish);
  } catch (e) {
    res.status(400).json({ message: e.message, ambiguous: e.ambiguous });
    return null;
  }
  if (!entry) {
    res.status(404).json({ message: `No job matches "${idish}"` });
    return null;
  }
  return entry;
}

exports.list = (req, res) => {
  let jobs = L.allJobs();
  if (req.query.status) jobs = jobs.filter((j) => j.data.status === req.query.status);
  if (req.query.company) jobs = jobs.filter((j) => j.companySlug === req.query.company);
  res.json(jobs.map((j) => serialize(j)));
};

exports.board = (req, res) => {
  const jobs = L.allJobs();
  const columns = L.STATUSES.map((status) => ({
    status,
    jobs: jobs.filter((j) => j.data.status === status).map((j) => serialize(j)),
  }));
  const known = new Set(L.STATUSES);
  const extra = jobs.filter((j) => !known.has(j.data.status));
  if (extra.length) columns.push({ status: 'other', jobs: extra.map((j) => serialize(j)) });
  res.json({ columns, total: jobs.length });
};

exports.get = (req, res) => {
  const entry = findOr404(req, res);
  if (!entry) return;
  res.json(serialize(entry, { full: true }));
};

exports.patch = (req, res) => {
  const entry = findOr404(req, res);
  if (!entry) return;
  const d = L.readJob(entry.dir);
  const { status, priority, nextAction, resumeVariant, note } = req.body || {};
  const changes = [];

  if (status && status !== d.status) {
    const { known } = L.setStatus(entry.dir, d, status, note || null); // writes + history
    changes.push(`status→${status}`);
    if (!known) changes.push('(unknown status)');
  }
  if (priority != null && priority !== d.priority) {
    d.priority = priority;
    L.pushHistory(d, `Priority set to ${priority}`);
    changes.push(`priority→${priority}`);
  }
  if (typeof nextAction === 'string' && nextAction !== d.nextAction) {
    d.nextAction = nextAction;
    L.pushHistory(d, `Next action set: ${nextAction}`);
    changes.push('nextAction');
  }
  if (resumeVariant !== undefined && resumeVariant !== d.resumeVariant) {
    d.resumeVariant = resumeVariant;
    L.pushHistory(d, `Resume variant set: ${resumeVariant}`);
    changes.push('resumeVariant');
  }
  if (!changes.length) return res.json({ message: 'No changes', job: serialize(entry, { full: true }) });

  L.writeJob(entry.dir, d);
  res.json({ message: `Updated: ${changes.join(', ')}`, job: serialize({ ...entry, data: d }, { full: true }) });
};

exports.addNote = (req, res) => {
  const entry = findOr404(req, res);
  if (!entry) return;
  const text = (req.body && req.body.text || '').trim();
  if (!text) return res.status(400).json({ message: 'Body must include { "text": "..." }' });
  const d = L.readJob(entry.dir);
  L.appendNote(entry.dir, entry.dir, d, text);
  res.status(201).json({ message: 'Note appended', job: serialize({ ...entry, data: d }, { full: true }) });
};
