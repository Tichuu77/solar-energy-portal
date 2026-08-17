'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star, Sun, Zap, PhoneCall } from 'lucide-react'
import { calculateSolar } from '@/lib/calculator/solar-calculator'

const billPresets = [
  { label: '₹3,000 / mo', bill: 3000 },
  { label: '₹6,000 / mo', bill: 6000 },
  { label: '₹12,000 / mo', bill: 12000 },
  { label: '₹25,000 / mo', bill: 25000 },
]

export function HeroSection() {
  const [selectedBill, setSelectedBill] = useState(6000)
  const result = calculateSolar({ bill: selectedBill, tariff: 9, propertyType: 'home' })

  return (
    <section className="relative min-h-[90vh] lg:min-h-dvh overflow-hidden bg-[#091e16] text-white pt-28 pb-16 lg:pt-32 lg:pb-24">
      {/* Background ambient lighting and grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,167,44,0.18)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(15,43,34,0.8)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Background hero photo with dark gradient overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=85"
          alt="Solar rooftop background"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#091e16]/80 via-[#091e16]/90 to-[#091e16]" />

      <div className="container-site relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div>
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] backdrop-blur-md px-4 py-1.5 border border-white/10 text-xs font-semibold text-accent mb-6 shadow-sm">
              <span className="flex size-2 rounded-full bg-accent animate-pulse" />
              <Sun size={14} className="fill-accent text-accent" />
              <span>#1 Solar Partner in Nagpur & Vidarbha</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[3.8rem] font-bold leading-[1.05] tracking-tight text-balance">
              Turn your roof into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#f3cb63] to-accent">clean energy</span> powerhouse.
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl">
              Save up to <strong className="text-white font-semibold">90% on electricity bills</strong> with precision-engineered rooftop solar. Grid-connected with MSEDCL approval, PM Surya Ghar subsidy ready, and backed by a 25-year performance warranty.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link href="/solar-calculator" className="btn-primary rounded-full px-7 py-3.5 text-sm font-bold shadow-lg shadow-accent/20 transition hover:scale-[1.02]">
                Calculate your savings <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="btn-outline rounded-full px-6 py-3.5 text-sm font-semibold border-white/20 hover:bg-white/10">
                Book free site survey
              </Link>
            </div>

            {/* Trust Badges Bar */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div className="flex items-center gap-2.5">
                <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">25 Years</p>
                  <p className="text-[11px] text-white/60">Panel Warranty</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Zap size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">MSEDCL</p>
                  <p className="text-[11px] text-white/60">Grid Net Metering</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">₹78,000</p>
                  <p className="text-[11px] text-white/60">Govt Subsidy</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-accent text-accent" />
                ))}
              </div>
              <span className="text-xs font-semibold text-white/90">4.9/5</span>
              <span className="text-xs text-white/50">•</span>
              <span className="text-xs text-white/70 font-medium">Trusted by 1,200+ homeowners & businesses across Vidarbha</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Quick Estimator */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-accent/30 to-emerald-500/20 blur-xl opacity-60 pointer-events-none" />

            <div className="relative rounded-[2rem] border border-white/15 bg-[#0f2b22]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden">
              
              {/* Project Image Header */}
              <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                <Image
                  src="/proj-001.jpg"
                  alt="Rooftop solar project in Nagpur"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Badge top-left */}
                <div className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white border border-white/10 flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Real Installation • Nagpur</span>
                </div>

                {/* Floating Badge bottom-left */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div>
                    <p className="text-xs font-bold">Bajaria Residential Project</p>
                    <p className="text-[11px] text-white/75">5 kW Net-Metered Rooftop</p>
                  </div>
                  <span className="rounded-xl bg-accent text-accent-foreground px-2.5 py-1 text-xs font-bold">
                    ₹1.1L/yr saved
                  </span>
                </div>
              </div>

              {/* Interactive Quick Calculator Preview */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                    <Sparkles size={14} /> Quick Solar Calculator
                  </p>
                  <span className="text-[11px] text-white/60">Select your monthly bill</span>
                </div>

                {/* Bill Presets */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                  {billPresets.map((preset) => (
                    <button
                      key={preset.bill}
                      onClick={() => setSelectedBill(preset.bill)}
                      className={`rounded-xl py-2 px-2 text-xs font-semibold transition border ${
                        selectedBill === preset.bill
                          ? 'bg-accent text-accent-foreground border-accent shadow-md'
                          : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                {/* Calculation Results Card */}
                <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4 grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-[11px] text-white/60">System Size</p>
                    <p className="font-display text-xl font-bold text-accent mt-0.5">{result.capacity} kW</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-white/60">Annual Savings</p>
                    <p className="font-display text-xl font-bold text-white mt-0.5">₹{(result.annualSavings / 1000).toFixed(0)}k</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-white/60">Payback Time</p>
                    <p className="font-display text-xl font-bold text-emerald-400 mt-0.5">{result.payback} yrs</p>
                  </div>
                </div>

                {/* Action button inside card */}
                <Link
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I checked your hero calculator for a ₹${selectedBill} monthly bill. I'd like a free site survey.`)}`}
                  target="_blank"
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 py-3 text-xs font-bold text-white transition"
                >
                  <PhoneCall size={14} className="text-accent" />
                  Get Custom Quotation for {result.capacity} kW System
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom transition gradient */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
