import type { HTMLAttributes, Ref } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const cardVariants = cva(
  [
    'relative rounded-xl bg-background border border-border',
    'transition-[transform,box-shadow,border-color]',
    'duration-[var(--duration-normal)] ease-[var(--ease-smooth)]',
  ].join(' '),
  {
    variants: {
      variant: {
        /** Static surface — no hover interaction. */
        default: 'shadow-[var(--shadow-card)]',

        /** Higher elevation. For floating UI elements. */
        elevated: 'shadow-[var(--shadow-float)] border-transparent',

        /** Prominent border, no shadow. Good for feature grids. */
        bordered: 'border-2 shadow-none',

        /**
         * Clickable card. Lifts + rotates + shadow deepens on hover.
         * Subtle rotation gives physicality without being distracting.
         */
        interactive:
          'shadow-[var(--shadow-card)] cursor-pointer ' +
          'hover:-translate-y-1.5 hover:rotate-[0.25deg] ' +
          'hover:shadow-[var(--shadow-card-hover)] hover:border-foreground/10 ' +
          'focus-visible:outline-none focus-visible:ring-2 ' +
          'focus-visible:ring-brand-accent focus-visible:ring-offset-2',

        /** No shadow, no border. For content embedded in a surface. */
        ghost: 'border-transparent shadow-none',
      },

      padding: {
        none: '',
        sm:   'p-4',
        md:   'p-6',
        lg:   'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
)

interface BaseCardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  ref?: Ref<HTMLDivElement>
}

export function BaseCard({
  ref,
  variant,
  padding,
  className,
  children,
  ...props
}: BaseCardProps) {
  return (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding }), className)}
      {...props}
    >
      {children}
    </div>
  )
}
