// Writing is left out while its section is hidden in App.jsx; add { id: "writing", label: "Writing" } back with it.
export const NAV_ITEMS = [
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "services", label: "Services" },
]

// "top" and "contact" are observed too, so no nav item stays highlighted above or below the nav sections.
export const SCROLL_SPY_IDS = ["top", ...NAV_ITEMS.map(item => item.id), "contact"]
