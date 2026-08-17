import type { Metadata } from 'next'
import { InternalPage } from '@/components/internal-page'

export const metadata: Metadata = {
  title: 'Residential Solar Solutions | Richa Enterprises',
  description: 'Thoughtful rooftop solar systems for homes in Nagpur and across Maharashtra.',
}

export default function Page() {
  return <InternalPage title="A better roof for home." intro="Make your home more independent with a residential solar system designed around your family, your roof and your monthly bill." eyebrow="Residential solar solutions" bullets={['Lower monthly electricity bills', 'A system sized for your home', 'Clear guidance from survey to support']} />
}
