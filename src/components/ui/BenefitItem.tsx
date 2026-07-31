import { Check } from 'lucide-react'

interface BenefitItemProps {
  label: string
}

export function BenefitItem({ label }: BenefitItemProps) {
  return (
    <li className="flex items-center gap-3">
      <span
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/15"
        aria-hidden="true"
      >
        <Check className="h-3 w-3 text-brand-accent" strokeWidth={2.5} />
      </span>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </li>
  )
}
