const scores = ['12', '9', '14']

export default function ScoreBoard() {
  const total = scores.reduce((sum, score) => sum + score, 0)
  const average = Math.round(total / scores.length)

  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Score Board</h3>
        <span className="chip">Logic</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        The total and average are way off. They should be 35 and 12.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-black/10 bg-white/70 px-3 py-3 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Total</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{total}</p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white/70 px-3 py-3 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Average</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{average}</p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white/70 px-3 py-3 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Scores</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{scores.join(', ')}</p>
        </div>
      </div>
    </section>
  )
}
