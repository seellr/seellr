import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/* ─────────────────────────────────────────────────────────
   ICON BUTTON
   Square button for icon-only actions.
   aria-label is required — no text means no accessible name otherwise.
───────────────────────────────────────────────────────── */

const iconButtonVariants = cva(
  'relative inline-flex shrink-0 items-center justify-center rounded-full ' +
  'transition-[transform,box-shadow,background-color,border-color,opacity] ' +
  'duration-[var(--duration-normal)] ease-[var(--ease-smooth)] ' +
  'outline-none ' +
  'focus-visible:outline-none focus-visible:ring-2 ' +
  'focus-visible:ring-brand-accent focus-visible:ring-offset-2 ' +
  'disabled:pointer-events-none disabled:opacity-40 ' +
  'active:scale-[0.94] active:duration-[var(--duration-instant)] ' +
  '[&_svg]:pointer-events-none [&_svg]:shrink-0 select-none',
  {
    variants: {
      variant: {
        primary:
          'bg-foreground text-background ' +
          'hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(0,0,0,0.18)]',
        secondary:
          'bg-brand-surface text-foreground border border-brand-border ' +
          'hover:bg-background hover:border-foreground/20 hover:-translate-y-px',
        outline:
          'bg-transparent text-foreground border border-border ' +
          'hover:bg-brand-surface hover:border-foreground/20',
        ghost:
          'bg-transparent text-muted-foreground ' +
          'hover:bg-brand-surface hover:text-foreground',
        destructive:
          'bg-brand-danger/10 text-brand-danger ' +
          'hover:bg-brand-danger hover:text-white',
      },
      size: {
        sm: 'size-9  [&_svg]:size-4',
        md: 'size-11 [&_svg]:size-5',
        lg: 'size-12 [&_svg]:size-5',
      },
    },
    defaultVariants: {
      variant: 'ghost',
      size:    'md',
    },
  }
)

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  /**
   * Required — icon buttons have no visible text.
   * Describes the action to screen reader users.
   */
  'aria-label': string
}

export function IconButton({
  variant,
  size,
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(iconButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
}
