'use client'

import Link from 'next/link'
import { ArrowRight, ChartLine, Package, Storefront } from '@phosphor-icons/react'
import { client } from '@/src/sanity/client'
import { CASE_STUDIES_QUERY } from '@/src/sanity/lib/queries'
import { urlFor } from '@/src/sanity/client'
import { useEffect, useState } from 'react'

interface CaseStudy {
  _id: string
  title: string
  slug: { current: string }
  client: string
  industry: string
  services: string[]
  excerpt: string
  featuredImage?: any
  publishedAt: string
}

// Icon mapping based on industry
const getIndustryIcon = (industry: string) => {
  const iconMap: Record<string, any> = {
    'Food & Beverage': Package,
    'B2B Distribution': Storefront,
    'Hospitality': ChartLine,
  }
  return iconMap[industry] || Package
}

// Color mapping based on index
const getGradientColor = (index: number) => {
  const colors = [
    'from-casting-green to-current-teal',
    'from-stream-blue to-deep-water',
    'from-fly-orange to-casting-green',
  ]
  return colors[index % colors.length]
}

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCaseStudies() {
      try {
        const data = await client.fetch<CaseStudy[]>(CASE_STUDIES_QUERY)
        setCaseStudies(data)
      } catch (error) {
        console.error('Error fetching case studies:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchCaseStudies()
  }, [])
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

      {/* Hero Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-primary dark:text-primary mb-6 text-5xl font-bold md:text-6xl lg:text-7xl">
            Case Studies
          </h1>
          <p className="text-secondary mx-auto max-w-3xl text-xl md:text-2xl">
            Real problems. Careful observation. Custom solutions. Measurable
            results.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="text-casting-green">Loading case studies...</div>
              </div>
            ) : caseStudies.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No case studies available yet.</p>
              </div>
            ) : (
              caseStudies.map((study, index) => {
              const Icon = getIndustryIcon(study.industry)
              const gradientColor = getGradientColor(index)
              return (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug.current}`}
                className="group block"
              >
                <div className="dark:bg-dark-card/80 dark:ring-dark-border dark:hover:ring-casting-green/50 overflow-hidden rounded-2xl bg-surface backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-2xl dark:ring-1">
                  <div className="flex flex-col lg:flex-row">
                    {/* Content Side */}
                    <div className="flex-1 p-8 md:p-12">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="text-casting-green">
                          <Icon size={32} weight="regular" />
                        </div>
                        <div>
                          <p className="text-muted-foreground text-sm font-medium">
                            {study.client}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {study.industry}
                          </p>
                        </div>
                      </div>

                      <h2 className="text-primary dark:text-primary mb-4 text-2xl font-bold md:text-3xl">
                        {study.title}
                      </h2>

                      <div className="mb-6">
                        <p className="text-secondary">
                          {study.excerpt}
                        </p>
                      </div>

                      <div className="mb-6">
                        <p className="text-muted-foreground text-sm">
                          Services: {study.services.join(', ')}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-casting-green opacity-0 transition-all group-hover:opacity-100">
                        <span className="font-medium">Read Full Case Study</span>
                        <ArrowRight
                          size={20}
                          weight="bold"
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </div>

                    {/* Image/Gradient Side */}
                    <div
                      className={`flex-none bg-gradient-to-br ${gradientColor} p-8 md:p-12 lg:w-96 relative overflow-hidden`}
                    >
                      {study.featuredImage ? (
                        <img
                          src={urlFor(study.featuredImage).width(400).height(300).url()}
                          alt={study.title}
                          className="w-full h-full object-cover absolute inset-0"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <Icon size={120} weight="thin" className="text-white/20" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
              )
            })
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h3 className="text-primary dark:text-primary mb-6 text-2xl font-semibold">
              Ready to be our next success story?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Let&apos;s talk about how we can help solve your specific
              challenges.
            </p>
            <Link
              href="/contact"
              className="bg-casting-green hover:bg-casting-green/90 hover:shadow-casting-green/25 inline-flex transform items-center gap-3 rounded-md px-8 py-4 font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              Start Your Project
              <ArrowRight size={20} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}