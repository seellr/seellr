import dynamic from 'next/dynamic'
import { HeroContent } from './HeroContent'
import { Container } from '@/components/layout'
import { TrustedBySection } from './TrustedBySection'

const HeroVisual = dynamic(() =>
  import('./HeroVisual').then((m) => ({ default: m.HeroVisual })),
)

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="lg:flex lg:flex-col mt-20 lg:border-t lg:border-border"
    >
      <Container className='min-h-[70dvh]' size="wide">
        <div className="flex flex-1 flex-col lg:grid lg:grid-cols-12 min-h-[70dvh]">

          <div className="flex flex-col justify-end lg:pt-8 border-b border-border px-8 pb-10 pt-24 lg:col-span-6 lg:border-b-0  lg:pb-16 lg:pt-0 xl:px-14">
            <HeroContent />
          </div>

          <div className="hidden h-[420px] lg:col-span-6 lg:block lg:h-auto lg:border-l lg:pt-10 lg:pl-8">
            <HeroVisual />
          </div>

        </div>
      </Container>
    </section>
  )
}
