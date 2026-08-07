'use client'

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useInView, animate, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CounterProps {
  /** Final number to count to. */
  to: number
  /** Starting value. Default: 0. */
  from?: number
  /** Animation duration in seconds. Default: 1.8. */
  duration?: number
  /**
   * Format function applied to the current count.
   * Default: `Math.round(v).toLocaleString()`.
   */
  format?: (value: number) => string
  className?: string
  /** Optional suffix rendered after the number (e.g. "k+", "%", "★"). */
  suffix?: string
}

export function Counter({
  to,
  from     = 0,
  duration = 1.8,
  format,
  className,
  suffix,
}: CounterProps) {
  const ref          = useRef<HTMLSpanElement>(null)
  const count        = useMotionValue(from)
  const prefersReduced = useReducedMotion()
  const isInView     = useInView(ref, { once: true, margin: '-40px' })

  // Derive display string from the raw motion value.
  const display = useTransform(count, (v) => {
    const rounded = Math.round(v)
    return format ? format(rounded) : rounded.toLocaleString()
  })

  useEffect(() => {
    if (!isInView) return

    if (prefersReduced) {
      // Show final value immediately — no animation.
      count.set(to)
      return
    }

    const controls = animate(count, to, {
      duration,
      ease: 'easeOut',
    })

    return controls.stop
  }, [isInView, prefersReduced, count, to, duration])

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      <motion.span>{display}</motion.span>
      {suffix && <span aria-hidden="true">{suffix}</span>}
    </span>
  )
}
