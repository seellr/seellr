import type { InputHTMLAttributes, ReactNode, Ref } from 'react'
import { cn } from '@/lib/utils'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  ref?: Ref<HTMLInputElement>
  label?: ReactNode
  hint?: string
  invalid?: boolean
}

export function Checkbox({
  ref,
  label,
  hint,
  invalid,
  className,
  id,
  ...props
}: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        'group inline-flex cursor-pointer items-start gap-3',
        props.disabled && 'cursor-not-allowed opacity-40',
        className
      )}
    >
      {/* Native input — hidden, drives all state via peer CSS */}
      <input
        ref={ref}
        id={id}
        type="checkbox"
        aria-invalid={invalid || undefined}
        className="peer sr-only"
        {...props}
      />

      {/* Visual indicator */}
      <span
        aria-hidden="true"
        className={cn(
          'relative mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border',
          'bg-background transition-[background-color,border-color,box-shadow]',
          'duration-[var(--duration-fast)] ease-[var(--ease-smooth)]',
          // Unchecked
          invalid ? 'border-brand-danger' : 'border-border',
          // Checked
          'peer-checked:border-foreground peer-checked:bg-foreground',
          // Checkmark via after pseudo-element
          'after:absolute after:content-[""]',
          'after:left-[3px] after:top-[1px] after:h-[9px] after:w-[5px]',
          'after:rotate-[45deg]',
          'after:border-b-[2px] after:border-r-[2px] after:border-white',
          'after:opacity-0 after:transition-opacity after:duration-[var(--duration-fast)]',
          'peer-checked:after:opacity-100',
          // Focus ring
          'peer-focus-visible:ring-2 peer-focus-visible:ring-brand-accent peer-focus-visible:ring-offset-2',
          // Indeterminate
          'peer-indeterminate:border-foreground peer-indeterminate:bg-foreground',
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
