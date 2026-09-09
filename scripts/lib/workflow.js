/**
 * workflow.js — read the cross-project workflow state (memory / open tasks /
 * unreleased changelog) for every project listed in Jobs/_workflow-sources.json.
 *
 * Zero dependencies. Shared by the CLI (`npm run job workflow`) and the API
 * (`GET /api/workflow`), which feeds the dashboard's Workflow panel.
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const CONFIG_PATH =
  process.env.JOBS_WORKFLOW_SOURCES ||
  path.join(REPO_ROOT, "Jobs", "_workflow-sources.json");

function loadSources() {
  try {
    const raw = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
    return Array.isArray(raw.sources) ? raw.sources : [];
  } catch (e) {
    return [];
  }
}

function readFileMeta(abs) {
  try {
    const stat = fs.statSync(abs);
    return { content: fs.readFileSync(abs, "utf8"), modified: stat.mtime.toISOString(), path: abs };
  } catch {
    return { content: null, modified: null, path: abs, missing: true };
  }
}

/** Pull just the `## [Unreleased]` section out of a Keep-a-Changelog file. */
function extractUnreleased(changelogText) {
  if (!changelogText) return null;
  const lines = changelogText.split(/\r?\n/);
  const start = lines.findIndex((l) => /^##\s*\[Unreleased\]/i.test(l));
  if (start === -1) return null;
  const rest = lines.slice(start + 1);
  const end = rest.findIndex((l) => /^##\s+/.test(l));
  return rest.slice(0, end === -1 ? undefined : end).join("\n").trim();
}

/** Rough count of still-open numbered table rows (everything before a "Resolved" heading). */
function countOpenTaskRows(openTasksText) {
  if (!openTasksText) return null;
  const cut = openTasksText.search(/^#+.*resolved/im);
  const scope = cut === -1 ? openTasksText : openTasksText.slice(0, cut);
  return (scope.match(/^\|\s*\d+\s*\|/gm) || []).length;
}

function collect() {
  return loadSources().map((src) => {
    const f = src.files || {};
    const memory = f.memory ? readFileMeta(path.resolve(src.root, f.memory)) : null;
    const openTasks = f.openTasks ? readFileMeta(path.resolve(src.root, f.openTasks)) : null;
    const changelog = f.changelog ? readFileMeta(path.resolve(src.root, f.changelog)) : null;
    return {
      name: src.name,
      root: src.root,
      rootExists: fs.existsSync(src.root),
      memory,
      openTasks: openTasks
        ? { ...openTasks, openRowCount: countOpenTaskRows(openTasks.content) }
        : null,
      changelog: changelog
        ? { path: changelog.path, modified: changelog.modified, missing: changelog.missing, unreleased: extractUnreleased(changelog.content) }
        : null,
    };
  });
}

module.exports = { collect, loadSources, extractUnreleased, countOpenTaskRows, CONFIG_PATH };
