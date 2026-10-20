import { useCallback, useEffect, useState } from "react"

const STORAGE_KEY = "theme"

function readSavedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

// The inline script in index.html sets data-theme on <html> before first paint;
// this hook keeps it in sync and follows the OS setting until the visitor picks a theme.
export default function useTheme() {
  const [theme, setTheme] = useState(() => (document.documentElement.dataset.theme === "dark" ? "dark" : "light"))

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = event => {
      if (!readSavedTheme()) setTheme(event.matches ? "dark" : "light")
    }
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage can be unavailable (e.g. private mode); the toggle still works for this visit.
    }
  }, [theme])

  return [theme, toggleTheme]
}
