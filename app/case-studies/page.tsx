import type { Metadata } from 'next'
import { Footer, Navbar, SectionLabel, WhatsAppButton } from '@/components/site-shell'
import { ProjectGallery } from '@/components/feature-experience'
export const metadata: Metadata = { title: 'Solar case studies | Richa Enterprises', description: 'Explore premium residential, commercial and industrial solar installations across Maharashtra.' }
export default function Page() { return <><main><section className="bg-primary pb-16 pt-32 text-white"><Navbar /><div className="container-site"><SectionLabel>Selected work</SectionLabel><h1 className="max-w-3xl font-display text-5xl font-semibold tracking-tight sm:text-6xl">Proof, not promises.</h1><p className="mt-5 max-w-xl text-white/70">Explore the systems, decisions and outcomes behind solar projects delivered across Maharashtra.</p></div></section><section className="section-pad"><div className="container-site"><ProjectGallery /></div></section></main><Footer /><WhatsAppButton /></> }
