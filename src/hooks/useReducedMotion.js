import { useEffect, useState } from 'react'

/** Reactive `prefers-reduced-motion` flag. Every animation hook checks this. */
export function useReducedMotion() {
  const [reduce, setReduce] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduce(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduce
}

export default useReducedMotion
