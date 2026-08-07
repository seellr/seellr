import { HeroSection } from '@/features/home/components/HeroSection'
import { TrustedBySection } from '@/features/home/components/TrustedBySection'
import { StatsSection } from '@/features/home/components/StatsSection'
import { FeaturesSection } from '@/features/home/components/FeaturesSection'
import { ProductTourSection } from '@/features/home/components/ProductTourSection'
import { WebsiteBuilderSection } from '@/features/home/components/WebsiteBuilderSection'
import { CrmSection } from '@/features/home/components/CrmSection'
import { AnalyticsSection } from '@/features/home/components/AnalyticsSection'
import { BookingSection } from '@/features/home/components/BookingSection'
import { DashboardPreviewSection } from '@/features/home/components/DashboardPreviewSection'
import { TemplatesSection } from '@/features/home/components/TemplatesSection'
import { HowItWorksSection } from '@/features/home/components/HowItWorksSection'
import { TestimonialsSection } from '@/features/home/components/TestimonialsSection'
import { WhySeellrSection } from '@/features/home/components/WhySeellrSection'
import { CustomerSuccessSection } from '@/features/home/components/CustomerSuccessSection'
import { EnterpriseSection } from '@/features/home/components/EnterpriseSection'
import { PricingPreviewSection } from '@/features/home/components/PricingPreviewSection'
import { FaqSection } from '@/features/home/components/FaqSection'
import { FinalCtaSection } from '@/features/home/components/FinalCtaSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustedBySection />
      <StatsSection />
      <FeaturesSection />
      <ProductTourSection />
      <WebsiteBuilderSection />
      <CrmSection />
      <AnalyticsSection />
      <BookingSection />
      <DashboardPreviewSection />
      <TemplatesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <WhySeellrSection />
      <CustomerSuccessSection />
      <EnterpriseSection />
      <PricingPreviewSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  )
}
