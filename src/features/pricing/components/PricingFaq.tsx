import dynamic from 'next/dynamic'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { SectionTitle } from '@/components/typography/SectionTitle'
import { FAQ_ITEMS } from '@/lib/mock/faq'

// Deferred — accordion animation not needed until scrolled to
const FaqAccordion = dynamic(() =>
  import('@/features/home/components/FaqAccordion').then(m => ({ default: m.FaqAccordion }))
)

// Pricing-specific questions: general + pricing categories
const pricingFaqItems = FAQ_ITEMS.filter(
  (item) => item.category === 'pricing' || item.category === 'general'
)

export function PricingFaq() {
  return (
    <Section spacing="lg" background="surface" aria-labelledby="pricing-faq-heading">
      <Container>
        <FadeUp className="mb-12">
          <SectionTitle
            eyebrow="FAQ"
            title="Questions, answered"
            description="Everything you need to know before getting started."
          />
        </FadeUp>

        <FaqAccordion items={pricingFaqItems} />
      </Container>
    </Section>
  )
}
