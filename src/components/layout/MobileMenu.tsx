'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Container } from './Container'
import { LinkButton } from '@/components/ui/LinkButton'

const MOBILE_LINKS = [
  { label: 'Product', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About',   href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

interface MobileMenuProps {
  open: boolean
  pathname: string
  onClose: () => void
}

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + '/')
}

export function MobileMenu({ open, pathname, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={cn(
            'pointer-events-auto mx-4 mt-2 lg:hidden',
            'rounded-2xl border border-border',
            'bg-white/95 backdrop-blur-md',
            'shadow-[0_8px_32px_rgba(0,0,0,0.08)]',
          )}
        >
          <Container className="py-3">
            <ul className="space-y-0.5" role="list">
              {MOBILE_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={onClose}
                    className={cn(
                      'flex w-full items-center rounded-xl px-3 py-2.5 text-sm font-medium',
                      'transition-colors duration-150',
                      isActive(pathname, href)
                        ? 'bg-foreground/5 text-foreground'
                        : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground',
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
              <Link
                href="/login"
                onClick={onClose}
                className="flex-1 rounded-xl border border-border py-2.5 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Log in
              </Link>
              <LinkButton href="/signup" variant="primary" size="sm" className="flex-1 justify-center" onClick={onClose}>
                Get started
              </LinkButton>
            </div>
          </Container>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
