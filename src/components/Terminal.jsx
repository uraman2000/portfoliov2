import { useState } from "react"
import PropTypes from "prop-types"
import { terminal } from "../data/terminal"
import useTypewriter from "../hooks/useTypewriter"

function TypedOutput({ text }) {
  const typed = useTypewriter(text)

  return (
    <div aria-hidden="true" className="mt-1.5 whitespace-pre-wrap text-term-ink">
      {typed}
      <span className="ml-0.5 inline-block h-[18px] w-[9px] animate-blink bg-accent align-[-3px]" />
    </div>
  )
}

TypedOutput.propTypes = {
  text: PropTypes.string.isRequired,
}

// The hero's fake shell: pick a command and its output types itself out.
// Picking the same command again replays it, as in the design.
export default function Terminal() {
  const [run, setRun] = useState({ id: terminal.commands[0].id, count: 0 })
  const active = terminal.commands.find(command => command.id === run.id)

  return (
    <div className="overflow-hidden rounded-[22px] bg-term text-term-ink shadow-terminal">
      <div className="flex items-center gap-2 border-b border-white/[.08] px-4.5 py-3.5">
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-2.5 font-mono text-13 text-term-mute">{terminal.title}</span>
      </div>

      <div role="group" aria-label="Terminal commands" className="flex flex-wrap gap-2 px-4.5 pt-4">
        {terminal.commands.map(command => (
          <button
            key={command.id}
            type="button"
            className="min-h-[36px] rounded-full border border-white/[.16] bg-white/[.04] px-3.5 font-mono text-13 text-term-ink transition-[background-color,color,border-color,transform] duration-200 hover:-translate-y-px aria-pressed:border-brand-green aria-pressed:bg-brand-green aria-pressed:text-brand-ink"
            aria-pressed={command.id === run.id}
            onClick={() => setRun(current => ({ id: command.id, count: current.count + 1 }))}
          >
            {command.label}
          </button>
        ))}
      </div>

      <div className="box-content min-h-[300px] px-5 pb-6.5 pt-4.5 font-mono text-14.5 leading-[1.75]">
        <div>
          <span className="text-term-prompt">pol@ai</span>
          <span className="text-term-mute">:~$ </span>
          <span>{active.label}</span>
        </div>
        <TypedOutput key={run.count} text={active.output} />
        {/* The typing is visual only; screen readers get each command's full output once */}
        <p aria-live="polite" className="sr-only">
          {active.output}
        </p>
      </div>
    </div>
  )
}
