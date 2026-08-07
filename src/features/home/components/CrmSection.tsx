import dynamic from 'next/dynamic'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'

// Deferred — framer-motion visual and content only needed when scrolled to
const CrmVisual   = dynamic(() => import('./CrmVisual').then(m => ({ default: m.CrmVisual })))
const CrmContent  = dynamic(() => import('./CrmContent').then(m => ({ default: m.CrmContent })))

/**
 * CRM section — reversed split layout (visual left, content right)
 * creating alternating rhythm with adjacent Website Builder section.
 */
export function CrmSection() {
  return (
    <Section background="surface" spacing="lg" aria-label="CRM feature">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — visual */}
          <div className="order-2 lg:order-1">
            <CrmVisual />
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2">
            <CrmContent />
          </div>
        </div>
      </Container>
    </Section>
  )
}
