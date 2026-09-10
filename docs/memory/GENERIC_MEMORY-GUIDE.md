Last updated: 2026-08-08

GENERIC MEMORY SYSTEM
+++++++++++++++++++++++++
A universal pattern for keeping one synthesized "brain" file (`memory.md`) current for any project, driven by whichever AI coding agent is working in the repo. `memory.md` is the single file an agent should read first at the start of a session — it exists so the agent doesn't have to re-read and re-derive context from every other file every time. Copy the pieces below into a new project to activate it.

+++ THE LOOP +++

`memory.md` is refreshed from six source files. Whenever any of them changes, `memory.md` gets a pass to stay in sync:

```
CHANGELOG.md               ─┐
README.md                  ─┤
open_task.md                ─┼──► memory.md ──► read first, every session
AGENTS.md                   ─┤
later_roadmaps.md           ─┤
Operational_Considerations.md ─┘
```

- `CHANGELOG.md` — what shipped and when (see `docs/changelogs/GENERIC_CHANGELOG-GUIDE.md`).
- `README.md` — what the project is and how it's structured.
- `open_task.md` — open decisions and investigations not yet resolved.
- `AGENTS.md` — conventions, rules, and pitfalls the agent must follow.
- `later_roadmaps.md` — deferred ideas and future plans not scheduled yet.
- `Operational_Considerations.md` — ops/infra posture and standing guardrails (see below).

`memory.md` itself is never the source of truth for any of these — it's a compressed pointer into them. If a source file and `memory.md` disagree, the source file wins and `memory.md` is stale and needs a refresh.

+++ WHAT GETS COPIED +++

1. `docs/memory/MEMORY_TEMPLATE.md` -> copy to the new project's `docs/memory/memory.md`. This is the live, project-specific brain file.
2. `docs/memory/OPERATIONAL_CONSIDERATIONS_TEMPLATE.md` -> copy to the new project's `docs/memory/Operational_Considerations.md`.
3. `docs/memory/LATER_ROADMAPS_TEMPLATE.md` -> copy to the new project's `docs/memory/later_roadmaps.md` (skip if the project already has an equivalent roadmap file elsewhere — just point the loop at it).
4. The "Memory" instruction block below -> paste into the new project's `AGENTS.md` (and `CLAUDE.md` / `copilot-instructions.md` if the project has them).
5. The README pointer snippet below -> add to the new project's `README.md`.
6. The memory note below -> save it in the agent's persistent memory system if one is available (e.g. Claude Code's auto-memory), so the habit survives even in sessions that don't re-read `AGENTS.md`.

+++ WHY SIX HOOKS +++

No single file is reliably read by every agent in every session, and `memory.md` itself is only useful if it stays synced. Redundancy is the point:

- `AGENTS.md` / `CLAUDE.md` — read at the start of most agent sessions in this repo; carries the instruction to read `memory.md` first and refresh it on drift.
- `README.md` — read by humans and agents orienting to the project; makes `memory.md` discoverable.
- Persistent memory — survives across sessions even when context files aren't re-read; catches drift the instruction files alone would miss.
- `memory.md` itself — has a "Last synced" line per source that acts as a visible staleness check every time it's opened.

+++ MEMORY_TEMPLATE.md FORMAT +++

One section per source file, each carrying its own "Last synced: YYYY-MM-DD" line (not one blanket date for the whole file — sources drift independently). Keep each section to a tight summary, not a copy of the source. Link to the source file rather than duplicating its content at length.

+++ OPERATIONAL_CONSIDERATIONS.md FORMAT +++

Two sections:

- **Ops & infra posture** — deployment targets, environment/secrets handling, known operational risks, rollback notes, monitoring/alerting gaps. Things that matter for running the project safely but don't belong in `CHANGELOG.md` (not a shipped change) or `open_task.md` (not an open question — it's known and standing).
- **Guardrails & standing decisions** — a running append-only list of constraints discovered during work (e.g. "never force-push main", "DB migrations require manual approval"). Append; never rewrite past entries — if a guardrail is lifted, add a new entry noting it superseded the old one instead of deleting the old one.

+++ AGENTS.md / CLAUDE.md INSTRUCTION BLOCK (paste verbatim) +++

```
## Memory

This project maintains `docs/memory/memory.md` — a synthesized snapshot of project state, meant to be read first every session, before opening the individual source files.

- memory.md is refreshed from six sources: `CHANGELOG.md`, `README.md`, `open_task.md`, `AGENTS.md`, `later_roadmaps.md`, and `Operational_Considerations.md`.
- Before finishing any task that materially changes one of those six files, check whether memory.md's corresponding section is now stale; update it in the same pass if so.
- Read memory.md first at the start of a session to avoid re-deriving context that's already been synthesized. Fall back to the individual source files only for detail memory.md doesn't carry.
- `docs/memory/Operational_Considerations.md` tracks ops/infra posture (deployment targets, secrets handling, monitoring gaps, rollback notes) and standing guardrails/decisions (e.g. "never force-push main"). Append to it — don't rewrite past entries.
- Never let memory.md drift more than one session behind its sources — treat a stale memory.md as a bug, not a formatting nicety.
```

+++ README.md POINTER SNIPPET (paste verbatim, adapt path if not using docs/) +++

```
## Memory

See [docs/memory/memory.md](docs/memory/memory.md) for a synthesized project snapshot — read it first when orienting to this project. It's kept in sync with `CHANGELOG.md`, `open_task.md`, `AGENTS.md`, `later_roadmaps.md`, and `Operational_Considerations.md` — see `docs/memory/GENERIC_MEMORY-GUIDE.md`.
```

+++ MEMORY NOTE (save as a project-type memory in agents that support persistent memory) +++

```
This project maintains docs/memory/memory.md, a synthesized snapshot refreshed from six sources (CHANGELOG.md, README.md, open_task.md, AGENTS.md, later_roadmaps.md, Operational_Considerations.md). Read memory.md first at the start of a session. Keep it in sync when any of the six sources changes, even in sessions that don't re-read AGENTS.md.
```

+++ ADAPTING TO A PROJECT WITHOUT docs/ +++

If the target project has no `docs/` folder, put the files at the project root (`memory.md`, `Operational_Considerations.md`, `later_roadmaps.md`) and adjust the paths in the instruction block, README snippet, and memory note accordingly. Everything else is unchanged.

+++ NOTES +++

- This guide and the three templates stay generic — no project names, no business names.
- This repo (the GENERIC library itself) dogfoods the pattern: see `docs/memory/memory.md`, `docs/memory/Operational_Considerations.md`, `docs/memory/later_roadmaps.md`, the "Memory" section in `AGENTS.md`, and the pointer in the root `README.md`.
