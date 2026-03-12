const tasks = [
  'Open DevTools',
  'Inspect a component',
  'Fix one bug',
]

export default function Checklist() {
  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Checklist</h3>
        <span className="chip">Render</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        The tasks should show up, but the list is empty.
      </p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {tasks.map((task) => {
          <li className="rounded-2xl border border-black/5 bg-white/70 px-3 py-2">
            {task}
          </li>
        })}
      </ul>
    </section>
  )
}
