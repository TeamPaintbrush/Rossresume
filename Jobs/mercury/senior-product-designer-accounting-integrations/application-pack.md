# Application pack — Mercury Senior Product Designer, Accounting Integrations

Everything to submit, in one place. Fit ~8.7 / 10 (best of the four tracked roles, at the original
target score — résumé carries quantified outcomes). Screenshot status by case study, updated
2026-09-11: InsureBridge, Titan Couriers, and TOBA (4 of 5 slots closed with real screens — leader
workspace, permissions console, newsletter builder, leader-title admin; only the committees grid
stays coded, since no real screenshot of it exists) are fully or effectively real-screenshotted.
ReconcileIQ+TaxesByRoss and Well still lean on coded UI recreations for a couple of secondary
sections each (marked `REPLACE:` in the source HTML) — the primary showcase in all five is real.

## Package page

**https://claude.ai/code/artifact/074ef3c0-c366-4892-a1ca-e22a76cedc23** — a single page with the
pitch, the real metrics, all 5 case studies (each tagged with the JD line it answers), and all 3
PDFs viewable inline. Good candidate for the "Portfolio & Password" field on the application, or
to send directly. Case-study links point at `paintbrushmarketing.net/portfolio/brand/...` and will
404 until that site is deployed — source is `mercury.html` in this folder if it needs a rebuild.

## What to attach / link

| Item | Where it is | Notes |
|---|---|---|
| **Résumé** | The "Senior Product Designer" PDF from the résumé site (`ross-resume.vercel.app` → Download Resume → Senior Product Designer) | Product work first, live product links under each project. Not the Professional or Modern variant. |
| **Portfolio link** | `paintbrushmarketing.net` → `/use-cases` → "Product & Platforms" | Five product case studies. Say up front that the screens are in-progress recreations if they're not swapped for real screenshots yet. |
| **Decision record** | `decision-record-toba-consolidation.md` → export to PDF | 1-page product-design decision doc: the TOBA consolidation — problem, options, choice, what was cut, the three board objections, success measures. |
| **Live products** (in the résumé, also worth pasting into the application) | ReconcileIQ: `teampaintbrush.github.io/accountant-app` · TaxesByRoss: `taxprep-three.vercel.app` · TOBA: `toba-seven.vercel.app` · InsureBridge: `insurance-agency-pbm.vercel.app` · Titan: `titancouriers.com` · Well (open source, not Leroy's): `github.com/WellApp-ai/Well` | The **extraction-to-books pipeline** is the centerpiece — receipts → categorized, quarter-routed book entries → for nonprofits, an auto-filled Form 990. It's Mercury's literal problem statement, and the integration work is genuinely Leroy's (Well itself is not). |

## Cover note — the opening

> I'm not a designer learning accounting for this role. I've run a private tax practice since 2015 (150+ clients, contract Form 990 work for Trydent Consulting in Tallahassee), and I build the software I use — ReconcileIQ for account reconciliation, and the platform behind my own practice. I also built the pipeline that carries a client's documents all the way to the books: extraction (I customized the open-source Well tool for it), categorization into Schedule C lines, quarter routing, and — for nonprofits — an auto-filled Form 990 straight from the general ledger. That's close to the problem statement in this job description, and I know where the friction is because I live in it.
>
> Most recently I've been the product designer and builder for TOBA, a Tampa 501(c)(3)'s membership and committee-operations platform — working with the board as product owners through a monthly cadence and full-board reviews, delivering the written SOP and continuity documents, and navigating real stakeholder disagreement (data ownership, duplication, cost) to a shipped result.

## Real numbers, if asked about impact

- ReconcileIQ: reconciliation time **2–6 hours → under 90 minutes** (designing for accuracy tools first).
- TaxesByRoss: per-client quarterly processing **1–2 hours → 15–20 minutes**.
- TOBA: a **47-year-old organization with 500+ members** that had **no system to collect dues at all** before this platform.

## Interview prep

- `prep.md` — case-study angles, the "what PM/Eng/Research means" explainer, how to talk through redesigning an accounting flow.
- `fit-analysis.md` — the scorecard and the reasoning, criterion by criterion.
- Expect: "tell me about a time you disagreed with a stakeholder" → the three TOBA board objections. "Walk me through a product decision" → the TOBA consolidation (decision record). "How do you use AI without lowering craft" → the extraction-to-books pipeline: an AI extractor proposes, every row is categorized, quarter-assigned, and reviewed by a person before it touches the books; plus provider-routing and the where-AI-doesn't-belong rules. **Be precise that Well is open-source (WellApp.ai) and the integration is yours — don't say "I built Well."**

## The live application form — field by field

Confirmed live 2026-09-11 at `https://job-boards.greenhouse.io/mercury/jobs/6137654004`.

| Field | Required | What to put |
|---|---|---|
| First / Last Name | ✅ | Leroy / Ross |
| Email | ✅ | — |
| Country | ✅ | United States |
| Phone | ✅ | — |
| Resume/CV | ✅ | Senior Product Designer PDF (verified current) |
| **Portfolio & Password** | ✅ | One URL field, despite the name — `paintbrushmarketing.net/use-cases` |
| Visa sponsorship? | ✅ | No (confirm) |
| From where do you intend to work? | ✅ | **Tampa, FL** |
| Cover Letter | optional | `cover-letter.pdf` — ready |
| LinkedIn Profile | optional | `linkedin.com/in/ross711` |
| "Upload anything" | optional | `decision-record-toba-consolidation.pdf` — ready |

**Note:** the form has a reCAPTCHA — the final submit click has to be a real human action.

## Before you hit submit

- [x] Real product screenshots as the primary showcase in all five case studies — done 2026-09-11,
      updated 2026-09-11 (InsureBridge, Titan Couriers, and TOBA fully or effectively screenshotted;
      ReconcileIQ and Well still carry a couple of coded-mockup sections for secondary features,
      marked `REPLACE:` in each `.dc.html`).
- [x] Export `decision-record-toba-consolidation.md` to PDF — done.
- [x] Rewrite and export the cover letter — done (`cover-letter.md` / `cover-letter.pdf`).
- [x] Verify the Senior Product Designer PDF and the digital résumé site — both render clean, real metrics confirmed present in the PDF text.
- [x] Confirm the posting is live and find the apply URL — confirmed live, URL captured above.
- [ ] Regenerate `Leroy-Ross-Resume.docx` if a Word file is ever needed (pandoc isn't installed on this machine) — not required for this application, the ATS takes PDF.
- [ ] Grab the real Titan production app icon (currently a CSS stand-in) — cosmetic, not blocking.
- [ ] **You click Submit** — I can't clear the reCAPTCHA.
