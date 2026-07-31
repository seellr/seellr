export interface BlogAuthor {
  name: string
  avatar: string
  role: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  thumbnail: string
  author: BlogAuthor
  publishedAt: string
  updatedAt: string
  wordCount: number
  featured: boolean
}

export const BLOG_CATEGORIES = ['all', 'product', 'design', 'growth', 'engineering'] as const

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'introducing-seellr-analytics',
    title: 'Introducing Seellr Analytics: Real-time insights without the noise',
    excerpt:
      'We built analytics that actually answers the questions business owners care about — not just vanity metrics.',
    content: '',
    category: 'product',
    tags: ['analytics', 'product', 'launch'],
    thumbnail: '/blog/analytics-launch.jpg',
    author: { name: 'Maya Patel', avatar: '/avatars/maya-patel.jpg', role: 'Product Lead' },
    publishedAt: '2026-07-10T09:00:00Z',
    updatedAt: '2026-07-10T09:00:00Z',
    wordCount: 1200,
    featured: true,
  },
  {
    id: 'blog-2',
    slug: 'designing-for-conversion',
    title: 'How we design templates that convert, not just impress',
    excerpt:
      'Beautiful design that drives zero conversions is just decoration. Here\'s our framework for both.',
    content: '',
    category: 'design',
    tags: ['design', 'conversion', 'templates'],
    thumbnail: '/blog/design-conversion.jpg',
    author: { name: 'Leo Kim', avatar: '/avatars/leo-kim.jpg', role: 'Design Lead' },
    publishedAt: '2026-07-01T09:00:00Z',
    updatedAt: '2026-07-01T09:00:00Z',
    wordCount: 950,
    featured: false,
  },
]
