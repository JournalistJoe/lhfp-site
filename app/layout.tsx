import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { DeveloperEasterEggs } from '@/components/developer-easter-eggs'
import './globals.css'

export const metadata: Metadata = {
  title: 'LHFP - Long Haired Freaky People Consulting',
  description:
    'Digital consulting for mission-driven businesses. We read the water before we cast.',
  keywords: [
    'consulting',
    'digital strategy',
    'web development',
    'automation',
    'mission-driven',
  ],
  authors: [{ name: 'LHFP Consulting' }],
  openGraph: {
    title: 'LHFP - Long Haired Freaky People Consulting',
    description:
      'Digital consulting for mission-driven businesses. We read the water before we cast.',
    url: 'https://lhfp.consulting',
    siteName: 'LHFP Consulting',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <DeveloperEasterEggs />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
