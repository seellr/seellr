import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LinkButton } from '@/components/ui/LinkButton'

const AVATAR_COLORS = [
  'bg-violet-400',
  'bg-sky-400',
  'bg-emerald-400',
  'bg-amber-400',
  'bg-rose-400',
]

function AvatarStack() {
  return (
    <div className="flex -space-x-2" aria-hidden="true">
      {AVATAR_COLORS.map((color, i) => (
        <span
          key={i}
          className={cn('block h-6 w-6 rounded-full border-2 border-background', color)}
        />
      ))}
    </div>
  )
}

export function HeroContent() {
  return (
    <div className="flex flex-col gap-6">
      {/* Eyebrow */}
      <div className="hero-item hero-delay-1">
        <Link
          href="/changelog"
          className={cn(
            'inline-flex items-center gap-2 text-sm text-white/80',
            'transition-colors duration-150 hover:text-white',
            'focus-visible:outline-none focus-visible:underline',
          )}
        >
          <span>Early access: analytics dashboard</span>
          <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        </Link>
      </div>

      {/* Headline */}
      <h1
        id="hero-heading"
        className={cn(
          'hero-item hero-delay-2',
          'text-balance text-[2.6rem] font-bold leading-[1.06] tracking-[-0.03em] text-white',
          'sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]',
        )}
      >
        Build. Sell. Grow.
      </h1>

      {/* Description */}
      <p
        className={cn(
          'hero-item hero-delay-3',
          'max-w-sm text-base leading-relaxed text-white',
        )}
      >
        Seellr replaces your website builder, online store, booking system, CRM,
        and analytics — so you can focus on growing.
      </p>

      {/* CTAs */}
      <div
        className={cn(
          'hero-item hero-delay-4',
          'flex flex-wrap items-center gap-3',
        )}
      >
        <LinkButton href="/signup" variant="primary" size="lg">
          Start building for free
        </LinkButton>

        <LinkButton
          href="/#how-it-works"
          variant="secondary"
          size="lg"
          leftIcon={<Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />}
        >
          Watch demo
        </LinkButton>
      </div>

      {/* Social proof */}
      <div
        className={cn(
          'hero-item hero-delay-5',
          'flex items-center gap-3 text-sm text-white',
        )}
      >
        <AvatarStack />
        <p>
          Trusted by{' '}
          <strong className="font-semibold text-white">120,000+</strong>{' '}
          businesses worldwide
        </p>
      </div>
    </div>
  )
}
