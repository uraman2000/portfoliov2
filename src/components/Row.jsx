import PropTypes from "prop-types"

// The Swiss split used across sections: a narrow label column beside a wide content column.
export default function Row({ aside, children, className = "" }) {
  return (
    <div className={`grid gap-y-4 lg:grid-cols-12 lg:gap-x-8 ${className}`}>
      <div className="lg:col-span-3">{aside}</div>
      <div className="lg:col-span-9">{children}</div>
    </div>
  )
}

Row.propTypes = {
  aside: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
}
