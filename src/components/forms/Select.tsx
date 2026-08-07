import type { Ref, SelectHTMLAttributes } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { INPUT_BASE, fieldClasses, getFieldState } from '@/lib/utils/form'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  ref?: Ref<HTMLSelectElement>
  invalid?: boolean
  success?: boolean
  options?: SelectOption[]
  placeholder?: string
}

export function Select({
  ref,
  invalid,
  success,
  options,
  placeholder,
  className,
  children,
  ...props
}: SelectProps) {
  const state = getFieldState(invalid, success)

  return (
    <div className="relative">
      <select
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          INPUT_BASE,
          'h-11 cursor-pointer appearance-none px-3 pr-10',
          fieldClasses(state),
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options
          ? options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))
          : children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
    </div>
  )
}
