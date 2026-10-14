import { useState } from "react"
import PropTypes from "prop-types"
import Reveal from "../components/Reveal"
import Row from "../components/Row"
import Section from "../components/Section"
import TagList from "../components/TagList"
import { ArrowUp, CaretDown, DownloadSimple } from "../components/icons"
import { experience } from "../data/experience"
import { profile } from "../data/profile"

const recentRoles = experience.filter(role => !role.earlier)
const earlierRoles = experience.filter(role => role.earlier)

function RoleItem({ role }) {
  return (
    <li className="border-t border-line py-10">
      <Reveal>
        <Row
          aside={
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 lg:flex-col">
              <p className="font-mono text-sm">{role.period}</p>
              <p className="eyebrow">{role.domain}</p>
            </div>
          }
        >
          <h3 className="heading-3">
            <span className="block">{role.role}</span>
            <span className="mt-1 flex flex-wrap items-center gap-2 text-base font-normal tracking-normal text-muted">
              {role.company}
              {role.current ? (
                <span className="rounded-sm bg-accent px-1.5 py-0.5 font-mono text-xs uppercase tracking-[0.08em] text-accent-fg">
                  Current
                </span>
              ) : null}
            </span>
          </h3>
          <ul className="square-list mt-5 max-w-3xl space-y-2.5 text-[0.9375rem] leading-relaxed text-muted">
            {role.highlights.map(highlight => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <TagList items={role.stack} className="mt-6" />
          {role.caseStudy ? (
            <a href={role.caseStudy} className="link mt-4 min-h-[44px]">
              Read the full case study
              <ArrowUp size={14} aria-hidden="true" />
            </a>
          ) : null}
        </Row>
      </Reveal>
    </li>
  )
}

RoleItem.propTypes = {
  role: PropTypes.shape({
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    current: PropTypes.bool,
    caseStudy: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default function Experience() {
  const [showEarlier, setShowEarlier] = useState(false)

  return (
    <Section
      id="experience"
      index="03"
      label="Experience"
      title="From Android apps to AI platforms."
      intro="8+ years in software development, including 7+ years of React and Node.js for healthcare, financial services, e-commerce and travel clients."
    >
      <ol>
        {recentRoles.map(role => (
          <RoleItem key={role.company} role={role} />
        ))}
      </ol>
      <ol id="earlier-roles" hidden={!showEarlier}>
        {earlierRoles.map(role => (
          <RoleItem key={role.company} role={role} />
        ))}
      </ol>

      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-line pt-8">
        <button
          type="button"
          onClick={() => setShowEarlier(show => !show)}
          className="link min-h-[44px]"
          aria-expanded={showEarlier}
          aria-controls="earlier-roles"
        >
          {showEarlier ? "Hide earlier roles" : `Show ${earlierRoles.length} earlier roles`}
          <CaretDown
            size={14}
            weight="bold"
            aria-hidden="true"
            className={`motion-safe:transition-transform ${showEarlier ? "rotate-180" : ""}`}
          />
        </button>
        <a href={profile.resume.href} download={profile.resume.fileName} className="link min-h-[44px]">
          <DownloadSimple size={16} aria-hidden="true" />
          Download full resume (PDF)
        </a>
      </div>
    </Section>
  )
}
