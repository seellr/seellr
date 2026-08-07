import type { Metadata } from 'next'
import { PageWrapper }    from '@/components/layout/PageWrapper'
import { AboutHero }      from '@/features/about/components/AboutHero'
import { AboutMission }   from '@/features/about/components/AboutMission'
import { AboutStats }     from '@/features/about/components/AboutStats'
import { AboutValues }    from '@/features/about/components/AboutValues'
import { AboutTimeline }  from '@/features/about/components/AboutTimeline'
import { AboutTeam }      from '@/features/about/components/AboutTeam'
import { AboutCta }       from '@/features/about/components/AboutCta'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about the team and mission behind Seellr — the all-in-one business platform built for modern online businesses.',
  openGraph: {
    title: 'About — Seellr',
    description:
      'We believe running a business online should feel effortless. Learn who we are and why we built Seellr.',
  },
}

export default function AboutPage() {
  return (
    <PageWrapper aria-label="About Seellr">
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutValues />
      <AboutTimeline />
      <AboutTeam />
      <AboutCta />
    </PageWrapper>
  )
}
