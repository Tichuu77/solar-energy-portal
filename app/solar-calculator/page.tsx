import type { Metadata } from 'next'
import { Navbar, Footer, WhatsAppButton, SectionLabel } from '@/components/site-shell'
import { SolarCalculator } from '@/components/solar-tools'
export const metadata: Metadata = { title: 'Solar Calculator for Nagpur', description: 'Estimate your rooftop solar system size, savings, cost and payback.' }
export default function Page(){ return <><main><section className="bg-primary pb-16 pt-32 text-white"><Navbar/><div className="container-site"><SectionLabel>Solar calculator</SectionLabel><h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">Put a number on your sunshine.</h1><p className="mt-5 max-w-xl text-white/70">An indicative estimate for your home or business in Maharashtra. The more we know, the clearer the picture.</p></div></section><section className="section-pad"><div className="container-site"><SolarCalculator/></div></section></main><Footer/><WhatsAppButton/></> }
