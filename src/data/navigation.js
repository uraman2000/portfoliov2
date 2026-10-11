export const NAV_ITEMS = [
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
]

// "top" (the hero) is observed too, so no nav item is highlighted at the top of the page.
export const SCROLL_SPY_IDS = ["top", ...NAV_ITEMS.map(item => item.id)]
