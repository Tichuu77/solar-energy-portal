import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, MapPin, ShieldCheck, Sun, Zap } from 'lucide-react'
import { Footer, Navbar, SectionLabel, WhatsAppButton } from '@/components/site-shell'
import { company, projects } from '@/lib/site-data'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projects.find((item) => item.slug === slug)
    return {
      title: project ? `${project.name} - ${project.capacity} Solar Installation | Richa Enterprises` : 'Solar Project | Richa Enterprises',
      description: project ? `${project.description} Located at ${project.fullAddress}.` : 'Rooftop solar project by Richa Enterprises.'
    }
  })
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) notFound()

  return (
    <>
      <main className="bg-background min-h-screen">
        <section className="bg-primary pb-16 pt-32 text-white">
          <Navbar />
          <div className="container-site">
            <Link href="/projects" className="mb-6 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition">
              <ArrowLeft size={16} /> Back to all projects
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                {project.type}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                {project.capacity} System
              </span>
              <span className="rounded-full bg-emerald-500/20 text-emerald-300 px-3 py-1 text-xs font-medium">
                {project.savings}
              </span>
            </div>
            <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-6xl text-balance">
              {project.name}
            </h1>
            <p className="mt-4 flex items-center gap-2 text-white/75 text-sm sm:text-base">
              <MapPin size={18} className="text-accent shrink-0" /> {project.fullAddress}
            </p>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-site grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div className="space-y-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-lg bg-muted">
                <Image
                  src={project.image}
                  alt={`${project.name} solar panel structure in ${project.location}`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>

              <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-base">{project.description}</p>

                <div className="mt-8 border-t border-border pt-6">
                  <h3 className="font-display text-lg font-semibold mb-4 text-foreground">Key Installation Highlights</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3 rounded-xl bg-secondary/60 p-3.5">
                        <CheckCircle2 size={18} className="text-primary shrink-0" />
                        <span className="text-sm font-medium text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                <h2 className="font-display text-xl font-semibold mb-6">Technical Specifications</h2>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Zap size={16} className="text-primary" /> Installed Capacity
                    </span>
                    <span className="font-semibold text-foreground">{project.capacity}</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Sun size={16} className="text-primary" /> Structure Type
                    </span>
                    <span className="font-semibold text-foreground">{project.structureType}</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Calendar size={16} className="text-primary" /> Commissioned
                    </span>
                    <span className="font-semibold text-foreground">{project.completionDate}</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <ShieldCheck size={16} className="text-primary" /> Expected Savings
                    </span>
                    <span className="font-semibold text-emerald-700">{project.savings}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <MapPin size={16} className="text-primary" /> Region
                    </span>
                    <span className="font-semibold text-foreground">{project.location}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-primary p-8 text-white shadow-xl">
                <SectionLabel>Solar for your roof</SectionLabel>
                <h3 className="mt-2 font-display text-2xl font-semibold">Want a similar setup for your roof?</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Get a free custom rooftop survey and savings report tailored for your property in {project.location}.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi Richa Enterprises, I saw your project "${project.name}" in ${project.location} and would like to inquire about a solar system for my rooftop.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition hover:opacity-95"
                  >
                    Inquire on WhatsApp <ArrowRight size={16} />
                  </a>
                  <Link
                    href="/solar-calculator"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Calculate Solar Potential
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
