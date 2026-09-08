'use client'

import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion'
import { UserPlus, LayoutTemplate, Paintbrush, Rocket, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'

const STEPS = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Sign up for free',
    description: 'Create your account in 30 seconds. No credit card required — ever.',
    bg: '#071a3d',
    accent: '#c8ff2c',
    tag: 'Start here',
    cta: { label: 'Create account', href: '/signup' },
    visual: (
      <div className="mt-auto flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="h-2 w-24 rounded-full bg-white/20" />
        <div className="flex gap-2">
          <div className="h-8 flex-1 rounded-lg bg-white/10" />
          <div className="h-8 flex-1 rounded-lg bg-white/10" />
        </div>
        <div className="h-9 rounded-lg" style={{ background: '#c8ff2c' }} />
      </div>
    ),
  },
  {
    number: '02',
    icon: LayoutTemplate,
    title: 'Pick a template',
    description: '200+ professionally designed templates. Filter by industry and launch style.',
    bg: '#0f172a',
    accent: '#93c5fd',
    tag: 'Choose look',
    cta: { label: 'Browse templates', href: '/templates' },
    visual: (
      <div className="mt-auto grid grid-cols-2 gap-2">
        {['#1e3a5f', '#0f2744', '#1a3a6c', '#0d2137'].map((c, i) => (
          <div key={i} className="h-16 rounded-xl border border-white/10" style={{ background: c }}>
            {i === 0 && <div className="m-2 h-1.5 w-10 rounded-full" style={{ background: '#93c5fd' }} />}
          </div>
        ))}
      </div>
    ),
  },
  {
    number: '03',
    icon: Paintbrush,
    title: 'Customize everything',
    description: 'Drag, drop, and style. Add products, booking pages, or CRM — all in one place.',
    bg: '#1e1b4b',
    accent: '#c4b5fd',
    tag: 'Make it yours',
    cta: { label: 'See the builder', href: '/features' },
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
    icon: Rocket,
    title: 'Launch and grow',
    description: 'Go live with one click. Track every visitor, sale, and booking from your dashboard.',
    bg: '#431407',
    accent: '#fbbf24',
    tag: 'Ship it',
    cta: { label: 'See the dashboard', href: '/features' },
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

function StepCardContent({ step }: { step: (typeof STEPS)[number] }) {
  const Icon = step.icon
  return (
    <>
      {/* Tag pill */}
      <div
        className="mb-4 inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide"
        style={{ background: step.accent + '22', color: step.accent }}
      >
        {step.tag}
      </div>

      {/* Number + icon row */}
      <div className="mb-3 flex items-center justify-between">
        <span
          className="text-[64px] font-bold leading-none"
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
      <h3 className="mb-1.5 text-lg font-semibold leading-snug text-white">{step.title}</h3>
      <p className="text-xs leading-relaxed text-white/50">{step.description}</p>

      {/* CSS product mockup visual */}
      <div className="my-3 min-h-[85px]" aria-hidden="true">
        {step.visual}
      </div>

      {/* CTA */}
      <Link
        href={step.cta.href}
        className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-80"
        style={{ color: step.accent }}
      >
        {step.cta.label}
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </>
  )
}

// ── DESKTOP: Horizontal Semi-Stacking Component ─────────────────────────────

const DESKTOP_OFFSET_STEP = 44

interface DesktopStackCardProps {
  step: (typeof STEPS)[number]
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}

function DesktopStackCard({ step, index, total, scrollYProgress }: DesktopStackCardProps) {
  // Horizontal entry from right for cards index > 0
  const entryStart = index === 0 ? 0 : (index - 0.5) / (total - 1)
  const entryEnd = index === 0 ? 0 : index / (total - 1)

  const nextStart = index < total - 1 ? (index + 0.5) / (total - 1) : 1
  const nextEnd = index < total - 1 ? (index + 1) / (total - 1) : 1

  // Slide horizontally from right to its semi-stacked offset
  const x = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : [entryStart, entryEnd],
    index === 0 ? ['0vw', '0vw'] : ['50vw', '0vw'],
  )

  // Card on top has opacity 1.0; when next card covers it, opacity drops to 0.35
  const opacity = useTransform(scrollYProgress, (val) => {
    if (index === 0) {
      if (val <= nextStart) return 1
      if (val >= nextEnd) return 0.35
      return 1 - ((val - nextStart) / (nextEnd - nextStart)) * 0.65
    }

    if (val < entryStart) return 0
    if (val <= entryEnd) {
      return (val - entryStart) / (entryEnd - entryStart)
    }
    if (index === total - 1) return 1

    if (val <= nextStart) return 1
    if (val >= nextEnd) return 0.35
    return 1 - ((val - nextStart) / (nextEnd - nextStart)) * 0.65
  })

  // Shade overlay fades in when covered by the next card
  const shadeOpacity = useTransform(
    scrollYProgress,
    index < total - 1 ? [nextStart, nextEnd] : [0, 1],
    index < total - 1 ? [0, 0.45] : [0, 0],
  )

  return (
    <motion.article
      role="listitem"
      style={{
        x,
        opacity,
        left: index * DESKTOP_OFFSET_STEP,
        zIndex: index + 1,
        background: step.bg,
      }}
      className={cn(
        'absolute top-0 flex h-[410px] w-[300px] flex-col justify-between overflow-hidden rounded-2xl p-6',
        'border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] will-change-transform',
      )}
    >
      <StepCardContent step={step} />

      {/* Dimming shade overlay when covered */}
      {index < total - 1 && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl bg-black"
          style={{ opacity: shadeOpacity }}
        />
      )}
    </motion.article>
  )
}

// ── MOBILE: Vertical Sticky Semi-Stacking Component (FeatureStackCards Style) ─

const MOBILE_STICKY_BASE = 76
const MOBILE_STICKY_STEP = 24

interface MobileStackCardProps {
  step: (typeof STEPS)[number]
  index: number
  total: number
  containerProgress: MotionValue<number>
}

function MobileStackCard({ step, index, total, containerProgress }: MobileStackCardProps) {
  const shadeStart = (index + 0.5) / total
  const shadeEnd = Math.min((index + 1) / total, 1)
  const shadeOpacity = useTransform(containerProgress, [shadeStart, shadeEnd], [0, 0.45])

  return (
    <div
      className="relative mx-auto w-full max-w-[320px]"
      style={{
        position: 'sticky',
        top: MOBILE_STICKY_BASE + index * MOBILE_STICKY_STEP,
        marginTop: index > 0 ? -(total - index) * 16 : 0,
        marginBottom: (total - 1 - index) * 16,
        zIndex: index + 1,
        paddingBottom: 20,
      }}
    >
      <article
        role="listitem"
        className="relative flex h-[410px] w-full flex-col justify-between overflow-hidden rounded-2xl p-6 border border-white/10 shadow-2xl"
        style={{ background: step.bg }}
      >
        <StepCardContent step={step} />

        {/* Shade: fades in as the next card stacks over this one */}
        {index < total - 1 && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl bg-black"
            style={{ opacity: shadeOpacity }}
          />
        )}
      </article>
    </div>
  )
}

// ── MAIN COMPONENT ───────────────────────────────────────────────────────────

export function HowItWorksSteps() {
  const prefersReduced = useReducedMotion()

  // Desktop scroll tracking
  const desktopContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: desktopProgress } = useScroll({
    target: desktopContainerRef,
    offset: ['start start', 'end end'],
  })

  // Mobile scroll tracking (offset matches FeatureStackCards)
  const mobileContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: mobileProgress } = useScroll({
    target: mobileContainerRef,
    offset: ['start start', 'end end'],
  })

  const [activeStep, setActiveStep] = useState(0)

  // Track active step on desktop
  useMotionValueEvent(desktopProgress, 'change', (latest) => {
    if (latest < 0.25) {
      setActiveStep(0)
    } else if (latest < 0.58) {
      setActiveStep(1)
    } else if (latest < 0.88) {
      setActiveStep(2)
    } else {
      setActiveStep(3)
    }
  })

  // Smooth scroll to a step on desktop
  const scrollToStep = (index: number) => {
    if (!desktopContainerRef.current) return
    const el = desktopContainerRef.current
    const totalScrollable = el.offsetHeight - window.innerHeight
    if (totalScrollable <= 0) return
    const targetProgress = index === 0 ? 0.05 : (index - 0.25) / (STEPS.length - 1)
    const targetTop = el.offsetTop + targetProgress * totalScrollable
    window.scrollTo({ top: targetTop, behavior: 'smooth' })
  }

  // Fallback for reduced motion
  if (prefersReduced) {
    return (
      <div className="py-16 md:py-24">
        <Container>
          <div className="mx-auto mb-12 max-w-xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-accent">
              How it works
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Up and running in minutes
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              From sign-up to a live, fully customized website — Seellr gets you there faster than you think.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6" role="list">
            {STEPS.map((step) => (
              <article
                key={step.number}
                role="listitem"
                className="relative flex h-[410px] w-full max-w-[320px] flex-col justify-between overflow-hidden rounded-2xl p-6 border border-white/10 shadow-xl"
                style={{ background: step.bg }}
              >
                <StepCardContent step={step} />
              </article>
            ))}
          </div>
        </Container>
      </div>
    )
  }

  return (
    <>
      {/* ── DESKTOP: Sticky Horizontal Semi-Stacking View (>= 768px) ── */}
      <div
        ref={desktopContainerRef}
        className="relative hidden md:block"
        style={{ minHeight: '280vh' }}
        aria-label="How it works interactive horizontal semi-stacked cards"
      >
        <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden py-6 lg:py-8">
          {/* Header & Step Pills */}
          <Container className="shrink-0 text-center">
            <div className="mx-auto max-w-xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-accent">
                How it works
              </p>
              <h2
                id="how-it-works-heading"
                className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]"
              >
                Up and running in minutes
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                From sign-up to a live, fully customized website — Seellr gets you there faster than you think.
              </p>
            </div>

            {/* Interactive Step Navigator */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {STEPS.map((step, index) => {
                const isActive = activeStep === index
                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => scrollToStep(index)}
                    className={cn(
                      'group flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 cursor-pointer',
                      isActive
                        ? 'bg-foreground text-background shadow-md scale-105'
                        : 'border border-border bg-background/80 text-muted-foreground hover:text-foreground hover:bg-muted/50',
                    )}
                  >
                    <span
                      className="h-2 w-2 rounded-full transition-colors"
                      style={{ backgroundColor: isActive ? step.accent : 'currentColor' }}
                    />
                    <span>{step.number}</span>
                    <span>{step.title}</span>
                  </button>
                )
              })}
            </div>
          </Container>

          {/* Center Stage: Horizontal Semi-Stacked Cards */}
          <Container className="relative my-auto flex items-center justify-center py-2">
            {/* Stage dimensions: card width (300px) + (total - 1) * offset (132px) = 432px */}
            <div className="relative h-[410px] w-[432px]">
              {STEPS.map((step, index) => (
                <DesktopStackCard
                  key={step.number}
                  step={step}
                  index={index}
                  total={STEPS.length}
                  scrollYProgress={desktopProgress}
                />
              ))}
            </div>
          </Container>

          {/* Bottom Progress Bar & Step Status */}
          <Container className="shrink-0 pb-2">
            <div className="flex flex-col items-center justify-center gap-1.5">
              <div className="h-1 w-48 overflow-hidden rounded-full bg-border/60">
                <motion.div
                  className="h-full rounded-full bg-brand-accent"
                  style={{
                    scaleX: desktopProgress,
                    transformOrigin: 'left',
                  }}
                />
              </div>
              <p className="text-[11px] font-medium text-muted-foreground">
                Step <span className="font-bold text-foreground">0{activeStep + 1}</span> of 04 — Scroll to explore
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* ── MOBILE: Vertical Sticky Semi-Stacking View (< 768px) ── */}
      <div
        ref={mobileContainerRef}
        className="block pb-24 pt-16 md:hidden"
        aria-label="How it works vertical semi-stacked cards"
      >
        <Container>
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-accent">
              How it works
            </p>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Up and running in minutes
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              From sign-up to a live, fully customized website — Seellr gets you there faster than you think.
            </p>
          </div>

          {/* Vertical Sticky Stack (FeatureStackCards animation) */}
          <div className="relative pt-4" role="list">
            {STEPS.map((step, index) => (
              <MobileStackCard
                key={step.number}
                step={step}
                index={index}
                total={STEPS.length}
                containerProgress={mobileProgress}
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  )
}
