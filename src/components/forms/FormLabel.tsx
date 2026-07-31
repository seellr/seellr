import type { LabelHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
  srOnly?: boolean
}

export function FormLabel({
  required,
  srOnly,
  className,
  children,
  ...props
}: FormLabelProps) {
  return (
    <label
      className={cn(
        'block text-sm font-medium text-foreground leading-none',
        srOnly && 'sr-only',
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span
          className="ml-0.5 text-brand-danger"
          aria-hidden="true"
        >
          *
        </span>
      )}
    </label>
  )
}
