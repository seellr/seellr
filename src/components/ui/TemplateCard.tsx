import Image from 'next/image'
import Link from 'next/link'
import { Eye } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BaseCard } from './BaseCard'
import type { Template } from '@/lib/mock/templates'
import type { ReactNode } from 'react'

interface TemplateCardProps {
  template: Template
  previewHref?: string
  /** large — bigger image ratio. default — standard grid card. */
  variant?: 'default' | 'large'
  /**
   * Overrides the default next/image thumbnail.
   * Use when real image assets are unavailable (e.g. placeholder UI).
   */
  thumbnailSlot?: ReactNode
  className?: string
}

export function TemplateCard({
  template,
  previewHref,
  variant = 'default',
  thumbnailSlot,
  className,
}: TemplateCardProps) {
  const { name, description, category, thumbnail, tags } = template
  const href = previewHref ?? `/templates/${template.id}`

  return (
    <BaseCard
      variant="interactive"
      padding="none"
      className={cn('group/tpl overflow-hidden', className)}
    >
      {/* Image + overlay */}
      <div
        className={cn(
          'relative overflow-hidden bg-brand-surface',
          variant === 'large' ? 'aspect-[16/10]' : 'aspect-[4/3]'
        )}
      >
        {thumbnailSlot ?? (
          <Image
            src={thumbnail}
            alt={`${name} template preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-[var(--ease-smooth)] group-hover/tpl:scale-105"
          />
        )}

        {/* Hover overlay — CSS only, no JS */}
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center',
            'bg-foreground/60 backdrop-blur-[2px]',
            'opacity-0 transition-opacity duration-[var(--duration-normal)] ease-[var(--ease-smooth)]',
            'group-hover/tpl:opacity-100 group-focus-within/tpl:opacity-100'
          )}
          aria-hidden="true"
        >
          <span className="flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium text-foreground shadow-[var(--shadow-float)]">
            <Eye className="h-4 w-4" />
            Preview
          </span>
        </div>

        {/* Accessible link covers the whole image area */}
        <Link
          href={href}
          className="absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-accent"
          aria-label={`Preview ${name} template`}
        />
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-1 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground">{name}</h3>
          <span className="shrink-0 rounded-full bg-brand-surface px-2 py-0.5 text-xs capitalize text-muted-foreground">
            {category}
          </span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-1">{description}</p>

        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border px-1.5 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </BaseCard>
  )
}
