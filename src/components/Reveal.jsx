import PropTypes from "prop-types"
import useInView from "../hooks/useInView"

// Rises and un-blurs as it scrolls into view. Browsers with scroll-driven animations tie the rise to
// scroll position, as the design does; elsewhere it plays once when the element first enters view.
// Both live in index.css and are skipped when the visitor prefers reduced motion.
export default function Reveal({ as: Component = "div", className = "", children, ...rest }) {
  const [ref, inView] = useInView()

  return (
    <Component ref={ref} className={`reveal ${inView ? "is-visible" : ""} ${className}`} {...rest}>
      {children}
    </Component>
  )
}

Reveal.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
}
