'use client'

import { useState, useEffect, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AnnouncementBarClientProps {
  /** Stable identifier — changing it resets dismissed state for all users. */
  id: string
  children: ReactNode
  dismissible?: boolean
  className?: string
}

const STORAGE_KEY = (id: string) => `seellr:announcement:${id}`

export function AnnouncementBarClient({
  id,
  children,
  dismissible = true,
  className,
}: AnnouncementBarClientProps) {
  // mounted pattern: server and client both render null initially.
  // After hydration, check localStorage — no flash, clean entrance.
  const [mounted, setMounted]   = useState(false)
  const [visible, setVisible]   = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY(id)) === '1'
    setVisible(!dismissed)
    setMounted(true)
  }, [id])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY(id), '1')
    setVisible(false)
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="region"
          aria-label="Announcement"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="overflow-hidden"
        >
          <div
            className={cn(
              'relative flex items-center justify-center',
              'bg-foreground px-4 py-2.5 text-background',
              'text-sm',
              className
            )}
          >
            {/* Extra right padding avoids content overlapping the dismiss button */}
            <div className={cn('flex items-center gap-2.5 text-center', dismissible && 'pr-6')}>
              {children}
            </div>

            {dismissible && (
              <button
                type="button"
                onClick={dismiss}
                aria-label="Dismiss announcement"
                className={cn(
                  'absolute right-3 top-1/2 -translate-y-1/2',
                  'flex h-6 w-6 items-center justify-center rounded-md',
                  'text-background/60 hover:bg-white/10 hover:text-background',
                  'transition-colors duration-[var(--duration-fast)]',
                  'focus-visible:outline-none focus-visible:ring-2',
                  'focus-visible:ring-white focus-visible:ring-offset-2',
                  'focus-visible:ring-offset-foreground',
                )}
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
