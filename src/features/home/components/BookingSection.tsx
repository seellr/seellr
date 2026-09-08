import dynamic from 'next/dynamic'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { BackgroundGlow } from '@/components/layout/BackgroundGlow'

// Deferred — framer-motion visuals and content only needed when scrolled to
const BookingVisual  = dynamic(() => import('./BookingVisual').then(m => ({ default: m.BookingVisual })))
const BookingContent = dynamic(() => import('./BookingContent').then(m => ({ default: m.BookingContent })))

export function BookingSection() {
  return (
    <Section background="surface" className="overflow-hidden" aria-label="Booking System">
      <BackgroundGlow variant="blue" size="lg" position="center-left" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual — left */}
          <BookingVisual />

          {/* Content — right */}
          <BookingContent />
        </div>
      </Container>
    </Section>
  )
}
