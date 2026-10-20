import { yearsOfExperience } from "./career"

// Copy follows the "Home — Green Glass" design. Facts trace to public/pol-imbing-v4.pdf, except the
// town in `location`, which only the design has.

// Years counted from the first job to today (see career.js)
const years = `${yearsOfExperience()}+`

export const profile = {
  fullName: "Pol Maynard O. Imbing",
  tagline: "AI Team Lead · Solutions Architect · PH",
  // The middle part renders in the gradient
  headline: ["I build ", "AI systems", " that make it to production."],
  lead: `Senior Full Stack Engineer with ${years} years across healthcare, finance, e-commerce and travel. Lately: taking a Claude-powered analysis platform from first commit to production — backend, frontend and every line of Terraform.`,
  email: "uraman2000@gmail.com",
  location: "Santa Rosa, Laguna, Philippines",
  resume: { href: "/pol-imbing-v4.pdf", fileName: "Pol-Imbing-Resume.pdf" },
  socials: [
    { id: "github", label: "GitHub", handle: "uraman2000", href: "https://github.com/uraman2000" },
    {
      id: "linkedin",
      label: "LinkedIn",
      handle: "pol-maynard-imbing-122a6315a",
      href: "https://www.linkedin.com/in/pol-maynard-imbing-122a6315a/",
    },
  ],
}

export const impact = [
  { value: "−26%", label: "client valuation cut, AUD 20.8M → 15.4M" },
  { value: "69×", label: "faster candidate search, 29s → 0.4s" },
  { value: "2.3M+", label: "public sales records in the matching engine" },
  { value: "700+", label: "unit tests, plus a 56-scenario AI accuracy suite" },
  { value: `${years} yrs`, label: "shipping React and Node.js in production" },
]
