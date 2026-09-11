# Interview notes — Mercury, Senior Product Designer (Accounting Integrations)

Working file. Add notes freely.

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

> **Status of these screens:** the ReconcileIQ captures were pulled — they showed a real client
> (Murray's Tire Service) and a client-data-isolation bug (a different client's user showing as the
> owner). Being re-captured on the Acme Corp LLC demo business after the isolation fix. The design
> points above still hold — they're about how the screens are built, not the data in them.
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
