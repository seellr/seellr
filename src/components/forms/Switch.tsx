import type { InputHTMLAttributes, ReactNode, Ref } from 'react'
import { cn } from '@/lib/utils'

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  ref?: Ref<HTMLInputElement>
  label?: ReactNode
  hint?: string
  invalid?: boolean
}

export function Switch({
  ref,
  label,
  hint,
  invalid,
  className,
  id,
  ...props
}: SwitchProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        'group inline-flex cursor-pointer items-start gap-3',
        props.disabled && 'cursor-not-allowed opacity-40',
        className
      )}
    >
      {/* Native checkbox with role="switch" */}
      <input
        ref={ref}
        id={id}
        type="checkbox"
        role="switch"
        aria-invalid={invalid || undefined}
        className="peer sr-only"
        {...props}
      />

      {/*
        Track: sibling of input, uses peer-checked to flip bg.
        Thumb: ::after pseudo-element on the track, translates on peer-checked.
      */}
      <span
        aria-hidden="true"
        className={cn(
          'relative mt-0.5 h-5 w-9 shrink-0 rounded-full border-2',
          'transition-[background-color,border-color,box-shadow]',
          'duration-[var(--duration-normal)] ease-[var(--ease-smooth)]',
          // Unchecked track
          invalid
            ? 'border-brand-danger bg-brand-danger/10'
            : 'border-border bg-muted',
          // Checked track
          'peer-checked:border-foreground peer-checked:bg-foreground',
          // Thumb via after pseudo
          'after:absolute after:content-[""]',
          'after:left-0.5 after:top-0.5 after:h-3 after:w-3',
          'after:rounded-full after:bg-foreground/50',
          'after:transition-[transform,background-color] after:duration-[var(--duration-normal)] after:ease-[var(--ease-smooth)]',
          // Thumb color change on checked
          'peer-checked:after:translate-x-4 peer-checked:after:bg-white',
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
