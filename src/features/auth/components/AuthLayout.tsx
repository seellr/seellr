import Link from 'next/link'
import { TrendingUp, ShoppingBag, Users, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

// ── Mini product preview panel (right side) ───────────────────────────────────

const PREVIEW_STATS = [
  { label: 'Revenue',  value: '$12.4k', change: '+24%', color: 'text-brand-success' },
  { label: 'Orders',   value: '384',    change: '+12%', color: 'text-brand-success' },
  { label: 'Visitors', value: '8,920',  change: '+8%',  color: 'text-brand-success' },
]

const PREVIEW_NAV = [
  { icon: TrendingUp,  label: 'Dashboard', active: true  },
  { icon: ShoppingBag, label: 'Store',     active: false },
  { icon: Users,       label: 'CRM',       active: false },
  { icon: Calendar,    label: 'Bookings',  active: false },
]

const BAR_HEIGHTS = [30, 45, 38, 62, 50, 76, 58, 90, 68, 100]

function MiniDashboard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur-sm">
      {/* Chrome bar */}
      <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4">
        <span className="h-2 w-2 rounded-full bg-rose-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-green-400/70" />
        <span className="mx-3 flex-1 rounded bg-white/[0.08] py-0.5 text-center text-[9px] text-white/40">
          app.seellr.com/dashboard
        </span>
      </div>

      <div className="flex h-[300px]">
        {/* Sidebar */}
        <div className="flex w-[110px] shrink-0 flex-col gap-0.5 border-r border-white/10 bg-white/[0.03] p-2.5">
          <div className="mb-3 flex items-center gap-1.5 px-1">
            <span className="flex h-4 w-4 items-center justify-center rounded bg-brand-accent text-[7px] font-bold text-foreground">S</span>
            <span className="text-[10px] font-semibold text-white">Seellr</span>
          </div>
          {PREVIEW_NAV.map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={cn(
                'flex items-center gap-2 rounded-md px-2 py-1.5 text-[9px]',
                active ? 'bg-white/15 font-medium text-white' : 'text-white/40',
              )}
            >
              <Icon className="h-3 w-3 shrink-0" aria-hidden="true" />
              {label}
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 p-4">
          <p className="mb-1 text-[10px] text-white/40">Dashboard overview</p>
          <div className="mb-3 grid grid-cols-3 gap-2">
            {PREVIEW_STATS.map(s => (
              <div key={s.label} className="rounded-lg border border-white/10 bg-white/[0.06] p-2">
                <p className="text-[8px] text-white/40">{s.label}</p>
                <p className="text-xs font-bold text-white">{s.value}</p>
                <p className={cn('text-[8px] font-medium', s.color)}>{s.change}</p>
              </div>
            ))}
          </div>

          {/* Mini chart */}
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[8px] text-white/40">Revenue this week</p>
              <span className="text-[8px] font-semibold text-brand-accent">+18%</span>
            </div>
            <div className="flex h-[52px] items-end gap-0.5">
              {BAR_HEIGHTS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-[1px]"
                  style={{
                    height:          `${h}%`,
                    backgroundColor: i >= BAR_HEIGHTS.length - 2 ? '#c8ff2c' : 'rgba(255,255,255,0.1)',
                    opacity:         i === BAR_HEIGHTS.length - 2 ? 0.5 : 1,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── AuthLayout ────────────────────────────────────────────────────────────────

interface AuthLayoutProps {
  children:         React.ReactNode
  heading:          string
  subheading:       string
  footerText:       string
  footerLinkLabel:  string
  footerLinkHref:   string
}

export function AuthLayout({
  children,
  heading,
  subheading,
  footerText,
  footerLinkLabel,
  footerLinkHref,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* LEFT — form panel */}
      <div className="flex w-full flex-col lg:w-[480px] xl:w-[540px]">
        {/* Top nav */}
        <div className="flex items-center justify-between px-8 py-6">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            aria-label="Seellr – Go to homepage"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-foreground">
              <span className="text-[11px] font-bold text-background">S</span>
            </span>
            <span className="text-sm font-semibold text-foreground">Seellr</span>
          </Link>
        </div>

        {/* Form area */}
        <div className="flex flex-1 flex-col items-center justify-center px-8 py-12">
          <div className="w-full max-w-[380px]">
            {/* Heading */}
            <h1 className="text-2xl font-bold tracking-tight text-foreground">{heading}</h1>
            <p className="mt-2 text-sm text-muted-foreground">{subheading}</p>

            {/* Slot for form */}
            <div className="mt-8">{children}</div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 text-center text-sm text-muted-foreground">
          {footerText}{' '}
          <Link
            href={footerLinkHref}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {footerLinkLabel}
          </Link>
        </div>
      </div>

      {/* RIGHT — product preview */}
      <div className="relative hidden flex-1 overflow-hidden bg-foreground lg:flex lg:items-center lg:justify-center">
        {/* Dot-grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize:  '32px 32px',
          }}
        />

        {/* Green glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(200,255,44,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 w-full max-w-[460px] px-8">
          <MiniDashboard />

          {/* Caption */}
          <p className="mt-6 text-center text-sm text-white/50">
            120,000+ businesses run on Seellr
          </p>
        </div>
      </div>
    </div>
  )
}
