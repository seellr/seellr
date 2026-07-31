'use client'

import { MotionBase, type MotionBaseProps } from './MotionBase'
import { fadeDown } from './variants'

export function FadeDown(props: Omit<MotionBaseProps, 'variants'>) {
  return <MotionBase variants={fadeDown} {...props} />
}
