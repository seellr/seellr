import { Container } from '@/components/layout/Container'
import { ProductTourScroll } from './ProductTourScroll'

// Server Component wrapper — tour logic lives in client sub-tree
export function ProductTourSection() {
  return (
    <section
      aria-label="Interactive product tour"
      className="relative w-full bg-background"
    >
      {/* Top label */}
      <Container>
        <div className="pb-16 pt-24 text-center md:pb-20 md:pt-32">
          <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-border bg-brand-surface px-3 py-1.5 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
            Product tour
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Everything you need,
            <br className="hidden sm:block" />
            {' '}in one place
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-base text-muted-foreground sm:text-lg">
            From your first sale to scaling to six figures — Seellr grows with you.
          </p>
        </div>
      </Container>

      <ProductTourScroll />
    </section>
  )
}
