export default function MoodChip({ label }) {
  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Mood Chip</h3>
        <span className="chip">Props</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        The label should show, but it is missing.
      </p>
      <div className="mt-5 inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900">
        {label}
      </div>
    </section>
  )
}
