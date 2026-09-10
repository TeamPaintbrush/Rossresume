# Vercel Deployment Setup Guide

A repeatable step-by-step reference for connecting a Next.js app to Vercel and deploying from the CLI, including the fixes needed when the app lives inside a monorepo subdirectory.

---

## Prerequisites

- Node.js 18+ installed
- A Vercel account at [vercel.com](https://vercel.com)
- The app is a Next.js project (App Router or Pages Router)
- The project may live in a subdirectory (e.g. `my-repo/my-app/`) rather than the repo root

---

## 1. Install the Vercel CLI

Use `npx` — no global install needed:

```bash
npx vercel --version
```

---

## 2. Log in to Vercel

```bash
npx vercel login
```

Choose your preferred login method (GitHub, email, etc.) and complete the browser prompt. Your credentials are stored locally for subsequent commands.

---

## 3. Navigate to the app directory

Always run Vercel CLI commands from the **app root** — the folder that contains `package.json` and `next.config.ts/js`. If the app is in a subdirectory of your repo, `cd` into it first:

```bash
cd path/to/my-app
```

---

## 4. Link the project to Vercel

```bash
npx vercel link
```

This creates a `.vercel/project.json` file in the app directory with your `projectId` and `orgId`. It only needs to be run once per machine per project.

> **Tip:** Add `.vercel` to your `.gitignore` if the project IDs should not be committed.

---

## 5. Configure `.vercelignore`

Create a `.vercelignore` in the app directory to exclude build artifacts, local env files, and any folders that shouldn't be uploaded:

```
node_modules
.next
out
build
dist
*.log
*.local
.env.local
.env.development.local
.env.test.local
.env.production.local
```

For apps with local desktop/native builds, also exclude those output folders (e.g. `electron/`, `release/`).

---

## 6. Fix `next.config.ts` for monorepo subdirectory deployments

When the Next.js app is **not at the repo root**, the default `outputFileTracingRoot` points up to the repo root, which causes a Vercel build error like:

```
Error: ENOENT: no such file or directory ... path0/path0
```

Fix: skip `outputFileTracingRoot` when running on Vercel (Vercel sets the `VERCEL` environment variable automatically):

```ts
// next.config.ts
const nextConfig: NextConfig = {
  // Only set outputFileTracingRoot locally (for standalone Docker builds, etc.)
  // Skip it on Vercel — it causes path resolution errors in subdirectory monorepos
  ...(!process.env.VERCEL ? { outputFileTracingRoot: join(__dirname, "..") } : {}),
};
```

> If you don't use `outputFileTracingRoot` at all (i.e. you never build a standalone output), you can simply omit this line entirely.

---

## 7. Do NOT use a `vercel.json`

Let Vercel auto-detect the framework. Providing a `vercel.json` in a Next.js app directory can conflict with Vercel's built-in Next.js preset and cause build failures.

If you previously had a `vercel.json`, remove it:

```bash
git rm vercel.json
git commit -m "remove vercel.json - let Vercel auto-detect Next.js"
```

---

## 8. Set environment variables on Vercel

Local `.env.local` files are **not uploaded** (they're in `.vercelignore`). Add any required secrets through the Vercel dashboard:

1. Go to your project → **Settings → Environment Variables**
2. Add each key/value pair for `Production`, `Preview`, and/or `Development` as needed
3. Redeploy after adding variables — they are only picked up on the next build

Common variables to set:
- Any `NEXT_PUBLIC_*` values (API keys, public URLs)
- Auth secrets, database connection strings
- Third-party service keys (AWS, Stripe, etc.)

---

## 9. Deploy to production

From the app directory:

```bash
npx vercel --prod
```

Vercel will:
1. Upload your source files (respecting `.vercelignore`)
2. Run `next build` in the cloud
3. Deploy to your production domain
4. Print an **Inspect URL** and the live **Production URL**

---

## 10. Subsequent deployments

Every future deploy is the same one-liner from the app directory:

```bash
cd path/to/my-app
git add -A
git commit -m "your commit message"
npx vercel --prod
```

> The deploy does not require a `git push` — Vercel CLI uploads directly. But committing first keeps your repo in sync.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| `Error: Not authenticated` | Run `npx vercel login` again |
| `path0/path0` ENOENT build error | Add the `VERCEL` env guard around `outputFileTracingRoot` (see Step 6) |
| Build picks up wrong Next.js version | Check `engines.node` in `package.json` and set Node version in Vercel project settings |
| Environment variables missing at runtime | Add them in Vercel dashboard → redeploy |
| Deploy succeeds but app crashes | Check Function logs in the Vercel dashboard Inspect URL |
| Old `vercel.json` conflicting | Remove the file and redeploy (see Step 7) |

---

## File checklist

```
my-app/
├── .vercel/
│   └── project.json        ← created by `vercel link`, links to Vercel project
├── .vercelignore           ← exclude build artifacts and local env files
├── next.config.ts          ← VERCEL env guard on outputFileTracingRoot
├── package.json
└── (no vercel.json)        ← intentionally absent; let Vercel auto-detect
```

---

## Non-Next.js apps (Create React App, Vite, other SPAs)

Steps 6 and 7 above are **Next.js-specific**. For a client-rendered SPA, replace them with the following.

### Use a `vercel.json` — the "no vercel.json" rule does not apply

That rule exists because a `vercel.json` can conflict with Vercel's built-in *Next.js* preset. For an SPA, a small `vercel.json` in the app directory is the normal way to pin the build and handle routing:

```json
{
  "framework": "create-react-app",
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Adjust `framework` and `outputDirectory` per toolchain (Vite: `"vite"` / `"dist"`).

### Add the SPA rewrite or client-side routes will 404

A client-side router owns paths that don't exist as files on disk. Without the rewrite above, loading `/some/route` directly — or refreshing on it — returns a 404, because Vercel looks for a file at that path. Rewrites run **after** the filesystem check, so real static assets are still served normally.

This is the single most common "works locally, broken in production" SPA bug.

### Watch for a hardcoded base path

A SPA configured for a sub-path host (e.g. GitHub Pages project sites) carries that base path in its build config — CRA's `homepage` field in `package.json`, Vite's `base` in the config file. Deployed to a Vercel domain unchanged, every asset resolves under that stale prefix and 404s. The page renders; images, icons, and the manifest silently don't.

Fix with an **environment variable override rather than by deleting the field**, so both deploy targets keep working:

| Toolchain | Build config | Env override to set on Vercel |
|---|---|---|
| Create React App | `homepage` in `package.json` | `PUBLIC_URL=/` |
| Vite | `base` in `vite.config.*` | `BASE_URL` / a project-specific env var read by the config |

Deleting the base-path field instead will silently break the other deploy target.

### Environment variables are read at build time

Client-side bundlers inline env values into the bundle during the build (`REACT_APP_*` for CRA, `VITE_*` for Vite). There is no runtime lookup — **adding or changing a variable requires a redeploy**, and any value placed in one is publicly visible in the shipped bundle. Never put a secret in a client env var.

### A separate backend does not come along

Only the app directory deploys. If the SPA calls an API that lives elsewhere in the repo, those calls will 404 in production until the backend is hosted somewhere and the client is pointed at it. Local dev proxies (CRA's `proxy` field, Vite's `server.proxy`) work only in development and mask this until deploy.

---

## Per-project deployment runbooks

Keep this guide generic. Record project-specific details — production URL, root directory, environment variable values, deploy-time gotchas — in a per-project runbook under `docs/deployment/`, and link back to this guide for the general process.

## Team Settings

Record the Vercel team name, team URL, and team ID in the project's own runbook under `docs/deployment/` — they are account-specific, not part of this reusable guide.

```
Team Name:  [team-name]
Team URL:   [team-url]
Team ID:    [team-id]
```