import { useEffect, useRef, useState } from "react"

// Flags an element the first time it scrolls into view, then stops observing it.
export default function useInView(rootMargin = "0px 0px -8% 0px") {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || inView) return

    if (!("IntersectionObserver" in window)) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [inView, rootMargin])

  return [ref, inView]
}
