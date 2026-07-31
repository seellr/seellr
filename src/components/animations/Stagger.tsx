'use client'

import { Children, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, staggerContainerFast, fadeUp } from './variants'
import type { Variants } from 'framer-motion'
import { VIEWPORT_ONCE } from '@/constants/ANIMATION'

interface StaggerProps {
  children: ReactNode
  /**
   * fast — 0.05s between children (dense grids)
   * normal — 0.08s (default, section lists)
   */
  speed?: 'fast' | 'normal'
  /**
   * Variant applied to each child wrapper.
   * Defaults to fadeUp. Pass fadeLeft, scaleIn, etc. for variety.
   */
  childVariant?: Variants
  className?: string
  /**
   * When true, children already have their own motion variants
   * and Stagger only provides the staggerChildren container.
   * Children must include their own initial/whileInView/variants.
   */
  passthrough?: boolean
}

export function Stagger({
  children,
  speed = 'normal',
  childVariant,
  className,
  passthrough = false,
}: StaggerProps) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  const containerVariants = speed === 'fast' ? staggerContainerFast : staggerContainer
  const itemVariants = childVariant ?? fadeUp

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className={className}
    >
      {passthrough
        ? children
        : Children.map(children, (child, i) => (
            <motion.div key={i} variants={itemVariants}>
              {child}
            </motion.div>
          ))}
    </motion.div>
  )
}
