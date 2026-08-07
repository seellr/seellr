import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { FeaturesHero }        from '@/features/features/components/FeaturesHero'
import { FeaturesOverview }    from '@/features/features/components/FeaturesOverview'
import { FeaturesStickyTour }  from '@/features/features/components/FeaturesStickyTour'
import { FeaturesFaq }         from '@/features/features/components/FeaturesFaq'
import { FeaturesCta }         from '@/features/features/components/FeaturesCta'

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore every Seellr feature — website builder, ecommerce, CRM, bookings, and analytics in one platform.',
  openGraph: {
    title: 'Features — Seellr',
    description:
      'Everything your business needs: website builder, ecommerce, CRM, bookings, and analytics.',
  },
}

export default function FeaturesPage() {
  return (
    <PageWrapper aria-label="Features">
      <FeaturesHero />
      <FeaturesOverview />
      <FeaturesStickyTour />
      <FeaturesFaq />
      <FeaturesCta />
    </PageWrapper>
  )
}
