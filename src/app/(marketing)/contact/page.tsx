import type { Metadata }      from 'next'
import { PageWrapper }        from '@/components/layout/PageWrapper'
import { ContactHero }        from '@/features/contact/components/ContactHero'
import { ContactCalendly }    from '@/features/contact/components/ContactCalendly'
import { ContactMain }        from '@/features/contact/components/ContactMain'
import { ContactFaq }         from '@/features/contact/components/ContactFaq'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with the Seellr team. We reply within 4 business hours.',
  openGraph: {
    title: 'Contact — Seellr',
    description:
      'Sales, support, or just a question — we\'re here to help.',
  },
}

export default function ContactPage() {
  return (
    <PageWrapper aria-label="Contact Seellr">
      <ContactHero />
      <ContactCalendly />
      <ContactMain />
      <ContactFaq />
    </PageWrapper>
  )
}
