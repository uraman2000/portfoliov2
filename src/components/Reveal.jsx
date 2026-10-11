import PropTypes from "prop-types"
import useInView from "../hooks/useInView"

// Fades content up once as it scrolls into view. The motion lives in index.css and is
// skipped entirely when the visitor prefers reduced motion.
export default function Reveal({ as: Component = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, inView] = useInView()

  return (
    <Component
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Component>
  )
}

Reveal.propTypes = {
  as: PropTypes.elementType,
  delay: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
}
