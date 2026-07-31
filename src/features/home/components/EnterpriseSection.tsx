import {
  Shield, Globe, Zap, Lock, Server, Users,
  RefreshCw, Key, BarChart2, CheckCircle,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'

// ── Data ─────────────────────────────────────────────────────────────────────

interface TrustItem {
  Icon:  React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  body:  string
}

const TRUST_ITEMS: TrustItem[] = [
  { Icon: Shield,    title: 'SOC 2 Type II',        body: 'Independently audited. Your data is protected end-to-end.'                },
  { Icon: Globe,     title: 'Global CDN',            body: 'Served from 40+ edge locations. Sub-50ms load anywhere on earth.'         },
  { Icon: Zap,       title: '99.99% uptime SLA',    body: 'Backed by a real commitment — not just a marketing claim.'                },
  { Icon: Lock,      title: 'SSL everywhere',        body: 'All domains, all subdomains, all the time. Automated renewal.'           },
  { Icon: Server,    title: 'Automatic backups',     body: 'Hourly snapshots. Point-in-time restore. 30-day retention.'              },
  { Icon: Users,     title: 'Role permissions',      body: 'Fine-grained access control. Limit exactly what each teammate sees.'     },
  { Icon: RefreshCw, title: 'Automatic updates',     body: 'Security patches deployed silently. You never touch infrastructure.'     },
  { Icon: Key,       title: 'API access',            body: 'Full REST API with webhook support. Integrate with anything.'            },
  { Icon: BarChart2, title: 'Audit logs',            body: 'Every action, every user, every timestamp. Complete accountability.'     },
]

const STATS = [
  { value: '99.99%',  label: 'Uptime SLA'          },
  { value: '<50 ms',  label: 'Global edge latency'  },
  { value: '40+',     label: 'CDN locations'        },
  { value: '10 M+',   label: 'Requests / day'       },
]

// ── TrustCard ─────────────────────────────────────────────────────────────────

function TrustCard({ item }: { item: TrustItem }) {
  return (
    <div className="group flex gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-200 hover:border-foreground/15 hover:shadow-[var(--shadow-card)]">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-surface group-hover:bg-foreground/[0.04] transition-colors duration-200">
        <item.Icon className="h-4.5 w-4.5 text-foreground" aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{item.title}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
      </div>
    </div>
  )
}

// ── EnterpriseSection ─────────────────────────────────────────────────────────

export function EnterpriseSection() {
  return (
    <section
      aria-label="Enterprise and security"
      className="relative w-full overflow-hidden bg-foreground py-24 text-background md:py-32"
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none opacity-[0.04]"
        style={{
          backgroundImage:  'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize:   '32px 32px',
        }}
      />

      <Container>
        {/* Top header */}
        <div className="mb-16 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-end">
          {/* Left: heading */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-3 py-1.5 text-sm text-white/70">
              <Shield className="h-3.5 w-3.5" aria-hidden="true" />
              Enterprise-ready
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Built for businesses
              <br className="hidden sm:block" />
              {' '}that can't afford downtime
            </h2>
            <p className="mt-5 max-w-[440px] text-base text-white/60">
              Enterprise-grade infrastructure, security, and compliance — included in every plan.
              Not an add-on. Not a separate tier.
            </p>

            {/* Guarantee bullets */}
            <ul className="mt-6 space-y-3">
              {[
                'No vendor lock-in — export your data any time',
                'GDPR compliant by default',
                'Dedicated support for Growth and Business plans',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle className="h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: infra stats */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map(s => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/[0.05] p-6"
              >
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="mt-1 text-sm text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_ITEMS.map(item => (
            <div
              key={item.title}
              className="group flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-200 hover:bg-white/[0.07] hover:border-white/20"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.08]">
                <item.Icon className="h-4.5 w-4.5 text-white/80" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/50">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-start gap-4 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base font-semibold text-white/80">
            Want a security review or custom SLA?
          </p>
          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-brand-accent px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-px hover:bg-brand-accent-hover"
          >
            Talk to sales
          </a>
        </div>
      </Container>
    </section>
  )
}
