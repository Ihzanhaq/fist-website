export default function Eyebrow({ children, className = '', as: Tag = 'span' }) {
  return (
    <Tag
      className={`inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-muted ${className}`}
    >
      <span className="h-px w-7 bg-accent" aria-hidden="true" />
      {children}
    </Tag>
  )
}
