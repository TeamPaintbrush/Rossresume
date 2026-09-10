# Vercel Deployment — Ross Resume

Last updated: 2026-09-08

**Status: live.** First production deploy 2026-09-08 — Vercel project `ross-projects-6e89abe8/ross-resume`. Most recent production deploy 2026-09-08 (`dpl_4V4MNyx3UTSP87jNcGHaaRHLHykg`), which shipped the generated favicon/app-icon set.

Project-specific runbook for deploying this repo's client to **https://ross-resume.vercel.app**. The reusable, project-agnostic version of this process is `docs/GENERIC_vercel-setup-guide.md` — read that for the general pattern; this file records the decisions and gotchas particular to *this* app.

| | |
|---|---|
| **Production URL** | https://ross-resume.vercel.app |
| **What deploys** | `client` only (the CRA React SPA) |
| **What does not deploy** | `server` (Express/Mongoose API) — see [The API question](#the-api-question) |
| **Framework** | Create React App (`react-scripts` 5.0.1) — **not** Next.js, so several steps in the generic guide don't apply |
| **Vercel Root Directory** | `.` — verified 2026-09-08 via `vercel project inspect ross-resume`. Deploys run from `client/`, which the CLI uploads as the project root, so the dashboard setting stays `.`. (An earlier note here warned it was still `RossResume/client`; it is not.) |
| **Build command** | `npm run build` |
| **Output directory** | `build` |
| **Vercel team** | Ross' projects (`team_zto3W0XY6pJlKVrefPQWVsUH`), scope `ross-projects-6e89abe8` |
| **Deploy method** | CLI only (`npx vercel --prod`) — no git integration |

---

## ⚠️ The `homepage` trap — read this first

`client/package.json` sets:

```json
"homepage": "https://teampaintbrush.github.io/Rossresume"
```

That exists for the GitHub Pages deploy, and it makes CRA build every asset path under **`/Rossresume/`**. Deployed to `ross-resume.vercel.app` unchanged, that means:

- every design showcase image (`src/data/portfolioData.js:30` builds paths from `process.env.PUBLIC_URL`)
- the headshot (`src/pages/Home/Home.js:274`)
- the favicon, apple-touch-icon, and `manifest.json` (`public/index.html`)

...all resolve to `ross-resume.vercel.app/Rossresume/...` and **404**. The page renders; the images silently don't.

**Fix (already applied).** `vercel.json` pins it via `build.env`, so it travels with the repo instead of depending on a dashboard setting someone can forget:

```json
"build": { "env": { "PUBLIC_URL": "/" } }
```

CRA gives `PUBLIC_URL` precedence over `homepage`, so this corrects the Vercel build **without breaking the GitHub Pages deploy**, which keeps using `homepage`. Both were re-verified after the change.

> Do **not** "fix" this by deleting `homepage` from `package.json` — that silently breaks `npm run deploy` to GitHub Pages. The two deploy targets need different base paths, and the env var is what keeps them independent.

---

## ⚠️ The router `basename` trap — fixed 2026-09-08

`App.js` previously hardcoded the GitHub Pages sub-path:

```jsx
<Router basename="/Rossresume">   // ← was this
```

React Router would then only match routes under `/Rossresume`, so on any other domain the app mounted and rendered **nothing** — a blank page, no error. `PUBLIC_URL` does not fix this; it's a separate hardcoded value.

Now derived from the same source as the asset paths, so it follows whichever target is building:

```jsx
<Router basename={process.env.PUBLIC_URL || '/'}>
```

Never hardcode a base path here again — it silently breaks every host but one.

---

## One-time setup

### 1. Install the CLI and log in

```bash
npx vercel --version
npx vercel login
```

### 2. Link the project

Run from the **client** directory, not the repo root:

```bash
cd client
npx vercel link
```

This writes `client/.vercel/project.json`. Confirm `.vercel` is gitignored before committing anything (the repo `.gitignore` does not currently list it — see `docs/open_task.md`).

### 3. Environment variables

`PUBLIC_URL` is already handled in `vercel.json` — nothing to set by hand for the current static deploy. The table below applies if the API is ever hosted.


Vercel dashboard → project → **Settings → Environment Variables**. Local `.env` files are never uploaded.

| Variable | Value | Environments | Why |
|---|---|---|---|
| `REACT_APP_API_URL` | *(see below)* | Production, Preview | Only if the API is hosted. Omit while the site is static-only. |

Environment variables are read at **build** time for CRA — adding one requires a redeploy to take effect.

### 4. Deploy

```bash
cd client
npx vercel --prod
```

Deploys upload directly from the CLI. **There is no git integration**, so the live site can drift from `main` without anyone noticing — treat deploying as an explicit step, not something a merge does for you.

### Post-deploy verification

Worth running after any deploy that touches paths or routing:

```bash
U=https://ross-resume.vercel.app
curl -s -o /dev/null -w "%{http_code}
" $U                          # 200
curl -s -o /dev/null -w "%{http_code}
" $U/portfolio                # 200 = SPA rewrite OK
curl -s -o /dev/null -w "%{content_type}
" $U/images/LeroyRoss.jpg  # image/jpeg, NOT text/html
```

That last one matters: a broken asset path returns the SPA fallback with a `200`, so status code alone will lie to you. Check the content type.

---

## Committed config

Both files live in `client/`:

- **`vercel.json`** — pins the CRA framework preset, build command, and output directory, and adds the SPA rewrite below. (The generic guide's "do NOT use a `vercel.json`" rule is a *Next.js* rule — it does not apply here.)
- **`.vercelignore`** — excludes `node_modules`, `build`, coverage, logs, and every `.env*` variant.

The SPA rewrite is what makes React Router work on deep links:

```json
"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
```

Without it, loading `ross-resume.vercel.app/portfolio` directly returns a 404 — Vercel looks for a file at that path. Rewrites run *after* the filesystem check, so real assets under `/images/...` are still served normally.

---

## The API question

`server` is **not** deployed. This has uneven consequences per feature:

| Feature | Behavior on Vercel today |
|---|---|
| Designs page | **Works** — renders from the local `portfolioData.js` module. A successful, non-empty API response can override it; a failed or empty one cannot blank the page (`docs/open_task.md` #7, resolved). |
| Portfolio page | **Works** — same pattern, same data module. |
| Contact form | **Works** — `handleSubmit` (`client/src/pages/Contact/Contact.js:20-26`) composes a `mailto:` and opens the visitor's mail client. It never calls the API. |

**Nothing visitor-facing depends on the API.** The server is optional, not missing — no page degrades without it.

Two ways forward, tracked as `docs/open_task.md` #2:

1. **Static-only (current).** Already the shipped state: pages read local data, the contact form is `mailto:`-based. Nothing further is required unless you want server-side features.
2. **Host the API.** Port `server/src` to Vercel Serverless Functions under an `api/` directory, or deploy the Express app somewhere separate and point `REACT_APP_API_URL` at it. Either way requires a hosted MongoDB (Atlas) and moving `MONGODB_URI` plus the SMTP credentials into Vercel environment variables. This buys a real contact-form inbox and CMS-editable content — weigh that against the `mailto:` flow, which costs nothing to run.

> **Corrected 2026-09-08.** This section previously said the contact form failed for visitors because `POST /api/contact` had no host. That stopped being true when the form moved to `mailto:`; the doc simply hadn't caught up.

---

## Subsequent deployments

```bash
cd client
npx vercel --prod
```

The CLI uploads directly — no `git push` required. Commit first anyway to keep the repo in sync (note the repo layout drift in `docs/open_task.md` #1 before committing).

GitHub Pages remains a separate, independent target via `npm run deploy`. Deploying to one does not update the other.

---

## Troubleshooting

| Symptom | Cause / fix |
|---|---|
| Images and favicon 404; page otherwise renders | `PUBLIC_URL` not set to `/` in Vercel. See the trap above. |
| Deep links (`/portfolio`, `/contact`) 404 on refresh | SPA rewrite missing from `vercel.json`. |
| Contact form does nothing on submit | It opens a `mailto:` link — check the visitor has a mail client registered for the protocol. It does **not** call the API. See [The API question](#the-api-question). |
| Build succeeds locally, fails on Vercel | Check the Root Directory. With CLI deploys run from `client/` it should be `.`; if the project is ever switched to git integration it must become `client`. |
| `Error: Not authenticated` | `npx vercel login` again. |
| Env var change had no effect | CRA reads env at build time — redeploy. |
