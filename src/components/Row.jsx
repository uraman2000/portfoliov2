import PropTypes from "prop-types"
import Reveal from "./Reveal"

// A timeline row: a 200px label column beside the content, stacked below 860px.
export default function Row({ as = "div", aside, children, className = "" }) {
  return (
    <Reveal
      as={as}
      className={`grid grid-cols-[200px_minmax(0,1fr)] gap-10 compact:grid-cols-[minmax(0,1fr)] compact:gap-3 ${className}`}
    >
      {aside}
      {children}
    </Reveal>
  )
}

Row.propTypes = {
  as: PropTypes.elementType,
  aside: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
}
