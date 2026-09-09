# Fit analysis — Mercury Senior Product Designer, Accounting Integrations

**Scored:** 2026-09-09 (updated ×3) · **Weighted score: ~7.5 / 10** · **Verdict: strongest of the four; a domain operator. Case studies take it to ~8.7**

> **Round 3 (2026-09-09):** Leroy surfaced **Well** — a *published* Chrome Web Store product
> that automates supplier-invoice retrieval into QuickBooks / Xero (Mercury's literal
> problem statement, AI-native) — plus **TaxesByRoss**, the software behind his own
> operating tax practice. He is a *practicing tax preparer who builds accounting software*,
> not a designer learning the domain. Score 6.8 → 7.5; "Learns domains" 8 → 9, "6+ yrs
> leading" 7 → 8, "complex → simple" 7 → 8. improvementPlan now leads with a **Well** case
> study. The product-designer résumé variant adds Well + TaxesByRoss. (TaxesByRoss was
> removed from the *main* résumé on 2026-09-08 — see open question below.)

Evidence base: résumé data + the full `paintbrush` production codebase (Next.js app with
~50 component families, auth, live PayPal checkout, subscription billing, admin dashboards,
transactional email system, cron jobs, and the `/prompt-system` Social Media Content Studio
internal tool — 18 React components + its own Express backend), plus the InsureBridge and
BlockCoinY product-UI projects in `portfolioData.js`.

## Scorecard

| Requirement | Weight | Score | Notes |
|---|---|---|---|
| 6+ yrs leading complex, end-to-end product design | 20% | 6/10 | Title now "Product Designer & Partner" at Paintbrush, 10+ yrs, multiple shipped products (InsureBridge 3-portal SaaS, BlockCoinY, Titan Couriers, the content-ops tool). No cross-functional org team (PM/Eng/Research) — caps it, doesn't sink it. |
| Thinks in systems & workflows, not screens | 15% | 8/10 | Data-driven architecture, derived galleries, Style Registry. |
| Learns domains obsessively | 10% | 8/10 | Logistics, compliance labeling, game design, AI infra. |
| Complex workflows → simple experiences | 15% | 7/10 | Courier dispatch, checkout, subscription, admin intake flows. |
| Automation w/ transparency & user control | 10% | 8/10 | "Human-approved, never auto-sends" recurs as a design principle in the code. |
| Product judgment, communication, ownership | 15% | 5/10 | Ownership obvious (founder); the *artifacts* that prove judgment — a decision log, a product brief, a case study that leads with the why — don't exist yet. |
| AI to accelerate exploration without compromising craft | 5% | 10/10 | Provider routing, fine-tuning, compositing pipelines, explicit guardrails. |
| Polished UI craft | 10% | 6/10 | InsureBridge (3-portal SaaS) and BlockCoinY are real product UI, but presented as one-line cards, not case studies with screens and a visible craft pass. **Kraken is a branding project, not product UI.** |

## What changed (2026-09-09 update)

Three corrections from Leroy, actioned:

1. **Title.** Paintbrush `aboutPageContent.js` role changed from "Digital Designer & Partner"
   to **"Product Designer & Partner"** (no collision — Alex Smith is listed as "Digital
   Marketer", not a designer). Résumé `title` reframed to "Product Designer & Creative
   Technologist · AI Design Automation" and the summary rewritten around shipped products.
   → "6+ yrs leading" 5 → 6.
2. **Kraken is not a product-UI case study.** It is `category: 'branding'` — "illustrated
   mascot identity, brand guidelines system, merch applications." The real product-UI
   evidence is **InsureBridge** ("full product UI case study", three portals) and
   **BlockCoinY** ("in-app wallet and holdings screens") — but both are one-sentence cards.
3. **10+ years.** Fair, and the résumé already says "Fifteen years / 3,000+ design
   projects". The reframe needed isn't the number — it's naming the *product/app/SaaS* work
   specifically instead of letting "3,000+ product designs" read as packaging.

## Gaps (revised)

1. No cross-functional team track record — solo/small-studio, no PM/Eng/Research partnership.
2. Real product UI (InsureBridge, BlockCoinY) is presented as portfolio cards, not case
   studies with flows, screens, and a visible craft pass.
3. No artifact that demonstrates product judgment — decision log, product brief, or a case
   study that leads with tradeoffs and the why.

## Raising this score (~6.8 → ~8)

Full detail in the `improvementPlan` block of `job.json`. The two criteria Leroy asked
about:

### Polished UI craft (6 → 8)

- **Build InsureBridge into a full case study** — problem, three user types, core flows,
  6–10 real screens, tradeoffs, outcome. Closest analog to Mercury's multi-role,
  regulated-domain accounting problem. Highest leverage.
- **Redesign a real accounting flow as a spec piece** (transaction categorization or
  receipt-to-books reconciliation), the way the Tampa Bay Sun FC concept board was built on
  spec — current-state friction, your model, 3–4 polished screens of dense financial UI.
- **Focused visual-craft pass on 4–5 product screens** — a real type scale, spacing system,
  empty/loading/error states, one data-dense table done properly. A small set that is
  genuinely tight beats a large portfolio that is merely fine.

### Product judgment, clear communication, high ownership (5 → 7)

- **Write a one-page decision log / product brief** for one shipped project (the
  `/prompt-system` content-ops tool is ideal): problem, options, choice + rationale, what
  was cut, success metric. Cheapest, highest-signal artifact.
- **Write up the "human-approved, never auto-sends" agent design** as a product-decision
  story — automation vs. user trust, and how the design resolved it. This is a literal JD
  bullet ("balances automation with transparency, trust, and user control").
- **Reframe résumé bullets** from "delivered X" to "decided X, owned the outcome, measured
  Y" — founder ownership is real but currently invisible.

Moves 3 and 5 (the two write-ups) are Small effort and worth doing this week regardless.

## Open question — TaxesByRoss on the main résumé

TaxesByRoss was **removed from the main résumé on 2026-09-08** (see the theme-overhaul
changelog entry). It's now added to the *product-designer variant* per Leroy's request,
but not the main résumé. Before finalizing: was the removal deliberate (e.g. "tax
preparer" muddying the "designer" positioning, or winding the practice down)? For *this*
role it's an asset; for a general résumé it may not be. Owner call.

## The "practitioner" framing (use it in the cover letter and screen)

> "I'm not a designer who's learning accounting for this role — I run a tax practice, I
> built its software, and I've shipped Well, a published product that automates the
> invoice-to-books problem Mercury is building toward. I know where the friction is because
> I live in it."
