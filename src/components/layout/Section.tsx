import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Vertical spacing from CLAUDE.md:
 *   sm  →  80–100px   (small sections, tight connectors)
 *   md  →  100–120px  (default section rhythm)
 *   lg  →  120–160px  (large feature sections)
 *   xl  →  160px+     (hero, major dividers)
 */
const sectionVariants = cva('relative w-full', {
  variants: {
    spacing: {
      sm: 'py-12 md:py-16 lg:py-20',
      md: 'py-16 md:py-20 lg:py-28',
      lg: 'py-16 md:py-24 lg:py-32',
      xl: 'py-20 md:py-28 lg:py-40',
    },
    background: {
      transparent: '',
      white:       'bg-background',
      surface:     'bg-brand-surface',
      muted:       'bg-muted',
    },
  },
  defaultVariants: {
    spacing:    'md',
    background: 'transparent',
  },
})

interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  /**
   * Always provide an accessible label so assistive technology
   * can distinguish between landmark regions.
   */
  'aria-label'?: string
  'aria-labelledby'?: string
}

export function Section({
  spacing,
  background,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(sectionVariants({ spacing, background }), className)} {...props}>
      {children}
    </section>
  )
}
