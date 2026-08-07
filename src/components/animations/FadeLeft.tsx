'use client'

import { MotionBase, type MotionBaseProps } from './MotionBase'
import { fadeLeft } from './variants'

export function FadeLeft(props: Omit<MotionBaseProps, 'variants'>) {
  return <MotionBase variants={fadeLeft} {...props} />
}
