import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { SectionTitle } from '@/components/typography/SectionTitle'
import { TIMELINE } from '@/lib/mock/about'

export function AboutTimeline() {
  return (
    <Section spacing="lg" aria-labelledby="about-timeline-heading">
      <Container>
        <FadeUp className="mb-14">
          <SectionTitle
            eyebrow="Story"
            title="How we got here"
            description="Five years of building, shipping, and listening."
          />
        </FadeUp>

        <div className="mx-auto max-w-2xl">
          <ol className="relative flex flex-col gap-0" aria-label="Company timeline">
            {TIMELINE.map((milestone, index) => (
              <FadeUp key={milestone.id} delay={index * 0.08}>
                <li className="relative flex gap-8 pb-10 last:pb-0">
                  {/* Vertical connector line */}
                  {index < TIMELINE.length - 1 && (
                    <span
                      className="absolute left-[19px] top-10 h-full w-px bg-border"
                      aria-hidden="true"
                    />
                  )}

                  {/* Year badge */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background shadow-[var(--shadow-card)]">
                    <span className="text-[10px] font-bold tracking-wider text-muted-foreground">
                      {milestone.year.slice(2)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1.5 pt-1.5">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {milestone.year}
                    </p>
                    <h3 className="text-base font-semibold text-foreground leading-snug">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  )
}
