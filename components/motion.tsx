'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FadeIn({ children, delay = 0, duration = 0.5, className }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerChildrenProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export function StaggerChildren({ children, staggerDelay = 0.1, className }: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScaleOnHoverProps {
  children: ReactNode
  scale?: number
  className?: string
}

export function ScaleOnHover({ children, scale = 1.05, className }: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface WaterRippleProps {
  className?: string
}

export function WaterRipple({ className }: WaterRippleProps) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.5, 2],
        opacity: [0.3, 0.2, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  )
}