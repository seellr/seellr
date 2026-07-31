/**
 * CSS transition strings for use in className or inline style.
 * Values reference --duration-* and --ease-* from globals.css.
 * Use these to keep transitions consistent across components.
 */

export const TRANSITION = {
  /* General-purpose utility transitions */
  fast:    'transition-all duration-[var(--duration-fast)] ease-[var(--ease-smooth)]',
  normal:  'transition-all duration-[var(--duration-normal)] ease-[var(--ease-smooth)]',
  slow:    'transition-all duration-[var(--duration-slow)] ease-[var(--ease-smooth)]',

  /* Specific property transitions for performance */
  colors:  'transition-colors duration-[var(--duration-normal)] ease-[var(--ease-smooth)]',
  opacity: 'transition-opacity duration-[var(--duration-normal)] ease-[var(--ease-smooth)]',
  shadow:  'transition-shadow duration-[var(--duration-normal)] ease-[var(--ease-smooth)]',
  transform:'transition-transform duration-[var(--duration-normal)] ease-[var(--ease-smooth)]',

  /* Composite for card hover */
  card:    'transition-[transform,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-smooth)]',
} as const

/**
 * Framer Motion transition configs.
 * Use in `transition` prop on motion elements.
 */
export const MOTION_TRANSITION = {
  fast:   { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
  normal: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
  slow:   { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  expo:   { duration: 0.6, ease: [0.19, 1, 0.22, 1] as const },
  spring: { type: 'spring', stiffness: 320, damping: 28 } as const,
  springGentle: { type: 'spring', stiffness: 200, damping: 24 } as const,
} as const
