import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/#server-features', label: 'Server' },
  { to: '/#bot-features', label: 'Bot' },
  { to: '/#economy', label: 'Economy' },
  { to: '/#raids', label: 'Raids' },
]

export function MarketingNav() {
  const reduce = useReducedMotion()
  const [mobile, setMobile] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMobile(false)
  }, [pathname])

  useEffect(() => {
    if (!mobile) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [mobile])

  return (
    <header className="sticky top-0 z-[100] bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-border)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]">
          <img src="/logo.png" alt="DayZ Dons" className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://discord.gg/dayzdons"
            target="_blank"
            rel="noopener noreferrer"
            className="dons-btn-primary dons-btn-sm"
          >
            Join Discord
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)] md:hidden"
          aria-expanded={mobile}
          aria-label={mobile ? 'Close menu' : 'Open menu'}
          onClick={() => setMobile((o) => !o)}
        >
          {mobile ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
        </button>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            className="border-t border-[var(--color-border)] bg-[var(--color-page)] px-4 py-4 md:hidden"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="space-y-1">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <a href={l.to} className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-white/5">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-[var(--color-border)] pt-4">
              <a
                href="https://discord.gg/dayzdons"
                target="_blank"
                rel="noopener noreferrer"
                className="dons-btn-primary block w-full py-3 text-center"
              >
                Join Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
