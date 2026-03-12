import { useState } from 'react'

export default function ClickTracker() {
  const [clicks, setClicks] = useState(0)

  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Click Tracker</h3>
        <span className="chip">State</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        The number should go up when you click the button.
      </p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-3xl font-semibold text-slate-900">{clicks}</span>
        <button
          className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
          onClick={() => setClicks(clicks)}
        >
          +1 Click
        </button>
      </div>
    </section>
  )
}
