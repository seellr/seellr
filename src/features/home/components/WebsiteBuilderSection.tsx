import dynamic from 'next/dynamic'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { BackgroundGlow } from '@/components/layout/BackgroundGlow'

// Deferred — below hero fold; framer-motion trees only needed when scrolled to
const WebsiteBuilderContent = dynamic(() => import('./WebsiteBuilderContent').then(m => ({ default: m.WebsiteBuilderContent })))
const WebsiteBuilderVisual  = dynamic(() => import('./WebsiteBuilderVisual').then(m => ({ default: m.WebsiteBuilderVisual })))

export function WebsiteBuilderSection() {
  return (
    <Section spacing="lg" background="white" className="overflow-hidden" aria-label="Website Builder feature">
      {/* Decorative glow — right side */}
      <BackgroundGlow variant="green" size="md" position="center-right" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* LEFT — content */}
          <WebsiteBuilderContent />

          {/* RIGHT — visual */}
          <WebsiteBuilderVisual />
        </div>
      </Container>
    </Section>
  )
}
