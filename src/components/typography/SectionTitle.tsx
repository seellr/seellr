import { cn } from '@/lib/utils'
import { Heading } from './Heading'
import { Label } from './Label'
import { Text } from './Text'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center' | 'right'
  /**
   * Heading size for the title.
   * h2 is the default for section-level headings.
   */
  headingSize?: 'h1' | 'h2' | 'h3'
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}

const alignClasses = {
  left:   'items-start text-left',
  center: 'items-center text-center',
  right:  'items-end text-right',
} as const

const descriptionMaxWidth = {
  left:   '',
  center: 'max-w-[45rem]',
  right:  '',
} as const

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  headingSize = 'h2',
  className,
  titleClassName,
  descriptionClassName,
}: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col gap-4', alignClasses[align], className)}>
      {eyebrow && (
        <Label variant="overline" aria-label={`Section: ${eyebrow}`}>
          {eyebrow}
        </Label>
      )}

      <Heading
        size={headingSize}
        className={cn('max-w-[40rem]', titleClassName)}
      >
        {title}
      </Heading>

      {description && (
        <Text
          size="lg"
          balance
          className={cn(
            'max-w-prose',
            descriptionMaxWidth[align],
            descriptionClassName
          )}
        >
          {description}
        </Text>
      )}
    </div>
  )
}
