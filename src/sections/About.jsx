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
              I started in 2018 building Android apps, moved into full-stack work at a financial services company,
              built enterprise NestJS APIs for travel systems at Accenture, then spent nearly three years as a senior
              React developer on e-commerce, compliance and healthcare products.
            </p>
            <p>
              Since February 2026 I&apos;ve been AI Team Lead and Solutions Architect at YML Group, where I&apos;m the
              primary engineer on an AI analysis platform for the Australian financial services market. I took it from
              first commit to production, and I run the team&apos;s sprints as Scrum Master.
            </p>
            <p>
              I care about software that holds up in production: AI output grounded in deterministic data, tests that
              gate every release, and infrastructure kept in code. If that sounds like your team,{" "}
              <a href="#contact" className="link">
                let&apos;s talk
              </a>
              .
            </p>
          </div>

          <dl className="mt-12 grid gap-x-8 gap-y-8 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <dt className="eyebrow">Based in</dt>
              <dd className="mt-2">Philippines</dd>
            </div>
            <div>
              <dt className="eyebrow">Experience</dt>
              <dd className="mt-2">8+ years in software development</dd>
            </div>
            <div>
              <dt className="eyebrow">Education</dt>
              <dd className="mt-2">
                {education.degree}
                <span className="block text-sm text-muted">
                  {education.school} · {education.period}
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
