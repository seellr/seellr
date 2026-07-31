import dynamic from 'next/dynamic'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { STATS } from '@/lib/mock/stats'

// Deferred — Counter uses framer-motion animate(); split from initial chunk
const StatItem = dynamic(() => import('./StatItem').then(m => ({ default: m.StatItem })))

export function StatsSection() {
  return (
    <Section
      spacing="sm"
      background="surface"
      aria-label="Seellr statistics"
      className="border-y border-brand-border"
    >
      <Container>
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
          {STATS.map((stat, index) => (
            <div key={stat.id} className="relative">
              {/* Vertical divider between columns — hidden on mobile */}
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 hidden w-px bg-brand-border md:block"
                />
              )}
              <StatItem
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
