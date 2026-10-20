import PropTypes from "prop-types"
import { Download } from "./icons"
import { profile } from "../data/profile"

// Downloads the resume PDF; `className` sets the button style to match its row.
export default function ResumeButton({ className = "" }) {
  return (
    <a href={profile.resume.href} download={profile.resume.fileName} className={className}>
      <Download />
      Resume
      <span className="sr-only"> (PDF download)</span>
    </a>
  )
}

ResumeButton.propTypes = {
  className: PropTypes.string,
}
