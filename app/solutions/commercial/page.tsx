import type { Metadata } from 'next'
import { InternalPage } from '@/components/internal-page'

export const metadata: Metadata = {
  title: 'Commercial Solar Solutions | Surya Urja',
  description: 'Commercial rooftop solar systems that make energy costs more predictable for Maharashtra businesses.',
}

export default function Page() {
  return <InternalPage title="Let your roof work harder." intro="Give your business a more predictable energy future with commercial solar engineered around your operations and growth." eyebrow="Commercial solar solutions" bullets={['Predictable operating costs', 'Minimal disruption to operations', 'Monitoring that keeps you informed']} />
}
