'use client'

import { motion } from 'framer-motion'
import { Bell, LayoutDashboard, ShoppingCart, Users, BarChart2, Settings, TrendingUp } from 'lucide-react'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { Scale } from '@/components/animations/Scale'
import { Floating } from '@/components/animations/Floating'
import { cn } from '@/lib/utils'

// ─── Internal sub-components ────────────────────────────────────────────────

function DashboardSidebar() {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: ShoppingCart,    label: 'Orders' },
    { icon: Users,           label: 'Customers' },
    { icon: BarChart2,       label: 'Analytics' },
    { icon: Settings,        label: 'Settings' },
  ]

  return (
    <aside className="flex h-full w-[110px] shrink-0 flex-col gap-1 border-r border-white/5 bg-white/5 p-3 md:w-[140px]">
      {/* Logo */}
      <div className="mb-3 flex items-center gap-2 px-1 py-1">
        <div className="h-5 w-5 rounded bg-[#c8ff2c]" aria-hidden="true" />
        <span className="text-[11px] font-semibold text-white/90">Seellr</span>
      </div>

      {navItems.map(({ icon: Icon, label, active }) => (
        <div
          key={label}
          className={cn(
            'flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] font-medium transition-colors',
            active
              ? 'bg-white/10 text-white'
              : 'text-white/40 hover:bg-white/5 hover:text-white/70',
          )}
          aria-hidden="true"
        >
          <Icon size={13} strokeWidth={1.8} />
          <span className="hidden md:inline">{label}</span>
        </div>
      ))}
    </aside>
  )
}

function RevenueChart() {
  // Smooth SVG area chart — upward trend
  const path = 'M0,110 C40,95 80,80 120,70 C160,60 200,40 240,30 C280,20 320,25 360,15 C400,5 440,10 480,5 L480,130 L0,130 Z'
  const line = 'M0,110 C40,95 80,80 120,70 C160,60 200,40 240,30 C280,20 320,25 360,15 C400,5 440,10 480,5'

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-gray-700">Revenue</span>
        <span className="flex items-center gap-1 text-[9px] text-[#16A34A]">
          <TrendingUp size={9} /> +18.4%
        </span>
      </div>
      <svg viewBox="0 0 480 130" className="w-full" aria-hidden="true">
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8ff2c" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#c8ff2c" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path d={path} fill="url(#chartFill)" />
        <path d={line} fill="none" stroke="#c8ff2c" strokeWidth="2" strokeLinecap="round" />
        {/* Y-axis labels */}
        {['$15k', '$10k', '$5k'].map((label, i) => (
          <text key={label} x="0" y={20 + i * 45} className="text-[8px]" fill="#9CA3AF" fontSize="8">
            {label}
          </text>
        ))}
      </svg>
    </div>
  )
}

function DashboardMainArea() {
  const kpis = [
    { label: 'Revenue',    value: '$12.4k', change: '+12%', positive: true },
    { label: 'Orders',     value: '384',    change: '+8%',  positive: true },
    { label: 'Visitors',   value: '8.9k',   change: '+23%', positive: true },
    { label: 'Conversion', value: '3.4%',   change: '-0.2%',positive: false },
  ]

  const products = [
    { name: 'Pro Plan',     revenue: '$4,820', pct: 80 },
    { name: 'Starter Plan', revenue: '$2,340', pct: 45 },
    { name: 'Business',     revenue: '$5,240', pct: 95 },
  ]

  const orders = [
    { name: 'Emma Wilson',   amount: '$249', status: 'Paid',    color: 'bg-green-100 text-green-700' },
    { name: 'James Carter',  amount: '$99',  status: 'Pending', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Sofia Nguyen',  amount: '$499', status: 'Paid',    color: 'bg-green-100 text-green-700' },
  ]

  return (
    <main className="flex h-full flex-1 flex-col overflow-hidden bg-white">
      {/* Top nav */}
      <div className="flex h-9 shrink-0 items-center justify-between border-b border-gray-100 px-4">
        <span className="text-[10px] font-semibold text-gray-900">Dashboard</span>
        <div className="flex items-center gap-2" aria-hidden="true">
          <Bell size={12} className="text-gray-400" />
          <div className="h-5 w-5 rounded-full bg-[#c8ff2c]/30" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 overflow-hidden p-4">
        {/* Sub-header */}
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-gray-400">Jul 2026</span>
          <span className="rounded border border-gray-200 px-2 py-0.5 text-[9px] text-gray-500">
            Export
          </span>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-4 gap-2">
          {kpis.map(({ label, value, change, positive }) => (
            <div key={label} className="rounded-lg border border-gray-100 bg-gray-50/60 p-2">
              <p className="text-[8px] text-gray-400">{label}</p>
              <p className="text-[11px] font-bold text-gray-900">{value}</p>
              <p className={cn('text-[8px] font-medium', positive ? 'text-green-600' : 'text-red-500')}>
                {change}
              </p>
            </div>
          ))}
        </div>

        {/* Chart + Products row */}
        <div className="flex flex-1 gap-3 overflow-hidden">
          <div className="flex-1 rounded-lg border border-gray-100 p-3">
            <RevenueChart />
          </div>
          <div className="w-[110px] shrink-0 rounded-lg border border-gray-100 p-3 md:w-[130px]">
            <p className="mb-2 text-[10px] font-semibold text-gray-700">Top Plans</p>
            <div className="flex flex-col gap-2">
              {products.map(({ name, revenue, pct }) => (
                <div key={name} className="flex flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] text-gray-500">{name}</span>
                    <span className="text-[8px] font-medium text-gray-800">{revenue}</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-[#c8ff2c]"
                      style={{ width: `${pct}%` }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent orders */}
        <div className="rounded-lg border border-gray-100 p-3">
          <p className="mb-2 text-[10px] font-semibold text-gray-700">Recent Orders</p>
          <div className="flex flex-col gap-1.5">
            {orders.map(({ name, amount, status, color }) => (
              <div key={name} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="h-4 w-4 rounded-full bg-gray-200" aria-hidden="true" />
                  <span className="text-[9px] text-gray-700">{name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-medium text-gray-900">{amount}</span>
                  <span className={cn('rounded px-1.5 py-0.5 text-[7px] font-medium', color)}>
                    {status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

// ─── Floating overlay cards ─────────────────────────────────────────────────

function FloatingRevenueCard() {
  return (
    <Floating amplitude={8} duration={5} delay={0.3} className="hidden xl:block">
      <div className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
        <p className="text-[10px] text-white/50">Monthly Revenue</p>
        <p className="text-lg font-bold text-white">$12,400</p>
        <p className="mt-0.5 flex items-center gap-1 text-[10px] text-[#c8ff2c]">
          <TrendingUp size={9} /> Up 18% from last month
        </p>
      </div>
    </Floating>
  )
}

function FloatingSatisfactionCard() {
  return (
    <Floating amplitude={6} duration={4.5} delay={0.8} className="hidden xl:block">
      <div className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
        <p className="text-[10px] text-white/50">Customer Satisfaction</p>
        <p className="text-lg font-bold text-white">4.9 ★</p>
        <p className="mt-0.5 text-[10px] text-white/40">Based on 2,840 reviews</p>
      </div>
    </Floating>
  )
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function DashboardPreviewVisual() {
  return (
    <div className="relative w-full">
      {/* Floating card — top right */}
      <div className="absolute -right-10 -top-6 z-20">
        <FloatingSatisfactionCard />
      </div>

      {/* Browser frame */}
      <Scale>
        <motion.div
          whileHover={{ scale: 0.99 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <BrowserFrame
            url="app.seellr.com/dashboard"
            className="shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
          >
            <div className="flex h-[320px] md:h-[480px] lg:h-[520px]">
              <DashboardSidebar />
              <DashboardMainArea />
            </div>
          </BrowserFrame>
        </motion.div>
      </Scale>

      {/* Floating card — bottom left */}
      <div className="absolute -bottom-4 -left-10 z-20">
        <FloatingRevenueCard />
      </div>
    </div>
  )
}
