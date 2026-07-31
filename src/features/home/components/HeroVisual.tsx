'use client'

import Image from 'next/image'
import { TrendingUp, ShoppingBag, Users, BarChart2, Calendar, Settings, ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const SIDEBAR_ITEMS = [
  { icon: BarChart2, label: 'Dashboard', active: true },
  { icon: ShoppingBag, label: 'Store', active: false },
  { icon: Calendar, label: 'Bookings', active: false },
  { icon: Users, label: 'CRM', active: false },
  { icon: TrendingUp, label: 'Analytics', active: false },
  { icon: Settings, label: 'Settings', active: false },
]

const STATS = [
  { label: 'Revenue', value: '$12.4k', change: '+24%', positive: true },
  { label: 'Orders', value: '384', change: '+12%', positive: true },
  { label: 'Visitors', value: '8,920', change: '+8%', positive: true },
  { label: 'Conversion', value: '3.4%', change: '-0.2%', positive: false },
]

const BAR_HEIGHTS = [38, 52, 44, 68, 58, 82, 62, 90, 70, 78, 85, 100]

function AppSidebar() {
  return (
    <aside className="flex w-[120px] shrink-0 flex-col gap-0.5 border-r border-border bg-gray-50/80 p-3 lg:w-[140px]">
      <div className="mb-4 flex items-center gap-2 px-1">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-foreground text-[8px] font-bold text-background">
          S
        </span>
        <span className="text-[11px] font-semibold text-foreground">Seellr</span>
      </div>

      {SIDEBAR_ITEMS.map(({ icon: Icon, label, active }) => (
        <div
          key={label}
          className={cn(
            'flex items-center gap-2 rounded-lg px-2 py-1.5 text-[10px] font-medium',
            active
              ? 'bg-foreground text-background'
              : 'text-muted-foreground hover:bg-black/5',
          )}
          aria-hidden="true"
        >
          <Icon className="h-3 w-3 shrink-0" />
          {label}
        </div>
      ))}
    </aside>
  )
}

function AppMain() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden bg-white">
      {/* Top bar */}
      <div className="flex h-9 shrink-0 items-center justify-between border-b border-border px-4">
        <span className="text-[10px] font-semibold text-foreground">Dashboard</span>
        <div className="h-5 w-5 rounded-full bg-brand-accent/30" aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col gap-3 overflow-hidden p-4">
        {/* Date chip */}
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-muted-foreground">Jul 2026</span>
          <span className="rounded border border-border px-2 py-0.5 text-[9px] text-muted-foreground">Export</span>
        </div>

        {/* KPI grid */}
        <div className="grid grid-cols-4 gap-2">
          {STATS.map(({ label, value, change, positive }) => (
            <div key={label} className="rounded-lg border border-gray-100 bg-gray-50/60 p-2">
              <p className="text-[8px] text-muted-foreground">{label}</p>
              <p className="text-[11px] font-bold text-foreground">{value}</p>
              <p className={cn('text-[8px] font-medium', positive ? 'text-green-600' : 'text-red-500')}>
                {change}
              </p>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="flex-1 rounded-lg border border-gray-100 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-semibold text-gray-700">Revenue · last 12 weeks</span>
            <span className="flex items-center gap-1 text-[9px] text-green-600">
              <ArrowUp className="h-2.5 w-2.5" />24.6%
            </span>
          </div>
          <div className="flex h-16 items-end gap-1" aria-hidden="true">
            {BAR_HEIGHTS.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: i === BAR_HEIGHTS.length - 1
                    ? '#57DFA6'
                    : i >= BAR_HEIGHTS.length - 3
                      ? 'rgba(87,223,166,0.35)'
                      : 'rgba(0,0,0,0.06)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Recent orders */}
        <div className="rounded-lg border border-gray-100 p-3">
          <p className="mb-2 text-[10px] font-semibold text-gray-700">Recent Orders</p>
          {[
            { name: 'Emma Wilson', amt: '$249', status: 'Paid', ok: true },
            { name: 'James Carter', amt: '$99', status: 'Pending', ok: false },
            { name: 'Sofia Nguyen', amt: '$499', status: 'Paid', ok: true },
          ].map(({ name, amt, status, ok }) => (
            <div key={name} className="flex items-center justify-between py-0.5">
              <span className="text-[9px] text-gray-700">{name}</span>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-medium text-gray-900">{amt}</span>
                <span className={cn(
                  'rounded px-1.5 py-0.5 text-[7px] font-medium',
                  ok ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700',
                )}>
                  {status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function HeroVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden" aria-hidden="true">
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1280&q=80"
        alt=""
        fill
        className="object-cover rounded-tl-xl"
        priority
        sizes="(min-width: 1024px) 58vw, 100vw"
      />
      {/* Subtle overlay so window pops */}
      {/* <div className="absolute inset-0 bg-black/10" /> */}

      {/* Floating app window — extends beyond right + bottom edges */}
      <div
        className="absolute bottom-[-1.5rem] left-8 right-0 top-10 overflow-hidden rounded-tl-xl border border-border bg-white shadow-[0_24px_60px_rgba(0,0,0,0.22)] lg:left-12 lg:top-14"
      >
        <div className="flex h-full">
          <AppSidebar />
          <AppMain />
        </div>
      </div>
    </div>
  )
}
