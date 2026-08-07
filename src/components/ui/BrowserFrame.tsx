import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BrowserFrameProps {
  /** URL shown in the address bar. */
  url?: string
  /** Hide the address bar for tighter compositions. */
  showUrl?: boolean
  children: ReactNode
  className?: string
}

/**
 * Decorative browser chrome — macOS-style traffic lights + address bar.
 * Wraps any content (dashboard screenshots, feature previews, etc.).
 * Server Component — no interactivity.
 */
export function BrowserFrame({
  url      = 'app.seellr.com',
  showUrl  = true,
  children,
  className,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-border',
        'shadow-[var(--shadow-float)]',
        className,
      )}
      role="img"
      aria-label={`Browser window showing ${url}`}
    >
      {/* Chrome bar */}
      <div className="flex h-10 shrink-0 items-center gap-1.5 border-b border-border bg-brand-surface px-4">
        {/* Traffic lights */}
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" aria-hidden="true" />

        {showUrl && (
          <div className="mx-auto flex max-w-[200px] items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-success" aria-hidden="true" />
            <span className="truncate text-[10px] text-muted-foreground">{url}</span>
          </div>
        )}
      </div>

      {/* Content area */}
      <div className="overflow-hidden">{children}</div>
    </div>
  )
}
