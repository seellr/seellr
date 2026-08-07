/**
 * Framer Motion animation constants.
 * Raw JS values — CSS can't express bezier arrays.
 * Duration values match --duration-* tokens in globals.css.
 */

export const DURATION = {
  instant:  0.1,
  fast:     0.2,
  normal:   0.35,
  slow:     0.55,
  slower:   0.7,
} as const

export const EASE = {
  /** General UI transitions — slightly asymmetric ease-in-out. */
  smooth:       [0.25, 0.46, 0.45, 0.94] as const,
  /**
   * Text / list reveals — gradual deceleration, never abrupt.
   * Preferred for FadeUp, FadeLeft, FadeRight on content.
   */
  outQuart:     [0.25, 1, 0.5, 1] as const,
  /**
   * Dramatic entrances — hero elements, featured cards, dashboard.
   * Decelerates extremely fast; reserve for large-movement reveals.
   */
  outExpo:      [0.19, 1, 0.22, 1] as const,
  inOut:        [0.42, 0, 0.58, 1] as const,
  /** Spring for interactive snapping — no perceptible overshoot. */
  spring:       { type: 'spring', stiffness: 280, damping: 30 } as const,
  /** Spring for hover/lift states — smooth, no overshoot. */
  springGentle: { type: 'spring', stiffness: 200, damping: 32 } as const,
  bounce:       { type: 'spring', stiffness: 400, damping: 17 } as const,
} as const

export const STAGGER_DELAY    = 0.08   /* delay between staggered children    */
export const STAGGER_DELAY_SM = 0.05   /* tighter stagger for dense grids     */
export const STAGGER_DELAY_LG = 0.12   /* wider stagger for spaced-out layouts */

/**
 * Intersection observer viewport config.
 * `once: true` — animations play once, not on re-entry.
 * `-40px` margin — triggers just as element enters viewport.
 */
export const VIEWPORT_ONCE      = { once: true, margin: '-40px' } as const
export const VIEWPORT_ONCE_LATE = { once: true, margin: '-60px' } as const
