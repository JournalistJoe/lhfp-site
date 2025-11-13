// Sanity image type
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  alt?: string
  caption?: string
}

// Author type
export interface Author {
  name: string
  slug?: { current: string }
  image?: SanityImage
  bio?: string
  role?: string
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
    website?: string
  }
}

// Category type
export interface Category {
  title: string
  slug: { current: string }
  color?: string
}

// Portable Text types
export interface PortableTextBlock {
  _type: 'block'
  _key: string
  children: Array<{
    _type: 'span'
    _key: string
    marks: string[]
    text: string
  }>
  markDefs: Array<{
    _type: string
    _key: string
    href?: string
  }>
  style?: string
  level?: number
}

export interface PortableTextImage {
  _type: 'image'
  _key: string
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

export interface PortableTextCode {
  _type: 'code'
  _key: string
  code: string
  language?: string
  filename?: string
}

export type PortableTextContent = PortableTextBlock | PortableTextImage | PortableTextCode

// Blog post type
export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  author: Author
  excerpt: string
  mainImage?: SanityImage
  categories: Category[]
  tags?: string[]
  publishedAt: string
  body: PortableTextContent[]
  readingTime?: number
  featured?: boolean
}

// Case study type
export interface CaseStudy {
  _id: string
  title: string
  slug: { current: string }
  client: string
  industry: string
  projectUrl?: string
  services: string[]
  excerpt: string
  featuredImage?: SanityImage
  publishedAt: string
  problem?: {
    title: string
    content: PortableTextContent[]
  }
  observation?: {
    title: string
    content: PortableTextContent[]
  }
  solution?: {
    title: string
    content: PortableTextContent[]
  }
  results?: {
    title: string
    metrics?: Array<{
      metric: string
      value: string
      description?: string
    }>
    content?: PortableTextContent[]
  }
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  technologies?: string[]
}