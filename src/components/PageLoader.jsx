/** Minimal branded Suspense fallback for lazy routes. */
export default function PageLoader() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading…</span>
      <span className="relative flex h-10 w-10 items-center justify-center">
        <span className="absolute inline-flex h-10 w-10 rounded-full border border-line" />
        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
      </span>
    </div>
  )
}
