import { useState } from 'react'

export default function EchoInput() {
  const [text, setText] = useState('')

  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Echo Input</h3>
        <span className="chip">Forms</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        You should be able to type here, but the input is frozen.
      </p>
      <input
        className="mt-4 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-2 text-sm shadow-sm focus:border-slate-900 focus:outline-none"
        placeholder="Type a short note"
        value={text}
        onChange={() => setText(text)}
      />
      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">
        Preview: {text || '...'}
      </p>
    </section>
  )
}
