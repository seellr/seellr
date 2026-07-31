import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { Marquee } from '@/components/ui/Marquee'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { TESTIMONIALS } from '@/lib/mock/testimonials'

// Extra reviews for more carousel density
const EXTENDED = [
  ...TESTIMONIALS,
  {
    id: 't-6',
    name: 'Tom Adeyemi',
    role: 'Studio Owner',
    company: 'Nova Creative',
    avatar: '/avatars/tom-adeyemi.jpg',
    rating: 5 as const,
    content:
      'Switched from WordPress + WooCommerce. Setup took an afternoon. The speed alone justified the switch.',
  },
  {
    id: 't-7',
    name: 'Ava Müller',
    role: 'Marketing Lead',
    company: 'Helix Brands',
    avatar: '/avatars/ava-muller.jpg',
    rating: 5 as const,
    content:
      'Our CRM data feeding directly into our analytics is a game changer. No more exporting CSV files between tools.',
  },
  {
    id: 't-8',
    name: 'Carlos Rivera',
    role: 'Co-founder',
    company: 'Solana Wellness',
    avatar: '/avatars/carlos-rivera.jpg',
    rating: 5 as const,
    content:
      'We had 40 booking no-shows a month. Now we have fewer than five. The reminder system is flawless.',
  },
]

// Split into two rows for two-row marquee effect
const ROW_A = EXTENDED.slice(0, Math.ceil(EXTENDED.length / 2))
const ROW_B = EXTENDED.slice(Math.ceil(EXTENDED.length / 2))

const cardsA = ROW_A.map((t) => (
  <TestimonialCard key={t.id} testimonial={t} variant="compact" className="w-[320px] shrink-0" />
))

const cardsB = ROW_B.map((t) => (
  <TestimonialCard key={t.id} testimonial={t} variant="compact" className="w-[320px] shrink-0" />
))

export function TestimonialsSection() {
  return (
    <Section
      spacing="lg"
      background="surface"
      aria-labelledby="testimonials-heading"
      className="overflow-hidden"
    >
      <Container>
        <FadeUp className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-brand-accent">
            Customer love
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Trusted by 120,000+ businesses
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-base text-muted-foreground">
            From freelancers to growing teams — Seellr works for businesses at every stage.
          </p>
        </FadeUp>
      </Container>

      {/* Two-row marquee — full-bleed, no container */}
      <div className="relative">
        {/* Edge fades */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-surface to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-surface to-transparent"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-4">
          <Marquee items={cardsA} speed={48} pauseOnHover direction="left" className="py-1" />
          <Marquee items={cardsB} speed={56} pauseOnHover direction="right" className="py-1" />
        </div>
      </div>
    </Section>
  )
}
