'use client'

import { useState } from 'react'
import { ArrowRight, Check, ArrowLeft } from '@phosphor-icons/react'

export default function ContactPage() {
  const [formStep, setFormStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  })

  const projectTypes = [
    { value: 'bucket-audit', label: 'Bucket Audit - Find my leaks' },
    { value: 'terminal-velocity', label: 'Terminal Velocity - Build me a site' },
    { value: 'sudo-make-money', label: 'sudo make money - Automate my workflows' },
    { value: 'smtp-revival', label: 'SMTP Revival - Fix my email' },
    { value: 'not-sure', label: "I'm not sure yet" },
  ]

  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: 'over-25k', label: 'Over $25,000' },
  ]

  const timelines = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-month', label: 'Within 1 month' },
    { value: '1-3-months', label: '1-3 months' },
    { value: 'over-3-months', label: 'More than 3 months' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Web3Forms API - You'll need to add your access key to environment variables
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'cc811c42-fc65-4656-98ee-bf486f14020f',
        ...formData,
        subject: `New inquiry from ${formData.name} - ${formData.projectType}`,
      }),
    })

    const result = await response.json()
    
    if (result.success) {
      setIsSuccess(true)
      setFormStep(0)
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
      })
    } else {
      console.error('Form submission failed:', result)
      alert('Failed to send message. Please try again or email directly.')
    }
    
    setIsSubmitting(false)
  }

  const nextStep = () => {
    if (formStep < 3) setFormStep(formStep + 1)
  }

  const prevStep = () => {
    if (formStep > 0) setFormStep(formStep - 1)
  }

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="relative min-h-screen">
      {/* Page-wide animated water background */}
      <div className="fixed inset-0 -z-10">
        <div className="from-stream-blue via-deep-water to-deep-water dark:from-deep-water dark:via-deep-water/90 absolute inset-0 bg-gradient-to-br dark:to-black" />
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="bg-casting-green/20 absolute top-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl" />
        </div>
      </div>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          <div className="mb-16 text-center">
            <h1 className="text-primary dark:text-primary mb-6 text-5xl font-bold md:text-6xl">
              Cast a Line
            </h1>
            <p className="text-secondary text-xl">
              Let&apos;s start a conversation about your project
            </p>
          </div>

          {isSuccess ? (
            <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-surface p-8 text-center backdrop-blur-md md:p-12 dark:ring-1">
              <div className="mb-6 flex justify-center text-casting-green">
                <Check size={64} weight="regular" />
              </div>
              <h2 className="text-primary dark:text-primary mb-4 text-3xl font-bold">
                Message Sent!
              </h2>
              <p className="text-secondary mb-8 text-lg">
                We&apos;ll get back to you within 24 hours. In the meantime, feel
                free to explore our philosophy or check out our services.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="bg-casting-green hover:bg-casting-green/90 text-white inline-flex items-center gap-3 rounded-md px-8 py-4 font-medium transition-all transform hover:scale-105"
              >
                Send Another Message
                <ArrowRight size={20} weight="bold" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="dark:bg-dark-card/80 dark:ring-dark-border rounded-2xl bg-surface p-8 backdrop-blur-md md:p-12 dark:ring-1">
                {/* Progress indicator */}
                <div className="mb-8 flex justify-between">
                  {[0, 1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`h-2 flex-1 rounded-full ${
                        step === 0 ? '' : 'ml-2'
                      } ${
                        step <= formStep
                          ? 'bg-casting-green'
                          : 'bg-card-border/20 dark:bg-card-border/20'
                      }`}
                    />
                  ))}
                </div>

                {/* Step 0: Basic Info */}
                {formStep === 0 && (
                  <div className="space-y-6">
                    <h2 className="text-primary dark:text-primary mb-6 text-2xl font-bold">
                      First, let&apos;s get to know you
                    </h2>
                    <div>
                      <label className="text-secondary mb-2 block font-medium">
                        What should we call you?
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => updateFormData('name', e.target.value)}
                        className="bg-white dark:bg-dark-surface text-primary dark:text-white dark:border-dark-border w-full rounded-lg border border-light-border px-4 py-3 focus:border-casting-green focus:outline-none focus:ring-2 focus:ring-casting-green/20 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-secondary mb-2 block font-medium">
                        Email address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className="bg-white dark:bg-dark-surface text-primary dark:text-white dark:border-dark-border w-full rounded-lg border border-light-border px-4 py-3 focus:border-casting-green focus:outline-none focus:ring-2 focus:ring-casting-green/20 transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="text-secondary mb-2 block font-medium">
                        Company (optional)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateFormData('company', e.target.value)}
                        className="bg-white dark:bg-dark-surface text-primary dark:text-white dark:border-dark-border w-full rounded-lg border border-light-border px-4 py-3 focus:border-casting-green focus:outline-none focus:ring-2 focus:ring-casting-green/20 transition-all"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                )}

                {/* Step 1: Project Type */}
                {formStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-primary dark:text-primary mb-6 text-2xl font-bold">
                      What can we help you with?
                    </h2>
                    <div className="space-y-3">
                      {projectTypes.map((type) => (
                        <label
                          key={type.value}
                          className="flex cursor-pointer items-center gap-3 rounded-lg border border-card-border p-4 transition-all hover:border-casting-green dark:border-dark-border dark:hover:border-casting-green"
                        >
                          <input
                            type="radio"
                            name="projectType"
                            value={type.value}
                            checked={formData.projectType === type.value}
                            onChange={(e) =>
                              updateFormData('projectType', e.target.value)
                            }
                            className="text-casting-green focus:ring-casting-green"
                          />
                          <span className="text-secondary">
                            {type.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Budget & Timeline */}
                {formStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-primary dark:text-primary mb-6 text-2xl font-bold">
                      Let&apos;s talk logistics
                    </h2>
                    <div>
                      <label className="text-secondary mb-3 block font-medium">
                        Budget range
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {budgetRanges.map((range) => (
                          <label
                            key={range.value}
                            className="flex cursor-pointer items-center gap-3 rounded-lg border border-card-border p-3 text-sm transition-all hover:border-casting-green dark:border-dark-border dark:hover:border-casting-green"
                          >
                            <input
                              type="radio"
                              name="budget"
                              value={range.value}
                              checked={formData.budget === range.value}
                              onChange={(e) =>
                                updateFormData('budget', e.target.value)
                              }
                              className="text-casting-green focus:ring-casting-green"
                            />
                            <span className="text-secondary">
                              {range.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-secondary mb-3 block font-medium">
                        Timeline
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {timelines.map((timeline) => (
                          <label
                            key={timeline.value}
                            className="flex cursor-pointer items-center gap-3 rounded-lg border border-card-border p-3 text-sm transition-all hover:border-casting-green dark:border-dark-border dark:hover:border-casting-green"
                          >
                            <input
                              type="radio"
                              name="timeline"
                              value={timeline.value}
                              checked={formData.timeline === timeline.value}
                              onChange={(e) =>
                                updateFormData('timeline', e.target.value)
                              }
                              className="text-casting-green focus:ring-casting-green"
                            />
                            <span className="text-secondary">
                              {timeline.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Message */}
                {formStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-primary dark:text-primary mb-6 text-2xl font-bold">
                      Anything else we should know?
                    </h2>
                    <div>
                      <label className="text-secondary mb-2 block font-medium">
                        Tell us more about your project
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => updateFormData('message', e.target.value)}
                        rows={6}
                        className="bg-white dark:bg-dark-surface text-primary dark:text-white dark:border-dark-border w-full rounded-lg border border-light-border px-4 py-3 focus:border-casting-green focus:outline-none focus:ring-2 focus:ring-casting-green/20 transition-all"
                        placeholder="Share any details, links, or specific challenges you're facing..."
                      />
                    </div>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="mt-8 flex items-center justify-between">
                  {formStep > 0 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="text-secondary hover:text-casting-green dark:text-primary dark:hover:text-casting-green flex items-center gap-2 font-medium transition-colors"
                    >
                      <ArrowLeft size={20} weight="regular" />
                      Back
                    </button>
                  )}
                  {formStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-casting-green hover:bg-casting-green/90 ml-auto flex items-center gap-2 rounded-md px-6 py-3 font-medium text-white transition-all hover:shadow-lg"
                    >
                      Next
                      <ArrowRight size={20} weight="bold" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-casting-green hover:bg-casting-green/90 disabled:bg-casting-green/50 ml-auto flex items-center gap-2 rounded-md px-6 py-3 font-medium text-white transition-all hover:shadow-lg disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <ArrowRight size={20} weight="bold" />
                    </button>
                  )}
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}