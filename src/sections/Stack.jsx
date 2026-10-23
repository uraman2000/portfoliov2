import PropTypes from "prop-types"
import Reveal from "../components/Reveal"
import Section from "../components/Section"
import { stackGroups } from "../data/skills"

export default function Stack({ index }) {
  return (
    <Section
      id="stack"
      index={index}
      label="Stack"
      title={
        <>
          From prompt to <span className="grad-text">pipeline</span> to prod.
        </>
      }
    >
      <Reveal as="ul" className="grid grid-cols-[repeat(auto-fit,minmax(min(270px,100%),1fr))] gap-4">
        {stackGroups.map(group => (
          <li
            key={group.label}
            className={`glass lift flex flex-col rounded-3xl ${group.headline ? "gap-4 bg-tint p-8" : "gap-3 p-7"} ${
              group.wide ? "col-span-2 compact:col-auto" : ""
            }`}
          >
            <h3 className="font-mono text-13 font-normal text-accent-strong">{group.label}</h3>
            {group.headline ? (
              <>
                <p className="font-display text-28 font-semibold leading-[1.2] tracking-[-0.01em]">{group.headline}</p>
                <p className="text-16 leading-[1.6] text-muted">{group.text}</p>
              </>
            ) : (
              <p className="text-17 leading-[1.6]">{group.text}</p>
            )}
          </li>
        ))}
      </Reveal>
    </Section>
  )
}

Stack.propTypes = {
  index: PropTypes.string.isRequired,
}
