import dynamic from 'next/dynamic'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FadeUp } from '@/components/animations/FadeUp'

const HowItWorksSteps = dynamic(() =>
  import('./HowItWorksSteps').then((m) => ({ default: m.HowItWorksSteps })),
)

export function HowItWorksSection() {
  return (
    <Section background="white" aria-labelledby="how-it-works-heading">
      {/* Heading constrained */}
      <Container>
        <div className="mx-auto mb-10 max-w-xl text-center lg:mb-14">
          <FadeUp>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-accent">
              How it works
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              id="how-it-works-heading"
              className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Up and running in minutes
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-base leading-relaxed text-muted-foreground">
              From sign-up to a live, fully customized website — Seellr gets you there faster than
              you think.
            </p>
          </FadeUp>
        </div>
      </Container>

      {/* Scroll cards — full bleed, padded inline */}
      <HowItWorksSteps />
    </Section>
  )
}
