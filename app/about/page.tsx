'use client'

import Link from 'next/link'
import { Fish, Crosshair, Hammer, Handshake, FileText, Heart } from '@phosphor-icons/react'
import { CastLineCTA } from '@/components/cast-line-cta'

export default function AboutPage() {
  const values = [
    {
      Icon: Crosshair,
      title: 'Observation Over Assumption',
      description: 'We watch before we act. Every business has its own stream.',
    },
    {
      Icon: Hammer,
      title: 'Craft Over Convenience',
      description: "We'd rather tie the perfect fly than grab something off the shelf.",
    },
    {
      Icon: Handshake,
      title: 'Partners, Not Vendors',
      description: "We work with people we'd want to grab a beer (or go fishing) with.",
    },
    {
      Icon: FileText,
      title: 'Clear Over Clever',
      description: 'Good code is readable. Good strategy is understandable.',
    },
    {
      Icon: Heart,
      title: 'Mission Over Metrics',
      description: 'Revenue matters. Purpose matters more.',
    },
  ]

  return (
    <div className="relative min-h-screen">
      {/* Page-wide animated water background */}
      <div className="fixed inset-0 -z-10">
        <div className="from-stream-blue via-deep-water to-deep-water dark:from-deep-water dark:via-deep-water/90 absolute inset-0 bg-gradient-to-br dark:to-black" />
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="bg-dark-border/20 absolute top-1/3 right-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl" />
          <div className="bg-casting-green/20 animation-delay-2000 absolute bottom-1/4 left-1/3 h-96 w-96 animate-pulse rounded-full blur-3xl" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-primary mb-6 text-5xl font-bold md:text-6xl lg:text-7xl">
            About LHFP
          </h1>
          <p className="text-secondary mx-auto max-w-3xl text-xl md:text-2xl">
            Long Haired Freaky People apply for within
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-surface p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <h2 className="text-primary mb-6 text-3xl font-bold">
              Our Origin Story
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-secondary">
                LHFP started as a holding company for our food and beverage
                digital agency, SKUStory. But we kept meeting fascinating
                founders outside the F&B world — mission-driven people solving
                interesting problems who needed technical help without the
                corporate consulting experience.
              </p>
              <p className="text-secondary mt-4">
                The name? It&apos;s from the Five Man Electrical Band song
                &apos;Signs.&apos; An anthem about arbitrary barriers and the
                people brave enough to challenge them. That&apos;s our clients.
                That&apos;s us.
              </p>
              <p className="text-secondary mt-4">
                We&apos;re based in West Kelowna, BC, where the fishing is good
                and the wifi is strong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-surface p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <div className="mb-8 flex items-center gap-4">
              <Fish size={48} weight="regular" className="text-casting-green" />
              <h2 className="text-primary text-3xl font-bold">
                Why Fly Fishing?
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-secondary">
                Ask any fly fisherman worth their salt, and they&apos;ll tell
                you: success isn&apos;t about expensive gear or secret spots.
                It&apos;s about observation. Patience. Understanding.
              </p>
              <p className="text-secondary mt-4">
                You watch the water. Note the insects. See what the fish are
                actually eating. Then you match the hatch — choosing the right
                fly for this specific moment in this specific stream.
              </p>
              <p className="text-secondary mt-4">
                Digital strategy works the same way. We can&apos;t just show up
                with the same solutions everyone else is peddling. We need to
                observe your market, understand your customers, see what&apos;s
                actually working. Only then can we tie the perfect solution.
              </p>
              <p className="text-casting-green mt-6 text-lg font-medium">
                It&apos;s harder than throwing buzzwords at the wall. But it
                works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-primary mb-4 text-3xl font-bold">
              What We Stand For
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="dark:bg-dark-card/80 dark:ring-dark-border group rounded-xl bg-surface p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-xl dark:ring-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-4 text-casting-green">
                  <value.Icon size={32} weight="regular" />
                </div>
                <h3 className="text-primary mb-2 text-xl font-semibold">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Bio Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="from-casting-green to-current-teal overflow-hidden rounded-2xl bg-gradient-to-br p-1">
            <div className="bg-surface/95 dark:bg-dark-bg/95 rounded-xl p-8 backdrop-blur-md md:p-12">
              <h2 className="text-primary mb-6 text-3xl font-bold">
                About Your Guide
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-secondary">
                  Joey Brennan has been helping businesses navigate digital
                  waters since 2014. What started with sweetening up a sterile
                  commodity brand evolved into a passion for helping
                  mission-driven founders build something real online.
                </p>
                <p className="text-secondary mt-4">
                  When not debugging code or optimizing email flows, you&apos;ll
                  find them actually fly fishing the streams around West
                  Kelowna, still observing, still learning, still matching the
                  hatch.
                </p>
                <p className="text-secondary mt-4">
                  Previous catches include helping a sustainable food brand 10x
                  their email revenue and building a custom ordering system for
                  a B2B distributor. Current obsessions include AI-assisted
                  development workflows and privacy-first analytics.
                </p>
              </div>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <CastLineCTA />
                <Link
                  href="/philosophy"
                  className="text-secondary hover:text-casting-green dark:text-primary dark:hover:text-casting-green font-medium underline-offset-4 transition-colors hover:underline"
                >
                  Learn Our Philosophy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}