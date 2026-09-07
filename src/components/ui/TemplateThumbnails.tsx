import React from 'react'

// Mini website layout previews for each template category.
// These are decorative, Server-compatible, pure HTML/CSS components.

function MiniNav({ logoColor = '#c8ff2c', ctaLabel }: { logoColor?: string; ctaLabel?: string }) {
  return (
    <div className="flex h-7 items-center gap-2 border-b border-black/5 bg-white px-3">
      <div className="h-3.5 w-3.5 rounded-sm" style={{ background: logoColor }} />
      <div className="flex gap-2">
        <div className="h-1.5 w-8 rounded-full bg-neutral-200" />
        <div className="h-1.5 w-6 rounded-full bg-neutral-200" />
        <div className="h-1.5 w-7 rounded-full bg-neutral-200" />
      </div>
      {ctaLabel && (
        <div className="ml-auto h-5 w-14 rounded-md bg-neutral-900" />
      )}
    </div>
  )
}

// ── Business / Agency ────────────────────────────────────────────────────────
export function BusinessThumbnail() {
  return (
    <div className="h-full w-full overflow-hidden bg-white" aria-hidden="true">
      <MiniNav logoColor="#071a3d" ctaLabel="Contact" />
      {/* Hero */}
      <div className="relative bg-neutral-950 px-4 py-5">
        <div className="mb-1.5 h-3.5 w-32 rounded-full bg-white/80" />
        <div className="mb-1 h-2 w-24 rounded-full bg-white/40" />
        <div className="mt-2 flex gap-2">
          <div className="h-5 w-14 rounded-md bg-white" />
          <div className="h-5 w-14 rounded-md border border-white/30" />
        </div>
        {/* Decorative floating card */}
        <div className="absolute right-4 top-3 h-14 w-20 rounded-md border border-white/10 bg-white/10" />
      </div>
      {/* Service cards */}
      <div className="grid grid-cols-3 gap-1.5 bg-neutral-50 p-2.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-md bg-white p-2 shadow-sm">
            <div className="mb-1 h-3 w-3 rounded-sm bg-neutral-200" />
            <div className="h-1.5 w-3/4 rounded-full bg-neutral-200" />
            <div className="mt-1 h-1 w-1/2 rounded-full bg-neutral-100" />
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Health / Wellness ────────────────────────────────────────────────────────
export function HealthThumbnail() {
  return (
    <div className="h-full w-full overflow-hidden bg-white" aria-hidden="true">
      <MiniNav logoColor="#34D399" ctaLabel="Book" />
      {/* Hero: warm gradient */}
      <div className="relative flex flex-col items-center justify-center gap-1.5 bg-gradient-to-br from-rose-50 via-amber-50/60 to-emerald-50 px-4 py-5">
        <div className="h-2.5 w-28 rounded-full bg-neutral-700/60" />
        <div className="h-1.5 w-20 rounded-full bg-neutral-500/40" />
        <div className="mt-1 h-5 w-24 rounded-full bg-emerald-500" />
      </div>
      {/* Treatment cards */}
      <div className="grid grid-cols-3 gap-1.5 px-2.5 pt-2.5">
        {['bg-rose-50', 'bg-teal-50', 'bg-amber-50'].map((bg, i) => (
          <div key={i} className={`rounded-lg ${bg} p-2`}>
            <div className="mb-1 h-5 w-5 rounded-full bg-white" />
            <div className="h-1.5 w-3/4 rounded-full bg-neutral-200" />
            <div className="mt-0.5 h-1 w-1/2 rounded-full bg-neutral-100" />
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Creative / Editorial ─────────────────────────────────────────────────────
export function CreativeThumbnail() {
  return (
    <div className="h-full w-full overflow-hidden bg-white" aria-hidden="true">
      {/* Large top title area */}
      <div className="border-b border-neutral-100 px-3 py-3">
        <div className="mb-1 h-4 w-3/4 rounded-full bg-neutral-900" />
        <div className="flex items-center justify-between">
          <div className="h-1.5 w-20 rounded-full bg-neutral-300" />
          <div className="flex gap-2">
            <div className="h-1.5 w-6 rounded-full bg-neutral-200" />
            <div className="h-1.5 w-6 rounded-full bg-neutral-200" />
          </div>
        </div>
      </div>
      {/* Hero image placeholder */}
      <div className="h-20 bg-gradient-to-br from-violet-100 via-indigo-50 to-blue-100" />
      {/* Two-column editorial */}
      <div className="grid grid-cols-2 gap-2 px-3 pt-2">
        <div>
          <div className="mb-1 h-2 w-3/4 rounded-full bg-neutral-300" />
          <div className="h-1.5 w-full rounded-full bg-neutral-100" />
          <div className="mt-0.5 h-1.5 w-2/3 rounded-full bg-neutral-100" />
        </div>
        <div className="h-12 rounded-md bg-violet-50" />
      </div>
    </div>
  )
}

// ── Ecommerce / Store ────────────────────────────────────────────────────────
export function EcommerceThumbnail() {
  const products = [
    { bg: 'from-blue-50 to-indigo-50/80', price: '$89' },
    { bg: 'from-rose-50 to-pink-50/80', price: '$49' },
    { bg: 'from-amber-50 to-orange-50/80', price: '$120' },
    { bg: 'from-emerald-50 to-teal-50/80', price: '$34' },
  ]
  return (
    <div className="h-full w-full overflow-hidden bg-neutral-50/50" aria-hidden="true">
      {/* Top bar */}
      <div className="flex items-center gap-2 border-b border-neutral-100 bg-white px-3 py-1.5">
        <div className="h-3 w-10 rounded-full bg-neutral-900" />
        <div className="ml-auto flex items-center gap-1.5">
          <div className="h-3 w-8 rounded-full bg-neutral-200" />
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900">
            <span className="text-[7px] font-bold text-white">2</span>
          </div>
        </div>
      </div>
      {/* 2×2 product grid */}
      <div className="grid grid-cols-2 gap-1.5 p-2">
        {products.map(({ bg, price }, i) => (
          <div key={i} className="overflow-hidden rounded-md border border-neutral-100 bg-white">
            <div className={`h-12 bg-gradient-to-br ${bg}`} />
            <div className="px-1.5 py-1">
              <div className="flex items-center justify-between">
                <div className="h-1.5 w-1/2 rounded-full bg-neutral-200" />
                <span className="text-[8px] font-bold text-neutral-900">{price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Restaurant ───────────────────────────────────────────────────────────────
export function RestaurantThumbnail() {
  return (
    <div className="h-full w-full overflow-hidden bg-neutral-900" aria-hidden="true">
      {/* Translucent nav */}
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-1.5">
        <div className="h-3 w-8 rounded-full bg-white/60" />
        <div className="ml-auto h-5 w-16 rounded-md border border-white/20 bg-white/10" />
      </div>
      {/* Hero image area */}
      <div className="relative flex h-20 flex-col items-center justify-center gap-1 bg-gradient-to-br from-neutral-800 to-amber-900/60">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 60%, rgba(251,191,36,0.4), transparent 60%)' }} />
        <div className="h-2.5 w-24 rounded-full bg-white/80" />
        <div className="h-1.5 w-16 rounded-full bg-white/40" />
        <div className="mt-1 h-4 w-20 rounded-md border border-white/40 bg-white/10 text-center text-[7px] text-white/60 leading-4">Reserve a table</div>
      </div>
      {/* Menu categories */}
      <div className="flex gap-2 overflow-hidden px-3 py-2">
        {['Starters', 'Mains', 'Desserts', 'Drinks'].map((cat) => (
          <div key={cat} className="shrink-0 rounded-full border border-white/15 bg-white/[0.06] px-2 py-0.5 text-[7px] font-medium text-white/50">
            {cat}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Portfolio ────────────────────────────────────────────────────────────────
export function PortfolioThumbnail() {
  return (
    <div className="h-full w-full overflow-hidden bg-white" aria-hidden="true">
      {/* Minimal header */}
      <div className="flex items-center justify-between border-b border-neutral-100 px-3 py-2">
        <div className="h-2 w-16 rounded-full bg-neutral-900" />
        <div className="flex gap-3">
          <div className="h-1.5 w-5 rounded-full bg-neutral-200" />
          <div className="h-1.5 w-5 rounded-full bg-neutral-200" />
          <div className="h-1.5 w-5 rounded-full bg-neutral-200" />
        </div>
      </div>
      {/* Full-bleed project hero */}
      <div className="h-24 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 relative">
        <div className="absolute inset-4 rounded-md border border-slate-300/60 bg-white/40" />
        <div className="absolute bottom-4 left-4">
          <div className="h-2 w-20 rounded-full bg-slate-500/60" />
          <div className="mt-0.5 h-1.5 w-12 rounded-full bg-slate-300/60" />
        </div>
      </div>
      {/* Project grid preview */}
      <div className="grid grid-cols-3 gap-1 px-2 pt-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-8 rounded-md bg-slate-100" />
        ))}
      </div>
    </div>
  )
}

export type TemplateCategoryKey = 'business' | 'health' | 'creative' | 'ecommerce' | 'restaurant' | 'portfolio'

export const TEMPLATE_THUMBNAIL_MAP: Record<TemplateCategoryKey, () => React.ReactElement> = {
  business:   BusinessThumbnail,
  health:     HealthThumbnail,
  creative:   CreativeThumbnail,
  ecommerce:  EcommerceThumbnail,
  restaurant: RestaurantThumbnail,
  portfolio:  PortfolioThumbnail,
}
