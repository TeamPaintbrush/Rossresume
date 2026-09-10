# Application pack — Mercury Senior Product Designer, Accounting Integrations

Everything to submit, in one place. Fit ~8.2 / 10 (best of the four tracked roles).

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

## The one honest caveat to get ahead of

The case studies on `/use-cases` currently show **recreations** of the product screens, not final screenshots — the real apps are behind client-data logins. If asked, offer a live walkthrough of any of the five, or send annotated screenshots.

## Interview prep

- `prep.md` — case-study angles, the "what PM/Eng/Research means" explainer, how to talk through redesigning an accounting flow.
- `fit-analysis.md` — the scorecard and the reasoning, criterion by criterion.
- Expect: "tell me about a time you disagreed with a stakeholder" → the three TOBA board objections. "Walk me through a product decision" → the TOBA consolidation (decision record). "How do you use AI without lowering craft" → the extraction-to-books pipeline: an AI extractor proposes, every row is categorized, quarter-assigned, and reviewed by a person before it touches the books; plus provider-routing and the where-AI-doesn't-belong rules. **Be precise that Well is open-source (WellApp.ai) and the integration is yours — don't say "I built Well."**

## Before you hit submit

- [ ] Swap real product screenshots into the five case studies (or add the "recreation" caveat to the intro).
- [ ] Export `decision-record-toba-consolidation.md` to PDF.
- [ ] Regenerate `Leroy-Ross-Resume.docx` if a Word file is needed (`pandoc Leroy-Ross-Resume.md -o Leroy-Ross-Resume.docx`). PDF is already current.
- [ ] Grab the real Titan production app icon if you want it in that case study (currently a CSS stand-in).
- [ ] Confirm the posting URL and capture it into `job.json` (`url` / `source` are still blank).
