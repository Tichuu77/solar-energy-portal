import type { Metadata } from 'next'
import { InternalPage } from '@/components/internal-page'
export const metadata: Metadata = { title: 'Commercial Solar Solutions', description: 'Commercial rooftop solar systems that make energy costs more predictable for Maharashtra businesses.' }
export default function Page(){ return <InternalPage title="Let your roof work harder." intro="Give your business a more predictable energy future with commercial solar engineered around your operations and your growth." eyebrow="Commercial solar for Maharashtra" bullets={['Predictable operating costs','Minimal disruption to operations','Monitoring that keeps you informed']}/> }
