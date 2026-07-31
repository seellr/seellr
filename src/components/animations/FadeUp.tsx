'use client'

import { MotionBase, type MotionBaseProps } from './MotionBase'
import { fadeUp } from './variants'

export function FadeUp(props: Omit<MotionBaseProps, 'variants'>) {
  return <MotionBase variants={fadeUp} {...props} />
}
