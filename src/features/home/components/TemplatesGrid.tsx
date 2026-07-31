'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Stagger } from '@/components/animations/Stagger'
import { TemplateCard } from '@/components/ui/TemplateCard'
import {
  TEMPLATE_THUMBNAIL_MAP,
  type TemplateCategoryKey,
} from '@/components/ui/TemplateThumbnails'
import { TEMPLATES, TEMPLATE_CATEGORIES, type Template, type TemplateCategory } from '@/lib/mock/templates'

function TemplateThumbnail({ category }: { category: string }) {
  const Thumb = TEMPLATE_THUMBNAIL_MAP[category as TemplateCategoryKey]
  if (!Thumb) return <div className="h-full w-full bg-neutral-50" aria-hidden="true" />
  return <Thumb />
}

// ─── Filter tab labels ────────────────────────────────────────────────────────

const TAB_LABELS: Record<TemplateCategory, string> = {
  all:        'All',
  business:   'Business',
  portfolio:  'Portfolio',
  ecommerce:  'Ecommerce',
  restaurant: 'Restaurant',
  health:     'Health',
  creative:   'Creative',
}

// ─── Main client component ────────────────────────────────────────────────────

export function TemplatesGrid() {
  const [active, setActive] = useState<TemplateCategory>('all')

  const filtered = (
    active === 'all'
      ? TEMPLATES
      : TEMPLATES.filter((t: Template) => t.category === active)
  ).slice(0, 6)

  return (
    <>
      {/* Category filter tabs */}
      <div
        role="tablist"
        aria-label="Filter templates by category"
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {TEMPLATE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent',
              active === cat
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {TAB_LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Template grid */}
      <Stagger
        speed="fast"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            thumbnailSlot={<TemplateThumbnail category={template.category} />}
          />
        ))}
      </Stagger>
    </>
  )
}
