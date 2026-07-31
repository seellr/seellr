/**
 * Token-mapped spacing sizes (from CLAUDE.md spacing scale):
 *   xs  →  4px
 *   sm  →  8px
 *   md  →  16px
 *   lg  →  32px
 *   xl  →  48px
 *   2xl →  64px
 *   3xl →  80px
 *   4xl →  96px
 *   5xl →  120px
 *   6xl →  160px
 */
const spacerSizes = {
  xs:  'h-1',
  sm:  'h-2',
  md:  'h-4',
  lg:  'h-8',
  xl:  'h-12',
  '2xl': 'h-16',
  '3xl': 'h-20',
  '4xl': 'h-24',
  '5xl': 'h-30',
  '6xl': 'h-40',
} as const

type SpacerSize = keyof typeof spacerSizes

interface SpacerProps {
  size: SpacerSize
}

export function Spacer({ size }: SpacerProps) {
  return <div className={spacerSizes[size]} aria-hidden="true" />
}
