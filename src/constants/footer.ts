export interface FooterLink {
  label: string
  href:  string
}

export interface FooterColumn {
  id:    string
  title: string
  links: FooterLink[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id:    'company',
    title: 'Company',
    links: [
      { label: 'About',    href: '/about'   },
      { label: 'Blog',     href: '/blog'    },
      { label: 'Careers',  href: '/careers' },
      { label: 'Contact',  href: '/contact' },
    ],
  },
  {
    id:    'product',
    title: 'Product',
    links: [
      { label: 'Features',     href: '/features'     },
      { label: 'Pricing',      href: '/pricing'      },
      { label: 'Templates',    href: '/templates'    },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Changelog',    href: '/changelog'    },
      { label: 'Roadmap',      href: '/roadmap'      },
    ],
  },
  {
    id:    'resources',
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs'      },
      { label: 'API reference',  href: '/docs/api'  },
      { label: 'Community',      href: '/community' },
      { label: 'Status',         href: '/status'    },
    ],
  },
  {
    id:    'legal',
    title: 'Legal',
    links: [
      { label: 'Privacy',  href: '/privacy'  },
      { label: 'Terms',    href: '/terms'    },
      { label: 'Cookies',  href: '/cookies'  },
    ],
  },
]

export interface SocialLink {
  id:    string
  label: string
  href:  string
  icon:  string
}

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'twitter', label: 'Follow Seellr on X (Twitter)', href: 'https://x.com/seellr',          icon: 'Twitter'  },
  { id: 'github',  label: 'Seellr on GitHub',              href: 'https://github.com/seellr',     icon: 'Github'   },
  { id: 'linkedin',label: 'Seellr on LinkedIn',            href: 'https://linkedin.com/company/seellr', icon: 'Linkedin' },
]
