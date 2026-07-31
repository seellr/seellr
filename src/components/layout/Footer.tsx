import Link                  from 'next/link'
import { cn }                from '@/lib/utils'
import { Container }         from './Container'
import { FooterNewsletter }  from './FooterNewsletter'
import { FooterStatBand }    from './FooterStatBand'
import { LanguageSwitcher }  from '@/components/navigation/LanguageSwitcher'
import { FOOTER_COLUMNS, SOCIAL_LINKS } from '@/constants/footer'
import { STATS }             from '@/lib/mock/stats'
import { SITE_CONFIG }       from '@/config/site'

const FOOTER_STATS = STATS.slice(0, 3)

function SocialIcon({ id }: { id: string }) {
  if (id === 'Twitter') return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.857L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
    </svg>
  )
  if (id === 'Github') return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  )
  if (id === 'Linkedin') return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
  return null
}

function FooterLogo() {
  return (
    <Link
      href="/"
      aria-label="Seellr – Go to homepage"
      className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
    >
      <span
        aria-hidden="true"
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-foreground"
      >
        <span className="select-none text-[11px] font-bold leading-none text-background">S</span>
      </span>
      <span aria-hidden="true" className="text-[15px] font-semibold tracking-tight text-foreground">
        Seellr
      </span>
    </Link>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-background" aria-label="Site footer">

      {/* ── Stat band (Client Component — animated counters) ─────── */}
      <FooterStatBand stats={FOOTER_STATS} />

      {/* ── Main grid ─────────────────────────────────────────────── */}
      <Container>
        <div className="py-14 lg:py-16">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-[280px_1fr]">

            {/* Left — brand + newsletter */}
            <div className="col-span-2 flex flex-col gap-6 lg:col-span-1">
              <FooterLogo />
              <p className="max-w-[240px] text-sm leading-relaxed text-muted-foreground">
                {SITE_CONFIG.tagline}
              </p>

              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium text-foreground">Stay in the loop</p>
                <FooterNewsletter />
              </div>
            </div>

            {/* Right — link columns */}
            <div className="col-span-2 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-1">
              {FOOTER_COLUMNS.map((col) => (
                <nav key={col.id} aria-label={`${col.title} links`}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground">
                    {col.title}
                  </p>
                  <ul className="flex flex-col gap-2.5" role="list">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            'text-sm text-muted-foreground',
                            'transition-colors duration-150 hover:text-foreground',
                            'focus-visible:outline-none focus-visible:rounded-sm',
                            'focus-visible:ring-2 focus-visible:ring-brand-accent',
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────────────── */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={cn(
                  'inline-flex h-8 w-8 items-center justify-center rounded-lg',
                  'text-muted-foreground transition-colors duration-150',
                  'hover:bg-brand-surface hover:text-foreground',
                  'focus-visible:outline-none focus-visible:ring-2',
                  'focus-visible:ring-brand-accent focus-visible:ring-offset-2',
                )}
              >
                <SocialIcon id={social.icon} />
              </a>
            ))}

            <span aria-hidden="true" className="mx-1 h-4 w-px bg-border" />

            <LanguageSwitcher />
          </div>
        </div>
      </Container>
    </footer>
  )
}
