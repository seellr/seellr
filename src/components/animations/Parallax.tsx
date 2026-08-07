'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

interface ParallaxProps {
  children: ReactNode
  /**
   * Pixel range to translate over the full scroll range.
   * Positive = slower than scroll (pulls back), feels like depth.
   * Negative = faster than scroll (pushes forward).
   * Recommended: 40–120.
   */
  offset?: number
  className?: string
}

export function Parallax({ children, offset = 60, className }: ParallaxProps) {
  const ref     = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target:  ref,
    offset:  ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}
