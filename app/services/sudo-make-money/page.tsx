'use client'

import Link from 'next/link'
import { Terminal, Lightning, CheckCircle, ArrowLeft } from '@phosphor-icons/react'
import { CastLineCTA } from '@/components/cast-line-cta'

export default function SudoMakeMoneyPage() {
  return (
    <div className="relative min-h-screen">
      {/* Page-wide animated water background */}
      <div className="fixed inset-0 -z-10">
        <div className="from-stream-blue via-deep-water to-deep-water dark:from-deep-water dark:via-deep-water/90 absolute inset-0 bg-gradient-to-br dark:to-black" />
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="bg-fly-orange/20 absolute top-1/2 left-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl" />
          <div className="bg-casting-green/20 animation-delay-2000 absolute right-1/2 bottom-1/3 h-96 w-96 animate-pulse rounded-full blur-3xl" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8 text-casting-green flex justify-center">
            <Terminal size={64} weight="regular" />
          </div>
          <h1 className="text-primary mb-6 font-mono text-5xl font-bold md:text-6xl lg:text-7xl">
            sudo make money
          </h1>
          <p className="text-secondary mx-auto max-w-3xl text-xl md:text-2xl">
            Turn repetitive tasks into automated workflows. No coding required
            (we&apos;ll handle that part).
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
                You&apos;re drowning in repetitive tasks:
              </p>
              <ul className="text-muted-foreground space-y-3">
                <li>Manually moving data between apps</li>
                <li>Copy-pasting customer information</li>
                <li>Sending the same emails over and over</li>
                <li>Creating reports by hand</li>
                <li>Following up with leads... eventually</li>
              </ul>
              <p className="text-casting-green mt-6 text-lg font-medium">
                There&apos;s a better way. And no, you don&apos;t need to learn
                Python.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Session Structure Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-surface p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <h2 className="text-primary mb-8 text-3xl font-bold">
              Our Session Structure
            </h2>
            <p className="text-secondary mb-8 text-lg">
              In our 3-hour deep dive, we&apos;ll:
            </p>
            <div className="space-y-8">
              {[
                {
                  hour: 'Hour 1',
                  title: 'Discovery',
                  items: [
                    'Map your current workflows',
                    'Identify pain points',
                    'Spot automation opportunities',
                  ],
                },
                {
                  hour: 'Hour 2',
                  title: 'Strategy',
                  items: [
                    'Design automated solutions',
                    'Choose the right tools',
                    'Plan implementation order',
                  ],
                },
                {
                  hour: 'Hour 3',
                  title: 'Action Plan',
                  items: [
                    'Document your automation roadmap',
                    'Provide implementation guides',
                    'Set up quick wins together',
                  ],
                },
              ].map((session) => (
                <div
                  key={session.hour}
                  className="bg-code-bg/5 dark:bg-code-bg/10 rounded-lg p-6"
                >
                  <h3 className="text-casting-green mb-4 text-xl font-bold">
                    <span className="font-mono">{session.hour}:</span>{' '}
                    {session.title}
                  </h3>
                  <ul className="space-y-2">
                    {session.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="bg-casting-green mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full" />
                        <span className="text-secondary">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Automations Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-surface p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <h2 className="text-primary mb-6 text-3xl font-bold">
              Common Automations We Design
            </h2>
            <div className="space-y-4">
              {[
                'Lead capture → CRM → Welcome series',
                'Invoice → Bookkeeping → Thank you email',
                'Form submission → Task creation → Team notification',
                'Social posts → Multiple platforms → Performance tracking',
                'Customer data → Segmentation → Targeted campaigns',
              ].map((flow) => (
                <div
                  key={flow}
                  className="from-casting-green/5 flex items-center gap-3 rounded-lg bg-gradient-to-r to-transparent p-4"
                >
                  <Lightning size={20} weight="regular" className="text-casting-green flex-shrink-0" />
                  <span className="text-secondary font-mono text-sm">
                    {flow}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Leave With Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-surface p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <h2 className="text-primary mb-6 text-3xl font-bold">
              What You Leave With
            </h2>
            <ul className="space-y-4">
              {[
                'Complete automation roadmap',
                '5-10 ready-to-implement workflows',
                'Tool recommendations with pricing',
                'Priority implementation schedule',
                '2 weeks of follow-up support via email',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={20} weight="regular" className="text-casting-green mt-1 flex-shrink-0" />
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
          <div className="from-fly-orange to-casting-green overflow-hidden rounded-2xl bg-gradient-to-br p-1">
            <div className="bg-surface/95 dark:bg-dark-bg/95 rounded-xl p-8 backdrop-blur-md md:p-12">
              <div className="text-center">
                <h2 className="text-primary mb-2 text-3xl font-bold">
                  Investment
                </h2>
                <p className="text-casting-green mb-6 font-mono text-6xl font-bold">
                  $750
                </p>
                <p className="text-secondary mb-8 text-lg">
                  For 3-hour strategy session
                </p>
                <CastLineCTA text="Book Your Session" />
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
          <ArrowLeft size={20} weight="regular" />
          Back to all services
        </Link>
      </section>
    </div>
  )
}
