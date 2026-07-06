import { useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/**
 * Full-bleed autoplay background video.
 *
 * Loading behaviour:
 *  - While the video buffers (before the first frame can play), a shimmering
 *    SKELETON is shown — no background image.
 *  - When the video is ready (`canplay`), it fades in over the skeleton.
 *  - If every source fails to load, the `poster` image is shown as a fallback.
 *
 * `sources` is tried in order — put a small self-hosted clip first
 * (e.g. `/compressed_hero.mp4`) and a remote fallback second.
 *
 * Reduced-motion / Data-Saver users get the static poster image (no video,
 * no animated skeleton).
 */
export default function VideoBackground({ src, sources, poster, className = '' }) {
  const reduce = useReducedMotion()
  const saveData =
    typeof navigator !== 'undefined' &&
    navigator.connection &&
    navigator.connection.saveData

  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  const list = sources && sources.length ? sources : src ? [src] : []

  // Reduced motion / Data Saver: static image only.
  if (reduce || saveData) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
        <img src={poster} alt="" className="h-full w-full object-cover" loading="eager" decoding="async" />
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 overflow-hidden bg-surface-2 ${className}`} aria-hidden="true">
      {/* Skeleton until the first frame is ready */}
      {!ready && !failed && <div className="skeleton absolute inset-0" />}

      {/* Graceful fallback if the video fails to load */}
      {failed && poster && (
        <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
      )}

      <video
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setReady(true)}
        onError={() => setFailed(true)}
      >
        {list.map((s, i) => (
          <source key={i} src={s} type="video/mp4" />
        ))}
      </video>
    </div>
  )
}
