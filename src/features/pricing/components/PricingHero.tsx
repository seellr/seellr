import { Section }         from '@/components/layout/Section'
import { Container }       from '@/components/layout/Container'
import { BackgroundGlow }  from '@/components/layout/BackgroundGlow'

export function PricingHero() {
  return (
    <Section
      spacing="lg"
      aria-labelledby="pricing-hero-heading"
      className="relative overflow-hidden pb-0"
    >
      <BackgroundGlow variant="green" size="xl" position="top-center" />

      <Container>
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-success" aria-hidden="true" />
            No contracts. Cancel anytime.
          </div>

          <h1
            id="pricing-hero-heading"
            className="max-w-[600px] text-[2.5rem] font-bold tracking-tight text-foreground sm:text-5xl lg:text-[56px]"
            style={{ lineHeight: 1.08 }}
          >
            Pricing that scales with your business
          </h1>

          <p className="max-w-[480px] text-base leading-relaxed text-muted-foreground sm:text-lg">
            Start free. Grow at your own pace. Every plan includes a 14-day trial — no credit card required.
          </p>

          {/* Trust metrics strip */}
          <div className="mt-2 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              '14-day free trial',
              'No credit card required',
              'Cancel anytime',
              'Free data migration',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity=".3" />
                  <path d="M4.5 7L6.5 9L9.5 5.5" stroke="#c8ff2c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
