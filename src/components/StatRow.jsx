import PropTypes from "prop-types"

// A KPI row of stat tiles: value in primary ink, sentence-case label beneath.
// The DOM keeps label-then-value for screen readers; flex-col-reverse shows the value first.
export default function StatRow({ items, className = "", style }) {
  return (
    <dl className={`grid grid-cols-2 border-t border-line lg:grid-cols-4 ${className}`} style={style}>
      {items.map((item, index) => (
        <div
          key={item.label}
          className={`flex flex-col-reverse justify-end gap-2 py-8 pr-4 lg:border-l lg:border-line lg:pl-6 lg:first:border-l-0 lg:first:pl-0 ${
            index % 2 ? "border-l border-line pl-5" : ""
          } ${index > 1 ? "border-t border-line lg:border-t-0" : ""}`}
        >
          <dt className="text-sm leading-snug text-muted">{item.label}</dt>
          <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}

StatRow.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}
