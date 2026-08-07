/**
 * Text-based company name placeholders for the Trusted By marquee.
 * Replace with real SVG logos once design assets are available.
 */
export const LOGO_NAMES = [
  'Notion',
  'Stripe',
  'Linear',
  'Vercel',
  'Shopify',
  'Figma',
  'Intercom',
  'Loom',
] as const

export type LogoName = (typeof LOGO_NAMES)[number]
