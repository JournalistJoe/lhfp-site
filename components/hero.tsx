'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CastLineCTA } from './cast-line-cta'
import { FadeIn, StaggerChildren, StaggerItem } from './motion'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center px-4 sm:px-6 lg:px-8">
      <StaggerChildren className="container mx-auto text-center">
        <StaggerItem>
          <h1 className="text-morning-mist dark:text-terminal-text mb-6 text-5xl leading-tight font-bold md:text-7xl lg:text-8xl">
            <span className="mb-2 block text-4xl font-normal opacity-90 md:text-5xl lg:text-6xl">
              Reading the Water,
            </span>
            <span className="text-casting-green font-mono">Writing the Code</span>
          </h1>
        </StaggerItem>

        <StaggerItem>
          <p className="text-river-stone dark:text-terminal-text/80 mx-auto mb-12 max-w-3xl text-xl leading-relaxed font-light md:text-2xl">
            We bring a fly fisherman&apos;s patience to digital strategy and a
            developer&apos;s precision to implementation.
          </p>
        </StaggerItem>

        <StaggerItem>
          <div className="flex flex-col items-center justify-center gap-6">
            <CastLineCTA />

            <Link
              href="/philosophy"
              className="text-morning-mist hover:text-casting-green dark:text-terminal-text dark:hover:text-casting-green text-lg font-medium underline-offset-4 transition-colors hover:underline"
            >
              See Our Philosophy
            </Link>
          </div>
        </StaggerItem>
      </StaggerChildren>

      {/* Developer easter egg in console - only run on client */}
      {mounted && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('%c🎣 Found the developer tools, did you?', 'color: #059669; font-size: 16px; font-weight: bold;');
              console.log('%cWe appreciate folks who read the source. If you\\'re looking for like-minded developers, cast a line: hello@lhfp.consulting', 'color: #0891B2; font-size: 14px;');
              console.log('%c⌘ + K for something special', 'color: #EA580C; font-size: 12px;');
            `,
          }}
        />
      )}
    </section>
  )
}
