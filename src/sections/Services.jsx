import Reveal from "../components/Reveal"
import Section from "../components/Section"
import { ArrowRight, Brain, CloudArrowUp, StackSimple, UsersThree } from "../components/icons"
import { services } from "../data/services"

const ICONS = { ai: Brain, fullstack: StackSimple, cloud: CloudArrowUp, lead: UsersThree }

export default function Services() {
  return (
    <Section
      id="services"
      index="02"
      label="Services"
      title="How I can help"
      intro="Hire me full-time as a senior or lead engineer, or bring me in for a defined freelance project."
    >
      <ul className="grid border-l border-t border-line sm:grid-cols-2">
        {services.map((service, index) => {
          const Icon = ICONS[service.id]
          return (
            <Reveal
              as="li"
              key={service.id}
              delay={(index % 2) * 60}
              className="flex flex-col border-b border-r border-line p-6 sm:p-8 lg:p-10"
            >
              <Icon size={28} className="text-accent" aria-hidden="true" />
              <h3 className="heading-3 mt-8">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{service.description}</p>
              <ul className="square-list mt-6 space-y-2 text-[0.9375rem]">
                {service.points.map(point => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </ul>

      <Reveal className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg text-muted">Have a project or a role in mind?</p>
        <a href="#contact" className="btn btn-primary">
          Start a conversation
          <ArrowRight size={18} className="nudge-x" aria-hidden="true" />
        </a>
      </Reveal>
    </Section>
  )
}
