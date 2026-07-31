import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const textVariants = cva('font-sans', {
  variants: {
    size: {
      xl:   'text-xl leading-relaxed',
      lg:   'text-lg leading-relaxed',
      base: 'text-base leading-normal',
      sm:   'text-sm leading-normal',
    },
    color: {
      default:   'text-foreground',
      secondary: 'text-brand-text-secondary',
      muted:     'text-muted-foreground',
      inverse:   'text-white',
    },
    weight: {
      normal:   'font-normal',
      medium:   'font-medium',
      semibold: 'font-semibold',
    },
    balance: {
      true:  'text-balance',
      false: '',
    },
  },
  defaultVariants: {
    size:    'base',
    color:   'secondary',
    weight:  'normal',
    balance: false,
  },
})

type TextElement = 'p' | 'span' | 'div' | 'li' | 'blockquote'

interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof textVariants> {
  as?: TextElement
}

export function Text({
  as = 'p',
  size,
  color,
  weight,
  balance,
  className,
  children,
  ...props
}: TextProps) {
  const Tag = as

  return (
    <Tag
      className={cn(textVariants({ size, color, weight, balance }), className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
