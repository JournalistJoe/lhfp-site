'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Package,
  Robot,
  Timer,
  ChartLineUp,
  CheckCircle,
  Lightning,
  Database,
  Cpu,
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

export default function B2BDistributorCaseStudy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-deep-water via-deep-water/95 to-stream-blue/20">
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
                <Package size={24} />
                <span className="text-sm font-mono uppercase tracking-wider">
                  Case Study
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary">
                B2B Distributor Automation
              </h1>
              <p className="text-xl text-secondary max-w-2xl">
                How we helped a regional distributor slash order processing time by 80% 
                through intelligent automation
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 pt-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-dark-border/20 rounded-full border border-stream-blue/30">
                <Timer size={16} className="text-casting-green" />
                <span className="text-sm text-secondary">80% Time Reduction</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-dark-border/20 rounded-full border border-stream-blue/30">
                <ChartLineUp size={16} className="text-casting-green" />
                <span className="text-sm text-secondary">3x Order Capacity</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-dark-border/20 rounded-full border border-stream-blue/30">
                <CheckCircle size={16} className="text-casting-green" />
                <span className="text-sm text-secondary">99.8% Accuracy</span>
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
                  A mid-sized industrial supplies distributor was drowning in manual processes. 
                  Their team spent 6+ hours daily on order entry, inventory tracking, and 
                  customer communications. Growth was stalled—not by demand, but by bandwidth.
                </p>
                <ul className="text-secondary space-y-2 mt-6">
                  <li>Manual order entry from emails, faxes, and phone calls</li>
                  <li>Excel-based inventory tracking with daily reconciliation</li>
                  <li>No integration between ordering, inventory, and shipping systems</li>
                  <li>Customer service team overwhelmed with status inquiries</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Observation Section */}
      <section className="py-20 px-6 bg-background/50">
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
                  After analyzing their workflow, we discovered that 85% of orders followed 
                  predictable patterns. Regular customers ordered similar products on consistent 
                  schedules. The opportunity wasn't just automation—it was intelligent prediction.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-3 gap-6 mt-12"
            >
              <div className="p-6 bg-dark-border/10 rounded-lg border border-stream-blue/20">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Pattern Recognition
                </h3>
                <p className="text-secondary">
                  Customer ordering behaviors were highly predictable with seasonal variations
                </p>
              </div>
              <div className="p-6 bg-dark-border/10 rounded-lg border border-stream-blue/20">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Data Silos
                </h3>
                <p className="text-secondary">
                  Critical business data lived in disconnected systems and spreadsheets
                </p>
              </div>
              <div className="p-6 bg-dark-border/10 rounded-lg border border-stream-blue/20">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Manual Bottlenecks
                </h3>
                <p className="text-secondary">
                  Human intervention required at every step created unnecessary delays
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
                <Robot className="text-casting-green" />
                The Solution
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-secondary">
                  We implemented a comprehensive automation suite that transformed their 
                  operations from reactive to predictive, turning their biggest pain points 
                  into competitive advantages.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-8 mt-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-casting-green/20 rounded-lg flex items-center justify-center">
                    <Cpu className="text-casting-green" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Intelligent Order Processing
                  </h3>
                  <p className="text-secondary">
                    AI-powered system that reads orders from any source (email, PDF, Excel) 
                    and automatically enters them into the ERP with 99.8% accuracy.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-casting-green/20 rounded-lg flex items-center justify-center">
                    <Database className="text-casting-green" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Real-Time Inventory Sync
                  </h3>
                  <p className="text-secondary">
                    Connected warehouse management, ordering, and shipping systems with 
                    live inventory updates and automatic reorder triggers.
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
                    Predictive Analytics Dashboard
                  </h3>
                  <p className="text-secondary">
                    Custom analytics that predict order patterns, suggest inventory levels, 
                    and flag potential stockouts before they happen.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-background/50">
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
                  Within 90 days of implementation, the distributor transformed from 
                  industry laggard to leader, with metrics that made their competitors 
                  take notice.
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
                    80%
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    Reduction in Order Processing Time
                  </h3>
                  <p className="text-secondary">
                    From 45 minutes per order to under 9 minutes average
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-casting-green mb-2">
                    3x
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    Increase in Order Capacity
                  </h3>
                  <p className="text-secondary">
                    Same team now handles 300+ orders daily vs. 100 previously
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-casting-green mb-2">
                    99.8%
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    Order Accuracy Rate
                  </h3>
                  <p className="text-secondary">
                    Virtual elimination of order entry errors
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-casting-green mb-2">
                    $1.2M
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    Annual Cost Savings
                  </h3>
                  <p className="text-secondary">
                    From reduced errors, overtime, and increased efficiency
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
              LHFP didn't just automate our processes—they reimagined them. We went from 
              barely keeping up to actually getting ahead of demand. Our customers are 
              happier, our team is less stressed, and we're finally growing again.
            </blockquote>
            <cite className="block mt-6 text-secondary not-italic">
              — Operations Director, Regional Industrial Distributor
            </cite>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-stream-blue/20">
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
                Ready to Automate Your Growth?
              </h2>
              <p className="text-xl text-secondary max-w-2xl mx-auto">
                Let's explore how intelligent automation can transform your operations 
                and unlock your team's potential.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/sudo-make-money"
                className="inline-flex items-center gap-2 px-8 py-4 bg-casting-green text-primary rounded-lg hover:bg-casting-green/90 transition-colors font-medium"
              >
                Explore Automation Services
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-dark-border/20 text-primary rounded-lg hover:bg-dark-border/30 transition-colors font-medium border border-stream-blue/30"
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