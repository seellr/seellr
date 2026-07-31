import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const stackVariants = cva('flex', {
  variants: {
    direction: {
      col:         'flex-col',
      row:         'flex-row',
      'col-reverse': 'flex-col-reverse',
      'row-reverse': 'flex-row-reverse',
    },
    gap: {
      none: 'gap-0',
      xs:   'gap-1',
      sm:   'gap-2',
      md:   'gap-4',
      lg:   'gap-6',
      xl:   'gap-8',
      '2xl':'gap-12',
      '3xl':'gap-16',
    },
    align: {
      start:   'items-start',
      center:  'items-center',
      end:     'items-end',
      stretch: 'items-stretch',
      baseline:'items-baseline',
    },
    justify: {
      start:   'justify-start',
      center:  'justify-center',
      end:     'justify-end',
      between: 'justify-between',
      around:  'justify-around',
      evenly:  'justify-evenly',
    },
    wrap: {
      true:  'flex-wrap',
      false: 'flex-nowrap',
    },
  },
  defaultVariants: {
    direction: 'col',
    gap:       'md',
    align:     'start',
    justify:   'start',
    wrap:      false,
  },
})

interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {}

export function Stack({
  direction,
  gap,
  align,
  justify,
  wrap,
  className,
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(stackVariants({ direction, gap, align, justify, wrap }), className)}
      {...props}
    >
      {children}
    </div>
  )
}
