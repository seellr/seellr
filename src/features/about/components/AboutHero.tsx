import { Section }    from '@/components/layout/Section'
import { Container }  from '@/components/layout/Container'

export function AboutHero() {
  return (
    <Section
      spacing="lg"
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Subtle top glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-30"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(87,223,166,0.2), transparent)' }}
      />

      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Eyebrow */}
          <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            About Seellr
          </p>

          {/* Large editorial headline */}
          <h1
            id="about-hero-heading"
            className="text-[2.5rem] font-bold tracking-tight text-foreground sm:text-5xl lg:text-[64px]"
            style={{ lineHeight: 1.06 }}
          >
            We believe running a business online should feel{' '}
            <span className="relative inline-block">
              effortless
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-brand-accent"
              />
            </span>
          </h1>

          {/* Lead paragraph */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-16">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Seellr was built by people who got tired of paying for five tools that never
              quite talked to each other. We set out to build one platform that covers
              everything — and stays out of your way while doing it.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Today, 120,000+ businesses across 40 countries use Seellr to run their entire
              online presence. From a flower shop in Cairo to a consulting firm in Oslo —
              every business deserves the technology stack that was once reserved for
              funded startups.
            </p>
          </div>

          {/* Divider with founder note */}
          <div className="mt-12 border-t border-border pt-8">
            <blockquote className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-foreground text-lg font-bold text-background">
                G
              </div>
              <div>
                <p className="text-base font-medium text-foreground">
                  &ldquo;We didn&apos;t build Seellr to compete with tools. We built it so you never need to think about tools again.&rdquo;
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  — Founder, Seellr
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </Container>
    </Section>
  )
}
