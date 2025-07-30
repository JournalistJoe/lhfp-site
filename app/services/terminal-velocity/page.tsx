'use client'

import Link from 'next/link'
import { Lightning, Gauge, PaintBrush, Crosshair, EnvelopeSimple, LockSimpleOpen, Check, ArrowLeft } from '@phosphor-icons/react'
import { CastLineCTA } from '@/components/cast-line-cta'

export default function TerminalVelocityPage() {
  return (
    <div className="relative min-h-screen">
      {/* Page-wide animated water background */}
      <div className="fixed inset-0 -z-10">
        <div className="from-stream-blue via-deep-water to-deep-water dark:from-deep-water dark:via-deep-water/90 absolute inset-0 bg-gradient-to-br dark:to-black" />
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="bg-casting-green/20 absolute top-1/3 left-1/3 h-96 w-96 animate-pulse rounded-full blur-3xl" />
          <div className="bg-current-teal/20 animation-delay-2000 absolute right-1/3 bottom-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8 text-casting-green flex justify-center">
            <Lightning size={64} weight="regular" />
          </div>
          <h1 className="text-primary mb-6 text-5xl font-bold md:text-6xl lg:text-7xl">
            Websites Built Different
          </h1>
          <p className="text-secondary mx-auto max-w-3xl text-xl md:text-2xl">
            Claude-powered development. Human-centered design. Actually captures
            data.
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
                Your Squarespace site looks fine. Your Wix site works okay. But
                they&apos;re bleeding opportunities:
              </p>
              <ul className="text-muted-foreground space-y-3">
                <li>Generic templates everyone recognizes</li>
                <li>Bloated code slowing everything down</li>
                <li>Limited data capture capabilities</li>
                <li>Cookie-cutter email integrations</li>
                <li>Monthly fees that never end</li>
              </ul>
              <p className="text-casting-green mt-6 text-lg font-medium">
                You need a site that works as hard as you do.
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
              We use Claude Code and modern frameworks to build exactly what you
              need:
            </p>
            <div className="grid gap-6">
              {[
                {
                  Icon: PaintBrush,
                  title: 'Custom design that matches your brand',
                  description: 'Not a template',
                },
                {
                  Icon: Gauge,
                  title: 'Lightning-fast performance',
                  description: 'Built for speed from the ground up',
                },
                {
                  Icon: Crosshair,
                  title: 'Smart data capture at every touchpoint',
                  description: 'Never miss an opportunity',
                },
                {
                  Icon: EnvelopeSimple,
                  title: 'Email automation that actually converts',
                  description: 'Integrated from day one',
                },
                {
                  Icon: LockSimpleOpen,
                  title: 'You own the code',
                  description: 'No rental fees, ever',
                },
              ].map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="text-casting-green">
                    <feature.Icon size={32} weight="regular" />
                  </div>
                  <div>
                    <h3 className="text-primary mb-1 font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-surface p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <h2 className="text-primary mb-6 text-3xl font-bold">
              What&apos;s Included
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Custom design based on your brand',
                'Up to 5 pages',
                'Mobile-first responsive build',
                'Basic email automation (3 flows)',
                'Contact forms with smart routing',
                'Analytics and tracking setup',
                '30 days of post-launch support',
                'Full code ownership',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check size={20} weight="regular" className="text-casting-green mt-1 flex-shrink-0" />
                  <span className="text-secondary">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-surface p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <h2 className="text-primary mb-6 text-3xl font-bold">
              Technology Stack
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  name: 'Next.js',
                  description: 'For blazing speed',
                },
                {
                  name: 'Sanity CMS',
                  description: 'For easy updates',
                },
                {
                  name: 'Vercel hosting',
                  description: 'Or your choice',
                },
                {
                  name: 'Privacy-first analytics',
                  description: 'Respect your users',
                },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="bg-code-bg/10 dark:bg-code-bg/20 rounded-lg p-4"
                >
                  <h3 className="text-casting-green mb-1 font-mono font-semibold">
                    {tech.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
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
                <p className="text-casting-green mb-6 font-mono text-5xl font-bold">
                  $3,500-5,000
                </p>
                <p className="text-secondary mb-2 text-lg">
                  Depending on complexity
                </p>
                <p className="text-muted-foreground mb-8">
                  Timeline: 2-3 weeks
                </p>
                <CastLineCTA text="Start Building" />
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
