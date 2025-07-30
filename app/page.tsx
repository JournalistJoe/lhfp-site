import { Hero } from '@/components/hero'
import { ServicesPreview } from '@/components/services-preview'

export default function Home() {
  return (
    <>
      {/* Page-wide animated water background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-stream-blue via-deep-water to-deep-water dark:from-deep-water dark:via-deep-water/90 dark:to-black" />
        
        {/* Animated water ripples */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-casting-green/20 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-stream-blue/30 blur-3xl animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-current-teal/10 blur-3xl animation-delay-4000" />
        </div>
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-water/20 dark:to-black/40" />
      </div>

      {/* Content */}
      <Hero />
      <ServicesPreview />
    </>
  )
}