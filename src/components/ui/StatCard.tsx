import { TrendingDown, TrendingUp, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BaseCard } from './BaseCard'
import type { Stat } from '@/lib/mock/stats'

type Trend = 'up' | 'down' | 'neutral'

const TREND_ICON: Record<Trend, React.ReactNode> = {
  up:      <TrendingUp  className="h-4 w-4" aria-hidden="true" />,
  down:    <TrendingDown className="h-4 w-4" aria-hidden="true" />,
  neutral: <Minus       className="h-4 w-4" aria-hidden="true" />,
}

const TREND_COLOR: Record<Trend, string> = {
  up:      'text-brand-success',
  down:    'text-brand-danger',
  neutral: 'text-muted-foreground',
}

interface StatCardProps {
  stat: Stat
  trend?: Trend
  trendLabel?: string
  /** Highlight the value with accent color. */
  accent?: boolean
  className?: string
}

export function StatCard({
  stat,
  trend,
  trendLabel,
  accent = false,
  className,
}: StatCardProps) {
  const { value, label, suffix } = stat

  return (
    <BaseCard
      variant="default"
      className={cn('flex flex-col gap-2', className)}
    >
      <div
        className={cn(
          'flex items-end gap-0.5 font-bold tracking-tight',
          'text-4xl leading-none',
          accent ? 'text-brand-accent' : 'text-foreground'
        )}
        aria-label={`${value}${suffix ?? ''} ${label}`}
      >
        <span>{value}</span>
        {suffix && (
          <span className="text-2xl font-semibold">{suffix}</span>
        )}
      </div>

      <p className="text-sm text-muted-foreground">{label}</p>

      {trend && (
        <div
          className={cn(
            'mt-1 flex items-center gap-1 text-xs font-medium',
            TREND_COLOR[trend]
          )}
        >
          {TREND_ICON[trend]}
          {trendLabel && <span>{trendLabel}</span>}
        </div>
      )}
    </BaseCard>
  )
}
