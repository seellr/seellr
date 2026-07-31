/**
 * Typography scale constants.
 * Values match --text-* tokens in globals.css.
 * Use Tailwind utilities (text-2xl, font-semibold) wherever possible.
 * Use these JS constants only when you need the value in Framer Motion or inline styles.
 */

export const FONT_SIZE = {
  xs:   '0.75rem',    /* 12px — captions         */
  sm:   '0.875rem',   /* 14px — small text       */
  base: '1rem',       /* 16px — body             */
  lg:   '1.125rem',   /* 18px — body large       */
  xl:   '1.25rem',    /* 20px — subtitle         */
  '2xl':'1.5rem',     /* 24px — card title       */
  '3xl':'1.875rem',   /* 30px — card title large */
  '4xl':'2.25rem',    /* 36px                    */
  '5xl':'3rem',       /* 48px — section title    */
  '6xl':'3.75rem',    /* 60px                    */
  '7xl':'4.5rem',     /* 72px — hero headline    */
} as const

export const FONT_WEIGHT = {
  normal:    '400',
  medium:    '500',
  semibold:  '600',
  bold:      '700',
} as const

export const LEADING = {
  tight:    1.2,
  snug:     1.35,
  normal:   1.6,
  relaxed:  1.75,
} as const

export const TRACKING = {
  tight:   '-0.03em',  /* headings     */
  normal:  '-0.01em',  /* body         */
  wide:     '0.02em',  /* badges/caps  */
  widest:   '0.1em',   /* overlines    */
} as const

/**
 * Named text style presets for reference.
 * These describe the intended usage, not new utilities —
 * apply via Tailwind class combinations in components.
 */
export const TEXT_STYLE = {
  hero:        'text-6xl lg:text-7xl font-bold tracking-tight leading-tight',
  sectionTitle:'text-4xl lg:text-5xl font-semibold tracking-tight leading-tight',
  cardTitle:   'text-2xl font-semibold tracking-normal leading-snug',
  body:        'text-base font-normal leading-normal',
  bodyLarge:   'text-lg font-normal leading-normal',
  small:       'text-sm font-normal leading-normal',
  caption:     'text-xs font-normal leading-normal',
  overline:    'text-xs font-semibold tracking-widest uppercase',
  label:       'text-sm font-medium leading-snug',
} as const
