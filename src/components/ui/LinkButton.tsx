import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from './button'
import type { VariantProps } from 'class-variance-authority'

/* ─────────────────────────────────────────────────────────
   LINK BUTTON
   Visually identical to Button but renders as <a> via next/link.
   Use for navigation actions. Never use for form submissions.
───────────────────────────────────────────────────────── */

interface LinkButtonProps
  extends ComponentPropsWithoutRef<typeof Link>,
    VariantProps<typeof buttonVariants> {
  leftIcon?:  React.ReactNode
  rightIcon?: React.ReactNode
  /**
   * Appends an animated ArrowRight. Use only on primary CTAs.
   */
  withArrow?: boolean
  /**
   * Opens in a new tab. Automatically adds rel="noopener noreferrer"
   * and a screen-reader-only indicator.
   */
  external?: boolean
}

export function LinkButton({
  variant,
  size,
  leftIcon,
  rightIcon,
  withArrow = false,
  external = false,
  className,
  children,
  href,
  ...props
}: LinkButtonProps) {
  const resolvedRightIcon = withArrow ? (
    <ArrowRight
      aria-hidden="true"
      className="transition-transform duration-[var(--duration-fast)] ease-[var(--ease-smooth)] group-hover:translate-x-1"
    />
  ) : rightIcon

  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...externalProps}
      {...props}
    >
      {leftIcon}
      {children}
      {/* Screen reader text for external links */}
      {external && (
        <span className="sr-only">(opens in new tab)</span>
      )}
      {resolvedRightIcon}
    </Link>
  )
}
