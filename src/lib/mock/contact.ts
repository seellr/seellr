export interface ContactChannel {
  id: string
  label: string
  value: string
  description: string
  icon: string
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'sales',
    label: 'Sales',
    value: 'sales@seellr.com',
    description: 'Questions about plans, pricing, or custom deals.',
    icon: 'Mail',
  },
  {
    id: 'support',
    label: 'Support',
    value: 'help@seellr.com',
    description: 'Technical issues, account questions, billing.',
    icon: 'LifeBuoy',
  },
  {
    id: 'hours',
    label: 'Support hours',
    value: 'Mon – Fri, 9am – 6pm UTC',
    description: 'We typically reply within 4 business hours.',
    icon: 'Clock',
  },
]

export const CONTACT_SUBJECTS = [
  { value: 'sales',     label: 'Sales enquiry' },
  { value: 'support',  label: 'Technical support' },
  { value: 'billing',  label: 'Billing question' },
  { value: 'feature',  label: 'Feature request' },
  { value: 'other',    label: 'Other' },
] as const
