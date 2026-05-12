export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[#0a0a0b] py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div className="max-w-sm">
          <img src="/logo.png" alt="DayZ Dons" className="h-8 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            A premium DayZ community with PVP+PVE gameplay, custom economy, Discord bot integration, and an active player base on PlayStation.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Server</p>
            <ul className="mt-4 space-y-2.5">
              <li><a href="/#server-features" className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]">Features</a></li>
              <li><a href="/#economy" className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]">Economy</a></li>
              <li><a href="/#raids" className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]">Raids & Events</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Bot</p>
            <ul className="mt-4 space-y-2.5">
              <li><a href="/#bot-features" className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]">Bot Features</a></li>
              <li><a href="/#bot-features" className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]">Commands</a></li>
              <li><a href="https://panel.dayzdons.online" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]">Control Panel</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Community</p>
            <ul className="mt-4 space-y-2.5">
              <li><a href="https://discord.gg/dayzdons" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]">Discord</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-4 border-t border-white/10 px-4 pt-8 text-xs text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} DayZ Dons. All rights reserved.</p>
      </div>
    </footer>
  )
}
