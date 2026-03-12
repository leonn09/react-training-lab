import { useState } from 'react'

export default function StickyCheckbox() {
  const [checked, setChecked] = useState(false)

  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Sticky Checkbox</h3>
        <span className="chip">Forms</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        You should be able to toggle this checkbox off and on.
      </p>
      <label className="mt-5 flex items-center gap-3 text-sm text-slate-700">
        <input
          className="h-4 w-4"
          type="checkbox"
          checked={true}
          onChange={(event) => setChecked(event.target.checked)}
        />
        Enable tips
      </label>
      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">
        Current: {checked ? 'On' : 'Off'}
      </p>
    </section>
  )
}
