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
| `profile.js` | Name, tagline, headline, lead, email, location, resume PDF, socials, impact numbers |
| `career.js` | Years of experience, counted from the earliest start date in `experience.js` to today (also filled into `index.html` at build time) |
| `terminal.js` | The hero terminal: title, hint and each command's output |
| `experience.js` | Work history; the entry with `current: true` gets the large card and pipeline |
| `skills.js` | Stack cards (`headline` makes the large card, `wide` spans two columns) and the tech marquee |
| `services.js` | The four numbered service cards |
| `writing.js` | Writing cards. Still the design's placeholders; add real posts (with `href`) before deploying |
| `navigation.js` | Nav items (each `id` must match a section `id`) |

## Design system

The look is the "Home — Green Glass" design.

- **Styling:** Tailwind CSS utilities in the components. Tokens are CSS variables in `src/index.css` (dark values under `:root[data-theme="dark"]`), mapped to class names in `tailwind.config.js`: colors (`bg-page`, `text-ink`, `border-line`, `bg-accent/10`), the design's px font sizes (`text-15`), shadows, gradients and animations. Breakpoints follow the design's max-widths: `compact:` (≤860px), `phone:` (≤520px), `narrow:` (≤400px). Patterns used across sections (`glass`, `lift`, `btn`, `grad-text`, `orb`, `eyebrow`, `reveal`) are component classes in `index.css`. Where the design's sizes assume content-box sizing, elements use `box-content`.
- **Type:** Bricolage Grotesque (display), Instrument Sans (body) and JetBrains Mono (labels), from Google Fonts.
- **Color:** warm off-white and ink, a green accent (`#008000`) with amber, and a green-to-amber gradient for highlighted words.
- **Theme:** follows the visitor's system setting, with a toggle that remembers the choice (`localStorage`). `index.html` sets `data-theme` before first paint.
- **Motion:** intro rise on the hero, scroll-linked reveals (`Reveal`; a one-time rise where scroll-driven animations aren't supported), drifting orbs, the marquee, and a cursor glow (`Spotlight`). Animations are off for visitors who prefer reduced motion, and the terminal then shows each output in full.
- **Icons:** inline stroke SVGs in `src/components/icons.jsx`.
