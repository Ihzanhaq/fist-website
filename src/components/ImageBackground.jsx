import { useState } from 'react'

/**
 * Full-bleed background image with a graceful themed-gradient fallback if the
 * source fails. Pass scrim elements as children (rendered above the image).
 * Decorative by default (alt="" + aria-hidden) — the overlaid heading carries
 * the meaning.
 */
export default function ImageBackground({ src, alt = '', className = '', imgClassName = '', children }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden={alt ? undefined : 'true'}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${imgClassName}`}
          loading="eager"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-surface-2 via-surface to-canvas" />
      )}
      {children}
    </div>
  )
}
