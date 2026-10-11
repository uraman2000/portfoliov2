# Pol Imbing — Portfolio

Personal site for Pol Imbing, AI Team Lead & Solutions Architect. Built with React 18, Vite and Tailwind CSS.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
npm run preview   # serve the production build
npm run lint
```

## Editing content

All copy lives in `src/data/`, so most updates never touch a component:

| File | What it holds |
|---|---|
| `profile.js` | Name, role, headline, availability, hero facts, email, socials, resume path, impact numbers |
| `projects.js` | Case studies: the featured (proprietary) project and the screenshot projects |
| `experience.js` | Work history; entries with `earlier: true` sit behind "Show earlier roles" |
| `services.js` | The four service cards |
| `skills.js` | Stack groups, education and certifications |
| `navigation.js` | Nav items (each `id` must match a section `id`) |

To swap the downloadable resume, replace `public/pol-imbing.pdf` (or point `profile.resume.href` at a new file).

## Design system

- **Style:** Swiss minimal. A 12-column grid with a narrow label column, hairline dividers, big type and generous whitespace.
- **Type:** Geist (headings and body) and Geist Mono (labels and tags), from Google Fonts.
- **Color:** neutral zinc with a teal accent. Tokens are CSS variables in `src/index.css`. Light and dark both meet WCAG AA (text 4.5:1, field borders 3:1).
- **Theme:** follows the visitor's system setting, with a toggle that remembers the choice (`localStorage`).
- **Motion:** short fade-and-rise reveals (`Reveal` component). Turned off for visitors who prefer reduced motion.
- **Icons:** [Phosphor](https://phosphoricons.com), imported per icon through `src/components/icons.js`.

The contact form sends through EmailJS. The field names (`name`, `email`, `subject`, `message`) match the existing template.
