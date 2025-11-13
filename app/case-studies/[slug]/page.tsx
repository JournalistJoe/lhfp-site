import { client } from '@/src/sanity/client'
import { CASE_STUDY_QUERY } from '@/src/sanity/lib/queries'
import { urlFor } from '@/src/sanity/client'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import {
  ArrowLeft,
  CheckCircle,
  Lightbulb,
  ChartLine,
  Target,
  Quotes,
} from '@phosphor-icons/react/dist/ssr'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { CaseStudy } from '@/src/sanity/types'
import { portableTextComponents } from '@/components/portable-text'

export async function generateStaticParams() {
  const studies = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "caseStudy"] { slug }`
  )
  return studies.map((study) => ({ slug: study.slug.current }))
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = await client.fetch<CaseStudy>(CASE_STUDY_QUERY, {
    slug,
  })

  if (!study) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="relative min-h-screen">
      {/* Page-wide animated water background */}
      <div className="fixed inset-0 -z-10">
        <div className="from-stream-blue via-deep-water to-deep-water dark:from-deep-water dark:via-deep-water/90 absolute inset-0 bg-gradient-to-br dark:to-black" />
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="bg-casting-green/20 absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl" />
          <div className="bg-current-teal/20 animation-delay-2000 absolute bottom-1/3 right-1/3 h-96 w-96 animate-pulse rounded-full blur-3xl" />
        </div>
      </div>

      <article className="relative">
        {/* Back to Case Studies */}
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-casting-green transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Case Studies
            </Link>
          </div>
        </div>

        {/* Header */}
        <header className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            {/* Client & Industry */}
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="text-casting-green font-medium">
                  {study.client}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{study.industry}</span>
                {study.publishedAt && (
                  <>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">
                      {formatDate(study.publishedAt)}
                    </span>
                  </>
                )}
              </div>
            </div>

            <h1 className="text-primary dark:text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {study.title}
            </h1>

            <p className="text-secondary text-xl mb-8">{study.excerpt}</p>

            {/* Services */}
            {study.services && study.services.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {study.services.map((service) => (
                  <span
                    key={service}
                    className="text-sm font-medium px-3 py-1 rounded-full bg-casting-green/10 text-casting-green"
                  >
                    {service}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {study.featuredImage && (
          <div className="px-4 pb-12 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-5xl">
              <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-stream-blue to-deep-water">
                <Image
                  src={urlFor(study.featuredImage).width(1200).height(675).url()}
                  alt={study.featuredImage.alt || study.title}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Content Sections */}
        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl space-y-12">
            {/* Problem Section */}
            {study.problem && (
              <section className="dark:bg-dark-card/50 bg-surface/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <Target
                      size={32}
                      className="text-casting-green"
                      weight="regular"
                    />
                  </div>
                  <div>
                    <h2 className="text-primary dark:text-primary text-2xl md:text-3xl font-bold">
                      {study.problem.title || 'The Problem'}
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <PortableText
                    value={study.problem.content}
                    components={portableTextComponents}
                  />
                </div>
              </section>
            )}

            {/* Observation Section */}
            {study.observation && (
              <section className="dark:bg-dark-card/50 bg-surface/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <Lightbulb
                      size={32}
                      className="text-casting-green"
                      weight="regular"
                    />
                  </div>
                  <div>
                    <h2 className="text-primary dark:text-primary text-2xl md:text-3xl font-bold">
                      {study.observation.title || 'Reading the Water'}
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <PortableText
                    value={study.observation.content}
                    components={portableTextComponents}
                  />
                </div>
              </section>
            )}

            {/* Solution Section */}
            {study.solution && (
              <section className="dark:bg-dark-card/50 bg-surface/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <CheckCircle
                      size={32}
                      className="text-casting-green"
                      weight="regular"
                    />
                  </div>
                  <div>
                    <h2 className="text-primary dark:text-primary text-2xl md:text-3xl font-bold">
                      {study.solution.title || 'The Solution'}
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <PortableText
                    value={study.solution.content}
                    components={portableTextComponents}
                  />
                </div>
              </section>
            )}

            {/* Results Section */}
            {study.results && (
              <section className="dark:bg-dark-card/50 bg-surface/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <ChartLine
                      size={32}
                      className="text-casting-green"
                      weight="regular"
                    />
                  </div>
                  <div>
                    <h2 className="text-primary dark:text-primary text-2xl md:text-3xl font-bold">
                      {study.results.title || 'The Results'}
                    </h2>
                  </div>
                </div>

                {/* Metrics Grid */}
                {study.results.metrics && study.results.metrics.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {study.results.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="text-center p-6 rounded-xl bg-casting-green/10 border border-casting-green/20"
                      >
                        <div className="text-3xl md:text-4xl font-bold text-casting-green mb-2">
                          {metric.value}
                        </div>
                        <div className="text-sm font-medium text-primary dark:text-primary mb-1">
                          {metric.metric}
                        </div>
                        {metric.description && (
                          <div className="text-xs text-muted-foreground">
                            {metric.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Results Content */}
                {study.results.content && (
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <PortableText
                      value={study.results.content}
                      components={portableTextComponents}
                    />
                  </div>
                )}
              </section>
            )}

            {/* Testimonial Section */}
            {study.testimonial && (
              <section className="dark:bg-dark-card/50 bg-surface/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Quotes
                      size={32}
                      className="text-casting-green"
                      weight="regular"
                    />
                  </div>
                  <div>
                    <blockquote className="text-xl md:text-2xl text-primary dark:text-primary italic mb-6">
                      &ldquo;{study.testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="text-muted-foreground">
                      <div className="font-semibold text-primary dark:text-primary">
                        {study.testimonial.author}
                      </div>
                      <div className="text-sm">{study.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Technologies Section */}
            {study.technologies && study.technologies.length > 0 && (
              <section className="dark:bg-dark-card/50 bg-surface/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                <h3 className="text-primary dark:text-primary text-xl font-semibold mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-4 py-2 rounded-lg bg-stream-blue/20 text-stream-blue-light border border-stream-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* CTA Section */}
            <div className="text-center pt-8">
              <h3 className="text-primary dark:text-primary mb-4 text-2xl font-semibold">
                Have a similar challenge?
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Let&apos;s discuss how we can help your business.
              </p>
              <Link
                href="/contact"
                className="bg-casting-green hover:bg-casting-green/90 hover:shadow-casting-green/25 inline-flex items-center gap-2 rounded-md px-8 py-4 font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
              >
                Cast a Line
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
