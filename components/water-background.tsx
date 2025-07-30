'use client'

import { motion } from 'framer-motion'

export function WaterBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="from-stream-blue via-deep-water to-deep-water dark:from-deep-water dark:via-deep-water/90 absolute inset-0 bg-gradient-to-br dark:to-black" />
      
      {/* Animated water ripples */}
      <div className="absolute inset-0">
        <motion.div
          className="bg-casting-green/10 absolute -top-1/2 -left-1/2 h-[200%] w-[200%] rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="bg-stream-blue/10 absolute -bottom-1/2 -right-1/2 h-[200%] w-[200%] rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="bg-current-teal/10 absolute top-1/3 left-1/3 h-96 w-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Water surface effect */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.03] dark:opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="water-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="1"
              fill="currentColor"
              animate={{
                r: [1, 3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#water-pattern)" />
      </svg>
    </div>
  )
}