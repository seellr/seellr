export interface Template {
  id: string
  name: string
  description: string
  category: string
  thumbnail: string
  tags: string[]
  featured: boolean
}

export const TEMPLATE_CATEGORIES = [
  'all',
  'business',
  'portfolio',
  'ecommerce',
  'restaurant',
  'health',
  'creative',
] as const

export type TemplateCategory = (typeof TEMPLATE_CATEGORIES)[number]

export const TEMPLATES: Template[] = [
  {
    id: 'tpl-1',
    name: 'Luminary',
    description: 'A clean, modern template for agencies and studios.',
    category: 'business',
    thumbnail: '/templates/luminary.jpg',
    tags: ['agency', 'minimal', 'dark'],
    featured: true,
  },
  {
    id: 'tpl-2',
    name: 'Bloom',
    description: 'Warm and inviting design for health and wellness brands.',
    category: 'health',
    thumbnail: '/templates/bloom.jpg',
    tags: ['health', 'wellness', 'light'],
    featured: true,
  },
  {
    id: 'tpl-3',
    name: 'Craft',
    description: 'Editorial layout perfect for independent creators.',
    category: 'creative',
    thumbnail: '/templates/craft.jpg',
    tags: ['creative', 'editorial', 'bold'],
    featured: false,
  },
  {
    id: 'tpl-4',
    name: 'Marché',
    description: 'A premium ecommerce template with conversion-focused layouts.',
    category: 'ecommerce',
    thumbnail: '/templates/marche.jpg',
    tags: ['ecommerce', 'store', 'modern'],
    featured: true,
  },
  {
    id: 'tpl-5',
    name: 'Bistro',
    description: 'Elegant restaurant template with online booking built in.',
    category: 'restaurant',
    thumbnail: '/templates/bistro.jpg',
    tags: ['restaurant', 'food', 'booking'],
    featured: false,
  },
  {
    id: 'tpl-6',
    name: 'Folio',
    description: 'A minimal portfolio that lets your work speak for itself.',
    category: 'portfolio',
    thumbnail: '/templates/folio.jpg',
    tags: ['portfolio', 'minimal', 'light'],
    featured: false,
  },
]
