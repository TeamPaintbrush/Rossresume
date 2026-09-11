# Fit analysis — Mercury Senior Product Designer, Accounting Integrations

**Last scored:** 2026-09-10 (re-scored 10 times as evidence surfaced) · **Weighted score: ~8.5 / 10** · **Verdict: the best-matched of the four roles — a domain operator, not a domain learner. Four of five case studies are now fully real; the Well pipeline diagram + Titan's driver-app shot are the last stretch to ~8.7.**

`job.json` is the source of truth for the live scorecard, verdict, strengths, gaps, and the improvement plan. This file is the narrative behind it.

## The one-line case

Leroy is a **practicing tax preparer since 2015 (150+ clients) who builds the accounting software he uses.** He built **ReconcileIQ** (account reconciliation, real bookkeeping clients incl. a Form 990 nonprofit) and **TaxesByRoss** (his practice's platform), and he **customized Well** — the open-source supplier-invoice extractor by WellApp.ai — into an extraction-to-books pipeline: a Schedule C category / quarter import bridge, per-client financial dashboards, a P&L backend, and a **Form 990 auto-fill** from a ReconcileIQ general ledger. That pipeline *is* Mercury's literal problem statement — transaction data to the books. Plus **TOBA** (a live 501(c)(3) platform, board as product owners), **InsureBridge** (3 portals / 11 products), and **Titan Couriers** (medical-courier ops).

**Note:** he did **not** author Well; he customized and integrated it. Earlier drafts said "built Well" — corrected everywhere (open_task #18).

## Scorecard (current — mirrors `job.json`)

| Requirement | Weight | Score | Why |
|---|---|---|---|
| 6+ yrs leading complex, end-to-end product design | 20% | 8/10 | 10+ yrs, "Product Designer & Partner", a deep bench of shipped products, and design leadership of a 4-person team across 3,000+ projects. No engineering partner / formal research is what keeps it at 8. |
| Thinks in systems & workflows, not screens | 15% | 8/10 | Data-driven architecture, Style Registry governance, the TOBA permissions matrix, and the extraction-to-books pipeline (line item → Schedule C category → quarter → reviewed book entry → filed 990). |
| Learns new domains until they can challenge experts | 10% | 9/10 | Doesn't learn accounting — runs a tax practice, does contract Form 990 work for Trydent Consulting (Tallahassee, via Christina Lynch, CEO), built his practice software, and customized the open-source Well extractor into it (Schedule C mapping, quarter routing, 990 auto-fill). |
| Turning complex workflows into simple experiences | 15% | 8/10 | The extraction-to-books pipeline turns a pile of receipts into categorized, quarter-routed book entries. Plus ReconcileIQ, courier dispatch, checkout, admin intake. |
| Balances automation with transparency, trust, user control | 10% | 8/10 | Human-approved agents; TOBA audit trail; every pipeline row categorized + quarter-assigned + human-reviewed before it lands in the books. At governance level: answered a board data-sovereignty concern by writing portability into the Continuity Agreement — full source-repo access, TOBA-owned domain/DNS, a documented hosting/billing takeover, no proprietary lock-in. |
| Product judgment, clear communication, high ownership | 15% | 9/10 | TOBA redirect from "random information" to systematic building; monthly board cadence + full-board product pitches; a written SOP / Licensing & Continuity Plan / Deploy SOP / Continuity Agreement handoff to the org's marketing lead; **three documented board objections resolved** (data sovereignty → portability written into the Continuity Agreement, duplication → adoption by comparison, cost → pro bono). Packaged in the TOBA case study + a standalone 1-page decision record. Volunteer board not a product-company pod is what holds it at 9. |
| Uses AI to accelerate exploration without compromising craft | 5% | 10/10 | Provider routing, fine-tuning, explicit "where AI does not belong" rules, human-confirm on anything a model touches — the pipeline is the applied case (AI extracts, a person owns every row). |
| Polished UI craft | 10% | 9/10 | Structured, on-brand case studies on `/use-cases`. **TOBA (6), InsureBridge (4 + 2 photos), Titan Couriers (4 screens), and ReconcileIQ (9 screens, blurred) are all real.** Well now has a real screenshot (its generated per-client dashboard, identity blurred) and a real cover — a data-flow diagram (Receipt → Well extracts → risk score → import bridge → the books → Form 990) in place of the coded capture-panel mock, since Well has no other product UI. One gap left: a Titan driver-app mobile screen, held back for its own blur (a real PayPal email). Bumps to 10 once that lands. |

Weighted: Σ(weight × score) = **8.45**, stored as 8.5.

## What's resolved

- **Title** — Paintbrush role is "Product Designer & Partner" (about page + résumé + variant).
- **10+ years** — résumé names the product/app/SaaS work specifically, not "3,000+ designs."
- **Kraken** — confirmed `category: 'branding'`, not counted as product UI.
- **TaxesByRoss on the main résumé** — restored (the 2026-09-08 removal was a mistake per Leroy); "Founder & Tax Preparer, 2015–Present," 150+ clients, Trydent Consulting 990 work, built software highlighted. (open_task #13.)
- **The "judgment / communication" artifact gap** — closed. The decision record (`decision-record-toba-consolidation.md`) + the TOBA case-study "working with the board" section carry it.
- **Live product URLs** — captured for all five (`job.json` `links[]`).

## The one remaining input

**One Titan driver-app screen — that's the whole remaining list.**

- **Well** is done: a real screenshot (the generated per-client dashboard, identity blurred) plus a real cover — a data-flow diagram in place of the coded capture-panel mock, since Well has no other product UI to screenshot.
- **Titan Couriers** — 4 real screens are in (Shipping, dispatch/live map, Tracking, Courier Contracts). One driver-app mobile screen is still pending — it shows a real PayPal payout email that needs blurring first.
- **ReconcileIQ is done.** The isolation bug that surfaced during the first capture attempt (a different client's user showing as the account owner) is fixed and confirmed; the practice re-shot all 9 screens on the real client, and rather than switch to demo data, Leroy chose to blur the identifying details — business name, address, owner/staff names — before publishing, leaving the numbers and structure visible.

TOBA and InsureBridge are done. Polished UI craft is already 9/10 — the last real lever on the
overall score is `open_task.md` #21, the user-research pass.

## A closer read of the JD, beyond the tracked gaps (2026-09-11)

Auditing every JD line against the scorecard turned up four more gaps, each tied to a specific
bullet — and, for three of them, an answer that was already sitting in the portfolio unused:

1. **"Define shared interaction patterns and visual language across [the] ecosystem"** — Leroy's
   five case studies each use a deliberately different visual language (portfolio-range by design).
   That's not evidence he can't unify a system — the ReconcileIQ + TaxesByRoss case study already
   shows exactly this: three apps (Well-customized / TaxesByRoss / ReconcileIQ) migrated onto one
   shared token set, "0% logic touched." Talking point, not a rebuild.
2. **"Design leadership"** — had zero evidence. Fixed: Leroy leads design direction for a **4-person
   creative team** at Paintbrush Marketing across 3,000+ delivered projects. Now on the résumé.
3. **Operating inside someone else's design system** — every case study was "built from zero."
   **OnlyDank** (real client: OnlyDank/Spindletap Beverages) is the counter-example — a **real
   product sold in stores across Texas and other states**, not a concept, with an existing logotype,
   can treatment, and brand voice that the work extended rather than replaced. The case study's meta
   bar, overview, and CTA now all say so explicitly (a `STATUS: Live — on shelves` field was added).
   (Tobacco_Cigars was considered and dropped — it's a self-initiated fictional concept, not a real
   client, so it doesn't count as this kind of evidence.)
4. **Fintech/banking-specific domain exposure** — genuinely absent. Not fixable before applying;
   logged as an honest interview answer (see `interview-notes.md`) rather than something to chase.

Score unchanged at 8.5 — #1–#3 strengthen the existing scores' defensibility rather than raising
them further; #4 stays an acknowledged gap.

## The "practitioner" framing (for the cover note and the screen)

> "I'm not a designer learning accounting for this role — I run a tax practice, I built its software, and I built the pipeline that carries a client's receipts all the way to a filed return: extraction (customized on the open-source Well tool), categorization, quarter routing, and, for nonprofits, an auto-filled Form 990 from the ledger. I know where the friction is because I live in it."
