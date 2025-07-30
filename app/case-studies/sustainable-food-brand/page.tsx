'use client'

import Link from 'next/link'
import { ArrowLeft, Package, Eye, Lightbulb, Rocket, ChartLine, Quote } from '@phosphor-icons/react'
import { CastLineCTA } from '@/components/cast-line-cta'

export default function SustainableFoodBrandCaseStudy() {
  return (
    <div className="relative min-h-screen">
      {/* Page-wide animated water background */}
      <div className="fixed inset-0 -z-10">
        <div className="from-stream-blue via-deep-water to-deep-water dark:from-deep-water dark:via-deep-water/90 absolute inset-0 bg-gradient-to-br dark:to-black" />
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="bg-casting-green/20 absolute top-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl" />
        </div>
      </div>

      {/* Back Link */}
      <section className="relative px-4 pt-8 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/case-studies"
            className="text-morning-mist hover:text-casting-green dark:text-terminal-text dark:hover:text-casting-green inline-flex items-center gap-2 font-medium transition-colors"
          >
            <ArrowLeft size={20} weight="regular" />
            Back to Case Studies
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="text-casting-green">
              <Package size={48} weight="regular" />
            </div>
            <div>
              <p className="text-stream-blue dark:text-terminal-text/70 text-lg">
                Pacific Harvest Co.
              </p>
              <p className="text-river-stone dark:text-terminal-text/50">
                Food & Beverage
              </p>
            </div>
          </div>
          <h1 className="text-morning-mist dark:text-terminal-text mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            10x Email Revenue for Sustainable Food Brand
          </h1>
          <p className="text-river-stone dark:text-terminal-text/80 text-xl md:text-2xl">
            How we transformed a dormant email list into a revenue-generating
            machine through strategic segmentation and authentic storytelling.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-white/90 p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <div className="mb-6 flex items-center gap-3">
              <Eye size={32} weight="regular" className="text-casting-green" />
              <h2 className="text-deep-water dark:text-terminal-text text-3xl font-bold">
                The Problem
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-stream-blue dark:text-terminal-text/80">
                Pacific Harvest Co. had built an email list of 15,000
                subscribers over five years. But their monthly email revenue was
                stuck below $2,000. They were sending one newsletter per month
                to their entire list, with generic product updates and
                occasional discount codes.
              </p>
              <p className="text-stream-blue dark:text-terminal-text/80 mt-4">
                The real problem? They were treating all subscribers the same,
                ignoring the rich data they had about customer preferences,
                purchase history, and engagement patterns. Their sustainable
                story — the very thing that attracted customers — was buried in
                product specs.
              </p>
              <ul className="text-stream-blue dark:text-terminal-text/70 mt-6 space-y-2">
                <li>15% average open rate (industry average: 25%)</li>
                <li>2% click-through rate</li>
                <li>Less than $2K monthly email revenue</li>
                <li>46% of list hadn't engaged in 6+ months</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Observation Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-white/90 p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <div className="mb-6 flex items-center gap-3">
              <Lightbulb size={32} weight="regular" className="text-casting-green" />
              <h2 className="text-deep-water dark:text-terminal-text text-3xl font-bold">
                Our Observation
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-stream-blue dark:text-terminal-text/80">
                We spent two weeks analyzing their data, customer feedback, and
                purchase patterns. What we found:
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="bg-morning-mist/10 dark:bg-deep-water/30 rounded-lg p-6">
                  <h3 className="text-deep-water dark:text-terminal-text mb-2 text-xl font-semibold">
                    Three Distinct Segments
                  </h3>
                  <p className="text-stream-blue dark:text-terminal-text/70 text-sm">
                    Health-conscious families, eco-warriors, and gourmet food
                    enthusiasts had completely different motivations.
                  </p>
                </div>
                <div className="bg-morning-mist/10 dark:bg-deep-water/30 rounded-lg p-6">
                  <h3 className="text-deep-water dark:text-terminal-text mb-2 text-xl font-semibold">
                    Story Disconnect
                  </h3>
                  <p className="text-stream-blue dark:text-terminal-text/70 text-sm">
                    Their incredible sustainability story was hidden. Customers
                    wanted to know about the farmers, not just the products.
                  </p>
                </div>
                <div className="bg-morning-mist/10 dark:bg-deep-water/30 rounded-lg p-6">
                  <h3 className="text-deep-water dark:text-terminal-text mb-2 text-xl font-semibold">
                    Purchase Patterns
                  </h3>
                  <p className="text-stream-blue dark:text-terminal-text/70 text-sm">
                    Most customers bought seasonally, but emails ignored these
                    natural cycles.
                  </p>
                </div>
                <div className="bg-morning-mist/10 dark:bg-deep-water/30 rounded-lg p-6">
                  <h3 className="text-deep-water dark:text-terminal-text mb-2 text-xl font-semibold">
                    Mobile Blindness
                  </h3>
                  <p className="text-stream-blue dark:text-terminal-text/70 text-sm">
                    78% opened on mobile, but emails were designed for desktop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-white/90 p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <div className="mb-6 flex items-center gap-3">
              <Rocket size={32} weight="regular" className="text-casting-green" />
              <h2 className="text-deep-water dark:text-terminal-text text-3xl font-bold">
                The Solution
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-stream-blue dark:text-terminal-text/80">
                We rebuilt their email program from the ground up:
              </p>

              <h3 className="text-deep-water dark:text-terminal-text mb-4 mt-8 text-2xl font-semibold">
                1. Strategic Segmentation
              </h3>
              <p className="text-stream-blue dark:text-terminal-text/80">
                Created three core segments with distinct messaging:
              </p>
              <ul className="text-stream-blue dark:text-terminal-text/70 space-y-2">
                <li>
                  <strong>Health Heroes:</strong> Focus on nutritional benefits
                  and family wellness
                </li>
                <li>
                  <strong>Earth Advocates:</strong> Sustainability stories and
                  environmental impact
                </li>
                <li>
                  <strong>Flavor Seekers:</strong> Recipes, pairings, and
                  culinary inspiration
                </li>
              </ul>

              <h3 className="text-deep-water dark:text-terminal-text mb-4 mt-8 text-2xl font-semibold">
                2. Automated Flows
              </h3>
              <p className="text-stream-blue dark:text-terminal-text/80">
                Built five automated email sequences:
              </p>
              <ul className="text-stream-blue dark:text-terminal-text/70 space-y-2">
                <li>Welcome series (5 emails introducing the brand story)</li>
                <li>Post-purchase flow (recipe ideas based on purchase)</li>
                <li>Win-back campaign (re-engage dormant subscribers)</li>
                <li>Seasonal reminders (aligned with harvest cycles)</li>
                <li>VIP program (for top 20% of customers)</li>
              </ul>

              <h3 className="text-deep-water dark:text-terminal-text mb-4 mt-8 text-2xl font-semibold">
                3. Mobile-First Design
              </h3>
              <p className="text-stream-blue dark:text-terminal-text/80">
                Completely redesigned templates with:
              </p>
              <ul className="text-stream-blue dark:text-terminal-text/70 space-y-2">
                <li>Single-column layouts</li>
                <li>Larger fonts and touch-friendly buttons</li>
                <li>Compressed images for faster loading</li>
                <li>Preview text optimization</li>
              </ul>

              <h3 className="text-deep-water dark:text-terminal-text mb-4 mt-8 text-2xl font-semibold">
                4. Story-First Content
              </h3>
              <p className="text-stream-blue dark:text-terminal-text/80">
                Shifted focus from products to stories:
              </p>
              <ul className="text-stream-blue dark:text-terminal-text/70 space-y-2">
                <li>Farmer spotlights and behind-the-scenes content</li>
                <li>Sustainability impact reports</li>
                <li>Customer success stories</li>
                <li>Seasonal guides and educational content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="from-casting-green to-current-teal overflow-hidden rounded-2xl bg-gradient-to-br p-1">
            <div className="dark:bg-deep-water/95 rounded-xl bg-white/95 p-8 backdrop-blur-md md:p-12">
              <div className="mb-8 flex items-center gap-3">
                <ChartLine size={32} weight="regular" className="text-white" />
                <h2 className="text-3xl font-bold text-white">The Results</h2>
              </div>

              <p className="mb-8 text-lg text-white/90">
                After 90 days, the transformation was dramatic:
              </p>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-white/70">
                    Email Revenue
                  </p>
                  <p className="text-4xl font-bold text-white">$22,000/mo</p>
                  <p className="text-sm text-white/70">Up from $2,000</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-white/70">
                    Open Rate
                  </p>
                  <p className="text-4xl font-bold text-white">45%</p>
                  <p className="text-sm text-white/70">Up from 15%</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-white/70">
                    Click Rate
                  </p>
                  <p className="text-4xl font-bold text-white">12%</p>
                  <p className="text-sm text-white/70">Up from 2%</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-white/70">
                    List Growth
                  </p>
                  <p className="text-4xl font-bold text-white">+2,500</p>
                  <p className="text-sm text-white/70">In 3 months</p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/20 pt-8">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Beyond the Numbers
                </h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Customer lifetime value increased 35%</li>
                  <li>• Support tickets decreased 20% (better education)</li>
                  <li>• Social media engagement up 50%</li>
                  <li>• Featured in two sustainability publications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-white/90 p-8 backdrop-blur-md md:p-12 dark:ring-1">
            <Quote size={48} weight="regular" className="text-casting-green mb-6" />
            <blockquote className="text-stream-blue dark:text-terminal-text/90 mb-6 text-xl italic">
              "LHFP didn't just fix our email program — they helped us
              rediscover our story. Our customers now feel like part of our
              mission, not just names on a list. The revenue growth is
              fantastic, but the community we've built is priceless."
            </blockquote>
            <cite className="text-deep-water dark:text-terminal-text not-italic">
              <p className="font-semibold">Sarah Chen</p>
              <p className="text-river-stone dark:text-terminal-text/70 text-sm">
                Founder, Pacific Harvest Co.
              </p>
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 pb-24 text-center sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-morning-mist dark:text-terminal-text mb-6 text-2xl font-semibold">
            Ready to transform your email program?
          </h3>
          <p className="text-river-stone dark:text-terminal-text/70 mb-8 text-lg">
            Let's talk about how we can help you connect with your customers.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CastLineCTA />
            <Link
              href="/services/smtp-revival"
              className="text-stream-blue hover:text-casting-green dark:text-terminal-text dark:hover:text-casting-green font-medium underline-offset-4 transition-colors hover:underline"
            >
              Learn about SMTP Revival
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}