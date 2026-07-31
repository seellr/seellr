import dynamic from 'next/dynamic'
import { TrendingUp, Users, ShoppingBag } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { Stagger } from '@/components/animations/Stagger'

const AnalyticsVisual = dynamic(() => import('./AnalyticsVisual').then(m => ({ default: m.AnalyticsVisual })))

const HIGHLIGHTS = [
  { icon: TrendingUp, value: '+34%',    label: 'Avg. revenue lift within 60 days' },
  { icon: Users,      value: '8,920',   label: 'Real-time visitors, zero lag'      },
  { icon: ShoppingBag,value: '3.4%',    label: 'Avg. ecommerce conversion rate'    },
] as const

export function AnalyticsSection() {
  return (
    <Section spacing="lg" background="white" aria-labelledby="analytics-heading">
      <Container>
        {/* Centered heading */}
        <div className="mx-auto mb-12 max-w-[600px] text-center">
          <FadeUp>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-brand-accent">
              Analytics
            </span>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h2
              id="analytics-heading"
              className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-[2.5rem] lg:text-5xl"
            >
              Understand your business with real-time data
            </h2>
          </FadeUp>

          <FadeUp delay={0.16}>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Every metric that matters, surfaced at a glance. Track visitors,
              conversions, and revenue without switching between tools.
            </p>
          </FadeUp>
        </div>

        {/* Stat highlights */}
        <Stagger speed="fast" className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {HIGHLIGHTS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl border border-border bg-brand-surface p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10">
                <Icon className="h-4 w-4 text-brand-success" aria-hidden="true" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            </div>
          ))}
        </Stagger>

        {/* Dashboard visual */}
        <FadeUp delay={0.1}>
          <AnalyticsVisual />
        </FadeUp>
      </Container>
    </Section>
  )
}
