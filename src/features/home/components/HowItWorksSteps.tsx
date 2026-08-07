'use client'

import { UserPlus, LayoutTemplate, Paintbrush, Rocket, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const STEPS = [
  {
    number: '01',
    icon:    UserPlus,
    title:   'Sign up for free',
    description: 'Create your account in 30 seconds. No credit card required — ever.',
    bg:      '#0A0A0A',
    accent:  '#57DFA6',
    tag:     'Start here',
    cta:     { label: 'Create account', href: '/signup' },
    visual: (
      <div className="mt-auto flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="h-2 w-24 rounded-full bg-white/20" />
        <div className="flex gap-2">
          <div className="h-8 flex-1 rounded-lg bg-white/10" />
          <div className="h-8 flex-1 rounded-lg bg-white/10" />
        </div>
        <div className="h-9 rounded-lg" style={{ background: '#57DFA6' }} />
      </div>
    ),
  },
  {
    number: '02',
    icon:    LayoutTemplate,
    title:   'Pick a template',
    description: '200+ professionally designed templates. Filter by industry and launch style.',
    bg:      '#0f172a',
    accent:  '#93c5fd',
    tag:     'Choose look',
    cta:     { label: 'Browse templates', href: '/templates' },
    visual: (
      <div className="mt-auto grid grid-cols-2 gap-2">
        {['#1e3a5f','#0f2744','#1a3a6c','#0d2137'].map((c, i) => (
          <div key={i} className="h-16 rounded-xl border border-white/10" style={{ background: c }}>
            {i === 0 && <div className="m-2 h-1.5 w-10 rounded-full" style={{ background: '#93c5fd' }} />}
          </div>
        ))}
      </div>
    ),
  },
  {
    number: '03',
    icon:    Paintbrush,
    title:   'Customize everything',
    description: 'Drag, drop, and style. Add products, booking pages, or CRM — all in one place.',
    bg:      '#1e1b4b',
    accent:  '#c4b5fd',
    tag:     'Make it yours',
    cta:     { label: 'See the builder', href: '/features' },
    visual: (
      <div className="mt-auto space-y-2 rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg" style={{ background: '#c4b5fd22' }} />
          <div className="h-2 flex-1 rounded-full bg-white/20" />
        </div>
        <div className="h-2 w-32 rounded-full" style={{ background: '#c4b5fd40' }} />
        <div className="h-2 w-20 rounded-full bg-white/10" />
        <div className="mt-3 h-1 rounded-full bg-white/5">
          <div className="h-full w-3/4 rounded-full" style={{ background: '#c4b5fd' }} />
        </div>
      </div>
    ),
  },
  {
    number: '04',
    icon:    Rocket,
    title:   'Launch and grow',
    description: 'Go live with one click. Track every visitor, sale, and booking from your dashboard.',
    bg:      '#431407',
    accent:  '#fbbf24',
    tag:     'Ship it',
    cta:     { label: 'See the dashboard', href: '/features' },
    visual: (
      <div className="mt-auto space-y-2 rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-end gap-1">
          {[40, 55, 35, 70, 60, 85, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{ height: `${h * 0.5}px`, background: i === 6 ? '#fbbf24' : '#fbbf2430' }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="h-2 w-12 rounded-full bg-white/20" />
          <div className="flex items-center gap-1">
            <div className="h-1.5 w-1.5 rounded-full" style={{ background: '#4ade80' }} />
            <div className="h-1.5 w-8 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    ),
  },
] as const

export function HowItWorksSteps() {
  return (
    <div
      className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      style={{ scrollbarWidth: 'none' }}
      role="list"
      aria-label="How to get started steps"
    >
      {STEPS.map((step) => {
        const Icon = step.icon
        return (
          <article
            key={step.number}
            role="listitem"
            className="relative flex min-w-[270px] max-w-[300px] flex-none snap-start flex-col overflow-hidden rounded-2xl p-6 sm:min-w-[300px]"
            style={{ background: step.bg }}
          >
            {/* Tag pill */}
            <div
              className="mb-5 inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide"
              style={{ background: step.accent + '22', color: step.accent }}
            >
              {step.tag}
            </div>

            {/* Number + icon row */}
            <div className="mb-4 flex items-center justify-between">
              <span
                className="text-[72px] font-bold leading-none"
                style={{ color: step.accent + '18' }}
                aria-hidden="true"
              >
                {step.number}
              </span>
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: step.accent + '20' }}
                aria-hidden="true"
              >
                <Icon className="h-5 w-5" style={{ color: step.accent }} />
              </div>
            </div>

            {/* Text */}
            <h3 className="mb-2 text-lg font-semibold leading-snug text-white">{step.title}</h3>
            <p className="text-sm leading-relaxed text-white/50">{step.description}</p>

            {/* CSS product mockup visual */}
            <div className="my-5 min-h-[90px]" aria-hidden="true">
              {step.visual}
            </div>

            {/* CTA */}
            <Link
              href={step.cta.href}
              className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: step.accent }}
            >
              {step.cta.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </article>
        )
      })}
    </div>
  )
}
