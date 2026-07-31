'use client'

import { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface VideoPlayerProps {
  /** MP4 source (primary) */
  src: string
  /** WebM source for better compression in supporting browsers */
  srcWebm?: string
  /** Poster image shown before video loads */
  poster?: string
  className?: string
  /** Aspect ratio wrapper class (default 16/9) */
  aspectRatio?: string
}

/**
 * Accessible, performance-safe autoplay video.
 *
 * - Muted autoplay loop — no sound, no controls
 * - Pauses when scrolled out of view (IntersectionObserver)
 * - Respects prefers-reduced-motion — shows poster only when motion is off
 * - Lazy loads (loading="lazy" on source + observer-driven play)
 */
export function VideoPlayer({
  src,
  srcWebm,
  poster,
  className,
  aspectRatio = 'aspect-video',
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

  useEffect(() => {
    const el = videoRef.current
    if (!el || prefersReducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {
            // Autoplay blocked — silently fail; poster stays visible
          })
        } else {
          el.pause()
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [prefersReducedMotion])

  return (
    <div className={cn('overflow-hidden rounded-xl', aspectRatio, className)}>
      {prefersReducedMotion ? (
        // Show poster image when reduced motion is preferred
        poster ? (
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        ) : null
      ) : (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          poster={poster}
          aria-hidden="true"
          className="h-full w-full object-cover"
          preload="none"
        >
          {srcWebm && <source src={srcWebm} type="video/webm" />}
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  )
}
