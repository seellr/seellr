/**
 * CSS variable names as JS constants.
 * These mirror src/styles/globals.css @theme declarations.
 * Use these when you need a CSS var string in JS (e.g. Framer Motion `color`).
 * For raw values (easing arrays), see ANIMATION.ts.
 */

export const CSS_VAR = {
  /* Brand colors */
  accent:             'var(--color-brand-accent)',
  accentHover:        'var(--color-brand-accent-hover)',
  blue:               'var(--color-brand-blue)',
  blueHighlight:      'var(--color-brand-blue-highlight)',
  surface:            'var(--color-brand-surface)',
  surfaceSecondary:   'var(--color-brand-surface-secondary)',
  textPrimary:        'var(--color-brand-text-primary)',
  textSecondary:      'var(--color-brand-text-secondary)',
  textMuted:          'var(--color-brand-text-muted)',
  border:             'var(--color-brand-border)',
  success:            'var(--color-brand-success)',
  warning:            'var(--color-brand-warning)',
  danger:             'var(--color-brand-danger)',

  /* Shadows */
  shadowCard:         'var(--shadow-card)',
  shadowCardHover:    'var(--shadow-card-hover)',
  shadowFloat:        'var(--shadow-float)',
  shadowGlow:         'var(--shadow-glow)',
  shadowGlowBlue:     'var(--shadow-glow-blue)',
} as const

export const CONTAINER_MAX_WIDTH = '80rem'  /* 1280px — matches --spacing-container */
export const TEXT_MAX_WIDTH       = '45rem'  /* 720px  — matches --spacing-prose     */

export const BREAKPOINTS = {
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  '2xl': 1536,
} as const

export type Breakpoint = keyof typeof BREAKPOINTS
