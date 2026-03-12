import { useState } from 'react'

export default function BadgeToggle() {
  const [active, setActive] = useState(false)

  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Badge Toggle</h3>
        <span className="chip">A11y</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        This toggle only works with a mouse click. Keyboard users are stuck.
      </p>
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-slate-600">Practice Mode</div>
        <div
          className={`cursor-pointer rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${
            active
              ? 'bg-[rgba(167,240,213,0.7)] text-[#0f4f3e]'
              : 'bg-[rgba(255,184,144,0.7)] text-[#6a2e13]'
          }`}
          onClick={() => setActive((prev) => !prev)}
        >
          {active ? 'On' : 'Off'}
        </div>
      </div>
    </section>
  )
}
