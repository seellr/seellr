import type { InputHTMLAttributes, Ref } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { INPUT_BASE, fieldClasses, getFieldState } from '@/lib/utils/form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>
  invalid?: boolean
  success?: boolean
  /**
   * Shows a spinner and sets readonly. Parent controls loading state.
   * Does NOT disable — allows form context to still read the value.
   */
  loading?: boolean
  /**
   * Optional leading icon slot (e.g. Search, Mail).
   */
  leadingIcon?: React.ReactNode
  /**
   * Optional trailing icon slot (e.g. Eye, X).
   */
  trailingIcon?: React.ReactNode
}

export function Input({
  ref,
  invalid,
  success,
  loading,
  leadingIcon,
  trailingIcon,
  className,
  disabled,
  ...props
}: InputProps) {
  const state   = getFieldState(invalid, success)
  const hasIcon = leadingIcon || trailingIcon || loading

  if (!hasIcon) {
    return (
      <input
        ref={ref}
        disabled={disabled || loading}
        aria-invalid={invalid || undefined}
        className={cn(
          INPUT_BASE,
          'h-11 px-3',
          fieldClasses(state),
          className
        )}
        {...props}
      />
    )
  }

  return (
    <div className="relative flex items-center">
      {leadingIcon && (
        <span className="pointer-events-none absolute left-3 text-muted-foreground [&>svg]:h-4 [&>svg]:w-4">
          {leadingIcon}
        </span>
      )}
      <input
        ref={ref}
        disabled={disabled || loading}
        readOnly={loading}
        aria-invalid={invalid || undefined}
        aria-busy={loading || undefined}
        className={cn(
          INPUT_BASE,
          'h-11',
          leadingIcon  ? 'pl-9'  : 'px-3',
          trailingIcon || loading ? 'pr-9' : 'px-3',
          fieldClasses(state),
          className
        )}
        {...props}
      />
      {(trailingIcon || loading) && (
        <span className="pointer-events-none absolute right-3 text-muted-foreground [&>svg]:h-4 [&>svg]:w-4">
          {loading
            ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            : trailingIcon}
        </span>
      )}
    </div>
  )
}
