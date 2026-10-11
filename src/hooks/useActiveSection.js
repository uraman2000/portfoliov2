import { useEffect, useState } from "react"

// Returns the id of whichever observed section is crossing the middle of the viewport.
export default function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean)
    if (!sections.length || !("IntersectionObserver" in window)) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}
