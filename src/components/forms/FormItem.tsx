import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

/**
 * Vertical stack: FormLabel → input slot → FormMessage.
 * Consumers compose label and message separately; this only provides spacing.
 */
export function FormItem({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex flex-col gap-1.5', className)}
      {...props}
    >
      {children}
    </div>
  )
}
