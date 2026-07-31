import Link from 'next/link'
import { ArrowRight, Globe, ShoppingBag, Users, Calendar, BarChart2 } from 'lucide-react'
import { Section }         from '@/components/layout/Section'
import { Container }       from '@/components/layout/Container'
import { BrowserFrame }    from '@/components/ui/BrowserFrame'

// ── Mini product preview inside the hero ─────────────────────────────────────

const NAV_ITEMS = [
  { Icon: Globe,       label: 'Website',   active: false },
  { Icon: ShoppingBag, label: 'Store',     active: true  },
  { Icon: Users,       label: 'CRM',       active: false },
  { Icon: Calendar,    label: 'Bookings',  active: false },
  { Icon: BarChart2,   label: 'Analytics', active: false },
]

const STORE_METRICS = [
  { label: 'Today\'s revenue', value: '$3,240', change: '+18%' },
  { label: 'Orders',           value: '47',     change: '+6%'  },
  { label: 'Conversion',       value: '3.8%',   change: '+0.4%'},
]

function ProductPreview() {
  return (
    <BrowserFrame url="app.seellr.com/store">
      <div className="flex h-[260px] overflow-hidden sm:h-[300px]" aria-hidden="true">
        {/* Sidebar */}
        <div className="hidden w-[110px] shrink-0 flex-col gap-0.5 border-r border-border bg-foreground/[0.02] p-2.5 sm:flex">
          <div className="mb-3 flex items-center gap-1.5 px-1">
            <span className="flex h-4 w-4 items-center justify-center rounded bg-foreground text-[7px] font-bold text-background">S</span>
            <span className="text-[10px] font-semibold text-foreground">Seellr</span>
          </div>
          {NAV_ITEMS.map(({ Icon, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[9px] ${
                active ? 'bg-foreground font-medium text-background' : 'text-muted-foreground'
              }`}
            >
              <Icon className="h-2.5 w-2.5 shrink-0" />
              {label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden bg-background p-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[10px] font-semibold text-foreground">Online Store</p>
            <span className="rounded bg-brand-success/10 px-1.5 py-0.5 text-[8px] font-medium text-brand-success">
              Live
            </span>
          </div>

          {/* Metric cards */}
          <div className="mb-3 grid grid-cols-3 gap-1.5">
            {STORE_METRICS.map(m => (
              <div key={m.label} className="rounded-lg border border-border p-2">
                <p className="text-[8px] text-muted-foreground">{m.label}</p>
                <p className="text-xs font-bold text-foreground">{m.value}</p>
                <p className="text-[8px] font-medium text-brand-success">{m.change}</p>
              </div>
            ))}
          </div>

          {/* Product list */}
          <div className="rounded-lg border border-border">
            <div className="border-b border-border px-3 py-1.5">
              <p className="text-[8px] font-semibold text-muted-foreground uppercase tracking-wide">Recent orders</p>
            </div>
            {[
              { name: 'Linen Summer Dress', sku: '#4821', amount: '$89', status: 'Shipped' },
              { name: 'Woven Tote Bag',     sku: '#4820', amount: '$42', status: 'Processing' },
              { name: 'Canvas Sneakers',    sku: '#4819', amount: '$120', status: 'Shipped' },
            ].map(o => (
              <div key={o.sku} className="flex items-center justify-between border-b border-border/60 px-3 py-1.5 last:border-0">
                <div>
                  <p className="text-[9px] font-medium text-foreground">{o.name}</p>
                  <p className="text-[8px] text-muted-foreground">{o.sku}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-semibold text-foreground">{o.amount}</p>
                  <p className={`text-[8px] ${o.status === 'Shipped' ? 'text-brand-success' : 'text-amber-500'}`}>
                    {o.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

// ── FeaturesHero ──────────────────────────────────────────────────────────────

export function FeaturesHero() {
  return (
    <Section
      spacing="lg"
      aria-labelledby="features-hero-heading"
      className="relative overflow-hidden pb-0"
    >
      {/* Green glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-40"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(87,223,166,0.18), transparent)' }}
      />

      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
            Five tools. One subscription. Zero lock-in.
          </div>

          <h1
            id="features-hero-heading"
            className="max-w-[640px] text-[2.5rem] font-bold tracking-tight text-foreground sm:text-5xl lg:text-[60px]"
            style={{ lineHeight: 1.08 }}
          >
            Everything your business needs
          </h1>

          <p className="max-w-[480px] text-base leading-relaxed text-muted-foreground sm:text-lg">
            Website builder, online store, CRM, bookings, and analytics — fully integrated, in one platform.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="group flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(0,0,0,0.18)] active:scale-[0.97]"
            >
              Start free trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-brand-surface"
            >
              See pricing
            </Link>
          </div>

          {/* Feature nav pills */}
          <nav aria-label="Jump to feature" className="flex flex-wrap justify-center gap-2 pt-2">
            {[
              { label: 'Website Builder', href: '#website'   },
              { label: 'Online Store',    href: '#ecommerce' },
              { label: 'CRM',             href: '#crm'       },
              { label: 'Bookings',        href: '#bookings'  },
              { label: 'Analytics',       href: '#analytics' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Product preview */}
        <div className="relative mt-14">
          {/* Glow behind preview */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-8 -z-10 opacity-30"
            style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(87,223,166,0.2), transparent)' }}
          />
          <ProductPreview />
          {/* Fade mask */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
          />
        </div>
      </Container>
    </Section>
  )
}
