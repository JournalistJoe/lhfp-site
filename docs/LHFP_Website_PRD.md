# LHFP Website Project Requirements Document

## Project Overview

### Project Name
LHFP Consulting Services Website

### Project Description
A modern, minimalist website for Long Haired Freaky People (LHFP) Consulting Services that embodies the "reading the water" philosophy while maintaining subtle developer aesthetics. The site will serve as a digital storefront for attracting mission-driven businesses seeking thoughtful digital strategy and implementation.

### Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **CMS**: Sanity v3
- **Hosting**: Vercel
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion (subtle, purposeful animations)
- **Analytics**: Plausible or Fathom (privacy-focused)
- **Email**: Resend or SendGrid for contact forms
- **Type Safety**: TypeScript

## Core Requirements

### 1. Design Requirements

#### Visual Design
- Dark mode first, with smooth light/dark toggle
- Implements full brand guidelines (see companion document)
- Subtle water-inspired animations and patterns
- Clean, minimal interface with generous whitespace
- Mobile-first responsive design

#### Performance
- Lighthouse score 95+ across all metrics
- Core Web Vitals optimized
- Image optimization with Next.js Image component
- Lazy loading for below-fold content

### 2. Content Structure

#### Pages

**Homepage**
- Hero section with philosophy statement
- Services overview (cards layout)
- "Match the Hatch" methodology explanation
- Recent case studies (2-3 featured)
- Contact CTA

**About**
- The "Signs" story and LHFP origin
- Fly fishing philosophy deep dive
- Mission and values
- Founder bio (keep it real, not corporate)

**Services**
- Bucket Audit detailed page
- Terminal Velocity (custom sites) page
- sudo make money (automation strategy) page
- SMTP Revival (email renaissance) page
- Each with clear pricing, process, and outcomes

**Philosophy**
- Extended "Match the Hatch" methodology
- How we approach problems
- Why we work with who we work with
- Not just another agency messaging

**Case Studies**
- 3-5 detailed case studies
- Problem → Observation → Solution → Results format
- Include code snippets where relevant
- Focus on interesting problems, not just metrics

**Contact**
- Simple, conversational contact form
- Clear response time expectations
- Option to book strategy session directly
- Location: West Kelowna, BC (subtle, not prominent)

**Blog** (Phase 2)
- Technical posts mixed with philosophy
- Fly fishing analogies for digital concepts
- Guest posts from interesting clients

### 3. Sanity CMS Schema

#### Content Types

**Case Study**
```typescript
{
  title: string
  slug: string
  client: string
  industry: string
  challenge: text (rich text)
  observation: text (rich text)
  solution: text (rich text)
  results: array of metrics
  codeSnippets: array of code blocks
  images: array of images
  testimonial: object {
    quote: text
    author: string
    role: string
  }
  featured: boolean
  publishedAt: datetime
}
```

**Service**
```typescript
{
  title: string
  slug: string
  tagline: string
  icon: string (emoji or icon reference)
  description: text (rich text)
  price: string
  deliverables: array of strings
  process: array of {
    step: string
    description: text
  }
  cta: string
  order: number
}
```

**Philosophy Post**
```typescript
{
  title: string
  slug: string
  excerpt: text
  content: text (rich text)
  category: string
  publishedAt: datetime
}
```

**Site Settings**
```typescript
{
  siteTitle: string
  siteDescription: text
  socialLinks: array
  contactEmail: string
  analyticsId: string
}
```

### 4. Technical Requirements

#### Components Library

**Core Components**
- Navigation (sticky, blur backdrop)
- Footer (minimal, useful links only)
- DarkModeToggle
- Button (primary, secondary, ghost variants)
- Card (service, case study, blog post variants)
- CodeBlock (with syntax highlighting)
- ContactForm (with validation and honey pot)
- Hero (reusable with variants)
- Section (consistent spacing wrapper)

**Animation Components**
- FadeInView (intersection observer)
- StaggerChildren (for lists)
- ParallaxScroll (subtle, for backgrounds)
- TypeWriter (for hero, used sparingly)

#### SEO & Meta
- Dynamic meta tags per page
- Open Graph images
- Structured data for services
- XML sitemap
- Robots.txt

#### Integrations
- Contact form → Email service → Notification
- Calendar booking (Cal.com or similar) for strategy sessions
- Analytics with custom events for key actions
- Newsletter signup (ConvertKit or similar) - Phase 2

### 5. Special Features

#### "Cast a Line" Interactive Element
- Homepage hero interaction
- User can "cast" across the screen
- Reveals different services/philosophy points
- Mobile: tap to reveal
- Desktop: mouse movement creates casting arc

#### Code Easter Eggs
- Konami code reveals developer joke
- Console.log message for developers who inspect
- Hidden ASCII art in source code comments

#### Smart Content Loading
- Detect user's industry from referrer/behavior
- Adjust case study order accordingly
- Remember dark/light mode preference

### 6. Content Management

#### Editor Experience
- Clean, intuitive Sanity Studio setup
- Custom previews for all content types
- Helpful field descriptions
- Validation rules to maintain quality

#### Content Guidelines
- All case studies must include real metrics
- Services must have clear pricing
- No stock photos - illustrations or real photos only
- Code snippets must be tested and functional

### 7. Launch Requirements

#### Pre-Launch
- [ ] Content for all core pages
- [ ] 3 complete case studies
- [ ] Service pages with pricing
- [ ] Contact form tested
- [ ] SEO audit complete
- [ ] Performance testing passed
- [ ] Cross-browser testing complete
- [ ] Mobile testing on real devices
- [ ] Accessibility audit (WCAG AA)

#### Post-Launch  
- [ ] Analytics configured and tested
- [ ] Monitor Core Web Vitals
- [ ] Set up uptime monitoring
- [ ] Configure error tracking (Sentry)
- [ ] Submit to search engines
- [ ] Social media profiles updated

### 8. Future Phases

#### Phase 2 (3-6 months)
- Blog functionality
- Newsletter integration
- Resource library (templates, guides)
- Client portal for project updates

#### Phase 3 (6-12 months)
- Booking system for services
- Invoice/proposal integration
- Expanded case study formats (video)
- Community features for clients

## Success Metrics

### Primary KPIs
- Qualified lead generation (form submissions)
- Time on site > 2 minutes
- Service page → Contact conversion rate > 5%
- Case study engagement rate

### Secondary KPIs
- Newsletter signups (Phase 2)
- Repeat visitor rate
- Social sharing of content
- Developer console message discoveries

## Notes
- Prioritize storytelling over feature lists
- Every page should reinforce the "thoughtful observer" brand
- Keep it fast, keep it simple, make it memorable
- This is a craftsman's portfolio, not a corporation's brochure