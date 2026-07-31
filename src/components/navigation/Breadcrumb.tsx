import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SITE_CONFIG } from '@/config/site'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  /** Show home icon as first crumb. Default: false. */
  showHome?: boolean
  className?: string
}

export function Breadcrumb({ items, showHome = false, className }: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = showHome
    ? [{ label: 'Home', href: '/' }, ...items]
    : items

  // JSON-LD BreadcrumbList schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_CONFIG.url}${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className={className}>
        <ol
          className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {allItems.map((item, index) => {
            const isLast     = index === allItems.length - 1
            const isHomeIcon = showHome && index === 0

            return (
              <li
                key={`${item.label}-${index}`}
                className="flex items-center gap-1"
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
              >
                {index > 0 && (
                  <ChevronRight
                    className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40"
                    aria-hidden="true"
                  />
                )}

                {isLast || !item.href ? (
                  <span
                    className={cn(
                      'font-medium',
                      isLast ? 'text-foreground' : 'text-muted-foreground'
                    )}
                    aria-current={isLast ? 'page' : undefined}
                    itemProp="name"
                  >
                    {isHomeIcon ? (
                      <Home className="h-3.5 w-3.5" aria-label="Home" />
                    ) : (
                      item.label
                    )}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'hover:text-foreground',
                      'transition-colors duration-[var(--duration-fast)]',
                      'focus-visible:outline-none focus-visible:underline',
                    )}
                    itemProp="item"
                  >
                    <span itemProp="name">
                      {isHomeIcon ? (
                        <Home className="h-3.5 w-3.5" aria-label="Home" />
                      ) : (
                        item.label
                      )}
                    </span>
                  </Link>
                )}

                <meta itemProp="position" content={String(index + 1)} />
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
