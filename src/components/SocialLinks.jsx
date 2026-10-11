import PropTypes from "prop-types"
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "./icons"
import { profile } from "../data/profile"

const ICONS = { github: GithubLogo, linkedin: LinkedinLogo }

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {profile.socials.map(({ id, label, href }) => {
        const Icon = ICONS[id]
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label={`${label} (opens in a new tab)`}
              title={label}
            >
              <Icon size={20} aria-hidden="true" />
            </a>
          </li>
        )
      })}
      <li>
        <a href={`mailto:${profile.email}`} className="icon-btn" aria-label={`Email ${profile.email}`} title="Email">
          <EnvelopeSimple size={20} aria-hidden="true" />
        </a>
      </li>
    </ul>
  )
}

SocialLinks.propTypes = {
  className: PropTypes.string,
}
