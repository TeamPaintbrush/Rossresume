# Memory

Last full sync: 2026-09-09

Synthesized snapshot of this project's state. Read this first when orienting to the project. Each section below is sourced from one file in the loop — see `docs/memory/GENERIC_MEMORY-GUIDE.md`. If a section looks stale next to its source, refresh it before relying on it.

## What this project is
<!-- Source: README.md — Last synced: 2026-09-08 -->

Ross Resume: a personal **digital-résumé** site for Leroy Ross (Paintbrush Marketing). A React 18 SPA (CRA, React Router v6) with an editorial theme (Newsreader + Inter, warm-paper/ink/deep-teal). The Home page is the résumé itself (masthead → 01 Profile · 02 Expertise · 03 Experience · 04 AI Tools & Automation · 05 Selected Work · 06 Education). Two separate galleries — **Portfolio** (29 curated projects) and **Designs** (15 distinct pieces, no overlap) — plus a Contact page (mailto-based form). Two downloadable PDF résumés generate client-side via `@react-pdf/renderer` from `resumeData.js`. An Express 4 + Mongoose 8 API exists but is unhosted; the site works entirely without it. The app is at the repo root (`client/` dev port 5560; `server/` port 5561) after the 2026-09-08 un-nest. Basic Jest data-invariants tests + a GitHub Actions CI workflow.

## Recent changes
<!-- Source: docs/changelogs/CHANGELOG.md — Last synced: 2026-09-09 -->

- [Unreleased] **`Jobs/` application tracker, Phases 1–4 (2026-09-09).** File-based tracker under `Jobs/`: `README.md`, `_schema/`, per-role folders with `job.json` (weighted `fit` score, status, dates, next action, history, optional `links[]`), `posting.md`, `fit-analysis.md`. Tracked: 3 Mercury design roles (Staff Brand Designer ~4.5, Sr Product Designer/Accounting Integrations ~6.7 — top target, Staff Visual Designer/Design Systems ~5.3) + Tampa Bay Sun FC Graphic Designer (Entry Level) ~7.6, status `applied`. CLI `npm run job` (`scripts/job.js` + `scripts/lib/jobs.js`, plus `job workflow`). Express API `/api/jobs` + `/api/workflow` on the existing server (file-backed, not Mongo); `/api/workflow` reads memory/open-tasks/unreleased-changelog for every repo in `Jobs/_workflow-sources.json` (Ross Resume + Paintbrush Marketing). Private React dashboard at `/jobs` (+ `/jobs/:company/:role`), not in header nav, dev-only; kanban by status, fit scorecards, inline status/note editing, a Workflow tab. Dep-free Markdown renderer `client/src/utils/miniMarkdown.js`. Static print-friendly `Jobs/jobs-report.html` (gitignored) from `npm run job html` / `scripts/build-jobs-html.js`, also served at `GET /jobs-report.html`. A role can carry an `improvementPlan` in `job.json` (grounded in real Paintbrush assets / shipped products) — rendered as a "Raising this score" block in the report + dashboard. Plans exist for Mercury Staff Brand Designer (~4.5 → ~6.2) and Mercury Sr Product Designer / Accounting Integrations (~7.5 → ~8.7). The Accounting role climbed 6.6 → 7.5 as Leroy's real accounting/finance work surfaced: **Well** (published Chrome Web Store invoice-automation product), **ReconcileIQ** (reconciliation app, real clients), **TaxesByRoss** (his tax practice's software), **TOBA** (501(c)(3) platform). He's a practicing tax preparer who builds accounting software — the gap is packaging, not substance. All 5 product case-study skeletons are now built on the Paintbrush `/use-cases` "Product & Platforms" track (Well, ReconcileIQ + TaxesByRoss, TOBA, InsureBridge, Titan Couriers), with a real-asset pass done (real logos + brand colors + an accurate iPhone frame on Titan). That lifted the Accounting Integrations fit **7.5 → 7.8** ("Polished UI craft" 6 → 7). `job.json` actions carry `[SKELETON BUILT …]` prefixes; remaining work is real screenshots + a one-page decision log (→ ~8.7); `jobs-report.html` regenerated.
- [Unreleased] **Résumé repositioned to product design + 3rd PDF (2026-09-09).** `resumeData.personal`: `discipline` → "Product Design", `title` → "Product Designer & Creative Technologist"; summary, Paintbrush role ("Product Designer & Partner"), Titan role, and lead bullets reframed; `topProjects` gains ReconcileIQ + TOBA. New **"Senior Product Designer" résumé PDF** (`SeniorProductDesignerResumePDF.js` + `resumeVariants.js`) — 3rd option in the download dropdown, product work first. Paintbrush about-page role also updated in the sibling repo. `docs/Leroy-Ross-Resume.{pdf,docx}` need regeneration.
- [Unreleased] **Digital-Résumé rebuild (2026-09-08).** Complete theme overhaul; Home rebuilt as a résumé; "What I Do" accordion replaced by an always-visible Expertise grid; `animations.css` gutted (fixes the global hover bug); Portfolio (29) and Designs (15) are now disjoint datasets with their own image folders; Contact form → `mailto:`; content updates (TaxesByRoss removed, Coca-Cola + AMA roles added, "Digital Marketing" role/lead, 3,000+ designs, venture links). Repo un-nested to root. Data-invariants tests + CI workflow added. Standalone résumé PDF/DOCX regenerated. Nothing committed yet.
- [Unreleased] Site went live on Vercel at https://ross-resume.vercel.app (2026-09-08). Fixed two latent bugs in the process: the router `basename` was hardcoded to `/Rossresume` (blank page on any other host) and asset paths inherited the GitHub Pages prefix. GitHub Pages stays a separate, still-working target.
- [Unreleased] Favicon/app-icon set added (2026-09-08). `client/public/` referenced `favicon.ico` and `logo192.png` that were never there, so the dev server 500'd on them. A generated `LR` monogram set (`favicon.ico` 16/32/48, `logo192.png`, `logo512.png`) in the ink/paper brand colours now ships, and `manifest.json` lists the PNGs. Redeployed to Vercel production the same day and verified.
- [Unreleased] `docs/GENERIC_vercel-setup-guide.md` extended to cover non-Next.js SPAs and genericized (account-specific team values moved to the project runbook).
- [Unreleased] Agent-workflow systems wired into the repo: `AGENTS.md`, `CLAUDE.md`, and a root `README.md` carrying the changelog/memory/open-task/context hooks.
- [Unreleased] Added the `.ai/` context store per `docs/GENERIC_RAG.md` — `project-summary.md`, `architecture-decisions.md`, `active-context.md`, `patterns.md`, `command-reference.md`, `archive/`.
- [Unreleased] Re-seeded the live state files (`CHANGELOG.md`, `memory.md`, `Operational_Considerations.md`, `later_roadmaps.md`, `open_task.md`) for this project — they previously described the generic library they were copied from.
- No versioned releases cut yet — everything sits under `[Unreleased]`. Repo history is a single initial commit (`6af1265`).

## Open decisions & investigations
<!-- Source: docs/open_task.md — Last synced: 2026-09-09 -->

**Needs investigation (2026-09-09, from the Jobs tracker work):**
- #11 — re-pull the live Tampa Bay Sun FC "Graphic Designer (Entry Level)" JD; `Jobs/tampa-bay-sun-fc/graphic-designer-entry-level/posting.md` is reconstructed from Leroy's concept board, not verbatim.
- #12 — `Jobs/_workflow-sources.json` hard-codes absolute machine paths to both repos; only resolves on Leroy's machine (handled gracefully elsewhere).
- #13 — RESOLVED 2026-09-09: TaxesByRoss restored to the main résumé (2026-09-08 removal was a mistake). New experience entry — private tax practice since 2015, 150+ clients, contract Form 990 work for Trydent Advisors (Tallahassee FL), built software highlighted.

**Needs decision:**
- Whether the Express/Mongo server gets a deployment target, or the deployed site is accepted as static-only. Portfolio and Designs render entirely from local data; the contact form is now `mailto:`-based, so nothing is actually broken without the API — the server is optional.
- Whether to ship a forced **150% zoom** (open_task #10, asked 2026-09-08). A page can’t drive the browser’s zoom control; the workable approximation is `:root { zoom: 1.5 }`. Blocked on the owner’s intent, because at 150% a 1440px screen falls to a ~960px effective viewport and crosses the 1000/1080px breakpoints into the narrow layout. Rem-scaling is the accessible alternative but the CSS is only ~70% rem with 15 `clamp()`/`vw` rules that wouldn’t follow.

**Security:**
- One informational entry: the site publishes owner PII by design (name, history, phone, email). Intentional for a résumé; worth one deliberate confirmation pass that nothing *unintended* ships. No audit has run.

Resolved 2026-09-08: **repo layout drift** — app un-nested back to the repo root so the tree matches `HEAD` (staged, not committed; the Vercel Root Directory needed no change — verified `.` on 2026-09-08). **Test suite** — added Jest data-invariants tests (`client/src/data/portfolioData.test.js`, 53 checks incl. Portfolio/Designs disjointness) + `.github/workflows/ci.yml`. Earlier: showcase moved out of the `Blog.js` catch block; dates re-randomized + timezone-safe; `.claude/launch.json` fixed; `Portfolio` model enum + `slug` aligned.

See `docs/open_task.md` for full context and the 🟢 Resolved log.

## Conventions & rules
<!-- Source: AGENTS.md — Last synced: 2026-09-08 -->

- Résumé content is data-driven from `client/src/data/resumeData.js` (`personal`, `summary`, `ventures`, `skills`, `experience`, `education`, `certifications`, `topProjects`, `aiTools`). `client/src/data/portfolioData.js` holds two **disjoint** datasets: `designShowcase` (15, images `public/images/designs/`) → Designs page; `portfolioProjects` (29, images `public/images/portfolio/`) → Portfolio page. Server mirrors: `server/src/seed/showcase.json` + `portfolio.json` (regenerate from the client arrays when they change). Edit content in the data files, never inline in JSX.
- Components and pages are `<Name>/<Name>.js` + sibling `<Name>.css`; function components with hooks, plain CSS (no CSS-in-JS, no utility framework).
- `animations.css` is entrance keyframes only (`fadeIn*`, `scroll-reveal`, `float`). Hover/interaction styling lives in each component's CSS — do not re-add global hover rules there. Reveals use the `useScrollReveal` hook; everything degrades under `prefers-reduced-motion`.
- Theme tokens are in `App.css` (`--paper`, `--ink`, `--accent`, `--muted`, `--hairline`, `--font-serif`, `--font-sans`) with legacy aliases (`--primary-color`, `--bg-color`, …) kept for older component CSS.
- Showcase images are static assets referenced root-relative from `client/public/images/{designs,portfolio}/`, not ES imports. Cards link to `item.link` when set, else `BEHANCE_URL` (the profile).
- No root-level install or build — the client and server are independent packages, run from their own directories.
- Changelog discipline: append an `[Unreleased]` bullet before finishing behavior-changing work; skip pure refactors/formatting/typos; never rewrite past entries.
- Memory discipline: read this file first each session; refresh the relevant section when any of the six sources materially changes; treat staleness as a bug.
- Open-task discipline: log owner-decision questions in `docs/open_task.md` rather than guessing; resolved items move to 🟢 Resolved, they aren't deleted.
- Keep `docs/GENERIC_*` and `*_TEMPLATE*` files generic — they're a reusable library; project specifics belong in the live files.

## Deferred / future plans
<!-- Source: docs/memory/later_roadmaps.md — Last synced: 2026-09-08 -->

- Building the full vector-retrieval backend from `docs/GENERIC_RAG.md` is deferred — the file-based `.ai/` store covers a project this size.
- Content into MongoDB deferred unless the server gets a real host.
- Running the PII audit is deferred — that guide wasn't copied into this repo's `docs/` and would need to be brought over first.
- Nice-to-haves: per-project Behance deep links (field scaffolding is in place, URLs not filled in); responsive `srcset`/WebP for portfolio images; a form-service backend for Contact instead of `mailto:`; confirm the two guessed job locations (Coca-Cola / AMA).
- Done since last sync: repo un-nested; data-invariants tests + CI; image optimization pass (build/images ~7 MB); dark-mode visual QA still outstanding.

## Operational posture & guardrails
<!-- Source: docs/memory/Operational_Considerations.md — Last synced: 2026-09-08 -->

Client-only deployment, now to two independent targets: `gh-pages` to `teampaintbrush.github.io/Rossresume` and Vercel at `ross-resume.vercel.app`, live since 2026-09-08 (Root Directory `.` — the CLI uploads `client/` as the project root; deploys via CLI, no git integration; runbook in `docs/deployment/vercel-ross-resume.md`). The server is unhosted on both, so the live site is entirely static — and nothing visitor-facing needs it: Designs and Portfolio render from `portfolioData.js`, and the contact form composes a `mailto:` rather than calling the API. The two targets need different asset base paths: `package.json` `homepage` serves GitHub Pages, and Vercel pins `PUBLIC_URL=/` in `vercel.json` `build.env`; the router `basename` derives from it rather than being hardcoded. Secrets live in untracked local `.env` files (`MONGODB_URI`, SMTP credentials) with no secret manager and no committed `.env.example`. No monitoring or error tracking; rollback means rebuilding from an earlier commit and redeploying. Standing guardrails: never commit `.env` or inline credentials; never delete `homepage` to fix Vercel paths (override with `PUBLIC_URL` instead, or GitHub Pages silently breaks); never put a secret in a `REACT_APP_*` var (CRA inlines them into the public bundle); never resolve the layout drift destructively (`reset --hard`, `clean`, force-push) without owner confirmation; keep the `GENERIC_*`/template files generic; core page rendering must never depend on an API call; and the owner's published identity is intentional — don't "fix" it, but don't add address/phone/personal email either. Full detail in `docs/memory/Operational_Considerations.md`.
