import dataLabImage from "../assets/work/data-lab.webp"
import clearlyImage from "../assets/work/clearly.webp"
import goldbellImage from "../assets/work/goldbell.webp"

export const featuredProject = {
  id: "yml-ai-platform",
  title: "AI-powered platform for a regulated domain",
  client: "YML Group",
  period: "2026 – present",
  role: "AI Team Lead & Solutions Architect",
  summary:
    "I lead the team building Claude-powered features, including multimodal document processing, plus the secure platform and cloud infrastructure they run on.",
  outcomes: [
    "Multimodal pipelines on the Claude API (PDF + image inputs), with prompt caching and model routing to cut latency.",
    "A QA strategy for non-deterministic output: 440+ automated accuracy checks across 50+ scenarios.",
    "Parallelized bulk ETL of 2M+ records into PostgreSQL.",
    "Throttling, Redis-based account lockout, token-based password resets and audit logging for compliance.",
    "Azure infrastructure and CI/CD owned end to end with Terraform, Docker and GitHub Actions.",
  ],
  metrics: [
    { value: "440+", label: "automated AI accuracy checks" },
    { value: "50+", label: "test scenarios for AI output" },
    { value: "2M+", label: "records migrated into PostgreSQL" },
  ],
  capabilities: ["Claude API", "PDF + image inputs", "Prompt caching", "Model routing"],
  stack: ["NestJS", "React", "TypeScript", "PostgreSQL", "Redis", "Azure", "Terraform", "GitHub Actions"],
  note: "Proprietary. Details on request.",
}

export const projects = [
  {
    id: "compliance-station",
    title: "Compliance Station",
    client: "Compliance Data Lab",
    period: "2023 – 2024",
    role: "Senior React Developer",
    summary: "A bilingual (English / Japanese) compliance-management platform.",
    outcomes: [
      "Led frontend development with React, TypeScript, Redux Toolkit, Tailwind CSS and Ant Design.",
      "Turned complex compliance requirements into clear, usable interfaces.",
      "Process and tooling improvements that shortened release cycles by up to 20%.",
    ],
    stack: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Ant Design", "Vitest"],
    image: { src: dataLabImage, alt: "Compliance Station home page with the product hero and language switcher" },
    links: [{ label: "Visit site", href: "https://cs.c-datalab.com/" }],
  },
  {
    id: "clearly",
    title: "Clearly",
    client: "Clearly",
    period: "2023",
    role: "Senior React Developer",
    summary: "Online eyewear retailer in Canada: glasses, contact lenses and eye exams.",
    outcomes: [
      "Built modular, reusable React and TypeScript components for an enterprise e-commerce platform.",
      "Integrated backend APIs to ship features that improved engagement and usability.",
      "Faster page loads through modern React patterns, plus automated tests that cut manual QA.",
    ],
    stack: ["React", "TypeScript", "Redux Toolkit", "Material UI", "Styled Components", "Vitest"],
    image: { src: clearlyImage, alt: "Clearly storefront home page showing seasonal glasses and contacts promotions" },
    links: [{ label: "Visit site", href: "https://www.clearly.ca/en-ca" }],
  },
  {
    id: "goldbell",
    title: "Goldbell client portals",
    client: "Goldbell Financial Services",
    period: "2020",
    role: "Front-end Web Developer",
    summary: "Borrower and credit-officer portals for a Singapore lender.",
    outcomes: [
      "Built both React frontends on a custom Styled Components design system.",
      "Responsive, reusable components built to spec and shipped to production with design and PM.",
    ],
    stack: ["React", "Axios", "Styled Components"],
    image: { src: goldbellImage, alt: "Goldbell e-client login screen" },
    links: [
      { label: "Borrower portal", href: "https://goldbell-borrowers.netlify.app" },
      { label: "Credit officer portal", href: "https://goldbell-credit-office.netlify.app" },
    ],
  },
]
