'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  BeerStein,
  Users,
  EnvelopeSimple,
  ChartLineUp,
  Calendar,
  Megaphone,
  Database,
  Lightning,
} from '@phosphor-icons/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function LocalBreweryCaseStudy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background/95 to-dark-border/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-center gap-2 text-casting-green">
                <BeerStein size={24} />
                <span className="text-sm font-mono uppercase tracking-wider">
                  Case Study
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary">
                Local Brewery Digital Transformation
              </h1>
              <p className="text-xl text-secondary max-w-2xl">
                How we helped a craft brewery build a thriving community and triple 
                their taproom traffic through strategic data capture
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 pt-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-card-border">
                <Users size={16} className="text-casting-green" />
                <span className="text-sm text-secondary">8,000+ Email Subscribers</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-card-border">
                <Calendar size={16} className="text-casting-green" />
                <span className="text-sm text-secondary">3x Event Attendance</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-card-border">
                <ChartLineUp size={16} className="text-casting-green" />
                <span className="text-sm text-secondary">215% Revenue Growth</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                <Lightning className="text-casting-green" />
                The Problem
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-secondary">
                  A beloved local craft brewery was struggling to compete with larger 
                  establishments. Despite having superior products and a loyal following, 
                  they couldn't effectively communicate with their customers or track 
                  what was working.
                </p>
                <ul className="text-secondary space-y-2 mt-6">
                  <li>No customer database beyond sporadic social media followers</li>
                  <li>Events promoted only through word-of-mouth and flyers</li>
                  <li>No way to track customer preferences or buying patterns</li>
                  <li>Limited understanding of which marketing efforts drove traffic</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Observation Section */}
      <section className="py-20 px-6 bg-dark-surface/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                <Database className="text-casting-green" />
                The Observation
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-secondary">
                  Through customer interviews and traffic analysis, we discovered that 
                  their customers were highly engaged but disconnected. People loved the 
                  brewery but often missed events, new releases, and special offers simply 
                  because they didn't know about them.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-3 gap-6 mt-12"
            >
              <div className="p-6 bg-surface rounded-lg border border-card-border">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Engaged Community
                </h3>
                <p className="text-secondary">
                  Customers were passionate advocates but lacked connection channels
                </p>
              </div>
              <div className="p-6 bg-surface rounded-lg border border-card-border">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Missed Opportunities
                </h3>
                <p className="text-secondary">
                  Events often under-attended despite high interest when people knew
                </p>
              </div>
              <div className="p-6 bg-surface rounded-lg border border-card-border">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Data Blind Spots
                </h3>
                <p className="text-secondary">
                  No visibility into customer preferences or effective marketing channels
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                <Megaphone className="text-casting-green" />
                The Solution
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-secondary">
                  We implemented a comprehensive digital ecosystem that captured customer 
                  data at every touchpoint while providing genuine value in return, turning 
                  casual visitors into a thriving community.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-8 mt-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-casting-green/20 rounded-lg flex items-center justify-center">
                    <EnvelopeSimple className="text-casting-green" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Strategic Email Capture
                  </h3>
                  <p className="text-secondary">
                    WiFi portal, event check-ins, and loyalty program all feeding a 
                    unified customer database with preference tracking.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-casting-green/20 rounded-lg flex items-center justify-center">
                    <Calendar className="text-casting-green" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Event Management Platform
                  </h3>
                  <p className="text-secondary">
                    Custom booking system with automated reminders, waitlists, and 
                    post-event feedback collection.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-casting-green/20 rounded-lg flex items-center justify-center">
                    <ChartLineUp className="text-casting-green" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Analytics Dashboard
                  </h3>
                  <p className="text-secondary">
                    Real-time insights into customer behavior, popular products, and 
                    marketing ROI with actionable recommendations.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-dark-surface/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                <ChartLineUp className="text-casting-green" />
                The Results
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-secondary">
                  Within one year, the brewery transformed from a hidden gem to a 
                  community hub, with data-driven insights fueling sustainable growth 
                  and deeper customer relationships.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-8 mt-12"
            >
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-casting-green mb-2">
                    8,000+
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    Email Subscribers
                  </h3>
                  <p className="text-secondary">
                    From zero to a highly engaged email list in 12 months
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-casting-green mb-2">
                    3x
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    Event Attendance
                  </h3>
                  <p className="text-secondary">
                    Average event size grew from 30 to 90+ attendees
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-casting-green mb-2">
                    215%
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    Revenue Growth
                  </h3>
                  <p className="text-secondary">
                    Combination of increased traffic and higher spend per visit
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-casting-green mb-2">
                    45%
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    Repeat Visit Rate
                  </h3>
                  <p className="text-secondary">
                    Nearly half of customers now visit weekly or more
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="absolute -top-8 -left-4 text-6xl text-casting-green/20">
              "
            </div>
            <blockquote className="text-2xl text-primary font-light italic">
              LHFP helped us realize we weren't just selling beer—we were building a 
              community. Their data capture strategy gave us the tools to actually 
              nurture those relationships. Now we know our customers by name, their 
              preferences, and can create experiences they truly want.
            </blockquote>
            <cite className="block mt-6 text-secondary not-italic">
              — Founder & Head Brewer, Craft Brewery
            </cite>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-dark-border/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">
                Ready to Know Your Customers Better?
              </h2>
              <p className="text-xl text-secondary max-w-2xl mx-auto">
                Let's explore how strategic data capture can transform your customer 
                relationships and drive sustainable growth.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/bucket-audit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-casting-green text-background rounded-lg hover:bg-casting-green/90 transition-colors font-medium"
              >
                Explore Bucket Audit
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-primary rounded-lg hover:bg-surface/80 transition-colors font-medium border border-card-border"
              >
                Start a Conversation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}