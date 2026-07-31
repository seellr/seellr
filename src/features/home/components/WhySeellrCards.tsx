'use client'

import { motion } from 'framer-motion'
import { XCircle, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { scaleIn } from '@/components/animations/variants'
import { VIEWPORT_ONCE } from '@/constants/ANIMATION'

interface ComparisonItem {
  label: string
}

interface ComparisonCard {
  title: string
  items: ComparisonItem[]
  footer: string
  type: 'old' | 'seellr'
}

const OLD_WAY_ITEMS: ComparisonItem[] = [
  { label: 'Website builder (separate tool)' },
  { label: 'Online store (separate tool)' },
  { label: 'Booking system (separate tool)' },
  { label: 'CRM (separate tool)' },
  { label: 'Analytics (separate tool)' },
  { label: 'Paying for all of them' },
]

const SEELLR_ITEMS: ComparisonItem[] = [
  { label: 'Website builder included' },
  { label: 'Online store included' },
  { label: 'Booking system included' },
  { label: 'CRM included' },
  { label: 'Analytics included' },
  { label: 'Everything connected in one dashboard' },
]

const CARDS: ComparisonCard[] = [
  {
    title: 'The old way',
    items: OLD_WAY_ITEMS,
    footer: 'Avg. cost: $200–400/month',
    type: 'old',
  },
  {
    title: 'With Seellr',
    items: SEELLR_ITEMS,
    footer: 'Starting at $19/month',
    type: 'seellr',
  },
]

function OldIcon() {
  return (
    <XCircle
      className="mt-0.5 h-5 w-5 shrink-0 text-red-400"
      aria-hidden="true"
    />
  )
}

function SeellrIcon() {
  return (
    <CheckCircle
      className="mt-0.5 h-5 w-5 shrink-0 text-brand-success"
      aria-hidden="true"
    />
  )
}

interface CardProps {
  card: ComparisonCard
  delay: number
}

function ComparisonCardInner({ card, delay }: CardProps) {
  const isSeellr = card.type === 'seellr'

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className={cn(
        'flex flex-col rounded-2xl border bg-background p-8',
        isSeellr
          ? 'ring-1 ring-brand-accent/30 scale-[1.02] shadow-[0_10px_35px_rgba(0,0,0,0.10)]'
          : 'border-border shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div
        className={cn(
          'mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold',
          isSeellr
            ? 'bg-brand-accent/10 text-brand-accent'
            : 'bg-red-50 text-red-500'
        )}
      >
        {isSeellr ? (
          <CheckCircle className="h-4 w-4" aria-hidden="true" />
        ) : (
          <XCircle className="h-4 w-4" aria-hidden="true" />
        )}
        {card.title}
      </div>

      {/* Items */}
      <ul className="flex flex-1 flex-col gap-3" role="list">
        {card.items.map((item) => (
          <li key={item.label} className="flex items-start gap-3">
            {isSeellr ? <SeellrIcon /> : <OldIcon />}
            <span className="text-sm text-brand-text-secondary">{item.label}</span>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div
        className={cn(
          'mt-8 rounded-xl border px-4 py-3 text-center text-sm font-medium',
          isSeellr
            ? 'border-brand-accent/20 bg-brand-accent/5 text-brand-accent'
            : 'border-red-100 bg-red-50/60 text-red-500'
        )}
      >
        {card.footer}
      </div>
    </motion.div>
  )
}

export function WhySeellrCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
      {CARDS.map((card, index) => (
        <ComparisonCardInner key={card.type} card={card} delay={index * 80} />
      ))}
    </div>
  )
}
