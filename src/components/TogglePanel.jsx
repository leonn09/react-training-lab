import { useState } from 'react'

export default function TogglePanel() {
  const [open, setOpen] = useState(false)

  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Toggle Panel</h3>
        <span className="chip">State</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        The panel should open and close, but it never opens.
      </p>
      <button
        className="mt-4 rounded-full border border-slate-900/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900"
        onClick={() => setOpen(open)}
      >
        Toggle panel
      </button>
      {open ? (
        <div className="mt-4 rounded-2xl bg-white/70 px-4 py-3 text-sm text-slate-700">
          Hidden panel content.
        </div>
      ) : null}
    </section>
  )
}
