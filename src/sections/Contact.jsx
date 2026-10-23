import PropTypes from "prop-types"
import Reveal from "../components/Reveal"
import ResumeButton from "../components/ResumeButton"
import SocialLinks from "../components/SocialLinks"
import { Mail } from "../components/icons"
import { profile } from "../data/profile"

export default function Contact({ index }) {
  const mailto = `mailto:${profile.email}`

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative z-[1] px-6 pb-16 pt-20">
      {/* Content-box like the design: 1200px of content plus 48px padding a side */}
      <Reveal className="relative mx-auto box-content flex max-w-page flex-col items-center gap-7 overflow-hidden rounded-[36px] bg-term px-12 py-20 text-center text-term-ink">
        <div aria-hidden="true" className="orb -left-[100px] -top-[180px] h-[420px] w-[420px] animate-drift1 bg-brand-green opacity-[.45]" />
        <div aria-hidden="true" className="orb -bottom-[200px] -right-[60px] h-[380px] w-[380px] animate-drift2 bg-brand-amber opacity-40" />

        <p className="eyebrow relative text-term-prompt">{index} — Contact</p>
        <h2
          id="contact-heading"
          className="relative max-w-[880px] font-display text-72 font-extrabold leading-none tracking-[-0.035em] [text-wrap:balance] compact:text-48"
        >
          {/* The gradient stays the same in both themes */}
          Let&apos;s build something that <span className="grad-text bg-warm">ships.</span>
        </h2>
        <a
          href={mailto}
          className="relative font-mono text-22 text-term-ink underline decoration-term-prompt underline-offset-[6px]"
        >
          {profile.email}
        </a>

        <div className="relative flex flex-wrap justify-center gap-3">
          <a href={mailto} className="btn btn-lg btn-accent">
            <Mail />
            Email me
          </a>
          <SocialLinks className="btn btn-lg btn-on-dark" />
          <ResumeButton className="btn btn-lg btn-on-dark" />
        </div>
      </Reveal>
    </section>
  )
}

Contact.propTypes = {
  index: PropTypes.string.isRequired,
}
