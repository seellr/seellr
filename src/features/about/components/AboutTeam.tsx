import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { Stagger } from '@/components/animations/Stagger'
import { SectionTitle } from '@/components/typography/SectionTitle'
import { BaseCard } from '@/components/ui/BaseCard'
import { TEAM } from '@/lib/mock/about'

export function AboutTeam() {
  return (
    <Section spacing="lg" background="surface" aria-labelledby="about-team-heading">
      <Container>
        <FadeUp className="mb-12">
          <SectionTitle
            eyebrow="Team"
            title="The people behind Seellr"
            description="A small, focused team that ships fast and cares deeply about the product."
          />
        </FadeUp>

        <Stagger
          speed="fast"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {TEAM.map((member) => (
            <BaseCard
              key={member.id}
              className="flex flex-col items-center gap-3 py-7 text-center"
            >
              {/* Avatar placeholder */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${member.color} border border-border`}
                aria-hidden="true"
              >
                <span className="text-sm font-semibold text-foreground">
                  {member.initials}
                </span>
              </div>

              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-foreground leading-snug">
                  {member.name}
                </p>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            </BaseCard>
          ))}
        </Stagger>

        <FadeUp delay={0.3}>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            And{' '}
            <strong className="font-medium text-foreground">30+ more</strong>
            {' '}engineers, designers, and customer success folks spread across the globe.
          </p>
        </FadeUp>
      </Container>
    </Section>
  )
}
