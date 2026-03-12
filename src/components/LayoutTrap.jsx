export default function LayoutTrap() {
  return (
    <section className="card w-[620px] p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Layout Trap</h3>
        <span className="chip">Layout</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        This card forces horizontal scrolling on small screens.
      </p>
      <div className="mt-4 rounded-2xl bg-[rgba(197,180,255,0.35)] px-4 py-3 text-sm text-slate-700">
        Try shrinking the viewport and look for the overflow.
      </div>
    </section>
  )
}
