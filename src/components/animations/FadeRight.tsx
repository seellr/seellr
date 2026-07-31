'use client'

import { MotionBase, type MotionBaseProps } from './MotionBase'
import { fadeRight } from './variants'

export function FadeRight(props: Omit<MotionBaseProps, 'variants'>) {
  return <MotionBase variants={fadeRight} {...props} />
}
