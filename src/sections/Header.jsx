import { useEffect, useRef, useState } from "react"
import Container from "../components/Container"
import ThemeToggle from "../components/ThemeToggle"
import { DownloadSimple, List, X } from "../components/icons"
import { NAV_ITEMS, SCROLL_SPY_IDS } from "../data/navigation"
import { profile } from "../data/profile"
import useActiveSection from "../hooks/useActiveSection"

export default function Header() {
  const activeId = useActiveSection(SCROLL_SPY_IDS)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const firstMenuLinkRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const desktop = window.matchMedia("(min-width: 1024px)")
    const onKeyDown = event => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const onBreakpointChange = event => {
      if (event.matches) setMenuOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    desktop.addEventListener("change", onBreakpointChange)
    document.body.style.overflow = "hidden"
    firstMenuLinkRef.current?.focus()

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      desktop.removeEventListener("change", onBreakpointChange)
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  // Close the mobile menu once keyboard focus leaves the header.
  const onHeaderBlur = event => {
    if (menuOpen && event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
      setMenuOpen(false)
    }
  }

  const closeMenu = () => setMenuOpen(false)
  const solid = scrolled || menuOpen

  return (
    <header
      onBlur={onHeaderBlur}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        solid ? "border-line bg-canvas/85 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#top" onClick={closeMenu} className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-sm bg-accent font-mono text-xs font-medium text-accent-fg"
          >
            PI
          </span>
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center">
            {NAV_ITEMS.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="nav-link"
                  aria-current={activeId === item.id ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href={profile.resume.href}
            download={profile.resume.fileName}
            className="btn btn-secondary ml-2 hidden h-10 px-4 text-sm sm:inline-flex"
          >
            <DownloadSimple size={16} className="nudge-y" aria-hidden="true" />
            Resume
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(open => !open)}
            className="icon-btn lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <List size={22} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="h-[calc(100dvh_-_4rem)] overflow-y-auto border-t border-line bg-canvas lg:hidden"
      >
        <Container className="py-6">
          <nav aria-label="Mobile">
            <ul className="border-b border-line">
              {NAV_ITEMS.map((item, index) => (
                <li key={item.id} className="border-t border-line">
                  <a
                    ref={index === 0 ? firstMenuLinkRef : undefined}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    aria-current={activeId === item.id ? "true" : undefined}
                    className="flex items-baseline justify-between py-4 text-2xl font-medium tracking-tight aria-[current=true]:text-accent"
                  >
                    {item.label}
                    <span className="font-mono text-xs text-subtle">{String(index + 1).padStart(2, "0")}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href={profile.resume.href} download={profile.resume.fileName} className="btn btn-primary mt-8 w-full">
            <DownloadSimple size={18} aria-hidden="true" />
            Download resume
          </a>
        </Container>
      </div>
    </header>
  )
}
