import { cn } from '@/lib/utils'

// ── Website Builder ──────────────────────────────────────────────────────────
export function WebsiteCardVisual() {
  return (
    <div className="h-full w-full overflow-hidden bg-white" aria-hidden="true">
      {/* Tiny site nav */}
      <div className="flex h-7 items-center gap-3 border-b border-neutral-100 px-3">
        <div className="h-3.5 w-3.5 rounded-sm bg-brand-accent/50" />
        <div className="flex gap-2">
          {[28, 20, 24, 18].map((w, i) => (
            <div key={i} className="h-1.5 rounded-full bg-neutral-200" style={{ width: w }} />
          ))}
        </div>
        <div className="ml-auto h-5 w-12 rounded-md bg-neutral-900/80" />
      </div>

      {/* Hero area */}
      <div className="relative flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-accent/8 to-blue-50/60 px-4 py-4">
        <div
          className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-brand-accent/10 blur-xl"
          aria-hidden="true"
        />
        <div className="h-2.5 w-32 rounded-full bg-neutral-800/70" />
        <div className="h-2 w-20 rounded-full bg-neutral-400" />
        <div className="mt-1 flex gap-2">
          <div className="h-6 w-14 rounded-md bg-neutral-900/80" />
          <div className="h-6 w-14 rounded-md border border-neutral-200" />
        </div>
      </div>

      {/* Feature card row */}
      <div className="grid grid-cols-3 gap-2 px-3 pt-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-md border border-neutral-100 p-2">
            <div className="mb-1 h-3 w-3 rounded-sm bg-brand-accent/30" />
            <div className="h-1.5 w-3/4 rounded-full bg-neutral-200" />
            <div className="mt-1 h-1.5 w-1/2 rounded-full bg-neutral-100" />
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Ecommerce Store ──────────────────────────────────────────────────────────
export function EcommerceCardVisual() {
  const products = [
    { bg: 'from-rose-50 to-pink-50/80' },
    { bg: 'from-violet-50 to-indigo-50/80' },
    { bg: 'from-amber-50 to-orange-50/80' },
    { bg: 'from-emerald-50 to-teal-50/80' },
  ]
  const prices = ['$49', '$89', '$34', '$120']

  return (
    <div className="h-full w-full overflow-hidden bg-neutral-50/50 p-3" aria-hidden="true">
      {/* Header */}
      <div className="mb-2.5 flex items-center justify-between">
        <div className="h-2 w-14 rounded-full bg-neutral-300" />
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-8 rounded-full bg-neutral-200" />
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900">
            <span className="text-[8px] font-bold text-white">3</span>
          </div>
        </div>
      </div>

      {/* 2×2 product grid */}
      <div className="grid grid-cols-2 gap-2">
        {products.map(({ bg }, i) => (
          <div key={i} className="overflow-hidden rounded-md border border-neutral-100 bg-white">
            <div className={cn('h-14 bg-gradient-to-br', bg)} />
            <div className="px-2 py-1.5">
              <div className="mb-0.5 h-1.5 w-3/4 rounded-full bg-neutral-200" />
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold text-neutral-900">{prices[i]}</span>
                <div className="h-4 w-8 rounded-sm bg-neutral-900" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Booking System ───────────────────────────────────────────────────────────
export function BookingsCardVisual() {
  const days = ['M', 'T', 'W', 'T', 'F']
  const rows = [0, 1, 2, 3]
  const booked = new Set(['0-1', '1-0', '2-2', '4-1', '3-3'])

  return (
    <div className="h-full w-full overflow-hidden bg-white p-2.5" aria-hidden="true">
      {/* Top bar */}
      <div className="mb-2 flex items-center justify-between">
        <div className="h-2 w-16 rounded-full bg-neutral-300" />
        <div className="flex h-4 w-14 items-center justify-center rounded-md bg-brand-accent/15 text-[8px] font-semibold text-brand-success">
          July 2026
        </div>
      </div>

      {/* Day headers */}
      <div className="mb-1 grid grid-cols-5 gap-1 pl-5">
        {days.map((d, i) => (
          <div key={i} className="text-center text-[8px] font-semibold text-muted-foreground">
            {d}
          </div>
        ))}
      </div>

      {/* Time slot grid */}
      <div className="flex flex-col gap-1">
        {rows.map((row) => (
          <div key={row} className="flex items-center gap-1">
            <div className="w-4 text-right text-[7px] text-muted-foreground">{9 + row * 2}h</div>
            <div className="grid flex-1 grid-cols-5 gap-1">
              {days.map((_, col) => (
                <div
                  key={col}
                  className={cn(
                    'h-4 rounded-sm',
                    booked.has(`${col}-${row}`)
                      ? 'bg-brand-accent/70'
                      : 'border border-neutral-100 bg-neutral-50'
                  )}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── CRM Pipeline ─────────────────────────────────────────────────────────────
export function CrmCardVisual() {
  const stages = [
    { name: 'Leads', count: '3', cards: 2 },
    { name: 'Qualified', count: '2', cards: 1 },
    { name: 'Won', count: '1', cards: 1 },
  ]

  return (
    <div className="h-full w-full overflow-hidden bg-neutral-50 p-2" aria-hidden="true">
      {/* Header */}
      <div className="mb-1.5 flex items-center gap-1.5 px-0.5">
        <div className="h-2 w-2 rounded-full bg-brand-accent" />
        <div className="h-1.5 w-16 rounded-full bg-neutral-300" />
        <div className="ml-auto flex h-3.5 w-10 items-center justify-center rounded-full bg-brand-accent/15 text-[7px] font-semibold text-brand-success">
          Active
        </div>
      </div>

      {/* Pipeline columns */}
      <div className="flex gap-1.5">
        {stages.map(({ name, count, cards: cardCount }) => (
          <div key={name} className="flex-1 rounded-md border border-neutral-100 bg-white p-1.5">
            <div className="mb-1.5 flex items-center justify-between">
              <div className="h-1.5 w-8 rounded-full bg-neutral-300" />
              <div className="flex h-3 w-3 items-center justify-center rounded-full bg-brand-accent/20 text-[7px] font-semibold text-brand-success">
                {count}
              </div>
            </div>
            {Array.from({ length: cardCount }).map((_, i) => (
              <div key={i} className="mb-1 rounded-sm border border-neutral-100 bg-neutral-50 p-1">
                <div className="h-1.5 w-3/4 rounded-full bg-neutral-200" />
                <div className="mt-0.5 h-1 w-1/2 rounded-full bg-neutral-100" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Analytics ────────────────────────────────────────────────────────────────
export function AnalyticsCardVisual() {
  const bars = [45, 72, 58, 90, 63, 85, 77]
  const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

  return (
    <div className="h-full w-full overflow-hidden bg-white p-3" aria-hidden="true">
      {/* KPI row */}
      <div className="mb-2.5 flex gap-4">
        <div>
          <div className="text-[11px] font-bold text-neutral-900">$12,480</div>
          <div className="mt-0.5 h-1.5 w-10 rounded-full bg-neutral-100" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-brand-success">+18%</div>
          <div className="mt-0.5 h-1.5 w-8 rounded-full bg-neutral-100" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-neutral-900">8,920</div>
          <div className="mt-0.5 h-1.5 w-8 rounded-full bg-neutral-100" />
        </div>
      </div>

      {/* Bar chart */}
      <div className="flex h-10 items-end gap-1">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center">
            <div
              className="w-full rounded-t-sm"
              style={{
                height: `${h}%`,
                background: i === 3 ? '#c8ff2c' : 'rgba(200,255,44,0.35)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Day labels */}
      <div className="mt-0.5 flex gap-1">
        {labels.map((d, i) => (
          <div key={i} className="flex-1 text-center text-[7px] text-neutral-400">
            {d}
          </div>
        ))}
      </div>
    </div>
  )
}
