'use client'

import { useState, useEffect, useRef } from 'react'

export type ScrollDirection = 'up' | 'down' | 'idle'

export function useScrollDirection(threshold = 10): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>('idle')
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const diff = currentScrollY - lastScrollY.current

      if (Math.abs(diff) < threshold) return

      setDirection(diff > 0 ? 'down' : 'up')
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return direction
}
