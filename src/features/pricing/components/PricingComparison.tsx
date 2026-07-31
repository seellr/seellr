import { Fragment } from 'react'
import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { SectionTitle } from '@/components/typography/SectionTitle'
import { COMPARISON_CATEGORIES, PRICING_PLANS, type ComparisonValue } from '@/lib/mock/pricing'

function ComparisonCell({ value }: { value: ComparisonValue }) {
  if (value === true) {
    return (
      <td className="py-3.5 text-center">
        <Check className="mx-auto h-4 w-4 text-brand-success" aria-label="Included" />
      </td>
    )
  }
  if (value === false) {
    return (
      <td className="py-3.5 text-center">
        <Minus className="mx-auto h-4 w-4 text-muted-foreground/30" aria-label="Not included" />
      </td>
    )
  }
  return (
    <td className="py-3.5 text-center text-sm text-foreground">{value}</td>
  )
}

export function PricingComparison() {
  return (
    <Section spacing="lg" background="surface" aria-labelledby="comparison-heading">
      <Container>
        <FadeUp className="mb-12">
          <SectionTitle
            eyebrow="Compare plans"
            title="Everything, side by side"
            description="Every feature across all plans — so you can pick with confidence."
          />
        </FadeUp>

        {/* Horizontal scroll wrapper for mobile */}
        <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-[var(--shadow-card)]">
          <table className="w-full min-w-[600px] border-collapse">
            {/* Column header */}
            <thead>
              <tr className="border-b border-border">
                <th className="w-[40%] py-5 pl-8 pr-4 text-left text-sm font-medium text-muted-foreground">
                  Feature
                </th>
                {PRICING_PLANS.map((plan) => (
                  <th
                    key={plan.id}
                    className={cn(
                      'w-[20%] py-5 text-center text-sm font-semibold',
                      plan.featured ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {plan.featured && (
                      <span className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-brand-accent">
                        Popular
                      </span>
                    )}
                    {plan.name}
                    <span className="ml-1.5 text-xs font-normal text-muted-foreground">
                      ${plan.price}/mo
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {COMPARISON_CATEGORIES.map((category, catIdx) => (
                <Fragment key={`cat-${catIdx}`}>
                  {/* Category row */}
                  <tr className="border-t border-border/60 bg-brand-surface/50">
                    <td
                      colSpan={4}
                      className="py-2.5 pl-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                    >
                      {category.title}
                    </td>
                  </tr>

                  {/* Feature rows */}
                  {category.rows.map((row, rowIdx) => (
                    <tr
                      key={`row-${catIdx}-${rowIdx}`}
                      className={cn(
                        'border-t border-border/40',
                        rowIdx % 2 === 0 ? '' : 'bg-brand-surface/20'
                      )}
                    >
                      <td className="py-3.5 pl-8 pr-4 text-sm text-foreground/80">
                        {row.feature}
                      </td>
                      <ComparisonCell value={row.starter} />
                      <ComparisonCell value={row.growth} />
                      <ComparisonCell value={row.business} />
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  )
}
