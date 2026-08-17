import type { Metadata } from 'next'
import { InternalPage } from '@/components/internal-page'
export const metadata: Metadata = { title: 'Solar Insights | Surya Urja', description: 'Practical solar insights for homes and businesses in Maharashtra.' }
export default function Page() { return <InternalPage title="Useful solar insights." intro="Straightforward guidance on system sizing, energy savings, maintenance and making a confident solar decision." eyebrow="Insights" bullets={['Understand your usage','Plan with confidence','Keep your system performing']} /> }
