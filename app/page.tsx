import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BadgeIndianRupee, Check, ChevronRight, Landmark, Play, Quote, Star, Sun, Zap, Zap as ZapIcon } from 'lucide-react'
import { benefits, steps, projects, solutions, testimonials, brandPartners, governmentSchemes, recentProjects } from '@/lib/site-data'
import { FAQ, Footer, Icon, Navbar, SectionLabel, WhatsAppButton } from '@/components/site-shell'
import { SolarCalculator } from '@/components/solar-tools'
import { HeroSection } from '@/components/hero-section'

export default function Page() {
  return (
    <>
      <main>
        {/* Navbar */}
        <Navbar />

        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Stats bar */}
        <section className="bg-white/80 backdrop-blur-xl border-b border-border/50 py-5 sm:py-9">
          <div className="container-site grid grid-cols-4 gap-2 sm:gap-6">
            <div className="text-center sm:text-left">
              <p className="font-display text-lg sm:text-[2rem] font-bold tracking-tight">1,200+</p>
              <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground truncate">installed</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display text-lg sm:text-[2rem] font-bold tracking-tight">12 MW+</p>
              <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground truncate">capacity</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display text-lg sm:text-[2rem] font-bold tracking-tight">25 yrs</p>
              <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground truncate">warranty</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display text-lg sm:text-[2rem] font-bold tracking-tight">4.9/5</p>
              <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground truncate">rating</p>
            </div>
          </div>
        </section>

        {/* 3. Benefits "Why solar, why now" */}
        <section className="section-pad">
          <div className="container-site">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <SectionLabel>Why solar, why now</SectionLabel>
                <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
                  The smartest energy decision is already above you.
                </h2>
                <p className="mt-4 sm:mt-5 max-w-md text-sm sm:text-base leading-6 sm:leading-7 text-muted-foreground">
                  Energy costs are rising. The sun isn&apos;t going anywhere. We make the switch feel simple, honest, and worth it.
                </p>
                <Link href="/about" className="mt-5 sm:mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Why Richa Enterprises <ArrowRight size={16} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-px overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-border">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="bg-card p-4 sm:p-8 transition hover:bg-secondary/50 hover:shadow-[0_1px_3px_rgba(0,0,0,.02)]">
                    <div className="mb-3 sm:mb-5 grid size-9 sm:size-11 place-items-center rounded-xl sm:rounded-2xl bg-secondary text-primary">
                      <Icon name={benefit.icon} size={18} />
                    </div>
                    <h3 className="font-display text-xs sm:text-base font-semibold">{benefit.title}</h3>
                    <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm leading-4 sm:leading-6 text-muted-foreground">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Solutions "Solar that fits your world" */}
        <section id="solutions" className="bg-[#e7efe7] section-pad">
          <div className="container-site">
            <div className="mb-8 sm:mb-12 flex flex-col justify-between gap-3 sm:gap-5 md:flex-row md:items-end">
              <div>
                <SectionLabel>Solutions for every roof</SectionLabel>
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Solar that fits your world.</h2>
              </div>
              <p className="max-w-sm text-xs sm:text-sm leading-5 sm:leading-6 text-muted-foreground">
                One team. Every scale. From your first question to your first lower bill.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:grid-cols-3">
              {solutions.map((solution) => (
                <Link href={solution.href} key={solution.title} className="group flex min-h-[200px] sm:min-h-[270px] flex-col justify-between rounded-2xl sm:rounded-3xl bg-white p-3.5 sm:p-7 transition shadow-[0_2px_8px_rgba(0,0,0,.03)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,.08)]">
                  <div>
                    <div className="mb-4 sm:mb-8 flex size-10 sm:size-14 items-center justify-center rounded-xl sm:rounded-[1.1rem] bg-gradient-to-br from-primary to-primary/80 border border-white/20 shadow-inner text-white">
                      <Icon name={solution.icon} size={20} />
                    </div>
                    <h3 className="font-display text-xs sm:text-xl font-semibold">{solution.title}</h3>
                    <p className="mt-1 sm:mt-3 text-[11px] sm:text-sm leading-4 sm:leading-6 text-muted-foreground line-clamp-2 sm:line-clamp-none">{solution.text}</p>
                  </div>
                  <span className="flex items-center gap-1 sm:gap-2 text-[11px] sm:text-sm font-bold text-primary mt-3 sm:mt-0">
                    Explore <ChevronRight size={14} className="transition group-hover:translate-x-1 sm:w-4 sm:h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Recent installations gallery */}
        <section className="py-10 sm:py-16 overflow-hidden">
          <div className="container-site mb-6 sm:mb-10">
            <SectionLabel>Recently delivered</SectionLabel>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Fresh off the roof.</h2>
              <Link href="/projects" className="hidden sm:flex items-center gap-2 text-sm font-bold text-primary shrink-0">View all projects <ArrowRight size={16}/></Link>
            </div>
          </div>
          <div className="flex gap-3 sm:gap-4 overflow-x-auto px-[max(1rem,calc((100vw-1260px)/2+20px))] pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {recentProjects.map((project, i) => (
              <Link href="/projects" key={i} className="group relative shrink-0 w-[200px] xs:w-[240px] sm:w-[380px] aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-[1.5rem] snap-start">
                <Image src={project.image} alt={`Solar installation in ${project.location}`} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width:640px) 240px, 380px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                  <p className="text-white/80 text-[10px] sm:text-xs font-medium uppercase tracking-wider truncate">{project.location}</p>
                  <p className="text-white font-display text-xs sm:text-lg font-semibold mt-0.5">{project.capacity} System</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="container-site mt-4 sm:hidden">
            <Link href="/projects" className="flex items-center gap-2 text-xs font-bold text-primary">View all projects <ArrowRight size={14}/></Link>
          </div>
        </section>

        {/* 6. Featured Project */}
        <section className="section-pad">
          <div className="container-site">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="bg-secondary relative min-h-[280px] sm:min-h-[430px] overflow-hidden rounded-2xl sm:rounded-[2rem] p-4 sm:p-6">
                <div className="absolute inset-4 sm:inset-8 overflow-hidden rounded-xl sm:rounded-2xl">
                  <Image src={projects[0].image} alt="Residential solar installation in Nagpur" fill className="object-cover" />
                </div>
                <div className="absolute bottom-6 right-6 max-w-[200px] sm:max-w-[260px] rounded-xl sm:rounded-[1.2rem] bg-primary/90 backdrop-blur-md p-3.5 sm:p-6 text-white shadow-xl">
                  <p className="text-[10px] sm:text-xs text-white/70 truncate">{projects[0].name}, {projects[0].location}</p>
                  <p className="mt-1 font-display text-base sm:text-2xl font-semibold">{projects[0].capacity}</p>
                  <p className="mt-0.5 text-[10px] sm:text-xs text-accent font-medium">{projects[0].savings}</p>
                </div>
              </div>
              <div>
                <SectionLabel>Real roofs. Real results.</SectionLabel>
                <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  Good solar is measured in more than kilowatts.
                </h2>
                <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-7 text-muted-foreground">
                  It&apos;s quieter bills, energy confidence, and knowing you made a choice that lasts. See what we&apos;ve built for families and businesses across the region.
                </p>
                <div className="mt-5 sm:mt-7 grid grid-cols-2 gap-4 border-y border-border py-4 sm:py-6">
                  <div>
                    <p className="font-display text-xl sm:text-2xl font-bold">₹2.4 Cr+</p>
                    <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground">saved by customers</p>
                  </div>
                  <div>
                    <p className="font-display text-xl sm:text-2xl font-bold">18,000 t</p>
                    <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground">CO₂ avoided</p>
                  </div>
                </div>
                <Link href="/case-studies" className="mt-5 sm:mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  See project stories <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Government Subsidies Section */}
        <section className="bg-[#f0f5ee] section-pad">
          <div className="container-site">
            <div className="mb-8 sm:mb-12 max-w-2xl">
              <SectionLabel>Save even more</SectionLabel>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Government incentives that work for you.</h2>
              <p className="mt-3 sm:mt-5 text-xs sm:text-base text-muted-foreground leading-5 sm:leading-7">Solar isn&apos;t just smart — it&apos;s subsidised. We help you claim every rupee you&apos;re entitled to.</p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-5 md:grid-cols-3">
              {governmentSchemes.map((scheme) => (
                <div key={scheme.title} className="relative flex flex-col justify-between rounded-2xl sm:rounded-[1.5rem] bg-white p-3.5 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,.03)] border border-border/50 transition hover:shadow-lg hover:-translate-y-0.5">
                  {scheme.tag && <span className="hidden sm:block absolute top-5 right-5 rounded-full bg-accent/15 text-accent-foreground px-3 py-1 text-[11px] font-bold uppercase tracking-wider">{scheme.tag}</span>}
                  <div>
                    <div className="mb-3 sm:mb-5 flex size-9 sm:size-12 items-center justify-center rounded-xl sm:rounded-2xl bg-primary text-white">
                      <Landmark size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-display text-xs sm:text-xl font-semibold">{scheme.title}</h3>
                    <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-sm font-semibold text-primary">{scheme.subtitle}</p>
                    <p className="mt-2 sm:mt-3 text-[11px] sm:text-sm leading-4 sm:leading-6 text-muted-foreground line-clamp-3 sm:line-clamp-none">{scheme.description}</p>
                  </div>
                  <Link href="/contact" className="mt-3 sm:mt-6 flex items-center gap-1 sm:gap-2 text-[11px] sm:text-sm font-bold text-primary">
                    Eligibility <ArrowRight size={13} className="sm:w-4 sm:h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Process "How it works" */}
        <section id="process" className="bg-gradient-to-br from-primary via-primary to-[#0a3a2a] py-12 sm:py-20 text-white">
          <div className="container-site">
            <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <SectionLabel>From curious to confident</SectionLabel>
                <h2 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">A clear path to clean energy.</h2>
                <p className="mt-3 sm:mt-5 max-w-sm text-xs sm:text-sm leading-5 sm:leading-6 text-white/65">
                  No jargon. No pressure. Just a thoughtful process led by people who know solar in Maharashtra.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-8">
                {steps.map((item) => (
                  <div key={item.number} className="border-t border-white/20 pt-4 sm:pt-5">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-accent">{item.number}</span>
                    <h3 className="mt-2 sm:mt-5 font-display text-base sm:text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-4 sm:leading-6 text-white/60">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. Customer testimonials */}
        <section className="section-pad">
          <div className="container-site">
            <div className="mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
              <SectionLabel>Trusted by families & businesses</SectionLabel>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Hear it from the rooftops.</h2>
              <p className="mt-3 sm:mt-5 text-xs sm:text-base text-muted-foreground leading-5 sm:leading-7">Real feedback from real customers across Nagpur and Maharashtra.</p>
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <div key={i} className="relative flex flex-col justify-between rounded-2xl sm:rounded-[1.5rem] border border-border/50 bg-card p-4 sm:p-7 transition hover:shadow-lg hover:-translate-y-0.5">
                  <div>
                    <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-4">
                      {[...Array(5)].map((_, s) => <Star key={s} size={12} className="fill-accent text-accent sm:w-3.5 sm:h-3.5" />)}
                    </div>
                    <p className="text-xs sm:text-[15px] leading-4 sm:leading-7 text-foreground line-clamp-4 sm:line-clamp-none">&ldquo;{t.quote}&rdquo;</p>
                  </div>
                  <div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3 border-t border-border/50 pt-3 sm:pt-5">
                    <div className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white text-[10px] sm:text-xs font-bold">{t.initials}</div>
                    <div className="truncate">
                      <p className="text-xs sm:text-sm font-semibold truncate">{t.name}</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Brand Partners Strip */}
        <section className="border-y border-border/50 py-8 sm:py-14">
          <div className="container-site">
            <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-[.2em] text-muted-foreground mb-4 sm:mb-8">We use equipment from brands you trust</p>
            <div className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10 sm:gap-y-5">
              {brandPartners.map((brand) => (
                <div key={brand.name} className="group flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-2.5 p-2 sm:px-4 sm:py-2.5 rounded-xl transition hover:bg-secondary/60">
                  <div className="flex size-7 sm:size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Zap size={14} className="sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-sm font-semibold text-foreground truncate">{brand.name}</p>
                    <p className="text-[9px] sm:text-[11px] text-muted-foreground truncate">{brand.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Solar Calculator */}
        <section className="section-pad">
          <div className="container-site">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <SectionLabel>Solar, without the guesswork</SectionLabel>
                <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Start with your numbers.</h2>
              </div>
              <Link href="/solar-calculator" className="hidden items-center gap-2 text-sm font-bold text-primary sm:flex">
                Open full calculator <ArrowRight size={16} />
              </Link>
            </div>
            <SolarCalculator compact />
          </div>
        </section>

        {/* 12. FAQ */}
        <section className="bg-muted/40 section-pad">
          <div className="container-site grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>Questions, answered</SectionLabel>
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Let&apos;s clear the air.</h2>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                Still curious? That&apos;s a good thing. Our team is happy to talk through your roof, your bill, or anything else.
              </p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                Ask us anything <ArrowRight size={16} />
              </Link>
            </div>
            <FAQ />
          </div>
        </section>

        {/* 13. CTA banner */}
        <section className="relative overflow-hidden bg-gradient-to-r from-accent via-[#dbb23e] to-accent py-20">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          <div className="container-site relative z-10 flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-accent-foreground/65">Ready when you are</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-accent-foreground sm:text-4xl">
                Your brighter roof is one conversation away.
              </h2>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-xl">
              Book a free consultation <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
