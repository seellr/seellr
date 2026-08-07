'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MobileMenu } from './MobileMenu'
import { NavigationButton } from '@/components/navigation/NavigationButton'
import { LinkButton } from '@/components/ui/LinkButton'

const DESKTOP_LINKS = [
  { label: 'Product', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

function NavbarLogo() {
  return (
    <Link
      href="/"
      aria-label="Seellr – Go to homepage"
      className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
    >
      <span
        aria-hidden="true"
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[5px] bg-foreground"
      >
        <span className="select-none text-[10px] font-bold leading-none text-background">S</span>
      </span>
      <span aria-hidden="true" className="text-sm font-semibold tracking-tight text-foreground">
        Seellr
      </span>
    </Link>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setMobileOpen(false) }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  return (
    <header
      role="banner"
      className="pointer-events-none sticky top-0 z-[var(--z-sticky)] w-full"
    >
      <div
        className="pointer-events-auto flex items-center justify-between rounded-b-xl border border-border bg-white/90 px-5 py-3 shadow-[0_2px_20px_rgba(0,0,0,0.06)] backdrop-blur-md lg:mx-auto lg:max-w-3xl"
      >
        <div className="flex items-center gap-6">
          <NavbarLogo />

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-0.5" role="list">
              {DESKTOP_LINKS.map(({ label, href }) => {
                const active = pathname === href || pathname.startsWith(href + '/')
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        'rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-150',
                        active
                          ? 'bg-foreground/5 text-foreground'
                          : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent',
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className={cn(
              'hidden rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground sm:block',
              'transition-colors duration-150 hover:bg-foreground/5 hover:text-foreground',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent',
            )}
          >
            Log in
          </Link>

          <LinkButton href="/signup" variant="primary" size="sm" className="hidden sm:inline-flex">
            Get started
          </LinkButton>

          <NavigationButton
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden"
            icon={mobileOpen
              ? <X aria-hidden="true" className="h-4 w-4" />
              : <Menu aria-hidden="true" className="h-4 w-4" />
            }
          />
        </div>
      </div>

      <MobileMenu open={mobileOpen} pathname={pathname} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
