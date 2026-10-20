// Copy follows the "Home — Green Glass" design; every item is in "Technical Skills" in public/pol-imbing-v4.pdf.
// A group with a `headline` renders as the large tinted card; `wide` spans two grid columns.
export const stackGroups = [
  {
    label: "AI / LLM",
    headline: "Anthropic Claude API — streaming, extended thinking, prompt caching, PDF and vision inputs.",
    text: "Prompt engineering, LLM browser agents, AI accuracy testing.",
    wide: true,
  },
  { label: "Frontend", text: "React, Next.js, Redux Toolkit, Material UI, Tailwind CSS, Ant Design, Vite" },
  { label: "Backend", text: "Node.js, NestJS, Express, BullMQ, TypeORM, Flask, .NET Core" },
  { label: "Data", text: "PostgreSQL, Redis, MySQL, MongoDB, SQL Server" },
  {
    label: "Cloud / DevOps",
    text: "Microsoft Azure, AWS, Terraform, Docker, nginx, GitHub Actions, Key Vault, Azure Monitor, Vercel",
    wide: true,
  },
  { label: "Testing · Standards", text: "Jest, Vitest, Puppeteer, Mocha, Chai · HL7 FHIR R5" },
]

// The scrolling strip under the hero
export const marquee = [
  "Claude API",
  "TypeScript",
  "React 19",
  "NestJS",
  "PostgreSQL",
  "Redis",
  "BullMQ",
  "Terraform",
  "Azure",
  "Docker",
  "GitHub Actions",
  "Puppeteer",
  "Next.js",
  "HL7 FHIR R5",
]
