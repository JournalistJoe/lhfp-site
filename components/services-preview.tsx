'use client'

import Link from 'next/link'
import { Funnel, Lightning, Terminal, EnvelopeSimple } from '@phosphor-icons/react'
import { FadeIn, StaggerChildren, StaggerItem, ScaleOnHover } from './motion'

const services = [
  {
    id: 'bucket-audit',
    Icon: Funnel,
    title: 'Bucket Audit',
    description: "Find and fix where you're losing customers",
    details:
      "We'll analyze every touchpoint in your customer journey to identify where potential revenue is slipping away.",
    price: '$1,500',
    href: '/services/bucket-audit',
  },
  {
    id: 'terminal-velocity',
    Icon: Lightning,
    title: 'Terminal Velocity',
    description: 'Custom websites built with Claude',
    details:
      'Beautiful, fast websites built with AI-assisted development. From landing pages to full applications.',
    price: '$3,500-5,000',
    href: '/services/terminal-velocity',
  },
  {
    id: 'sudo-make-money',
    Icon: Terminal,
    title: 'sudo make money',
    description: 'Automation strategy sessions',
    details:
      "Turn repetitive tasks into automated workflows. We'll design systems that scale with your business.",
    price: '$750/session',
    href: '/services/sudo-make-money',
  },
  {
    id: 'smtp-revival',
    Icon: EnvelopeSimple,
    title: 'SMTP Revival',
    description: 'Email programs that actually work',
    details:
      'Revive your email marketing with segmentation, automation, and copy that converts.',
    price: '$2,000 + $500/mo',
    href: '/services/smtp-revival',
  },
]

export function ServicesPreview() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-morning-mist dark:text-terminal-text mb-4 text-4xl font-bold md:text-5xl">
            Our Services
          </h2>
          <p className="text-river-stone dark:text-terminal-text/80 mx-auto max-w-2xl text-lg md:text-xl">
            Tools crafted for the specific waters you&apos;re fishing
          </p>
        </FadeIn>

        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <ScaleOnHover>
                <Link
                  href={service.href}
                  className="group dark:bg-dark-card/80 dark:ring-dark-border dark:hover:ring-casting-green/50 relative block h-full overflow-hidden rounded-xl bg-white/90 p-6 shadow-lg backdrop-blur-md transition-all hover:shadow-xl dark:shadow-none dark:ring-1"
                >
              {/* Gradient overlay on hover */}
              <div className="from-casting-green/0 to-casting-green/0 group-hover:from-casting-green/5 group-hover:to-casting-green/10 absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative z-10">
                <h3 className="text-deep-water dark:text-terminal-text mb-2 text-xl font-semibold flex items-center gap-2">
                  <service.Icon size={24} weight="regular" className="text-casting-green flex-shrink-0" />
                  {service.title}
                </h3>
                <p className="text-stream-blue dark:text-terminal-text/70 mb-3 text-sm">
                  {service.description}
                </p>
                <p className="text-river-stone dark:text-terminal-text/60 mb-4 text-sm">
                  {service.details}
                </p>
                <p className="text-casting-green font-mono text-sm font-semibold">
                  {service.price}
                </p>

                {/* Arrow indicator */}
                <div className="absolute right-4 bottom-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                  <svg
                    className="text-casting-green h-5 w-5"
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
                </div>
              </div>
                </Link>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.6} className="mt-12 text-center">
          <Link
            href="/services"
            className="group text-casting-green hover:text-casting-green/80 inline-flex items-center gap-2 font-medium transition-colors"
          >
            View all services
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
