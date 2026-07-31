import { TrendingUp, Clock, Star, ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'

// ── Mock data ─────────────────────────────────────────────────────────────────

interface SuccessStory {
  company:      string
  industry:     string
  initials:     string
  avatarColor:  string
  quote:        string
  author:       string
  role:         string
  metrics:      Array<{ icon: React.FC<React.SVGProps<SVGSVGElement>>; value: string; label: string; color: string }>
  features:     string[]
  beforeAfter:  { before: string; after: string }
}

const STORIES: SuccessStory[] = [
  {
    company:     'Bloom Florals',
    industry:    'Retail · Ecommerce',
    initials:    'BF',
    avatarColor: 'bg-rose-100 text-rose-700',
    quote:       "We went from managing three separate tools to running everything from one screen. Our revenue doubled in the first quarter.",
    author:      'Sarah Chen',
    role:        'Founder & CEO',
    metrics: [
      { icon: TrendingUp, value: '+240%',   label: 'Online sales',     color: 'text-brand-success' },
      { icon: Clock,      value: '42 hrs',  label: 'Saved per month',  color: 'text-brand-blue'    },
      { icon: Star,       value: '4.9 ★',   label: 'Customer rating',  color: 'text-amber-500'     },
    ],
    features:    ['Ecommerce', 'CRM', 'Analytics'],
    beforeAfter: { before: '$18k / mo', after: '$61k / mo' },
  },
  {
    company:     'Axiom Fitness',
    industry:    'Health & Wellness',
    initials:    'AF',
    avatarColor: 'bg-sky-100 text-sky-700',
    quote:       "Booking no-shows dropped by 68%. Clients now pay upfront and get automatic reminders — game changer for a studio like ours.",
    author:      'Marcus Reid',
    role:        'Studio Director',
    metrics: [
      { icon: TrendingUp, value: '3×',     label: 'Faster bookings',      color: 'text-brand-success' },
      { icon: Clock,      value: '-68%',   label: 'No-show rate',         color: 'text-brand-blue'    },
      { icon: Star,       value: '+29%',   label: 'Revenue per session',  color: 'text-amber-500'     },
    ],
    features:    ['Bookings', 'Website', 'CRM'],
    beforeAfter: { before: '12 no-shows/wk', after: '4 no-shows/wk' },
  },
  {
    company:     'Fable Studio',
    industry:    'Creative Services',
    initials:    'FS',
    avatarColor: 'bg-violet-100 text-violet-700',
    quote:       "Our conversion rate jumped 67% after switching. Seellr's checkout is faster and the CRM keeps our whole client pipeline visible.",
    author:      'Priya Nair',
    role:        'Creative Director',
    metrics: [
      { icon: TrendingUp, value: '+67%',    label: 'Conversion rate',  color: 'text-brand-success' },
      { icon: Clock,      value: '2.1×',    label: 'Lead close speed', color: 'text-brand-blue'    },
      { icon: Star,       value: '€140k',   label: 'ARR this year',    color: 'text-amber-500'     },
    ],
    features:    ['Website', 'Analytics', 'CRM'],
    beforeAfter: { before: '4% conversion', after: '6.7% conversion' },
  },
]

// ── Sub-components ────────────────────────────────────────────────────────────

function BeforeAfterBadge({ before, after }: { before: string; after: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="rounded-md bg-brand-surface px-2.5 py-1 font-medium text-muted-foreground line-through">
        {before}
      </span>
      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
      <span className="rounded-md bg-brand-accent/15 px-2.5 py-1 font-semibold text-foreground">
        {after}
      </span>
    </div>
  )
}

function StoryCard({ story }: { story: SuccessStory }) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-background p-6 shadow-[var(--shadow-card)] transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]">
      {/* Company header */}
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold',
              story.avatarColor,
            )}
          >
            {story.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{story.company}</p>
            <p className="text-xs text-muted-foreground">{story.industry}</p>
          </div>
        </div>

        {/* Before/after */}
        <BeforeAfterBadge before={story.beforeAfter.before} after={story.beforeAfter.after} />
      </div>

      {/* Metrics row */}
      <div className="mb-5 grid grid-cols-3 gap-3">
        {story.metrics.map(m => (
          <div key={m.label} className="rounded-lg border border-border bg-brand-surface p-3">
            <p className={cn('text-xl font-bold', m.color)}>{m.value}</p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mb-5 flex-1 border-l-2 border-brand-accent pl-4 text-sm leading-relaxed text-muted-foreground">
        "{story.quote}"
      </blockquote>

      {/* Author + features */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-foreground">{story.author}</p>
          <p className="text-xs text-muted-foreground">{story.role}</p>
        </div>

        <div className="flex flex-wrap justify-end gap-1.5">
          {story.features.map(f => (
            <span
              key={f}
              className="rounded-md border border-border px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

// ── CustomerSuccessSection ────────────────────────────────────────────────────

export function CustomerSuccessSection() {
  return (
    <section
      aria-label="Customer success stories"
      className="relative w-full bg-brand-surface py-24 md:py-32"
    >
      <Container>
        {/* Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-success" aria-hidden="true" />
              Customer success
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Real businesses,
              <br className="hidden sm:block" />
              {' '}real results
            </h2>
            <p className="mt-4 max-w-[440px] text-base text-muted-foreground">
              Not testimonials. Mini case studies with the numbers that actually matter.
            </p>
          </div>

          <a
            href="/customers"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground hover:text-brand-accent transition-colors duration-200"
          >
            Read all stories
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.map(story => (
            <StoryCard key={story.company} story={story} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 rounded-xl border border-border bg-background p-6 sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-semibold text-foreground">
                Join 120,000+ businesses already using Seellr
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                No credit card. No setup fee. Cancel any time.
              </p>
            </div>
            <a
              href="/signup"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
            >
              Start for free
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
