import { useState } from 'react'

const tips = [
  'Use the Elements tab to inspect layout issues.',
  'Console logs help track state changes.',
  'Break big tasks into tiny commits.',
]

export default function TipCycler() {
  const [index, setIndex] = useState(0)

  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Tip Cycler</h3>
        <span className="chip">State</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        After the last tip, the text disappears.
      </p>
      <div className="mt-4 rounded-2xl bg-white/70 px-4 py-4 text-sm text-slate-700">
        {tips[index]}
      </div>
      <button
        className="mt-4 rounded-full border border-slate-900/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900"
        onClick={() => setIndex(index + 1)}
      >
        Next tip
      </button>
    </section>
  )
}
