import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useMagnetic } from '@/hooks/useMagnetic'

const BASE =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[background,color,border-color,box-shadow,transform] duration-300 ease-out disabled:pointer-events-none disabled:opacity-50'

const VARIANTS = {
  primary:
    'bg-accent text-white hover:bg-accent-hover shadow-[0_10px_40px_-16px_var(--color-accent)]',
  secondary:
    'border border-line bg-surface text-ink hover:border-accent/60 hover:bg-surface-2',
  outline: 'border border-line text-ink hover:border-accent/60 hover:text-accent',
  ghost: 'text-ink hover:text-accent',
  onMedia:
    'border border-white/25 bg-white/10 text-white backdrop-blur hover:border-white/40 hover:bg-white/20',
}

const SIZES = {
  sm: 'text-sm px-4 py-2',
  md: 'text-sm px-5 py-2.5',
  lg: 'text-base px-7 py-3.5',
}

export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  magnetic = false,
  withArrow = false,
  className = '',
  children,
  ...props
}) {
  const magneticRef = useMagnetic()
  const refProp = magnetic ? { ref: magneticRef } : {}

  const cls = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} {...refProp} {...props}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...refProp} {...props}>
        {content}
      </a>
    )
  }
  return (
    <button className={cls} {...refProp} {...props}>
      {content}
    </button>
  )
}
