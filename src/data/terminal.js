import { yearsOfExperience } from "./career"
import { profile } from "./profile"

const handle = id => profile.socials.find(social => social.id === id).handle

// The hero terminal: each command types out its output when picked.
export const terminal = {
  title: "ask-pol — claude-sonnet — zsh",
  hint: "Click a command — it types live",
  commands: [
    {
      id: "whoami",
      label: "whoami",
      output: [
        "Pol Maynard O. Imbing",
        "Senior Full Stack Engineer · AI Team Lead & Solutions Architect",
        `${yearsOfExperience()}+ years · React · Node.js · NestJS · Claude API`,
        "Based in the Philippines · remote-ready",
      ].join("\n"),
    },
    {
      id: "win",
      label: "latest-win",
      output: [
        "Land Tax Valuation Dispute Platform — YML Group",
        "> assessed valuation: AUD 20.8M → AUD 15.4M (−26%)",
        "> candidate search: 29s → 0.4s (69×)",
        "> 700+ unit tests · 56-scenario AI accuracy suite",
      ].join("\n"),
    },
    {
      id: "pipeline",
      label: "pipeline",
      output: [
        "geospatial data ▸ 10 evidence analysers",
        "  ▸ 9 regulatory criteria ▸ 11-section PDF report",
        "claude: streaming · extended thinking · prompt caching",
        "guards: model figures overridden by deterministic values",
      ].join("\n"),
    },
    {
      id: "stack",
      label: "stack --top",
      output: [
        "ai       claude api · llm browser agents",
        "front    react 19 · next.js · redux toolkit · mui",
        "back     nestjs · bullmq · typeorm · postgres · redis",
        "infra    terraform · azure · docker · github actions",
      ].join("\n"),
    },
    {
      id: "contact",
      label: "contact",
      output: [
        `email     ${profile.email}`,
        `github    ${handle("github")}`,
        `linkedin  ${handle("linkedin")}`,
        "web       polimbing.dev",
      ].join("\n"),
    },
  ],
}
