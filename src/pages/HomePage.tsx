import { HeroSection } from '../marketing/HeroSection'
import { StatsBanner } from '../marketing/StatsBanner'
import { ServerFeatures } from '../marketing/ServerFeatures'
import { BotFeatures } from '../marketing/BotFeatures'
import { EconomySection } from '../marketing/EconomySection'
import { RaidSection } from '../marketing/RaidSection'
import { FinalCta } from '../marketing/FinalCta'

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsBanner />
      <ServerFeatures />
      <BotFeatures />
      <EconomySection />
      <RaidSection />
      <FinalCta />
    </main>
  )
}
