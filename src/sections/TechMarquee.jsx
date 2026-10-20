import { marquee } from "../data/skills"

// Every item carries its own trailing gap, so -50% lands exactly on the second copy
const ITEM = "mr-4 flex flex-none items-center gap-4 whitespace-nowrap font-display text-28 font-semibold text-muted"

// An endless strip of tools that pauses on hover. The list renders twice so the loop has no seam;
// the second copy is hidden from screen readers.
export default function TechMarquee() {
  return (
    <div className="group relative z-[1] overflow-hidden border-y border-line py-5 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <ul aria-label="Technologies" className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {marquee.map(item => (
          <li key={item} className={ITEM}>
            {item}
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
          </li>
        ))}
        {marquee.map(item => (
          <li key={`${item}-copy`} aria-hidden="true" className={ITEM}>
            {item}
            <span className="h-2 w-2 rounded-full bg-accent" />
          </li>
        ))}
      </ul>
    </div>
  )
}
