import Reveal from "../components/Reveal"
import Section from "../components/Section"
import { writing } from "../data/writing"

// Cover art cycles through the design's three gradients
const ART = ["bg-post-1", "bg-post-2", "bg-post-3"]

export default function Writing() {
  return (
    <Section
      id="writing"
      index="04"
      label="Writing"
      title="Notes from the build."
      action={
        <a href={writing.allPostsHref} className="text-16 font-semibold text-accent-strong underline hover:text-ink">
          All posts →
        </a>
      }
    >
      <Reveal as="ul" className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-4">
        {writing.posts.map((post, index) => (
          <li key={post.title} className="glass lift flex flex-col overflow-hidden rounded-3xl">
            <div aria-hidden="true" className={`h-40 bg-page-2 ${ART[index % ART.length]}`} />
            <div className="flex flex-col gap-2.5 p-6">
              <span className="font-mono text-12 text-muted">
                {post.date} · {post.readTime}
              </span>
              <h3 className="font-display text-22 font-semibold leading-tight">
                {post.href ? <a href={post.href}>{post.title}</a> : post.title}
              </h3>
            </div>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
