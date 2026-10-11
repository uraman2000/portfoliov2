import { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import emailjs from "@emailjs/browser"
import Reveal from "../components/Reveal"
import Row from "../components/Row"
import Section from "../components/Section"
import SocialLinks from "../components/SocialLinks"
import {
  CaretDown,
  Check,
  CheckCircle,
  CircleNotch,
  Copy,
  DownloadSimple,
  PaperPlaneTilt,
  WarningCircle,
} from "../components/icons"
import { profile } from "../data/profile"

const EMAILJS = {
  serviceId: "service_oecsz2n",
  templateId: "template_d3pj1vk",
  publicKey: "VhBIqLIiWJs-Isbt7",
}

// The selected topic is sent as `subject`, so the existing EmailJS template keeps working.
const TOPICS = ["Job opportunity", "Freelance project", "Something else"]
const EMPTY_FORM = { name: "", email: "", subject: TOPICS[0], message: "" }
const REQUIRED_FIELDS = ["name", "email", "message"]

function validate(field, value) {
  const trimmed = value.trim()
  switch (field) {
    case "name":
      return trimmed ? "" : "Please enter your name."
    case "email":
      if (!trimmed) return "Please enter your email address."
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) ? "" : "Please enter a valid email, like name@company.com."
    case "message":
      return trimmed.length >= 10 ? "" : "Please write at least a sentence (10+ characters)."
    default:
      return ""
  }
}

function Field({ id, label, error, className = "", children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-danger">
          <WarningCircle size={16} aria-hidden="true" className="shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  )
}

Field.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default function Contact() {
  const formRef = useRef(null)
  const [values, setValues] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const fieldProps = name => ({
    id: name,
    name,
    value: values[name],
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    onChange: event => {
      const { value } = event.target
      setValues(current => ({ ...current, [name]: value }))
      if (errors[name]) setErrors(current => ({ ...current, [name]: validate(name, value) }))
      if (status === "success") setStatus("idle")
    },
    onBlur: event => {
      if (REQUIRED_FIELDS.includes(name)) {
        const { value } = event.target
        setErrors(current => ({ ...current, [name]: validate(name, value) }))
      }
    },
  })

  const onSubmit = async event => {
    event.preventDefault()
    const nextErrors = Object.fromEntries(REQUIRED_FIELDS.map(field => [field, validate(field, values[field])]))
    setErrors(nextErrors)

    const firstInvalid = REQUIRED_FIELDS.find(field => nextErrors[field])
    if (firstInvalid) {
      formRef.current.elements[firstInvalid].focus()
      return
    }

    setStatus("sending")
    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, formRef.current, EMAILJS.publicKey)
      setValues(EMPTY_FORM)
      setStatus("success")
    } catch {
      // Keep what the visitor typed so they can retry or copy it into an email.
      setStatus("error")
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      // Clipboard access can be blocked; the mailto link next to the button still works.
    }
  }

  return (
    <Section
      id="contact"
      index="06"
      label="Contact"
      title="Let's build something together."
      intro="Hiring for a senior or lead role, or need help shipping an AI feature? Send a note and I'll get back to you."
    >
      <Row
        aside={
          <Reveal className="space-y-8">
            <div>
              <p className="eyebrow">Email</p>
              <div className="mt-1 flex items-center">
                <a href={`mailto:${profile.email}`} className="link">
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="icon-btn"
                  aria-label={copied ? "Email address copied" : "Copy email address"}
                  title={copied ? "Copied" : "Copy email address"}
                >
                  {copied ? (
                    <Check size={18} className="text-success" aria-hidden="true" />
                  ) : (
                    <Copy size={18} aria-hidden="true" />
                  )}
                </button>
                <span role="status" className="sr-only">
                  {copied ? "Email address copied to clipboard" : ""}
                </span>
              </div>
            </div>
            <div>
              <p className="eyebrow">Elsewhere</p>
              <SocialLinks className="-ml-3 mt-1" />
            </div>
            <div>
              <p className="eyebrow">Resume</p>
              <a href={profile.resume.href} download={profile.resume.fileName} className="link mt-3">
                <DownloadSimple size={16} aria-hidden="true" />
                Download PDF
              </a>
            </div>
          </Reveal>
        }
      >
        <Reveal delay={60}>
          <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
            <Field id="name" label="Name" error={errors.name}>
              <input {...fieldProps("name")} type="text" autoComplete="name" required className="field" />
            </Field>

            <Field id="email" label="Email" error={errors.email}>
              <input
                {...fieldProps("email")}
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                className="field"
              />
            </Field>

            <Field id="subject" label="What's this about?" className="sm:col-span-2">
              <div className="relative">
                <select {...fieldProps("subject")} className="field cursor-pointer appearance-none pr-10">
                  {TOPICS.map(topic => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
                <CaretDown
                  size={16}
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted"
                />
              </div>
            </Field>

            <Field id="message" label="Message" error={errors.message} className="sm:col-span-2">
              <textarea
                {...fieldProps("message")}
                rows={6}
                required
                placeholder="A few lines about the role or project, timeline and anything else useful."
                className="field resize-y"
              />
            </Field>

            <div className="flex flex-col-reverse gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <div aria-live="polite" className="text-sm">
                {status === "success" ? (
                  <p className="flex items-center gap-2 text-success">
                    <CheckCircle size={18} aria-hidden="true" className="shrink-0" />
                    Thanks, your message is on its way. I&apos;ll get back to you soon.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="flex items-start gap-2 text-danger">
                    <WarningCircle size={18} aria-hidden="true" className="mt-px shrink-0" />
                    <span>
                      Your message couldn&apos;t be sent. Please try again, or email me at{" "}
                      <a href={`mailto:${profile.email}`} className="underline underline-offset-2">
                        {profile.email}
                      </a>
                      .
                    </span>
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-primary shrink-0 disabled:cursor-wait disabled:opacity-80"
              >
                {status === "sending" ? (
                  <>
                    <CircleNotch size={18} className="motion-safe:animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <PaperPlaneTilt size={18} className="nudge-x" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
          </form>
        </Reveal>
      </Row>
    </Section>
  )
}
