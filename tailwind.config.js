// Green Glass design tokens. Colors are CSS variables (set in src/index.css), so light and dark
// themes share one set of class names.

// The accent supports opacity modifiers (e.g. bg-accent/10) by mixing it with transparent.
const accentMix = percent => `color-mix(in oklch, var(--accent) ${percent}, transparent)`

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      // The design's breakpoints are max-widths
      screens: {
        compact: { max: "860px" },
        phone: { max: "520px" },
        narrow: { max: "400px" },
      },
      colors: {
        page: { DEFAULT: "var(--bg)", 2: "var(--bg2)" },
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        glass: { DEFAULT: "var(--glass)", edge: "var(--glass-b)" },
        accent: { DEFAULT: accentMix("calc(<alpha-value> * 100%)"), strong: "var(--accent-strong)" },
        term: { DEFAULT: "var(--term)", ink: "var(--term-ink)", mute: "var(--term-mute)", prompt: "#4ADE80" },
        brand: { green: "#00A63E", amber: "#E3A008", lime: "#9BE15D", ink: "#16110D" },
      },
      borderColor: {
        DEFAULT: "var(--line)",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "sans-serif"],
        sans: ['"Instrument Sans"', "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      // The design's sizes in px. No paired line-heights: the design leaves most at "normal".
      fontSize: Object.fromEntries(
        [12, 13, 14, 14.5, 15, 16, 17, 19, 20, 22, 24, 28, 32, 40, 48, 52, 60, 72, 76].map(px => [px, `${px}px`])
      ),
      spacing: {
        4.5: "18px",
        5.5: "22px",
        6.5: "26px",
        13: "52px",
        18: "72px",
        21: "84px",
        30: "120px",
      },
      maxWidth: {
        page: "1200px",
      },
      // Keys must not match color names, or shadow-{key} also applies a shadow color
      boxShadow: {
        card: "var(--shadow)",
        lift: `0 34px 80px -28px ${accentMix("55%")}`,
        cta: `0 10px 30px -8px ${accentMix("70%")}`,
        "cta-hover": `0 16px 40px -8px ${accentMix("90%")}`,
        terminal: `0 40px 100px -30px ${accentMix("60%")}, 0 0 0 1px rgba(255, 255, 255, 0.08)`,
        glow: "0 0 12px var(--accent)",
      },
      backgroundImage: {
        grad: "var(--grad)",
        dots: "radial-gradient(var(--dot) 1px, transparent 1px)",
        spotlight: `radial-gradient(560px circle at 50% 50%, ${accentMix("16%")}, transparent 70%)`,
        ring: "conic-gradient(from 0deg, var(--accent), #E3A008, #9BE15D, var(--accent))",
        mark: "linear-gradient(135deg, #006B00, #008000 55%, #A16207)",
        tint: `linear-gradient(135deg, ${accentMix("18%")}, transparent 60%)`,
        warm: "linear-gradient(100deg, #00A63E, #F5C04A, #E3A008, #00A63E)",
        "post-1": "radial-gradient(circle at 30% 40%, #00A63E, transparent 60%), radial-gradient(circle at 75% 60%, #E3A008, transparent 55%)",
        "post-2": "radial-gradient(circle at 60% 30%, #9BE15D, transparent 60%), radial-gradient(circle at 20% 80%, #00A63E, transparent 55%)",
        "post-3": "radial-gradient(circle at 40% 70%, #E3A008, transparent 60%), radial-gradient(circle at 80% 20%, #9BE15D, transparent 55%)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
      keyframes: {
        shimmer: { to: { backgroundPosition: "300% 0" } },
        drift1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(90px, 70px) scale(1.18)" },
        },
        drift2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1.1)" },
          "50%": { transform: "translate(-110px, 40px) scale(0.9)" },
        },
        drift3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(60px, -80px) scale(1.25)" },
        },
        blink: { "50%": { opacity: "0" } },
        marquee: { to: { transform: "translateX(-50%)" } },
        flow: { from: { left: "0%" }, to: { left: "100%" } },
        // The design calls this "pulse"; renamed so it doesn't merge with Tailwind's opacity pulse
        beacon: {
          "0%, 100%": { boxShadow: `0 0 0 0 ${accentMix("55%")}` },
          "50%": { boxShadow: "0 0 0 10px transparent" },
        },
        intro: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        shimmer: "shimmer 8s linear infinite",
        drift1: "drift1 18s ease-in-out infinite",
        drift2: "drift2 22s ease-in-out infinite",
        drift3: "drift3 26s ease-in-out infinite",
        "spin-slow": "spin 6s linear infinite",
        blink: "blink 1s steps(1) infinite",
        marquee: "marquee 45s linear infinite",
        flow: "flow 2.4s linear infinite",
        beacon: "beacon 2.4s ease-in-out infinite",
        intro: "intro 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both",
      },
    },
  },
  plugins: [],
}
