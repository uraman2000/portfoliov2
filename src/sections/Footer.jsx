import Container from "../components/Container"
import SocialLinks from "../components/SocialLinks"
import { ArrowUp } from "../components/icons"
import { profile } from "../data/profile"

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.title} · {profile.role}
          </p>
        </div>
        <SocialLinks className="-ml-3 sm:-mr-3 sm:ml-0" />
      </Container>
      <Container>
        <div className="flex flex-col gap-3 border-t border-line py-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
          </p>
          <a href="#top" className="link min-h-[44px] font-normal text-subtle">
            Back to top
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
