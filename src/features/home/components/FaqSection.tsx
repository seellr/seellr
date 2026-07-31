import dynamic from 'next/dynamic'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { FAQ_ITEMS } from '@/lib/mock/faq'

// Deferred — framer-motion accordion only needed when user reaches this section
const FaqAccordion = dynamic(() => import('./FaqAccordion').then(m => ({ default: m.FaqAccordion })))

const DISPLAY_LIMIT = 8

export function FaqSection() {
  const items = FAQ_ITEMS.slice(0, DISPLAY_LIMIT)

  return (
    <Section spacing="lg" background="white" aria-labelledby="faq-heading">
      <Container>
        {/* Section header */}
        <FadeUp className="mb-12 text-center">
          <div className="mx-auto max-w-[480px]">
            <h2
              id="faq-heading"
              className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-[40px]"
            >
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Everything you need to know about Seellr — answered simply and honestly.
            </p>
          </div>
        </FadeUp>

        {/* Accordion */}
        <FaqAccordion items={items} />
      </Container>
    </Section>
  )
}
