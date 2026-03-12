const statusStyles = {
  Open: 'bg-[rgba(255,184,144,0.4)] text-[#6a2e13]',
  Planned: 'bg-[rgba(154,208,255,0.4)] text-[#1f3b6b]',
  Fixed: 'bg-[rgba(167,240,213,0.5)] text-[#0f4f3e]',
}

const difficultyStyles = {
  Easy: 'bg-[rgba(167,240,213,0.4)] text-[#0f4f3e]',
  Medium: 'bg-[rgba(197,180,255,0.45)] text-[#3c2a6b]',
  Hard: 'bg-[rgba(255,184,144,0.45)] text-[#6a2e13]',
}

export default function BugCard({ ticket }) {
  const isFixed = ticket.status === 'Fixed'

  return (
    <article className={`card-muted flex flex-col gap-3 p-4 ${isFixed ? 'card-fixed' : ''}`}>
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-500">
        <span>{ticket.id}</span>
        <span>{ticket.area}</span>
      </div>
      <h3 className="text-base font-semibold text-slate-900">{ticket.title}</h3>
      <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
        <span className={`rounded-full px-3 py-1 ${statusStyles[ticket.status] || statusStyles.Open}`}>
          {ticket.status}
        </span>
        <span
          className={`rounded-full px-3 py-1 ${
            difficultyStyles[ticket.difficulty] || difficultyStyles.Medium
          }`}
        >
          {ticket.difficulty}
        </span>
      </div>
    </article>
  )
}
