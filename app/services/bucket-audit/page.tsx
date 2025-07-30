'use client'

import Link from 'next/link'
import { Funnel } from '@phosphor-icons/react'
import { CastLineCTA } from '@/components/cast-line-cta'

export default function BucketAuditPage() {
  return (
    <div className="relative min-h-screen">
      {/* Page-wide animated water background */}
      <div className="fixed inset-0 -z-10">
        <div className="from-stream-blue via-deep-water to-deep-water dark:from-deep-water dark:via-deep-water/90 absolute inset-0 bg-gradient-to-br dark:to-black" />
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="bg-dark-border/20 absolute top-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8 text-casting-green flex justify-center">
            <Funnel size={64} weight="regular" />
          </div>
          <h1 className="text-primary mb-6 text-5xl font-bold md:text-6xl lg:text-7xl">
            Is Your Bucket Leaking?
          </h1>
          <p className="text-secondary mx-auto max-w-3xl text-xl md:text-2xl">
            Most businesses are hemorrhaging potential customers. We&apos;ll
            show you where and how to fix it.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-surface p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <h2 className="text-primary mb-6 text-3xl font-bold">
              The Problem
            </h2>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-secondary">
                You&apos;re spending money on ads. Creating content. Building
                traffic. But somehow, those visitors vanish like water through a
                sieve.
              </p>
              <p className="text-secondary mb-6">
                The culprit? Usually a combination of:
              </p>
              <ul className="text-muted-foreground space-y-3">
                <li>Poor data capture strategies</li>
                <li>Non-existent email follow-up</li>
                <li>Broken conversion paths</li>
                <li>Missing tracking pixels</li>
                <li>Zero first-party data strategy</li>
              </ul>
              <p className="text-casting-green mt-6 text-lg font-medium">
                You built your site to look good. But did you build it to
                actually capture and nurture leads?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-surface p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <h2 className="text-primary mb-6 text-3xl font-bold">
              Our Approach
            </h2>
            <p className="text-secondary mb-8 text-lg">
              We conduct a comprehensive audit of your entire digital ecosystem:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  number: '1',
                  title: 'Traffic Analysis',
                  description: 'Where are people coming from?',
                },
                {
                  number: '2',
                  title: 'Conversion Mapping',
                  description: 'Where are they getting stuck?',
                },
                {
                  number: '3',
                  title: 'Data Capture Review',
                  description: 'What opportunities are you missing?',
                },
                {
                  number: '4',
                  title: 'Email Flow Audit',
                  description: 'Are you following up effectively?',
                },
                {
                  number: '5',
                  title: 'Technical Review',
                  description: 'Is your tracking actually working?',
                },
                {
                  number: '6',
                  title: 'Competitor Analysis',
                  description: 'What are others doing better?',
                },
              ].map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="bg-casting-green/10 text-casting-green flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-mono text-lg font-semibold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-primary mb-1 font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-surface p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <h2 className="text-primary mb-6 text-3xl font-bold">
              What You Get
            </h2>
            <ul className="space-y-4">
              {[
                'Detailed audit report with visual flow diagrams',
                'Prioritized fix list (quick wins to major overhauls)',
                'Lost revenue calculator',
                'Implementation roadmap',
                '30-minute strategy call to discuss findings',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="text-casting-green mt-1 h-5 w-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-secondary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="from-casting-green to-current-teal overflow-hidden rounded-2xl bg-gradient-to-br p-1">
            <div className="bg-surface/95 dark:bg-dark-bg/95 rounded-xl p-8 backdrop-blur-md md:p-12">
              <div className="text-center">
                <h2 className="text-primary mb-2 text-3xl font-bold">
                  Investment
                </h2>
                <p className="text-casting-green mb-6 font-mono text-6xl font-bold">
                  $1,500
                </p>
                <p className="text-secondary mb-2 text-lg">
                  Flat fee, no surprises
                </p>
                <p className="text-muted-foreground mb-8">
                  Timeline: 5-7 business days
                </p>
                <CastLineCTA text="Plug the Leaks" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="relative px-4 pb-24 text-center sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="text-primary hover:text-casting-green dark:text-primary dark:hover:text-casting-green inline-flex items-center gap-2 font-medium"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to all services
        </Link>
      </section>
    </div>
  )
}
