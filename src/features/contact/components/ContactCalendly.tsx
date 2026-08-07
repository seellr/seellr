import { Calendar, Clock, Video } from 'lucide-react'
import { Section }    from '@/components/layout/Section'
import { Container }  from '@/components/layout/Container'

const MEETING_TYPES = [
  {
    Icon:     Video,
    duration: '30 min',
    title:    'Product Demo',
    desc:     'See Seellr in action — website builder, store, CRM, and analytics in one walkthrough.',
    badge:    'Popular',
  },
  {
    Icon:     Calendar,
    duration: '45 min',
    title:    'Sales Consultation',
    desc:     'Discuss your specific needs, pricing, and which plan fits your team best.',
    badge:    null,
  },
  {
    Icon:     Clock,
    duration: '15 min',
    title:    'Quick Q&A',
    desc:     'Already know what you need? A short call to answer any last questions.',
    badge:    null,
  },
]

export function ContactCalendly() {
  return (
    <Section
      spacing="md"
      id="calendly"
      aria-labelledby="calendly-heading"
      className="scroll-mt-20 bg-brand-surface"
    >
      <Container>
        <div className="mb-8 flex flex-col items-center gap-2 text-center">
          <h2 id="calendly-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Book a call with our team
          </h2>
          <p className="text-sm text-muted-foreground">
            Choose the format that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {MEETING_TYPES.map(({ Icon, duration, title, desc, badge }) => (
            <button
              key={title}
              type="button"
              className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 text-left transition-all hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-[var(--shadow-float)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              aria-label={`Book ${title} — ${duration}`}
            >
              {badge && (
                <span className="absolute right-4 top-4 rounded-full bg-brand-accent/15 px-2 py-0.5 text-[10px] font-semibold text-brand-success">
                  {badge}
                </span>
              )}

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-surface">
                <Icon className="h-4 w-4 text-foreground" aria-hidden="true" />
              </div>

              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">{title}</span>
                  <span className="text-xs text-muted-foreground">· {duration}</span>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">{desc}</p>
              </div>

              <div className="mt-auto rounded-md border border-border bg-background px-4 py-2 text-center text-sm font-medium text-foreground transition-all group-hover:bg-foreground group-hover:text-background">
                Schedule
              </div>
            </button>
          ))}
        </div>

        {/* Calendly embed placeholder */}
        <div className="mt-6 flex h-[320px] items-center justify-center rounded-2xl border border-dashed border-border bg-background">
          <div className="text-center">
            <Calendar className="mx-auto mb-3 h-8 w-8 text-muted-foreground/40" aria-hidden="true" />
            <p className="text-sm font-medium text-muted-foreground">Calendly embed goes here</p>
            <p className="mt-1 text-xs text-muted-foreground/60">Replace with real Calendly widget</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
