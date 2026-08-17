import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const sans = DM_Sans({ subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600', '700'] })
const display = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sora', weight: ['500', '600', '700', '800'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://richaenterprises.example'),
  title: { default: 'Richa Enterprises | Rooftop Solar in Nagpur & Maharashtra', template: '%s | Richa Enterprises' },
  description: 'A premium solar partner for homes, businesses and industries in Nagpur and across Maharashtra. Thoughtful design, precise installation, lasting performance.',
  keywords: ['premium solar company in Nagpur', 'rooftop solar Nagpur', 'commercial solar Maharashtra', 'industrial solar Nagpur', 'Richa Enterprises solar'],
  openGraph: { type: 'website', locale: 'en_IN', siteName: 'Richa Enterprises', title: 'Power your future with solar', description: 'Trusted solar design and installation in Nagpur and Maharashtra by Richa Enterprises.' },
  twitter: { card: 'summary_large_image', title: 'Richa Enterprises | Solar for Maharashtra', description: 'Clean energy, engineered for your roof.' },
  robots: { index: true, follow: true },
}
export const viewport: Viewport = { themeColor: '#164b37', colorScheme: 'light', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${sans.variable} ${display.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
