import type { Metadata } from 'next'
import { InternalPage } from '@/components/internal-page'

export const metadata: Metadata = {
  title: 'Industrial Solar Solutions | Richa Enterprises',
  description: 'Industrial rooftop solar systems engineered for factories and high-demand facilities across Maharashtra.',
}

export default function Page() {
  return <InternalPage title="Serious power. Clean source." intro="Industrial solar for facilities that cannot afford guesswork. We plan around your load, site, safety requirements and future growth." eyebrow="Industrial solar solutions" bullets={['Engineered for demanding loads', 'High-performance components', 'Proactive service and monitoring']} />
}
