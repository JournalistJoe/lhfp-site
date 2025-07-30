# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LHFP (Long Haired Freaky People) Consulting Services website - a Next.js-based website for a digital consulting agency that specializes in custom solutions for mission-driven businesses.

## Tech Stack

- **Framework**: Next.js 15.4.5 with App Router
- **React**: v19.1.0
- **CMS**: Sanity v3.99.0 (installed but not configured)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Animation**: Framer Motion 12.23.11
- **Type Safety**: TypeScript v5
- **Hosting**: Vercel
- **Analytics**: Vercel Analytics (installed)
- **Code Formatting**: Prettier with Tailwind plugin
- **Forms**: Web3Forms for contact form handling

## Environment Variables

Create a `.env.local` file with:
```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key-here
```

Get your access key from https://web3forms.com/

## Common Commands

```bash
# Development server (port 3000)
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Linting with ESLint
npm run lint

# Install dependencies
npm install

# Format code with Prettier
npx prettier --write .
```

## Architecture Guidelines

### Current Project Structure
```
/app              # Next.js App Router pages
  ├── layout.tsx  # Root layout with Navigation & Footer components
  ├── page.tsx    # Homepage with Hero & ServicesPreview components
  └── globals.css # Global styles with CSS variables for brand colors
/components       # Reusable React components
  ├── navigation.tsx      # Site navigation
  ├── hero.tsx           # Homepage hero section
  ├── services-preview.tsx # Services overview component
  └── footer.tsx         # Site footer
/lib              # Utility functions
  └── utils.ts    # cn() helper for className merging
/docs             # Brand guidelines and project documentation
/public           # Static assets (SVG icons)
```

### Key Implementation Details

1. **Dark Mode**: Already set as default in layout.tsx with `className="dark"`
2. **Color System**: CSS variables defined in globals.css:
   - `--deep-water`: #0A1628 (primary dark)
   - `--stream-blue`: #1E3A5F (secondary)
   - `--casting-green`: #059669 (accent)
   - Additional shades for each color
3. **Typography**: 
   - Inter for body text
   - JetBrains Mono for code
   - Crimson Pro for accent text
4. **Tailwind Config**: Using v4 with PostCSS, custom theme extends default

### Key Design Principles

1. **Dark Mode First**: All designs should prioritize dark mode with optional light mode
2. **Water-Inspired**: Use the defined color palette (Deep Water #0A1628, Stream Blue #1E3A5F, Casting Green #059669)
3. **Typography**: Inter for headers/body, JetBrains Mono for code blocks
4. **Performance**: Target Lighthouse scores of 95+ across all metrics

### Brand Implementation

- Implement the "reading the water" philosophy throughout UX
- Use fly fishing metaphors naturally in copy
- Include developer-focused easter eggs (console messages, keyboard shortcuts)
- Maintain anti-corporate, authentic voice

### Service Pages Structure

Each service page should include:
- Clear value proposition
- Detailed process explanation
- Pricing information
- Call-to-action ("Cast a Line")

### Critical Features

1. **"Cast a Line" Interactive Element**: Primary CTA throughout site
2. **Smart Content Loading**: Progressive enhancement based on user behavior
3. **Case Studies**: Follow Problem → Observation → Solution → Results format
4. **Contact Form**: Conversational with qualification questions

## Development Notes

- Mobile-first responsive design is mandatory
- No stock photography - use abstract patterns or code-inspired visuals
- Implement smooth scroll and subtle animations with Framer Motion
- Ensure all interactive elements have proper keyboard navigation
- Keep accessibility standards (WCAG 2.1 AA) in mind

## Current Implementation Status

### Completed
- Basic Next.js app structure with App Router
- Dark mode configured as default
- Custom color palette implemented in CSS variables
- Typography system configured
- Component file structure created
- Prettier formatting configured (no semicolons, single quotes, 2-space indentation)

### Pending Implementation
- Sanity CMS studio configuration (`sanity.config.ts`, `/sanity` directory)
- Component implementations (navigation, hero, footer, services-preview)
- Service pages routing and content
- "Cast a Line" interactive CTA element
- Additional pages (About, Services detail pages, Case Studies, Contact)
- Environment variables setup for Sanity and analytics
- Framer Motion animations
- Accessibility enhancements
- API routes or server actions for form handling

## Important Files

- `app/globals.css`: Contains all CSS variables and base styles
- `lib/utils.ts`: Contains the `cn()` utility for Tailwind class merging
- `.prettierrc`: Code formatting configuration
- `docs/`: Contains comprehensive brand guidelines and content briefs

## Design System Rules

### Icons
- **NO EMOJIS**: Never use emojis in the interface
- Use Phosphor Icons (@phosphor-icons/react) for all icons
- Consistent icon weight: regular (default) for most uses, bold for emphasis
- Icon size: 24px default, 20px for inline, 32px for feature icons
- Icons should enhance, not dominate the content