import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { FeatureStackCards } from './FeatureStackCards'

export function FeaturesSection() {
  return (
    <Section spacing="lg" aria-labelledby="features-heading">
      <Container>
        <FadeUp className="mb-16 flex flex-col justify-center text-center items-center  ">
          <h2
            id="features-heading"
            className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl"
          >
            One platform,
            <br />
            five superpowers
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg max-w-xl">
            Build your entire online business from a single dashboard <br /> no juggling subscriptions,
            no duct-taped integrations.
          </p>
        </FadeUp>

        <FeatureStackCards />
      </Container>
    </Section>
  )
}
