'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, FishSimple } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface CastLineCTAProps {
  variant?: 'primary' | 'secondary'
  className?: string
  text?: string
  href?: string
}

export function CastLineCTA({
  variant = 'primary',
  className,
  text = 'Cast Your First Line',
  href = '/contact',
}: CastLineCTAProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isCasting, setIsCasting] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    setIsCasting(true)
    // Reset casting animation after duration
    setTimeout(() => setIsCasting(false), 800)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleClick = () => {
    // Trigger casting animation on mobile tap
    setIsCasting(true)
    setTimeout(() => setIsCasting(false), 800)
  }

  return (
    <Link
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={cn(
        'group relative inline-flex items-center gap-3 rounded-md px-8 py-4 font-medium transition-all',
        variant === 'primary'
          ? 'bg-casting-green hover:bg-casting-green/90 text-white hover:shadow-casting-green/25 hover:shadow-lg'
          : 'bg-white/10 dark:bg-white/5 backdrop-blur-sm text-casting-green dark:text-casting-green hover:bg-white/20 dark:hover:bg-white/10',
        'transform hover:scale-105',
        className
      )}
    >
      {/* Casting line animation */}
      <div
        className={cn(
          'absolute left-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-casting-green to-transparent',
          'transition-all duration-700 ease-out',
          isCasting ? 'w-full opacity-100' : 'w-0 opacity-0'
        )}
        style={{
          transform: 'translateY(-50%)',
          background: variant === 'primary' 
            ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)'
            : 'linear-gradient(90deg, transparent, #059669, transparent)',
        }}
      />

      {/* Fish icon that appears on cast */}
      <div
        className={cn(
          'absolute -right-8 top-1/2 -translate-y-1/2 transition-all duration-500',
          isCasting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        )}
      >
        <FishSimple 
          size={24} 
          weight="regular" 
          className={variant === 'primary' ? 'text-white' : 'text-casting-green'}
        />
      </div>

      {/* Button content */}
      <span className="relative z-10">{text}</span>
      
      {/* Arrow icon */}
      <ArrowRight 
        size={20} 
        weight="bold" 
        className={cn(
          'transition-all duration-300',
          isHovered ? 'translate-x-1' : 'translate-x-0'
        )}
      />

      {/* Ripple effect on click/tap */}
      <div
        className={cn(
          'absolute inset-0 rounded-md',
          'after:absolute after:inset-0 after:rounded-md after:bg-white/20',
          'after:scale-0 after:opacity-0 after:transition-all after:duration-500',
          isCasting && 'after:scale-100 after:opacity-0'
        )}
      />
    </Link>
  )
}