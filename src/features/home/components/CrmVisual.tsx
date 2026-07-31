'use client'

import { FadeLeft } from '@/components/animations/FadeLeft'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { cn } from '@/lib/utils'

interface ContactCard {
  name: string
  company: string
  color: string
}

interface PipelineColumn {
  label: string
  count: string
  cards: ContactCard[]
}

const PIPELINE_COLUMNS: PipelineColumn[] = [
  {
    label: 'Leads',
    count: '3',
    cards: [
      { name: 'Emma Wilson', company: 'Bloom Co', color: 'bg-violet-400' },
      { name: 'James Park', company: 'Nova Inc', color: 'bg-blue-400' },
      { name: 'Aria Chen', company: 'Pixel Labs', color: 'bg-emerald-400' },
    ],
  },
  {
    label: 'Contacted',
    count: '2',
    cards: [
      { name: 'Tom Reed', company: 'Summit', color: 'bg-amber-400' },
      { name: 'Lisa Tan', company: 'Orbit', color: 'bg-rose-400' },
    ],
  },
  {
    label: 'Closed',
    count: '1',
    cards: [
      { name: 'Mark Evans', company: 'Stellar', color: 'bg-brand-accent' },
    ],
  },
]

function AvatarInitials({ name, color }: { name: string; color: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white',
        color,
      )}
    >
      {initials}
    </span>
  )
}

function ContactCardItem({ card }: { card: ContactCard }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-border bg-background px-3 py-2.5 shadow-[var(--shadow-card)]">
      <AvatarInitials name={card.name} color={card.color} />
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-foreground">{card.name}</p>
        <p className="truncate text-xs text-muted-foreground">{card.company}</p>
      </div>
    </div>
  )
}

function PipelineColumnBlock({ column }: { column: PipelineColumn }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2">
      <div className="flex items-center justify-between px-0.5">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {column.label}
        </span>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
          {column.count}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {column.cards.map((card) => (
          <ContactCardItem key={card.name} card={card} />
        ))}
      </div>
    </div>
  )
}

export function CrmVisual() {
  return (
    <FadeLeft delay={0.1}>
      <div className="relative shadow-[var(--shadow-float)]">
        <BrowserFrame url="app.seellr.com/crm">
          <div aria-hidden="true" className="bg-background p-4">
            {/* Pipeline header */}
            <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-accent" />
              <span className="text-sm font-semibold text-foreground">Deal Pipeline</span>
              <span className="ml-auto rounded-full bg-brand-accent/10 px-2 py-0.5 text-xs font-medium text-brand-accent">
                Active
              </span>
            </div>

            {/* Pipeline columns */}
            <div className="flex gap-3 sm:gap-4">
              {PIPELINE_COLUMNS.map((col) => (
                <PipelineColumnBlock key={col.label} column={col} />
              ))}
            </div>
          </div>
        </BrowserFrame>

        {/* Floating metric badge */}
        <div className="absolute -bottom-3 -right-3 rounded-xl border border-border bg-background px-3 py-2 shadow-[var(--shadow-card-hover)]">
          <p className="text-[10px] text-muted-foreground">Pipeline value</p>
          <p className="text-base font-bold text-foreground">$84,200</p>
          <p className="text-[10px] font-medium text-brand-success">↑ +12% this month</p>
        </div>
      </div>
    </FadeLeft>
  )
}
