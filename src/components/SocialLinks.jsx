import PropTypes from "prop-types"
import { Briefcase, Code } from "./icons"
import { profile } from "../data/profile"

const ICONS = { github: Code, linkedin: Briefcase }

// GitHub and LinkedIn as labelled buttons. Renders bare links so they line up with
// sibling buttons in the parent row; `className` sets the button style.
export default function SocialLinks({ className = "" }) {
  return profile.socials.map(({ id, label, href }) => {
    const Icon = ICONS[id]
    return (
      <a key={id} href={href} target="_blank" rel="noopener noreferrer" className={className}>
        <Icon />
        {label}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  })
}

SocialLinks.propTypes = {
  className: PropTypes.string,
}
