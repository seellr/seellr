'use client'

import { useRef, useState, useEffect } from 'react'
import { Globe, Check, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface Locale {
  code: string
  label: string
  /** Full native name e.g. "العربية" */
  native: string
}

const LOCALES: Locale[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'ar', label: 'Arabic',  native: 'العربية' },
]

interface LanguageSwitcherProps {
  currentLocale?: string
  onLocaleChange?: (locale: Locale) => void
  className?: string
}

export function LanguageSwitcher({
  currentLocale = 'en',
  onLocaleChange,
  className,
}: LanguageSwitcherProps) {
  const [open, setOpen]   = useState(false)
  const triggerRef        = useRef<HTMLButtonElement>(null)
  const menuRef           = useRef<HTMLUListElement>(null)

  const current = LOCALES.find((l) => l.code === currentLocale) ?? LOCALES[0]

  // Close on outside click
  useEffect(() => {
    if (!open) return
    function handleOutside(e: MouseEvent) {
      if (
        !triggerRef.current?.contains(e.target as Node) &&
        !menuRef.current?.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [open])

  function getMenuItems() {
    return Array.from(
      menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []
    )
  }

  function handleTriggerKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setOpen(true)
      // Focus first item after paint
      requestAnimationFrame(() => getMenuItems()[0]?.focus())
    }
    if (e.key === 'Escape') setOpen(false)
  }

  function handleMenuKeyDown(e: React.KeyboardEvent) {
    const items   = getMenuItems()
    const focused = document.activeElement as HTMLElement
    const index   = items.indexOf(focused)

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      items[(index + 1) % items.length]?.focus()
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      items[(index - 1 + items.length) % items.length]?.focus()
    }
    if (e.key === 'Escape' || e.key === 'Tab') {
      e.preventDefault()
      setOpen(false)
      triggerRef.current?.focus()
    }
    if (e.key === 'Home') {
      e.preventDefault()
      items[0]?.focus()
    }
    if (e.key === 'End') {
      e.preventDefault()
      items[items.length - 1]?.focus()
    }
  }

  function handleSelect(locale: Locale) {
    onLocaleChange?.(locale)
    setOpen(false)
    triggerRef.current?.focus()
  }

  return (
    <div className={cn('relative', className)}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={handleTriggerKeyDown}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Language: ${current.label}. Change language`}
        className={cn(
          'inline-flex h-9 items-center gap-1.5 rounded-lg px-2.5',
          'text-sm font-medium text-muted-foreground',
          'transition-colors duration-[var(--duration-fast)]',
          'hover:bg-brand-surface hover:text-foreground',
          'focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-brand-accent focus-visible:ring-offset-2',
        )}
      >
        <Globe className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{current.code.toUpperCase()}</span>
        <ChevronDown
          className={cn(
            'h-3 w-3 shrink-0 transition-transform duration-[var(--duration-fast)]',
            open && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          ref={menuRef}
          role="menu"
          aria-label="Language options"
          onKeyDown={handleMenuKeyDown}
          className={cn(
            'absolute right-0 top-full z-[var(--z-dropdown)] mt-1.5 w-40',
            'rounded-xl border border-border bg-background',
            'shadow-[var(--shadow-card-hover)]',
            'py-1.5',
          )}
        >
          {LOCALES.map((locale) => {
            const isSelected = locale.code === currentLocale
            return (
              <li key={locale.code} role="none">
                <button
                  role="menuitem"
                  type="button"
                  lang={locale.code}
                  onClick={() => handleSelect(locale)}
                  aria-checked={isSelected}
                  className={cn(
                    'flex w-full items-center gap-3 px-3 py-2',
                    'text-sm',
                    'transition-colors duration-[var(--duration-fast)]',
                    'focus:outline-none focus:bg-brand-surface',
                    'hover:bg-brand-surface',
                    isSelected ? 'text-foreground font-medium' : 'text-muted-foreground',
                  )}
                >
                  <span className="flex-1 text-left">{locale.native}</span>
                  {isSelected && (
                    <Check className="h-3.5 w-3.5 shrink-0 text-brand-accent" aria-hidden="true" />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
