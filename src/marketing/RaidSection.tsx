import { motion, useReducedMotion } from 'framer-motion'
import { Timer, Shield, Trophy, Gauge } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const items = [
  {
    title: 'Raid Schedule',
    body: 'Structured peace and raid cycles. Know exactly when PvP is active and when to build up.',
    icon: Timer,
  },
  {
    title: 'Peace Time',
    body: 'Build, trade, and quest without fear of raids. Fortify your base for when the storm comes.',
    icon: Shield,
  },
  {
    title: 'Server Events',
    body: 'FFA tournaments, TDM battles, hostage rescue, racing — regular events with DonCoin prizes.',
    icon: Trophy,
  },
  {
    title: 'Auto-Managed',
    body: 'The bot handles raid timing, notifications, and event scheduling. No manual oversight needed.',
    icon: Gauge,
  },
]

export function RaidSection() {
  const reduce = useReducedMotion()

  const cardVariants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.48, ease } },
      }

  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-bg)] py-16 sm:py-24" id="raids">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduce ? 0 : 0.5, ease }}
        >
          <div className="mb-4 inline-flex rounded-full bg-[var(--color-accent)]/15 px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
            Raids & Events
          </div>
          <h2 className="dons-display text-3xl font-extrabold text-[var(--color-text-primary)] sm:text-4xl">
            Fight on your terms.
          </h2>
          <p className="dons-lead mt-4 text-lg">
            Scheduled raid cycles and community events keep the server active and competitive.
          </p>
        </motion.div>

        <motion.ul
          className="mt-14 grid gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: reduce ? 0 : 0.07, delayChildren: reduce ? 0 : 0.08 } },
          }}
        >
          {items.map((item) => {
            const Icon = item.icon
            return (
              <motion.li key={item.title} variants={cardVariants} className="dons-card h-full">
                <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.body}</p>
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
