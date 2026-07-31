import dynamic from 'next/dynamic'
import { Check } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { Heading } from '@/components/typography/Heading'
import { Text } from '@/components/typography/Text'
import { Label } from '@/components/typography/Label'
import { LinkButton } from '@/components/ui/LinkButton'
import { FEATURES } from '@/lib/mock/features'

const WebsiteBuilderVisual = dynamic(() =>
  import('@/features/home/components/WebsiteBuilderVisual').then(
    (m) => ({ default: m.WebsiteBuilderVisual })
  )
)

const feature = FEATURES.find((f) => f.category === 'website')!

const EXTENDED_BENEFITS = [
  ...feature.benefits,
  'One-click publishing',
  'SEO tools built in',
  'Analytics integrated',
]

export function FeaturesWebsite() {
  return (
    <Section
      spacing="lg"
      id="website"
      aria-labelledby="features-website-heading"
      className="scroll-mt-20"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Visual — left on desktop */}
          <FadeUp delay={0.1} className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-float)]">
              <WebsiteBuilderVisual />
            </div>
          </FadeUp>

          {/* Content — right on desktop */}
          <FadeUp className="order-1 lg:order-2">
            <div className="flex flex-col gap-6">
              <Label variant="overline">{feature.title}</Label>
              <Heading size="h2" id="features-website-heading">
                Build websites that make an impression
              </Heading>
              <Text size="lg" className="text-muted-foreground">
                {feature.description} Our visual builder gives non-developers the power of a
                professional web agency — without the price tag.
              </Text>

              <ul className="flex flex-col gap-3">
                {EXTENDED_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm text-foreground">
                    <Check className="h-4 w-4 shrink-0 text-brand-success" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <LinkButton href="/signup" variant="primary" withArrow className="w-fit">
                Start building
              </LinkButton>
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  )
}
