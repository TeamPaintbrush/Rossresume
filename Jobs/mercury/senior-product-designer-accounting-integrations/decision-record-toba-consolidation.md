# Decision record — Consolidating committee operations into one workspace

**Project:** TOBA Platform — a membership-operations platform for the Tampa Organization of Black Affairs, a 501(c)(3) run by volunteer committees
**Role:** Product designer + builder (pro bono)
**Stakeholders:** TOBA board (product owner) · committee-lead board member (monthly review) · full board (milestone presentations)
**Date:** 2026

*A one-page account of one product-design decision — the reasoning, the options, the tradeoffs, and how disagreement resolved. Written for a hiring audience; the full case study is at paintbrush's `/use-cases`.*

---

## Context

TOBA runs on volunteer committees. Each one tracked its work its own way — Google Docs, group texts, one chair's laptop. Dues were a spreadsheet chased by hand. When a chair rotated out, the files and the context left with them, and the board had no view across committees without emailing nine leaders. The board asked for "a system." My first pass tried to hold the whole organization at once and sprawled into notes with no structure — roughly two weeks with nothing shippable.

## The decision

Build **one shared workspace with role-scoped views** — not separate apps per committee, not separate logins per role — and ship it **one closed feature at a time**: the Membership Dues Portal fully, before starting the Committee Portal.

## Options considered

| Option | Case for it | Why not |
|---|---|---|
| **A — a mini-app per committee** | Each committee works exactly how it wants | Nine codebases for one volunteer to maintain; still no cross-committee view; institutional memory stays siloed |
| **B — one app, separate logins per role** (member / leader / admin) | Clean separation of concerns | Triples the surface area; a leader who is also a member juggles two logins; every feature built three times |
| **C — one workspace, one login, view re-scopes by role** *(chosen)* | One codebase; the org's real structure (committees × roles) becomes the information architecture; the board's cross-committee view falls out for free | Permissions logic is unforgiving — a member seeing another committee's data is a trust failure, and it has to be right the first time |

## Why C

The permissions risk is real but **containable**: I designed the model as an explicit member/leader/admin × action matrix *before* writing code, so the rules are auditable rather than emergent. The wins on the other side are structural and permanent — one sustainable codebase, and institutional memory that survives a chair rotation. One volunteer can carry one codebase; not nine.

## What I cut or deferred

- **Per-committee custom fields** — deferred. Standard work objects (tasks, files, notes, announcements) covered every committee's real needs in stakeholder review.
- **Real-time collaborative editing** — cut. The problem was *losing* work, not *co-editing* it.
- **Community Directory** — split into its own sub-product so it could never block the core.

## Objections raised, and how they resolved

- **Data sovereignty** *(Finance chair).* Concern: the organization's data and platform held by a third party. Rather than argue it, I put the answer in writing. **Outcome:** TOBA has full access to the source repositories (nothing hidden or locked), owns its domain and DNS, and has a documented procedure to take over hosting and billing at any time — plus a signed path to convert the license to full ownership. There's no proprietary lock-in: the platform runs on a free hosting tier with no database or server to hold hostage. The Continuity Agreement makes all of it enforceable rather than a promise.
- **Duplication** *(Youth Development chair).* Concern: why a new platform when an internal effort was already underway. I didn't push a switch — committees could stay on their current tools until the platform clearly did the job better. Adoption happened by comparison, not mandate.
- **Cost** *(Leadership Institute chair).* Concern: ongoing infrastructure cost. There is none — the build is pro bono, and the cost scope is written into the Continuity Agreement so it stays that way.

*The objections were rarely about the design — they were about control, duplication, and cost, and each resolved by addressing the concern underneath it.*

## How success is measured

- Share of committees with all active work in the system (target: 100% within two cycles)
- Dues collected with no manual chase (baseline: effectively all manual)
- Chair handoffs that need zero context-transfer meeting
- The board can answer "what's the status of committee X" without emailing anyone

## What I'd do differently

I lost two weeks to the "hold everything at once" phase. With a volunteer stakeholder group, ship one closed feature early to create a concrete reference point — an abstract roadmap doesn't get useful feedback from a board.

---

*Continuity: TOBA's marketing lead holds a written package — an SOP for the portals and content management, a Licensing & Continuity Plan, a Deploy & Dev SOP, and a formal Continuity Agreement (perpetual license, 30-day source-access process, DNS control, written cost scope, liability terms). The organization is never one person away from being stranded.*
