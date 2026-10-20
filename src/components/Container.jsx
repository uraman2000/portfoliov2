import PropTypes from "prop-types"

// The design's 1200px content column; sections supply the side padding.
export default function Container({ className = "", children }) {
  return <div className={`mx-auto max-w-page ${className}`}>{children}</div>
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
