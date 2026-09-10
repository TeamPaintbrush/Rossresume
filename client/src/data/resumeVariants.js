import { resumeData } from './resumeData';

// ───────────────────────────────────────────────────────────────
// Role-targeted résumé variants.
//
// Same person, same facts — reframed for a specific kind of role. The
// Senior Product Designer variant leads with shipped products, foregrounds
// product-design and design-technology skills, and pushes packaging/marketing
// to a supporting role. Everything that doesn't change (contact details,
// education, certifications) is spread in from `resumeData`.
//
// Consumed by `SeniorProductDesignerResumePDF.js` and, later, a variant
// switch on the Home page.
// ───────────────────────────────────────────────────────────────

export const productDesignerResume = {
  ...resumeData,

  personal: {
    ...resumeData.personal,
    discipline: 'Product Design',
    title: 'Senior Product Designer · Design Technologist',
  },

  summary: `Product designer who ships end to end — from problem framing through polished, production-ready UI — and a practicing tax preparer who builds the accounting software he uses. Ten-plus years designing and building web, mobile, and SaaS products: ReconcileIQ, an account-reconciliation app used by real bookkeeping clients; a life-insurance enrollment platform spanning three user portals; and a membership platform for a Tampa 501(c)(3) built with its board as product stakeholders. I also customize open-source tooling into the practice — Well, for supplier-invoice extraction, wired into the books with a category/quarter import bridge and a Form 990 auto-fill. I think in systems and workflows, not screens, work fluently in Figma and in React, and treat AI as a tool in the workflow — it speeds up the work, it doesn't do it. Product Designer & Partner at Paintbrush Marketing.`,

  // Product work first — this is the point of the document.
  topProjects: [
    {
      name: 'Well, customized — extraction-to-books pipeline',
      description:
        'Well is an open-source supplier-invoice/receipt extraction tool (WellApp.ai). I customized it into the tax practice: an import bridge that expands each extracted line item, maps it to one of 28 Schedule C categories, assigns the quarter by transaction date, and writes it into the client’s books — additive only, deduplicated by source file, never overwriting a hand-entered row. The same extracted data drives per-client financial dashboards and an auto-filled Form 990 (general ledger in, completed 990 PDF + Schedules A/B/D/I out). The extraction is a tool; a person reviews and owns every row.',
      tech: ['Open-source integration', 'Python', 'Schedule C mapping', 'DynamoDB', 'Form 990'],
      link: 'https://github.com/WellApp-ai/Well',
    },
    {
      name: 'ReconcileIQ — Account Reconciliation App',
      description:
        'A reconciliation product — dashboard, guided reconciliation, reusable templates, and reporting — in daily use by real bookkeeping clients, including a Form 990 nonprofit. Dense financial tables with proper empty, loading, and error states.',
      tech: ['React', 'TypeScript', 'Zustand', 'Recharts', 'Vite'],
      link: 'https://teampaintbrush.github.io/accountant-app/',
    },
    {
      name: 'TaxesByRoss — Tax-Practice Platform',
      description:
        'The software behind an operating tax practice: quarterly expense tracking with quarter/year routing, a 1099 calculator, Form 1040-ES support, data-repair tooling, and Excel / PDF client exports. Designed and built for real client work, with real client data.',
      tech: ['React', 'Vite', 'Express', 'AWS DynamoDB'],
      link: 'https://taxprep-three.vercel.app/',
    },
    {
      name: 'TOBA — Membership Platform (Tampa 501(c)(3))',
      description:
        'A dues portal with payments, late fees, and receipts; role-based committee portals with a leader/member permissions model; and a member directory — across web, desktop, and mobile. Designed with the board as product stakeholders: a monthly review cadence, full-board product presentations, a written SOP + continuity-agreement handoff, and three board objections navigated to resolution — inside 501(c)(3) compliance constraints (audit trail, nonpartisan guardrails).',
      tech: ['Next.js 15', 'React Native', 'Electron', 'Vercel'],
      link: 'https://toba-seven.vercel.app/',
    },
    {
      name: 'InsureBridge — Enrollment Platform',
      description:
        'A life-insurance enrollment platform connecting consumers, licensed agents, and carriers — three portals and 11 insurance products on one system, a regulated multi-role workflow with one warm brand across all of it.',
      tech: ['React', 'Full-stack', 'Product UI'],
      link: 'https://insurance-agency-pbm.vercel.app/',
    },
    {
      name: 'Titan Couriers — Logistics Platform',
      description:
        'A medical-courier platform: scheduling, dispatch, and real-time tracking of time-sensitive deliveries. A driver app, a dispatch dashboard, and a recipient tracking link on one order — operator-facing, high-stakes, real-time state made legible.',
      tech: ['React Native', 'Next.js', 'AWS'],
      link: 'https://titancouriers.com/',
    },
  ],

  skills: {
    'Product Design': [
      'End-to-end product design - problem framing, user flows, IA, interaction design, prototyping, production-ready UI',
      'Data-dense interfaces - reconciliation tables, dashboards, admin tooling, and full empty / loading / error states',
      'Multi-role platforms - permissions models, role-based views, consumer + operator + admin surfaces',
      'Design systems - component libraries, type and spacing scales, tokens, usage docs, and governance',
      'Regulated-domain design - compliance guardrails, audit trails, and financial / nonprofit constraints',
    ],
    'Design Technology': [
      'React, Next.js, TypeScript - I build the products I design',
      'Figma to code - specs and components that translate cleanly, working closely with engineers',
      'Prototyping - from lo-fi flows to interactive React builds',
      'Node.js, Express, REST APIs, data modeling',
    ],
    'AI in the Design Process': [
      'AI as a tool in the workflow - it speeds up exploration and prototyping; a person still does the design and owns the output',
      'Applied AI builds where the model assists a human step - structured generation, task- and cost-aware provider routing, fine-tuning on past work',
      'A considered point of view on where AI belongs in a creative workflow and where it does not - it never replaces a review or a decision',
    ],
    'Product Sense & Collaboration': [
      'Stakeholder partnership - a monthly board cadence, product presentations, written SOP/continuity docs, and objections navigated to resolution (see TOBA)',
      'Bringing clarity to ambiguous problems and aligning people on a direction',
      'High ownership - I own outcomes and iteration with real users, not just deliverables',
      'Domain-learning - logistics, insurance, bookkeeping, nonprofit governance, regulated packaging',
    ],
    'Brand & Visual Design': [
      'Brand identity and systems across product and marketing surfaces',
      '15 years and 3,000+ design projects across SaaS, mobile, and consumer brands',
      'Packaging and label systems - zone-based templates and multi-SKU frameworks',
    ],
  },

  experience: [
    {
      company: 'Paintbrush Marketing',
      role: 'Product Designer & Partner',
      dates: '2015 - Present',
      location: 'Tampa, FL',
      achievements: [
        'Design and ship end-to-end products, client and in-house: ReconcileIQ (account reconciliation), TaxesByRoss (tax-practice platform), InsureBridge (a three-portal enrollment platform), and a medical-courier logistics app - problem definition through production-ready React / Next.js UI; plus customizing open-source tooling (Well) into the practice workflow',
        'Lead the TOBA membership platform for a Tampa 501(c)(3) across web, desktop, and mobile: a dues portal, role-based committee portals with a permissions model, and a member directory - partnering with the board as product owners through a monthly review cadence and full-board product presentations, delivering a written SOP and continuity agreement, and navigating three board objections (data ownership, duplication, cost) to resolution',
        'Built a design system in code - component library, type and spacing scales, and a case-study "style registry" that keeps 3,000+ deliverables consistent',
        'Designed assistive agents with human-in-the-loop guardrails (review-before-send, audit logging, never auto-sends) - the tool proposes, a person decides',
        'Use AI across the design process as a tool - structured generation, provider routing, fine-tuning on past work - to speed up exploration while a person holds the craft bar',
        'Own outcomes end to end: scope, design, build, ship, and iterate with real users',
      ],
    },
    {
      company: 'TaxesByRoss',
      role: 'Founder & Tax Preparer — and the product designer of its software',
      dates: '2015 - Present',
      location: 'Tampa, FL',
      achievements: [
        'Run a private tax practice serving 150+ individual and small-business clients; prepare Form 990 nonprofit filings on contract for Trydent Consulting (Tallahassee, FL), engaged through Christina Lynch, CEO',
        'Designed and built the practice software end to end (React/Vite + Express, AWS) — quarterly expense tracking with quarter/year routing, a 1099 calculator, Form 1040-ES support, data-repair tooling, dense financial tables, and Excel/PDF client exports',
        'Built ReconcileIQ (account reconciliation) and fully customized Well — an open-source supplier-invoice extraction tool — into the practice: an import bridge (Schedule C categories, quarter routing, additive/dedup), per-client financial dashboards, and a Form 990 auto-fill from the general ledger. I design accounting tools as the person who uses them on real client books',
        'Designed for compliance and trust: PII-safe storage, backups, audit-minded record-keeping, and human-confirm steps on anything automated',
      ],
    },
    {
      company: 'Titan Couriers App · Rent & Relax USA',
      role: 'Founder & Product Designer',
      dates: '2016 - Present',
      location: 'Tampa, FL',
      achievements: [
        'Titan Couriers (titancouriers.com/landing) - designed and built a medical-courier logistics platform: scheduling, dispatch, and real-time tracking of time-sensitive deliveries',
        'Rent & Relax USA (rentandrelax.vercel.app) - a community-event rental marketplace; owned brand, product, and go-to-market',
      ],
    },
    {
      company: 'Freelance Design & Development',
      role: 'Multi-Disciplinary Designer',
      dates: '2010 - 2015',
      location: 'Tampa, FL',
      achievements: [
        'Designed and built responsive websites, e-commerce platforms, and brand systems for a diverse small-business client base',
        'Ran design engagements end to end - requirements, UX, visual design, build, and hand-off',
        'Established a reputation as a versatile designer who could take a product from idea to shipped',
      ],
    },
    {
      company: 'Coca-Cola Refreshments',
      role: 'Account Manager',
      dates: '2005 - 2012',
      location: 'Tampa, FL',
      achievements: [
        'Managed sales and merchandising for an established customer base across an assigned territory against a monthly priority list',
        'Sold in incremental displays, equipment placements, and promotional programs, and held each account to Coca-Cola’s merchandising and brand-image standards',
      ],
    },
  ],
};

export default productDesignerResume;
