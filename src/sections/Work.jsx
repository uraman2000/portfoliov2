import PropTypes from "prop-types"
import ExternalLink from "../components/ExternalLink"
import Reveal from "../components/Reveal"
import Section from "../components/Section"
import TagList from "../components/TagList"
import { LockSimple } from "../components/icons"
import { featuredProject, projects } from "../data/projects"

const hostname = href => new URL(href).hostname.replace(/^www\./, "")

function Screenshot({ image, href }) {
  return (
    <figure className="overflow-hidden rounded-md border border-line bg-surface">
      <div aria-hidden="true" className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-fg/20" />
        <span className="h-2 w-2 rounded-full bg-fg/20" />
        <span className="h-2 w-2 rounded-full bg-fg/20" />
        <span className="ml-3 truncate font-mono text-xs text-subtle">{hostname(href)}</span>
      </div>
      <div className="overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          width="1200"
          height="600"
          loading="lazy"
          decoding="async"
          className="aspect-[2/1] w-full object-cover object-top motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-[1.015]"
        />
      </div>
    </figure>
  )
}

Screenshot.propTypes = {
  image: PropTypes.shape({ src: PropTypes.string.isRequired, alt: PropTypes.string.isRequired }).isRequired,
  href: PropTypes.string.isRequired,
}

// Proprietary work has no screenshot, so it gets a metrics panel with the same 2:1 footprint.
function MetricsPanel({ project }) {
  return (
    <div className="flex flex-col justify-between gap-8 rounded-md border border-line bg-accent-soft p-6 sm:p-8 lg:aspect-[2/1]">
      <ul aria-label="Capabilities" className="flex flex-wrap gap-1.5">
        {project.capabilities.map(item => (
          <li
            key={item}
            className="rounded-sm border border-accent/30 px-2 py-1 font-mono text-xs leading-none text-accent"
          >
            {item}
          </li>
        ))}
      </ul>
      <dl className="grid gap-6 sm:grid-cols-3">
        {project.metrics.map(metric => (
          <div key={metric.label} className="flex flex-col-reverse justify-end gap-2 border-t border-accent/25 pt-4">
            <dt className="text-sm leading-snug text-muted">{metric.label}</dt>
            <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">{metric.value}</dd>
          </div>
        ))}
      </dl>
      <p className="flex items-center gap-2 text-sm text-muted">
        <LockSimple size={16} aria-hidden="true" />
        {project.note}
      </p>
    </div>
  )
}

MetricsPanel.propTypes = {
  project: PropTypes.shape({
    capabilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    metrics: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })).isRequired,
    note: PropTypes.string.isRequired,
  }).isRequired,
}

function ProjectRow({ project, featured = false }) {
  const titleId = `${project.id}-title`

  return (
    <li className="border-t border-line py-12 sm:py-16">
      <Reveal as="article" aria-labelledby={titleId} className="project-row group">
        <header className="project-head">
          <p className="eyebrow flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>{project.period}</span>
            <span aria-hidden="true">·</span>
            <span>{project.client}</span>
            {featured ? (
              <span className="ml-1 rounded-sm bg-accent px-1.5 py-0.5 text-accent-fg">Current</span>
            ) : null}
          </p>
          <h3 id={titleId} className="heading-3 mt-4 text-balance">
            {project.title}
          </h3>
          <p className="mt-3 leading-relaxed text-muted text-pretty">{project.summary}</p>
        </header>

        <div className="project-media lg:self-start">
          {featured ? <MetricsPanel project={project} /> : <Screenshot image={project.image} href={project.links[0].href} />}
        </div>

        <div className="project-body">
          <p className="text-sm">
            <span className="text-subtle">Role: </span>
            <span className="font-medium">{project.role}</span>
          </p>
          <ul className="square-list mt-5 space-y-2.5 text-[0.9375rem] leading-relaxed text-muted">
            {project.outcomes.map(outcome => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
          <TagList items={project.stack} className="mt-6" />
          {project.links?.length ? (
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {project.links.map(link => (
                <ExternalLink key={link.href} href={link.href} className="link min-h-[44px]">
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          ) : null}
        </div>
      </Reveal>
    </li>
  )
}

ProjectRow.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    outcomes: PropTypes.arrayOf(PropTypes.string).isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.object,
    links: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, href: PropTypes.string })),
  }).isRequired,
  featured: PropTypes.bool,
}

export default function Work() {
  return (
    <Section
      id="work"
      index="01"
      label="Work"
      title="Selected work"
      intro="Case studies from recent roles: what each product does, my part in it, and what it delivered."
    >
      <ol className="border-b border-line">
        <ProjectRow project={featuredProject} featured />
        {projects.map(project => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </ol>
    </Section>
  )
}
