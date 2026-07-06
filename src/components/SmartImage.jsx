import { useState } from 'react'

/**
 * Image with a graceful themed-gradient fallback if the source fails — so the
 * layout never shows a broken-image icon. Centralised images come from
 * data/images.js; swap there to re-skin the whole site.
 */
export default function SmartImage({
  src,
  alt = '',
  ratio = 'aspect-[16/10]',
  eager = false,
  className = '',
  imgClassName = '',
  ...props
}) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-surface-2 ${ratio} ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
          {...props}
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-surface-2 via-surface to-canvas"
        />
      )}
    </div>
  )
}
