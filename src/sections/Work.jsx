import PropTypes from "prop-types"
import ExternalLink from "../components/ExternalLink"
import Reveal from "../components/Reveal"
import Row from "../components/Row"
import Section from "../components/Section"
import StatRow from "../components/StatRow"
import TagList from "../components/TagList"
import { ArrowDown, ArrowRight } from "../components/icons"
import { clientSites, flagship } from "../data/projects"

const hostname = href => new URL(href).hostname.replace(/^www\./, "")

function Label({ children }) {
  return <p className="eyebrow lg:pt-1">{children}</p>
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
}

// Before → after as one headline figure: the "before" stays muted, the result carries the weight.
function OutcomeTile({ outcome }) {
  return (
    <figure className="rounded-md border border-line bg-accent-soft p-6 sm:p-8">
      <p className="flex flex-wrap items-end gap-x-5 gap-y-3">
        <span className="flex flex-col">
          <span className="eyebrow">Before</span>
          <span className="mt-2 text-2xl font-semibold tracking-tight text-muted sm:text-3xl">{outcome.before}</span>
        </span>
        <ArrowRight size={24} className="mb-1 text-subtle sm:mb-1.5" aria-hidden="true" />
        <span className="flex flex-col">
          <span className="eyebrow">After</span>
          <span className="mt-2 text-5xl font-semibold tracking-tight sm:text-6xl">{outcome.after}</span>
        </span>
        <span className="mb-1.5 inline-flex items-center gap-1 rounded-sm bg-success/10 px-2 py-1 text-sm font-medium text-success sm:mb-2.5">
          <ArrowDown size={14} weight="bold" aria-hidden="true" />
          {outcome.change}
        </span>
      </p>
      <figcaption className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-muted">{outcome.caption}</figcaption>
    </figure>
  )
}

OutcomeTile.propTypes = {
  outcome: PropTypes.shape({
    before: PropTypes.string.isRequired,
    after: PropTypes.string.isRequired,
    change: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }).isRequired,
}

function Pipeline({ pipeline }) {
  const lastIndex = pipeline.steps.length - 1

  return (
    <div>
      <ol className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {pipeline.steps.map((step, index) => (
          <li key={step.verb} className="relative bg-surface p-5 sm:p-6">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
              {String(index + 1).padStart(2, "0")} · {step.verb}
            </p>
            <p className="mt-3 font-medium leading-snug">{step.detail}</p>
            {index < lastIndex ? (
              <span
                aria-hidden="true"
                className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full border border-line bg-canvas text-subtle lg:grid"
              >
                <ArrowRight size={12} weight="bold" />
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="mt-5 max-w-3xl text-[0.9375rem] leading-relaxed text-muted text-pretty">{pipeline.caption}</p>
    </div>
  )
}

Pipeline.propTypes = {
  pipeline: PropTypes.shape({
    steps: PropTypes.arrayOf(PropTypes.shape({ verb: PropTypes.string, detail: PropTypes.string })).isRequired,
    caption: PropTypes.string.isRequired,
  }).isRequired,
}

function Highlights({ groups }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {groups.map(group => (
        <div key={group.title} className="grid gap-3 py-6 md:grid-cols-[11rem_1fr] md:gap-8">
          <h4 className="eyebrow text-fg md:pt-0.5">{group.title}</h4>
          <ul className="square-list space-y-2.5 text-[0.9375rem] leading-relaxed text-muted">
            {group.items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

Highlights.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, items: PropTypes.arrayOf(PropTypes.string) })
  ).isRequired,
}

function Flagship({ project }) {
  const titleId = `${project.id}-title`

  return (
    <article id={project.id} aria-labelledby={titleId} className="space-y-14 border-t border-line pt-10 sm:space-y-16 sm:pt-12">
      <Reveal>
        <Row
          aside={
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 lg:flex-col lg:items-start">
              <p className="font-mono text-sm">{project.period}</p>
              <p className="eyebrow">{project.client}</p>
              <span className="rounded-sm bg-accent px-1.5 py-0.5 font-mono text-xs uppercase tracking-[0.08em] text-accent-fg">
                Current
              </span>
            </div>
          }
        >
          <h3 id={titleId} className="text-[1.75rem] font-semibold leading-tight tracking-[-0.03em] text-balance sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 text-sm">
            <span className="text-subtle">Role: </span>
            <span className="font-medium">{project.role}</span>
          </p>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{project.summary}</p>
        </Row>
      </Reveal>

      <Reveal>
        <Row aside={<Label>Outcome</Label>}>
          <OutcomeTile outcome={project.outcome} />
        </Row>
      </Reveal>

      <Reveal>
        <Row aside={<Label>How it works</Label>}>
          <Pipeline pipeline={project.pipeline} />
        </Row>
      </Reveal>

      <Reveal>
        <Row aside={<Label>What I built</Label>}>
          <Highlights groups={project.highlights} />
        </Row>
      </Reveal>

      <Reveal>
        <Row aside={<Label>By the numbers</Label>}>
          <StatRow items={project.metrics} />
          <TagList items={project.stack} className="mt-8" />
        </Row>
      </Reveal>
    </article>
  )
}

Flagship.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    outcome: PropTypes.object.isRequired,
    pipeline: PropTypes.object.isRequired,
    highlights: PropTypes.array.isRequired,
    metrics: PropTypes.array.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

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

function ClientSites({ sites }) {
  return (
    <div className="mt-24 border-t border-line pt-10 sm:pt-12">
      <Reveal>
        <Row aside={<Label>Client sites</Label>}>
          <h3 className="heading-3">Earlier client sites I&apos;ve worked on</h3>
        </Row>
      </Reveal>
      <ul className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {sites.map((site, index) => (
          <Reveal as="li" key={site.id} delay={(index % 3) * 60} className="group">
            <Screenshot image={site.image} href={site.links[0].href} />
            <h4 className="mt-5 text-lg font-semibold tracking-tight">{site.title}</h4>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{site.description}</p>
            <div className="mt-1 flex flex-wrap gap-x-5">
              {site.links.map(link => (
                <ExternalLink key={link.href} href={link.href} className="link min-h-[44px]">
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}

ClientSites.propTypes = {
  sites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
      links: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, href: PropTypes.string })).isRequired,
    })
  ).isRequired,
}

export default function Work() {
  return (
    <Section
      id="work"
      index="01"
      label="Work"
      title="Selected work"
      intro="A flagship case study from my current role, then earlier client sites I've worked on."
    >
      <Flagship project={flagship} />
      <ClientSites sites={clientSites} />
    </Section>
  )
}
