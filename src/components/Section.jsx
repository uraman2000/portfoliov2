import PropTypes from "prop-types"
import Container from "./Container"
import Reveal from "./Reveal"
import Row from "./Row"

export default function Section({ id, index, label, title, intro, children, className = "" }) {
  const headingId = `${id}-heading`

  return (
    <section id={id} aria-labelledby={headingId} className={`border-t border-line py-20 sm:py-28 ${className}`}>
      <Container>
        <Reveal>
          <Row
            aside={
              <p className="eyebrow lg:pt-3">
                <span className="text-accent">{index}</span> — {label}
              </p>
            }
          >
            <h2 id={headingId} className="heading-2 text-balance">
              {title}
            </h2>
            {intro ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{intro}</p> : null}
          </Row>
        </Reveal>
        <div className="mt-14 sm:mt-20">{children}</div>
      </Container>
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  intro: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
}
