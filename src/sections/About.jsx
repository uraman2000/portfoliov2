import ExternalLink from "../components/ExternalLink"
import Reveal from "../components/Reveal"
import Row from "../components/Row"
import Section from "../components/Section"
import meImage from "../assets/me.webp"
import { certifications, education } from "../data/skills"

export default function About() {
  return (
    <Section id="about" index="05" label="About" title="Hi, I'm Pol.">
      <Row
        aside={
          <Reveal>
            <img
              src={meImage}
              alt="Portrait of Pol Imbing"
              width="800"
              height="1000"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full max-w-[18rem] rounded-md border border-line object-cover lg:max-w-none"
            />
          </Reveal>
        }
      >
        <Reveal delay={60}>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted text-pretty">
            <p>
              I&apos;ve been shipping software since 2018: Android apps first, then full-stack systems for a lending
              company, then several years as a senior React developer on healthcare, compliance and e-commerce products
              for international teams.
            </p>
            <p>
              Today I&apos;m AI Team Lead and Solutions Architect at YML Group. I design Claude-powered features, set the
              architecture, review code, own our Azure infrastructure and run the team&apos;s sprints as Scrum Master.
            </p>
            <p>
              I care about software that&apos;s secure by default, tested where it matters, and simple enough for the
              next developer to change with confidence. If that sounds like your team,{" "}
              <a href="#contact" className="link">
                let&apos;s talk
              </a>
              .
            </p>
          </div>

          <dl className="mt-12 grid gap-x-8 gap-y-8 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <dt className="eyebrow">Based in</dt>
              <dd className="mt-2">Philippines, working remotely</dd>
            </div>
            <div>
              <dt className="eyebrow">Experience</dt>
              <dd className="mt-2">8+ years, since 2018</dd>
            </div>
            <div>
              <dt className="eyebrow">Education</dt>
              <dd className="mt-2">
                {education.degree}
                <span className="block text-sm text-muted">
                  {education.school}, {education.year}
                </span>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Certifications</dt>
              <dd className="mt-2">
                <ul className="space-y-2">
                  {certifications.map(cert => (
                    <li key={cert.href}>
                      <ExternalLink href={cert.href} className="link font-normal">
                        {cert.title}
                      </ExternalLink>
                      <span className="block text-sm text-muted">
                        {cert.issuer}, {cert.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </Reveal>
      </Row>
    </Section>
  )
}
