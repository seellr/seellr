import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const containerVariants = cva('mx-auto w-full px-4 sm:px-6 lg:px-8', {
  variants: {
    size: {
      /**
       * default — 1280px. Use for most page sections.
       */
      default: 'max-w-[80rem]',
      /**
       * narrow — 720px. Use for prose, blog, docs, centered copy.
       */
      narrow: 'max-w-[45rem]',
      /**
       * wide — 1440px. Use for full-bleed feature sections.
       */
      wide: 'max-w-[90rem]',
      /**
       * full — no max-width. Use for backgrounds and edge-to-edge layouts.
       */
      full: 'max-w-none',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export function Container({ size, className, children, ...props }: ContainerProps) {
  return (
    <div className={cn(containerVariants({ size }), className)} {...props}>
      {children}
    </div>
  )
}
