import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="flex min-h-[55vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">404</p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-[var(--color-text-secondary)]">
        The page you requested does not exist or may have moved.
      </p>
      <Link to="/" className="dons-btn-secondary mt-10 inline-flex">
        Return home
      </Link>
    </main>
  )
}
