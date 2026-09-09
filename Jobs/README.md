# Jobs — application tracker

File-based tracker for roles Leroy is applying to. The files in this folder are the
**source of truth**; the CLI (`scripts/job.js`), the API (`server/src/routes/jobRoutes.js`),
and the `/jobs` dashboard on the client all read and write these same files.

## Layout

```
Jobs/
  _schema/
    job.schema.json     JSON Schema for every job.json
    status-flow.md      status vocabulary + allowed transitions
  <company-slug>/
    company.json        shared facts about the company
    <role-slug>/
      job.json          the structured record — the thing tools read
      posting.md        full job-description text, archived verbatim
      fit-analysis.md   scored breakdown of how Leroy matches the role
      cover-letter.md   draft cover letter (optional, added when drafting)
      notes.md          freeform running log
```

Slugs are kebab-case: `mercury`, `staff-brand-designer`, `tampa-bay-sun-fc`.

## Workflow

1. Found a role → create `Jobs/<company>/<role>/` with `job.json` (status `identified`) and
   paste the JD into `posting.md`.
2. Analyze fit → write `fit-analysis.md`, fill the `fit` block in `job.json`.
3. Decide to apply → status `drafting`, write `cover-letter.md`, pick a `resumeVariant`.
4. Submitted → status `applied`, set `dates.applied`.
5. Every touch (email, call, interview) → append a line to `history[]` and update
   `dates.lastActivity` + `nextAction`.

## CLI

From the repo root (`<id>` = `company/role`, the `job.json` id, or any unique substring):

```
npm run job list                         # every tracked role, by priority
npm run job board                        # grouped by status
npm run job show accounting              # full record + fit breakdown
npm run job status <id> applied "note"   # change status, appends history
npm run job note <id> "called recruiter" # append to notes.md
npm run job next <id> "send portfolio"   # set nextAction
npm run job add <company> "Role Name"    # scaffold a new folder
```

The file-store layer lives in `scripts/lib/jobs.js` and is shared with the API and
dashboard phases.

## API

Mounted on the existing Express server (`cd server && npm run dev`, port 5561).
Reads and writes these same files — no database.

| Method & path | Purpose |
|---|---|
| `GET /api/jobs` | List all jobs. Filters: `?status=` `?company=` |
| `GET /api/jobs/board` | Jobs grouped into status columns |
| `GET /api/jobs/:company/:role` | Full record + rendered `posting.md` / `fit-analysis.md` / `notes.md` / `cover-letter.md` |
| `PATCH /api/jobs/:company/:role` | Body: `status`, `priority`, `nextAction`, `resumeVariant`, `note`. Appends `history[]`. |
| `POST /api/jobs/:company/:role/notes` | Body: `{ "text": "..." }` — appends to `notes.md` |
| `GET /api/workflow` | Cross-project snapshot (see below) |

## Workflow panel

`GET /api/workflow` (CLI: `npm run job workflow`) reads the memory snapshot, open-task
count, and `[Unreleased]` changelog section for every repo listed in
`_workflow-sources.json` — currently the Ross Resume repo and the Paintbrush Marketing
repo. Those paths are absolute and machine-specific; point `JOBS_WORKFLOW_SOURCES` at an
alternate JSON file to override. A missing root degrades gracefully (the panel still renders).

## Static report

`npm run job html` (or `node scripts/build-jobs-html.js`) writes `Jobs/jobs-report.html` —
one self-contained, print-friendly page: methodology, a ranked summary, and a full
weight × score → weighted-contribution → total table per role. Generated (gitignored);
regenerate after editing any `job.json`. The API also serves it fresh at
`GET /jobs-report.html`, and the dashboard header links to it.

## "Raising this score"

A role scoring **under 5.0** can carry an `improvementPlan` in its `job.json`:

```json
"improvementPlan": {
  "summary": "...",
  "targetScore": 6.2,
  "actions": [
    { "do": "...", "why": "...", "leverages": "existing asset", "lifts": "Criterion X 5 -> 8", "effort": "S|M|L" }
  ]
}
```

It renders as a "Raising this score" block in both the report and the dashboard's Fit tab,
with the projected score. Keep each action tied to something Paintbrush already has.

## Dashboard

Private React page, **not linked from the site nav**. Dev-only — it talks to the local
API. Start both servers, then open `http://localhost:5560/Rossresume/jobs`:

```
cd server && npm run dev      # API on :5561
cd client && npm start        # client on :5560, proxies /api → :5561
```

Board tab = kanban by status with fit badges + priority; click a card for the detail pane
(inline status/priority, add-note box, fit scorecard, posting/analysis/notes/history tabs).
Workflow tab = the cross-project snapshot above.

## Status values

`identified` · `drafting` · `applied` · `screen` · `interview` · `offer` · `rejected` ·
`withdrawn` · `on-hold`

See `_schema/status-flow.md`.
