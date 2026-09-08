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
    icon: 'Eye',
    title: 'Clarity',
    description:
      'We simplify complexity into intuitive experiences. Every feature is designed to be immediately understood — no manuals, no guesswork.',
  },
  {
    id: 'val-2',
    icon: 'Shield',
    title: 'Trust',
    description:
      'We build reliable tools that give creators confidence. Your data is safe, your payments are secure, your platform is always on.',
  },
  {
    id: 'val-3',
    icon: 'Brain',
    title: 'Intelligence',
    description:
      'Smart technology powers better business decisions. From analytics to automation, we give you the insights to grow with purpose.',
  },
  {
    id: 'val-4',
    icon: 'TrendingUp',
    title: 'Growth',
    description:
      'We design that turns knowledge into sustainable business. Every tool is built to help you scale — from first sale to global reach.',
  },
  {
    id: 'val-5',
    icon: 'Globe',
    title: 'Inclusivity',
    description:
      'Truly bilingual — Arabic and English are equally native. Built ground-up for the Arab market with region-specific payment solutions.',
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
