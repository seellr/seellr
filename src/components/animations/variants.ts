import type { Variants } from 'framer-motion'
import { DURATION, EASE } from '@/constants/ANIMATION'

// Text/content reveals — outQuart: gradual deceleration, never snappy
const TEXT_TRANSITION = {
  duration: DURATION.normal,
  ease: EASE.outQuart,
}

// Dramatic entrances — outExpo: fast deceleration for large-movement elements
const DRAMATIC_TRANSITION = {
  duration: DURATION.slow,
  ease: EASE.outExpo,
}

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: TEXT_TRANSITION },
}

export const fadeDown: Variants = {
  hidden:  { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: TEXT_TRANSITION },
}

export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: TEXT_TRANSITION },
}

export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: TEXT_TRANSITION },
}

// Scale entrance — slightly less dramatic, outExpo for confident pop-in
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: DRAMATIC_TRANSITION,
  },
}

// Blur-in — used for modals, popovers, overlays
export const blurIn: Variants = {
  hidden:  { opacity: 0, filter: 'blur(4px)', scale: 0.98 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    transition: DRAMATIC_TRANSITION,
  },
}

// Stagger containers — delayChildren gives the section a moment to settle
export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const staggerContainerFast: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0 },
  },
}
