import PropTypes from "prop-types"

export default function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
