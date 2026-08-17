import type { Metadata } from 'next'
import { InternalPage } from '@/components/internal-page'
export const metadata: Metadata = { title: 'Privacy Policy | Richa Enterprises', description: 'Privacy information for Richa Enterprises website visitors.' }
export default function Page() { return <InternalPage title="Privacy policy." intro="We use the information you share to respond to enquiries, prepare estimates and improve your experience. We do not sell your personal information." eyebrow="Your privacy" bullets={['Only relevant information','No unnecessary sharing','Contact us with questions']} /> }
