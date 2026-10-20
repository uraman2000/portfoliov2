import { useEffect, useState } from "react"
import usePrefersReducedMotion from "./usePrefersReducedMotion"

// Reveals `text` a few characters per tick, starting when the component mounts.
// Remount (change the component's key) to type it again. Reduced motion shows it all at once.
export default function useTypewriter(text, { step = 2, interval = 24 } = {}) {
  const reduceMotion = usePrefersReducedMotion()
  const [count, setCount] = useState(0)
  const done = reduceMotion || count >= text.length

  useEffect(() => {
    if (done) return
    const timer = setTimeout(() => setCount(current => Math.min(text.length, current + step)), interval)
    return () => clearTimeout(timer)
  }, [count, done, text.length, step, interval])

  return done ? text : text.slice(0, count)
}
