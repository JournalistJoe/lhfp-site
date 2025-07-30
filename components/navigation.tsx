'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Sun, Moon, List, X } from '@phosphor-icons/react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/about', label: 'About' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Cast a Line' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    } else {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)

    if (newMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="border-card-border bg-surface/80 dark:bg-dark-surface/80 sticky top-0 z-50 w-full border-b backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/LHFP_v1WP-01.png"
              alt="LHFP - Long Haired Freaky People"
              width={240}
              height={80}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'hover:text-casting-green font-mono text-sm transition-colors',
                  pathname === item.href
                    ? 'text-casting-green'
                    : 'text-secondary hover:text-primary'
                )}
              >
                {item.label}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="bg-light-border/30 dark:bg-stream-blue/20 hover:bg-light-border/50 dark:hover:bg-stream-blue/30 ml-4 rounded-lg p-2 transition-all hover:scale-105"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={20} weight="bold" className="text-fly-orange" />
              ) : (
                <Moon size={20} weight="bold" className="text-stream-blue" />
              )}
            </button>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="bg-light-surface dark:bg-dark-surface hover:bg-light-border dark:hover:bg-dark-border-subtle rounded-lg p-2 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={20} weight="bold" className="text-fly-orange" />
              ) : (
                <Moon size={20} weight="bold" className="text-stream-blue" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="hover:text-casting-green transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X size={24} weight="regular" />
              ) : (
                <List size={24} weight="regular" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-card-border border-t md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block rounded-md px-3 py-2 font-mono text-sm transition-colors',
                    pathname === item.href
                      ? 'bg-casting-green/10 text-casting-green'
                      : 'text-secondary hover:bg-light-surface dark:hover:bg-dark-surface hover:text-casting-green'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
