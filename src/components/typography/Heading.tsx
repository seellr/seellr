import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const headingVariants = cva('font-heading font-semibold', {
  variants: {
    size: {
      display: 'text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1]',
      h1:      'text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15]',
      h2:      'text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.2]',
      h3:      'text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-[1.25]',
      h4:      'text-xl sm:text-2xl lg:text-3xl tracking-normal leading-snug',
      h5:      'text-lg sm:text-xl lg:text-2xl tracking-normal leading-snug',
      h6:      'text-base sm:text-lg lg:text-xl tracking-normal leading-snug',
    },
    color: {
      default:   'text-foreground',
      secondary: 'text-brand-text-secondary',
      muted:     'text-muted-foreground',
      inverse:   'text-white',
    },
    weight: {
      medium:   'font-medium',
      semibold: 'font-semibold',
      bold:     'font-bold',
    },
  },
  defaultVariants: {
    size:   'h2',
    color:  'default',
    weight: 'semibold',
  },
})

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof headingVariants> {
  as?: HeadingElement
  /**
   * When `as` is omitted, the semantic element is inferred from `size`.
   * Always set `as` explicitly when the visual size differs from
   * the document hierarchy level — visual != semantic.
   */
}

export function Heading({
  as,
  size,
  color,
  weight,
  className,
  children,
  ...props
}: HeadingProps) {
  const inferredAs: HeadingElement =
    as ??
    ({
      display: 'h1',
      h1:      'h1',
      h2:      'h2',
      h3:      'h3',
      h4:      'h4',
      h5:      'h5',
      h6:      'h6',
    } as const)[size ?? 'h2']

  const Tag = inferredAs

  return (
    <Tag
      className={cn(headingVariants({ size, color, weight }), className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
