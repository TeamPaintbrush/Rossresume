# Operational Considerations

Last updated: 2026-09-08

Standing operational facts about this project — not shipped changes (that's `CHANGELOG.md`) and not open questions (that's `open_task.md`). This file is append-only: when something changes, add a new entry rather than editing or deleting the old one. Feeds `docs/memory/memory.md` — see `docs/memory/GENERIC_MEMORY-GUIDE.md`.

## Ops & infra posture

| Area | Status | Notes | Logged |
|---|---|---|---|
| Deployment target(s) | Client only | Client deploys to GitHub Pages via `gh-pages` (`npm run deploy` from `client`, `homepage: https://teampaintbrush.github.io/Rossresume`). The Express/Mongo server has no host — it runs locally on port 5561. The deployed site is effectively static. See `open_task.md` #2. | 2026-09-08 |
| Environment / secrets handling | Local `.env`, untracked | `client/.env` (`PORT`, `REACT_APP_API_URL`) and `server/.env` (`PORT`, `MONGODB_URI`, `NODE_ENV`, `EMAIL_HOST/PORT/USER/PASS/FROM`). `.gitignore` covers `.env` and `git ls-files` confirms none are tracked. No secret manager; no `.env.example` committed, so a fresh clone has no template to work from. | 2026-09-08 |
| Monitoring / alerting | None | No error tracking, uptime checks, or log aggregation. Server logs via morgan to stdout only. | 2026-09-08 |
| Rollback procedure | Redeploy | Rollback means rebuilding from an earlier commit and re-running `npm run deploy`; the `gh-pages` branch keeps prior deploy commits. No versioned release process — no release has been cut. | 2026-09-08 |
| Known operational risks | Unhosted API (by choice); uncommitted tree | The layout drift is resolved — the app sits at the repo root and matches `HEAD` (`open_task.md` #1) — but the tree is still uncommitted while Vercel deploys straight from it, so production can hold changes that exist on one machine only. No server is hosted, which costs nothing visitor-facing: pages render from local data and the contact form is `mailto:`-based. Server email delivery would depend on SMTP credentials that exist only on the local machine, if the API were ever hosted. | 2026-09-08 |
| Deployment target(s) — update | Client now has two | Superseding the row above: the site went live on Vercel at https://ross-resume.vercel.app on 2026-09-08 (project `ross-projects-6e89abe8/ross-resume`, Root Directory `client`, CRA preset, config committed in `client/vercel.json` + `.vercelignore`). Deploys run from the CLI (`npx vercel --prod`), not from a git push — there is no git integration, so the live site can drift from `main` silently. GitHub Pages via `npm run deploy` remains independent — deploying to one does not update the other. The server is still unhosted on both. Runbook: `docs/deployment/vercel-ross-resume.md`. | 2026-09-08 |
| Build-time config coupling | Requires care | The client has two deploy targets needing different asset base paths. `package.json` `homepage` serves GitHub Pages; Vercel pins `PUBLIC_URL=/` via `build.env` in `vercel.json` (not a dashboard setting, so it travels with the repo). The router `basename` derives from `PUBLIC_URL` rather than being hardcoded. CRA inlines env vars at build time, so any change needs a redeploy. | 2026-09-08 |
| Security middleware | Configured | helmet, cors, and express-rate-limit are set up in `server/src/server.js`. Applies only when the server actually runs. | 2026-09-08 |

## Guardrails & standing decisions

<!-- Append-only. If a guardrail is lifted or changed, add a new row noting it supersedes an earlier one — don't delete the earlier row. -->

| # | GUARDRAIL | REASON | LOGGED |
|---|---|---|---|
| 1 | Never commit `.env` files or inline credentials. Config reads from `process.env` only. | `server/.env` holds a live MongoDB URI and SMTP password. The site is public and the repo may be pushed to a public remote. | 2026-09-08 |
| 2 | Don't resolve the repo layout drift destructively — no `git reset --hard`, no `git clean`, no force-push — without owner confirmation. | The working tree holds the current app; the index holds the old layout. A destructive fix in either direction can discard real work. | 2026-09-08 |
| 3 | Keep everything in `docs/GENERIC_*.md` and `docs/**/GENERIC_*.md` / `*_TEMPLATE.md` generic — no names, domains, or project specifics. | Those files are a reusable library copied between projects; project-specific content belongs in the live files (`memory.md`, `CHANGELOG.md`, `open_task.md`, `.ai/`). | 2026-09-08 |
| 4 | Core page rendering must not depend on an API call. | The client is deployed standalone to GitHub Pages with no server behind it; an API dependency in the render path breaks the live site. | 2026-09-08 |
| 6 | Never delete `homepage` from `client/package.json` to fix Vercel asset paths — override with the `PUBLIC_URL` env var instead. | The two deploy targets need different base paths. Deleting the field fixes Vercel and silently breaks the GitHub Pages deploy. | 2026-09-08 |
| 7 | Never put a secret in a `REACT_APP_*` variable. | CRA inlines client env vars into the shipped bundle at build time; they are publicly readable. Server secrets (`MONGODB_URI`, SMTP credentials) belong only in server-side environment config. | 2026-09-08 |
| 5 | This site publishes the owner's real identity and professional history by design. Never treat that as a leak to "fix" — but never add address, phone, or personal email without an explicit ask. | It's a personal portfolio; the intended-public surface and an accidental one look the same to an automated audit. | 2026-09-08 |
