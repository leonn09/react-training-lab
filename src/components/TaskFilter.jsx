import { useState } from 'react'

const tasks = [
  { id: 't1', title: 'Fix layout bug', status: 'Open' },
  { id: 't2', title: 'Review PR', status: 'In Review' },
  { id: 't3', title: 'Update README', status: 'Done' },
]

const filters = ['All', 'Open', 'In Review', 'Done']

export default function TaskFilter() {
  const [active, setActive] = useState('All')

  const filtered = tasks.filter((task) => task.type === active)

  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Task Filter</h3>
        <span className="chip">Logic</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        The list should update when you filter, but it stays empty.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
              active === filter
                ? 'border-slate-900 bg-slate-900 text-white'
                : 'border-slate-900/30 text-slate-700'
            }`}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {filtered.map((task) => (
          <li
            key={task.id}
            className="rounded-2xl border border-black/5 bg-white/70 px-3 py-2"
          >
            {task.title}
          </li>
        ))}
      </ul>
    </section>
  )
}
