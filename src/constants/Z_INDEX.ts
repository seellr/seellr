/**
 * Z-index scale.
 * Values match --z-* tokens in globals.css.
 * Tailwind utilities: z-base, z-raised, z-dropdown, etc.
 * Use JS values only in Framer Motion `zIndex` or dynamic inline styles.
 */

export const Z_INDEX = {
  base:     0,
  raised:   10,
  dropdown: 100,
  sticky:   200,   /* navbar                  */
  overlay:  300,   /* sheet, drawer backdrop  */
  modal:    400,   /* dialog                  */
  toast:    500,   /* notification toasts     */
  tooltip:  600,   /* tooltips always on top  */
} as const

export type ZIndexKey = keyof typeof Z_INDEX
