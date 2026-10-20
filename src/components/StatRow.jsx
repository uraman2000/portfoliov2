import PropTypes from "prop-types"
import Reveal from "./Reveal"

// Glass stat cards. The DOM keeps label-then-value for screen readers; flex-col-reverse shows the value first.
export default function StatRow({ items, className = "" }) {
  return (
    <Reveal
      as="dl"
      className={`mx-auto grid max-w-page grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-4 ${className}`}
    >
      {items.map(item => (
        <div key={item.label} className="glass lift flex flex-col-reverse justify-end gap-2 rounded-[20px] p-6">
          <dt className="text-15 leading-[1.45] text-muted">{item.label}</dt>
          <dd className="grad-text font-display text-48 font-extrabold leading-none">{item.value}</dd>
        </div>
      ))}
    </Reveal>
  )
}

StatRow.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })).isRequired,
  className: PropTypes.string,
}
