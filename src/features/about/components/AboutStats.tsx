import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Stagger } from '@/components/animations/Stagger'
import { StatCard } from '@/components/ui/StatCard'
import { STATS } from '@/lib/mock/stats'

export function AboutStats() {
  return (
    <Section spacing="md" aria-label="Company statistics">
      <Container>
        <Stagger
          speed="fast"
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {STATS.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
