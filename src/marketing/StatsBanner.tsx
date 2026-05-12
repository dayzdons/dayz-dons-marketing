import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const stats = [
  { label: 'Game Mode', value: 'PVP+PVE' },
  { label: 'Max Players', value: '16' },
  { label: 'Economy', value: 'DonCoin' },
  { label: 'Platform', value: 'PlayStation' },
  { label: 'Host', value: 'Nitrado' },
]

export function StatsBanner() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-[var(--color-bg)] py-10 sm:py-12">
      <motion.div
        className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: reduce ? 0 : 0.5, ease }}
      >
        <div className="grid grid-cols-3 gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-6 sm:grid-cols-5 sm:gap-8 sm:px-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-sm font-bold text-[var(--color-text-primary)] sm:text-base">{s.value}</div>
              <div className="mt-0.5 text-xs text-[var(--color-text-muted)]">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
