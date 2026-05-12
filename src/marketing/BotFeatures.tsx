import { motion, useReducedMotion } from 'framer-motion'
import { BarChart3, Coins, Landmark, MapIcon, Radio, Bot } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const items = [
  {
    title: 'Player Stats & Leaderboards',
    body: 'Track kills, deaths, K/D ratio, and playtime. Compete on the leaderboard for server-wide recognition.',
    icon: BarChart3,
  },
  {
    title: 'DonCoin Economy',
    body: 'Earn DonCoins through play. Buy gear, vehicles, and perks from the in-game shop.',
    icon: Coins,
  },
  {
    title: 'Bank System',
    body: 'Deposit DonCoins safely. Your bank balance is protected from death — only what you carry is at risk.',
    icon: Landmark,
  },
  {
    title: 'Live Heatmaps',
    body: 'Generate visual player activity maps showing where survivors congregate and fight.',
    icon: MapIcon,
  },
  {
    title: 'Real-time Feeds',
    body: 'Kill, death, connection, and building feeds stream live to Discord. Stay informed.',
    icon: Radio,
  },
  {
    title: 'AI Buddy',
    body: 'Ask the AI assistant anything about the server, commands, or how the economy works.',
    icon: Bot,
  },
]

export function BotFeatures() {
  const reduce = useReducedMotion()

  const cardVariants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.48, ease } },
      }

  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-bg)] py-16 sm:py-24" id="bot-features">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduce ? 0 : 0.5, ease }}
        >
          <div className="mb-4 inline-flex rounded-full bg-[var(--color-accent-alt-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-alt)]">
            Discord Bot
          </div>
          <h2 className="dons-display text-3xl font-extrabold text-[var(--color-text-primary)] sm:text-4xl">
            Your server, automated.
          </h2>
          <p className="dons-lead mt-4 text-lg">
            The DayZ Dons bot handles economy, stats, feeds, and admin tools — so you can focus on survival.
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
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent-alt-soft)] text-[var(--color-accent-alt)]">
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
