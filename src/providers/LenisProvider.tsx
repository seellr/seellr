'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

interface LenisProviderProps {
  children: React.ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) return

    const lenis = new Lenis({
      // lerp controls the interpolation factor per frame — lower = smoother/lazier
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}
