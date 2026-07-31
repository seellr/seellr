import { cn } from '@/lib/utils'

export type FieldState = 'default' | 'invalid' | 'success'

/**
 * Maps field validation state to border + focus-ring classes.
 * Import in every input component — never duplicate these strings.
 */
const STATE_CLASSES: Record<FieldState, string> = {
  default: 'border-border focus:border-ring focus:ring-2 focus:ring-ring/20',
  invalid: 'border-brand-danger focus:border-brand-danger focus:ring-2 focus:ring-brand-danger/20',
  success: 'border-brand-success focus:border-brand-success focus:ring-2 focus:ring-brand-success/20',
}

export function getFieldState(invalid?: boolean, success?: boolean): FieldState {
  if (invalid) return 'invalid'
  if (success) return 'success'
  return 'default'
}

export function fieldClasses(state: FieldState, extra?: string): string {
  return cn(STATE_CLASSES[state], extra)
}

/**
 * Base classes shared by Input, Textarea, Select.
 * Apply alongside fieldClasses().
 */
export const INPUT_BASE =
  'flex w-full rounded-md border bg-background text-sm text-foreground ' +
  'placeholder:text-muted-foreground ' +
  'transition-[border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-smooth)] ' +
  'focus:outline-none ' +
  'disabled:cursor-not-allowed disabled:opacity-40 disabled:pointer-events-none ' +
  'read-only:cursor-default read-only:bg-brand-surface'
