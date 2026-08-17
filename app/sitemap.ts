import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://richaenterprises.in'
  return [
    '',
    '/about',
    '/solutions/residential',
    '/solutions/commercial',
    '/solutions/industrial',
    '/residential-solar',
    '/commercial-solar',
    '/industrial-solar',
    '/projects',
    '/case-studies',
    '/products',
    '/book-consultation',
    '/solar-calculator',
    '/contact',
    '/blog',
    '/privacy-policy',
    '/terms-and-conditions'
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7
  }))
}
