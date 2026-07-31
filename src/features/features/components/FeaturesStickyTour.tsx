'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe, ShoppingBag, Users, Calendar, BarChart2,
  Check, ArrowRight, TrendingUp,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { BrowserFrame } from '@/components/ui/BrowserFrame'

// ── Step definitions ──────────────────────────────────────────────────────────

interface TourStep {
  id:          string
  num:         string
  label:       string
  heading:     string
  description: string
  benefits:    string[]
  accentColor: string
  Icon:        React.FC<React.SVGProps<SVGSVGElement>>
  href:        string
  cta:         string
}

const STEPS: TourStep[] = [
  {
    id:          'website',
    num:         '01',
    label:       'Website Builder',
    heading:     'Launch a stunning website in minutes',
    description: 'Drag-and-drop builder with 120+ premium templates. Every site is responsive, SEO-optimised, and blazing fast — no code required.',
    benefits:    ['120+ professionally designed templates', 'Visual drag-and-drop editor', 'Built-in SEO toolkit', 'Mobile-first responsive', 'Custom domain & SSL free', 'One-click publishing'],
    accentColor: '#57DFA6',
    Icon:        Globe,
    href:        '/signup',
    cta:         'Start building free',
  },
  {
    id:          'ecommerce',
    num:         '02',
    label:       'Online Store',
    heading:     'Sell anything, anywhere in the world',
    description: 'Built-in ecommerce with inventory, multi-currency payments, and shipping — all from one place. Zero transaction fees on Business.',
    benefits:    ['Unlimited products & variants', 'Accept 40+ payment methods', 'Multi-currency checkout', 'Inventory management', 'Discount codes & bundles', 'Abandoned cart recovery'],
    accentColor: '#B0D7FF',
    Icon:        ShoppingBag,
    href:        '/signup',
    cta:         'Open your store',
  },
  {
    id:          'crm',
    num:         '03',
    label:       'CRM',
    heading:     'Turn every visitor into a loyal customer',
    description: 'Centralise every customer interaction. Track leads, run automated follow-up sequences, and see the full purchase timeline in one view.',
    benefits:    ['Unlimited contacts & companies', 'Visual sales pipeline', 'Automated email sequences', 'Lead scoring & segmentation', 'Full interaction history', '+67% average conversion lift'],
    accentColor: '#C4B5FD',
    Icon:        Users,
    href:        '/signup',
    cta:         'Explore CRM',
  },
  {
    id:          'bookings',
    num:         '04',
    label:       'Bookings',
    heading:     'Fill your calendar on autopilot',
    description: 'Clients self-book 24/7. Automatic reminders, buffer times, and payment collection eliminate back-and-forth entirely.',
    benefits:    ['24/7 client self-booking', 'Automated SMS & email reminders', 'Buffer times between slots', 'Group session support', 'Payment on booking', '−68% no-show rate'],
    accentColor: '#FDE68A',
    Icon:        Calendar,
    href:        '/signup',
    cta:         'Set up bookings',
  },
  {
    id:          'analytics',
    num:         '05',
    label:       'Analytics',
    heading:     'Know exactly what drives your growth',
    description: 'Real-time dashboards for traffic, revenue, conversion, and retention. No spreadsheets, no guessing — just clarity.',
    benefits:    ['Live visitor data, zero delay', '30+ pre-built report types', 'Revenue & conversion funnels', 'Customer retention tracking', 'GDPR-compliant, cookieless option', 'Exportable data & API access'],
    accentColor: '#FCA5A5',
    Icon:        BarChart2,
    href:        '/signup',
    cta:         'See your analytics',
  },
]

// ── Product visual panels ─────────────────────────────────────────────────────

const BAR_DATA = [28, 42, 36, 58, 50, 74, 56, 88, 66, 100] as const

function WebsitePanel() {
  return (
    <BrowserFrame url="mysite.seellr.com">
      <div className="bg-white" aria-hidden="true">
        <div className="flex items-center gap-4 border-b border-border/60 px-5 py-3">
          <div className="h-6 w-6 rounded-md bg-brand-accent/30" />
          <div className="flex gap-3">
            {[48, 36, 44].map((w) => (
              <div key={w} style={{ width: `${w / 4}px` }} className="h-2 rounded-full bg-neutral-200" />
            ))}
          </div>
          <div className="ml-auto h-7 w-20 rounded-lg bg-brand-accent/20" />
        </div>
        <div className="relative flex h-40 flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-brand-accent/10 via-blue-50 to-indigo-50 px-6">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-accent/10 blur-2xl" />
          <div className="h-4 w-48 rounded-full bg-neutral-300/70" />
          <div className="h-3 w-36 rounded-full bg-neutral-200/80" />
          <div className="mt-1 flex gap-2">
            <div className="h-7 w-24 rounded-lg bg-brand-accent/40" />
            <div className="h-7 w-20 rounded-lg bg-neutral-200/80" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 p-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-border/60">
              <div className={cn('h-16 bg-gradient-to-br', i === 1 ? 'from-brand-accent/20 to-blue-50' : i === 2 ? 'from-violet-50 to-blue-50' : 'from-amber-50 to-orange-50')} />
              <div className="flex flex-col gap-1.5 p-2.5">
                <div className="h-2 w-3/4 rounded-full bg-neutral-200" />
                <div className="h-2 w-1/2 rounded-full bg-neutral-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

function StorePanel() {
  return (
    <BrowserFrame url="shop.seellr.com/store">
      <div className="flex h-[280px] overflow-hidden" aria-hidden="true">
        <div className="hidden w-[100px] shrink-0 flex-col gap-0.5 border-r border-border bg-foreground/[0.02] p-2.5 sm:flex">
          <div className="mb-3 flex items-center gap-1.5 px-1">
            <span className="flex h-4 w-4 items-center justify-center rounded bg-foreground text-[7px] font-bold text-background">S</span>
            <span className="text-[9px] font-semibold text-foreground">Seellr</span>
          </div>
          {(['Dashboard', 'Products', 'Orders', 'Customers'] as const).map((item, i) => (
            <div key={item} className={cn('rounded-md px-2 py-1.5 text-[9px]', i === 2 ? 'bg-foreground font-medium text-background' : 'text-muted-foreground')}>{item}</div>
          ))}
        </div>
        <div className="flex-1 p-3">
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-[10px] font-semibold text-foreground">Orders</p>
            <span className="rounded bg-brand-success/10 px-1.5 py-0.5 text-[8px] font-medium text-brand-success">47 today</span>
          </div>
          <div className="mb-3 grid grid-cols-3 gap-1.5">
            {[
              { label: 'Revenue', value: '$3,240', trend: '+18%' },
              { label: 'Orders',  value: '47',     trend: '+6%'  },
              { label: 'Rate',    value: '3.8%',   trend: '+0.4%'},
            ].map(m => (
              <div key={m.label} className="rounded-lg border border-border p-2">
                <p className="text-[8px] text-muted-foreground">{m.label}</p>
                <p className="text-xs font-bold text-foreground">{m.value}</p>
                <p className="text-[8px] font-medium text-brand-success">{m.trend}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-border">
            {[
              { name: 'Linen Summer Dress', sku: '#4821', amt: '$89',  status: 'Shipped'    },
              { name: 'Woven Tote Bag',     sku: '#4820', amt: '$42',  status: 'Processing' },
              { name: 'Canvas Sneakers',    sku: '#4819', amt: '$120', status: 'Shipped'    },
            ].map(o => (
              <div key={o.sku} className="flex items-center justify-between border-b border-border/60 px-3 py-2 last:border-0">
                <div><p className="text-[9px] font-medium text-foreground">{o.name}</p><p className="text-[8px] text-muted-foreground">{o.sku}</p></div>
                <div className="text-right"><p className="text-[9px] font-semibold text-foreground">{o.amt}</p><p className={cn('text-[8px]', o.status === 'Shipped' ? 'text-brand-success' : 'text-amber-500')}>{o.status}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function CrmPanel() {
  const STAGES = ['Lead', 'Qualified', 'Proposal', 'Closed']
  const CARDS  = [
    { name: 'Aria Fontaine',   co: 'Nova Studio',    val: '$4,800', stage: 0 },
    { name: 'Ben Okafor',      co: 'Peak Wellness',  val: '$12k',   stage: 1 },
    { name: 'Cleo Marín',      co: 'Helix Digital',  val: '$7,200', stage: 2 },
    { name: 'Daniel Russo',    co: 'Summit Finance',  val: '$21k',   stage: 3 },
  ]
  return (
    <BrowserFrame url="app.seellr.com/crm">
      <div className="h-[280px] overflow-hidden" aria-hidden="true">
        <div className="border-b border-border bg-foreground/[0.01] px-4 py-2.5">
          <p className="text-[10px] font-semibold text-foreground">Pipeline · 4 active deals</p>
        </div>
        <div className="grid h-full grid-cols-4 gap-0 divide-x divide-border overflow-y-hidden p-3 pb-8">
          {STAGES.map((stage, si) => {
            const card = CARDS[si]
            return (
              <div key={stage} className="px-1.5">
                <p className="mb-2 text-[8px] font-semibold uppercase tracking-widest text-muted-foreground">{stage}</p>
                <div className="rounded-lg border border-border bg-background p-2.5 shadow-sm">
                  <div className="mb-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-[8px] font-bold text-violet-600">
                    {card.name[0]}
                  </div>
                  <p className="text-[9px] font-semibold text-foreground">{card.name}</p>
                  <p className="text-[8px] text-muted-foreground">{card.co}</p>
                  <p className="mt-1.5 text-[10px] font-bold text-foreground">{card.val}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </BrowserFrame>
  )
}

function BookingsPanel() {
  const DAYS   = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
  const BOOKED = [3, 7, 10, 14, 17, 21, 24]
  return (
    <BrowserFrame url="app.seellr.com/bookings">
      <div className="h-[280px] overflow-hidden" aria-hidden="true">
        <div className="border-b border-border bg-foreground/[0.01] px-4 py-2.5">
          <p className="text-[10px] font-semibold text-foreground">July 2026 · 18 bookings</p>
        </div>
        <div className="p-3">
          <div className="mb-2 grid grid-cols-7 gap-1">
            {DAYS.map(d => <p key={d} className="text-center text-[8px] font-medium text-muted-foreground">{d}</p>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
              <div
                key={day}
                className={cn(
                  'flex h-6 w-full items-center justify-center rounded-md text-[9px]',
                  BOOKED.includes(day) ? 'bg-brand-accent/20 font-semibold text-brand-success' : 'text-foreground',
                  day === 15 ? 'ring-2 ring-brand-accent' : '',
                )}
              >
                {day}
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-1.5">
            <p className="text-[9px] font-semibold text-foreground">Jul 15 — available slots</p>
            {['10:00 AM', '11:30 AM', '2:00 PM'].map((t, i) => (
              <div key={t} className={cn('flex items-center justify-between rounded-md px-2.5 py-1.5 text-[9px]', i === 1 ? 'bg-brand-accent/15 text-brand-success font-medium' : 'border border-border text-muted-foreground')}>
                <span>{t}</span>
                {i === 1 ? <span>Booked</span> : <span className="text-brand-success">Book →</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function AnalyticsPanel() {
  return (
    <BrowserFrame url="app.seellr.com/analytics">
      <div className="h-[280px] overflow-hidden" aria-hidden="true">
        <div className="border-b border-border px-4 py-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold text-foreground">Analytics overview</p>
            <span className="text-[8px] font-medium text-brand-success">● Live</span>
          </div>
        </div>
        <div className="p-3">
          <div className="mb-3 grid grid-cols-3 gap-2">
            {[
              { label: 'Visitors',    value: '8,920',  trend: '+12%' },
              { label: 'Conversions', value: '3.4%',   trend: '+0.8%'},
              { label: 'Revenue',     value: '$12.4k', trend: '+24%' },
            ].map(m => (
              <div key={m.label} className="rounded-lg border border-border bg-background p-2.5">
                <p className="text-[8px] text-muted-foreground">{m.label}</p>
                <p className="text-sm font-bold text-foreground">{m.value}</p>
                <p className="text-[8px] font-medium text-brand-success">{m.trend}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-border p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[9px] font-medium text-muted-foreground">Revenue this month</p>
              <span className="flex items-center gap-0.5 text-[9px] font-semibold text-brand-success">
                <TrendingUp className="h-2.5 w-2.5" />+18.4%
              </span>
            </div>
            <div className="flex h-[60px] items-end gap-0.5">
              {BAR_DATA.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-[2px]"
                  style={{
                    height:          `${h}%`,
                    backgroundColor: i >= BAR_DATA.length - 2
                      ? '#57DFA6'
                      : 'rgba(10,10,10,0.07)',
                    opacity: i === BAR_DATA.length - 2 ? 0.5 : 1,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-1.5">
            {[['Direct', '42%'], ['Search', '31%'], ['Social', '18%'], ['Referral', '9%']].map(([src, pct]) => (
              <div key={src} className="flex items-center justify-between rounded-md border border-border/60 px-2.5 py-1.5">
                <p className="text-[8px] text-muted-foreground">{src}</p>
                <p className="text-[9px] font-semibold text-foreground">{pct}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

const VISUAL_MAP: Record<string, React.FC> = {
  website:   WebsitePanel,
  ecommerce: StorePanel,
  crm:       CrmPanel,
  bookings:  BookingsPanel,
  analytics: AnalyticsPanel,
}

// ── Animation ─────────────────────────────────────────────────────────────────

const PANEL_ANIM = {
  initial:    { opacity: 0, y: 12  },
  animate:    { opacity: 1, y: 0   },
  exit:       { opacity: 0, y: -10 },
  transition: { duration: 0.32, ease: [0.25, 1, 0.5, 1] },
} as const

// ── FeaturesStickyTour ────────────────────────────────────────────────────────

export function FeaturesStickyTour() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const assignRef = useCallback((el: HTMLDivElement | null, i: number) => {
    stepRefs.current[i] = el
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = -1
        let nextActive = active
        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            const idx = stepRefs.current.findIndex((r) => r === entry.target)
            if (idx !== -1) nextActive = idx
          }
        })
        setActive(nextActive)
      },
      { rootMargin: '-30% 0px -30% 0px', threshold: Array.from({ length: 11 }, (_, i) => i / 10) },
    )
    const refs = stepRefs.current
    refs.forEach((ref) => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [active])

  const VisualComponent = VISUAL_MAP[STEPS[active].id]

  return (
    <section aria-label="Product feature tour" className="relative py-8 lg:py-0">
      {/* Mobile: stacked */}
      <div className="space-y-24 px-4 sm:px-6 lg:hidden">
        {STEPS.map((step) => {
          const Visual = VISUAL_MAP[step.id]
          return (
            <div key={step.id} id={step.id} className="scroll-mt-20">
              <StepContent step={step} />
              <div className="mt-8">
                <Visual />
              </div>
            </div>
          )
        })}
      </div>

      {/* Desktop: sticky 2-col */}
      <div className="hidden lg:flex">
        {/* LEFT — scrolling steps */}
        <div className="min-w-0 flex-1">
          {STEPS.map((step, i) => (
            <div
              key={step.id}
              id={step.id}
              ref={(el) => assignRef(el, i)}
              className="flex min-h-screen scroll-mt-14 items-center px-8 xl:px-16"
            >
              <div className="max-w-[460px]">
                <StepContent step={step} />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — sticky visual */}
        <div className="w-[52%] shrink-0">
          <div className="sticky top-14 flex h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-8 py-12 xl:px-12">
            {/* Step indicator */}
            <div className="mb-6 flex gap-1.5 self-start" aria-hidden="true">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'h-1 rounded-full transition-all duration-500',
                    i === active ? 'w-8 bg-foreground' : 'w-2 bg-border',
                  )}
                />
              ))}
            </div>

            {/* Visual panel */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div key={active} {...PANEL_ANIM}>
                  <VisualComponent />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Caption */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`cap-${active}`}
                {...PANEL_ANIM}
                className="mt-4 self-start text-xs text-muted-foreground"
              >
                {STEPS[active].num} / 05 — {STEPS[active].label}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── StepContent ───────────────────────────────────────────────────────────────

function StepContent({ step }: { step: TourStep }) {
  const { Icon, accentColor } = step
  return (
    <div className="flex flex-col gap-6">
      {/* Eyebrow */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {step.num}
        </span>
        <span className="h-px w-6 bg-border" aria-hidden="true" />
        <div
          className="flex h-7 w-7 items-center justify-center rounded-md"
          style={{ backgroundColor: `${accentColor}20` }}
          aria-hidden="true"
        >
          <Icon className="h-3.5 w-3.5" style={{ color: accentColor }} />
        </div>
        <span
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: accentColor }}
        >
          {step.label}
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ lineHeight: 1.12 }}>
        {step.heading}
      </h2>

      {/* Description */}
      <p className="text-base leading-relaxed text-muted-foreground">{step.description}</p>

      {/* Benefits */}
      <ul className="flex flex-col gap-2.5">
        {step.benefits.map((b) => (
          <li key={b} className="flex items-center gap-3 text-sm text-foreground">
            <Check
              className="h-4 w-4 shrink-0"
              style={{ color: accentColor }}
              aria-hidden="true"
            />
            {b}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={step.href}
        className="group mt-2 flex w-fit items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(0,0,0,0.18)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
      >
        {step.cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </div>
  )
}
