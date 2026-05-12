import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export function FinalCta() {
  const reduce = useReducedMotion()

  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-page)] py-16 sm:py-20">
      <motion.div
        className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: reduce ? 0 : 0.52, ease }}
      >
        <h2 className="dons-display text-3xl font-extrabold text-[var(--color-text-primary)] sm:text-4xl">
          Ready to join DayZ Dons?
        </h2>
        <p className="dons-lead mx-auto mt-4 max-w-2xl text-lg">
          Jump into Chernarus+ with free traders, a full economy, scheduled raids, and a community that knows how to survive.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://discord.gg/dayzdons"
            target="_blank"
            rel="noopener noreferrer"
            className="dons-btn-primary w-full max-w-xs sm:w-auto"
          >
            Join the Discord
          </a>
          <a href="#hero" className="dons-btn-secondary w-full max-w-xs sm:w-auto">
            Back to top
          </a>
        </div>
      </motion.div>
    </section>
  )
}
