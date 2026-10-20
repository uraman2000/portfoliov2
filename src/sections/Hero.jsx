import Container from "../components/Container"
import ResumeButton from "../components/ResumeButton"
import SocialLinks from "../components/SocialLinks"
import StatRow from "../components/StatRow"
import Terminal from "../components/Terminal"
import { Mail } from "../components/icons"
import meImage from "../assets/me.webp"
import { impact, profile } from "../data/profile"
import { terminal } from "../data/terminal"

export default function Hero() {
  const [headlineStart, headlineAccent, headlineEnd] = profile.headline

  return (
    <>
      <section
        id="top"
        aria-labelledby="hero-heading"
        className="relative z-[1] bg-dots bg-[length:28px_28px] px-6 pb-24 pt-18"
      >
        <div aria-hidden="true" className="orb -left-[140px] -top-[120px] h-[520px] w-[520px] animate-drift1 bg-brand-green" />
        <div aria-hidden="true" className="orb -right-[120px] top-20 h-[460px] w-[460px] animate-drift2 bg-brand-amber" />
        <div aria-hidden="true" className="orb -bottom-[160px] left-[38%] h-[380px] w-[380px] animate-drift3 bg-brand-lime" />

        <Container className="relative grid grid-cols-[repeat(auto-fit,minmax(min(480px,100%),1fr))] items-center gap-14">
          <div className="flex flex-col gap-7">
            <div className="flex animate-intro items-center gap-4">
              <div className="relative h-21 w-21 flex-none">
                <div aria-hidden="true" className="absolute -inset-1 animate-spin-slow rounded-full bg-ring" />
                <div className="absolute inset-0 overflow-hidden rounded-full border-[3px] border-page bg-page-2">
                  {/* Crops the 4:5 portrait to head and shoulders */}
                  <img
                    src={meImage}
                    alt={`Portrait of ${profile.fullName}`}
                    width="800"
                    height="1000"
                    decoding="async"
                    className="h-full w-full origin-[56%_18%] scale-[1.2] object-cover object-[50%_0]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-20 font-semibold">{profile.fullName}</span>
                <span className="font-mono text-13 tracking-[0.02em] text-accent-strong">{profile.tagline}</span>
              </div>
            </div>

            <h1
              id="hero-heading"
              className="animate-intro font-display text-76 font-extrabold leading-[0.98] tracking-[-0.035em] [animation-delay:100ms] [text-wrap:balance] compact:text-52"
            >
              {headlineStart}
              <span className="grad-text">{headlineAccent}</span>
              {headlineEnd}
            </h1>

            <p className="max-w-[560px] animate-intro text-19 leading-[1.6] text-muted [animation-delay:250ms] [text-wrap:pretty]">
              {profile.lead}
            </p>

            <div className="flex animate-intro flex-wrap gap-2 [animation-delay:400ms]">
              <a href={`mailto:${profile.email}`} className="btn btn-primary btn-lg btn-ink">
                <Mail />
                Email me
              </a>
              <SocialLinks className="btn btn-ghost glass btn-lg" />
              <ResumeButton className="btn btn-ghost glass btn-lg" />
            </div>
          </div>

          <div className="relative animate-intro [animation-delay:550ms]">
            <Terminal />
            <div className="glass absolute -bottom-6.5 -right-3.5 flex items-center gap-3 rounded-2xl px-4 py-3 text-14 font-semibold">
              <span aria-hidden="true" className="h-2.5 w-2.5 animate-beacon rounded-full bg-accent" />
              {terminal.hint}
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="Impact" className="relative z-[1] px-6 pb-18 pt-6">
        <StatRow items={impact} />
      </section>
    </>
  )
}
