import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-river-stone dark:border-dark-border dark:bg-deep-water/80 relative z-10 mt-auto border-t bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-deep-water dark:text-terminal-text mb-4 font-mono text-lg font-semibold">
              LHFP
            </h3>
            <p className="text-stream-blue dark:text-terminal-text/70">
              Digital consulting for mission-driven businesses who read the
              water before they cast.
            </p>
          </div>

          <div>
            <h4 className="text-deep-water dark:text-terminal-text mb-4 font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-stream-blue dark:text-terminal-text/70 hover:text-casting-green transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/philosophy"
                  className="text-stream-blue dark:text-terminal-text/70 hover:text-casting-green transition-colors"
                >
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-stream-blue dark:text-terminal-text/70 hover:text-casting-green transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-stream-blue dark:text-terminal-text/70 hover:text-casting-green transition-colors"
                >
                  Cast a Line
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-deep-water dark:text-terminal-text mb-4 font-semibold">
              Contact
            </h4>
            <p className="text-stream-blue dark:text-terminal-text/70">
              <a
                href="mailto:hello@lhfp.consulting"
                className="hover:text-casting-green transition-colors"
              >
                hello@lhfp.consulting
              </a>
            </p>
          </div>
        </div>

        <div className="border-river-stone dark:border-dark-border border-t pt-8 text-center">
          <p className="text-stream-blue dark:text-terminal-text/60 text-sm">
            &copy; {new Date().getFullYear()} LHFP Consulting. Built with
            patience and precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
