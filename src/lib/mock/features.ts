export interface Feature {
  id: string
  title: string
  description: string
  benefits: string[]
  icon: string
  category: 'website' | 'ecommerce' | 'bookings' | 'crm' | 'analytics'
}

export const FEATURES: Feature[] = [
  {
    id: 'feat-1',
    category: 'website',
    icon: 'Globe',
    title: 'Website Builder',
    description:
      'Design stunning websites with a pixel-perfect builder that feels fast and intentional.',
    benefits: [
      'Drag-and-drop sections',
      '200+ premium templates',
      'Mobile-first responsive',
      'Custom domain + SSL',
    ],
  },
  {
    id: 'feat-2',
    category: 'ecommerce',
    icon: 'ShoppingBag',
    title: 'Ecommerce Store',
    description:
      'Launch a fully-featured store with payments, inventory, and shipping built in.',
    benefits: [
      'Stripe & PayPal payments',
      'Inventory management',
      'Discount codes',
      'Abandoned cart recovery',
    ],
  },
  {
    id: 'feat-3',
    category: 'bookings',
    icon: 'Calendar',
    title: 'Booking System',
    description:
      'Let clients book appointments 24/7 with automated reminders and calendar sync.',
    benefits: [
      'Calendar integration',
      'Automated reminders',
      'Team scheduling',
      'Online payments',
    ],
  },
  {
    id: 'feat-4',
    category: 'crm',
    icon: 'Users',
    title: 'CRM',
    description:
      'Manage every customer relationship in one clean, powerful dashboard.',
    benefits: [
      'Contact management',
      'Deal pipeline',
      'Email sequences',
      'Activity tracking',
    ],
  },
  {
    id: 'feat-5',
    category: 'analytics',
    icon: 'BarChart2',
    title: 'Analytics',
    description:
      'Understand your business with real-time data, without the complexity.',
    benefits: [
      'Real-time visitors',
      'Revenue tracking',
      'Conversion funnels',
      'Custom reports',
    ],
  },
]
