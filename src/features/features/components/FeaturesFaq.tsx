import dynamic from 'next/dynamic'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { SectionTitle } from '@/components/typography/SectionTitle'
import { FAQ_ITEMS } from '@/lib/mock/faq'

const FaqAccordion = dynamic(() =>
  import('@/features/home/components/FaqAccordion').then((m) => ({ default: m.FaqAccordion }))
)

const items = FAQ_ITEMS.filter(
  (item) => item.category === 'general' || item.category === 'technical'
)

export function FeaturesFaq() {
  return (
    <Section spacing="lg" aria-labelledby="features-faq-heading">
      <Container>
        <FadeUp className="mb-12">
          <SectionTitle
            eyebrow="FAQ"
            title="Still have questions?"
            description="Everything you need to know about Seellr's features and capabilities."
          />
        </FadeUp>

        <FaqAccordion items={items} />
      </Container>
    </Section>
  )
}
