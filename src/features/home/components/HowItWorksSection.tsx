import dynamic from 'next/dynamic'

const HowItWorksSteps = dynamic(() =>
  import('./HowItWorksSteps').then((m) => ({ default: m.HowItWorksSteps })),
)

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative w-full bg-background"
    >
      <HowItWorksSteps />
    </section>
  )
}

