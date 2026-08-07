import type { ButtonHTMLAttributes } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SearchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Shows a keyboard shortcut badge (e.g. "⌘K") beside the icon.
   * Only shown when showShortcut is true AND device is not touch-primary.
   * Rendered visually only — screen readers hear "Search, Command K".
   */
  shortcut?: string
  showShortcut?: boolean
}

export function SearchButton({
  shortcut = '⌘K',
  showShortcut = false,
  className,
  ...props
}: SearchButtonProps) {
  return (
    <button
      type="button"
      aria-label={showShortcut ? `Search, ${shortcut}` : 'Search'}
      className={cn(
        'inline-flex h-9 items-center gap-2 rounded-lg',
        'text-sm text-muted-foreground',
        'transition-colors duration-[var(--duration-fast)] ease-[var(--ease-smooth)]',
        'hover:bg-brand-surface hover:text-foreground',
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-brand-accent focus-visible:ring-offset-2',
        showShortcut
          ? 'px-3 border border-border'
          : 'w-9 justify-center',
        className
      )}
      {...props}
    >
      <Search className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />

      {showShortcut && (
        <>
          <span className="hidden text-sm md:block">Search</span>
          <kbd
            aria-hidden="true"
            className={cn(
              'hidden md:inline-flex items-center gap-0.5 rounded border border-border',
              'bg-brand-surface px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground',
            )}
          >
            {shortcut}
          </kbd>
        </>
      )}
    </button>
  )
}
