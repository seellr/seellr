import { Navbar }           from '@/components/layout/Navbar'
import { AnnouncementBar }  from '@/components/layout/AnnouncementBar'
import { Footer }           from '@/components/layout/Footer'

interface MarketingLayoutProps { children: React.ReactNode }

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <AnnouncementBar
        id="analytics-launch-v1"
        badge="New"
        message="Analytics dashboard is now live"
        linkText="Learn more"
        linkHref="/changelog"
        dismissible
      />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
