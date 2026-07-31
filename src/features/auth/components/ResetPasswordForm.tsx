'use client'

import { useState }                        from 'react'
import { Eye, EyeOff, ArrowRight, Loader2, CheckCircle } from 'lucide-react'
import { cn }                              from '@/lib/utils'

function PasswordStrength({ value }: { value: string }) {
  const strength = value.length === 0 ? 0
    : value.length < 6  ? 1
    : value.length < 10 ? 2
    : 3

  const labels = ['', 'Weak', 'Good', 'Strong']
  const colors  = ['', 'bg-rose-400', 'bg-amber-400', 'bg-brand-success']

  if (!value) return null

  return (
    <div className="mt-2 flex items-center gap-2">
      <div className="flex flex-1 gap-1">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className={cn(
              'h-1 flex-1 rounded-full transition-all duration-300',
              i <= strength ? colors[strength] : 'bg-border',
            )}
          />
        ))}
      </div>
      <span className="text-[11px] text-muted-foreground">{labels[strength]}</span>
    </div>
  )
}

export function ResetPasswordForm() {
  const [showNew,     setShowNew]     = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [password,    setPassword]    = useState('')
  const [loading,     setLoading]     = useState(false)
  const [done,        setDone]        = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 1400)
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <CheckCircle className="h-10 w-10 text-brand-success" />
        <h2 className="text-xl font-bold text-foreground">Password updated</h2>
        <p className="text-sm text-muted-foreground">
          Your password has been reset. You can now sign in with your new password.
        </p>
        <a
          href="/login"
          className={cn(
            'mt-2 flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5',
            'text-sm font-medium text-background',
            'transition-all hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(0,0,0,0.18)]',
          )}
        >
          Sign in
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* New password */}
      <div>
        <label htmlFor="new-password" className="mb-1.5 block text-sm font-medium text-foreground">
          New password
        </label>
        <div className="relative">
          <input
            id="new-password"
            type={showNew ? 'text' : 'password'}
            autoComplete="new-password"
            required
            minLength={8}
            placeholder="Min. 8 characters"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={cn(
              'w-full rounded-md border border-border bg-background',
              'px-3.5 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground/60',
              'transition-colors focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand-accent/20',
            )}
          />
          <button
            type="button"
            onClick={() => setShowNew(v => !v)}
            aria-label={showNew ? 'Hide password' : 'Show password'}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
          >
            {showNew ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        <PasswordStrength value={password} />
      </div>

      {/* Confirm password */}
      <div>
        <label htmlFor="confirm-password" className="mb-1.5 block text-sm font-medium text-foreground">
          Confirm password
        </label>
        <div className="relative">
          <input
            id="confirm-password"
            type={showConfirm ? 'text' : 'password'}
            autoComplete="new-password"
            required
            placeholder="Repeat your new password"
            className={cn(
              'w-full rounded-md border border-border bg-background',
              'px-3.5 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground/60',
              'transition-colors focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand-accent/20',
            )}
          />
          <button
            type="button"
            onClick={() => setShowConfirm(v => !v)}
            aria-label={showConfirm ? 'Hide password' : 'Show password'}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
          >
            {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
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
              Set new password
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </>
          )}
      </button>
    </form>
  )
}
