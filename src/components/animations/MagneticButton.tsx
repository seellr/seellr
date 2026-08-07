'use client'

import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: ReactNode
  /**
   * How strongly the element follows the cursor.
   * 0 = no movement, 1 = full cursor distance.
   * Recommended: 0.2–0.4.
   */
  strength?: number
  stiffness?: number
  damping?: number
  className?: string
}

export function MagneticButton({
  children,
  strength  = 0.3,
  stiffness = 300,
  damping   = 32,
  className,
}: MagneticButtonProps) {
  const ref            = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const x = useSpring(rawX, { stiffness, damping })
  const y = useSpring(rawY, { stiffness, damping })

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current || prefersReduced) return
    const rect    = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width  / 2
    const centerY = rect.top  + rect.height / 2
    rawX.set((e.clientX - centerX) * strength)
    rawY.set((e.clientY - centerY) * strength)
  }

  function handleMouseLeave() {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('inline-flex', className)}
    >
      {children}
    </motion.div>
  )
}
