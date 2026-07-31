'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2 }  from 'lucide-react'
import { Input }                     from '@/components/forms/Input'
import { cn }                        from '@/lib/utils'

export function FooterNewsletter() {
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise<void>((r) => setTimeout(r, 700))
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-success" aria-hidden="true" />
        <span>You&apos;re subscribed. Thanks!</span>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Newsletter signup"
      className="flex items-center gap-2"
    >
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        aria-label="Email address"
        autoComplete="email"
        required
        loading={loading}
        className="h-9 max-w-[200px] text-sm"
      />
      <button
        type="submit"
        disabled={loading}
        aria-label="Subscribe to newsletter"
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
          'bg-foreground text-background',
          'transition-opacity duration-150 hover:opacity-80',
          'focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-brand-accent focus-visible:ring-offset-2',
          'disabled:opacity-40',
        )}
      >
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  )
}
