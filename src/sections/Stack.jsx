import Reveal from "../components/Reveal"
import Section from "../components/Section"
import { skillGroups } from "../data/skills"

export default function Stack() {
  return (
    <Section
      id="stack"
      index="04"
      label="Stack"
      title="Tools I ship with"
      intro="The stack behind the work above, from LLM APIs to infrastructure as code."
    >
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={(index % 3) * 60} className="border-t border-line pt-5">
            <h3 className="eyebrow text-fg">{group.label}</h3>
            <ul className="mt-5 space-y-2 text-[0.9375rem] text-muted">
              {group.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
