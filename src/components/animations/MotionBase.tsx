'use client'

import type { ElementType, ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants, TargetAndTransition } from 'framer-motion'
import { VIEWPORT_ONCE } from '@/constants/ANIMATION'

export interface MotionBaseProps {
  children: ReactNode
  variants: Variants
  delay?: number
  className?: string
  /**
   * HTML element to render. Defaults to 'div'.
   * Use 'section', 'li', 'span', etc. as needed.
   */
  as?: 'div' | 'section' | 'article' | 'aside' | 'span' | 'li' | 'p' | 'header' | 'footer'
  /**
   * Fraction of element that must be visible to trigger.
   * 0 = any pixel, 1 = fully visible.
   */
  amount?: number
  /** Play animation every time element enters viewport. Default: once. */
  repeat?: boolean
}

/**
 * Inject a delay into the visible variant's transition without mutating
 * the shared variants object.
 */
function applyDelay(variants: Variants, delay: number): Variants {
  const visible = variants.visible as TargetAndTransition
  return {
    ...variants,
    visible: {
      ...visible,
      transition: {
        ...(visible?.transition as object | undefined),
        delay,
      },
    },
  }
}

export function MotionBase({
  children,
  variants,
  delay = 0,
  className,
  as = 'div',
  amount = 0.15,
  repeat = false,
}: MotionBaseProps) {
  const prefersReduced = useReducedMotion()

  // Render plain element — no animation overhead when user prefers reduced motion.
  if (prefersReduced) {
    const Tag = as as ElementType
    return <Tag className={className}>{children}</Tag>
  }

  const resolvedVariants = delay > 0 ? applyDelay(variants, delay) : variants
  const Tag = motion[as]

  return (
    <Tag
      className={className}
      variants={resolvedVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, margin: '-40px', amount }}
    >
      {children}
    </Tag>
  )
}
