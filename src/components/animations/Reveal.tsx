'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { VIEWPORT_ONCE, DURATION, EASE } from '@/constants/ANIMATION'

type RevealDirection = 'up' | 'down' | 'left' | 'right'

const CLIP_HIDDEN: Record<RevealDirection, string> = {
  up:    'inset(100% 0 0 0)',
  down:  'inset(0 0 100% 0)',
  left:  'inset(0 100% 0 0)',
  right: 'inset(0 0 0 100%)',
}

const CLIP_VISIBLE = 'inset(0 0 0 0)'

interface RevealProps {
  children: ReactNode
  /**
   * Direction the mask sweeps from.
   * up = content revealed from bottom up (default)
   * down = content revealed from top down
   * left / right = horizontal sweeps
   */
  direction?: RevealDirection
  delay?: number
  duration?: number
  className?: string
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = DURATION.slow,
  className,
}: RevealProps) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ clipPath: CLIP_HIDDEN[direction] }}
      whileInView={{ clipPath: CLIP_VISIBLE }}
      viewport={VIEWPORT_ONCE}
      transition={{ delay, duration, ease: EASE.outExpo }}
    >
      {children}
    </motion.div>
  )
}
