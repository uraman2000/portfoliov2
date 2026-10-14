import dataLabImage from "../assets/work/data-lab.webp"
import clearlyImage from "../assets/work/clearly.webp"
import goldbellImage from "../assets/work/goldbell.webp"

// Source of truth: the YML Group entry in public/pol-imbing-v4.pdf
export const flagship = {
  id: "yml-platform",
  title: "AI analysis platform for Australian financial services",
  client: "YML Group",
  period: "Feb 2026 – Present",
  role: "AI Team Lead & Solutions Architect",
  summary:
    "Primary engineer from first commit to production: I wrote most of the backend and frontend and all of the Terraform, and I lead the engineering team as Scrum Master.",
  outcome: {
    before: "AUD 20.8M",
    after: "AUD 15.4M",
    change: "26% lower",
    caption: "The platform's output helped a client cut an assessed valuation from AUD 20.8M to AUD 15.4M.",
  },
  pipeline: {
    steps: [
      { verb: "Pull", detail: "Government geospatial data" },
      { verb: "Run", detail: "10 evidence analysers" },
      { verb: "Evaluate", detail: "9 regulatory criteria" },
      { verb: "Render", detail: "11-section PDF report" },
    ],
    caption:
      "One multi-stage BullMQ job. The Claude API (streaming, extended thinking, prompt caching, PDF and vision inputs) runs behind grounding guards that override model figures with deterministic values and reject unsupported adjustments.",
  },
  highlights: [
    {
      title: "AI & data",
      items: [
        "Matching engine over 2.3M+ public sales records; one query rewrite cut candidate search from 29s to 0.4s (69×).",
        "Weekly government data import: headless-browser scraper, file parser, Redis-locked scheduler and bulk PostgreSQL loading.",
        "An LLM-driven browser agent that collects entity data from public business registers.",
      ],
    },
    {
      title: "Platform",
      items: [
        "NestJS/TypeScript API on PostgreSQL, Redis and BullMQ, with Redis caching and a compile-time-checked 9-stage workflow state machine.",
        "Auth with httpOnly JWT cookies, atomic Redis login lockout, per-user rate limiting and token-based password reset, plus activity and audit logging.",
        "Most of the React 19 frontend (MUI, Redux Toolkit): role-guarded routing, the auth flow, an AI job queue panel and the main workspace.",
      ],
    },
    {
      title: "Infrastructure & quality",
      items: [
        "Azure infrastructure in Terraform (VM, PostgreSQL, Redis, Key Vault, private endpoints, monitoring); all 55 app settings moved into Key Vault.",
        "QA resources grown from 17 to 63 with zero drift.",
        "GitHub Actions CI/CD: Docker builds, health-checked releases with automatic rollback, migrations and a Puppeteer regression gate.",
      ],
    },
  ],
  metrics: [
    { value: "2.3M+", label: "Public sales records in the matching engine" },
    { value: "30+", label: "NestJS API modules, plus 80+ TypeORM migrations" },
    { value: "243", label: "Puppeteer regression tests gating releases" },
    { value: "56", label: "AI accuracy scenarios, incl. adversarial and missing-data cases" },
  ],
  stack: [
    "TypeScript",
    "NestJS",
    "React 19",
    "PostgreSQL",
    "TypeORM",
    "Redis",
    "BullMQ",
    "Anthropic Claude API",
    "Puppeteer",
    "Docker",
    "Terraform",
    "Azure",
    "GitHub Actions",
    "MUI",
    "Tailwind CSS",
    "Redux Toolkit",
  ],
}

// Sites from the original portfolio. The resume doesn't cover them, so only what's visible is described.
export const clientSites = [
  {
    id: "compliance-station",
    title: "Compliance Station",
    description: "Compliance-management platform from Compliance Data Lab, in English and Japanese.",
    image: { src: dataLabImage, alt: "Compliance Station home page with the product hero and language switcher" },
    links: [{ label: "Visit site", href: "https://cs.c-datalab.com/" }],
  },
  {
    id: "clearly",
    title: "Clearly",
    description: "Canadian online store for glasses, contact lenses and eye exams.",
    image: { src: clearlyImage, alt: "Clearly storefront home page showing seasonal glasses and contacts promotions" },
    links: [{ label: "Visit site", href: "https://www.clearly.ca/en-ca" }],
  },
  {
    id: "goldbell",
    title: "Goldbell e-client portals",
    description: "Borrower and credit-officer portals for Goldbell Financial Services.",
    image: { src: goldbellImage, alt: "Goldbell e-client login screen" },
    links: [
      { label: "Borrower portal", href: "https://goldbell-borrowers.netlify.app" },
      { label: "Credit officer portal", href: "https://goldbell-credit-office.netlify.app" },
    ],
  },
]
