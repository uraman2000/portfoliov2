import PropTypes from "prop-types"

// Inline stroke icons, drawn like the design's: a 24px grid, round caps and joins, currentColor.
function createIcon(name, paths, defaults = {}) {
  function Icon({ size = defaults.size ?? 18, strokeWidth = defaults.strokeWidth ?? 2, ...props }) {
    return (
      <svg
        aria-hidden="true"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {paths}
      </svg>
    )
  }

  Icon.displayName = name
  Icon.propTypes = { size: PropTypes.number, strokeWidth: PropTypes.number }
  return Icon
}

const HEADER_ICON = { size: 20, strokeWidth: 1.8 }

export const Mail = createIcon(
  "Mail",
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </>
)

export const Code = createIcon("Code", <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />)

export const Briefcase = createIcon(
  "Briefcase",
  <>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </>
)

// Not in the design: the resume download button, drawn to match Mail / Code / Briefcase.
export const Download = createIcon("Download", <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />)

// Not in the design: marks the project links, which open the client sites in a new tab.
export const ArrowUpRight = createIcon("ArrowUpRight", <path d="M7 17 17 7M8 7h9v9" />)

export const Sun = createIcon(
  "Sun",
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </>,
  HEADER_ICON
)

export const Moon = createIcon("Moon", <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />, HEADER_ICON)

// Not in the design: the mobile menu button, drawn to match the theme toggle.
export const Menu = createIcon("Menu", <path d="M4 7h16M4 12h16M4 17h16" />, HEADER_ICON)

export const Close = createIcon("Close", <path d="M6 6l12 12M18 6 6 18" />, HEADER_ICON)
