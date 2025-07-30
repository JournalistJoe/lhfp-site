'use client'

import Link from 'next/link'
import { Funnel, Lightning, Terminal, EnvelopeSimple } from '@phosphor-icons/react'
import { CastLineCTA } from '@/components/cast-line-cta'

const services = [
  {
    id: 'bucket-audit',
    Icon: Funnel,
    title: 'Bucket Audit',
    tagline: "There's a hole in your bucket, dear founder...",
    description:
      "Discover where you're leaking customers and how to patch the holes",
    price: '$1,500',
    href: '/services/bucket-audit',
    color: 'from-stream-blue to-deep-water',
  },
  {
    id: 'terminal-velocity',
    Icon: Lightning,
    title: 'Terminal Velocity',
    tagline: 'Custom sites that actually capture data',
    description: 'Claude-built websites that look good and work better',
    price: 'From $3,500',
    href: '/services/terminal-velocity',
    color: 'from-casting-green to-current-teal',
  },
  {
    id: 'sudo-make-money',
    Icon: Terminal,
    title: 'sudo make money',
    tagline: 'Automation strategy for non-developers',
    description: 'Turn repetitive tasks into automated workflows',
    price: '$750/session',
    href: '/services/sudo-make-money',
    color: 'from-fly-orange to-casting-green',
  },
  {
    id: 'smtp-revival',
    Icon: EnvelopeSimple,
    title: 'SMTP Revival',
    tagline: "Email that doesn't look like everyone else's",
    description: 'Custom templates and smart automation flows',
    price: '$2,000 + $500/mo',
    href: '/services/smtp-revival',
    color: 'from-current-teal to-stream-blue',
  },
]

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Page-wide animated water background */}
      <div className="fixed inset-0 -z-10">
        <div className="from-stream-blue via-deep-water to-deep-water dark:from-deep-water dark:via-deep-water/90 absolute inset-0 bg-gradient-to-br dark:to-black" />
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="bg-casting-green/20 absolute top-1/3 left-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl" />
          <div className="bg-current-teal/20 animation-delay-2000 absolute right-1/4 bottom-1/3 h-96 w-96 animate-pulse rounded-full blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-20 text-center">
            <h1 className="text-primary mb-6 text-5xl font-bold md:text-6xl lg:text-7xl">
              How We Can Help
            </h1>
            <p className="text-secondary mx-auto max-w-3xl text-xl md:text-2xl">
              Tools crafted for the specific waters you&apos;re fishing. No
              templates. No buzzwords. Just thoughtful solutions.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={service.href}
                className="group dark:bg-dark-card/80 dark:ring-dark-border dark:hover:ring-casting-green/50 relative overflow-hidden rounded-2xl bg-surface p-8 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-2xl md:p-12 dark:ring-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity group-hover:opacity-5`}
                />

                <div className="relative z-10">
                  <h2 className="text-primary mb-3 text-3xl font-bold flex items-center gap-3">
                    <service.Icon size={40} weight="regular" className="text-casting-green flex-shrink-0" />
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-lg italic">
                    &ldquo;{service.tagline}&rdquo;
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-casting-green font-mono text-lg font-semibold">
                      {service.price}
                    </p>
                    <span className="text-casting-green flex items-center gap-2 font-medium opacity-0 transition-all group-hover:opacity-100">
                      Learn more
                      <svg
                        className="h-5 w-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-primary mb-6 text-2xl font-semibold">
              Not sure which service you need?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Start with a conversation. We&apos;ll help you figure out the
              right approach.
            </p>
            <CastLineCTA />
          </div>
        </div>
      </section>
    </div>
  )
}
