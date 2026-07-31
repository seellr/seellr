import type { InputHTMLAttributes, ReactNode, Ref } from 'react'
import { cn } from '@/lib/utils'

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  ref?: Ref<HTMLInputElement>
  label?: ReactNode
  hint?: string
  invalid?: boolean
}

export function Radio({
  ref,
  label,
  hint,
  invalid,
  className,
  id,
  ...props
}: RadioProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        'group inline-flex cursor-pointer items-start gap-3',
        props.disabled && 'cursor-not-allowed opacity-40',
        className
      )}
    >
      {/* Native input */}
      <input
        ref={ref}
        id={id}
        type="radio"
        aria-invalid={invalid || undefined}
        className="peer sr-only"
        {...props}
      />

      {/* Visual indicator */}
      <span
        aria-hidden="true"
        className={cn(
          'relative mt-0.5 inline-flex h-4 w-4 shrink-0 rounded-full border',
          'bg-background transition-[background-color,border-color,box-shadow]',
          'duration-[var(--duration-fast)] ease-[var(--ease-smooth)]',
          invalid ? 'border-brand-danger' : 'border-border',
          'peer-checked:border-foreground peer-checked:bg-foreground',
          // Center dot via after pseudo-element
          'after:absolute after:content-[""]',
          'after:left-1/2 after:top-1/2 after:h-[6px] after:w-[6px]',
          'after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white',
          'after:opacity-0 after:transition-opacity after:duration-[var(--duration-fast)]',
          'peer-checked:after:opacity-100',
          // Focus ring
          'peer-focus-visible:ring-2 peer-focus-visible:ring-brand-accent peer-focus-visible:ring-offset-2',
        )}
      />

      {(label || hint) && (
        <span className="flex flex-col gap-0.5">
          {label && (
            <span className="text-sm font-medium leading-none text-foreground">
              {label}
            </span>
          )}
          {hint && (
            <span className="text-xs text-muted-foreground">
              {hint}
            </span>
          )}
        </span>
      )}
    </label>
  )
}
