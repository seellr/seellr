export interface Value {
  id: string
  icon: string
  title: string
  description: string
}

export interface Milestone {
  id: string
  year: string
  title: string
  description: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  initials: string
  /** Tailwind bg class for avatar placeholder */
  color: string
}

export const VALUES: Value[] = [
  {
    id: 'val-1',
    icon: 'Zap',
    title: 'Speed first',
    description:
      'Every product decision starts with speed — of the builder, of the output, of the workflow. Slow is a bug.',
  },
  {
    id: 'val-2',
    icon: 'Shield',
    title: 'Honest defaults',
    description:
      'No dark patterns, no artificial feature gates, no surprise charges. What you see in the trial is what you get.',
  },
  {
    id: 'val-3',
    icon: 'Users',
    title: 'Customer-led',
    description:
      'Every major feature in Seellr came directly from a customer conversation. We build what gets asked, not what looks good in a pitch deck.',
  },
  {
    id: 'val-4',
    icon: 'Globe',
    title: 'Built to last',
    description:
      'We write software that works in five years. No hyped re-writes, no abandoned integrations, no sunset dates.',
  },
  {
    id: 'val-5',
    icon: 'BarChart2',
    title: 'Transparent growth',
    description:
      'We share our numbers publicly — MRR, churn, uptime. Accountability makes us better.',
  },
  {
    id: 'val-6',
    icon: 'Calendar',
    title: 'Long-term thinking',
    description:
      'We optimise for a 10-year relationship with each customer, not a quarterly sprint to conversion.',
  },
]

export const TIMELINE: Milestone[] = [
  {
    id: 'ms-1',
    year: '2021',
    title: 'Founded',
    description:
      'Seellr started as a side project after its founders got frustrated managing five different tools to run a single online store.',
  },
  {
    id: 'ms-2',
    year: '2022',
    title: 'Website builder launched',
    description:
      'The core website builder shipped to 200 beta users. First paying customer signed up on day three.',
  },
  {
    id: 'ms-3',
    year: '2023',
    title: 'Ecommerce & CRM added',
    description:
      'Seellr expanded to a full business suite. Reached 10,000 businesses and closed a seed round.',
  },
  {
    id: 'ms-4',
    year: '2024',
    title: 'Analytics & Bookings',
    description:
      'Launched native analytics and a booking system, completing the five-pillar platform. Crossed $1M ARR.',
  },
  {
    id: 'ms-5',
    year: '2025',
    title: '120,000+ businesses',
    description:
      'Seellr became the fastest-growing all-in-one platform for SMBs with teams across three continents.',
  },
]

export const TEAM: TeamMember[] = [
  { id: 'tm-1', name: 'Alex Rivera',   role: 'Co-founder & CEO',     initials: 'AR', color: 'bg-brand-accent/20' },
  { id: 'tm-2', name: 'Jamie Park',    role: 'Co-founder & CTO',     initials: 'JP', color: 'bg-brand-blue/30' },
  { id: 'tm-3', name: 'Morgan Ellis',  role: 'Head of Design',       initials: 'ME', color: 'bg-purple-100' },
  { id: 'tm-4', name: 'Taylor Kim',    role: 'Head of Product',      initials: 'TK', color: 'bg-amber-100' },
  { id: 'tm-5', name: 'Jordan Osei',   role: 'Head of Engineering',  initials: 'JO', color: 'bg-brand-accent/15' },
  { id: 'tm-6', name: 'Casey Müller',  role: 'Head of Growth',       initials: 'CM', color: 'bg-rose-100' },
  { id: 'tm-7', name: 'Riley Santos',  role: 'Lead Designer',        initials: 'RS', color: 'bg-sky-100' },
  { id: 'tm-8', name: 'Drew Nakamura', role: 'Senior Engineer',      initials: 'DN', color: 'bg-brand-blue/20' },
]
