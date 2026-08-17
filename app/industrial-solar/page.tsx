import type { Metadata } from 'next'
import { InternalPage } from '@/components/internal-page'
export const metadata: Metadata = { title: 'Industrial Solar Engineering', description: 'High-performance industrial solar systems for factories and facilities across Maharashtra.' }
export default function Page(){ return <InternalPage title="Serious power. Clean source." intro="Industrial solar for facilities that cannot afford guesswork. Our engineers plan for your load, your site, and your next chapter." eyebrow="Industrial solar engineering" bullets={['Engineered for demanding loads','High-performance components','Proactive service and monitoring']}/> }
