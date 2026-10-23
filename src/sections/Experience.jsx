import PropTypes from "prop-types"
import Row from "../components/Row"
import Section from "../components/Section"
import TagList from "../components/TagList"
import { yearsInWords, yearsOfExperience } from "../data/career"
import { experience } from "../data/experience"

function Pipeline({ pipeline }) {
  const lastIndex = pipeline.stages.length - 1

  return (
    <div
      role="img"
      aria-label={pipeline.label}
      className="relative grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-3"
    >
      {pipeline.stages.map((stage, index) => {
        const output = index === lastIndex
        return (
          <div
            key={stage.label}
            className={`flex flex-col gap-1.5 rounded-2xl p-4 ${
              output ? "bg-grad bg-[length:200%_100%] text-white" : "bg-term text-term-ink"
            }`}
          >
            <span className={`font-mono text-12 ${output ? "" : "text-term-prompt"}`}>{stage.step}</span>
            <span className="text-15 font-semibold">{stage.label}</span>
          </div>
        )
      })}
      <div aria-hidden="true" className="absolute -bottom-2.5 left-0 right-0 h-0.5 rounded-sm bg-line">
        <span className="absolute -top-[3px] h-2 w-2 animate-flow rounded-full bg-accent shadow-glow" />
      </div>
    </div>
  )
}

Pipeline.propTypes = {
  pipeline: PropTypes.shape({
    label: PropTypes.string.isRequired,
    stages: PropTypes.arrayOf(PropTypes.shape({ step: PropTypes.string, label: PropTypes.string })).isRequired,
  }).isRequired,
}

const roleShape = PropTypes.shape({
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  context: PropTypes.string,
  pipeline: PropTypes.object,
  highlights: PropTypes.arrayOf(PropTypes.string),
  stack: PropTypes.arrayOf(PropTypes.string),
  summary: PropTypes.string,
})

// The current role: a large card with the pipeline diagram, highlights and stack.
function CurrentRole({ role }) {
  return (
    <Row
      as="li"
      aside={
        <div className="flex flex-col gap-1.5 pt-1.5">
          <span className="font-mono text-13 text-muted">{role.period}</span>
          <span className="inline-flex items-center gap-2 text-13 font-semibold text-accent-strong">
            <span aria-hidden="true" className="h-2 w-2 animate-beacon rounded-full bg-accent" />
            Current role
          </span>
        </div>
      }
    >
      <article className="glass relative flex flex-col gap-6 overflow-hidden rounded-[28px] p-9">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full bg-accent opacity-25 blur-[90px]"
        />
        <div className="relative flex flex-col gap-1.5">
          <h3 className="font-display text-32 font-extrabold tracking-[-0.02em]">{role.role}</h3>
          <span className="text-17 text-muted">{role.context}</span>
        </div>
        <Pipeline pipeline={role.pipeline} />
        <ul className="relative mt-2 flex list-disc flex-col gap-2.5 pl-5 text-16 leading-[1.6] text-ink">
          {role.highlights.map(highlight => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <TagList items={role.stack} />
      </article>
    </Row>
  )
}

CurrentRole.propTypes = { role: roleShape.isRequired }

function PastRole({ role }) {
  return (
    <Row as="li" aside={<span className="pt-6 font-mono text-13 text-muted">{role.period}</span>}>
      <article className="glass lift flex flex-col gap-2 rounded-[22px] px-7 py-6">
        <h3 className="font-display text-22 font-semibold">
          {role.role} · <span className="text-muted">{role.company}</span>
        </h3>
        <p className="text-16 leading-[1.6] text-muted">{role.summary}</p>
      </article>
    </Row>
  )
}

PastRole.propTypes = { role: roleShape.isRequired }

export default function Experience({ index }) {
  return (
    <Section
      id="experience"
      index={index}
      label="Experience"
      title={
        <>
          {yearsInWords(yearsOfExperience())} years, five industries, one habit:{" "}
          <span className="grad-text">ship it.</span>
        </>
      }
      className="pt-30"
    >
      {/* mt-2 on top of the section's 48px gap gives the design's 56px */}
      <ol className="mt-2 flex flex-col gap-14">
        {experience.map(role =>
          role.current ? <CurrentRole key={role.id} role={role} /> : <PastRole key={role.id} role={role} />
        )}
      </ol>
    </Section>
  )
}

Experience.propTypes = {
  index: PropTypes.string.isRequired,
}
