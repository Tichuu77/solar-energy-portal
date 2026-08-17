import type { Metadata } from 'next'
import { Footer, Navbar, SectionLabel, WhatsAppButton } from '@/components/site-shell'
import { ProjectGallery } from '@/components/feature-experience'

export const metadata: Metadata = {
  title: 'Solar Projects in Nagpur & Maharashtra | Richa Enterprises',
  description: 'Explore 14+ real rooftop solar installations across Nagpur, Wardha, and Maharashtra delivered by Richa Enterprises.'
}

export default function Page() {
  return (
    <>
      <main>
        <section className="bg-primary pb-16 pt-32 text-white">
          <Navbar />
          <div className="container-site">
            <SectionLabel>Real roofs. Real results.</SectionLabel>
            <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
              Work that speaks for itself.
            </h1>
            <p className="mt-5 max-w-xl text-white/70">
              Browse our installed residential, commercial, and industrial rooftop solar systems across Nagpur and Maharashtra.
            </p>
          </div>
        </section>
        <section className="section-pad">
          <div className="container-site">
            <ProjectGallery />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
