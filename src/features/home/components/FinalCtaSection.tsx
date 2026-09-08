import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'

export function FinalCtaSection() {
  return (
    <Section
      spacing="lg"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-foreground text-background"
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,255,44,0.5), transparent)',
        }}
      />

      {/* Dot grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-background/40">
            Ready to grow?
          </p>

          <h2
            id="final-cta-heading"
            className="text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-[56px]"
            style={{ lineHeight: 1.1 }}
          >
            Start building your business today.
          </h2>

          <p className="max-w-[440px] text-base leading-relaxed text-background/60">
            Join 120,000+ businesses that run their website, store, CRM, bookings, and analytics
            from one platform.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="group flex items-center gap-2 rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-px hover:bg-brand-accent-hover hover:shadow-[0_8px_30px_rgba(200,255,44,0.35)]"
            >
              Start free — no credit card
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-md border border-background/20 px-6 py-3 text-sm font-medium text-background/80 transition-all hover:border-background/40 hover:text-background"
            >
              Talk to sales
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-background/35">
            <span>14-day free trial</span>
            <span aria-hidden="true">·</span>
            <span>No credit card required</span>
            <span aria-hidden="true">·</span>
            <span>Free migration</span>
            <span aria-hidden="true">·</span>
            <span>Cancel any time</span>
          </div>
        </div>
      </Container>
    </Section>
  )
}
