import { cn } from '@/lib/utils'

interface PageWrapperProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Every page must have exactly one <main>. Pass aria-label to
   * describe the page purpose for screen readers.
   */
  'aria-label': string
}

export function PageWrapper({ className, children, ...props }: PageWrapperProps) {
  return (
    <main
      className={cn('relative flex min-h-screen flex-col overflow-x-hidden', className)}
      {...props}
    >
      {children}
    </main>
  )
}
