import usePointerPosition from "../hooks/usePointerPosition"

const RADIUS = 560 // the design's 560px glow circle

// The soft accent glow that follows the mouse across the page. A fixed-size circle moved with
// transform, so it never repaints the page.
export default function Spotlight() {
  const [ref, { x, y }] = usePointerPosition()

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute left-0 top-0 h-[1120px] w-[1120px] bg-spotlight will-change-transform"
        style={{ transform: `translate(${x - RADIUS}px, ${y - RADIUS}px)` }}
      />
    </div>
  )
}
