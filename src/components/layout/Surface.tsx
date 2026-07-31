import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const surfaceVariants = cva('relative rounded-lg', {
  variants: {
    variant: {
      /**
       * default — white surface, subtle shadow, border.
       * Standard card. Lifts on hover via hover:shadow-card-hover.
       */
      default:
        'bg-background border border-border shadow-[var(--shadow-card)] transition-shadow duration-[var(--duration-normal)] ease-[var(--ease-smooth)] hover:shadow-[var(--shadow-card-hover)]',
      /**
       * elevated — stronger shadow, no border.
       * Use for floating UI elements or featured cards.
       */
      elevated:
        'bg-background shadow-[var(--shadow-float)] transition-shadow duration-[var(--duration-normal)] ease-[var(--ease-smooth)]',
      /**
       * bordered — no shadow, border only.
       * Use for dense lists or table-adjacent cards.
       */
      bordered:
        'bg-background border border-border',
      /**
       * surface — light gray background, no shadow.
       * Use for inner sections or muted content areas.
       */
      surface:
        'bg-brand-surface border border-brand-border/50',
      /**
       * ghost — fully transparent, border only on hover.
       * Use for interactive items that should feel weightless.
       */
      ghost:
        'bg-transparent border border-transparent hover:border-border hover:bg-brand-surface transition-colors duration-[var(--duration-normal)] ease-[var(--ease-smooth)]',
    },
    padding: {
      none: 'p-0',
      sm:   'p-4',
      md:   'p-6',
      lg:   'p-8',
      xl:   'p-10',
    },
    radius: {
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md',
    radius:  'lg',
  },
})

interface SurfaceProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof surfaceVariants> {}

export function Surface({
  variant,
  padding,
  radius,
  className,
  children,
  ...props
}: SurfaceProps) {
  return (
    <div
      className={cn(surfaceVariants({ variant, padding, radius }), className)}
      {...props}
    >
      {children}
    </div>
  )
}
