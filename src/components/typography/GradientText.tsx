import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Per design spec: max 2-3 gradient uses on the homepage.
 * Use for hero headline accent words or CTA emphasis only.
 * Never use on body text, card titles, or navigation.
 */
const gradientTextVariants = cva(
  'bg-clip-text text-transparent bg-gradient-to-r inline',
  {
    variants: {
      variant: {
        /**
         * Signature green gradient — primary brand accent.
         * Use in the hero headline or final CTA.
         */
        green: 'from-brand-accent to-[#b3e626]',

        /**
         * Blue-green gradient — secondary accent.
         * Use for feature highlights or dashboard section.
         */
        blue: 'from-brand-blue to-brand-accent',

        /**
         * Subtle grayscale gradient — for dark section headings.
         */
        subtle: 'from-white to-white/70',
      },
    },
    defaultVariants: {
      variant: 'green',
    },
  }
)

interface GradientTextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof gradientTextVariants> {}

export function GradientText({
  variant,
  className,
  children,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(gradientTextVariants({ variant }), className)}
      {...props}
    >
      {children}
    </span>
  )
}
