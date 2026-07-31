import type { ReactNode } from 'react'
import { DropdownItem } from './DropdownItem'
import { cn } from '@/lib/utils'

interface MegaMenuSectionItem {
  href: string
  label: string
  description?: string
  icon?: ReactNode
  active?: boolean
}

interface MegaMenuSectionProps {
  title: string
  items: MegaMenuSectionItem[]
  /** Optional footer slot — e.g. "See all features →" link */
  footer?: ReactNode
  className?: string
}

export function MegaMenuSection({
  title,
  items,
  footer,
  className,
}: MegaMenuSectionProps) {
  return (
    <div
      role="group"
      aria-label={title}
      className={cn('flex flex-col gap-1', className)}
    >
      <p
        className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70"
        aria-hidden="true"
      >
        {title}
      </p>

      <ul role="none" className="flex flex-col gap-0.5">
        {items.map((item) => (
          <DropdownItem
            key={item.href}
            href={item.href}
            label={item.label}
            description={item.description}
            icon={item.icon}
            active={item.active}
          />
        ))}
      </ul>

      {footer && (
        <div className="mt-1 border-t border-border pt-2 px-3">
          {footer}
        </div>
      )}
    </div>
  )
}
