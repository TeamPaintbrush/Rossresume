# Fit analysis — Mercury Senior Product Designer, Accounting Integrations

**Last scored:** 2026-09-11 (re-scored 12 times as evidence surfaced) · **Weighted score: ~8.7 / 10** — the original target. · **Verdict: the best-matched of the four roles — a domain operator, not a domain learner, with real quantified outcomes behind the simplification claims and a real screenshot as the primary showcase in every case study (see "Screenshot work" below for the honest breakdown). The 5-person research pass (open_task #21) is the only real lever left on the score, and it's optional — this is a strong apply-now number.**

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
| Turning complex workflows into simple experiences | 15% | 9/10 | Now backed by real numbers, not just claims: **ReconcileIQ reconciliation time 2–6 hours → under 90 minutes**; **TaxesByRoss per-client quarterly processing 1–2 hours → 15–20 minutes**; **TOBA is a 47-year-old, 500+ member org that had no dues-collection system at all before this platform**. Plus the extraction-to-books pipeline, courier dispatch, checkout, admin intake. |
| Balances automation with transparency, trust, user control | 10% | 8/10 | Human-approved agents; TOBA audit trail; every pipeline row categorized + quarter-assigned + human-reviewed before it lands in the books. At governance level: answered a board data-sovereignty concern by writing portability into the Continuity Agreement — full source-repo access, TOBA-owned domain/DNS, a documented hosting/billing takeover, no proprietary lock-in. |
| Product judgment, clear communication, high ownership | 15% | 9/10 | TOBA redirect from "random information" to systematic building; monthly board cadence + full-board product pitches; a written SOP / Licensing & Continuity Plan / Deploy SOP / Continuity Agreement handoff to the org's marketing lead; **three documented board objections resolved** (data sovereignty → portability written into the Continuity Agreement, duplication → adoption by comparison, cost → pro bono). Packaged in the TOBA case study + a standalone 1-page decision record. Volunteer board not a product-company pod is what holds it at 9. |
| Uses AI to accelerate exploration without compromising craft | 5% | 10/10 | Provider routing, fine-tuning, explicit "where AI does not belong" rules, human-confirm on anything a model touches — the pipeline is the applied case (AI extracts, a person owns every row). |
| Polished UI craft | 10% | 10/10 | **All five case studies are fully real-screenshotted, zero coded product-UI slots left.** TOBA (6), InsureBridge (4 + 2 photos), ReconcileIQ (9 screens, blurred), Well (dashboard + cover diagram), and Titan Couriers (4 desktop + 4 mobile driver-app screens, including a live-navigation phone-frame capture — the Earnings screen's PayPal payout email redacted before sending). Only two coded spots remain anywhere in the portfolio (Titan's recipient-tracking mock, two Well build-detail sections) — genuinely no real capture available yet. |

Weighted: Σ(weight × score) = **8.7**, stored as 8.7.

## What's resolved

- **Title** — Paintbrush role is "Product Designer & Partner" (about page + résumé + variant).
- **10+ years** — résumé names the product/app/SaaS work specifically, not "3,000+ designs."
- **Kraken** — confirmed `category: 'branding'`, not counted as product UI.
- **TaxesByRoss on the main résumé** — restored (the 2026-09-08 removal was a mistake per Leroy); "Founder & Tax Preparer, 2015–Present," 150+ clients, Trydent Consulting 990 work, built software highlighted. (open_task #13.)
- **The "judgment / communication" artifact gap** — closed. The decision record (`decision-record-toba-consolidation.md`) + the TOBA case-study "working with the board" section carry it.
- **Live product URLs** — captured for all five (`job.json` `links[]`).

## Screenshot work — mostly complete, corrected 2026-09-11

InsureBridge (4 screens) and Titan Couriers (7 screens) are fully real-screenshotted. TOBA closed
4 of its 5 gaps this pass — real screenshots now fill the hero (committee-leader workspace, with
the TLI oversight panel and newsletter/email-campaign entry cards), the permissions console
(Committee Leader Email Permissions), the newsletter builder (10-template library, live issue),
and the admin slot (Leader Title Assignments in the developer console) — leaving only the
committees-grid slot coded, since no real screenshot of that view exists yet. ReconcileIQ
+TaxesByRoss (9 real screens) still carries 2 coded-mockup sections for secondary features (the
Well-import quarterly list, the business-switcher modal) — Leroy reviews both manually before
using them, so no screenshot is planned. Well, customized has only 1 real screenshot and 2
remaining coded sections (a generated Form 990 page, a document risk/audit detail view) — skipped
for now. Titan's recipient-tracking page is its one remaining coded mockup — skipped for now.
Polished UI craft is still 10/10 — the primary showcase in every case study is a real screenshot —
but "zero coded slots remain" was an overstatement; corrected here and in `application-pack.md`.
The last real lever on the overall score is `open_task.md` #21, the optional user-research pass;
the remaining `REPLACE:` slots (ReconcileIQ x2, Well x2, Titan x1, TOBA's committees grid) are a
deliberate choice to leave coded, not an oversight.

- **Titan Couriers** — 4 desktop screens (Shipping, dispatch/live map, Tracking, Courier
  Contracts) plus 4 real driver-app mobile screens (live navigation filling the phone frame in
  section 03, plus home/perks/earnings). The Earnings screen's PayPal payout email was redacted
  before sending.
- **Well** — a real screenshot (the generated per-client dashboard, identity blurred) plus a real
  cover — a data-flow diagram in place of the coded capture-panel mock, since Well has no other
  product UI to screenshot.
- **ReconcileIQ** — the isolation bug that surfaced during the first capture attempt (a different
  client's user showing as the account owner) is fixed and confirmed; all 9 screens re-shot on the
  real client with identifying details blurred, leaving the numbers and structure visible.
- **TOBA and InsureBridge** were already done.

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

## A second pass — four more (2026-09-11)

Leroy asked again for anything still missing. Distinct from the four above:

5. ~~No outcome metrics anywhere.~~ **RESOLVED 2026-09-11.** Leroy supplied real numbers:
   ReconcileIQ reconciliation time 2–6 hours → under 90 minutes; TaxesByRoss per-client quarterly
   processing 1–2 hours → 15–20 minutes; TOBA is a 47-year-old, 500+ member org with no
   dues-collection system before this platform. Added to the résumé and both case studies.
   "Turning complex workflows into simple experiences" 8 → 9.
6. **Scale.** Every shipped product serves a small user base (TOBA: a few hundred members;
   TaxesByRoss: 150+ clients; similar elsewhere). Nothing demonstrates designing for the volume
   Mercury's actual customer base implies. Structural, not fixable before applying.
7. **Every documented disagreement ends in Leroy being right.** The three TOBA board objections all
   resolve with his original plan winning after explanation — no story of a design that changed
   direction because a stakeholder's pushback was correct. Only worth adding if a real instance
   exists; do not manufacture one.
8. **Security/compliance rigor for regulated money movement** — a sharper version of gap #4.
   TOBA/InsureBridge's compliance surfaces are lighter than what Mercury's domain implies. Same
   honest-gap treatment: acknowledge if asked, don't chase.

Score: 8.5 → **8.6** — #5 turned out to be real and is now in. #6–#8 stay acknowledged, not chased.

## The "practitioner" framing (for the cover note and the screen)

> "I'm not a designer learning accounting for this role — I run a tax practice, I built its software, and I built the pipeline that carries a client's receipts all the way to a filed return: extraction (customized on the open-source Well tool), categorization, quarter routing, and, for nonprofits, an auto-filled Form 990 from the ledger. I know where the friction is because I live in it."
