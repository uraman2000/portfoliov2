import PropTypes from "prop-types"
import { ArrowUpRight } from "./icons"

export default function ExternalLink({ href, children, className = "link" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
