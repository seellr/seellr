'use client'

import { FadeRight } from '@/components/animations/FadeRight'
import { BenefitItem } from '@/components/ui/BenefitItem'
import { LinkButton } from '@/components/ui/LinkButton'

const BENEFITS = [
  'Contact management',
  'Deal pipeline',
  'Email sequences',
  'Activity tracking',
] as const

export function CrmContent() {
  return (
    <FadeRight delay={0.2} className="flex flex-col justify-center">
      {/* Eyebrow */}
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-accent">
        CRM
      </p>

      {/* Heading */}
      <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        Every customer relationship in one place
      </h2>

      {/* Description */}
      <p className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
        Seellr gives your team a unified view of every contact, deal, and conversation.
        Turn leads into loyal customers without switching between a dozen tools.
      </p>

      {/* Benefits */}
      <ul className="mb-10 flex flex-col gap-3" aria-label="CRM feature benefits">
        {BENEFITS.map((benefit) => (
          <BenefitItem key={benefit} label={benefit} />
        ))}
      </ul>

      {/* CTA */}
      <LinkButton href="/features" variant="outline" withArrow className="w-full sm:w-fit">
        Explore CRM
      </LinkButton>
    </FadeRight>
  )
}
