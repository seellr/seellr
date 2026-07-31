import dynamic from 'next/dynamic'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { Heading } from '@/components/typography/Heading'
import { Text } from '@/components/typography/Text'
import { Label } from '@/components/typography/Label'
import { LinkButton } from '@/components/ui/LinkButton'
import { FEATURES } from '@/lib/mock/features'

const CrmVisual = dynamic(() =>
  import('@/features/home/components/CrmVisual').then((m) => ({ default: m.CrmVisual }))
)

const crm = FEATURES.find((f) => f.category === 'crm')!
const booking = FEATURES.find((f) => f.category === 'bookings')!

export function FeaturesCrm() {
  return (
    <Section
      spacing="lg"
      id="crm"
      aria-labelledby="features-crm-heading"
      className="scroll-mt-20"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Visual — left */}
          <FadeUp delay={0.1} className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-float)]">
              <CrmVisual />
            </div>
          </FadeUp>

          {/* Content — right: CRM + Bookings combined */}
          <FadeUp className="order-1 lg:order-2">
            <div className="flex flex-col gap-10">
              {/* CRM */}
              <div className="flex flex-col gap-4">
                <Label variant="overline">{crm.title}</Label>
                <Heading size="h2" id="features-crm-heading">
                  Know every customer
                </Heading>
                <Text size="lg" className="text-muted-foreground">
                  {crm.description}
                </Text>
                <ul className="flex flex-col gap-2">
                  {crm.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <hr className="border-border" />

              {/* Bookings */}
              <div id="bookings" className="scroll-mt-20 flex flex-col gap-4">
                <Label variant="overline">{booking.title}</Label>
                <Heading size="h3">
                  Bookings that run themselves
                </Heading>
                <Text className="text-muted-foreground">
                  {booking.description}
                </Text>
                <ul className="flex flex-col gap-2">
                  {booking.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <LinkButton href="/signup" variant="primary" withArrow className="w-fit">
                Try free for 14 days
              </LinkButton>
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  )
}
