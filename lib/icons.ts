// Centralized icon system for LHFP
// Using Phosphor Icons for consistent, professional appearance

import {
  // Service Icons
  Funnel,
  Lightning,
  Terminal,
  EnvelopeSimple,
  
  // Navigation Icons
  ArrowRight,
  ArrowLeft,
  CaretRight,
  CaretDown,
  X,
  List,
  
  // UI Icons
  Sun,
  Moon,
  Check,
  Circle,
  
  // Feature Icons
  Crosshair,
  FlowArrow,
  ChartLine,
  Users,
  Code,
  Globe,
  
  // Contact Icons
  MapPin,
  Phone,
  At,
} from '@phosphor-icons/react'

// Service icon mapping
export const serviceIcons = {
  'bucket-audit': Funnel,
  'terminal-velocity': Lightning,
  'sudo-make-money': Terminal,
  'smtp-revival': EnvelopeSimple,
} as const

// Icon size presets
export const iconSizes = {
  inline: 20,
  default: 24,
  feature: 32,
  hero: 48,
} as const

// Re-export commonly used icons
export {
  // Service Icons
  Funnel as BucketIcon,
  Lightning as VelocityIcon,
  Terminal as AutomationIcon,
  EnvelopeSimple as EmailIcon,
  
  // Navigation Icons
  ArrowRight,
  ArrowLeft,
  CaretRight,
  CaretDown,
  X as CloseIcon,
  List as MenuIcon,
  
  // UI Icons
  Sun as SunIcon,
  Moon as MoonIcon,
  Check as CheckIcon,
  Circle as BulletIcon,
  
  // Feature Icons
  Crosshair as TargetIcon,
  FlowArrow as FlowIcon,
  ChartLine as GrowthIcon,
  Users as TeamIcon,
  Code as CodeIcon,
  Globe as WebIcon,
  
  // Contact Icons
  MapPin as LocationIcon,
  Phone as PhoneIcon,
  At as EmailAtIcon,
}