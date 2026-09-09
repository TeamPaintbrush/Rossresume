/**
 * jobs.js — file-store layer for the Jobs/ application tracker.
 *
 * Single source of truth for reading and writing Jobs/<company>/<role>/job.json.
 * Zero dependencies. Shared by scripts/job.js (CLI) and, later,
 * server/src/routes/jobRoutes.js (API) and the /jobs dashboard.
 */

const fs = require("fs");
const path = require("path");

const JOBS_DIR = path.resolve(__dirname, "..", "..", "Jobs");

const STATUSES = [
  "identified",
  "drafting",
  "applied",
  "screen",
  "interview",
  "offer",
  "rejected",
  "withdrawn",
  "on-hold",
];

const today = () => new Date().toISOString().slice(0, 10);

const isDir = (p) => {
  try {
    return fs.statSync(p).isDirectory();
  } catch {
    return false;
  }
};

/** Every directory that directly contains a job.json, as { id, dir, companySlug, roleSlug }. */
function listJobDirs() {
  if (!isDir(JOBS_DIR)) return [];
  const out = [];
  for (const company of fs.readdirSync(JOBS_DIR)) {
    if (company.startsWith("_") || company.startsWith(".")) continue;
    const companyDir = path.join(JOBS_DIR, company);
    if (!isDir(companyDir)) continue;
    for (const role of fs.readdirSync(companyDir)) {
      const roleDir = path.join(companyDir, role);
      if (!isDir(roleDir)) continue;
      if (!fs.existsSync(path.join(roleDir, "job.json"))) continue;
      out.push({ id: `${company}/${role}`, dir: roleDir, companySlug: company, roleSlug: role });
    }
  }
  return out;
}

/** Resolve a user-supplied id to a job dir. Accepts "company/role", the job.json `id`, or a unique role-slug substring. */
function resolveJob(idish) {
  const dirs = listJobDirs();
  if (!idish) return null;
  const needle = idish.toLowerCase().replace(/\\/g, "/");

  let hit = dirs.find((d) => d.id.toLowerCase() === needle);
  if (hit) return hit;

  const withData = dirs.map((d) => ({ ...d, data: readJob(d.dir) }));
  hit = withData.find((d) => (d.data.id || "").toLowerCase() === needle);
  if (hit) return hit;

  const matches = withData.filter(
    (d) => d.id.toLowerCase().includes(needle) || (d.data.id || "").toLowerCase().includes(needle)
  );
  if (matches.length === 1) return matches[0];
  if (matches.length > 1) {
    const err = new Error(`"${idish}" is ambiguous: ${matches.map((m) => m.id).join(", ")}`);
    err.ambiguous = matches.map((m) => m.id);
    throw err;
  }
  return null;
}

function readJob(dir) {
  return JSON.parse(fs.readFileSync(path.join(dir, "job.json"), "utf8"));
}

function writeJob(dir, data) {
  fs.writeFileSync(path.join(dir, "job.json"), JSON.stringify(data, null, 2) + "\n");
}

/** All jobs with their parsed data and dir, sorted by priority desc then company. */
function allJobs() {
  return listJobDirs()
    .map((d) => ({ ...d, data: readJob(d.dir) }))
    .sort((a, b) => (b.data.priority || 0) - (a.data.priority || 0) || a.id.localeCompare(b.id));
}

function pushHistory(data, event) {
  data.history = data.history || [];
  data.history.push({ date: today(), event });
  data.dates = data.dates || {};
  data.dates.lastActivity = today();
}

function setStatus(dir, data, status, note) {
  const known = STATUSES.includes(status);
  const from = data.status;
  data.status = status;
  if (status === "applied" && !data.dates?.applied) {
    data.dates = data.dates || {};
    data.dates.applied = today();
  }
  pushHistory(data, `Status ${from} -> ${status}${note ? ` (${note})` : ""}`);
  writeJob(dir, data);
  return { known };
}

function appendNote(dir, roleDir, data, text) {
  const notesPath = path.join(roleDir, "notes.md");
  const stamp = `\n## ${today()}\n\n${text}\n`;
  fs.appendFileSync(notesPath, fs.existsSync(notesPath) ? stamp : `# Notes\n${stamp}`);
  pushHistory(data, `Note: ${text.length > 80 ? text.slice(0, 77) + "..." : text}`);
  writeJob(dir, data);
}

/** Weighted fit score from criteria (0-10). Returns null if no criteria. */
function computeFit(fit) {
  if (!fit || !Array.isArray(fit.criteria) || fit.criteria.length === 0) return null;
  const totalW = fit.criteria.reduce((s, c) => s + (c.weight || 0), 0) || 1;
  const raw = fit.criteria.reduce((s, c) => s + (c.score || 0) * (c.weight || 0), 0);
  return Math.round((raw / totalW) * 10) / 10;
}

module.exports = {
  JOBS_DIR,
  STATUSES,
  today,
  listJobDirs,
  resolveJob,
  readJob,
  writeJob,
  allJobs,
  pushHistory,
  setStatus,
  appendNote,
  computeFit,
};
