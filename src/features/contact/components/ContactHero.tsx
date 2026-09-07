import Link from 'next/link'
import { MessageSquare, Phone, BookOpen } from 'lucide-react'
import { Section }    from '@/components/layout/Section'
import { Container }  from '@/components/layout/Container'

const CONTACT_OPTIONS = [
  {
    Icon:   MessageSquare,
    title:  'Talk to sales',
    desc:   'Explore plans, get a demo, or discuss enterprise options.',
    cta:    'Schedule a call',
    href:   '#calendly',
    accent: 'bg-foreground text-background',
  },
  {
    Icon:   Phone,
    title:  'Customer support',
    desc:   'Already a customer? We reply within 4 business hours.',
    cta:    'Send a message',
    href:   '#contact-form',
    accent: 'bg-background text-foreground border border-border',
  },
  {
    Icon:   BookOpen,
    title:  'Read the docs',
    desc:   'Self-serve guides, API reference, and video tutorials.',
    cta:    'Browse docs',
    href:   '/docs',
    accent: 'bg-background text-foreground border border-border',
  },
] as const

export function ContactHero() {
  return (
    <Section
      spacing="lg"
      aria-labelledby="contact-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Subtle glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-30"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200,255,44,0.2), transparent)' }}
      />

      <Container>
        <div className="flex flex-col items-center gap-10 text-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-success" aria-hidden="true" />
              Average response time: 4 hours
            </div>
            <h1
              id="contact-hero-heading"
              className="text-[2.5rem] font-bold tracking-tight text-foreground sm:text-5xl"
              style={{ lineHeight: 1.1 }}
            >
              We&apos;d love to hear from you
            </h1>
            <p className="mx-auto mt-4 max-w-[440px] text-base leading-relaxed text-muted-foreground">
              Whether you&apos;re evaluating Seellr, need help, or just have a question — we&apos;re here.
            </p>
          </div>

          {/* 3-option CTA cards */}
          <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {CONTACT_OPTIONS.map(({ Icon, title, desc, cta, href, accent }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 text-left transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-surface">
                  <Icon className="h-4 w-4 text-foreground" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                </div>
                <span className={`mt-auto inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all ${accent}`}>
                  {cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
