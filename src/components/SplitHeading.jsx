import { useRef } from 'react'
import { useSplitReveal } from '@/animations/splitReveal'

/**
 * Heading whose words reveal in a staggered mask on scroll.
 * Falls back to a normal visible heading under reduced motion.
 */
export default function SplitHeading({
  as: Tag = 'h2',
  className = '',
  delay,
  stagger,
  start,
  children,
  ...props
}) {
  const ref = useRef(null)
  useSplitReveal(ref, { delay, stagger, start })
  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  )
}
