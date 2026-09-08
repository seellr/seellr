'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe, ShoppingBag, Users, Calendar, BarChart2,
  TrendingUp, CheckCircle, Star, Clock, ArrowRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

// ── Step data ─────────────────────────────────────────────────────────────────

interface Step {
  id:          string
  label:       string
  title:       string
  description: string
  Icon:        React.FC<React.SVGProps<SVGSVGElement>>
  accentColor: string
  metrics:     Array<{ label: string; value: string }>
}

const STEPS: Step[] = [
  {
    id:          'website',
    label:       '01 — Website Builder',
    title:       'Launch a stunning website in minutes',
    description: 'Drag-and-drop builder with 120+ premium templates. Fully responsive, SEO-optimised, and blazing fast out of the box. No code required.',
    Icon:        Globe,
    accentColor: '#c8ff2c',
    metrics:     [
      { label: 'Templates',      value: '120+' },
      { label: 'Avg. build time', value: '4 min'  },
      { label: 'Performance',    value: '99/100'  },
    ],
  },
  {
    id:          'store',
    label:       '02 — Online Store',
    title:       'Sell anything, anywhere',
    description: 'Built-in ecommerce with inventory, payments, shipping, and discount codes. Accepts all major cards and local payment methods worldwide.',
    Icon:        ShoppingBag,
    accentColor: '#145bff',
    metrics:     [
      { label: 'Payment methods', value: '40+'    },
      { label: 'Avg. setup time', value: '8 min'  },
      { label: 'Checkout rate',   value: '92%'    },
    ],
  },
  {
    id:          'crm',
    label:       '03 — CRM',
    title:       'Turn visitors into loyal customers',
    description: 'Centralise every customer interaction. Track leads, run follow-up sequences, and view the full purchase history from one clean dashboard.',
    Icon:        Users,
    accentColor: '#C4B5FD',
    metrics:     [
      { label: 'Lead score',     value: 'Auto'   },
      { label: 'Contacts',       value: '∞'      },
      { label: 'Conversion lift', value: '+67%'  },
    ],
  },
  {
    id:          'bookings',
    label:       '04 — Bookings',
    title:       'Fill your calendar on autopilot',
    description: 'Let clients self-book 24/7. Automatic reminders, buffer times, and payment collection — zero back-and-forth required.',
    Icon:        Calendar,
    accentColor: '#FDE68A',
    metrics:     [
      { label: 'No-shows',       value: '-68%'   },
      { label: 'Booking speed',  value: '3×'     },
      { label: 'Revenue/slot',   value: '+29%'   },
    ],
  },
  {
    id:          'analytics',
    label:       '05 — Analytics',
    title:       'Know what drives your growth',
    description: 'Real-time dashboards for traffic, revenue, conversion, and customer retention. No spreadsheets. No guessing. Just clarity.',
    Icon:        BarChart2,
    accentColor: '#FCA5A5',
    metrics:     [
      { label: 'Data delay',     value: '<1 s'   },
      { label: 'Reports',        value: '30+'    },
      { label: 'Insights/day',   value: 'Live'   },
    ],
  },
]

// ── Mock dashboard panel ──────────────────────────────────────────────────────

const BAR_HEIGHTS = [38, 52, 44, 68, 58, 82, 62, 90, 70, 100]

function DashboardPanel({ step }: { step: Step }) {
  const { Icon, accentColor, metrics, title, label } = step

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background shadow-[var(--shadow-float)]">
      {/* Window chrome */}
      <div className="flex h-8 sm:h-9 items-center gap-1.5 border-b border-border bg-brand-surface px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="mx-3 flex-1 rounded-md bg-border/60 py-0.5 text-center text-[10px] text-muted-foreground">
          app.seellr.com/{step.id}
        </span>
      </div>

      {/* Main content */}
      <div className="p-4 sm:p-5 lg:p-6">
        {/* Header */}
        <div className="mb-4 sm:mb-5 flex items-center gap-3">
          <div
            className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg"
            style={{ background: `${accentColor}20` }}
          >
            <Icon
              className="h-4 w-4 sm:h-4.5 sm:w-4.5"
              style={{ color: accentColor }}
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              {label}
            </p>
            <p className="text-sm font-semibold text-foreground">{title}</p>
          </div>
        </div>

        {/* Metric cards */}
        <div className="mb-4 sm:mb-5 grid grid-cols-3 gap-2.5 sm:gap-3">
          {metrics.map(m => (
            <div key={m.label} className="rounded-lg border border-border p-2.5 sm:p-3">
              <p className="text-[10px] text-muted-foreground">{m.label}</p>
              <p className="mt-0.5 sm:mt-1 text-lg sm:text-xl font-bold text-foreground" style={{ color: accentColor }}>
                {m.value}
              </p>
            </div>
          ))}
        </div>

        {/* Mini bar chart */}
        <div className="rounded-lg border border-border p-3 sm:p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[10px] font-medium text-muted-foreground">Weekly performance</p>
            <div className="flex items-center gap-1 text-[10px] font-semibold text-brand-success">
              <TrendingUp className="h-3 w-3" aria-hidden="true" />
              +18.4%
            </div>
          </div>
          <div
            className="flex h-[52px] sm:h-[64px] items-end gap-1"
            role="img"
            aria-label="Weekly performance chart"
          >
            {BAR_HEIGHTS.map((h, i) => (
              <div
                key={i}
                className={cn(
                  'flex-1 rounded-t-[2px] transition-all',
                  i === BAR_HEIGHTS.length - 1
                    ? 'opacity-100'
                    : i === BAR_HEIGHTS.length - 2
                    ? 'opacity-50'
                    : 'opacity-[0.08]',
                )}
                style={{
                  height:           `${h}%`,
                  backgroundColor:  i >= BAR_HEIGHTS.length - 2 ? accentColor : '#071a3d',
                }}
              />
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
          {['View report', 'Share', 'Export'].map(a => (
            <div
              key={a}
              className="rounded-md border border-border px-2.5 py-1 text-[10px] sm:px-3 sm:py-1.5 sm:text-[11px] font-medium text-muted-foreground"
            >
              {a}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── ProductTourScroll ─────────────────────────────────────────────────────────

const PANEL_TRANSITION = {
  initial:    { opacity: 0, y: 16 },
  animate:    { opacity: 1, y: 0  },
  exit:       { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
} as const

export function ProductTourScroll() {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    const rect     = el.getBoundingClientRect()
    const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)))
    const index    = Math.min(STEPS.length - 1, Math.floor(progress * STEPS.length))
    setActiveStep(index)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    /* Container tall enough for 5 scroll "pages" */
    <div
      ref={containerRef}
      className="relative"
      style={{ minHeight: `${STEPS.length * 100}vh` }}
      aria-label="Scroll to explore product features"
    >
      {/* Sticky inner — padded at top to clear sticky navbar and prevent items clipping */}
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-20 pb-6 sm:pt-24 lg:pt-24 lg:pb-8">
        <div className="mx-auto flex w-full max-w-[1280px] items-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8">

          {/* LEFT — step list */}
          <div className="hidden w-[340px] xl:w-[380px] shrink-0 flex-col gap-2 lg:flex">
            {STEPS.map((step, i) => {
              const isActive = i === activeStep
              return (
                <button
                  key={step.id}
                  onClick={() => {
                    if (!containerRef.current) return
                    const el     = containerRef.current
                    const target = el.offsetTop + (i / STEPS.length) * (el.offsetHeight - window.innerHeight) + 1
                    window.scrollTo({ top: target, behavior: 'smooth' })
                  }}
                  className={cn(
                    'group relative flex items-center gap-3.5 rounded-xl px-3.5 py-2.5 sm:py-3',
                    'text-left transition-all duration-300',
                    isActive
                      ? 'bg-foreground text-background shadow-sm'
                      : 'hover:bg-brand-surface text-muted-foreground hover:text-foreground',
                  )}
                >
                  {/* Accent bar */}
                  <div
                    className={cn(
                      'absolute left-0 top-1/2 h-7 w-[3px] -translate-y-1/2 rounded-r-full transition-opacity duration-300',
                      isActive ? 'opacity-100' : 'opacity-0',
                    )}
                    style={{ backgroundColor: step.accentColor }}
                    aria-hidden="true"
                  />

                  <div
                    className={cn(
                      'flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg',
                      isActive ? 'bg-background/10' : 'bg-brand-surface group-hover:bg-background',
                    )}
                  >
                    <step.Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <p className={cn(
                      'text-[11px] font-medium uppercase tracking-widest',
                      isActive ? 'text-background/60' : 'text-muted-foreground',
                    )}>
                      {`0${i + 1}`}
                    </p>
                    <p className="truncate text-xs sm:text-sm font-semibold">{step.title.split(' ').slice(0, 4).join(' ')}</p>
                  </div>

                  {isActive && (
                    <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  )}
                </button>
              )
            })}
          </div>

          {/* RIGHT — dashboard panel */}
          <div className="relative min-w-0 flex-1">
            {/* Description (above panel, animates per step on mobile/tablet) */}
            <div className="mb-4 lg:hidden">
              <AnimatePresence mode="wait">
                <motion.div key={activeStep} {...PANEL_TRANSITION}>
                  <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                    {STEPS[activeStep].label}
                  </p>
                  <h3 className="mt-0.5 text-xl font-bold text-foreground sm:text-2xl">
                    {STEPS[activeStep].title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Description (side-by-side on lg+) */}
            <div className="mb-4 hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div key={`desc-${activeStep}`} {...PANEL_TRANSITION}>
                  <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {STEPS[activeStep].label}
                  </p>
                  <p className="max-w-[480px] text-sm text-muted-foreground">
                    {STEPS[activeStep].description}
                  </p>
                  {/* Feature bullets */}
                  <ul className="mt-2.5 space-y-1.5">
                    {[
                      'No setup fees or contracts',
                      'Free migration from existing tools',
                      '24/7 support included',
                    ].map(item => (
                      <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 shrink-0 text-brand-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Product panel */}
            <AnimatePresence mode="wait">
              <motion.div key={`panel-${activeStep}`} {...PANEL_TRANSITION}>
                <DashboardPanel step={STEPS[activeStep]} />
              </motion.div>
            </AnimatePresence>

            {/* Step progress dots (mobile) */}
            <div className="mt-4 flex justify-center gap-2 lg:hidden" aria-hidden="true">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    i === activeStep ? 'w-6 bg-foreground' : 'w-1.5 bg-border',
                  )}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-border"
          aria-hidden="true"
        >
          <div
            className="h-full bg-brand-accent transition-all duration-300"
            style={{ width: `${((activeStep + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
