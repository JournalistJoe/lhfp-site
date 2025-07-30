'use client'

import Link from 'next/link'
import { Eye, Palette, Clock, Fish, ArrowRight } from '@phosphor-icons/react'
import { CastLineCTA } from '@/components/cast-line-cta'

export default function PhilosophyPage() {
  const principles = [
    {
      Icon: Eye,
      title: 'Observation',
      subtitle: 'Watch the Water',
      description:
        'Before casting a line, we study the stream. What are your customers actually doing? Where are they getting stuck? What patterns emerge in the data? Success starts with patient observation.',
      details: [
        'Analyze user behavior, not assumptions',
        'Study competitor approaches critically',
        'Identify patterns others miss',
        'Question everything, assume nothing',
      ],
    },
    {
      Icon: Palette,
      title: 'Adaptation',
      subtitle: 'Match the Hatch',
      description:
        'Once we understand what works in your specific waters, we craft solutions that fit. No cookie-cutter templates. No one-size-fits-all strategies. Just thoughtfully designed tools for your unique challenges.',
      details: [
        'Custom solutions for specific problems',
        'Flexible strategies that evolve',
        'Right-sized tools, not oversized platforms',
        'Built to grow with your business',
      ],
    },
    {
      Icon: Clock,
      title: 'Patience',
      subtitle: 'Work the Current',
      description:
        'Good things take time. We don\'t chase quick wins at the expense of lasting success. Like a fly fisherman working a promising pool, we\'re methodical, persistent, and focused on the long game.',
      details: [
        'Sustainable growth over growth hacks',
        'Quality implementation over rushed launches',
        'Long-term partnerships over quick projects',
        'Measured progress over vanity metrics',
      ],
    },
  ]

  return (
    <div className="relative min-h-screen">
      {/* Page-wide animated water background */}
      <div className="fixed inset-0 -z-10">
        <div className="from-stream-blue via-deep-water to-deep-water dark:from-deep-water dark:via-deep-water/90 absolute inset-0 bg-gradient-to-br dark:to-black" />
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="bg-casting-green/20 absolute top-1/4 left-1/3 h-96 w-96 animate-pulse rounded-full blur-3xl" />
          <div className="bg-dark-border/20 animation-delay-2000 absolute bottom-1/3 right-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center text-casting-green">
            <Fish size={64} weight="regular" />
          </div>
          <h1 className="text-primary mb-6 text-5xl font-bold md:text-6xl lg:text-7xl">
            Match the Hatch
          </h1>
          <p className="text-secondary mx-auto max-w-3xl text-xl md:text-2xl">
            Our philosophy is simple: observe carefully, adapt thoughtfully,
            work patiently. The same principles that catch fish build great
            digital experiences.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-surface p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <h2 className="text-primary mb-6 text-3xl font-bold">
              A Different Approach
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-secondary">
                Most agencies show up with a tackle box full of
                &ldquo;best practices&rdquo; and &ldquo;proven
                solutions.&rdquo; They cast the same lures in every stream,
                wondering why they don&apos;t always work.
              </p>
              <p className="text-secondary mt-4">
                We learned from fly fishing that success comes from
                understanding the specific conditions you&apos;re facing. What
                worked yesterday might not work today. What works upstream
                might fail in your pool.
              </p>
              <p className="text-casting-green mt-6 text-lg font-medium">
                That&apos;s why we start by watching, learning, and
                understanding. Only then do we tie the right fly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Principles Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
              The Three Principles
            </h2>
            <p className="text-secondary mx-auto max-w-2xl text-lg">
              Every successful fly fisherman follows these principles. So do we.
            </p>
          </div>

          <div className="space-y-24">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-surface p-8 backdrop-blur-md md:p-12 dark:ring-1">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="text-casting-green">
                        <principle.Icon size={48} weight="regular" />
                      </div>
                      <div>
                        <h3 className="text-primary text-3xl font-bold">
                          {principle.title}
                        </h3>
                        <p className="text-muted-foreground text-lg italic">
                          {principle.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-secondary mb-6 text-lg">
                      {principle.description}
                    </p>
                    <ul className="space-y-3">
                      {principle.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="bg-casting-green/20 mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 lg:max-w-md">
                  <div className="relative">
                    <div
                      className={`from-casting-green/10 to-stream-blue/10 absolute inset-0 rounded-full bg-gradient-to-br blur-3xl ${
                        index === 0
                          ? 'animate-pulse'
                          : index === 1
                          ? 'animation-delay-1000 animate-pulse'
                          : 'animation-delay-2000 animate-pulse'
                      }`}
                    />
                    <div className="relative grid grid-cols-3 gap-4 p-8">
                      {[...Array(9)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-2 rounded-full ${
                            i % 3 === index
                              ? 'bg-casting-green'
                              : 'bg-dark-border/30 dark:bg-dark-border/30'
                          }`}
                          style={{
                            animationDelay: `${i * 200}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-surface p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <h2 className="text-primary mb-6 text-3xl font-bold">
              How This Looks in Practice
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-secondary">
                When you work with us, you&apos;ll notice the difference:
              </p>
              <ul className="text-secondary mt-4 space-y-2">
                <li>
                  We ask more questions than most agencies. We&apos;re not
                  being difficult — we&apos;re observing.
                </li>
                <li>
                  We might suggest solutions you haven&apos;t seen before.
                  That&apos;s adaptation, not innovation for its own sake.
                </li>
                <li>
                  We focus on sustainable success, not quick wins. Patience
                  pays off when you&apos;re building something that lasts.
                </li>
              </ul>
              <p className="text-secondary mt-6">
                This approach takes more time upfront. It requires trust. But
                it&apos;s the only way we&apos;ve found to consistently deliver
                results that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="from-casting-green to-current-teal overflow-hidden rounded-2xl bg-gradient-to-br p-1">
            <div className="dark:bg-background/95 rounded-xl bg-white/95 p-8 text-center backdrop-blur-md md:p-12">
              <h2 className="text-primary mb-4 text-3xl font-bold">
                Ready to Try a Different Approach?
              </h2>
              <p className="text-secondary mb-8 text-lg">
                Let&apos;s talk about the specific challenges in your digital
                waters.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <CastLineCTA />
                <Link
                  href="/services"
                  className="text-secondary hover:text-casting-green flex items-center gap-2 font-medium underline-offset-4 transition-colors hover:underline"
                >
                  Explore Our Services
                  <ArrowRight size={20} weight="regular" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}