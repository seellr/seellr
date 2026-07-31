import dynamic         from 'next/dynamic'
import { Section }     from '@/components/layout/Section'
import { Container }   from '@/components/layout/Container'
import { FadeUp }      from '@/components/animations/FadeUp'
import { SectionTitle } from '@/components/typography/SectionTitle'
import { FAQ_ITEMS }   from '@/lib/mock/faq'

const FaqAccordion = dynamic(() =>
  import('@/features/home/components/FaqAccordion').then((m) => ({ default: m.FaqAccordion }))
)

const items = FAQ_ITEMS.filter(
  (item) => item.category === 'general' || item.category === 'pricing'
)

export function ContactFaq() {
  return (
    <Section spacing="lg" background="surface" aria-labelledby="contact-faq-heading">
      <Container>
        <FadeUp className="mb-12">
          <SectionTitle
            eyebrow="FAQ"
            title="Common questions"
            description="Quick answers before you reach out."
          />
        </FadeUp>

        <FaqAccordion items={items} />
      </Container>
    </Section>
  )
}
