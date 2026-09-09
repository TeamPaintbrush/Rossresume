#!/usr/bin/env node
/**
 * job.js — CLI for the Jobs/ application tracker.
 *
 *   node scripts/job.js list                    table of every tracked role
 *   node scripts/job.js board                   grouped by status
 *   node scripts/job.js show <id>               full record + fit breakdown
 *   node scripts/job.js status <id> <status> [note]
 *   node scripts/job.js note <id> <text...>     append to notes.md
 *   node scripts/job.js next <id> <text...>     set nextAction
 *   node scripts/job.js add <company> <role>    scaffold a new role folder
 *
 * <id> is "company/role", the job.json id, or any unique substring of it.
 */

const fs = require("fs");
const path = require("path");
const L = require("./lib/jobs");
const W = require("./lib/workflow");
const { build: buildHtml } = require("./build-jobs-html");

const c = (n, s) => (process.stdout.isTTY ? `\x1b[${n}m${s}\x1b[0m` : s);
const bold = (s) => c("1", s);
const dim = (s) => c("2", s);
const green = (s) => c("32", s);
const yellow = (s) => c("33", s);
const red = (s) => c("31", s);

const STATUS_COLOR = {
  identified: dim,
  drafting: yellow,
  applied: (s) => c("36", s),
  screen: (s) => c("36", s),
  interview: green,
  offer: green,
  rejected: red,
  withdrawn: red,
  "on-hold": dim,
};
const paintStatus = (s) => (STATUS_COLOR[s] || ((x) => x))(s.padEnd(10));

const fitTag = (score) => {
  if (score == null) return dim("  – ");
  const t = score.toFixed(1).padStart(4);
  if (score >= 6.5) return green(t);
  if (score >= 5) return yellow(t);
  return red(t);
};

function die(msg) {
  console.error(red(msg));
  process.exit(1);
}

function mustResolve(idish) {
  let job;
  try {
    job = L.resolveJob(idish);
  } catch (e) {
    die(e.message);
  }
  if (!job) die(`No job matches "${idish}". Try: node scripts/job.js list`);
  return job;
}

function cmdList() {
  const jobs = L.allJobs();
  if (!jobs.length) return console.log(dim("No jobs tracked yet."));
  console.log(
    bold("PRI  FIT   STATUS      ROLE") + "\n" + dim("─".repeat(72))
  );
  for (const { data, id } of jobs) {
    const fit = data.fit?.score ?? L.computeFit(data.fit);
    const line = [
      String(data.priority ?? "-").padStart(3),
      fitTag(fit),
      paintStatus(data.status || "?"),
      `${data.company} — ${data.role}`,
    ].join("  ");
    console.log(line);
    console.log(dim(`                        ${id}`));
    if (data.nextAction) console.log(dim(`                        ↳ ${data.nextAction}`));
  }
}

function cmdBoard() {
  const jobs = L.allJobs();
  for (const status of L.STATUSES) {
    const inCol = jobs.filter((j) => j.data.status === status);
    if (!inCol.length) continue;
    console.log("\n" + bold(paintStatus(status).trim()) + dim(`  (${inCol.length})`));
    for (const { data, id } of inCol) {
      const fit = data.fit?.score ?? L.computeFit(data.fit);
      console.log(`  ${fitTag(fit)}  ${data.company} — ${data.role}  ${dim(id)}`);
    }
  }
  console.log();
}

function cmdShow(idish) {
  const job = mustResolve(idish);
  const d = job.data || L.readJob(job.dir);
  console.log(bold(`\n${d.company} — ${d.role}`));
  console.log(dim(job.id));
  const row = (k, v) => v != null && v !== "" && console.log(`  ${k.padEnd(13)} ${v}`);
  row("Status", paintStatus(d.status).trim());
  row("Priority", d.priority);
  row("Team", d.team);
  row("Location", d.location);
  row("URL", d.url);
  row("Applied", d.dates?.applied);
  row("Last activity", d.dates?.lastActivity);
  row("Resume", d.resumeVariant);
  row("Next action", d.nextAction ? yellow(d.nextAction) : null);

  const computed = L.computeFit(d.fit);
  if (d.fit && (d.fit.score != null || computed != null)) {
    console.log(bold(`\n  Fit: ${fitTag(d.fit.score ?? computed).trim()}` + (computed != null && d.fit.score != null && computed !== d.fit.score ? dim(` (recomputed ${computed})`) : "")));
    if (d.fit.verdict) console.log(dim("  " + d.fit.verdict));
    for (const cr of d.fit.criteria || []) {
      console.log(`   ${String(cr.score).padStart(2)}/10  ${dim("w" + cr.weight)}  ${cr.name}`);
    }
    if (d.fit.gaps?.length) {
      console.log(bold("\n  Gaps:"));
      d.fit.gaps.forEach((g) => console.log(`   • ${g}`));
    }
  }

  for (const f of ["posting.md", "fit-analysis.md", "cover-letter.md", "notes.md"]) {
    if (fs.existsSync(path.join(job.dir, f))) console.log(dim(`\n  ${f}  →  ${path.join(job.dir, f)}`));
  }

  if (d.history?.length) {
    console.log(bold("\n  History:"));
    d.history.slice(-8).forEach((h) => console.log(`   ${dim(h.date)}  ${h.event}`));
  }
  console.log();
}

function cmdStatus(idish, status, ...noteParts) {
  if (!status) die("Usage: node scripts/job.js status <id> <status> [note]");
  const job = mustResolve(idish);
  const d = L.readJob(job.dir);
  const { known } = L.setStatus(job.dir, d, status, noteParts.join(" ") || null);
  if (!known) console.log(yellow(`Warning: "${status}" is not a known status (${L.STATUSES.join(", ")})`));
  console.log(green(`${job.id}: ${d.status}`));
}

function cmdNote(idish, ...textParts) {
  const text = textParts.join(" ").trim();
  if (!text) die("Usage: node scripts/job.js note <id> <text...>");
  const job = mustResolve(idish);
  const d = L.readJob(job.dir);
  L.appendNote(job.dir, job.dir, d, text);
  console.log(green(`Note added to ${job.id}/notes.md`));
}

function cmdNext(idish, ...textParts) {
  const text = textParts.join(" ").trim();
  if (!text) die("Usage: node scripts/job.js next <id> <text...>");
  const job = mustResolve(idish);
  const d = L.readJob(job.dir);
  d.nextAction = text;
  L.pushHistory(d, `Next action set: ${text}`);
  L.writeJob(job.dir, d);
  console.log(green(`${job.id} next action: ${text}`));
}

function cmdAdd(company, ...roleParts) {
  const role = roleParts.join(" ");
  if (!company || !role) die("Usage: node scripts/job.js add <company-slug> <role slug or name>");
  const companySlug = company.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const roleSlug = role.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const dir = path.join(L.JOBS_DIR, companySlug, roleSlug);
  if (fs.existsSync(dir)) die(`${companySlug}/${roleSlug} already exists.`);
  fs.mkdirSync(dir, { recursive: true });
  const stub = {
    id: `${companySlug}-${roleSlug}`,
    company,
    role,
    team: "",
    location: "",
    url: "",
    source: "",
    postingType: "full-time",
    comp: { baseMin: null, baseMax: null, equity: null, currency: "USD", notes: "" },
    status: "identified",
    priority: 3,
    fit: { score: null, verdict: "Not yet analyzed.", criteria: [], strengths: [], gaps: [], analyzedAt: null },
    dates: { identified: L.today(), applied: null, firstResponse: null, lastActivity: L.today() },
    contacts: [],
    resumeVariant: null,
    nextAction: "Paste the JD into posting.md, then run a fit analysis.",
    history: [{ date: L.today(), event: "Created" }],
    tags: [],
  };
  L.writeJob(dir, stub);
  fs.writeFileSync(path.join(dir, "posting.md"), `# ${role} — ${company}\n\n_Paste the full job description here._\n`);
  console.log(green(`Created ${companySlug}/${roleSlug}/`));
}

function cmdWorkflow() {
  const sources = W.collect();
  if (!sources.length) return console.log(dim(`No workflow sources configured (${W.CONFIG_PATH}).`));
  for (const s of sources) {
    console.log("\n" + bold(s.name) + dim(`  ${s.root}`) + (s.rootExists ? "" : red("  [missing]")));
    if (s.openTasks) {
      const n = s.openTasks.openRowCount;
      console.log(`  open tasks: ${n == null ? dim("?") : n === 0 ? green("0") : yellow(n)}  ${dim(s.openTasks.path)}`);
    }
    if (s.memory?.modified) console.log(`  memory synced: ${dim(s.memory.modified.slice(0, 10))}`);
    if (s.changelog?.unreleased) {
      const bullets = s.changelog.unreleased.split("\n").filter((l) => /^\s*[-*]/.test(l)).length;
      console.log(`  unreleased changelog: ${bullets} ${dim("bullet(s)")}`);
    }
  }
  console.log();
}

const [cmd, ...args] = process.argv.slice(2);
const table = {
  list: cmdList,
  ls: cmdList,
  board: cmdBoard,
  workflow: cmdWorkflow,
  wf: cmdWorkflow,
  html: () => { const r = buildHtml(); console.log(green(`Wrote ${r.out} (${r.count} roles)`)); },
  show: () => cmdShow(args[0]),
  status: () => cmdStatus(...args),
  note: () => cmdNote(...args),
  next: () => cmdNext(...args),
  add: () => cmdAdd(...args),
};
(table[cmd] || (() => {
  console.log(fs.readFileSync(__filename, "utf8").split("\n").slice(2, 16).join("\n").replace(/^ \*/gm, "").replace(/^\//, ""));
}))();
