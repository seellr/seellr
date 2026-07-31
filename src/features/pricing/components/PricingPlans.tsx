import Link                from 'next/link'
import { ArrowRight, ShieldCheck, Zap, HeartHandshake, RefreshCw } from 'lucide-react'
import { Section }         from '@/components/layout/Section'
import { Container }       from '@/components/layout/Container'
import { PricingCard }     from '@/components/ui/PricingCard'
import { PRICING_PLANS }   from '@/lib/mock/pricing'

// ── Guarantee strip ───────────────────────────────────────────────────────────

const GUARANTEES = [
  { Icon: ShieldCheck,    label: '14-day money-back guarantee',    sub: 'Full refund, no questions asked.' },
  { Icon: RefreshCw,      label: 'Free data migration',            sub: 'We migrate your existing content.' },
  { Icon: Zap,            label: 'Up and running in minutes',      sub: 'No engineers required.' },
  { Icon: HeartHandshake, label: 'Dedicated onboarding support',   sub: 'Business plan includes a call.' },
]

function GuaranteeStrip() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {GUARANTEES.map(({ Icon, label, sub }) => (
        <div key={label} className="flex gap-3 rounded-2xl border border-border bg-background p-5">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-surface">
            <Icon className="h-4 w-4 text-foreground" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{label}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Enterprise banner ─────────────────────────────────────────────────────────

function EnterpriseBanner() {
  return (
    <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-foreground px-8 py-6 sm:flex-row">
      <div>
        <p className="text-sm font-semibold text-background">Enterprise</p>
        <p className="mt-0.5 text-sm text-background/60">
          Custom seats, SLA, SSO, dedicated support, and audit logs. Built for teams of 20+.
        </p>
      </div>
      <Link
        href="/contact"
        className="group flex shrink-0 items-center gap-2 rounded-md border border-background/20 bg-background/10 px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-background/20"
      >
        Talk to sales
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </div>
  )
}

// ── PricingPlans ──────────────────────────────────────────────────────────────

export function PricingPlans() {
  return (
    <Section spacing="sm" aria-label="Pricing plans" className="pt-10">
      <Container>
        {/* Plan grid — featured card visually elevated */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch">
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              href={`/signup?plan=${plan.id}`}
              className={plan.featured ? 'md:-mt-4 md:mb-4 md:scale-[1.03]' : ''}
            />
          ))}
        </div>

        <EnterpriseBanner />
        <GuaranteeStrip />
      </Container>
    </Section>
  )
}
