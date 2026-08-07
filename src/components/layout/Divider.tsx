import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const dividerVariants = cva('w-full border-none h-px', {
  variants: {
    variant: {
      /**
       * default — standard 1px border color line.
       */
      default: 'bg-border',
      /**
       * subtle — very faint, for within-card separation.
       */
      subtle: 'bg-border/50',
      /**
       * gradient — fades out to transparent on both ends.
       * Use for section separators that should feel light.
       */
      gradient:
        'bg-gradient-to-r from-transparent via-border to-transparent',
      /**
       * accent — brand green gradient. Use sparingly.
       */
      accent:
        'bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent',
    },
    spacing: {
      sm: 'my-6',
      md: 'my-8',
      lg: 'my-12',
      none: 'my-0',
    },
  },
  defaultVariants: {
    variant: 'default',
    spacing: 'none',
  },
})

interface DividerProps extends VariantProps<typeof dividerVariants> {
  className?: string
}

export function Divider({ variant, spacing, className }: DividerProps) {
  return (
    <hr
      className={cn(dividerVariants({ variant, spacing }), className)}
      aria-hidden="true"
    />
  )
}
