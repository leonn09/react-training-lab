import { useState } from 'react'

export default function FeedbackForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Feedback Form</h3>
        <span className="chip">Events</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        Submitting this form refreshes the page. It should stay in-place.
      </p>
      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        <input
          className="w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-2 text-sm shadow-sm focus:border-slate-900 focus:outline-none"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <textarea
          className="min-h-[84px] w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-2 text-sm shadow-sm focus:border-slate-900 focus:outline-none"
          placeholder="One thing to improve"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            {submitted ? 'Thanks for the feedback!' : 'Send a quick note'}
          </p>
          <button
            className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}
