import Link from 'next/link'
import { Mail, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function VerifyEmailView() {
  return (
    <div className="flex flex-col items-center gap-5 py-4 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-brand-surface">
        <Mail className="h-6 w-6 text-foreground" aria-hidden="true" />
      </div>

      <div>
        <h2 className="text-xl font-bold text-foreground">Verify your email</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          We sent a verification link to your email address.
          <br />
          Click the link to activate your Seellr account.
        </p>
      </div>

      <div className="w-full rounded-lg border border-border bg-brand-surface px-4 py-3 text-left text-sm text-muted-foreground">
        Didn&apos;t receive it? Check your spam folder or{' '}
        <button
          type="button"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          resend the email
        </button>
        .
      </div>

      <Link
        href="/login"
        className={cn(
          'group flex w-full items-center justify-center gap-2',
          'rounded-md border border-border bg-background px-4 py-2.5',
          'text-sm font-medium text-foreground',
          'transition-all hover:bg-brand-surface',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent',
        )}
      >
        Back to sign in
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </div>
  )
}
