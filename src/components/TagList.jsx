import PropTypes from "prop-types"

export default function TagList({ items, label = "Tech stack", className = "" }) {
  return (
    <ul aria-label={label} className={`relative flex flex-wrap gap-2 ${className}`}>
      {items.map(item => (
        <li key={item} className="rounded-full border border-line px-3 py-1.5 font-mono text-12 text-muted">
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
