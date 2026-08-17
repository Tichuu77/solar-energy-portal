'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Check, CalendarDays, MapPin, Phone, User } from 'lucide-react'
import { company, projects } from '@/lib/site-data'
import { products } from '@/lib/feature-data'

export function ProjectGallery() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Residential', 'Commercial', 'Industrial']
  const visible = projects.filter((project) => filter === 'All' || project.type === filter)
  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`rounded-full border px-4 py-2 text-sm transition font-medium ${
              filter === item
                ? 'border-primary bg-primary text-white shadow-sm'
                : 'border-border bg-white text-muted-foreground hover:border-primary hover:text-foreground'
            }`}
          >
            {item} {item !== 'All' && `(${projects.filter((p) => p.type === item).length})`}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
        {visible.map((project) => (
          <article
            key={project.slug}
            className="group flex flex-col overflow-hidden rounded-2xl sm:rounded-[1.5rem] border border-border bg-white shadow-sm transition hover:shadow-lg hover:-translate-y-0.5"
          >
            <Link href={`/projects/${project.slug}`} className="flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={`${project.name} solar project in ${project.location}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute top-2 left-2 rounded-full bg-black/60 backdrop-blur-md px-2 py-0.5 text-[10px] sm:text-xs font-semibold text-white">
                  {project.capacity}
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-3 sm:p-6">
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] text-emerald-700 truncate">
                    {project.type} · {project.location}
                  </p>
                  <h2 className="mt-1 font-display text-xs sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {project.name}
                  </h2>
                  <p className="mt-1 text-[11px] sm:text-xs leading-4 sm:leading-5 text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="mt-3 sm:mt-6 flex flex-col sm:flex-row gap-1 sm:items-center justify-between border-t border-border pt-2 sm:pt-4 text-[10px] sm:text-xs font-medium">
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold w-fit">
                    {project.savings}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-primary group-hover:translate-x-1 transition-transform">
                    View <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

export function ProductGrid() { return <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3">{products.map((product) => <article key={product.slug} className="overflow-hidden rounded-2xl sm:rounded-[1.5rem] border border-border bg-card"><div className="relative aspect-[4/3]"><Image src={product.image} alt={product.name} fill className="object-cover" /></div><div className="p-3 sm:p-6"><p className="text-[10px] sm:text-xs font-bold uppercase tracking-[.16em] text-primary">{product.category}</p><h2 className="mt-1 font-display text-sm sm:text-xl font-semibold">{product.name}</h2><p className="mt-1 text-xs leading-4 sm:leading-6 text-muted-foreground line-clamp-2 sm:line-clamp-none">{product.description}</p><div className="mt-3 sm:mt-5 flex items-center justify-between border-t border-border pt-2 sm:pt-4 text-xs sm:text-sm font-semibold"><span>{product.spec}</span><Link href="/contact" className="text-primary">Enquire <ArrowRight className="inline" size={13} /></Link></div></div></article>)}</div> }

export function ConsultationBooking() { const [sent, setSent] = useState(false); return sent ? <div className="rounded-[1.5rem] border border-primary/20 bg-secondary p-8"><div className="grid size-12 place-items-center rounded-full bg-primary text-white"><Check /></div><h2 className="mt-5 font-display text-2xl font-semibold">Your consultation request is ready.</h2><p className="mt-2 text-muted-foreground">We&apos;ll call you to confirm the best time for a no-pressure site assessment.</p><a className="btn-primary mt-6 inline-flex" href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('I would like to book a solar consultation.')}`} target="_blank" rel="noreferrer">Confirm on WhatsApp <ArrowRight size={16} /></a></div> : <form onSubmit={(event) => { event.preventDefault(); setSent(true) }} className="grid gap-5 rounded-[1.5rem] border border-border bg-white p-6 shadow-sm md:p-8"><div className="grid gap-5 md:grid-cols-2"><label className="grid gap-2 text-sm font-semibold">Your name<div className="relative"><User className="absolute left-3 top-3.5 text-muted-foreground" size={17} /><input required className="field pl-10" placeholder="Aarav Sharma" /></div></label><label className="grid gap-2 text-sm font-semibold">Phone number<div className="relative"><Phone className="absolute left-3 top-3.5 text-muted-foreground" size={17} /><input required type="tel" className="field pl-10" placeholder="+91 98765 43210" /></div></label></div><div className="grid gap-5 md:grid-cols-2"><label className="grid gap-2 text-sm font-semibold">Preferred date<div className="relative"><CalendarDays className="absolute left-3 top-3.5 text-muted-foreground" size={17} /><input required type="date" className="field pl-10" /></div></label><label className="grid gap-2 text-sm font-semibold">Location<div className="relative"><MapPin className="absolute left-3 top-3.5 text-muted-foreground" size={17} /><input required className="field pl-10" placeholder="Nagpur, Maharashtra" /></div></label></div><label className="grid gap-2 text-sm font-semibold">What are you exploring?<select className="field"><option>Residential solar</option><option>Commercial solar</option><option>Industrial solar</option><option>Battery storage</option></select></label><button className="btn-primary mt-2 w-fit">Request consultation <ArrowRight size={16} /></button><p className="text-xs text-muted-foreground">No pressure. No obligation. Just clear solar advice for your property.</p></form> }
