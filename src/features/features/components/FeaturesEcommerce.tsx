import { ShoppingBag, Zap, Shield, TrendingUp } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { Stagger } from '@/components/animations/Stagger'
import { Heading } from '@/components/typography/Heading'
import { Text } from '@/components/typography/Text'
import { Label } from '@/components/typography/Label'
import { LinkButton } from '@/components/ui/LinkButton'
import { BaseCard } from '@/components/ui/BaseCard'
import { FEATURES } from '@/lib/mock/features'

const feature = FEATURES.find((f) => f.category === 'ecommerce')!

const STATS = [
  { icon: ShoppingBag, label: 'Products supported', value: 'Unlimited' },
  { icon: Zap,         label: 'Checkout speed',     value: '< 1.2s' },
  { icon: Shield,      label: 'Payment security',   value: 'PCI DSS' },
  { icon: TrendingUp,  label: 'Avg. revenue lift',  value: '+34%' },
]

export function FeaturesEcommerce() {
  return (
    <Section
      spacing="lg"
      background="surface"
      id="ecommerce"
      aria-labelledby="features-ecommerce-heading"
      className="scroll-mt-20"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content — left on desktop */}
          <FadeUp>
            <div className="flex flex-col gap-6">
              <Label variant="overline">{feature.title}</Label>
              <Heading size="h2" id="features-ecommerce-heading">
                Sell more with less friction
              </Heading>
              <Text size="lg" className="text-muted-foreground">
                {feature.description} Every conversion touchpoint — cart, checkout, confirmation —
                is optimized out of the box.
              </Text>
              <LinkButton href="/signup" variant="outline" withArrow className="w-fit">
                Open your store
              </LinkButton>
            </div>
          </FadeUp>

          {/* Stat grid — right */}
          <Stagger
            speed="fast"
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map(({ icon: Icon, label, value }) => (
              <BaseCard key={label} className="flex flex-col gap-3 p-6">
                <Icon className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                <p className="text-2xl font-bold tracking-tight text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </BaseCard>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  )
}
