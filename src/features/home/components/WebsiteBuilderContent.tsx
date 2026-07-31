'use client'

import { FadeLeft } from '@/components/animations/FadeLeft'
import { BenefitItem } from '@/components/ui/BenefitItem'
import { LinkButton } from '@/components/ui/LinkButton'

const BENEFITS = [
  'Drag-and-drop sections',
  '200+ premium templates',
  'Mobile-first responsive',
  'Custom domain + SSL',
] as const

export function WebsiteBuilderContent() {
  return (
    <FadeLeft className="flex flex-col gap-8">
      {/* Eyebrow */}
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
        Website Builder
      </p>

      {/* Heading */}
      <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        Build stunning websites without writing{' '}
        <span className="text-brand-muted">a line of code</span>
      </h2>

      {/* Supporting paragraph */}
      <p className="max-w-md text-base leading-relaxed text-muted-foreground">
        Seellr gives you a professional-grade visual editor that feels fast and intuitive. Launch
        polished, high-converting pages in minutes — no developers required.
      </p>

      {/* Benefits list */}
      <ul className="flex flex-col gap-3" aria-label="Website builder benefits">
        {BENEFITS.map((benefit) => (
          <BenefitItem key={benefit} label={benefit} />
        ))}
      </ul>

      {/* CTA */}
      <div className="pt-2">
        <LinkButton href="/signup" variant="outline" withArrow className="w-full sm:w-fit">
          Start building
        </LinkButton>
      </div>
    </FadeLeft>
  )
}
