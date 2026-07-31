'use client'

import { CalendarDays } from 'lucide-react'
import { FadeLeft } from '@/components/animations/FadeLeft'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { cn } from '@/lib/utils'

// July 2026: July 1 is Wednesday → offset = 2 (Mon-based index)
const DAYS_OF_WEEK = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] as const
const OFFSET = 2 // Wednesday is index 2 in Mon-based week
const TOTAL_DAYS = 31
const HIGHLIGHTED_DATES = [8, 15, 22] as const
const SELECTED_DATE = 15

interface TimeSlot {
  label: string
  selected: boolean
}

const TIME_SLOTS: TimeSlot[] = [
  { label: '10:00 AM', selected: false },
  { label: '2:30 PM',  selected: true  },
  { label: '4:00 PM',  selected: false },
]

/** Renders the mini calendar grid for July 2026 */
function MiniCalendar() {
  // Build an array of cells: nulls for offset, then 1-31
  const cells: (number | null)[] = [
    ...Array<null>(OFFSET).fill(null),
    ...Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1),
  ]

  return (
    <div>
      {/* Day-of-week header */}
      <div className="mb-1 grid grid-cols-7 gap-px" aria-hidden="true">
        {DAYS_OF_WEEK.map((d) => (
          <span
            key={d}
            className="text-center text-[10px] font-medium text-muted-foreground"
          >
            {d}
          </span>
        ))}
      </div>

      {/* Day number grid */}
      <div className="grid grid-cols-7 gap-px" role="grid" aria-label="July 2026">
        {cells.map((day, idx) => {
          if (day === null) {
            return <div key={`empty-${idx}`} aria-hidden="true" />
          }

          const isHighlighted = (HIGHLIGHTED_DATES as readonly number[]).includes(day)
          const isSelected    = day === SELECTED_DATE

          return (
            <div
              key={day}
              role="gridcell"
              aria-label={`July ${day}`}
              aria-selected={isSelected}
              className={cn(
                'flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-medium transition-colors',
                isSelected
                  ? 'bg-foreground text-background'
                  : isHighlighted
                    ? 'bg-brand-accent/20 text-foreground'
                    : 'text-muted-foreground',
              )}
            >
              {day}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/** Booking card widget mock */
function BookingCard() {
  return (
    <div className="rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-float)]">
      {/* Card header */}
      <div className="mb-5 flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-accent/15">
          <CalendarDays className="h-4 w-4 text-brand-accent" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Book a session</p>
          <p className="text-[11px] text-muted-foreground">July 2026</p>
        </div>
      </div>

      {/* Calendar */}
      <MiniCalendar />

      {/* Time slots */}
      <div className="mt-5">
        <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          Available · July 15
        </p>
        <div className="flex gap-2">
          {TIME_SLOTS.map(({ label, selected }) => (
            <button
              key={label}
              type="button"
              aria-pressed={selected}
              className={cn(
                'flex-1 rounded-lg border py-1.5 text-[12px] font-medium transition-colors',
                selected
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border bg-transparent text-foreground hover:border-foreground/40',
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button
        type="button"
        className="mt-5 w-full rounded-xl bg-foreground py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-80"
      >
        Confirm booking
      </button>
    </div>
  )
}

export function BookingVisual() {
  return (
    <FadeLeft className="relative flex items-center justify-center lg:justify-start">
      <div className="relative w-full max-w-[380px] shadow-[var(--shadow-float)]">
        <BrowserFrame url="app.seellr.com/bookings" showUrl>
          <div className="p-4">
            <BookingCard />
          </div>
        </BrowserFrame>

        {/* Floating confirmation badge */}
        <div className="absolute -right-4 -top-3 rounded-xl border border-border bg-background px-3 py-2 shadow-[var(--shadow-card-hover)]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-success" />
            <p className="text-[11px] font-semibold text-foreground">Booking confirmed</p>
          </div>
          <p className="mt-0.5 text-[10px] text-muted-foreground">July 15 · 2:30 PM</p>
        </div>
      </div>
    </FadeLeft>
  )
}
