import PropTypes from "prop-types"
import Reveal from "../components/Reveal"
import Section from "../components/Section"
import { services } from "../data/services"

export default function Services({ index }) {
  return (
    <Section
      id="services"
      index={index}
      label="Services"
      title={
        <>
          Hire me full-time, or <span className="grad-text">bring me in</span> for a build.
        </>
      }
    >
      <Reveal as="ul" className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-4">
        {services.map((service, index) => (
          // Content-box like the design: 240px of content plus padding
          <li key={service.id} className="glass lift box-content flex min-h-[240px] flex-col gap-3.5 rounded-3xl p-7">
            <span aria-hidden="true" className="font-display text-40 font-extrabold text-accent-strong">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-22 font-semibold">{service.title}</h3>
            <p className="text-16 leading-[1.6] text-muted">{service.description}</p>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}

Services.propTypes = {
  index: PropTypes.string.isRequired,
}
