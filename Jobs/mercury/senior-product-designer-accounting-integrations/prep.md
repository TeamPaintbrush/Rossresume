# Prep — Mercury Senior Product Designer, Accounting Integrations

Working material for the two things that close the gap: **UI case studies** and a
**cross-functional (PM/Eng/Research) track record**.

> **Update 2026-09-09:** four projects surfaced that change the plan. You are not a
> designer *learning* accounting — you are a practicing tax preparer who *builds*
> accounting software.
> - **Well** (`Downloads/TaxesbyRoss/Well-main`) — a **published Chrome Web Store product**
>   that automates supplier-invoice retrieval across 100,000+ portals and pipes the data
>   into QuickBooks / Xero / UBL. Omnichannel capture, self-healing workflows, an AI invoice
>   extractor that builds financial dashboards, an AI receipt-fraud detector. **This is
>   Mercury's literal problem statement, shipped and public.** Make it the centerpiece.
> - **ReconcileIQ** (`accountant-app/`) — an account-reconciliation app you built, in daily
>   use by real bookkeeping clients including a Form 990 nonprofit. Reconciliation is the
>   other half of the JD.
> - **TaxesByRoss** (`Downloads/TaxesbyRoss/TaxesbyRoss`) — the software behind your own
>   operating tax practice: quarterly expenses, 1099 calculator, Form 1040-ES, data-repair
>   tooling, client exports.
> - **TOBA** (`TOBA/TOBA/`) — a live platform build for a Tampa 501(c)(3), board as product
>   stakeholders, 501(c)(3) compliance constraints. Your strongest cross-functional /
>   product-judgment evidence (see section 3).
>
> **Don't mock up an accounting flow on spec — you've shipped several.** The work is
> overwhelming; the gap is that none of it is packaged as a design case study.

---

## 1. UI case study ideas

Build 2, maybe 3. Each one: **problem → who it's for → current friction → your flows →
real screens → the decisions and tradeoffs → what you'd validate.** Real content only —
real names, real dollar amounts, real category labels. Do them in Figma (also lifts the
Figma criterion).

### A. Well — invoice automation (published)  ★ centerpiece
- **What it is:** a Chrome Web Store product that automates supplier-invoice retrieval
  across 100,000+ portals and exports the data to QuickBooks / Xero / UBL. Omnichannel
  capture (Gmail, WhatsApp, PDF), self-healing workflows, built-in validation, an AI
  invoice extractor that generates month-by-month financial dashboards, an AI
  receipt-fraud detector.
- **The angle:** Mercury's JD opens with "people bounce between their bank, accounting
  software, spreadsheets, receipts… to prepare transactions for their books." Well is a
  shipped, public, AI-native answer to exactly that. Publicly verifiable — the Chrome
  listing is real.
- **Show:** the capture → validate → export flow, the extractor's dashboard output, the
  fraud-detector's review state. The decisions: how you handle a portal that changed
  overnight (self-healing), how you show validation errors, where a human confirms vs.
  where it's automatic.
- **Mercury hook:** "I shipped a product that does the invoice-to-books job Mercury is
  building toward — here's how I designed the trust and automation boundaries."

### B. ReconcileIQ + TaxesByRoss — accounting tools by a practitioner  ★
- **What it is:** ReconcileIQ, an account-reconciliation app in daily use by real
  bookkeeping clients (incl. a Form 990 nonprofit); and TaxesByRoss, the software behind
  your own tax practice — quarterly expenses, 1099 calculator, data-repair tooling,
  client exports.
- **The angle:** you don't *learn* the domain — you operate in it. Reconciliation is the
  half of the JD Well doesn't cover, and framing it through your own practice is a
  differentiator nobody else has.
- **Show:** the reconciliation matching interaction and its exception states; the
  quarterly-expense model (quarter/year routing) and the data-repair flow. Real client
  data, anonymized.
- **Mercury hook:** "I build reconciliation and expense tooling as the person who uses it
  on real client books."

### C. TOBA — membership platform for a Tampa 501(c)(3)  ★
- **What it is:** a dues portal (payments, late fees, receipts), role-based committee
  portals with a leader/member permissions model, and a member directory — web, desktop,
  and mobile — built with the org's board as product stakeholders.
- **The angle:** cross-functional product work in a regulated domain. Stakeholder
  partnership, a permissions model, compliance constraints (audit trail, 501(c)(3)
  nonpartisan guardrails), and — from your own project notes — the moment you pulled a
  sprawling "too much random information" project back to systematic feature-by-feature
  building.
- **Show:** the committee-portal permissions model, the dues flow, and one screen of the
  member vs. leader view. The decision log: what the board asked for vs. what you shipped
  and why.
- **Mercury hook:** "worked with a board as product owners to ship a compliant,
  multi-role platform — here's how I brought clarity to it."

### D. InsureBridge — multi-portal enrollment platform
- **What it is:** a life-insurance enrollment platform connecting consumers, licensed
  agents, and carriers — three portals, one system.
- **The angle:** a regulated, multi-stakeholder workflow where three user types touch the
  same record.
- **Mercury hook:** "designed for three roles working the same data without stepping on
  each other."

### E. Titan Couriers — dispatch & tracking
- **What it is:** a medical-courier app for scheduling, dispatching, tracking
  time-sensitive deliveries.
- **The angle:** real-time, operator-facing, high-stakes. Complex logistics state made
  legible.
- **Show:** the dispatch board, a driver's run view, the live-tracking screen. The
  decision: what an operator needs at a glance vs. on tap.
- **Mercury hook:** "turned a messy real-time operations problem into a calm interface."

### F. Paintbrush checkout / subscription / quote system
- **What it is:** live PayPal checkout, subscription billing, an admin quote lifecycle,
  transactional emails.
- **The angle:** money-adjacent product design — trust, states, error handling.
- **Mercury hook:** "designed a payments flow that handles the unhappy paths."

**Recommended:** **A (Well) + B (ReconcileIQ / TaxesByRoss)** — those two alone cover
domain expertise, UI craft, AI-in-product, and automation-with-trust. Add **C (TOBA)** for
the cross-functional / product-judgment story. D–F are backups.

---

## 2. What "PM / Eng / Research" means

These are the three functions a product designer partners with day to day at a company:

| Function | Who they are | What they own | What the designer does with them |
|---|---|---|---|
| **PM** (Product Manager) | Owns *what* gets built and *why* | Prioritization, roadmap, requirements, success metrics, stakeholder alignment | Define the problem and scope together; negotiate what's in v1; agree how success is measured |
| **Eng** (Engineering / developers) | Build it | Feasibility, architecture, the component system in code | Pressure-test designs for what's cheap vs. expensive; hand off specs; work through edge cases and states together |
| **Research** (UX / User Research) | Talk to users | Interviews, usability tests, surveys, synthesis | Bring questions to test; watch sessions; let findings change the design |

**"No cross-functional team track record"** means: you've done every one of those jobs
*yourself* as a founder, but you haven't shown evidence of *collaborating across* them —
taking a PM's brief, arguing scope with an engineer, changing a design because research
said so, presenting to a room of stakeholders. A senior IC role at a company is mostly
that collaboration.

### Where TOBA fits

TOBA is the **strongest cross-functional evidence you have** — but it's partial:

| Leg | TOBA covers it? |
|---|---|
| **PM / stakeholders** | **Yes.** The board requests features, sets priorities, wants continuity assurances; you present at stakeholder meetings and "align the deck with reality." That's the product-owner relationship. Plus you designed for distinct user roles (member / committee leader / committee member / admin) with a real permissions model, inside 501(c)(3) constraints — regulated-domain product design, directly analogous to Mercury's banking-compliance framing. Your notes even show you doing the JD's "bring clarity to ambiguity" ("too much random information… not enough system building" → you redirect to feature-by-feature). |
| **Eng** | **Partial.** You're the builder. If Chris Bulter (Lead Developer & Partner) touched any TOBA feature, document that back-and-forth. Otherwise this leg is still thin. |
| **Research** | **Not yet — but easy to fix.** You have direct access to real TOBA members. Run 5 interviews, write a one-page findings doc, show one design that changed. |

**Resume line:** *"Product designer & lead — TOBA membership platform (Tampa 501(c)(3)).
Partner with the board as product stakeholders to define and ship a member dues portal,
role-based committee portals, and directory across web, desktop, and mobile, within
501(c)(3) compliance constraints."*

**Interview honesty:** "TOBA is my closest thing to cross-functional work — I partner with
a board as product owners in a regulated domain. What it doesn't have is a separate
engineering org or a research team, so I've [run my own member interviews / worked feature
X through with Chris]."

---

## 3. Building the PM / Eng / Research evidence

Ranked by how much each actually moves the needle:

### High impact

1. **Take one contract product-design engagement with a real team** (a startup, an agency,
   a friend's company) — even 4–8 weeks. One project with a PM and engineers you didn't
   employ is worth more than any amount of solo work for this specific gap.

2. **Run real user research now, on your own product.** Do 5 user interviews for
   InsureBridge or the content-ops tool. Write a one-page findings doc. Show one design
   that changed because of what you heard. This is legitimately *you doing research* and
   it's the cheapest leg to stand up. (Mercury's JD names Research as a partner.)

### Medium impact — reframe what already exists

3. **Document the Chris Bulter collaboration properly.** He's your Lead Developer & Partner
   — a real engineer partner. Pick one project, write it up honestly: you wrote the brief,
   he pushed back on feasibility, you negotiated the flow down, you shipped. That is a
   genuine design ↔ eng story with a named person.

4. **Reframe client engagements as PM partnerships.** On InsureBridge the client *was* the
   PM — they had requirements, priorities, constraints, a deadline. Say it that way:
   "partnered with the client's product owner to define scope and cut the enrollment flow
   from N screens to M based on their engineering lead's estimates." True, and it reads as
   cross-functional.

### Lower impact but real

5. **Contribute design to an open-source project.** Pick one with active maintainers
   (engineers) and real users. File an issue proposing a UX change, discuss the tradeoffs
   in the thread, produce the spec, hand it off. Public evidence of design ↔ eng
   collaboration with strangers.

**Honest framing for interviews:** don't claim years on a product team you didn't have.
Say: "I've run all three functions as a founder, which means I know exactly what a PM and
an engineer need from me — here's a project where I worked that way with [Chris / the
client / the OSS maintainers]."

---

## 4. "Redesign a real accounting flow as a spec piece" — how to do it

**You may not need this — you built ReconcileIQ.** Lead with that instead. But the method
below is still worth knowing: it's how you'd show *forward-looking* product thinking in an
interview ("here's how I'd extend this into Mercury's context"), and ReconcileIQ handles
reconciliation but not *categorization*, which is the other half of the JD.

Same method as the Tampa Bay Sun FC concept board: take one specific, painful task, show
how it works today, then design your version and explain the reasoning. It is not a full
product — it's a focused argument.

### Pick the flow: **transaction categorization**

Every business transaction needs a category (office supplies, meals, software, contractor
payment…) so the books are usable at tax time. Today a founder exports a CSV, opens
QuickBooks or a spreadsheet, and hand-tags hundreds of rows — dealing with rules, split
transactions, missing receipts, and no clear sense of what's left. It's the canonical
bookkeeping chore, it's high-volume, and **Mercury literally does this.** (Alternatives if
you want a different one: receipt-to-transaction matching, month-end reconciliation, 1099
vendor prep. Categorization is the strongest pick.)

### The six steps

1. **Name the user and the job.**
   *"A founder doing their own books, categorizing one month of Mercury transactions before
   handing off to their accountant."*

2. **Document the current state.** Screenshots or a written walkthrough of how this works
   today — in QuickBooks, in a spreadsheet, or in Mercury's current UI if it has one. Call
   out the friction *specifically*, not vaguely:
   - no bulk actions — every row is one at a time
   - categorization rules are buried in settings
   - splitting one transaction across two categories is 6 clicks
   - receipts live in a different tool
   - no view of "how many are left" or "which ones are uncertain"

3. **State your point of view** in one or two sentences.
   *"Categorization should feel like triage, not data entry — the system proposes, you
   confirm, and the exceptions surface themselves."*

4. **Design the flow — 3 to 5 screens**, real content throughout:
   - the **queue / inbox** view (not a spreadsheet-style table) — transactions grouped,
     each with a *proposed* category and a confidence indicator
   - a **bulk-confirm** interaction — "42 transactions look like Software — confirm all?"
   - the **rule-creation** moment — "Always categorize DigitalOcean as Software"
   - a **split** — one $1,200 charge → $900 Software + $300 Contractor
   - the **done / empty state** — "3 left, all low-confidence" then "You're caught up"

5. **Annotate the reasoning** on each screen:
   - why a queue instead of a table (triage, not entry)
   - why auto-categorize with visible confidence instead of hiding the guess
   - why a "review low-confidence only" filter is the default
   - what you deliberately left out (e.g. multi-currency, class tracking) and why

6. **Close with tradeoffs and validation.**
   *"I'm assuming most transactions are auto-categorizable with >90% confidence after the
   first month of rules. I'd test this with 5 founders on their real Mercury data before
   committing to the confidence-threshold model."*

### Deliverable

A Figma file plus a short write-up (like `SUNFC-CONCEPT-BOARD.md`): the problem, the
current-state friction, the POV, the screens with annotations, the tradeoffs. That single
piece lifts **Polished UI craft**, **Product judgment**, **Turning complex workflows
simple**, and **Figma ownership** at once — and it doubles as your best interview talking
point because it's literally their problem.
