export interface FeatureCard {
  id: string
  eyebrow: string
  title: string
  description: string
  cta: { label: string; href: string }
  image: string
  imageAlt: string
  reversed: boolean
}

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 'fc-website',
    eyebrow: 'Website Builder',
    title: 'A beautiful website, built in minutes',
    description:
      'Drag-and-drop sections, 200+ templates, and live preview. No code required — but every pixel is yours to control.',
    cta: { label: 'Explore the builder', href: '/features' },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    imageAlt: 'Laptop on a desk showing a website being designed',
    reversed: false,
  },
  {
    id: 'fc-ecommerce',
    eyebrow: 'Ecommerce',
    title: 'Sell anything, to anyone, anywhere',
    description:
      'A fully-featured store with Stripe payments, inventory management, and abandoned cart recovery — ready to go live today.',
    cta: { label: 'Start selling', href: '/features' },
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80',
    imageAlt: 'Premium product photography for an ecommerce store',
    reversed: true,
  },
  {
    id: 'fc-bookings',
    eyebrow: 'Booking System',
    title: 'Let clients book you 24/7',
    description:
      'Automated reminders, calendar sync, and online payments. Turn every slot into revenue without lifting a finger.',
    cta: { label: 'See how bookings work', href: '/features' },
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80',
    imageAlt: 'Calendar and scheduling planner',
    reversed: false,
  },
  {
    id: 'fc-crm',
    eyebrow: 'CRM',
    title: 'Every customer, in one clean view',
    description:
      'Contact management, deal pipelines, and email sequences — all the sales power you need, none of the complexity you hate.',
    cta: { label: 'Explore the CRM', href: '/features' },
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    imageAlt: 'Team collaborating in a modern office',
    reversed: true,
  },
  {
    id: 'fc-analytics',
    eyebrow: 'Analytics',
    title: 'Know your numbers, always',
    description:
      'Real-time visitors, revenue tracking, and conversion funnels — presented clearly, without needing a data science degree.',
    cta: { label: 'See analytics in action', href: '/features' },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    imageAlt: 'Analytics dashboard with revenue and conversion charts',
    reversed: false,
  },
]
