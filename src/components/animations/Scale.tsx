'use client'

import { MotionBase, type MotionBaseProps } from './MotionBase'
import { scaleIn } from './variants'

export function Scale(props: Omit<MotionBaseProps, 'variants'>) {
  return <MotionBase variants={scaleIn} {...props} />
}
