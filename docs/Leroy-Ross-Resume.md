<!-- NOTE (2026-09-10): reworded "built Well" → "customized Well (open-source)"; AI language
     reframed as tool-not-replacement; Trydent Advisors → Trydent Consulting (+ Christina Lynch, CEO).
     Leroy-Ross-Resume.pdf + .docx are STALE vs this content — regenerate before sending.
       PDF:   npx md-to-pdf docs/Leroy-Ross-Resume.md
       DOCX:  pandoc docs/Leroy-Ross-Resume.md -o docs/Leroy-Ross-Resume.docx  (needs pandoc)
     The 3 client-side PDFs on the site (from resumeData.js) regenerate on download and are current. -->

# Leroy Ross

**Product Design · Product Designer & Creative Technologist · AI Design Automation**

Tampa, FL · lross@paintbrushmarketing.net · linkedin.com/in/ross711 · behance.net/Paintbrushmarketing · paintbrushmarketing.net

---

## Summary

Product designer and creative technologist, Product Designer & Partner at Paintbrush Marketing, and founder of a private tax practice (150+ clients) whose software I designed and built. I design and ship end-to-end products — an account-reconciliation app used by real bookkeeping clients, a life-insurance enrollment platform spanning three portals, a membership platform for a Tampa nonprofit, and a medical-courier logistics app — in React, Next.js, and Node, and I customize open-source tooling (Well, for supplier-invoice extraction) into the practice's workflow. AI is a tool in that workflow — it speeds the work up, a person still does it. Fifteen years and 3,000+ design projects across SaaS, mobile, and consumer brands, plus founder-level operating experience.

---

## Core Skills

**Creative & Design** — Brand identity and logo systems · Label & packaging design (energy drink, beer, wine, vape, supplement, cosmetic) · Multi-SKU packaging systems · 3D product mockups and renders · Web and UI/UX design · E-commerce storefronts (Shopify, Wix, WordPress)

**AI Tools & Automation** — Applied AI builds where the model assists a human step (GPT + image models, JSONL fine-tuning) · Assistive monitoring and publishing helpers (review-before-send, never auto-sends) · Browser automation (browser_use, Playwright, CDP) · LLM provider routing (OpenAI, Anthropic, DeepSeek) · Prompt engineering; AI used as a tool in the design workflow, not a replacement for it

**Marketing & Content** — SEO and conversion copywriting · Content strategy and short-form scriptwriting · Video and social marketing (80M+ views) · Social media branding and subscription content calendars · Google Ads and Meta campaigns

**Technical & Development** — React, Next.js, JavaScript, HTML/CSS · Node.js, Express, REST APIs, MongoDB · Python automation, scheduled tasks, run reporting · Git/GitHub, GitHub Pages, Vercel, Plesk · WordPress plugin development · Unreal Engine (blueprints, camera systems, AI spawns)

**Business & Strategy** — Founder of Paintbrush Marketing, the Titan Couriers App, and Rent & Relax USA · Client acquisition, pricing, and retainer management · Cross-industry operations (creative + logistics + finance) · Brand strategy consulting and workshops

---

## Experience

<!-- STALE below this line — this section still holds pre-2026-09-09 content and does not
     reflect the résumé repositioning. Re-sync from client/src/data/resumeData.js
     (and resumeVariants.js for the product-designer cut) before sending. -->

### Product Designer & Partner — Paintbrush Marketing
*Tampa, FL · 2015 – Present*

- Design and ship end-to-end products, client and in-house: ReconcileIQ (account reconciliation, real bookkeeping clients) — cut reconciliation time from 2–6 hours to under 90 minutes by designing for accuracy tools first; InsureBridge (a three-portal insurance-enrollment platform), a medical-courier logistics app, and internal operations tooling — problem definition through production-ready React/Next.js UI.
- Lead the TOBA membership platform for a 47-year-old Tampa 501(c)(3) with 500+ members: a dues portal (no system to collect dues existed before this), role-based committee portals with a permissions model, and a member directory across web, desktop, and mobile — partnering with the board as product stakeholders.
- Built an AI label generation system that turns a product brief into structured, compliance-aware label art using GPT, Midjourney/DALL-E, and OpenAI models fine-tuned on prior label sets.
- Lead design direction for a 4-person creative team, delivering 3,000+ design projects across SaaS, mobile, and consumer brands, including multi-SKU packaging systems and print-ready production files.
- Built assistive automation with human-in-the-loop guardrails (review-before-send, never auto-sends); shipped the full stack around the design work in React/Next.js and Node/Express.

### Founder & Tax Preparer — TaxesByRoss
*Tampa, FL · 2015 – Present*

- Run a private tax-preparation practice serving 150+ individual and small-business clients.
- Prepare Form 990 nonprofit filings on contract for **Trydent Consulting** (Tallahassee, FL), engaged through Christina Lynch, CEO.
- **Designed and built the practice's software end to end** (React/Vite + Express, AWS): quarterly expense tracking with quarter/year routing, a 1099 calculator, Form 1040-ES support, data-repair tooling, and Excel/PDF client exports — cut per-client quarterly processing from 1–2 hours to 15–20 minutes.
- Built **ReconcileIQ** (account reconciliation) and **fully customized Well** — an open-source supplier-invoice extraction tool — into the practice: an import bridge that maps line items to Schedule C categories and routes them by quarter, per-client financial dashboards, and a Form 990 auto-fill from the general ledger.
- Handle real client financial data with PII-safe storage, backups, and audit-minded record-keeping.

### Founder & Product Designer — Titan Couriers App · Rent & Relax USA
*Tampa, FL · 2016 – Present*

- **Titan Couriers App** (titancouriers.com/landing) — a medical-courier logistics app for scheduling, dispatching, and tracking time-sensitive medical deliveries.
- **Rent & Relax USA** (rentandrelax.vercel.app) — convenient, affordable community-event rentals like foldable chairs and recreational gear.
- Built the brand, product, CRM, pricing, and go-to-market for both ventures.

### Multi-Disciplinary Consultant — Freelance Design & Development
*Tampa, FL · 2010 – 2015*

- Provided branding, web design, packaging, and marketing services to a diverse small-business client base.
- Built responsive websites and e-commerce platforms; ran social campaigns with measurable ROI improvements.

### Field / Internet Consultant — American Marketing Association
*Tampa, FL · 2013*

- Advised small-business owners on building their brand with web-based tools — site builders, product marketing, and e-commerce setup.
- Guided clients on SEO, digital advertising, and internal company email systems as part of a complete online presence.

### Account Manager — Coca-Cola Refreshments
*Tampa, FL · 2005 – 2012*

- Managed sales and merchandising for an established customer base across an assigned territory, executing and closing every sales call against Coca-Cola's monthly priority list.
- Sold in incremental displays, equipment placements, and promotional programs, and ensured dealer compliance.
- Maintained inventory levels, company assets, and point-of-sale materials, holding each account to Coca-Cola's merchandising and brand-image standards.
- Met customer-service expectations through daily communication, problem resolution, and consistent follow-up.

---

## AI Tools & Automation

- **AI Label / Flat-Label Generator** — Structured product-label generation from a brief: GPT for copy and compliance zones, Midjourney/DALL-E for artwork, zone-based templates, and JSONL fine-tuning, with a React front end that renders labels live. *(React, OpenAI API, Midjourney, JSONL fine-tuning, Node.js)*
- **Etsy Monitor (assistive)** — Scheduled tool that checks shop state daily, flags new messages, reviews, and orders, drafts LLM replies for human approval (never auto-sends), reports revenue, and handles listing edits and store-wide sales on request. *(Python, Playwright/CDP, LLM router)*
- **Daily Multi-Platform Social Poster** — Unattended publishing to Behance, Dribbble, and Pinterest with pre/post dedup checks, calendar sync, per-platform guardrails, and run reporting. *(Python, browser automation, scheduler)*
- **Command Center Board** — Auto-generated project dashboard served on the local network, rebuilt on a schedule, with cross-project sync via file watchers and editor hooks. *(Node.js, Python)*
- **Browser-Automation Scraper Pipelines** — Real-Chrome-over-CDP scraping and auditing agents for market research and portfolio/link checks across Behance, Etsy, Pinterest, and Dribbble. *(browser_use, Playwright, Python)*
- **LLM Provider Router** — Task- and cost-aware routing across OpenAI, Anthropic, and DeepSeek, backed by a structured-data prompt library for creative automation. *(Python)*

---

## Selected Design Work

Full portfolio: behance.net/Paintbrushmarketing

- **Cafe Lumiere of Paris** — Old-world Parisian coffee brand identity and a four-roast stand-up-pouch packaging system.
- **Kraken / Skull Cracker** — Illustrated mascot identities and full brand-guideline systems for streetwear labels.
- **Grimm Gang / Virtus in Arduis / Kings Bud Beer** — Beverage brands and multi-SKU can systems with regulatory-ready label layouts.
- **InsureBridge** — Full-stack life-insurance SaaS: three portals, one brand, complete product UI case study.
- **BlockCoinY** — Crypto-trading platform UI/UX, landing through in-app screens, built as responsive HTML.
- **GameOver Energy** — Energy-drink brand plus a full Wix e-commerce storefront.
- **Fender Family Distillery** — Monogram-seal craft-beer identity across a six-pack carrier and bottle mockups.
- **Budweiser / The Simpsons** — Campaign and poster concepts: promo creative and cinematic character key art.

---

## Education

**Bachelor's in Design, Business and Marketing** — University of Tampa, College of Business · Tampa, FL · 2010

---

## Certifications

- Adobe Digital Experience Certification Program — RockU (2024)
- Google Digital Marketing Certification — Google (2023)
- Google Ads Certifications — Google (2023)
