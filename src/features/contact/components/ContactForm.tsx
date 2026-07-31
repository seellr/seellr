'use client'

import { useState }        from 'react'
import { useForm }         from 'react-hook-form'
import { zodResolver }     from '@hookform/resolvers/zod'
import { z }               from 'zod'
import { CheckCircle2 }    from 'lucide-react'
import { Input }           from '@/components/forms/Input'
import { Textarea }        from '@/components/forms/Textarea'
import { Select }          from '@/components/forms/Select'
import { FormItem }        from '@/components/forms/FormItem'
import { FormLabel }       from '@/components/forms/FormLabel'
import { FormMessage }     from '@/components/forms/FormMessage'
import { BaseCard }        from '@/components/ui/BaseCard'
import { CONTACT_SUBJECTS } from '@/lib/mock/contact'

const contactSchema = z.object({
  name:    z.string().min(2,   'Name must be at least 2 characters.'),
  email:   z.string().email(   'Please enter a valid email address.'),
  subject: z.string().min(1,   'Please select a subject.'),
  message: z.string().min(20,  'Message must be at least 20 characters.'),
})

type ContactFields = z.infer<typeof contactSchema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFields>({ resolver: zodResolver(contactSchema) })

  async function onSubmit(_data: ContactFields) {
    // Simulate network latency; replace with real API call later.
    await new Promise<void>((resolve) => setTimeout(resolve, 900))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <BaseCard padding="lg" className="flex flex-col items-center gap-4 py-14 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-success/10">
          <CheckCircle2 className="h-6 w-6 text-brand-success" aria-hidden="true" />
        </span>
        <div className="flex flex-col gap-1.5">
          <p className="text-base font-semibold text-foreground">Message sent!</p>
          <p className="text-sm text-muted-foreground">
            We typically reply within 4 business hours.
          </p>
        </div>
      </BaseCard>
    )
  }

  return (
    <BaseCard padding="lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-label="Contact form"
        className="flex flex-col gap-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <FormItem>
            <FormLabel htmlFor="contact-name" required>Name</FormLabel>
            <Input
              id="contact-name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              invalid={!!errors.name}
              {...register('name')}
            />
            <FormMessage>{errors.name?.message}</FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel htmlFor="contact-email" required>Email</FormLabel>
            <Input
              id="contact-email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              invalid={!!errors.email}
              {...register('email')}
            />
            <FormMessage>{errors.email?.message}</FormMessage>
          </FormItem>
        </div>

        <FormItem>
          <FormLabel htmlFor="contact-subject" required>Subject</FormLabel>
          <Select
            id="contact-subject"
            placeholder="Select a topic"
            options={CONTACT_SUBJECTS.map((s) => ({ value: s.value, label: s.label }))}
            invalid={!!errors.subject}
            {...register('subject')}
          />
          <FormMessage>{errors.subject?.message}</FormMessage>
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="contact-message" required>Message</FormLabel>
          <Textarea
            id="contact-message"
            rows={5}
            noResize
            placeholder="Tell us how we can help…"
            invalid={!!errors.message}
            {...register('message')}
          />
          <FormMessage>{errors.message?.message}</FormMessage>
        </FormItem>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-foreground px-6 text-sm font-semibold text-background transition-[opacity,transform] duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </BaseCard>
  )
}
