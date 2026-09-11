# Fit analysis — Mercury Senior Product Designer, Accounting Integrations

**Last scored:** 2026-09-10 (re-scored 10 times as evidence surfaced) · **Weighted score: ~8.5 / 10** · **Verdict: the best-matched of the four roles — a domain operator, not a domain learner. Four of five case studies are now fully real; the Well pipeline diagram + Titan's driver-app shot are the last stretch to ~8.7.**

`job.json` is the source of truth for the live scorecard, verdict, strengths, gaps, and the improvement plan. This file is the narrative behind it.

## The one-line case

Leroy is a **practicing tax preparer since 2015 (150+ clients) who builds the accounting software he uses.** He built **ReconcileIQ** (account reconciliation, real bookkeeping clients incl. a Form 990 nonprofit) and **TaxesByRoss** (his practice's platform), and he **customized Well** — the open-source supplier-invoice extractor by WellApp.ai — into an extraction-to-books pipeline: a Schedule C category / quarter import bridge, per-client financial dashboards, a P&L backend, and a **Form 990 auto-fill** from a ReconcileIQ general ledger. That pipeline *is* Mercury's literal problem statement — transaction data to the books. Plus **TOBA** (a live 501(c)(3) platform, board as product owners), **InsureBridge** (3 portals / 11 products), and **Titan Couriers** (medical-courier ops).

**Note:** he did **not** author Well; he customized and integrated it. Earlier drafts said "built Well" — corrected everywhere (open_task #18).

## Scorecard (current — mirrors `job.json`)

| Requirement | Weight | Score | Why |
|---|---|---|---|
| 6+ yrs leading complex, end-to-end product design | 20% | 8/10 | 10+ yrs, "Product Designer & Partner", a deep bench of shipped products. No engineering partner / formal research is what keeps it at 8. |
| Thinks in systems & workflows, not screens | 15% | 8/10 | Data-driven architecture, Style Registry governance, the TOBA permissions matrix, and the extraction-to-books pipeline (line item → Schedule C category → quarter → reviewed book entry → filed 990). |
| Learns new domains until they can challenge experts | 10% | 9/10 | Doesn't learn accounting — runs a tax practice, does contract Form 990 work for Trydent Consulting (Tallahassee, via Christina Lynch, CEO), built his practice software, and customized the open-source Well extractor into it (Schedule C mapping, quarter routing, 990 auto-fill). |
| Turning complex workflows into simple experiences | 15% | 8/10 | The extraction-to-books pipeline turns a pile of receipts into categorized, quarter-routed book entries. Plus ReconcileIQ, courier dispatch, checkout, admin intake. |
| Balances automation with transparency, trust, user control | 10% | 8/10 | Human-approved agents; TOBA audit trail; every pipeline row categorized + quarter-assigned + human-reviewed before it lands in the books. At governance level: answered a board data-sovereignty concern by writing portability into the Continuity Agreement — full source-repo access, TOBA-owned domain/DNS, a documented hosting/billing takeover, no proprietary lock-in. |
| Product judgment, clear communication, high ownership | 15% | 9/10 | TOBA redirect from "random information" to systematic building; monthly board cadence + full-board product pitches; a written SOP / Licensing & Continuity Plan / Deploy SOP / Continuity Agreement handoff to the org's marketing lead; **three documented board objections resolved** (data sovereignty → portability written into the Continuity Agreement, duplication → adoption by comparison, cost → pro bono). Packaged in the TOBA case study + a standalone 1-page decision record. Volunteer board not a product-company pod is what holds it at 9. |
| Uses AI to accelerate exploration without compromising craft | 5% | 10/10 | Provider routing, fine-tuning, explicit "where AI does not belong" rules, human-confirm on anything a model touches — the pipeline is the applied case (AI extracts, a person owns every row). |
| Polished UI craft | 10% | 9/10 | Structured, on-brand case studies on `/use-cases`. **TOBA (6), InsureBridge (4 + 2 photos), Titan Couriers (4 screens), and ReconcileIQ (9 screens, blurred) are all real.** ReconcileIQ's isolation bug is fixed and every screen is now wired in with the business name, address, and owner/staff names blurred (dollar figures kept, per the TaxesByRoss precedent). Two small gaps left: Well's pipeline visual (a diagram, since it has no product UI) and one Titan driver-app mobile screen (held back for its own blur — a real PayPal email). Bumps to 10 once those land. |

Weighted: Σ(weight × score) = **8.45**, stored as 8.5.

## What's resolved

- **Title** — Paintbrush role is "Product Designer & Partner" (about page + résumé + variant).
- **10+ years** — résumé names the product/app/SaaS work specifically, not "3,000+ designs."
- **Kraken** — confirmed `category: 'branding'`, not counted as product UI.
- **TaxesByRoss on the main résumé** — restored (the 2026-09-08 removal was a mistake per Leroy); "Founder & Tax Preparer, 2015–Present," 150+ clients, Trydent Consulting 990 work, built software highlighted. (open_task #13.)
- **The "judgment / communication" artifact gap** — closed. The decision record (`decision-record-toba-consolidation.md`) + the TOBA case-study "working with the board" section carry it.
- **Live product URLs** — captured for all five (`job.json` `links[]`).

## The one remaining input

**The Well pipeline visual and one Titan driver-app screen — that's it.**

- **Well** — no product UI of its own; the plan is a data-flow diagram plus captures of what it produces (generated dashboard HTML, a filled Form 990 page, one audit JSON) and a terminal run of the import bridge.
- **Titan Couriers** — 4 real screens are in (Shipping, dispatch/live map, Tracking, Courier Contracts). One driver-app mobile screen is still pending — it shows a real PayPal payout email that needs blurring first.
- **ReconcileIQ is done.** The isolation bug that surfaced during the first capture attempt (a different client's user showing as the account owner) is fixed and confirmed; the practice re-shot all 9 screens on the real client, and rather than switch to demo data, Leroy chose to blur the identifying details — business name, address, owner/staff names — before publishing, leaving the numbers and structure visible.

TOBA and InsureBridge are done. This is the last stretch before "Polished UI craft" goes 7 → 8–9 and the role hits ~8.7.

## The "practitioner" framing (for the cover note and the screen)

> "I'm not a designer learning accounting for this role — I run a tax practice, I built its software, and I built the pipeline that carries a client's receipts all the way to a filed return: extraction (customized on the open-source Well tool), categorization, quarter routing, and, for nonprofits, an auto-filled Form 990 from the ledger. I know where the friction is because I live in it."
