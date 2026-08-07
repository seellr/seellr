import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowRight, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─────────────────────────────────────────────────────────
   BASE STYLES
   Applied to every button regardless of variant/size.
   All transitions reference CSS token vars — never raw values.
───────────────────────────────────────────────────────── */
const BASE =
  'group relative inline-flex shrink-0 items-center justify-center gap-2 ' +
  'font-medium whitespace-nowrap select-none ' +
  'transition-[transform,box-shadow,background-color,border-color,opacity] ' +
  'duration-[var(--duration-normal)] ease-[var(--ease-smooth)] ' +
  'outline-none ' +
  'focus-visible:outline-none focus-visible:ring-2 ' +
  'focus-visible:ring-brand-accent focus-visible:ring-offset-2 ' +
  'disabled:pointer-events-none disabled:opacity-40 ' +
  'active:scale-[0.97] active:duration-[var(--duration-instant)] ' +
  '[&_svg]:pointer-events-none [&_svg]:shrink-0'

/* ─────────────────────────────────────────────────────────
   VARIANTS
───────────────────────────────────────────────────────── */
const buttonVariants = cva(BASE, {
  variants: {
    variant: {
      /**
       * primary — near-black bg, white text, pill shape.
       * Main CTA. Lifts on hover with shadow.
       */
      primary:
        'bg-foreground text-background rounded-md ' +
        'hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(0,0,0,0.18)] ' +
        'hover:bg-foreground/90',

      /**
       * secondary — light surface bg, subtle border.
       * Secondary CTAs and supporting actions.
       */
      secondary:
        'bg-background text-foreground border border-border rounded-md ' +
        'hover:bg-brand-surface hover:border-foreground/20 ' +
        'hover:-translate-y-px hover:shadow-[var(--shadow-card)]',

      /**
       * outline — transparent bg, visible border.
       * Tertiary actions or dark-bg contexts.
       */
      outline:
        'bg-transparent text-foreground border border-border rounded-md ' +
        'hover:bg-brand-surface hover:border-foreground/20',

      /**
       * ghost — no bg, no border. Lowest visual weight.
       * Navigation actions, inline controls.
       */
      ghost:
        'bg-transparent text-foreground rounded-lg ' +
        'hover:bg-brand-surface',

      /**
       * destructive — red for irreversible actions.
       * Delete, remove, danger confirmations.
       */
      destructive:
        'bg-brand-danger text-white border-transparent rounded-md ' +
        'hover:bg-brand-danger/90 hover:-translate-y-px ' +
        'focus-visible:ring-brand-danger',
    },

    size: {
      sm: 'h-9  px-4  text-sm  [&_svg]:size-[14px]',
      md: 'h-12 px-6  text-sm  [&_svg]:size-4',
      lg: 'h-13 px-8  text-base [&_svg]:size-[18px]',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size:    'md',
  },
})

/* ─────────────────────────────────────────────────────────
   SPINNER — internal only, not exported
───────────────────────────────────────────────────────── */
function ButtonSpinner({ className }: { className?: string }) {
  return (
    <Loader2
      className={cn('animate-spin', className)}
      aria-hidden="true"
    />
  )
}

/* ─────────────────────────────────────────────────────────
   BUTTON PROPS
───────────────────────────────────────────────────────── */
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?:   boolean
  leftIcon?:  React.ReactNode
  rightIcon?: React.ReactNode
  /**
   * Appends an animated ArrowRight that translates on hover.
   * Use only on primary CTAs. Overrides rightIcon when set.
   */
  withArrow?: boolean
}

/* ─────────────────────────────────────────────────────────
   BUTTON
───────────────────────────────────────────────────────── */
export function Button({
  variant,
  size,
  loading = false,
  leftIcon,
  rightIcon,
  withArrow = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const resolvedRightIcon = withArrow ? (
    <ArrowRight
      aria-hidden="true"
      className="transition-transform duration-[var(--duration-fast)] ease-[var(--ease-smooth)] group-hover:translate-x-1"
    />
  ) : rightIcon

  const resolvedLeftIcon = loading ? <ButtonSpinner /> : leftIcon

  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {resolvedLeftIcon}
      {children}
      {resolvedRightIcon}
    </button>
  )
}

/* ─────────────────────────────────────────────────────────
   EXPORTS — keep buttonVariants exported for shadcn compat
───────────────────────────────────────────────────────── */
export { buttonVariants }
