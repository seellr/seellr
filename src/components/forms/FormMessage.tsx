import type { HTMLAttributes } from 'react'
import { AlertCircle, CheckCircle2, Info } from 'lucide-react'
import { cn } from '@/lib/utils'

type MessageVariant = 'error' | 'success' | 'hint'

const ICON: Record<MessageVariant, React.ReactNode> = {
  error:   <AlertCircle  className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />,
  success: <CheckCircle2 className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />,
  hint:    <Info         className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />,
}

const COLOR: Record<MessageVariant, string> = {
  error:   'text-brand-danger',
  success: 'text-brand-success',
  hint:    'text-muted-foreground',
}

interface FormMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: MessageVariant
  showIcon?: boolean
}

export function FormMessage({
  variant = 'error',
  showIcon = true,
  className,
  children,
  ...props
}: FormMessageProps) {
  if (!children) return null

  return (
    <p
      role={variant === 'error' ? 'alert' : undefined}
      aria-live={variant === 'error' ? 'polite' : undefined}
      className={cn(
        'flex items-start gap-1 text-xs',
        COLOR[variant],
        className
      )}
      {...props}
    >
      {showIcon && ICON[variant]}
      <span>{children}</span>
    </p>
  )
}
