import { Moon, Sun } from "./icons"
import useTheme from "../hooks/useTheme"

export default function ThemeToggle() {
  const [theme, toggleTheme] = useTheme()
  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme"

  return (
    <button type="button" onClick={toggleTheme} className="icon-btn" aria-label={label} title={label}>
      {theme === "dark" ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
    </button>
  )
}
