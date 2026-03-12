import BugCard from './BugCard'
import { BUG_TICKETS } from '../data/bugs'

export default function BugBoard() {
  const openCount = BUG_TICKETS.filter((ticket) => ticket.status === 'Open').length
  const plannedCount = BUG_TICKETS.filter((ticket) => ticket.status === 'Planned').length

  return (
    <section className="card p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Bug Board</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            Debugging dojo sprint
          </h2>
          <p className="mt-2 max-w-sm text-sm text-slate-600">
            Pick a ticket, open the component, and use DevTools to track down the issue.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Open</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{openCount}</p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Planned</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{plannedCount}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        {BUG_TICKETS.map((ticket) => (
          <BugCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </section>
  )
}
