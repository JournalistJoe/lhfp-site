'use client'

import Link from 'next/link'
import { EnvelopeSimple, Check, ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import CastLineCTA from '@/components/cast-line-cta'

export default function SMTPRevivalPage() {
  return (
    <div className="relative min-h-screen">
      {/* Page-wide animated water background */}
      <div className="fixed inset-0 -z-10">
        <div className="from-stream-blue via-deep-water to-deep-water dark:from-deep-water dark:via-deep-water/90 absolute inset-0 bg-gradient-to-br dark:to-black" />
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="bg-current-teal/20 absolute top-1/4 right-1/3 h-96 w-96 animate-pulse rounded-full blur-3xl" />
          <div className="bg-stream-blue/20 animation-delay-2000 absolute bottom-1/2 left-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8 text-casting-green flex justify-center">
            <EnvelopeSimple size={64} weight="regular" />
          </div>
          <h1 className="text-morning-mist dark:text-terminal-text mb-6 text-5xl font-bold md:text-6xl lg:text-7xl">
            Email That Doesn&apos;t Suck
          </h1>
          <p className="text-river-stone dark:text-terminal-text/80 mx-auto max-w-3xl text-xl md:text-2xl">
            Because your Shopify emails shouldn&apos;t look like everyone
            else&apos;s Shopify emails.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-white/90 p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <h2 className="text-deep-water dark:text-terminal-text mb-6 text-3xl font-bold">
              The Problem
            </h2>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-stream-blue dark:text-terminal-text/80">
                Your email list is gold. But you&apos;re panning with a kitchen
                strainer:
              </p>
              <ul className="text-stream-blue dark:text-terminal-text/70 space-y-3">
                <li>Generic templates that scream &apos;automated&apos;</li>
                <li>One-size-fits-all messaging</li>
                <li>No segmentation strategy</li>
                <li>Broken customer journeys</li>
                <li>Emails that look terrible on mobile</li>
              </ul>
              <p className="text-casting-green mt-6 text-lg font-medium">
                Your competitors are using the same templates. Time to stand
                out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-white/90 p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <h2 className="text-deep-water dark:text-terminal-text mb-8 text-3xl font-bold">
              What We Do
            </h2>
            <p className="text-stream-blue dark:text-terminal-text/80 mb-8 text-lg">
              We rebuild your email program from the ground up:
            </p>

            <div className="space-y-8">
              {/* Custom Templates */}
              <div>
                <h3 className="text-casting-green mb-4 text-2xl font-bold">
                  Custom Templates
                </h3>
                <ul className="space-y-2">
                  {[
                    'Designed to match your brand exactly',
                    'Mobile-first responsive design',
                    'Dark mode compatible',
                    'Accessibility compliant',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="bg-casting-green mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full" />
                      <span className="text-stream-blue dark:text-terminal-text/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Smart Automation */}
              <div>
                <h3 className="text-casting-green mb-4 text-2xl font-bold">
                  Smart Automation
                </h3>
                <ul className="space-y-2">
                  {[
                    'Welcome series that actually welcome',
                    'Abandoned cart emails that convert',
                    'Win-back campaigns that work',
                    'Birthday/anniversary touches',
                    'Post-purchase sequences',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="bg-casting-green mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full" />
                      <span className="text-stream-blue dark:text-terminal-text/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Segmentation Strategy */}
              <div>
                <h3 className="text-casting-green mb-4 text-2xl font-bold">
                  Segmentation Strategy
                </h3>
                <ul className="space-y-2">
                  {[
                    'Behavioral triggers',
                    'Purchase history targeting',
                    'Engagement-based lists',
                    'VIP customer tracks',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="bg-casting-green mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full" />
                      <span className="text-stream-blue dark:text-terminal-text/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-white/90 p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <h2 className="text-deep-water dark:text-terminal-text mb-8 text-3xl font-bold">
              The Process
            </h2>
            <div className="space-y-4">
              {[
                { step: 1, task: 'Audit current email performance' },
                { step: 2, task: 'Design custom templates' },
                { step: 3, task: 'Build automation flows' },
                { step: 4, task: 'Set up segmentation' },
                { step: 5, task: 'Test everything thoroughly' },
                { step: 6, task: 'Launch and optimize' },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-4">
                  <div className="from-current-teal to-stream-blue flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-mono text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <p className="text-stream-blue dark:text-terminal-text/80">
                    {item.task}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-white/90 p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <h2 className="text-deep-water dark:text-terminal-text mb-6 text-3xl font-bold">
              What&apos;s Included
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                '5 custom email templates',
                '3 complete automation flows',
                'Segmentation strategy',
                'A/B testing framework',
                'Monthly performance reports',
                'Ongoing optimization recommendations',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check size={20} weight="regular" className="text-casting-green mt-1 flex-shrink-0" />
                  <span className="text-stream-blue dark:text-terminal-text/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="from-current-teal to-stream-blue overflow-hidden rounded-2xl bg-gradient-to-br p-1">
            <div className="dark:bg-deep-water/95 rounded-xl bg-white/95 p-8 backdrop-blur-md md:p-12">
              <div className="text-center">
                <h2 className="text-deep-water dark:text-terminal-text mb-6 text-3xl font-bold">
                  Investment
                </h2>
                <div className="mb-8 space-y-2">
                  <p className="text-stream-blue dark:text-terminal-text/80 text-2xl">
                    Setup
                  </p>
                  <p className="text-casting-green font-mono text-5xl font-bold">
                    $2,000
                  </p>
                </div>
                <div className="mb-8 space-y-2">
                  <p className="text-stream-blue dark:text-terminal-text/80 text-2xl">
                    Monthly Maintenance
                  </p>
                  <p className="text-casting-green font-mono text-5xl font-bold">
                    $500
                  </p>
                </div>
                <CastLineCTA text="Revive Your Email" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="relative px-4 pb-24 text-center sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="text-morning-mist hover:text-casting-green dark:text-terminal-text dark:hover:text-casting-green inline-flex items-center gap-2 font-medium"
        >
          <ArrowLeft size={20} weight="regular" />
          Back to all services
        </Link>
      </section>
    </div>
  )
}
