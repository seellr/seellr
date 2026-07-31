export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  content: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah Chen',
    role: 'Founder',
    company: 'Luminary Studio',
    avatar: '/avatars/sarah-chen.jpg',
    rating: 5,
    content:
      'Seellr replaced four different tools for us. Our website, store, and booking system all live in one place now. The builder is genuinely fast.',
  },
  {
    id: 't-2',
    name: 'Marcus Webb',
    role: 'Head of Growth',
    company: 'Orbit Commerce',
    avatar: '/avatars/marcus-webb.jpg',
    rating: 5,
    content:
      "We migrated from Shopify and saw a 30% improvement in page speed immediately. The analytics dashboard is exactly what we needed.",
  },
  {
    id: 't-3',
    name: 'Priya Sharma',
    role: 'CEO',
    company: 'Bloom Health',
    avatar: '/avatars/priya-sharma.jpg',
    rating: 5,
    content:
      'The booking system alone is worth the price. Our clients love it and we saved hours every week on scheduling.',
  },
  {
    id: 't-4',
    name: 'James O\'Brien',
    role: 'Creative Director',
    company: 'Craft & Co.',
    avatar: '/avatars/james-obrien.jpg',
    rating: 5,
    content:
      'Every template felt thoughtfully designed, not like generic drag-and-drop results. We launched in three days.',
  },
  {
    id: 't-5',
    name: 'Lena Fischer',
    role: 'Operations Manager',
    company: 'Peak Agency',
    avatar: '/avatars/lena-fischer.jpg',
    rating: 5,
    content:
      'The CRM integrates seamlessly with the website and store. Managing customer relationships has never been simpler.',
  },
]
