import { cn } from '@/lib/utils'

/**
 * Decorative radial glow. Per design spec: max 2-3 glows per page.
 * Never affects layout — always absolute/fixed, pointer-events-none.
 * Parent must be position:relative (or overflow:hidden for clipping).
 */

const variantStyles = {
  green: 'bg-[radial-gradient(ellipse_at_center,rgba(87,223,166,0.15)_0%,transparent_70%)]',
  blue:  'bg-[radial-gradient(ellipse_at_center,rgba(176,215,255,0.18)_0%,transparent_70%)]',
  subtle:'bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)]',
} as const

const sizeStyles = {
  sm:  'w-[400px] h-[300px]',
  md:  'w-[600px] h-[500px]',
  lg:  'w-[900px] h-[700px]',
  xl:  'w-[1200px] h-[900px]',
} as const

const positionStyles = {
  'top-left':     'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
  'top-center':   'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'top-right':    'top-0 right-0 translate-x-1/2 -translate-y-1/2',
  'center-left':  'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2',
  center:         'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'center-right': 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2',
  'bottom-left':  'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
  'bottom-center':'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
  'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
} as const

type GlowVariant  = keyof typeof variantStyles
type GlowSize     = keyof typeof sizeStyles
type GlowPosition = keyof typeof positionStyles

interface BackgroundGlowProps {
  variant?:  GlowVariant
  size?:     GlowSize
  position?: GlowPosition
  className?: string
}

export function BackgroundGlow({
  variant  = 'green',
  size     = 'lg',
  position = 'top-center',
  className,
}: BackgroundGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute select-none',
        variantStyles[variant],
        sizeStyles[size],
        positionStyles[position],
        className
      )}
    />
  )
}
