import { motion, useReducedMotion } from 'framer-motion'
import { Crosshair, Map, Navigation, Castle, Scroll, Swords } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const items = [
  {
    title: 'PVP+PVE Hybrid',
    body: 'Both playstyles coexist on one server. Fight other survivors or brave the environment — the choice is yours.',
    icon: Crosshair,
  },
  {
    title: 'Free Traders',
    body: 'Gear up without the grind. Trade with NPC traders spread across the map for weapons, supplies, and vehicles.',
    icon: Map,
  },
  {
    title: 'Teleport System',
    body: 'Fast travel between key locations. Strategic mobility lets you focus on action, not walking.',
    icon: Navigation,
  },
  {
    title: 'Bunkers & Oil Rigs',
    body: 'Endgame loot zones with high-risk, high-reward encounters. Only the prepared survive.',
    icon: Castle,
  },
  {
    title: 'Quest System',
    body: 'Complete challenges to earn DonCoins and exclusive rewards. New objectives roll regularly.',
    icon: Scroll,
  },
  {
    title: 'Raid Schedule',
    body: 'Structured PvP with scheduled peace and raid cycles. Know when to fight and when to fortify.',
    icon: Swords,
  },
]

export function ServerFeatures() {
  const reduce = useReducedMotion()

  const cardVariants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.48, ease } },
      }

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-page)] py-16 sm:py-24" id="server-features">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduce ? 0 : 0.5, ease }}
        >
          <h2 className="dons-display text-3xl font-extrabold text-[var(--color-text-primary)] sm:text-4xl">
            Built for survival. Designed for action.
          </h2>
          <p className="dons-lead mt-4 text-lg">
            DayZ Dons combines the best of PVP and PVE with a rich economy and quality-of-life systems.
          </p>
        </motion.div>

        <motion.ul
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
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
