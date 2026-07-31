import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { Heading } from '@/components/typography/Heading'
import { Text } from '@/components/typography/Text'
import { Label } from '@/components/typography/Label'

export function AboutMission() {
  return (
    <Section spacing="lg" background="surface" aria-label="Mission and vision">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Mission — large editorial quote */}
          <FadeUp>
            <div className="flex flex-col gap-5">
              <Label variant="overline">Mission</Label>
              <Heading size="h2" className="text-foreground">
                Give every business the technology stack that used to be reserved for funded startups
              </Heading>
            </div>
          </FadeUp>

          {/* Vision */}
          <FadeUp delay={0.1}>
            <div className="flex flex-col gap-5 lg:pt-12">
              <Label variant="overline">Vision</Label>
              <Text size="lg" className="text-muted-foreground leading-relaxed">
                A world where a sole trader in Cairo, a boutique in São Paulo, and a
                consulting firm in Oslo all have equal access to the tools that let them
                compete — and win — online.
              </Text>
              <Text className="text-muted-foreground leading-relaxed">
                We measure our success not in valuations, but in how many businesses we
                helped survive their first year, hit their first $10k month, and keep a
                customer they would otherwise have lost.
              </Text>
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  )
}
