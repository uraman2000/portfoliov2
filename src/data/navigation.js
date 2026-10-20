export const NAV_ITEMS = [
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "services", label: "Services" },
  { id: "writing", label: "Writing" },
]

// "top" and "contact" are observed too, so no nav item stays highlighted above or below the nav sections.
export const SCROLL_SPY_IDS = ["top", ...NAV_ITEMS.map(item => item.id), "contact"]
