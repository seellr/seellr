'use client'

import { useState }           from 'react'
import Link                   from 'next/link'
import { ArrowRight, Loader2, Mail } from 'lucide-react'
import { cn }                 from '@/lib/utils'

export function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false)
  const [sent,    setSent]    = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1400)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 py-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-surface">
          <Mail className="h-5 w-5 text-foreground" />
        </div>
        <h2 className="text-xl font-bold text-foreground">Check your email</h2>
        <p className="text-sm text-muted-foreground">
          We sent a reset link. It expires in 30 minutes.
        </p>
        <Link
          href="/login"
          className="mt-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          Back to sign in
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
          Email address
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
          className={cn(
            'w-full rounded-md border border-border bg-background',
            'px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60',
            'transition-colors focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand-accent/20',
          )}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={cn(
          'group flex w-full items-center justify-center gap-2',
          'rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background',
          'transition-all hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(0,0,0,0.18)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent',
          'disabled:pointer-events-none disabled:opacity-50',
          'active:scale-[0.97]',
        )}
      >
        {loading
          ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          : (
            <>
              Send reset link
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </>
          )}
      </button>
    </form>
  )
}
