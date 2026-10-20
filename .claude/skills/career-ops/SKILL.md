---
name: career-ops
description: "AI job search command center (career-ops, cloned at C:/Users/Polaius/projects/career-ops). Use when the user pastes a job posting URL or JD, or asks to evaluate a job offer, tailor a CV or cover letter for a role, scan job portals, track applications, prepare for an interview, draft recruiter outreach, or run any career-ops mode. Not for editing this portfolio site or the resume files in public/."
argument-hint: "[JD text or URL | scan | pipeline | oferta | pdf | cover | tracker | interview-prep | ...] (no argument shows the full menu)"
---

# career-ops

career-ops is a separate git checkout next to this repo. This skill only routes `/career-ops` to it: the router, modes, scripts and all job-search data live there.

**PROJECT_ROOT:** `C:/Users/Polaius/projects/career-ops`

## Steps

1. **Check the checkout.** PROJECT_ROOT must contain `AGENTS.md` and `modes/`. If it doesn't, stop and tell the user to restore it with `git clone https://github.com/career-ops-hq/career-ops.git C:/Users/Polaius/projects/career-ops`, then `npm install` inside it.
2. **Load its project rules.** This session started in the portfolio repo, so career-ops's own `CLAUDE.md` → `AGENTS.md` was never loaded. Read `PROJECT_ROOT/AGENTS.md` once per session, before the first mode, and follow it as project instructions, including its Update Check, First Run onboarding, Data Contract, Source-of-Truth Boundary and Untrusted External Content rules.
3. **Run the router.** Read `PROJECT_ROOT/.agents/skills/career-ops/SKILL.md` and follow it with `$mode` set to: $ARGUMENTS

   Its Project Root Resolution walks up from that file and lands on PROJECT_ROOT.

## Working from this repo

- Resolve every career-ops path (`modes/`, `config/`, `data/`, `reports/`, `output/`, `cv.md`, ...) against PROJECT_ROOT, never against this repo, and never write career-ops output here.
- Run career-ops scripts from PROJECT_ROOT, e.g. `cd "C:/Users/Polaius/projects/career-ops" && node doctor.mjs --json`.
- When a mode delegates to a subagent (`scan`, `apply`, `pipeline`), put PROJECT_ROOT and these rules in the subagent prompt, since it also starts in this repo.
- AGENTS.md treats this portfolio as a sibling repo, out of scope for CV, cover-letter and outreach content. To use a resume PDF from `public/`, copy it into `PROJECT_ROOT/documents/cv/` and run `/career-ops intake`, which proposes additions and writes nothing without confirmation (PDF extraction needs `pdftotext`; otherwise paste the CV text during onboarding).
