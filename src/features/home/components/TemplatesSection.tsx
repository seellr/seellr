import dynamic from 'next/dynamic'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { FadeUp } from '@/components/animations/FadeUp'

// Deferred — filter state + stagger animation not needed until scrolled to
const TemplatesGrid = dynamic(() => import('./TemplatesGrid').then(m => ({ default: m.TemplatesGrid })))

export function TemplatesSection() {
  return (
    <Section spacing="lg" aria-labelledby="templates-heading">
      <Container>
        {/* Section header */}
        <FadeUp className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-brand-accent">
            Templates
          </p>
          <h2
            id="templates-heading"
            className="mb-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
          >
            200+ professionally designed templates
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Start with a stunning template and make it yours in minutes — no design skills required.
          </p>
        </FadeUp>

        {/* Filter tabs + grid (client-side) */}
        <TemplatesGrid />

        {/* Browse all link */}
        <FadeUp className="mt-12 text-center">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 transition-opacity hover:opacity-70"
          >
            Browse all 200+ templates
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </FadeUp>
      </Container>
    </Section>
  )
}
