# Later / Roadmaps

Last updated: 2026-09-08

Ideas and plans that are deliberately deferred — not scheduled, not forgotten. Keeping them here instead of in `open_task.md` (which is for things blocking current work) prevents them from being silently rediscovered or duplicated later. Feeds `docs/memory/memory.md` — see `docs/memory/GENERIC_MEMORY-GUIDE.md`.

## Deferred

| # | IDEA | WHY DEFERRED | LOGGED |
|---|---|---|---|
| 1 | Build the shared retrieval backend described in `docs/GENERIC_RAG.md` (embeddings, vector index, `rag/` service, per-project YAML config) | The `.ai/` file-based context store covers this project on its own. A vector backend only pays off across many projects with deeper history than this one has. | 2026-09-08 |
| 2 | Add a test suite and CI for the client | No tests exist and the project is content-driven rather than logic-heavy; not worth setting up until behavior stabilizes. Tracked as an open question in `open_task.md` #5. | 2026-09-08 |
| 3 | Move blog and portfolio content from `resumeData.js` into MongoDB and drive the pages from the API | Static data is what lets the client ship to GitHub Pages standalone. Only worth doing if the server gets a real host (`open_task.md` #2). | 2026-09-08 |
| 4 | Image optimization pass on `client/public/images/` (responsive sizes, modern formats) | Full-size JPEGs work today; a perf pass isn't blocking anything. | 2026-09-08 |
| 5 | Run the PII/personal-data leak audit per `docs/security/GENERIC_PII-SECURITY-AUDIT.md` | That guide wasn't copied into this repo's `docs/`. Would need to be brought over first; logged as scope in `open_task.md` #6. | 2026-09-08 |

## Roadmap (loose, not committed)

<!-- Ordered rough-priority list, not a sprint plan. Move items to open_task.md once they're actually being scheduled. -->

1. Settle the repo layout drift so the project can be committed cleanly (`open_task.md` #1).
2. Verify the `RossResume note.txt` content changes actually landed in `resumeData.js` (`open_task.md` #4).
3. Decide the server's fate — host it, or make the deployed site honestly static-only (`open_task.md` #2).
4. Image optimization pass.
5. Tests and CI, if the project ever justifies them.
