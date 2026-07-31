import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const labelVariants = cva('inline-block', {
  variants: {
    variant: {
      /**
       * Default — small medium-weight label.
       * Use for: pill text, tag text, form field labels.
       */
      default:  'text-sm font-medium leading-snug text-foreground',

      /**
       * Overline — uppercase tracked text above headings.
       * Use for: section eyebrows, category labels.
       */
      overline: 'text-xs font-semibold tracking-widest uppercase text-brand-accent',

      /**
       * Mono — monospaced label.
       * Use for: version tags, code references, keyboard shortcuts.
       */
      mono:     'text-xs font-medium font-mono text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type LabelElement = 'span' | 'p' | 'label'

interface LabelProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof labelVariants> {
  as?: LabelElement
  /**
   * When `as="label"`, pass `htmlFor` to associate with an input.
   */
  htmlFor?: string
}

export function Label({
  as = 'span',
  variant,
  className,
  children,
  htmlFor,
  ...props
}: LabelProps) {
  if (as === 'label') {
    return (
      <label
        htmlFor={htmlFor}
        className={cn(labelVariants({ variant }), className)}
        {...props}
      >
        {children}
      </label>
    )
  }

  const Tag = as

  return (
    <Tag className={cn(labelVariants({ variant }), className)} {...props}>
      {children}
    </Tag>
  )
}
