import type { ReactNode } from 'react'
import { TrendingDown, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BaseCard } from './BaseCard'

type Trend = 'up' | 'down'

interface DashboardCardProps {
  title: string
  value: string | number
  /** e.g. "+12.5%" */
  trend?: string
  trendDirection?: Trend
  /** Optional chart, sparkline, or custom visual. */
  children?: ReactNode
  className?: string
}

const TREND_ICON: Record<Trend, ReactNode> = {
  up:   <TrendingUp  className="h-3.5 w-3.5" aria-hidden="true" />,
  down: <TrendingDown className="h-3.5 w-3.5" aria-hidden="true" />,
}

export function DashboardCard({
  title,
  value,
  trend,
  trendDirection = 'up',
  children,
  className,
}: DashboardCardProps) {
  return (
    <BaseCard
      className={cn('flex flex-col gap-3', className)}
    >
      <p className="text-sm font-medium text-muted-foreground">{title}</p>

      <div className="flex items-end justify-between gap-4">
        <p className="text-3xl font-bold tracking-tight text-foreground leading-none">
          {value}
        </p>

        {trend && (
          <span
            className={cn(
              'flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium',
              trendDirection === 'up'
                ? 'bg-brand-success/10 text-brand-success'
                : 'bg-brand-danger/10 text-brand-danger'
            )}
          >
            {TREND_ICON[trendDirection]}
            {trend}
          </span>
        )}
      </div>

      {/* Chart / sparkline slot — rendered by the consuming section */}
      {children && (
        <div className="mt-auto">{children}</div>
      )}
    </BaseCard>
  )
}
