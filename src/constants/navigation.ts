export interface NavItem {
  label: string
  href: string
  /** Opens a mega menu panel on desktop, expands features on mobile. */
  megaMenu?: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Product',   href: '/features',  megaMenu: true },
  { label: 'Templates', href: '/templates' },
  { label: 'Pricing',   href: '/pricing' },
  { label: 'Blog',      href: '/blog' },
]
