'use client'

import { Scale } from '@/components/animations/Scale'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { cn } from '@/lib/utils'

interface KpiMetric {
  label: string
  value: string
  trend: string
  positive: boolean
}

interface TrafficSource {
  label: string
  percentage: number
}

const KPI_METRICS: KpiMetric[] = [
  { label: 'Visitors',    value: '8,920',  trend: '+12%',  positive: true },
  { label: 'Conversions', value: '3.4%',   trend: '+0.8%', positive: true },
  { label: 'Revenue',     value: '$12.4k', trend: '+24%',  positive: true },
]

const TRAFFIC_SOURCES: TrafficSource[] = [
  { label: 'Direct',   percentage: 42 },
  { label: 'Search',   percentage: 31 },
  { label: 'Social',   percentage: 18 },
  { label: 'Referral', percentage: 9 },
]

function TrendBadge({ trend, positive }: { trend: string; positive: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-0.5 text-xs font-medium',
        positive ? 'text-brand-success' : 'text-[#DC2626]',
      )}
      aria-label={`Trend: ${trend}`}
    >
      <svg width="8" height="6" viewBox="0 0 8 6" fill="currentColor" aria-hidden="true">
        <path d={positive ? 'M4 0L8 6H0L4 0Z' : 'M4 6L0 0H8L4 6Z'} />
      </svg>
      {trend}
    </span>
  )
}

function KpiBox({ label, value, trend, positive }: KpiMetric) {
  return (
    <div className="flex flex-col gap-1 rounded-lg border border-border bg-background p-4">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <span className="text-xl font-semibold text-foreground">{value}</span>
      <TrendBadge trend={trend} positive={positive} />
    </div>
  )
}

function SourceRow({ label, percentage }: TrafficSource) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-16 shrink-0 text-sm text-muted-foreground">{label}</span>
      <div
        className="h-1.5 flex-1 overflow-hidden rounded-full bg-border"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${label}: ${percentage}%`}
      >
        <div className="h-full rounded-full bg-brand-accent" style={{ width: `${percentage}%` }} />
      </div>
      <span className="w-8 shrink-0 text-right text-sm font-medium text-foreground">
        {percentage}%
      </span>
    </div>
  )
}

export function AnalyticsVisual() {
  return (
    <Scale delay={0.1}>
      <div className="relative shadow-[var(--shadow-float)]">
        <BrowserFrame url="app.seellr.com/analytics">
          <div className="bg-background p-6 lg:p-8" aria-hidden="true">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <span className="text-base font-semibold text-foreground">Analytics Overview</span>
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-secondary">
                Last 30 days
              </span>
            </div>

            {/* KPI row */}
            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {KPI_METRICS.map((metric) => (
                <KpiBox key={metric.label} {...metric} />
              ))}
            </div>

            {/* Area chart */}
            <div
              className="mb-6 overflow-hidden rounded-lg border border-border bg-brand-surface"
              role="img"
              aria-label="Visitors trend chart for last 30 days"
            >
              <svg
                viewBox="0 0 400 100"
                preserveAspectRatio="none"
                className="h-36 w-full"
                aria-hidden="true"
              >
                <path
                  d="M0 90 C30 85, 60 78, 90 70 C120 62, 145 68, 170 58 C195 48, 220 38, 250 30 C280 22, 310 18, 340 10 C360 5, 380 4, 400 2 L400 100 L0 100 Z"
                  fill="rgba(87,223,166,0.12)"
                />
                <path
                  d="M0 90 C30 85, 60 78, 90 70 C120 62, 145 68, 170 58 C195 48, 220 38, 250 30 C280 22, 310 18, 340 10 C360 5, 380 4, 400 2"
                  fill="none"
                  stroke="#57DFA6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Traffic sources */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Traffic Sources
              </span>
              {TRAFFIC_SOURCES.map((source) => (
                <SourceRow key={source.label} {...source} />
              ))}
            </div>
          </div>
        </BrowserFrame>

        {/* Floating live badge */}
        <div className="absolute -right-3 -top-3 flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 shadow-[var(--shadow-card-hover)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-success" />
          </span>
          <p className="text-[11px] font-semibold text-foreground">247 visitors live</p>
        </div>
      </div>
    </Scale>
  )
}
