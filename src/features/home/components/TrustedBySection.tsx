import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Marquee } from '@/components/ui/Marquee'
import { LOGO_NAMES } from '@/lib/mock/logos'

/**
 * Text-based logo placeholder — rendered as company name in a clean,
 * muted weight. Hover reveals full foreground color.
 */
function LogoPlaceholder({ name }: { name: string }) {
  return (
    <span
      className="
        font-semibold text-sm tracking-wide
        text-foreground
        transition-colors duration-200
        hover:text-brand-primary/80
        select-none
        cursor-default
        whitespace-nowrap
      "
    >
      {name}
    </span>
  )
}

/**
 * TrustedBySection — compact connector section between Hero and Features.
 * Shows an infinite scrolling marquee of text-based company logo placeholders.
 * Server Component: no interactivity here; Marquee handles its own client boundary.
 */
export function TrustedBySection() {
  const logoNodes = LOGO_NAMES.map((name) => (
    <LogoPlaceholder key={name} name={name} />
  ))

  return (
    <div className="relative py-10 border-t border-border">
      <Container>
        {/* Left edge fade */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24
            bg-gradient-to-r from-background to-transparent"
          aria-hidden="true"
        />

        {/* Right edge fade */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24
            bg-gradient-to-l from-background to-transparent"
          aria-hidden="true"
        />

        <Marquee items={logoNodes} speed={40} pauseOnHover className="py-2" />
      </Container>
    </div>
  )
}
