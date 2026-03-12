import { useState } from 'react'

export default function BurstCounter() {
  const [count, setCount] = useState(0)

  const handleBurst = () => {
    setCount(count + 1)
    setCount(count + 1)
  }

  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Burst Counter</h3>
        <span className="chip">State</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        This button should add 2. It only adds 1 right now.
      </p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-3xl font-semibold text-slate-900">{count}</span>
        <button
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white"
          onClick={handleBurst}
        >
          Add 2
        </button>
      </div>
    </section>
  )
}
