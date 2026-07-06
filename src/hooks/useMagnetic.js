import { useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * Returns a ref that makes the attached element "magnetic" — it eases toward
 * the cursor on hover and springs back on leave. Disabled under reduced motion
 * and on coarse pointers (touch).
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduce) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    let raf = 0
    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      target.x = (e.clientX - (r.left + r.width / 2)) * strength
      target.y = (e.clientY - (r.top + r.height / 2)) * strength
      tick()
    }
    const onLeave = () => {
      target.x = 0
      target.y = 0
      tick()
    }
    const tick = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        current.x += (target.x - current.x) * 0.18
        current.y += (target.y - current.y) * 0.18
        el.style.transform = `translate3d(${current.x.toFixed(2)}px, ${current.y.toFixed(2)}px, 0)`
        if (Math.abs(target.x - current.x) > 0.15 || Math.abs(target.y - current.y) > 0.15) {
          tick()
        } else if (target.x === 0 && target.y === 0) {
          el.style.transform = 'translate3d(0,0,0)'
        }
      })
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [strength, reduce])

  return ref
}

export default useMagnetic
