'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { MotionValue } from 'framer-motion'
import { FEATURE_CARDS } from '@/lib/mock/feature-cards'
import type { FeatureCard } from '@/lib/mock/feature-cards'

const STICKY_BASE = 88
const STICKY_STEP = 20

interface StackCardProps {
  card: FeatureCard
  index: number
  total: number
  containerProgress: MotionValue<number>
}

function StackCard({ card, index, total, containerProgress }: StackCardProps) {
  const shadeStart = (index + 0.6) / total
  const shadeEnd = Math.min((index + 1) / total, 1)
  const shadeOpacity = useTransform(containerProgress, [shadeStart, shadeEnd], [0, 0.28])

  return (
    <div
      className="relative"
      style={{
        position: 'sticky',
        top: STICKY_BASE + index * STICKY_STEP,
        marginTop: index > 0 ? -(total - index) * 20 : 0,
        marginBottom: (total - 1 - index) * 20,
        zIndex: index + 1,
        paddingBottom: 20
      }}
    >
      <article className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-[0_4px_32px_rgba(0,0,0,0.06)]">
        <div
          className={[
            'grid lg:min-h-[460px] lg:grid-cols-2',
            card.reversed ? 'lg:[&>*:first-child]:order-last' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {/* Visual */}
          <div className="relative min-h-[340px] overflow-hidden bg-gray-50 p-10">
            <Image
              src={card.image}
              alt={card.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            {/* Edge fade toward text column */}
            <div
              className={[
                'pointer-events-none absolute inset-y-0 w-32 to-transparent',
                card.reversed
                  ? 'left-0 bg-gradient-to-r from-background'
                  : 'right-0 bg-gradient-to-l from-background',
              ].join(' ')}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-between p-8 lg:p-12 xl:p-16">
            <div className='flex flex-col gap-6'>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {card.eyebrow}
              </p>
              <h3 className="text-3xl font-semibold leading-tight tracking-tight text-foreground lg:text-[2.1rem]">
                {card.title}
              </h3>
            </div>

            <div className='flex flex-col gap-10'>
              <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
                {card.description}
              </p>

              <Link
                href={card.cta.href}
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-60"
              >
                {card.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Shade: fades in as the next card slides over this one */}
      {index < total - 1 && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl bg-background"
          style={{ opacity: shadeOpacity }}
        />
      )}
    </div>
  )
}

export function FeatureStackCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  })

  return (
    <div ref={containerRef} className="relative pt-10">
      {FEATURE_CARDS.map((card, i) => (
        <StackCard
          key={card.id}
          card={card}
          index={i}
          total={FEATURE_CARDS.length}
          containerProgress={scrollYProgress}
        />
      ))}
    </div>
  )
}
