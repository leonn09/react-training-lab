export default function CapsLockNotice() {
  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Caps Lock Notice</h3>
        <span className="chip">Styles</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        This line should be uppercase, but it is not.
      </p>
      <p className="mt-4 rounded-2xl bg-white/70 px-4 py-3 text-xs upperase tracking-[0.3em] text-slate-500">
        Practice makes progress
      </p>
    </section>
  )
}
