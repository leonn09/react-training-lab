export default function DisabledButton() {
  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Disabled Button</h3>
        <span className="chip">Events</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        The button should be clickable but it is stuck disabled.
      </p>
      <button
        className="mt-5 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white disabled:opacity-40"
        disabled={true}
      >
        Start session
      </button>
    </section>
  )
}
