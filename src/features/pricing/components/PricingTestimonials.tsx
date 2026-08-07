import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { Stagger } from '@/components/animations/Stagger'
import { SectionTitle } from '@/components/typography/SectionTitle'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { TESTIMONIALS } from '@/lib/mock/testimonials'

// Show 3 testimonials that speak to value/pricing
const DISPLAY_IDS = ['t-1', 't-3', 't-5']
const testimonials = TESTIMONIALS.filter((t) => DISPLAY_IDS.includes(t.id))

export function PricingTestimonials() {
  return (
    <Section spacing="lg" aria-labelledby="pricing-testimonials-heading">
      <Container>
        <FadeUp className="mb-12">
          <SectionTitle
            eyebrow="Loved by thousands"
            title="Real businesses, real results"
            description="Join 120,000+ teams who replaced multiple tools with Seellr."
          />
        </FadeUp>

        <Stagger speed="normal" className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
