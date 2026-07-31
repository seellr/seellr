'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const navLinkVariants = cva(
  [
    'relative inline-flex items-center gap-1.5 rounded-sm',
    'text-sm font-medium',
    'transition-colors duration-[var(--duration-fast)] ease-[var(--ease-smooth)]',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-brand-accent focus-visible:ring-offset-2',
    'select-none',
  ].join(' '),
  {
    variants: {
      variant: {
        /**
         * Horizontal navigation bar link.
         * Inactive: muted. Active: foreground + underline indicator.
         */
        nav: 'px-1 py-0.5 text-muted-foreground hover:text-foreground',
        /**
         * Footer / sidebar link — no underline indicator.
         */
        footer: 'text-muted-foreground hover:text-foreground',
      },
    },
    defaultVariants: { variant: 'nav' },
  }
)

interface NavLinkProps
  extends React.ComponentPropsWithoutRef<typeof Link>,
    VariantProps<typeof navLinkVariants> {
  /**
   * Match only the exact pathname.
   * Defaults to true for '/' (prevents root matching everything).
   */
  exact?: boolean
}

export function NavLink({
  href,
  exact,
  variant,
  className,
  children,
  ...props
}: NavLinkProps) {
  const pathname  = usePathname()
  const hrefStr   = href.toString()

  // '/' should only ever match exactly — otherwise every route is "active"
  const useExact  = exact ?? hrefStr === '/'
  const isActive  = useExact
    ? pathname === hrefStr
    : pathname === hrefStr || pathname.startsWith(hrefStr + '/')

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        navLinkVariants({ variant }),
        isActive
          ? 'text-foreground'
          : '',
        className
      )}
      {...props}
    >
      {children}
      {/* Underline indicator — only shown in nav variant */}
      {variant !== 'footer' && (
        <span
          aria-hidden="true"
          className={cn(
            'absolute -bottom-0.5 left-0 h-px w-full rounded-full',
            'bg-foreground',
            'transition-transform duration-[var(--duration-fast)] ease-[var(--ease-smooth)]',
            'origin-left',
            isActive ? 'scale-x-100' : 'scale-x-0',
          )}
        />
      )}
    </Link>
  )
}
