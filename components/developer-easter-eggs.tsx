'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Fish } from '@phosphor-icons/react'

export function DeveloperEasterEggs() {
  const [showKonamiReward, setShowKonamiReward] = useState(false)
  const [konamiProgress, setKonamiProgress] = useState(0)

  useEffect(() => {
    // Console messages
    console.log(
      '%c🎣 Found the developer tools, did you?',
      'color: #059669; font-size: 18px; font-weight: bold; font-family: monospace;'
    )
    console.log(
      '%cWe appreciate folks who read the source.',
      'color: #0891B2; font-size: 14px; font-family: monospace;'
    )
    console.log(
      "%cIf you're looking for like-minded developers who care about craft,\ncast a line: hello@lhfp.consulting",
      'color: #1E3A5F; font-size: 14px; font-family: monospace;'
    )
    console.log(
      '%c↑ ↑ ↓ ↓ ← → ← → B A',
      'color: #EA580C; font-size: 12px; font-family: monospace;'
    )
    console.log('\n')
    console.log(
      `%c
     /\\
    /  \\    Long Haired Freaky People
   /    \\   Consulting Services
  /  <>  \\  
 /________\\ Reading the Water, Writing the Code
    ||||
    ||||    
`,
      'color: #059669; font-family: monospace; line-height: 1.2;'
    )

    // Konami code detection
    const konamiCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ]

    let currentIndex = 0

    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      
      if (key === konamiCode[currentIndex] || e.key === konamiCode[currentIndex]) {
        currentIndex++
        setKonamiProgress((currentIndex / konamiCode.length) * 100)
        
        if (currentIndex === konamiCode.length) {
          setShowKonamiReward(true)
          currentIndex = 0
          setKonamiProgress(0)
          
          // Auto-hide after 5 seconds
          setTimeout(() => {
            setShowKonamiReward(false)
          }, 5000)
        }
      } else {
        currentIndex = 0
        setKonamiProgress(0)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <>
      {/* Konami progress indicator */}
      {konamiProgress > 0 && konamiProgress < 100 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="bg-deep-water/90 backdrop-blur-sm rounded-full p-2">
            <div className="w-24 h-2 bg-stream-blue/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-casting-green"
                animate={{ width: `${konamiProgress}%` }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Konami code reward */}
      <AnimatePresence>
        {showKonamiReward && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div className="bg-deep-water/95 backdrop-blur-md rounded-2xl p-12 text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-casting-green mb-6"
              >
                <Fish size={80} weight="fill" />
              </motion.div>
              <h2 className="text-terminal-text text-3xl font-bold mb-4 font-mono">
                Achievement Unlocked!
              </h2>
              <p className="text-terminal-text/80 text-lg mb-2">
                "Up, Up, Down, Down, Left, Right, Left, Right, B, A"
              </p>
              <p className="text-casting-green font-mono">
                You found the secret fish! 🎣
              </p>
              <p className="text-terminal-text/60 text-sm mt-4">
                Email us with "Konami Fish" for a surprise
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}