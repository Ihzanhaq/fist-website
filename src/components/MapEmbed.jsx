/**
 * Keyless Google Maps embed for an office address. Lazy-loaded so it never
 * blocks first paint.
 */
export default function MapEmbed({ query, title = 'Office location map', className = '' }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
  return (
    <iframe
      title={title}
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      className={`h-full w-full border-0 grayscale ${className}`}
    />
  )
}
