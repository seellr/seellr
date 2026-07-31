import { Mail, LifeBuoy, Clock } from 'lucide-react'
import type { LucideIcon }       from 'lucide-react'
import { BaseCard }              from '@/components/ui/BaseCard'
import { FadeUp }                from '@/components/animations/FadeUp'
import { CONTACT_CHANNELS }      from '@/lib/mock/contact'

const ICON_MAP: Record<string, LucideIcon> = { Mail, LifeBuoy, Clock }

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <FadeUp>
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Other ways to reach us
        </p>
      </FadeUp>

      <div className="flex flex-col gap-3">
        {CONTACT_CHANNELS.map((channel, index) => {
          const Icon = ICON_MAP[channel.icon]
          return (
            <FadeUp key={channel.id} delay={index * 0.07}>
              <BaseCard padding="md" className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                  {Icon && <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />}
                </span>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold text-foreground">{channel.label}</p>
                  <p className="text-sm text-foreground">{channel.value}</p>
                  <p className="text-xs text-muted-foreground">{channel.description}</p>
                </div>
              </BaseCard>
            </FadeUp>
          )
        })}
      </div>
    </div>
  )
}
