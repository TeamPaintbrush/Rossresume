Last updated: 2026-08-03

GENERIC CHANGELOG SYSTEM
+++++++++++++++++++++++++
A universal pattern for keeping a project changelog current automatically, driven by whichever AI coding agent is working in the repo (Claude Code, Copilot, Cursor, etc.). Works for any project type. Copy the pieces below into a new project to activate it.

+++ WHAT GETS COPIED +++

1. `docs/changelogs/CHANGELOG_TEMPLATE.md` -> copy to the new project's `docs/changelogs/CHANGELOG.md` (or project root `CHANGELOG.md` if the project doesn't use a `docs/` folder). This is the live, project-specific changelog file.
2. The "Changelog" instruction block below -> paste into the new project's `AGENTS.md` (and `CLAUDE.md` / `copilot-instructions.md` if the project has them — see `docs/technical/GENERIC_RAG.md` for the two-file prompt system).
3. The README pointer snippet below -> add to the new project's `README.md`.
4. The memory note below -> save it in the agent's persistent memory system if one is available (e.g. Claude Code's auto-memory), so the habit survives even in sessions that don't re-read `AGENTS.md`.

+++ WHY FOUR HOOKS +++

No single file is reliably read by every agent in every session. Redundancy is the point:

- `AGENTS.md` / `CLAUDE.md` — read at the start of most agent sessions in this repo; carries the instruction.
- `README.md` — read by humans and agents orienting to the project; makes the changelog discoverable.
- Persistent memory — survives across sessions even when context files aren't re-read; catches drift.
- The changelog file itself — has an `## [Unreleased]` section that acts as a visible "is this current?" check every time it's opened.

+++ CHANGELOG_TEMPLATE.md FORMAT +++

Based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Dates are `YYYY-MM-DD`. Entries group under `Added`, `Changed`, `Fixed`, `Removed`, `Deprecated`, `Security` — omit empty groups per release, but always keep `## [Unreleased]` at the top even when empty.

+++ AGENTS.md / CLAUDE.md INSTRUCTION BLOCK (paste verbatim) +++

```
## Changelog

This project keeps a changelog at `docs/changelogs/CHANGELOG.md` (Keep a Changelog format).

- Before finishing any task that changes behavior, fixes a bug, or adds/removes a feature, add a bullet under `## [Unreleased]` in the correct category (Added / Changed / Fixed / Removed / Deprecated / Security).
- Skip pure internal refactors, formatting-only changes, and doc typo fixes unless the user asks for an entry.
- Write entries for the person reading the changelog later, not for the diff — describe the effect, not the implementation.
- When the user says "cut a release" / "bump version", move the `[Unreleased]` entries under a new dated `## [x.y.z] - YYYY-MM-DD` heading and leave `[Unreleased]` empty above it.
- Never rewrite past entries to match new code — add a new entry instead.
```

+++ README.md POINTER SNIPPET (paste verbatim, adapt path if not using docs/) +++

```
## Changelog

See [docs/changelogs/CHANGELOG.md](docs/changelogs/CHANGELOG.md) for a dated history of notable changes. Updated as part of normal agent-assisted work — see `AGENTS.md`.
```

+++ MEMORY NOTE (save as a project-type memory in agents that support persistent memory) +++

```
This project maintains docs/changelogs/CHANGELOG.md (Keep a Changelog format). AGENTS.md instructs the agent to append an [Unreleased] entry before finishing any behavior-changing task. Keep doing this even in sessions that don't re-read AGENTS.md.
```

+++ ADAPTING TO A PROJECT WITHOUT docs/ +++

If the target project has no `docs/` folder, put the file at the project root as `CHANGELOG.md` and adjust the path in the instruction block, README snippet, and memory note accordingly. Everything else is unchanged.

+++ NOTES +++

- This guide and `CHANGELOG_TEMPLATE.md` stay generic — no project names, no business names.
- This repo (the GENERIC library itself) dogfoods the pattern: see `docs/changelogs/CHANGELOG.md`, the "Changelog" section in `AGENTS.md`, and the pointer in the root `README.md`.
