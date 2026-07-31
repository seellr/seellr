import { Globe, ShoppingBag, Users, Calendar, BarChart2 } from 'lucide-react'
import { Section }    from '@/components/layout/Section'
import { Container }  from '@/components/layout/Container'

// ── Feature bento cells ───────────────────────────────────────────────────────

const CELLS = [
  {
    Icon:  Globe,
    label: 'Website Builder',
    desc:  'Drag-and-drop builder with 80+ templates. Goes live in minutes.',
    href:  '#website',
    accent: '#57DFA6',
    stat:   { value: '80+', label: 'templates' },
    span:   'lg:col-span-2',
  },
  {
    Icon:  ShoppingBag,
    label: 'Online Store',
    desc:  'Sell unlimited products. 0% transaction fee on Business.',
    href:  '#ecommerce',
    accent: '#B0D7FF',
    stat:   { value: '0%', label: 'transaction fee' },
    span:   '',
  },
  {
    Icon:  Users,
    label: 'CRM',
    desc:  'Contacts, pipeline, and email sequences in one place.',
    href:  '#crm',
    accent: '#C4B5FD',
    stat:   { value: '3×', label: 'faster close rate' },
    span:   '',
  },
  {
    Icon:  Calendar,
    label: 'Bookings',
    desc:  'Let clients self-book. Automated reminders cut no-shows by 68%.',
    href:  '#bookings',
    accent: '#FDE68A',
    stat:   { value: '−68%', label: 'no-shows' },
    span:   '',
  },
  {
    Icon:  BarChart2,
    label: 'Analytics',
    desc:  'Real-time dashboards for revenue, traffic, and conversions.',
    href:  '#analytics',
    accent: '#FCA5A5',
    stat:   { value: '100%', label: 'real-time' },
    span:   'lg:col-span-2',
  },
] as const

export function FeaturesOverview() {
  return (
    <Section spacing="lg" aria-label="Feature overview" className="-mt-8">
      <Container>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CELLS.map(({ Icon, label, desc, href, accent, stat, span }) => (
            <a
              key={label}
              href={href}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-[var(--shadow-float)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${span}`}
            >
              {/* Accent glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                style={{ backgroundColor: accent }}
              />

              {/* Header */}
              <div>
                <div
                  className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${accent}22` }}
                >
                  <Icon className="h-4.5 w-4.5" style={{ color: accent }} aria-hidden="true" />
                </div>
                <p className="mb-1.5 text-base font-semibold text-foreground">{label}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>

              {/* Stat */}
              <div className="mt-6 flex items-baseline gap-1.5 border-t border-border pt-4">
                <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  )
}
