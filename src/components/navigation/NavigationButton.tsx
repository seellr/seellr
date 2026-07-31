import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface NavigationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * icon  — square, icon-only. aria-label required.
   * text  — text + optional icon, for nav CTAs.
   */
  variant?: 'icon' | 'text'
  /**
   * Required when variant='icon' — provides accessible name.
   */
  'aria-label': string
  icon?: ReactNode
  children?: ReactNode
}

export function NavigationButton({
  variant = 'icon',
  icon,
  children,
  className,
  ...props
}: NavigationButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex shrink-0 items-center justify-center',
        'rounded-lg',
        'text-muted-foreground',
        'transition-colors duration-[var(--duration-fast)] ease-[var(--ease-smooth)]',
        'hover:bg-brand-surface hover:text-foreground',
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-brand-accent focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-40',
        variant === 'icon'
          ? 'h-9 w-9 [&>svg]:h-[18px] [&>svg]:w-[18px]'
          : 'h-9 gap-2 px-3 text-sm font-medium [&>svg]:h-4 [&>svg]:w-4',
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}
