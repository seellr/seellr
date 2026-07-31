import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const captionVariants = cva('text-xs leading-normal', {
  variants: {
    color: {
      default:   'text-muted-foreground',
      secondary: 'text-brand-text-secondary',
      inverse:   'text-white/70',
      danger:    'text-brand-danger',
      success:   'text-brand-success',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
    },
  },
  defaultVariants: {
    color:  'default',
    weight: 'normal',
  },
})

type CaptionElement = 'p' | 'span'

interface CaptionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof captionVariants> {
  as?: CaptionElement
}

export function Caption({
  as = 'p',
  color,
  weight,
  className,
  children,
  ...props
}: CaptionProps) {
  const Tag = as

  return (
    <Tag
      className={cn(captionVariants({ color, weight }), className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
