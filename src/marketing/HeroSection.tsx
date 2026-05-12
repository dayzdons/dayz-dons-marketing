import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export function HeroSection() {
  const reduce = useReducedMotion()

  const stagger = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: {},
        show: {
          transition: { staggerChildren: 0.09, delayChildren: 0.06 },
        },
      }

  const fadeUp = reduce
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
      }

  return (
    <section className="relative overflow-hidden" id="hero" aria-labelledby="hero-heading">
      <div className="hero-aurora" aria-hidden />
      <div className="hero-glow-ring" aria-hidden />

      <motion.div
        className="relative z-[2] mx-auto max-w-6xl px-4 pb-14 pt-16 text-center sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)] sm:text-sm"
        >
          PlayStation DayZ Server
        </motion.p>

        <motion.h1
          variants={fadeUp}
          id="hero-heading"
          className="dons-display mx-auto max-w-4xl text-3xl font-extrabold leading-[1.06] text-[var(--color-text-primary)] sm:text-5xl sm:leading-[1.04] lg:text-[3.5rem] lg:leading-[1.02]"
        >
          Survive. Dominate.{' '}
          <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
            Earn.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="dons-lead mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed sm:text-lg"
        >
          PVP+PVE | Free Traders | Teleports | Bunkers | Oil Rigs | Quests — all managed by the DayZ Dons Discord bot.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="https://discord.gg/dayzdons"
            target="_blank"
            rel="noopener noreferrer"
            className="dons-btn-primary w-full min-w-[200px] sm:w-auto"
          >
            Join the Server
          </a>
          <a href="#server-features" className="dons-btn-secondary w-full min-w-[200px] sm:w-auto">
            Explore Features
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-5 sm:mt-16 sm:gap-8 sm:px-10"
        >
          {[
            { label: 'Players Online', value: '0-16' },
            { label: 'Map', value: 'Chernarus+' },
            { label: 'Platform', value: 'PlayStation' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-lg font-extrabold text-[var(--color-primary)] sm:text-xl">{s.value}</div>
              <div className="mt-0.5 text-xs text-[var(--color-text-muted)]">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
