import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from 'next/font/google'
import { Providers }   from '@/providers'
import { SITE_CONFIG } from '@/config/site'
import '@/styles/globals.css'

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['latin', 'arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default:  `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s — ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords:    ['website builder', 'ecommerce', 'SaaS', 'bookings', 'CRM', 'analytics'],
  authors:     [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator:     SITE_CONFIG.creator,
  robots:      { index: true, follow: true },
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         SITE_CONFIG.url,
    siteName:    SITE_CONFIG.name,
    title:       `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images:      [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images:      [SITE_CONFIG.ogImage],
    creator:     SITE_CONFIG.twitter,
  },
}

interface RootLayoutProps { children: React.ReactNode }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${ibmPlexArabic.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
