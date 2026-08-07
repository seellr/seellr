import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LinkButton } from './LinkButton'
import type { PricingPlan } from '@/lib/mock/pricing'

interface PricingCardProps {
  plan: PricingPlan
  featured?: boolean
  href?: string
  onSelect?: (planId: string) => void
  className?: string
}

export function PricingCard({
  plan,
  featured: featuredProp,
  href,
  onSelect,
  className,
}: PricingCardProps) {
  const featured = featuredProp ?? plan.featured

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border p-8 transition-all duration-300',
        featured
          ? 'border-brand-accent/30 bg-foreground text-background shadow-[0_0_0_1px_rgba(87,223,166,0.22),0_24px_56px_rgba(0,0,0,0.18),0_0_60px_rgba(87,223,166,0.07)]'
          : 'border-border bg-background shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]',
        className,
      )}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-accent px-3.5 py-1 text-[11px] font-semibold tracking-wide text-foreground uppercase">
          Most popular
        </span>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className={cn('text-base font-semibold', featured ? 'text-background' : 'text-foreground')}>
          {plan.name}
        </h3>
        <p className={cn('mt-1 text-sm', featured ? 'text-background/60' : 'text-muted-foreground')}>
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-8 flex items-end gap-1.5">
        <span className={cn('text-5xl font-bold tracking-tight', featured ? 'text-background' : 'text-foreground')}>
          ${plan.price}
        </span>
        <span className={cn('mb-1.5 text-sm', featured ? 'text-background/50' : 'text-muted-foreground')}>
          /month
        </span>
      </div>

      {/* CTA */}
      {href ? (
        <LinkButton
          href={href}
          variant={featured ? 'secondary' : 'outline'}
          className={cn(
            'mb-8 w-full justify-center',
            featured && 'border-background/20 bg-background text-foreground hover:bg-background/90',
          )}
        >
          {plan.cta}
        </LinkButton>
      ) : (
        <button
          type="button"
          onClick={onSelect ? () => onSelect(plan.id) : undefined}
          className={cn(
            'mb-8 w-full rounded-md py-2.5 text-sm font-medium transition-all',
            featured
              ? 'bg-background text-foreground hover:bg-background/90'
              : 'border border-border text-foreground hover:bg-brand-surface',
          )}
        >
          {plan.cta}
        </button>
      )}

      {/* Divider */}
      <div className={cn('mb-6 h-px', featured ? 'bg-background/15' : 'bg-border')} />

      {/* Features */}
      <ul className="flex flex-col gap-3.5">
        {plan.features.map((feature) => (
          <li
            key={feature.text}
            className={cn(
              'flex items-start gap-3 text-sm',
              feature.included
                ? featured ? 'text-background/90' : 'text-foreground'
                : featured ? 'text-background/30' : 'text-muted-foreground/40',
            )}
          >
            {feature.included ? (
              <Check
                className={cn('mt-0.5 h-4 w-4 shrink-0', featured ? 'text-brand-accent' : 'text-brand-success')}
                aria-label="Included"
              />
            ) : (
              <Minus className="mt-0.5 h-4 w-4 shrink-0 opacity-30" aria-label="Not included" />
            )}
            {feature.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
