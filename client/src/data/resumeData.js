export const resumeData = {
  personal: {
    name: "Leroy Ross",
    discipline: "Product Design",
    title: "Product Designer & Creative Technologist · AI Design Automation",
    location: "Tampa, FL",
    email: "lross@paintbrushmarketing.net",
    phone: "", // Contact page carries the number; kept out of the résumé data by choice
    linkedin: "linkedin.com/in/ross711",
    behance: "behance.net/Paintbrushmarketing",
    website: "paintbrushmarketing.net"
  },

  summary: `Product designer and creative technologist, Product Designer & Partner at Paintbrush Marketing, and founder of a private tax practice (150+ clients) whose software I designed and built. I ship end-to-end products — an account-reconciliation app used on real client books; a life-insurance enrollment platform spanning three portals; a membership platform for a Tampa nonprofit — in React, Next.js, and Node, and I customize open-source tooling (Well, for supplier-invoice extraction) into the practice's workflow. Fifteen years and 3,000+ design projects across SaaS, mobile, and consumer brands, plus founder-level operating experience in accounting, logistics, and design.`,

  ventures: [
    {
      name: "Titan Couriers App",
      url: "https://titancouriers.com/landing",
      blurb: "A medical-courier logistics app for scheduling, dispatching, and tracking time-sensitive medical deliveries.",
    },
    {
      name: "Rent & Relax USA",
      url: "https://rentandrelax.vercel.app/",
      blurb: "Built to enhance community event experiences with convenient, affordable rentals like foldable chairs and recreational gear.",
    },
  ],

  skills: {
    "Creative & Design Skills": [
      "Brand Identity & Visual Design - Logo systems concept to final render, brand consistency across packaging and web, moodboards, type pairing, layout hierarchy",
      "Label & Packaging Design - Energy drink, beer, wine, vape, supplement, and cosmetic labels; front/back compliance layouts; die-lines; zone-based template systems",
      "3D Mockups & Product Renders - Photorealistic can, bottle, jar, and pouch renders for retail, pitch decks, and Amazon listings",
      "Multi-SKU Packaging Systems - Scalable flavor and variant frameworks that keep product lines consistent",
      "Web & UI/UX Design - Responsive layouts, e-commerce storefronts (Shopify, Wix, WordPress), component systems, mobile and SaaS product UI"
    ],
    "AI Tools & Automation": [
      "Applied AI Product Builds - AI label/flat-label generator with GPT copy and compliance zones, Midjourney/DALL-E art, and JSONL fine-tuning on past label sets",
      "Autonomous Agents - Scheduled monitoring, review/message reply drafting (human-approved), and multi-platform publishing agents",
      "Browser Automation - Real-Chrome-over-CDP scraping and auditing pipelines with browser_use and Playwright",
      "LLM Orchestration - Task- and cost-aware provider routing (OpenAI, Anthropic, DeepSeek) and structured-data prompt libraries",
      "Design Workflow Automation - Prompt engineering, dataset preparation, and AI design pipelines run from VS Code"
    ],
    "Marketing & Content Creation": [
      "Digital Marketing - SEO product copy and meta content, keyword targeting, email funnels, conversion copywriting, Google and social ad creative",
      "Content Strategy - Branded storytelling, blog articles, short-form scriptwriting, caption copy for Threads, Instagram, and TikTok",
      "Video & Social Marketing - 80M+ views from social storytelling; campaign direction for brand and flavor launches",
      "Social Media Branding - Mascot-based marketing, themed limited editions, subscription content calendars across eight platforms",
      "Paid Advertising - Google Ads and Meta campaign build and optimization (certified)"
    ],
    "Technical & Development Skills": [
      "Frontend - React, Next.js, JavaScript, HTML5, CSS3, JSON-driven dynamic rendering, responsive design",
      "Backend - Node.js, Express, REST APIs, MongoDB/Mongoose, data modeling",
      "Automation & Scripting - Python automation, scheduled tasks, run logging and reporting, CI-style pre-commit checks",
      "Deployment - Git/GitHub, GitHub Pages, Vercel, Plesk; WordPress plugin creation (shortcodes, calculators)",
      "Game Design - Unreal Engine setup, blueprint integration, camera systems, AI enemy spawns, level logic"
    ],
    "Business & Strategy": [
      "Entrepreneurship - Founder of Paintbrush Marketing, the Titan Couriers App, and Rent & Relax USA",
      "Client Acquisition & Development - Consultation, requirements gathering, pricing models, ongoing retainer support",
      "Operations - CRM setup, cross-industry coordination across creative, logistics, and finance",
      "Consulting - Brand strategy for small businesses, workshop planning, membership and outreach initiatives (TOBA)",
      "Product Strategy - Creation, marketing, and monetization of tools and services across industries"
    ],
    "Personality & Strengths": [
      "Multi-disciplinary problem solver - the \"Swiss Army Knife of Hustle\"",
      "Balances creative design, business logic, and marketing psychology",
      "Simplifies complex systems - logistics, AI workflows, branding - into actionable results",
      "Highly adaptive - moves seamlessly between industries",
      "Builds tools, not just services"
    ]
  },

  experience: [
    {
      company: "Paintbrush Marketing",
      role: "Product Designer & Partner",
      dates: "2015 - Present",
      location: "Tampa, FL",
      achievements: [
        "Design and ship end-to-end products, client and in-house: ReconcileIQ (account reconciliation, real bookkeeping clients), InsureBridge (a three-portal insurance-enrollment platform), a medical-courier logistics app, and internal operations tooling - problem definition through production-ready React/Next.js UI",
        "Lead the TOBA membership platform for a Tampa 501(c)(3): a dues portal, role-based committee portals with a permissions model, and a member directory across web, desktop, and mobile - partnering with the board as product stakeholders within 501(c)(3) compliance constraints",
        "Built an AI label generation system that turns a product brief into structured, compliance-aware label art using GPT, Midjourney/DALL-E, and OpenAI models fine-tuned on prior label sets",
        "Lead design direction for a 4-person creative team, reviewing work and setting visual systems across 3,000+ label and packaging designs for energy drink, beer, wine, vape, supplement, and cosmetic brands, including multi-SKU flavor systems and print-ready production files",
        "Built assistive automation used as tools, not replacements: a daily shop-monitoring agent that drafts replies for human approval (never auto-sends), a multi-platform publishing helper with dedup and calendar sync, and browser-automation scraping pipelines",
        "Shipped the full stack around the design work - React/Next.js front ends, Node/Express APIs, e-commerce storefronts, and WordPress plugins",
        "Produced social storytelling campaigns totaling 80M+ views and ran subscription content programs across eight platforms",
        "Managed multi-industry client relationships and retainers with a consistently high satisfaction rate"
      ]
    },
    {
      company: "TaxesByRoss",
      role: "Founder & Tax Preparer",
      dates: "2015 - Present",
      location: "Tampa, FL",
      achievements: [
        "Run a private tax-preparation practice serving 150+ individual and small-business clients",
        "Prepare Form 990 nonprofit filings on contract for Trydent Consulting (Tallahassee, FL), engaged through Christina Lynch, CEO",
        "Designed and built the practice's software end to end (React/Vite + Express, AWS): quarterly expense tracking with quarter/year routing, a 1099 calculator, Form 1040-ES support, data-repair tooling, and Excel/PDF client exports",
        "Fully customized Well (an open-source supplier-invoice extraction tool) into the practice's books: an import bridge that maps line items to Schedule C categories and routes them by quarter, per-client financial dashboards, and a Form 990 auto-fill from the general ledger. Also built ReconcileIQ, an account-reconciliation app used on real client books",
        "Handle real client financial data with PII-safe storage, backups, and audit-minded record-keeping"
      ]
    },
    {
      company: "Titan Couriers App · Rent & Relax USA",
      role: "Founder & Product Designer",
      dates: "2016 - Present",
      location: "Tampa, FL",
      achievements: [
        "Titan Couriers App (titancouriers.com/landing) - a medical-courier logistics app for scheduling, dispatching, and tracking time-sensitive medical deliveries",
        "Rent & Relax USA (rentandrelax.vercel.app) - convenient, affordable community-event rentals like foldable chairs and recreational gear",
        "Built the brand, product, CRM, pricing, and go-to-market for both ventures"
      ]
    },
    {
      company: "Freelance Design & Development",
      role: "Multi-Disciplinary Consultant",
      dates: "2010 - 2015",
      location: "Tampa, FL",
      achievements: [
        "Provided branding, web design, packaging, and marketing services to a diverse small-business client base",
        "Built responsive websites and e-commerce platforms; ran social campaigns with measurable ROI improvements",
        "Established a reputation as a versatile 'Swiss Army Knife' creative professional"
      ]
    },
    {
      company: "American Marketing Association",
      role: "Field / Internet Consultant",
      dates: "2013",
      location: "Tampa, FL",
      achievements: [
        "Advised small-business owners on building their brand with web-based tools - site builders, product marketing, and e-commerce setup",
        "Guided clients on SEO, digital advertising, and internal company email systems as part of a complete online presence"
      ]
    },
    {
      company: "Coca-Cola Refreshments",
      role: "Account Manager",
      dates: "2005 - 2012",
      location: "Tampa, FL",
      achievements: [
        "Managed sales and merchandising for an established customer base across an assigned territory, executing and closing every sales call against Coca-Cola's monthly priority list",
        "Sold in incremental displays, equipment placements, and promotional programs, and ensured dealer compliance",
        "Maintained inventory levels, company assets, and point-of-sale materials, holding each account to Coca-Cola's merchandising and brand-image standards",
        "Met customer-service expectations through daily communication, problem resolution, and consistent follow-up"
      ]
    }
  ],

  education: [
    {
      school: "University of Tampa",
      college: "College of Business",
      degree: "Bachelor's in Design, Business and Marketing",
      year: "2010",
      location: "Tampa, FL"
    }
  ],

  certifications: [
    {
      name: "Adobe Digital Experience Certification Program",
      issuer: "RockU",
      year: "2024"
    },
    {
      name: "Google Digital Marketing Certification",
      issuer: "Google",
      year: "2023"
    },
    {
      name: "Google Ads Certifications",
      issuer: "Google",
      year: "2023"
    }
  ],

  topProjects: [
    {
      name: "ReconcileIQ - Account Reconciliation App",
      description: "A reconciliation product - dashboard, guided reconciliation, reusable templates, and reporting - in daily use by real bookkeeping clients, including a Form 990 nonprofit. Dense financial tables with full empty, loading, and error states.",
      tech: ["React", "TypeScript", "Zustand", "Recharts", "Vite"]
    },
    {
      name: "TOBA - Membership Platform",
      description: "A membership platform for a Tampa 501(c)(3): a dues portal with payments, late fees, and receipts; role-based committee portals with a leader/member permissions model; and a member directory - across web, desktop, and mobile, built with the board as product stakeholders.",
      tech: ["Next.js 15", "React Native", "Electron", "Vercel"]
    },
    {
      name: "AI Label / Flat-Label Generator",
      description: "Turns a product brief into structured, compliance-aware label art - GPT for copy and regulatory zones, Midjourney/DALL-E for artwork, zone-based templates, and JSONL fine-tuning on past label sets, with a React front end that renders labels live.",
      tech: ["React", "OpenAI API", "Midjourney", "JSONL Fine-Tuning", "Node.js"]
    },
    {
      name: "Autonomous Shop Monitor & Reply Agent",
      description: "Scheduled agent that checks store state daily, flags new messages, reviews, and orders, drafts LLM replies for human approval (never auto-sends), reports revenue, and automates listing edits and store-wide sales.",
      tech: ["Python", "Playwright/CDP", "LLM Router", "Task Scheduler"]
    },
    {
      name: "Multi-Platform Publishing Agent",
      description: "Unattended publishing to Behance, Dribbble, and Pinterest from a content plan, with pre/post-publish dedup checks, planner-state calendar sync, per-platform guardrails, and run reporting.",
      tech: ["Python", "Browser Automation", "Scheduler"]
    },
    {
      name: "Digital Résumé Site",
      description: "This site - a React 18 SPA with data-driven Portfolio and Designs galleries, an editorial theme, and client-side PDF résumé generation from a single data source.",
      tech: ["React", "React Router", "@react-pdf/renderer", "framer-motion"]
    }
  ],

  aiTools: [
    {
      name: "AI Label / Flat-Label Generator",
      blurb: "Structured product-label generation from a brief: GPT drafts copy and compliance zones, Midjourney/DALL-E generate artwork, zone-based templates (logo / info / regulatory) keep layouts consistent, and OpenAI models fine-tuned on past label sets sharpen the output. React front end renders each label live.",
      stack: ["React", "OpenAI API", "Midjourney", "JSONL Fine-Tuning", "Node.js"]
    },
    {
      name: "Autonomous Etsy Monitor",
      blurb: "A scheduled Python agent that checks shop state every day, detecting the session from the DOM and warming past bot mitigation. It flags new messages, reviews, and orders, drafts LLM replies for review (never auto-sends), and reports revenue - plus listing-editor automation for titles, pricing, and tags, and automated store-wide sales.",
      stack: ["Python", "Playwright / CDP", "LLM Router", "Scheduler"]
    },
    {
      name: "Daily Multi-Platform Social Poster",
      blurb: "Unattended publishing to Behance, Dribbble, and Pinterest from a content plan, with pre- and post-publish dedup checks, planner-state calendar sync, per-platform guardrails (no LinkedIn posts after 5pm), and run logs and reports.",
      stack: ["Python", "Browser Automation", "Scheduler"]
    },
    {
      name: "Command Center Board",
      blurb: "An auto-generated project dashboard - projects plus daily status reports - served on the local network and rebuilt on a schedule, with cross-project ops-deck sync driven by a file watcher and editor hooks.",
      stack: ["Node.js", "Python", "Static Serve"]
    },
    {
      name: "Browser-Automation Scraper Pipelines",
      blurb: "Real-Chrome-over-CDP scraping agents (browser_use, Playwright) for market research and portfolio/link auditing across Behance, Etsy, Pinterest, and Dribbble - built to survive stale Chromium and anti-bot checks.",
      stack: ["browser_use", "Playwright", "Python"]
    },
    {
      name: "LLM Provider Router",
      blurb: "A task- and cost-aware routing layer that picks the provider and model per job and per pricing window (OpenAI, Anthropic, DeepSeek), backed by a structured-data prompt library for creative automation.",
      stack: ["Python", "OpenAI", "Anthropic", "DeepSeek"]
    }
  ]
};
