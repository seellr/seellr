import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { BaseCard } from '@/components/ui/BaseCard'
import { FeatureIcon } from '@/components/icons/FeatureIcon'
import type { Feature } from '@/lib/mock/features'

interface BentoFeatureCardProps {
  feature: Feature
  visual?: ReactNode
  large?: boolean
  className?: string
}

export function BentoFeatureCard({ feature, visual, large = false, className }: BentoFeatureCardProps) {
  const { title, description, benefits, icon } = feature

  return (
    <BaseCard
      variant="interactive"
      padding="none"
      className={cn(
        'group/bento flex flex-col overflow-hidden',
        large ? 'p-8' : 'p-6',
        className
      )}
    >
      {/* Product UI preview */}
      {visual && (
        <div
          className={cn(
            'mb-6 w-full overflow-hidden rounded-xl border border-border/60',
            large ? 'h-44' : 'h-32'
          )}
          aria-hidden="true"
        >
          {visual}
        </div>
      )}

      {/* Icon */}
      <div
        className={cn(
          'mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
          'bg-brand-surface text-foreground',
          '[&>svg]:h-5 [&>svg]:w-5'
        )}
        aria-hidden="true"
      >
        <FeatureIcon name={icon} />
      </div>

      {/* Text */}
      <h3
        className={cn(
          'font-semibold leading-snug text-foreground',
          large ? 'mb-2 text-2xl' : 'mb-1.5 text-lg'
        )}
      >
        {title}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/* Benefit pills */}
      <div className="mt-auto flex flex-wrap gap-2">
        {benefits.slice(0, 3).map((benefit) => (
          <span
            key={benefit}
            className={cn(
              'inline-flex items-center rounded-full px-3 py-1',
              'bg-brand-surface text-xs font-medium text-muted-foreground',
              'border border-border'
            )}
          >
            {benefit}
          </span>
        ))}
      </div>
    </BaseCard>
  )
}
