import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/config/site'

interface PageMetadataOptions {
  title: string
  description?: string
  ogImage?: string
  canonical?: string
  noIndex?: boolean
}

export function createPageMetadata({
  title,
  description,
  ogImage,
  canonical,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const resolvedDescription = description ?? SITE_CONFIG.description
  const resolvedOgImage = ogImage ?? SITE_CONFIG.ogImage
  const resolvedCanonical = canonical ? `${SITE_CONFIG.url}${canonical}` : undefined

  return {
    title: `${title} — ${SITE_CONFIG.name}`,
    description: resolvedDescription,
    metadataBase: new URL(SITE_CONFIG.url),
    ...(resolvedCanonical && { alternates: { canonical: resolvedCanonical } }),
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: `${title} — ${SITE_CONFIG.name}`,
      description: resolvedDescription,
      url: resolvedCanonical ?? SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [{ url: resolvedOgImage, width: 1200, height: 630, alt: title }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — ${SITE_CONFIG.name}`,
      description: resolvedDescription,
      images: [resolvedOgImage],
      creator: SITE_CONFIG.twitter,
    },
  }
}
