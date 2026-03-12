import { useMemo, useState } from 'react'
import { TEAM_MEMBERS } from '../data/team'

export default function MemberSearch() {
  const [query, setQuery] = useState('')

  const filteredMembers = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase()
    if (!cleanQuery) {
      return TEAM_MEMBERS
    }

    return TEAM_MEMBERS.filter((member) =>
      member.name.toLowerCase().includes(cleanQuery),
    )
  }, [])

  return (
    <section className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-slate-900">Member Search</h3>
        <span className="chip">Hooks</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        Search should filter the list instantly, but it stays the same.
      </p>
      <input
        className="mt-4 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-2 text-sm shadow-sm focus:border-slate-900 focus:outline-none"
        placeholder="Type a name"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {filteredMembers.map((member) => (
          <li
            key={member.id}
            className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/70 px-3 py-2"
          >
            <span className="font-medium text-slate-900">{member.name}</span>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              {member.role}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
