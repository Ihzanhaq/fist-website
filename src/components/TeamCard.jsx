import { useState } from 'react'

/**
 * Team member card — fills its parent slot. Portrait photo with a dark bottom
 * gradient and role + name overlaid (per the reference design). Image scales on
 * hover; falls back to a themed initials avatar if the photo fails to load.
 */
export default function TeamCard({ name, role, image, initials }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="group h-full w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)] transition-[border-color] duration-300 hover:border-accent/50">
      <div className="relative h-full w-full overflow-hidden">
        {!failed && image ? (
          <img
            src={image}
            alt={`${name} — ${role}`}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-linear-to-br from-surface-2 via-surface to-canvas">
            <span className="font-display text-5xl font-semibold text-accent">{initials}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 translate-y-1 p-5 transition-transform duration-300 ease-out group-hover:translate-y-0">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">{role}</p>
          <h3 className="mt-1 font-display text-xl font-semibold text-white">{name}</h3>
        </div>
      </div>
    </div>
  )
}
