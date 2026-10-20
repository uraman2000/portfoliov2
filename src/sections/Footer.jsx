import { profile } from "../data/profile"

export default function Footer() {
  return (
    // Content-box like the design: 1200px of content plus padding
    <footer className="relative z-[1] mx-auto box-content flex max-w-page flex-wrap justify-between gap-3 px-6 pb-10 pt-6 text-14 text-muted">
      <span>
        © {new Date().getFullYear()} {profile.fullName} · {profile.location}
      </span>
      <span className="font-mono">built with React · deployed on Vercel</span>
    </footer>
  )
}
