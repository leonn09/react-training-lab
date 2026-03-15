import { useState } from 'react'

const tags = ['UI', 'State', 'Forms', 'Styles']

export default function TagSelector() {
  const [selected, setSelected] = useState(['UI'])

  const toggleTag = (tag) => {
    if (selected.includes(tag)) {
      const index = selected.indexOf(tag)
      selected.splice(index, 1)
      setSelected(selected)
      return
    }

    selected.push(tag)
    setSelected(selected)
  }

  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Tag Selector</h3>
        <span className="chip">State</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        Clicking tags should toggle selection, but nothing changes.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
              selected.includes(tag)
                ? 'border-slate-900 bg-slate-900 text-white'
                : 'border-slate-900/30 text-slate-700'
            }`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  )
}
