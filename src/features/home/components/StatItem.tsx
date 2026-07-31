'use client'

import { Counter } from '@/components/animations/Counter'
import { FadeUp } from '@/components/animations/FadeUp'

interface StatItemProps {
  value: string
  label: string
  suffix?: string
  delay?: number
}

export function StatItem({ value, label, suffix, delay = 0 }: StatItemProps) {
  return (
    <FadeUp delay={delay} className="flex flex-col items-center gap-2 text-center">
      <span className="text-4xl font-bold tracking-tight text-brand-text-primary tabular-nums sm:text-5xl">
        <Counter to={parseFloat(value)} suffix={suffix} duration={2} />
      </span>
      <span className="text-sm font-medium text-brand-text-secondary">{label}</span>
    </FadeUp>
  )
}
