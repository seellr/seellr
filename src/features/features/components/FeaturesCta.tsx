import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { BackgroundGlow } from '@/components/layout/BackgroundGlow'
import { FadeUp } from '@/components/animations/FadeUp'
import { LinkButton } from '@/components/ui/LinkButton'

export function FeaturesCta() {
  return (
    <Section
      spacing="lg"
      background="surface"
      aria-label="Start your free trial"
      className="relative overflow-hidden"
    >
      <BackgroundGlow variant="green" size="lg" position="bottom-center" />

      <Container>
        <FadeUp className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to replace five tools with one?
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Start your 14-day free trial. No credit card required. Cancel anytime.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/signup" variant="primary" size="lg" withArrow>
              Get started free
            </LinkButton>
            <LinkButton href="/pricing" variant="outline" size="lg">
              View pricing
            </LinkButton>
          </div>
        </FadeUp>
      </Container>
    </Section>
  )
}
