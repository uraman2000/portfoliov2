import { Moon, Sun } from "./icons"
import useTheme from "../hooks/useTheme"

export default function ThemeToggle() {
  const [theme, toggleTheme] = useTheme()
  const dark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="icon-btn"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  )
}
