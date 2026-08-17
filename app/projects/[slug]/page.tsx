import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { InternalPage } from '@/components/internal-page'
import { projects } from '@/lib/site-data'
export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })) }
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { return params.then(({ slug }) => { const project = projects.find((item) => item.slug === slug); return { title: project ? `${project.name} | Surya Urja` : 'Project | Surya Urja', description: project ? `${project.capacity} solar project in ${project.location}.` : 'Solar project by Surya Urja.' } }) }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = projects.find((item) => item.slug === slug); if (!project) notFound(); return <InternalPage title={project.name} intro={`${project.capacity} ${project.type.toLowerCase()} solar system delivered in ${project.location}.`} eyebrow="Project spotlight" image={project.image} bullets={['Designed for the site','Careful installation','Monitored performance']} /> }
