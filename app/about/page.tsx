import type { Metadata } from 'next'
import { InternalPage } from '@/components/internal-page'
export const metadata: Metadata = { title: 'About Surya Urja', description: 'Learn about Surya Urja, a local solar partner for Maharashtra.' }
export default function Page() { return <InternalPage title="Solar, made human." intro="We help homes, businesses and industries in Maharashtra move toward cleaner, more predictable energy with clear advice and careful work." eyebrow="About Surya Urja" bullets={['Local Nagpur expertise','Clear recommendations','Support beyond installation']} /> }
