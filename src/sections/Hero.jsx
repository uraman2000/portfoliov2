import Container from "../components/Container"
import SocialLinks from "../components/SocialLinks"
import StatRow from "../components/StatRow"
import { ArrowRight, DownloadSimple } from "../components/icons"
import { impact, profile } from "../data/profile"

const rise = delay => ({ "--rise-delay": `${delay}ms` })

export default function Hero() {
  const [headlineStart, headlineEnd] = profile.headline

  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden pt-28 sm:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 top-16 hidden md:block">
        <Container className="h-full">
          <div className="hero-guides h-full" />
        </Container>
      </div>

      <Container className="relative">
        <p
          className="rise inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pl-3 pr-3.5 text-sm text-muted"
          style={rise(0)}
        >
          <span className="status-dot" aria-hidden="true" />
          {profile.availability}
        </p>

        <h1 id="hero-heading" className="mt-8">
          <span className="rise eyebrow block" style={rise(60)}>
            {profile.name} — {profile.title}
          </span>
          <span className="rise display mt-5 block text-balance" style={rise(120)}>
            <span className="sm:block">{headlineStart}</span>{" "}
            <span className="text-muted sm:block">{headlineEnd}</span>
          </span>
        </h1>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="rise lg:col-span-7" style={rise(180)}>
            <p className="max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl sm:leading-relaxed">
              {profile.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="btn btn-primary">
                See selected work
                <ArrowRight size={18} className="nudge-x" aria-hidden="true" />
              </a>
              <a href={profile.resume.href} download={profile.resume.fileName} className="btn btn-secondary">
                <DownloadSimple size={18} className="nudge-y" aria-hidden="true" />
                Download resume
              </a>
            </div>
          </div>

          <dl className="rise grid content-start gap-4 text-sm lg:col-span-4 lg:col-start-9" style={rise(240)}>
            {profile.facts.map(fact => (
              <div key={fact.label} className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-line pt-3">
                <dt className="eyebrow pt-px">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
            <div className="grid grid-cols-[6.5rem_1fr] items-center gap-4 border-t border-line pt-1">
              <dt className="eyebrow">Elsewhere</dt>
              <dd>
                <SocialLinks className="-ml-3" />
              </dd>
            </div>
          </dl>
        </div>

        <StatRow items={impact} className="rise mt-14 sm:mt-16" style={rise(300)} />
      </Container>
    </section>
  )
}
