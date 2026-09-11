# Interview notes — Mercury, Senior Product Designer (Accounting Integrations)

Working file. Add notes freely.

---

## Four talking points for JD lines the tracker flagged as gaps

### 1. "Define shared interaction patterns and visual language across [the] ecosystem"

**The honest framing:** I design a distinct visual language per project on purpose — TOBA,
InsureBridge, ReconcileIQ, Titan, and Well each get their own system. That's deliberate for
self-directed portfolio work: it demonstrates range across very different domains (nonprofit
governance, insurance, accounting, logistics) to an audience evaluating many projects at once. It
is not evidence I can't do the opposite — and I'm not going to rebuild five case studies into one
skin just to make a point a sentence can make.

**The proof I already have, when the ecosystem actually is one product family:** the ReconcileIQ +
TaxesByRoss case study's "One pipeline, receipt to close" section — I migrated TaxesByRoss's old
red-themed UI onto ReconcileIQ's shared design tokens, unifying three apps (Well-customized /
TaxesByRoss / ReconcileIQ) onto one system, "0% logic touched." That's the literal ask: one visual
language across a multi-surface ecosystem. Lead with that example directly if this comes up.

### 2. "Design leadership"

At Paintbrush Marketing I lead design direction for a 4-person creative team — reviewing work,
setting visual systems, and delivering 3,000+ client and in-house projects across ten years. Now on
the résumé (`resumeData.js` / `resumeVariants.js`, Paintbrush Marketing bullet). This doesn't close
the "no engineering/research partner" gap — that's a different axis — but it directly answers "have
you ever led other designers," which nothing in the case studies alone showed.

### 3. Operating inside someone else's design system, not just building your own

**OnlyDank** (real client: OnlyDank / Spindletap Beverages) is the counter-example — a **real,
in-market product sold in stores across Texas and other states**, not a concept or a pitch deck.
It already had a shipped product line, an established serif logotype, a restrained black/white/sand
can treatment, and real on-can copy before the work started. The job was matching and extending
that existing system, not inventing a new one. If asked "is this real or a concept," the answer is
unambiguous — checked live 2026-09-11: `onlydankofficial.com` is a working storefront with real
SKUs and prices ($35–$60), live "Add to Cart" checkout, wholesale available, billed under the legal
entity **ODK Brands LLC (DBA OnlyDank)**, and **Texas Hemp Manufacture & Retail Licenses #1817 &
#17083** printed in the footer. That's not the footprint of a concept — it's a company actually
selling and fulfilling orders. (Note: Tobacco_Cigars was considered for this too but is a
self-initiated/fictional concept brand, not a real client — don't use it here.)

### 4. Fintech/banking-specific domain exposure — the honest gap

**Say it straight, then bridge it:** "I haven't designed inside a regulated banking product
specifically — my domain depth is accounting and tax, not bank transaction rails or KYC/AML. What
transfers directly is the shape of the problem: the Well/ReconcileIQ extraction-to-books pipeline
is exactly Mercury's stated problem — a firehose of transactions turned into something legible and
categorized, with a human owning every row. I'd expect a ramp-up on Mercury's specific banking
compliance constraints, same as any senior hire moving domains, but the pattern-recognition is the
same work I've spent ten years doing." Don't over-apologize for this one — the accounting-domain
overlap is unusually strong for this role, which is what makes the banking gap minor.

### 5. "Do you have metrics on the impact of this?" — the honest gap

**Say it straight:** the simplification claims (one-click instead of days chasing invoices, drivers
finishing an hour earlier) are real but not instrumented — no before/after time-on-task, adoption,
or error-rate numbers. **Check first if any of these are actually true and just unwritten:**
ReconcileIQ reconciliation time before/after, TOBA dues-portal adoption rate, TaxesByRoss per-quarter
processing time per client. If a real number exists, say it. If not, the honest answer is "I
haven't formally measured it — that's part of what a research partner would change."

### 6. "How do you design for scale?" — structural gap, don't oversell

Every shipped product serves a small, known user base (TOBA: a few hundred members; TaxesByRoss:
150+ clients). Nothing demonstrates designing for the volume and edge-case diversity a company like
Mercury operates at. Don't claim scale experience you don't have — acknowledge it plainly if asked,
and pivot to the systems-thinking evidence that *would* transfer (the token-unification work, the
permissions model at TOBA).

### 7. "Tell me about a time you were wrong" — need a real answer, not a case study

Every documented disagreement (the three TOBA board objections) resolved with the original plan
winning after explanation. There's no case-study evidence of changing direction because a
stakeholder was right. **This needs a real, off-the-record example if one exists** — think of an
actual instance where a client or board member pushed back and you changed the design because they
had a point. Don't force one from the case studies; find a true one from memory.

### 8. Security/compliance rigor for regulated money movement

A sharper version of #4. TOBA and InsureBridge's compliance surfaces (nonprofit governance,
licensing) are lighter than fraud/AML-adjacent controls. Same treatment: acknowledge, bridge to the
audit-trail and human-in-the-loop work you've already built (ReconcileIQ's audit log, Well's risk
scoring) as the closest transferable evidence.

---

## My thoughts — and the question: "does customizing Well help me at Mercury?"

**Yes. It's arguably stronger than "I built a Chrome extension" would have been**, for three reasons Mercury actually cares about:

1. **It's their exact problem statement.** Mercury's JD: *"people bounce between their bank,
   accounting software, spreadsheets, receipts… to prepare transactions for their books."*
   My pipeline **is** that flow, running on real client books — receipt → extraction →
   Schedule C category → quarter → ledger → filed 990. Not a concept. Production.

2. **"Customized an open-source tool into a production workflow" is a systems-design signal,
   not a lesser one.** It shows I can evaluate an existing tool, find the seam (extraction is
   the easy 20%, the books are the other 80%), and build the integration layer that makes it
   real — import bridge, dedup, don't-overwrite-manual, roll-up to a filing. That's the
   judgment a Senior Product Designer on an integrations team needs.

3. **It's the cleanest honesty signal I have.** "I customized Well" told precisely is more
   credible than "I built Well" told loosely — and if anyone checks the Chrome Web Store, the
   honest version is the only one that survives. The AI framing reinforces it: the model reads,
   a person owns every row.

**The one risk:** don't undersell it into sounding like I just installed a plugin. The line to
hold in the interview is: *"Well does extraction. I built everything between extraction and a
filed return."*

---

## Quiz me — the case-study screens I need to be able to defend cold

A reviewer will pull up the case study and ask "walk me through this screen — why is it built
this way?" Be ready to answer without looking. One line per screen: **what it is** / **the design
decision** / **the trap it avoids**.

### ReconcileIQ

| Screen | What it is | The design decision | The trap it avoids |
|---|---|---|---|
| **Dashboard** | 4 stat cards (accounts, revenue, expenses, net P/L YTD) + Monthly Journal Activity bars + Account Status donut + recent entries | Lead with the P/L number, not a vanity count — the owner's first question is "am I making money" | A dashboard of activity metrics that never answers the money question |
| **Reconciliation history** | 9 monthly records: book vs bank balance, difference column, status (Reconciled / Discrepancy / Pending) | The *difference* gets its own column and the status word carries the color — you can scan a year and land on the one bad month (May, $60) in a second | Burying the discrepancy inside a detail view you have to open each row to find |
| **Trial Balance** | Every account: #, name, type, debit, credit | Account number + type visible on every row — an accountant reads by number, not just name | A pretty account list that a bookkeeper can't tie to the chart of accounts |
| **General Ledger** | Account picker + date range → entries with a **running balance** column | Running balance on every line, not just a period total — that's how you find where a balance went wrong | Showing net change only, forcing manual re-derivation |
| **Journal Entries** | Total / Draft / Posted / Voided cards, filters, double-entry list | Draft vs Posted vs Voided is a first-class state with its own count — an entry isn't "saved", it's in a lifecycle | Letting a half-finished entry silently affect the books |
| **Audit Trail** | "Immutable log of all system actions" — timestamp, action, entity, description, who | Period-locks and approvals are logged actions, not settings changes — the close process itself is on the record | An audit log that only tracks edits and misses "who closed August" |

### The pipeline (Well + what I built)
- **Well does**: portal retrieval, omnichannel capture, multi-model extraction, fraud check. Open source, WellApp.ai.
- **I built**: the import bridge (28 Schedule C categories, quarter from transaction date, additive + dedup by source file, never overwrites a manual row), the per-client financial dashboard, the P&L backend, the Form 990 auto-fill (ReconcileIQ ledger → filled 990 + Schedules A/B/D/I).
- **Risk score** (mine, on top of Well's fraud check): 0–100 from 4 signals — duplicate hash, amount vs vendor history, new vendor, unusual date. Above threshold → review queue with reasons named.
- **The one-liner**: "Well does extraction. I built everything between extraction and a filed return."

### Likely follow-ups to rehearse
- "How does a January payment for last year's work end up in the right period?" → quarter is assigned from the **transaction date**, not the import date.
- "What happens when you re-run the extractor on the same folder?" → additive, deduped by source file — nothing doubles.
- "Where's the human in this?" → every row is categorized, quarter-assigned, and reviewed before it books; uncertain items go to a review queue, not the totals; manual corrections are protected from re-import.
- "You designed this alone — how do you know it's right?" → I run the reconciliations myself; the software is shaped by using it on real client books every quarter. (Gap to acknowledge: no eng partner / formal research — the planned 5 user interviews close that.)

> **Status of these screens:** fixed and live in the case study. The first capture attempt showed
> a client-data-isolation bug (a different client's user appearing as the account owner) — that's
> fixed and confirmed. The re-shot screens are wired in with identifying details (business name,
> address, owner/staff names) blurred; dollar figures and layout stay visible.
>
> **If asked about the isolation bug in an interview:** it's a real find — running the software on
> live client books is exactly how you catch a cross-tenant leak that a spec review misses. Frame
> it as evidence of the operator's-eye QA, not as a weakness.

## Talking points / phrases to keep

-

## Questions to ask them

-

## Stories (STAR)

-
