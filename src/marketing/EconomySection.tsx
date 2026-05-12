import { motion, useReducedMotion } from 'framer-motion'
import { CircleDollarSign, ShoppingBag, ArrowLeftRight, ShieldCheck } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const items = [
  {
    title: 'Earn DonCoins',
    body: 'Kill players, complete quests, and survive to earn DonCoins — the server currency.',
    icon: CircleDollarSign,
  },
  {
    title: 'Shop System',
    body: 'Browse and buy gear, vehicles, and perks through Discord. Orders are delivered in-game.',
    icon: ShoppingBag,
  },
  {
    title: 'Wallet & Bank',
    body: 'Keep DonCoins in your wallet for spending or deposit them in the bank where they are safe from death.',
    icon: ArrowLeftRight,
  },
  {
    title: 'Secure Economy',
    body: 'Admins can manage balances, freeze accounts, and audit transactions. Fair play enforced.',
    icon: ShieldCheck,
  },
]

export function EconomySection() {
  const reduce = useReducedMotion()

  const cardVariants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.48, ease } },
      }

  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-page)] py-16 sm:py-24" id="economy">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduce ? 0 : 0.5, ease }}
        >
          <div className="mb-4 inline-flex rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
            DonCoin Economy
          </div>
          <h2 className="dons-display text-3xl font-extrabold text-[var(--color-text-primary)] sm:text-4xl">
            Earn, spend, and bank.
          </h2>
          <p className="dons-lead mt-4 text-lg">
            A full in-game economy with currency, shops, banking, and admin oversight.
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
