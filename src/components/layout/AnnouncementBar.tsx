import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnnouncementBarClient } from './AnnouncementBarClient'

interface AnnouncementBarProps {
  /**
   * Stable identifier for this announcement.
   * Change it when the content changes to reset dismissed state.
   */
  id: string
  /** Short pill label, e.g. "New" or "Beta". */
  badge?: string
  /** Main announcement text. Keep under ~80 characters for single-line display. */
  message: string
  /** Optional CTA text rendered as a link. Requires `linkHref`. */
  linkText?: string
  linkHref?: string
  dismissible?: boolean
  className?: string
}

export function AnnouncementBar({
  id,
  badge,
  message,
  linkText,
  linkHref,
  dismissible = true,
  className,
}: AnnouncementBarProps) {
  return (
    <AnnouncementBarClient id={id} dismissible={dismissible} className={className}>
      {/* Badge */}
      {badge && (
        <span
          key="badge"
          className={cn(
            'inline-flex shrink-0 items-center rounded-full px-2 py-0.5',
            'bg-brand-accent text-[11px] font-semibold uppercase tracking-wide text-foreground',
          )}
          aria-label={`Label: ${badge}.`}
        >
          {badge}
        </span>
      )}

      {/* Message */}
      <span key="message" className="text-background/90">{message}</span>

      {/* Link */}
      {linkHref && linkText && (
        <Link
          key="link"
          href={linkHref}
          className={cn(
            'inline-flex shrink-0 items-center gap-1',
            'font-semibold text-background',
            'underline decoration-background/30 underline-offset-2',
            'hover:decoration-background',
            'transition-[text-decoration-color] duration-[var(--duration-fast)]',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white',
            'rounded-sm',
          )}
        >
          {linkText}
          <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        </Link>
      )}
    </AnnouncementBarClient>
  )
}
