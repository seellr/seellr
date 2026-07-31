'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '@/constants/ANIMATION'

interface HoverLiftProps {
  children: ReactNode
  /**
   * Y offset on hover in pixels. Default: -4.
   * Negative lifts up. Keep -3 to -8.
   */
  y?: number
  /** Scale on hover. Default: 1 (no scale). Pass 1.02 for cards that benefit from it. */
  scale?: number
  /** Scale on press. Default: 0.98. */
  tapScale?: number
  className?: string
}

export function HoverLift({
  children,
  y        = -4,
  scale    = 1,
  tapScale = 0.98,
  className,
}: HoverLiftProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      whileHover={prefersReduced ? undefined : { y, scale }}
      whileTap={prefersReduced   ? undefined : { y: 0, scale: tapScale }}
      transition={EASE.springGentle}
    >
      {children}
    </motion.div>
  )
}
