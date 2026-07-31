import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { BaseCard } from './BaseCard'

interface FeatureCardProps {
  icon?: ReactNode
  title: string
  description: string
  benefits?: string[]
  href?: string
  /**
   * vertical — icon above title (default, grid layouts)
   * horizontal — icon left of title/description (feature rows)
   */
  variant?: 'vertical' | 'horizontal'
  className?: string
}

export function FeatureCard({
  icon,
  title,
  description,
  benefits,
  href,
  variant = 'vertical',
  className,
}: FeatureCardProps) {
  const isHorizontal = variant === 'horizontal'

  return (
    <BaseCard
      variant="interactive"
      className={cn(
        'group/card',
        isHorizontal && 'flex gap-5',
        className
      )}
    >
      {icon && (
        <div
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
            'bg-brand-surface text-foreground',
            '[&>svg]:h-5 [&>svg]:w-5',
            isHorizontal ? 'mt-0.5' : 'mb-4'
          )}
        >
          {icon}
        </div>
      )}

      <div className={cn('flex flex-col', !isHorizontal && 'gap-2')}>
        <h3 className={cn(
          'font-semibold text-foreground leading-snug',
          isHorizontal ? 'text-base mb-1' : 'text-lg'
        )}>
          {title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {benefits && benefits.length > 0 && (
          <ul className="mt-3 flex flex-col gap-1.5">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-brand-accent shrink-0" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        )}

        {href && (
          <Link
            href={href}
            className={cn(
              'mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground',
              'transition-[gap] duration-[var(--duration-fast)] ease-[var(--ease-smooth)]',
              'hover:gap-2 focus-visible:outline-none focus-visible:underline'
            )}
          >
            Learn more
            <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          </Link>
        )}
      </div>
    </BaseCard>
  )
}
