import { stats as defaultStats } from '@/data/site'

export default function StatStrip({ stats = defaultStats, className = '' }) {
  return (
    <dl
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4 ${className}`}
    >
      {stats.map((s) => (
        <div key={s.label} className="bg-surface px-6 py-8">
          <dt className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {s.value}
          </dt>
          <dd className="mt-1 text-sm text-muted">{s.label}</dd>
        </div>
      ))}
    </dl>
  )
}
