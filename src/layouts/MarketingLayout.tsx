import { Outlet, useLocation } from 'react-router-dom'
import { RouteHead } from '../components/seo/RouteHead'
import { MarketingNav } from '../marketing/MarketingNav'
import { Footer } from '../marketing/Footer'
import { ScrollToTop } from './ScrollToTop'

export function MarketingLayout() {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-dvh flex-col bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <RouteHead />
      <ScrollToTop />
      <MarketingNav key={pathname} />
      <div className="flex min-h-0 flex-1 flex-col">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
