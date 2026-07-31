import { Section }   from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { VALUES }    from '@/lib/mock/about'

export function AboutValues() {
  return (
    <Section
      spacing="lg"
      aria-labelledby="about-values-heading"
      className="bg-foreground"
    >
      <Container>
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-background/40">
            Values
          </p>
          <h2
            id="about-values-heading"
            className="text-3xl font-bold text-background sm:text-4xl"
            style={{ lineHeight: 1.12 }}
          >
            What we stand for
          </h2>
          <p className="mt-4 text-base text-background/60">
            Six principles that guide every product decision, every hire, and every customer interaction.
          </p>
        </div>

        {/* Values — editorial list with large numbers */}
        <div className="grid grid-cols-1 gap-0 divide-y divide-background/10 sm:grid-cols-2 sm:divide-y-0">
          {VALUES.map((value, i) => (
            <div
              key={value.id}
              className="group flex gap-5 py-8 sm:border-b sm:border-background/10 sm:pr-8 sm:last:border-0 [&:nth-child(even)]:sm:border-l [&:nth-child(even)]:sm:pl-8 [&:nth-child(even)]:sm:pr-0"
            >
              {/* Number */}
              <span className="shrink-0 text-3xl font-bold tabular-nums text-background/15">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="mb-1.5 text-base font-semibold text-background">
                  {value.title}
                </p>
                <p className="text-sm leading-relaxed text-background/55">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Green accent stripe */}
        <div
          aria-hidden="true"
          className="mt-14 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"
        />
        <p className="mt-6 text-center text-sm text-background/30">
          These are not aspirations. They are operating constraints.
        </p>
      </Container>
    </Section>
  )
}
