import type { ReactNode } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MobileMenuItemProps {
  href: string
  label: string
  description?: string
  icon?: ReactNode
  /** Parent passes active state (parent owns usePathname — avoids duplicate calls). */
  active?: boolean
  /** Shows a chevron — signals the item expands or navigates deeper. */
  hasChildren?: boolean
  onClick?: () => void
  className?: string
}

export function MobileMenuItem({
  href,
  label,
  description,
  icon,
  active = false,
  hasChildren = false,
  onClick,
  className,
}: MobileMenuItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={cn(
        // Minimum 48px touch target per WCAG 2.5.5
        'group flex min-h-[48px] w-full items-center gap-3 rounded-lg px-3 py-3',
        'text-sm font-medium',
        'transition-colors duration-[var(--duration-fast)] ease-[var(--ease-smooth)]',
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-brand-accent focus-visible:ring-offset-2',
        active
          ? 'bg-brand-surface text-foreground'
          : 'text-muted-foreground hover:bg-brand-surface hover:text-foreground',
        className
      )}
    >
      {icon && (
        <span
          aria-hidden="true"
          className={cn(
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-md',
            '[&>svg]:h-4 [&>svg]:w-4',
            active ? 'bg-background text-foreground' : 'bg-brand-surface/80 text-muted-foreground',
            'transition-colors duration-[var(--duration-fast)]',
          )}
        >
          {icon}
        </span>
      )}

      <span className="flex flex-1 flex-col gap-0.5 overflow-hidden">
        <span className="truncate leading-none">{label}</span>
        {description && (
          <span className="truncate text-xs font-normal text-muted-foreground">
            {description}
          </span>
        )}
      </span>

      {hasChildren && (
        <ChevronRight
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-muted-foreground/50 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5"
        />
      )}
    </Link>
  )
}
