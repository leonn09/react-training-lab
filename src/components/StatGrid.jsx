const stats = [
  { label: 'Open', value: 14 },
  { label: 'Fixed', value: 6 },
  { label: 'Planned', value: 3 },
]

export default function StatGrid() {
  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Stat Grid</h3>
        <span className="chip">Styles</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        The stats should show in a grid, but they stack in a single column.
      </p>
      <div className="mt-4 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-black/10 bg-white/70 px-3 py-3 text-center"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
