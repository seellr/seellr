import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { BackgroundGlow } from '@/components/layout/BackgroundGlow'
import { FadeUp } from '@/components/animations/FadeUp'
import { PRICING_PLANS } from '@/lib/mock/pricing'

// Deferred — stagger animation + plan data only needed when scrolled to
const PricingCards = dynamic(() => import('./PricingCards').then(m => ({ default: m.PricingCards })))

export function PricingPreviewSection() {
  return (
    <Section spacing="lg" className="overflow-hidden" aria-labelledby="pricing-preview-heading">
      <BackgroundGlow variant="green" size="lg" position="top-center" />

      <Container>
        {/* Section header */}
        <FadeUp className="mx-auto mb-10 max-w-xl text-center md:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-accent">
            Pricing
          </p>
          <h2
            id="pricing-preview-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Simple, transparent pricing
          </h2>
          <p className="text-base text-muted-foreground">
            No hidden fees. No contracts. Cancel anytime.
          </p>
          <div className="mt-4 inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground">
            Billed monthly
          </div>
        </FadeUp>

        {/* Cards grid */}
        <PricingCards plans={PRICING_PLANS} />

        {/* Footer link */}
        <FadeUp className="mt-10 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View full pricing page
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </FadeUp>
      </Container>
    </Section>
  )
}
