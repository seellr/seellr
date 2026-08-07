'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

// ── Google SSO button ─────────────────────────────────────────────────────────

function GoogleButton() {
  return (
    <button
      type="button"
      className={cn(
        'flex w-full items-center justify-center gap-3 rounded-md border border-border',
        'bg-background px-4 py-2.5 text-sm font-medium text-foreground',
        'transition-all hover:bg-brand-surface hover:border-foreground/20',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent',
        'active:scale-[0.98]',
      )}
    >
      {/* Google SVG */}
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
        <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/>
        <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
        <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/>
      </svg>
      Continue with Google
    </button>
  )
}

// ── LoginForm ─────────────────────────────────────────────────────────────────

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading,      setLoading]      = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Placeholder — real auth goes here
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div className="space-y-5">
      <GoogleButton />

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">or continue with email</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Email/password form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Email
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

        {/* Password */}
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className={cn(
                'w-full rounded-md border border-border bg-background',
                'px-3.5 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground/60',
                'transition-colors focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand-accent/20',
              )}
            />
            <button
              type="button"
              onClick={() => setShowPassword(v => !v)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
            >
              {showPassword
                ? <EyeOff className="h-4 w-4" aria-hidden="true" />
                : <Eye    className="h-4 w-4" aria-hidden="true" />
              }
            </button>
          </div>
        </div>

        {/* Submit */}
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
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <>
              Sign in
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </>
          )}
        </button>
      </form>

      {/* Terms note */}
      <p className="text-center text-xs text-muted-foreground">
        By signing in, you agree to our{' '}
        <Link href="/terms"   className="underline underline-offset-2 hover:text-foreground">Terms</Link>
        {' '}and{' '}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">Privacy Policy</Link>.
      </p>
    </div>
  )
}
