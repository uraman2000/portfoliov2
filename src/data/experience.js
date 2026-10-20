// Copy follows the "Home — Green Glass" design; facts trace to public/pol-imbing-v4.pdf.
// The current role renders as the large card with the pipeline; the rest as compact cards.
export const experience = [
  {
    id: "yml",
    role: "AI Team Lead & Solutions Architect",
    company: "YML Group",
    period: "Feb 2026 — Present",
    current: true,
    context: "YML Group · Land Tax Valuation Dispute Platform · Financial services, Australia",
    pipeline: {
      label:
        "Claude analysis pipeline: government geospatial data, 10 evidence analysers, 9 regulatory criteria, 11-section PDF report",
      stages: [
        { step: "stage 1", label: "Geospatial gov data" },
        { step: "stage 2", label: "10 evidence analysers" },
        { step: "stage 3", label: "9 regulatory criteria" },
        { step: "output", label: "11-section PDF report" },
      ],
    },
    highlights: [
      "Primary engineer, first commit to production: most of the backend and frontend, all of the Terraform. Output helped a client cut an assessed valuation from AUD 20.8M to AUD 15.4M.",
      "Claude API with streaming, extended thinking, prompt caching and PDF/vision inputs — plus grounding guards that override model figures with deterministic values.",
      "Matching engine over 2.3M+ sales records; one query rewrite took search from 29s to 0.4s.",
      "NestJS API with 30+ modules, a compile-time-checked 9-stage workflow state machine and 80+ migrations; React 19 frontend.",
      "Azure in Terraform, 55 settings in Key Vault, GitHub Actions with auto-rollback and a 243-test Puppeteer gate. Scrum Master for the team.",
    ],
    stack: ["TypeScript", "NestJS", "React 19", "Claude API", "BullMQ", "PostgreSQL", "Terraform · Azure"],
  },
  {
    id: "eteam",
    role: "Senior React Developer",
    company: "Eteam Workforce",
    period: "Nov 2024 — Jan 2026",
    summary:
      "Healthcare. React + TypeScript apps aligned with HL7 FHIR R5 for secure data exchange; 80%+ test coverage across releases; mentored juniors through reviews and pairing.",
  },
  {
    id: "yempo",
    role: "Senior React Developer",
    company: "Yempo",
    period: "Nov 2023 — Oct 2024",
    summary:
      "Compliance data. Led frontend across projects and introduced process and tooling changes that shortened release cycles by up to 20%.",
  },
  {
    id: "nygci",
    role: "Senior React Developer",
    company: "NYGCI",
    period: "Feb 2023 — Nov 2023",
    summary:
      "E-commerce. Modular React + TypeScript components for enterprise platforms, plus automated test pipelines that cut manual QA time.",
  },
  {
    id: "accenture",
    role: "Advanced App Engineering Analyst",
    company: "Accenture Philippines",
    period: "Feb 2021 — Feb 2023",
    summary:
      "Travel tech. Enterprise NestJS APIs for large-scale travel systems with international teams; trained new hires on backend development.",
  },
  {
    id: "radiowealth",
    role: "Full Stack Web Developer",
    company: "RadioWealth Finance",
    period: "Jul 2019 — Feb 2021",
    summary:
      "Financial services. Led the Post-Dated Check Monitoring System and built a Loan Application Tracking System (React, Flask, PostgreSQL).",
  },
  {
    id: "tektos",
    role: "Android Developer",
    company: "Tektos Ecosystems; Infotouch",
    period: "Feb 2018 — Nov 2018",
    summary: "Kotlin apps with custom UI and API integration, released to Google Play.",
  },
]
