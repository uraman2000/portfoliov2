import { useEffect, useRef, useState } from "react"
import ThemeToggle from "../components/ThemeToggle"
import { Close, Menu } from "../components/icons"
import { NAV_ITEMS, SCROLL_SPY_IDS } from "../data/navigation"
import { profile } from "../data/profile"
import useActiveSection from "../hooks/useActiveSection"

// Above the design's 860px breakpoint the inline nav links show and the menu closes itself.
const DESKTOP_QUERY = "(min-width: 861px)"

export default function Header() {
  const activeId = useActiveSection(SCROLL_SPY_IDS)
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)
  const firstMenuLinkRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return

    const desktop = window.matchMedia(DESKTOP_QUERY)
    const onKeyDown = event => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const onPointerDown = event => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false)
    }
    const onBreakpointChange = event => {
      if (event.matches) setMenuOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)
    desktop.addEventListener("change", onBreakpointChange)
    firstMenuLinkRef.current?.focus()

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
      desktop.removeEventListener("change", onBreakpointChange)
    }
  }, [menuOpen])

  // Close the menu once keyboard focus leaves the header.
  const onHeaderBlur = event => {
    if (menuOpen && event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
      setMenuOpen(false)
    }
  }

  const closeMenu = () => setMenuOpen(false)
  const mailto = `mailto:${profile.email}`

  return (
    <header
      ref={headerRef}
      onBlur={onHeaderBlur}
      className="sticky top-4 z-20 mx-auto mt-4 w-[calc(100%-32px)] max-w-page"
    >
      <div className="glass flex items-center justify-between gap-4 rounded-full py-2.5 pl-5.5 pr-3 narrow:gap-2.5 narrow:pl-3.5">
        <a href="#top" onClick={closeMenu} className="flex min-w-0 items-center gap-2.5 text-ink">
          <span
            aria-hidden="true"
            className="grid h-8 flex-none place-items-center rounded-[9px] bg-mark px-[9px] font-display text-14 font-extrabold tracking-[0.04em] text-white"
          >
            PMI
          </span>
          <span className="truncate font-mono text-15 font-medium text-ink">
            pol.imbing<span className="text-accent-strong">.dev</span>
          </span>
        </a>

        <nav aria-label="Primary" className="flex gap-7 text-15 font-medium compact:hidden">
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-muted transition-colors duration-200 hover:text-ink aria-[current=true]:text-ink"
              aria-current={activeId === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-none items-center gap-2">
          <ThemeToggle />
          <a
            href={mailto}
            className="btn btn-primary flex h-11 items-center gap-2 whitespace-nowrap rounded-full px-5 text-15 font-semibold phone:hidden"
          >
            Get in touch
          </a>
          {/* Not in the design, which hides the nav below 860px with nothing in its place */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(open => !open)}
            className="icon-btn hidden compact:grid"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Beside the pill rather than inside it: a backdrop-filter parent would stop this panel blurring the page */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className={`glass absolute inset-x-0 top-[calc(100%+10px)] flex-col gap-1.5 rounded-[28px] p-2.5 ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-0.5">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.id}
              ref={index === 0 ? firstMenuLinkRef : undefined}
              href={`#${item.id}`}
              onClick={closeMenu}
              aria-current={activeId === item.id ? "true" : undefined}
              className="flex items-baseline justify-between rounded-[20px] px-4.5 py-3.5 font-display text-24 font-semibold tracking-[-0.01em] text-ink transition-colors duration-200 hover:bg-accent/10 aria-[current=true]:bg-accent/10"
            >
              {item.label}
              <span aria-hidden="true" className="font-mono text-13 font-normal tracking-[0.08em] text-accent-strong">
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </nav>
        {/* Below 520px the pill can't fit the call to action, so it moves in here */}
        <a href={mailto} onClick={closeMenu} className="btn btn-primary btn-lg btn-ink hidden justify-center phone:flex">
          Get in touch
        </a>
      </div>
    </header>
  )
}
