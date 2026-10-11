import PropTypes from "prop-types"

export default function TagList({ items, label = "Tech stack", className = "" }) {
  return (
    <ul aria-label={label} className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map(item => (
        <li key={item} className="rounded-sm border border-line px-2 py-1 font-mono text-xs leading-none text-muted">
          {item}
        </li>
      ))}
    </ul>
  )
}

TagList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
}
