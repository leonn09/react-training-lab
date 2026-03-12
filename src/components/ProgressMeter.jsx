export default function ProgressMeter() {
  const progress = 72

  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Progress Meter</h3>
        <span className="chip">Styles</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        The bar should fill to 72%, but it barely moves.
      </p>
      <div className="mt-4 h-3 w-full rounded-full bg-slate-200">
        <div
          className="h-3 rounded-full bg-slate-900"
          style={{ width: progress }}
        />
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">{progress}%</p>
    </section>
  )
}
