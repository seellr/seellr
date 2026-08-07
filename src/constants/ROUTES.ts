export const ROUTES = {
  HOME: '/',
  FEATURES: '/features',
  PRICING: '/pricing',
  TEMPLATES: '/templates',
  BLOG: '/blog',
  ABOUT: '/about',
  CONTACT: '/contact',
  FAQ: '/faq',
  CHANGELOG: '/changelog',
  ROADMAP: '/roadmap',
  CAREERS: '/careers',
  INTEGRATIONS: '/integrations',
  DOCS: '/docs',
  TERMS: '/legal/terms',
  PRIVACY: '/legal/privacy',
  COOKIES: '/legal/cookies',
} as const

export type Route = (typeof ROUTES)[keyof typeof ROUTES]
