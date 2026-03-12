import { useState } from 'react'

const initialTasks = [
  { id: 't1', title: 'Fix counter logic', priority: 1, done: false },
  { id: 't2', title: 'Audit card spacing', priority: 3, done: false },
  { id: 't3', title: 'Add keyboard shortcuts', priority: 2, done: false },
  { id: 't4', title: 'Update empty states', priority: 4, done: false },
]

export default function PriorityList() {
  const [tasks, setTasks] = useState(initialTasks)

  const sortedTasks = tasks.sort((first, second) => first.priority - second.priority)

  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Priority List</h3>
        <span className="chip">Data</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        The order jumps around after you mark items done.
      </p>
      <ul className="mt-4 space-y-3">
        {sortedTasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/70 px-3 py-2"
          >
            <div>
              <p
                className={`text-sm font-medium ${
                  task.done ? 'text-slate-400 line-through' : 'text-slate-900'
                }`}
              >
                {task.title}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Priority {task.priority}
              </p>
            </div>
            <button
              className="rounded-full border border-slate-900/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700"
              onClick={() =>
                setTasks(
                  tasks.map((item) =>
                    item.id === task.id ? { ...item, done: !item.done } : item,
                  ),
                )
              }
            >
              {task.done ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
