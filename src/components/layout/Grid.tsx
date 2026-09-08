import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const gridVariants = cva('grid', {
  variants: {
    cols: {
      1:    'grid-cols-1',
      2:    'grid-cols-1 sm:grid-cols-2',
      3:    'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4:    'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      /**
       * auto — responsive auto-fill, minimum 280px per column.
       * Use for card grids of unknown count.
       */
      auto: 'grid-cols-[repeat(auto-fill,minmax(280px,1fr))]',
      /**
       * bento — asymmetric 12-column grid base for bento layouts.
       * Children use col-span-* to create the asymmetric pattern.
       */
      bento: 'grid-cols-12',
    },
    gap: {
      sm: 'gap-[15px]',
      md: 'gap-[30px]',
      lg: 'gap-8',
      xl: 'gap-12',
    },
  },
  defaultVariants: {
    cols: 3,
    gap:  'md',
  },
})

interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {}

export function Grid({ cols, gap, className, children, ...props }: GridProps) {
  return (
    <div className={cn(gridVariants({ cols, gap }), className)} {...props}>
      {children}
    </div>
  )
}
