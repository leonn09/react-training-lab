export default function SizeBox() {
  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Size Box</h3>
        <span className="chip">Styles</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        The square should be 120 by 120 pixels, but it is collapsed.
      </p>
      <div
        className="mt-5 rounded-2xl bg-slate-900/10"
        style={{ width: '120', height: '120' }}
      />
    </section>
  )
}
