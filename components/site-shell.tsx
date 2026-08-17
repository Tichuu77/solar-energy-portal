'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ArrowRight, ChevronDown, Menu, X, MessageCircle, Sun, CheckCircle2, Home, Building2, Factory, Zap, Phone, MapPin } from 'lucide-react'
import { company, navLinks } from '@/lib/site-data'

export function Icon({ name, size = 24 }: { name: string; size?: number }) { const props = { size, strokeWidth: 1.8 }; if (name === 'home') return <Home {...props}/>; if (name === 'building') return <Building2 {...props}/>; if (name === 'factory') return <Factory {...props}/>; return <Sun {...props}/> }
export function Navbar() { 
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#091e16]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3.5' : 'bg-gradient-to-b from-[#091e16]/80 to-transparent py-5 border-b border-white/[0.06]'}`}>
      <div className="container-site flex items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3 text-white">
          <div className="relative size-10 overflow-hidden rounded-xl bg-white shadow-sm shrink-0 border border-white/20">
            <Image src="/logo.jpg" alt="Richa Enterprises Logo" fill className="object-contain p-0.5" />
          </div>
          <span className="font-display text-xl font-semibold tracking-tighter">richa<span className="text-accent">enterprises</span></span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link)=>(
            <Link key={link.href} href={link.href} className="focus-ring relative text-[13px] font-medium uppercase tracking-wide text-white/85 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-accent after:transition-all hover:after:w-full">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary rounded-full text-[13px] py-2.5 px-5">
            Get a free quote <ArrowRight size={15}/>
          </Link>
        </nav>
        <button aria-label={open ? 'Close menu' : 'Open menu'} onClick={()=>setOpen(!open)} className="focus-ring rounded-lg p-2 text-white md:hidden">
          {open?<X/>:<Menu/>}
        </button>
      </div>
      {open&&<div className="container-site pt-3 pb-4 md:hidden">
        <nav className="grid gap-1 rounded-3xl bg-[#091e16] p-4 shadow-2xl border border-white/10 backdrop-blur-xl">
          {navLinks.map((link)=>(
            <Link onClick={()=>setOpen(false)} key={link.href} href={link.href} className="rounded-xl p-3 text-sm font-medium text-white hover:bg-white/10 transition">{link.label}</Link>
          ))}
          <Link onClick={()=>setOpen(false)} href="/contact" className="btn-primary mt-2 rounded-full text-[13px] justify-center">Get a free quote <ArrowRight size={16}/></Link>
        </nav>
      </div>}
    </header>
  )
}

export function WhatsAppButton() { 
  return (
    <a 
      aria-label="Chat with Richa Enterprises on WhatsApp" 
      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello, I am interested in installing solar at my property in Nagpur. I would like a free consultation.')}`} 
      target="_blank" 
      rel="noreferrer" 
      className="focus-ring fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#1e8e55] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(30,142,85,.35)] transition-all duration-300 hover:bg-[#167845] hover:shadow-[0_14px_30px_rgba(30,142,85,.45)] hover:-translate-y-1 active:translate-y-0"
    >
      <span className="relative flex size-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex size-2.5 rounded-full bg-white"></span>
      </span>
      <MessageCircle size={18}/>
      <span>WhatsApp us</span>
    </a>
  )
}
export function Footer() { return <footer className="bg-[#091e16] py-20 text-white"><div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-12" /><div className="container-site grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]"><div><div className="mb-5 flex items-center gap-3"><div className="relative size-10 overflow-hidden rounded-xl bg-white shadow-sm shrink-0 border border-white/20"><Image src="/logo.jpg" alt="Richa Enterprises Logo" fill className="object-contain p-0.5" /></div><span className="font-display text-xl font-semibold tracking-tighter">richa<span className="text-accent">enterprises</span></span></div><div className="mb-5 h-px w-8 bg-white/20" /><p className="max-w-sm text-sm leading-6 text-white/60">Thoughtful solar systems for the homes, businesses and industries powering Maharashtra forward.</p></div><div><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-accent">Explore</p><div className="grid gap-3 text-sm text-white/65"><Link href="/about" className="transition-colors duration-200 hover:text-white hover:underline underline-offset-4">About us</Link><Link href="/solutions/residential" className="transition-colors duration-200 hover:text-white hover:underline underline-offset-4">Residential solar</Link><Link href="/solutions/commercial" className="transition-colors duration-200 hover:text-white hover:underline underline-offset-4">Commercial solar</Link><Link href="/solutions/industrial" className="transition-colors duration-200 hover:text-white hover:underline underline-offset-4">Industrial solar</Link><Link href="/case-studies" className="transition-colors duration-200 hover:text-white hover:underline underline-offset-4">Case studies</Link><Link href="/products" className="transition-colors duration-200 hover:text-white hover:underline underline-offset-4">Solar products</Link><Link href="/book-consultation" className="transition-colors duration-200 hover:text-white hover:underline underline-offset-4">Book consultation</Link><Link href="/projects" className="transition-colors duration-200 hover:text-white hover:underline underline-offset-4">Our projects</Link><Link href="/solar-calculator" className="transition-colors duration-200 hover:text-white hover:underline underline-offset-4">Solar calculator</Link><Link href="/blog" className="transition-colors duration-200 hover:text-white hover:underline underline-offset-4">Insights</Link></div></div><div><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-accent">Connect</p><div className="grid gap-3 text-sm text-white/65"><a href={`tel:${company.phone}`} className="flex items-center gap-2 transition-colors duration-200 hover:text-white hover:underline underline-offset-4"><Phone size={15}/> {company.phone}</a><a href={`mailto:${company.email}`} className="transition-colors duration-200 hover:text-white hover:underline underline-offset-4">{company.email}</a><span className="flex items-center gap-2"><MapPin size={15}/> {company.city}</span></div></div></div><div className="container-site mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row"><span>© 2026 Richa Enterprises. Built for a brighter Maharashtra.</span><div className="flex gap-4"><Link href="/privacy-policy" className="transition-colors duration-200 hover:text-white hover:underline underline-offset-4">Privacy</Link><Link href="/terms-and-conditions" className="transition-colors duration-200 hover:text-white hover:underline underline-offset-4">Terms</Link></div></div></footer> }
export function SectionLabel({ children }: { children: React.ReactNode }) { return <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.22em] text-primary"><span className="h-[2px] w-6 rounded-full bg-accent"/>{children}</p> }
export function FAQ() { const [active, setActive] = useState(0); const { faqs } = require('@/lib/site-data') as typeof import('@/lib/site-data'); return <div className="grid gap-3">{faqs.map((faq, i)=><div key={faq.q} className="border-b border-border/60"><button className="focus-ring flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-semibold" onClick={()=>setActive(active===i?-1:i)} aria-expanded={active===i}>{faq.q}<ChevronDown className={`shrink-0 transition-transform duration-300 ${active===i?'rotate-180':''}`} size={18}/></button><div className={`grid transition-all duration-300 ease-in-out ${active===i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}><div className="overflow-hidden"><p className="max-w-2xl pb-5 text-sm leading-6 text-muted-foreground">{faq.a}</p></div></div></div>)}</div> }
export { ArrowRight, CheckCircle2, Zap }
