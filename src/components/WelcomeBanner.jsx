export default function WelcomeBanner({ title, subtitle }) {
  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Welcome Banner</h3>
        <span className="chip">Props</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">The subtitle should appear below.</p>
      <div className="mt-5 rounded-2xl bg-white/70 px-4 py-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{title}</p>
        <p className="mt-2 text-base font-semibold text-slate-900">{subtitle}</p>
      </div>
    </section>
  )
}
