import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BaseCard } from './BaseCard'
import { formatDate, formatReadingTime } from '@/lib/utils/format'
import type { BlogPost } from '@/lib/mock/blog'

interface BlogCardProps {
  post: BlogPost
  /**
   * vertical   — stacked image + text (default, grid use)
   * horizontal — image left, text right (featured / hero)
   */
  variant?: 'vertical' | 'horizontal'
  className?: string
}

export function BlogCard({
  post,
  variant = 'vertical',
  className,
}: BlogCardProps) {
  const { slug, title, excerpt, category, thumbnail, author, publishedAt, wordCount } = post
  const isHorizontal = variant === 'horizontal'
  const readingTime  = formatReadingTime(wordCount)

  return (
    <BaseCard
      variant="interactive"
      padding="none"
      className={cn(
        'group/blog overflow-hidden',
        isHorizontal && 'flex flex-col sm:flex-row',
        className
      )}
    >
      {/* Thumbnail */}
      <Link
        href={`/blog/${slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className={cn(
          'relative block overflow-hidden bg-brand-surface',
          isHorizontal
            ? 'aspect-[4/3] sm:w-64 sm:shrink-0 sm:aspect-auto sm:h-auto'
            : 'aspect-video w-full'
        )}
      >
        <Image
          src={thumbnail}
          alt=""
          fill
          sizes={isHorizontal ? '256px' : '(min-width: 768px) 50vw, 100vw'}
          className="object-cover transition-transform duration-[var(--duration-slower)] ease-[var(--ease-smooth)] group-hover/blog:scale-105"
        />
      </Link>

      {/* Content */}
      <div className={cn('flex flex-col gap-3 p-6', isHorizontal && 'flex-1 justify-center')}>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-brand-surface px-2.5 py-0.5 text-xs font-medium capitalize text-foreground">
            {category}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" aria-hidden="true" />
            {readingTime}
          </span>
        </div>

        <h3 className={cn(
          'font-semibold leading-snug text-foreground',
          isHorizontal ? 'text-xl' : 'text-base'
        )}>
          <Link
            href={`/blog/${slug}`}
            className="focus-visible:outline-none focus-visible:underline"
          >
            {title}
          </Link>
        </h3>

        {(isHorizontal || variant === 'vertical') && (
          <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed">
            {excerpt}
          </p>
        )}

        <footer className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6 overflow-hidden rounded-full bg-brand-surface">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                sizes="24px"
                className="object-cover"
              />
            </div>
            <span className="text-xs text-muted-foreground">{author.name}</span>
            <span className="text-xs text-muted-foreground/40">&middot;</span>
            <time
              dateTime={publishedAt}
              className="text-xs text-muted-foreground"
            >
              {formatDate(publishedAt)}
            </time>
          </div>

          <ArrowRight
            className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-transform duration-[var(--duration-fast)] group-hover/blog:translate-x-0.5 group-hover/blog:text-foreground"
            aria-hidden="true"
          />
        </footer>
      </div>
    </BaseCard>
  )
}
