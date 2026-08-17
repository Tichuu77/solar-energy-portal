import type { Metadata } from 'next'
import { Footer, Navbar, SectionLabel, WhatsAppButton } from '@/components/site-shell'
import { ProductGrid } from '@/components/feature-experience'
export const metadata: Metadata = { title: 'Solar products | Surya Urja', description: 'Explore the panels, inverters and storage systems selected by Surya Urja.' }
export default function Page() { return <><main><section className="bg-primary pb-16 pt-32 text-white"><Navbar /><div className="container-site"><SectionLabel>Our equipment standard</SectionLabel><h1 className="max-w-3xl font-display text-5xl font-semibold tracking-tight sm:text-6xl">Components worth building around.</h1><p className="mt-5 max-w-xl text-white/70">We select dependable, high-performance equipment for the conditions your roof actually faces.</p></div></section><section className="section-pad"><div className="container-site"><ProductGrid /></div></section></main><Footer /><WhatsAppButton /></> }
