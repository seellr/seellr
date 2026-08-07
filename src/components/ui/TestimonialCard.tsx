import Image from 'next/image'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BaseCard } from './BaseCard'
import type { Testimonial } from '@/lib/mock/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
  /** compact — tighter, for carousels. default — standard grid card. */
  variant?: 'default' | 'compact'
  className?: string
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            'h-3.5 w-3.5',
            i < rating
              ? 'fill-brand-accent text-brand-accent'
              : 'fill-muted text-muted'
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function AvatarFallback({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <span
      aria-hidden="true"
      className="flex h-full w-full items-center justify-center bg-brand-surface text-xs font-semibold text-foreground"
    >
      {initials}
    </span>
  )
}

export function TestimonialCard({
  testimonial,
  variant = 'default',
  className,
}: TestimonialCardProps) {
  const { name, role, company, avatar, rating, content } = testimonial

  return (
    <BaseCard
      className={cn(
        'flex flex-col gap-4',
        variant === 'compact' && 'gap-3',
        className
      )}
    >
      <StarRating rating={rating} />

      <blockquote>
        <p
          className={cn(
            'leading-relaxed text-foreground',
            variant === 'compact' ? 'text-sm' : 'text-base'
          )}
        >
          &ldquo;{content}&rdquo;
        </p>
      </blockquote>

      <footer className="mt-auto flex items-center gap-3">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-border">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
            sizes="36px"
          />
          {/* Initials render beneath — visible if image fails to load */}
          <AvatarFallback name={name} />
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground leading-none">
            {name}
          </span>
          <span className="mt-0.5 text-xs text-muted-foreground">
            {role}, {company}
          </span>
        </div>
      </footer>
    </BaseCard>
  )
}
