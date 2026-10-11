import defaultTheme from "tailwindcss/defaultTheme"

// Colors are CSS variables (see src/index.css) so light and dark themes share one set of class names.
const token = name => `rgb(var(--${name}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: token("canvas"),
        surface: token("surface"),
        fg: token("fg"),
        muted: token("muted"),
        subtle: token("subtle"),
        line: token("line"),
        field: token("field"),
        accent: {
          DEFAULT: token("accent"),
          hover: token("accent-hover"),
          fg: token("accent-fg"),
          soft: token("accent-soft"),
        },
        success: token("success"),
        danger: token("danger"),
        live: token("live"),
      },
      fontFamily: {
        sans: ["Geist", ...defaultTheme.fontFamily.sans],
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
