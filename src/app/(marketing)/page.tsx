import dynamic from 'next/dynamic'

// ── Above the fold — static imports for LCP & SEO ─────────────
import { HeroSection } from '@/features/home/components/HeroSection'
import { TrustedBySection } from '@/features/home/components/TrustedBySection'
import { StatsSection } from '@/features/home/components/StatsSection'
import { FeaturesSection } from '@/features/home/components/FeaturesSection'

// ── Below the fold — code-split via next/dynamic (SSR kept on) ─

const ProductTourSection = dynamic(() =>
  import('@/features/home/components/ProductTourSection').then(m => m.ProductTourSection)
)

const WebsiteBuilderSection = dynamic(() =>
  import('@/features/home/components/WebsiteBuilderSection').then(m => m.WebsiteBuilderSection)
)

const CrmSection = dynamic(() =>
  import('@/features/home/components/CrmSection').then(m => m.CrmSection)
)

const AnalyticsSection = dynamic(
  () => import('@/features/home/components/AnalyticsSection').then(m => m.AnalyticsSection),
  {
    loading: () => (
      <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <div className="h-4 w-24 animate-pulse rounded bg-muted" />
            <div className="h-8 w-72 animate-pulse rounded bg-muted" />
            <div className="h-4 w-64 animate-pulse rounded bg-muted" />
            <div className="mt-4 flex flex-col gap-3">
              <div className="h-10 w-full animate-pulse rounded-xl bg-muted" />
              <div className="h-10 w-full animate-pulse rounded-xl bg-muted" />
            </div>
          </div>
          <div className="h-[320px] w-full animate-pulse rounded-2xl bg-muted lg:h-[400px]" />
        </div>
      </section>
    ),
  }
)

const BookingSection = dynamic(() =>
  import('@/features/home/components/BookingSection').then(m => m.BookingSection)
)

const DashboardPreviewSection = dynamic(
  () => import('@/features/home/components/DashboardPreviewSection').then(m => m.DashboardPreviewSection),
  {
    loading: () => (
      <section className="relative w-full overflow-hidden bg-foreground py-20 text-background md:py-28 lg:py-40">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="h-4 w-28 animate-pulse rounded bg-white/10" />
            <div className="h-8 w-80 animate-pulse rounded bg-white/10" />
            <div className="h-4 w-64 animate-pulse rounded bg-white/10" />
          </div>
          <div className="h-[300px] w-full animate-pulse rounded-2xl bg-white/5 lg:h-[420px]" />
        </div>
      </section>
    ),
  }
)

const TemplatesSection = dynamic(() =>
  import('@/features/home/components/TemplatesSection').then(m => m.TemplatesSection)
)

const HowItWorksSection = dynamic(() =>
  import('@/features/home/components/HowItWorksSection').then(m => m.HowItWorksSection)
)

const TestimonialsSection = dynamic(() =>
  import('@/features/home/components/TestimonialsSection').then(m => m.TestimonialsSection)
)

const WhySeellrSection = dynamic(() =>
  import('@/features/home/components/WhySeellrSection').then(m => m.WhySeellrSection)
)

const CustomerSuccessSection = dynamic(() =>
  import('@/features/home/components/CustomerSuccessSection').then(m => m.CustomerSuccessSection)
)

const EnterpriseSection = dynamic(() =>
  import('@/features/home/components/EnterpriseSection').then(m => m.EnterpriseSection)
)

const PricingPreviewSection = dynamic(() =>
  import('@/features/home/components/PricingPreviewSection').then(m => m.PricingPreviewSection)
)

const FaqSection = dynamic(() =>
  import('@/features/home/components/FaqSection').then(m => m.FaqSection)
)

const FinalCtaSection = dynamic(() =>
  import('@/features/home/components/FinalCtaSection').then(m => m.FinalCtaSection)
)

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
