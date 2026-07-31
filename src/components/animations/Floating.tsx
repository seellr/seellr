'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import type { EasingFunction } from 'framer-motion'

// Sine-like bezier — natural oscillation, never mechanical
const SINE_EASE: EasingFunction = (t: number) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

interface FloatingProps {
  children: ReactNode
  /**
   * Vertical travel in pixels. Default: 8.
   * Keep 6–14 — larger values feel restless rather than ambient.
   */
  amplitude?: number
  /** Full cycle duration in seconds. Default: 5. Longer = calmer. */
  duration?: number
  /** Phase offset — staggers multiple floaters so they never sync up. */
  delay?: number
  className?: string
}

export function Floating({
  children,
  amplitude = 8,
  duration  = 5,
  delay     = 0,
  className,
}: FloatingProps) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: SINE_EASE,
      }}
    >
      {children}
    </motion.div>
  )
}
