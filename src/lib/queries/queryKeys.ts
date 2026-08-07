export const queryKeys = {
  pricing: {
    all: () => ['pricing'] as const,
    plans: () => ['pricing', 'plans'] as const,
  },
  blog: {
    all: () => ['blog'] as const,
    list: (page: number) => ['blog', 'list', page] as const,
    detail: (slug: string) => ['blog', 'detail', slug] as const,
    categories: () => ['blog', 'categories'] as const,
  },
  templates: {
    all: () => ['templates'] as const,
    list: (category?: string) => ['templates', 'list', category] as const,
    detail: (slug: string) => ['templates', 'detail', slug] as const,
    categories: () => ['templates', 'categories'] as const,
  },
  testimonials: {
    all: () => ['testimonials'] as const,
  },
  stats: {
    all: () => ['stats'] as const,
  },
  faq: {
    all: () => ['faq'] as const,
    byCategory: (category: string) => ['faq', category] as const,
  },
  integrations: {
    all: () => ['integrations'] as const,
    byCategory: (category: string) => ['integrations', category] as const,
  },
} as const
