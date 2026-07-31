import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { BackgroundGlow } from '@/components/layout/BackgroundGlow'
import { FadeUp } from '@/components/animations/FadeUp'
import { LinkButton } from '@/components/ui/LinkButton'

export function PricingCta() {
  return (
    <Section
      spacing="lg"
      aria-label="Start your free trial"
      className="relative overflow-hidden"
    >
      <BackgroundGlow variant="green" size="lg" position="bottom-center" />

      <Container>
        <FadeUp className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Start your 14-day free trial
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            No credit card required. Set up in minutes. Cancel anytime.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/signup" variant="primary" size="lg" withArrow>
              Get started free
            </LinkButton>
            <LinkButton href="/contact" variant="outline" size="lg">
              Talk to sales
            </LinkButton>
          </div>

          <p className="text-xs text-muted-foreground">
            Trusted by{' '}
            <strong className="font-medium text-foreground">120,000+</strong>{' '}
            businesses worldwide
          </p>
        </FadeUp>
      </Container>
    </Section>
  )
}
