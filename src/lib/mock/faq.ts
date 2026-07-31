export interface FaqItem {
  id: string
  question: string
  answer: string
  category: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What is Seellr?',
    answer:
      'Seellr is a premium all-in-one business platform that lets you build websites, run an ecommerce store, manage bookings, handle your CRM, and track analytics — all from one place.',
  },
  {
    id: 'faq-2',
    category: 'general',
    question: 'Do I need technical skills to use Seellr?',
    answer:
      'No. Seellr is designed for business owners, not developers. You can build a fully functional website and storefront without writing a single line of code.',
  },
  {
    id: 'faq-3',
    category: 'pricing',
    question: 'Is there a free trial?',
    answer:
      'Yes. Every plan includes a 14-day free trial with full access to all features. No credit card required.',
  },
  {
    id: 'faq-4',
    category: 'pricing',
    question: 'Can I switch plans later?',
    answer:
      'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.',
  },
  {
    id: 'faq-5',
    category: 'technical',
    question: 'Can I use a custom domain?',
    answer:
      'Yes. All plans support custom domains. Simply connect your domain through your DNS provider and Seellr handles the rest, including SSL.',
  },
  {
    id: 'faq-6',
    category: 'technical',
    question: 'How fast are Seellr websites?',
    answer:
      'Seellr websites are built on a global CDN and optimized for Core Web Vitals. Typical LCP scores are under 1.5 seconds.',
  },
]

export const FAQ_CATEGORIES = ['general', 'pricing', 'technical'] as const
