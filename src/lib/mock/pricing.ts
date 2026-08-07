export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  price: number
  featured: boolean
  cta: string
  features: PricingFeature[]
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for solopreneurs and personal projects.',
    price: 19,
    featured: false,
    cta: 'Start free trial',
    features: [
      { text: '1 website',              included: true  },
      { text: 'Custom domain',          included: true  },
      { text: 'SSL certificate',        included: true  },
      { text: '5 GB storage',           included: true  },
      { text: 'Basic analytics',        included: true  },
      { text: '1 team member',          included: true  },
      { text: 'Ecommerce store',        included: false },
      { text: 'CRM & pipeline',         included: false },
      { text: 'Booking system',         included: false },
      { text: 'Advanced analytics',     included: false },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'For growing businesses that need the full stack.',
    price: 49,
    featured: true,
    cta: 'Start free trial',
    features: [
      { text: '5 websites',             included: true  },
      { text: 'Custom domain',          included: true  },
      { text: 'SSL certificate',        included: true  },
      { text: '50 GB storage',          included: true  },
      { text: 'Advanced analytics',     included: true  },
      { text: 'Up to 3 team members',   included: true  },
      { text: 'Ecommerce (500 products)', included: true },
      { text: 'CRM & pipeline',         included: true  },
      { text: 'Booking system',         included: false },
      { text: 'Priority email support', included: true  },
    ],
  },
  {
    id: 'business',
    name: 'Business',
    description: 'For teams that need the complete business suite.',
    price: 99,
    featured: false,
    cta: 'Start free trial',
    features: [
      { text: 'Unlimited websites',     included: true  },
      { text: 'Custom domain',          included: true  },
      { text: 'SSL certificate',        included: true  },
      { text: 'Unlimited storage',      included: true  },
      { text: 'Advanced analytics',     included: true  },
      { text: 'Unlimited team members', included: true  },
      { text: 'Ecommerce (unlimited)',  included: true  },
      { text: 'CRM & pipeline',         included: true  },
      { text: 'Booking system',         included: true  },
      { text: 'Priority phone support', included: true  },
    ],
  },
]

// ── Comparison table ──────────────────────────────────────────────────────────

/** Cell value: true = check, false = dash, string = literal text. */
export type ComparisonValue = boolean | string

export interface ComparisonRow {
  feature: string
  starter:  ComparisonValue
  growth:   ComparisonValue
  business: ComparisonValue
}

export interface ComparisonCategory {
  title: string
  rows: ComparisonRow[]
}

export const COMPARISON_CATEGORIES: ComparisonCategory[] = [
  {
    title: 'Websites',
    rows: [
      { feature: 'Number of websites',  starter: '1',         growth: '5',           business: 'Unlimited' },
      { feature: 'Custom domain',        starter: true,        growth: true,           business: true },
      { feature: 'SSL certificate',      starter: true,        growth: true,           business: true },
      { feature: 'Storage',             starter: '5 GB',      growth: '50 GB',        business: 'Unlimited' },
      { feature: 'Bandwidth',           starter: '50 GB',     growth: '500 GB',       business: 'Unlimited' },
      { feature: 'Password protection', starter: false,       growth: true,           business: true },
    ],
  },
  {
    title: 'Ecommerce',
    rows: [
      { feature: 'Online store',          starter: false,      growth: true,           business: true },
      { feature: 'Products',              starter: false,      growth: '500',          business: 'Unlimited' },
      { feature: 'Transaction fee',       starter: false,      growth: '2%',           business: '0%' },
      { feature: 'Abandoned cart emails', starter: false,      growth: true,           business: true },
      { feature: 'Discount codes',        starter: false,      growth: true,           business: true },
      { feature: 'Inventory management',  starter: false,      growth: false,          business: true },
    ],
  },
  {
    title: 'CRM',
    rows: [
      { feature: 'Contact management',  starter: false,       growth: true,           business: true },
      { feature: 'Deal pipeline',       starter: false,       growth: true,           business: true },
      { feature: 'Email sequences',     starter: false,       growth: '3 sequences',  business: 'Unlimited' },
      { feature: 'Activity tracking',   starter: false,       growth: true,           business: true },
      { feature: 'Team members',        starter: '1',         growth: '3',            business: 'Unlimited' },
    ],
  },
  {
    title: 'Bookings',
    rows: [
      { feature: 'Calendar booking',    starter: false,       growth: false,          business: true },
      { feature: 'Automated reminders', starter: false,       growth: false,          business: true },
      { feature: 'Team scheduling',     starter: false,       growth: false,          business: true },
      { feature: 'Online payments',     starter: false,       growth: false,          business: true },
    ],
  },
  {
    title: 'Analytics',
    rows: [
      { feature: 'Page views',          starter: true,        growth: true,           business: true },
      { feature: 'Traffic sources',     starter: false,       growth: true,           business: true },
      { feature: 'Conversion tracking', starter: false,       growth: true,           business: true },
      { feature: 'Revenue reports',     starter: false,       growth: true,           business: true },
      { feature: 'Custom dashboards',   starter: false,       growth: false,          business: true },
    ],
  },
  {
    title: 'Support',
    rows: [
      { feature: 'Support channel',    starter: 'Email',     growth: 'Email + Chat', business: 'Priority' },
      { feature: 'Response time',      starter: '48 hours',  growth: '8 hours',      business: '1 hour' },
      { feature: 'Onboarding call',    starter: false,       growth: false,          business: true },
    ],
  },
]
