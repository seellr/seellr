'use client'

import { FadeRight } from '@/components/animations/FadeRight'
import { BenefitItem } from '@/components/ui/BenefitItem'
import { LinkButton } from '@/components/ui/LinkButton'

const BENEFITS = [
  'Calendar integration',
  'Automated reminders',
  'Team scheduling',
  'Online payments',
] as const

export function BookingContent() {
  return (
    <FadeRight delay={0.15} className="flex flex-col justify-center">
      {/* Eyebrow */}
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-accent">
        Booking System
      </p>

      {/* Heading */}
      <h2 className="mb-5 max-w-md text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        Let clients book 24/7 — you just show up
      </h2>

      {/* Description */}
      <p className="mb-8 max-w-[440px] text-base leading-relaxed text-muted-foreground">
        Seellr handles scheduling so you never miss an appointment.
        From solo consultants to multi-location teams, bookings run on autopilot.
      </p>

      {/* Benefits */}
      <ul className="mb-10 flex flex-col gap-3" aria-label="Booking feature benefits">
        {BENEFITS.map((benefit) => (
          <BenefitItem key={benefit} label={benefit} />
        ))}
      </ul>

      {/* CTA */}
      <LinkButton href="/features" variant="outline" withArrow className="w-full sm:w-fit">
        Try Bookings
      </LinkButton>
    </FadeRight>
  )
}
