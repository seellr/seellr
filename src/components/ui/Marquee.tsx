'use client'

import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface MarqueeProps {
  items: ReactNode[]
  /** Total duration of one full loop in seconds */
  speed?: number
  pauseOnHover?: boolean
  direction?: 'left' | 'right'
  className?: string
}

export function Marquee({
  items,
  speed = 35,
  pauseOnHover = true,
  direction = 'left',
  className,
}: MarqueeProps) {
  const reducedMotion = useReducedMotion()

  // Duplicate items once for a seamless loop (CSS animation resets at 50%)
  const doubled = [...items, ...items]

  if (reducedMotion) {
    return (
      <div
        className={cn('flex flex-wrap items-center justify-center gap-x-10 gap-y-4', className)}
        aria-hidden="true"
      >
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    )
  }

  const animationDirection = direction === 'right' ? 'reverse' : 'normal'

  return (
    <div
      className={cn('group flex overflow-hidden', className)}
      aria-hidden="true"
    >
      <div
        className="flex min-w-full shrink-0 items-center gap-x-16"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationDirection,
          animationPlayState: 'running',
          willChange: 'transform',
        }}
        // Pause via CSS group-hover — avoids JS event listeners
      >
        {doubled.map((item, i) => (
          <span key={i} className="shrink-0">
            {item}
          </span>
        ))}
      </div>

      {/*
       * Second track — offset by 50% so when track 1 exits left,
       * track 2 is already in position. Both share the same keyframe.
       */}
      <div
        className="flex min-w-full shrink-0 items-center gap-x-16"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationDirection,
          animationPlayState: 'running',
          willChange: 'transform',
        }}
        aria-hidden="true"
      >
        {doubled.map((item, i) => (
          <span key={i} className="shrink-0">
            {item}
          </span>
        ))}
      </div>

      {/* Inject keyframes + hover pause via a style tag scoped to this component */}
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        ${
          pauseOnHover
            ? `.group:hover > div { animation-play-state: paused !important; }`
            : ''
        }
      `}</style>
    </div>
  )
}
