import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://surya-urja.example'),
  title: { default: 'Surya Urja | Rooftop Solar in Nagpur & Maharashtra', template: '%s | Surya Urja' },
  description: 'Premium rooftop solar installation for homes, businesses and industries in Nagpur and across Maharashtra. Save more with clean energy.',
  keywords: ['solar company in Nagpur', 'rooftop solar Nagpur', 'solar subsidy Maharashtra', 'MSEDCL rooftop solar'],
  openGraph: { type: 'website', locale: 'en_IN', siteName: 'Surya Urja', title: 'Power your future with solar', description: 'Trusted solar design and installation in Nagpur and Maharashtra.' },
  twitter: { card: 'summary_large_image', title: 'Surya Urja | Solar for Maharashtra', description: 'Clean energy, engineered for your roof.' },
  robots: { index: true, follow: true },
}
export const viewport: Viewport = { themeColor: '#164b37', colorScheme: 'light', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${inter.variable} ${sora.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
