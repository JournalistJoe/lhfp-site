'use client'

import Link from 'next/link'
import { ArrowRight, ChartLine, Package, Storefront } from '@phosphor-icons/react'

// Hardcoded case studies for now - will be replaced with Sanity CMS data
const caseStudies = [
  {
    id: 'sustainable-food-brand',
    slug: 'sustainable-food-brand',
    title: '10x Email Revenue for Sustainable Food Brand',
    client: 'Pacific Harvest Co.',
    industry: 'Food & Beverage',
    Icon: Package,
    challenge: 'Email list of 15,000 generating less than $2K/month',
    result: 'Now driving $20K+ monthly with 45% open rates',
    metrics: [
      { label: 'Email Revenue', value: '10x increase' },
      { label: 'Open Rate', value: '45%' },
      { label: 'Click Rate', value: '12%' },
    ],
    color: 'from-casting-green to-current-teal',
  },
  {
    id: 'b2b-distributor',
    slug: 'b2b-distributor',
    title: 'Custom Ordering System for B2B Distributor',
    client: 'Mountain Supply Chain',
    industry: 'B2B Distribution',
    Icon: Storefront,
    challenge: 'Manual order processing taking 20+ hours weekly',
    result: 'Automated system saving 80% of processing time',
    metrics: [
      { label: 'Time Saved', value: '80%' },
      { label: 'Order Accuracy', value: '99.8%' },
      { label: 'Customer Satisfaction', value: '+35%' },
    ],
    color: 'from-stream-blue to-deep-water',
  },
  {
    id: 'local-brewery',
    slug: 'local-brewery',
    title: 'Data Capture Overhaul for Local Brewery',
    client: 'Okanagan Craft Brewing',
    industry: 'Hospitality',
    Icon: ChartLine,
    challenge: 'No customer data despite 500+ daily visitors',
    result: 'Building email list of 2,000+ in 3 months',
    metrics: [
      { label: 'Email Subscribers', value: '2,000+' },
      { label: 'Event Attendance', value: '+65%' },
      { label: 'Repeat Visits', value: '+40%' },
    ],
    color: 'from-fly-orange to-casting-green',
  },
]

export default function CaseStudiesPage() {
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
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className="group block"
              >
                <div className="dark:bg-dark-card/80 dark:ring-dark-border dark:hover:ring-casting-green/50 overflow-hidden rounded-2xl bg-surface backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-2xl dark:ring-1">
                  <div className="flex flex-col lg:flex-row">
                    {/* Content Side */}
                    <div className="flex-1 p-8 md:p-12">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="text-casting-green">
                          <study.Icon size={32} weight="regular" />
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

                      <div className="mb-6 space-y-4">
                        <div>
                          <p className="text-muted-foreground mb-1 text-sm font-medium uppercase tracking-wider">
                            Challenge
                          </p>
                          <p className="text-secondary">
                            {study.challenge}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1 text-sm font-medium uppercase tracking-wider">
                            Result
                          </p>
                          <p className="text-casting-green font-medium">
                            {study.result}
                          </p>
                        </div>
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

                    {/* Metrics Side */}
                    <div
                      className={`flex-none bg-gradient-to-br ${study.color} p-8 md:p-12 lg:w-96`}
                    >
                      <h3 className="mb-6 text-xl font-bold text-white">
                        Key Results
                      </h3>
                      <div className="space-y-4">
                        {study.metrics.map((metric) => (
                          <div key={metric.label}>
                            <p className="text-sm font-medium text-white/80">
                              {metric.label}
                            </p>
                            <p className="text-3xl font-bold text-white">
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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