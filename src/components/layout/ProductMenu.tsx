'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MegaMenuSection } from '@/components/navigation/MegaMenuSection'
import { FeatureIcon } from '@/components/icons/FeatureIcon'
import { FEATURES } from '@/lib/mock/features'

/**
 * "Product" nav trigger + mega menu panel.
 * Extracted from Navbar to keep both files under the 250-line limit.
 * Hover: scheduleClose pattern prevents accidental closes while
 * the cursor travels from trigger to panel.
 */
export function ProductMenu() {
  const [open, setOpen] = useState(false)
  const containerRef    = useRef<HTMLDivElement>(null)
  const closeTimer      = useRef<ReturnType<typeof setTimeout>>(undefined)

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpen(false), 150)
  }
  function cancelClose() {
    clearTimeout(closeTimer.current)
  }

  // Close on outside click
  useEffect(() => {
    if (!open) return
    function handler(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  function handleTriggerKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(v => !v) }
    if (e.key === 'Escape') setOpen(false)
    if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(true) }
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(true) }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onKeyDown={handleTriggerKeyDown}
        className={cn(
          'relative inline-flex items-center gap-1 rounded-sm px-1 py-0.5',
          'text-sm font-medium select-none',
          'transition-colors duration-[var(--duration-fast)] ease-[var(--ease-smooth)]',
          'focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-brand-accent focus-visible:ring-offset-2',
          open ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
        )}
      >
        Product
        <ChevronDown
          aria-hidden="true"
          className={cn(
            'h-3.5 w-3.5 transition-transform duration-[var(--duration-fast)]',
            open && 'rotate-180',
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            aria-label="Product features"
            initial={{ opacity: 0, y: 4, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.99 }}
            transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={cn(
              'absolute left-0 top-full z-[var(--z-dropdown)] mt-2.5 w-[420px]',
              'rounded-2xl border border-border',
              'bg-background/95 backdrop-blur-md',
              'shadow-[var(--shadow-float)] p-3',
            )}
          >
            <MegaMenuSection
              title="Everything your business needs"
              items={FEATURES.map(f => ({
                href: `/features#${f.category}`,
                label: f.title,
                description: f.description.split('.')[0] + '.',
                icon: <FeatureIcon name={f.icon} className="h-4 w-4" />,
              }))}
              footer={
                <Link
                  href="/features"
                  className={cn(
                    'text-xs font-medium text-brand-accent',
                    'hover:text-brand-accent/80',
                    'transition-colors duration-[var(--duration-fast)]',
                    'focus-visible:outline-none focus-visible:underline',
                  )}
                >
                  View all features →
                </Link>
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
