'use client'

import { TrendingUp, ShoppingBag, Users } from 'lucide-react'
import type { FC } from 'react'
import type { LucideProps } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { Floating } from '@/components/animations/Floating'

// ── Data ──────────────────────────────────────────────────────────────────────

const STATS: Array<{ label: string; value: string; change: string; Icon: FC<LucideProps> }> = [
  { label: 'Revenue',  value: '$12.4k', change: '+24%', Icon: TrendingUp  },
  { label: 'Orders',   value: '384',    change: '+12%', Icon: ShoppingBag },
  { label: 'Visitors', value: '8,920',  change: '+8%',  Icon: Users       },
]

const NAV_ITEMS = ['Dashboard', 'Store', 'Bookings', 'CRM', 'Analytics']
const BAR_HEIGHTS = [38, 52, 44, 68, 58, 82, 62, 90, 70, 78, 85, 100]

// ── Mock dashboard internals ──────────────────────────────────────────────────

function MockSidebar() {
  return (
    <div className="hidden w-[130px] shrink-0 flex-col gap-0.5 border-r border-border bg-foreground/[0.02] p-3 sm:flex">
      {/* Logo */}
      <div className="mb-4 flex items-center gap-2 px-1.5">
        <span className="flex h-5 w-5 items-center justify-center rounded bg-foreground text-[8px] font-bold text-background">
          S
        </span>
        <span className="text-[11px] font-semibold text-foreground">Seellr</span>
      </div>

      {/* Nav items */}
      {NAV_ITEMS.map((item, i) => (
        <div
          key={item}
          className={cn(
            'flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px]',
            i === 0
              ? 'bg-foreground font-medium text-background'
              : 'text-muted-foreground',
          )}
          aria-hidden="true"
        >
          <span className="h-2 w-2 shrink-0 rounded-sm bg-current opacity-60" />
          {item}
        </div>
      ))}
    </div>
  )
}

function MockBarChart() {
  return (
    <div className="rounded-lg border border-border p-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[10px] font-medium text-muted-foreground">Revenue · last 12 weeks</p>
        <span className="text-[10px] font-semibold text-brand-success">+24.6%</span>
      </div>
      <div
        className="flex h-[72px] items-end gap-1"
        aria-hidden="true"
        role="img"
        aria-label="Revenue bar chart"
      >
        {BAR_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className={cn(
              'flex-1 rounded-t-sm',
              i === BAR_HEIGHTS.length - 1
                ? 'bg-brand-accent'
                : i === BAR_HEIGHTS.length - 2
                ? 'bg-brand-accent/40'
                : 'bg-foreground/[0.07]',
            )}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

function MockMainContent() {
  return (
    <div className="flex-1 overflow-hidden bg-background p-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-muted-foreground">Good morning 👋</p>
          <p className="text-xs font-semibold text-foreground">Dashboard overview</p>
        </div>
        <div className="rounded-full border border-border px-2.5 py-1 text-[9px] text-muted-foreground">
          July 2026
        </div>
      </div>

      {/* Stat cards */}
      <div className="mb-3 grid grid-cols-3 gap-2">
        {STATS.map(({ label, value, change, Icon }) => (
          <div key={label} className="rounded-lg border border-border bg-background p-2.5">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-[9px] text-muted-foreground">{label}</p>
              <Icon className="h-2.5 w-2.5 text-muted-foreground/40" aria-hidden="true" />
            </div>
            <p className="text-sm font-bold text-foreground">{value}</p>
            <p className="mt-0.5 text-[9px] font-medium text-brand-success">{change}</p>
          </div>
        ))}
      </div>

      <MockBarChart />
    </div>
  )
}

// ── Floating UI cards ─────────────────────────────────────────────────────────

function FloatingRevenueCard() {
  return (
    <div className="w-[158px] rounded-xl border border-border bg-background p-3.5 shadow-[var(--shadow-float)]">
      <p className="text-[10px] text-muted-foreground">Monthly Revenue</p>
      <p className="mt-1 text-xl font-bold text-foreground">$12,480</p>
      <div className="mt-1.5 flex items-center gap-1 text-[10px] font-medium text-brand-success">
        <TrendingUp className="h-3 w-3" aria-hidden="true" />
        +24% this month
      </div>
    </div>
  )
}

function FloatingBookingCard() {
  return (
    <div className="w-[190px] rounded-xl border border-border bg-background p-3 shadow-[var(--shadow-float)]">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[11px] font-semibold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
          SC
        </span>
        <div>
          <p className="text-[11px] font-semibold leading-none text-foreground">New Booking</p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">Sarah Chen · 2:30 PM</p>
        </div>
      </div>
      <div className="mt-2.5 flex gap-1.5">
        <div className="flex-1 rounded-md bg-foreground py-1 text-center text-[9px] font-medium text-background">
          Confirm
        </div>
        <div className="flex-1 rounded-md border border-border py-1 text-center text-[9px] text-muted-foreground">
          Reschedule
        </div>
      </div>
    </div>
  )
}

// ── HeroDashboard ─────────────────────────────────────────────────────────────

export function HeroDashboard() {
  return (
    <div className="relative mt-16 px-4 lg:px-0">
      {/* Dashboard entrance — CSS animation, no JS dependency */}
      <div className="hero-dashboard relative">
        <BrowserFrame url="app.seellr.com/dashboard">
          <div
            className="flex h-[280px] overflow-hidden sm:h-[340px] lg:h-[388px]"
            aria-hidden="true"
          >
            <MockSidebar />
            <MockMainContent />
          </div>
        </BrowserFrame>

        {/* Green glow behind dashboard */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-6 -z-10 opacity-40"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(200,255,44,0.25), transparent)',
          }}
        />

        {/* Floating: Revenue card — bottom-left */}
        <div
          className="pointer-events-none absolute -left-8 bottom-10 hidden xl:block"
          aria-hidden="true"
        >
          <Floating amplitude={9} duration={5} delay={0.6}>
            <FloatingRevenueCard />
          </Floating>
        </div>

        {/* Floating: Booking card — top-right */}
        <div
          className="pointer-events-none absolute -right-8 top-14 hidden xl:block"
          aria-hidden="true"
        >
          <Floating amplitude={7} duration={4.5} delay={1.1}>
            <FloatingBookingCard />
          </Floating>
        </div>
      </div>

      {/* Gradient mask — fades dashboard into the next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent"
      />
    </div>
  )
}
