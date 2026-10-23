import PropTypes from "prop-types"
import Reveal from "../components/Reveal"
import Section from "../components/Section"
import { ArrowUpRight } from "../components/icons"
import { projects } from "../data/projects"

const hostname = href => new URL(href).hostname.replace(/^www\./, "")

// Not in the Green Glass design: the client projects from the original portfolio, in its card style.
export default function Work({ index }) {
  return (
    <Section
      id="work"
      index={index}
      label="Work"
      title={
        <>
          Client sites I&apos;ve <span className="grad-text">worked on.</span>
        </>
      }
    >
      <Reveal as="ul" className="grid grid-cols-[repeat(auto-fit,minmax(min(400px,100%),1fr))] gap-4">
        {projects.map(project => (
          <li key={project.id} className="glass lift relative flex flex-col overflow-hidden rounded-3xl">
            {/* A browser bar, echoing the hero terminal */}
            <div aria-hidden="true" className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-2 truncate font-mono text-12 text-muted">{hostname(project.href)}</span>
            </div>
            <img
              src={project.image.src}
              alt={project.image.alt}
              width="1200"
              height="480"
              loading="lazy"
              decoding="async"
              className="aspect-[5/2] w-full object-cover object-top"
            />
            <div className="flex flex-col gap-2.5 p-6">
              <h3 className="font-display text-22 font-semibold leading-tight">
                {/* The link's ::after covers the whole card, so anywhere on it opens the site */}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 after:absolute after:inset-0"
                >
                  {project.title}
                  <ArrowUpRight />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </h3>
              <p className="text-16 leading-[1.6] text-muted">{project.description}</p>
            </div>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}

Work.propTypes = {
  index: PropTypes.string.isRequired,
}
