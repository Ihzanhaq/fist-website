import { useRef } from 'react'
import { useReveal } from '@/animations/reveal'

/**
 * Wrapper that reveals its content (or descendants matching `selector`) on
 * scroll. Thin component over the useReveal hook.
 */
export default function Reveal({
  as: Tag = 'div',
  selector,
  y,
  stagger,
  delay,
  start,
  once,
  className = '',
  children,
  ...props
}) {
  const ref = useRef(null)
  useReveal(ref, { selector, y, stagger, delay, start, once })
  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  )
}
