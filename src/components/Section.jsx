import PropTypes from "prop-types"
import Container from "./Container"
import Reveal from "./Reveal"

// A numbered mono eyebrow over a display heading, then the section's content.
// `action` (e.g. an "All posts" link) sits to the right of the heading.
export default function Section({ id, index, label, title, action, className = "", children }) {
  const headingId = `${id}-heading`
  const heading = (
    <>
      <p className="eyebrow">
        {index} — {label}
      </p>
      <h2
        id={headingId}
        className="font-display text-60 font-extrabold leading-none tracking-[-0.03em] compact:text-40"
      >
        {title}
      </h2>
    </>
  )

  return (
    <section id={id} aria-labelledby={headingId} className={`relative z-[1] px-6 py-20 ${className}`}>
      <Container className="flex flex-col gap-12">
        {action ? (
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex max-w-[760px] flex-col gap-3.5">{heading}</div>
            {action}
          </Reveal>
        ) : (
          <Reveal className="flex max-w-[760px] flex-col gap-3.5">{heading}</Reveal>
        )}
        {children}
      </Container>
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  action: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
}
