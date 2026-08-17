import type { Metadata } from 'next'
import { InternalPage } from '@/components/internal-page'
export const metadata: Metadata = { title: 'Terms and Conditions | Richa Enterprises', description: 'Terms for using the Richa Enterprises website and enquiry services.' }
export default function Page() { return <InternalPage title="Terms and conditions." intro="Our website provides general information and enquiry services. Final system specifications, pricing and installation terms are confirmed in your project proposal." eyebrow="Important information" bullets={['Transparent proposals','Project-specific scope','Human support']} /> }
