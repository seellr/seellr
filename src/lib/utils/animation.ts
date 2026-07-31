import { STAGGER_DELAY } from '@/constants/ANIMATION'

export function getStaggerDelay(index: number, base = STAGGER_DELAY): number {
  return index * base
}

export function getAnimationDelay(index: number, multiplier = STAGGER_DELAY): string {
  return `${index * multiplier}s`
}
