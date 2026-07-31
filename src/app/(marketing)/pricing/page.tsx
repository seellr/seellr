import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { PricingHero }         from '@/features/pricing/components/PricingHero'
import { PricingPlans }        from '@/features/pricing/components/PricingPlans'
import { PricingComparison }   from '@/features/pricing/components/PricingComparison'
import { PricingTestimonials } from '@/features/pricing/components/PricingTestimonials'
import { PricingFaq }          from '@/features/pricing/components/PricingFaq'
import { PricingCta }          from '@/features/pricing/components/PricingCta'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for every stage of your business. Start free for 14 days — no credit card required.',
  openGraph: {
    title: 'Pricing — Seellr',
    description:
      'Simple, transparent pricing for every stage of your business. Start free for 14 days.',
  },
}

export default function PricingPage() {
  return (
    <PageWrapper aria-label="Pricing">
      <PricingHero />
      <PricingPlans />
      <PricingComparison />
      <PricingTestimonials />
      <PricingFaq />
      <PricingCta />
    </PageWrapper>
  )
}
