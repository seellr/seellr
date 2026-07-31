'use client'

import { PricingCard } from '@/components/ui/PricingCard'
import { Stagger } from '@/components/animations/Stagger'
import type { PricingPlan } from '@/lib/mock/pricing'

interface PricingCardsProps {
  plans: PricingPlan[]
}

export function PricingCards({ plans }: PricingCardsProps) {
  return (
    <Stagger
      speed="normal"
      className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center"
    >
      {plans.map((plan) => (
        <PricingCard key={plan.id} plan={plan} />
      ))}
    </Stagger>
  )
}
