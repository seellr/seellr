'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { EASE } from '@/constants/ANIMATION'
import type { FaqItem } from '@/lib/mock/faq'

interface FaqAccordionProps {
  items: FaqItem[]
}

const answerVariants = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit:    { height: 0, opacity: 0 },
}

const answerTransition = {
  duration: 0.25,
  ease: EASE.smooth,
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  function toggle(id: string) {
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <div className="w-full max-w-[640px] mx-auto">
      <dl className="divide-y divide-border">
        {items.map((item, index) => {
          const isOpen      = openId === item.id
          const triggerId   = `faq-trigger-${item.id}`
          const panelId     = `faq-panel-${item.id}`

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: EASE.smooth }}
            >
              <dt>
                <button
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(item.id)}
                  className={cn(
                    'flex w-full items-center justify-between gap-4 py-5 text-left',
                    'text-[15px] font-medium text-foreground leading-snug',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 rounded-sm',
                    'transition-colors duration-150',
                    isOpen ? 'text-foreground' : 'hover:text-muted-foreground',
                  )}
                >
                  <span>{item.question}</span>
                  <span aria-hidden="true" className="shrink-0 text-muted-foreground">
                    {isOpen ? <Minus size={18} strokeWidth={1.75} /> : <Plus size={18} strokeWidth={1.75} />}
                  </span>
                </button>
              </dt>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.dd
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    variants={answerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={answerTransition}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-[15px] text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </dl>

      {/* CTA row */}
      <div className="mt-10 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3">
        <p className="text-[14px] text-muted-foreground">Still have questions?</p>
        <Link
          href="/contact"
          className={cn(
            'text-[14px] font-medium text-foreground underline-offset-4',
            'hover:underline transition-all duration-150',
          )}
        >
          Contact support
        </Link>
      </div>
    </div>
  )
}
