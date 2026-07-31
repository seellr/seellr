import dynamic from 'next/dynamic'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { BackgroundGlow } from '@/components/layout/BackgroundGlow'
import { FadeUp } from '@/components/animations/FadeUp'

// Deferred — heaviest client component on the page; defer until scrolled to
const DashboardPreviewVisual = dynamic(() => import('./DashboardPreviewVisual').then(m => ({ default: m.DashboardPreviewVisual })))

export function DashboardPreviewSection() {
  return (
    <Section
      spacing="xl"
      className="overflow-hidden bg-foreground text-background"
      aria-labelledby="dashboard-preview-heading"
    >
      {/* Decorative glow — softened on dark bg */}
      <BackgroundGlow
        variant="green"
        size="xl"
        position="center"
        className="opacity-20"
      />

      <Container size="wide" className="relative z-10 flex flex-col items-center gap-12">
        {/* Header copy */}
        <FadeUp className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-background/50">
            The Platform
          </p>
          <h2
            id="dashboard-preview-heading"
            className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-background sm:text-4xl md:text-5xl"
          >
            Your entire business.{' '}
            <span className="text-background/70">One dashboard.</span>
          </h2>
          <p className="max-w-xl text-base text-background/60 md:text-lg">
            Revenue, orders, visitors, and customer insights — unified in a single,
            beautiful interface.
          </p>
        </FadeUp>

        {/* Main visual — client component for motion */}
        <DashboardPreviewVisual />
      </Container>
    </Section>
  )
}
