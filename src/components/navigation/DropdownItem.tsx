import type { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface DropdownItemProps {
  href: string
  label: string
  description?: string
  icon?: ReactNode
  /**
   * Pass active state from the parent that owns usePathname.
   * DropdownItem stays a Server Component — no pathname hook here.
   */
  active?: boolean
  className?: string
}

export function DropdownItem({
  href,
  label,
  description,
  icon,
  active = false,
  className,
}: DropdownItemProps) {
  return (
    <li role="none">
      <Link
        href={href}
        role="menuitem"
        aria-current={active ? 'page' : undefined}
        className={cn(
          'group flex items-start gap-3 rounded-lg px-3 py-2.5',
          'text-sm',
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
              'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md',
              '[&>svg]:h-3.5 [&>svg]:w-3.5',
              'bg-brand-surface group-hover:bg-background',
              'transition-colors duration-[var(--duration-fast)]',
            )}
          >
            {icon}
          </span>
        )}

        <span className="flex flex-col gap-0.5">
          <span className="font-medium leading-none text-foreground">{label}</span>
          {description && (
            <span className="leading-snug text-xs text-muted-foreground">
              {description}
            </span>
          )}
        </span>
      </Link>
    </li>
  )
}
