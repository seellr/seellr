import type { Ref, TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { INPUT_BASE, fieldClasses, getFieldState } from '@/lib/utils/form'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: Ref<HTMLTextAreaElement>
  invalid?: boolean
  success?: boolean
  /**
   * Applies resize-none — useful when controlling height via rows prop.
   */
  noResize?: boolean
}

export function Textarea({
  ref,
  invalid,
  success,
  noResize,
  className,
  ...props
}: TextareaProps) {
  const state = getFieldState(invalid, success)

  return (
    <textarea
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        INPUT_BASE,
        'min-h-[100px] px-3 py-2.5',
        noResize && 'resize-none',
        fieldClasses(state),
        className
      )}
      {...props}
    />
  )
}
