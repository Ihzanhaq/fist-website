import { useId } from 'react'

/**
 * Accessible form field — renders input, textarea, or select. Wires label,
 * required marker, hint, and error via aria-invalid / aria-describedby.
 */
export default function Field({
  label,
  name,
  type = 'text',
  as = 'input',
  required = false,
  error,
  options = [],
  hint,
  className = '',
  ...props
}) {
  const id = useId()
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined

  const base =
    'w-full rounded-xl border bg-surface px-4 py-3 text-ink transition-colors duration-200 placeholder:text-faint focus:outline-none ' +
    (error
      ? 'border-red-500/70 focus:border-red-500'
      : 'border-line focus:border-accent')

  const common = {
    id,
    name,
    required,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    className: base,
    ...props,
  }

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-ink">
        {label}
        {required && (
          <span className="text-accent" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {as === 'textarea' ? (
        <textarea rows={4} {...common} />
      ) : as === 'select' ? (
        <select {...common}>
          <option value="">Select an option…</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} {...common} />
      )}

      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
