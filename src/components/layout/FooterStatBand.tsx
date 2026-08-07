'use client'

import { Counter }   from '@/components/animations/Counter'
import { Container } from './Container'
import type { Stat } from '@/lib/mock/stats'

interface FooterStatBandProps {
  stats: Stat[]
}

const decimalFormat = (v: number) => v.toFixed(1)

export function FooterStatBand({ stats }: FooterStatBandProps) {
  return (
    <div className="border-b border-border">
      <Container>
        <div className="grid grid-cols-3 divide-x divide-border">
          {stats.map((stat) => {
            const useDecimal = stat.suffix === '★' || stat.id === 'stat-2'
            return (
              <div
                key={stat.id}
                className="flex flex-col items-center gap-1 py-8 text-center"
              >
                <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  <Counter
                    to={parseFloat(stat.value)}
                    suffix={stat.suffix}
                    format={useDecimal ? decimalFormat : undefined}
                  />
                </span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
