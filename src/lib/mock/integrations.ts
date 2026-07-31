export interface Integration {
  id: string
  name: string
  description: string
  category: string
  logo: string
  status: 'live' | 'coming_soon' | 'beta'
}

export const INTEGRATION_CATEGORIES = [
  'all',
  'payments',
  'email',
  'analytics',
  'crm',
  'shipping',
  'social',
] as const

export const INTEGRATIONS: Integration[] = [
  {
    id: 'int-stripe',
    name: 'Stripe',
    description: 'Accept payments with the world\'s leading payment platform.',
    category: 'payments',
    logo: '/integrations/stripe.svg',
    status: 'live',
  },
  {
    id: 'int-paypal',
    name: 'PayPal',
    description: 'Reach billions of buyers worldwide with PayPal checkout.',
    category: 'payments',
    logo: '/integrations/paypal.svg',
    status: 'live',
  },
  {
    id: 'int-mailchimp',
    name: 'Mailchimp',
    description: 'Sync contacts and automate email marketing campaigns.',
    category: 'email',
    logo: '/integrations/mailchimp.svg',
    status: 'live',
  },
  {
    id: 'int-ga',
    name: 'Google Analytics',
    description: 'Layer Google Analytics on top of Seellr\'s built-in analytics.',
    category: 'analytics',
    logo: '/integrations/google-analytics.svg',
    status: 'live',
  },
  {
    id: 'int-hubspot',
    name: 'HubSpot',
    description: 'Sync leads and deals with your HubSpot CRM.',
    category: 'crm',
    logo: '/integrations/hubspot.svg',
    status: 'beta',
  },
  {
    id: 'int-shopify',
    name: 'Shopify Import',
    description: 'Migrate your Shopify store to Seellr in minutes.',
    category: 'crm',
    logo: '/integrations/shopify.svg',
    status: 'coming_soon',
  },
]
