export default function StyleTypoCard() {
  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Style Typo</h3>
        <span className="chip">Styles</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        The inner panel should have a border, but it is missing.
      </p>
      <div className="mt-5 boder border-slate-300 rounded-2xl bg-white/70 px-4 py-3 text-sm text-slate-700">
        Spot the Tailwind typo in the class list.
      </div>
    </section>
  )
}
