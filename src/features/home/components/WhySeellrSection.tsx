import dynamic from 'next/dynamic'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { BackgroundGlow } from '@/components/layout/BackgroundGlow'
import { FadeUp } from '@/components/animations/FadeUp'

// Deferred — comparison card animations not needed until scrolled to
const WhySeellrCards = dynamic(() => import('./WhySeellrCards').then(m => ({ default: m.WhySeellrCards })))

export function WhySeellrSection() {
  return (
    <Section
      background="surface"
      spacing="lg"
      aria-labelledby="why-seellr-heading"
    >
      <BackgroundGlow variant="green" size="lg" position="bottom-center" />

      <Container>
        {/* Section header */}
        <FadeUp className="mx-auto mb-10 max-w-xl text-center md:mb-14">
          <h2
            id="why-seellr-heading"
            className="text-3xl font-semibold leading-tight tracking-tight text-brand-text sm:text-[2.5rem] lg:text-5xl"
          >
            The old way was broken.
          </h2>
          <p className="mt-3 text-2xl font-medium text-brand-accent">
            Seellr fixes that.
          </p>
          <p className="mt-4 text-base text-brand-text-secondary">
            Stop paying for 5 tools that don&apos;t talk to each other.
          </p>
        </FadeUp>

        {/* Comparison cards */}
        <WhySeellrCards />
      </Container>
    </Section>
  )
}
