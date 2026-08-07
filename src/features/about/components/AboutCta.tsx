import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { BackgroundGlow } from '@/components/layout/BackgroundGlow'
import { FadeUp } from '@/components/animations/FadeUp'
import { LinkButton } from '@/components/ui/LinkButton'

export function AboutCta() {
  return (
    <Section
      spacing="lg"
      aria-label="Join Seellr"
      className="relative overflow-hidden"
    >
      <BackgroundGlow variant="green" size="lg" position="bottom-center" />

      <Container>
        <FadeUp className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Come build with us
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Whether you want to use Seellr or help shape it — we&apos;d love to hear from you.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/signup" variant="primary" size="lg" withArrow>
              Start free trial
            </LinkButton>
            <LinkButton href="/contact" variant="outline" size="lg">
              Get in touch
            </LinkButton>
          </div>
        </FadeUp>
      </Container>
    </Section>
  )
}
