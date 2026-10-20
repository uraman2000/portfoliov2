import { useEffect, useRef, useState } from "react"

const OFFSCREEN = { x: -600, y: -600 }

// Mouse position relative to the returned ref's element, updated at most once per frame.
// Touch and pen input are ignored, so nothing follows a finger around on phones.
export default function usePointerPosition() {
  const ref = useRef(null)
  const [position, setPosition] = useState(OFFSCREEN)

  useEffect(() => {
    let frame = 0
    let latest = null

    const onPointerMove = event => {
      if (event.pointerType !== "mouse") return
      latest = { x: event.clientX, y: event.clientY }
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        setPosition({ x: Math.round(latest.x - rect.left), y: Math.round(latest.y - rect.top) })
      })
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onPointerMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return [ref, position]
}
