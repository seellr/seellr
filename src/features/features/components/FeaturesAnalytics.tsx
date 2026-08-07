import dynamic from 'next/dynamic'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { Stagger } from '@/components/animations/Stagger'
import { Heading } from '@/components/typography/Heading'
import { Text } from '@/components/typography/Text'
import { Label } from '@/components/typography/Label'
import { LinkButton } from '@/components/ui/LinkButton'
import { FEATURES } from '@/lib/mock/features'

const AnalyticsVisual = dynamic(() =>
  import('@/features/home/components/AnalyticsVisual').then((m) => ({ default: m.AnalyticsVisual }))
)

const feature = FEATURES.find((f) => f.category === 'analytics')!

const HIGHLIGHTS = [
  { value: 'Real-time', label: 'Live visitor data, no delay' },
  { value: 'No-code',   label: 'Zero configuration needed' },
  { value: 'Private',   label: 'GDPR-compliant, cookieless option' },
]

export function FeaturesAnalytics() {
  return (
    <Section
      spacing="lg"
      background="surface"
      id="analytics"
      aria-labelledby="features-analytics-heading"
      className="scroll-mt-20"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <FadeUp className="flex flex-col gap-6">
            <Label variant="overline">{feature.title}</Label>
            <Heading size="h2" id="features-analytics-heading">
              Data that tells the whole story
            </Heading>
            <Text size="lg" className="text-muted-foreground">
              {feature.description} Stop switching between five tabs to understand your business.
            </Text>

            <Stagger speed="fast" className="flex flex-col gap-4">
              {HIGHLIGHTS.map(({ value, label }) => (
                <div key={label} className="flex items-start gap-4 rounded-xl border border-border bg-background p-4">
                  <p className="text-sm font-semibold text-brand-accent">{value}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </Stagger>

            <LinkButton href="/signup" variant="outline" withArrow className="w-fit">
              Explore analytics
            </LinkButton>
          </FadeUp>

          {/* Visual */}
          <FadeUp delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-float)]">
              <AnalyticsVisual />
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  )
}
