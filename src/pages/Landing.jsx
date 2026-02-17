import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PriceTicker from '../components/PriceTicker'
import HeroSection from '../components/landing/HeroSection'
import StatsSection from '../components/landing/StatsSection'
import FeatureSection from '../components/landing/FeatureSection'
import MarketPreview from '../components/landing/MarketPreview'
import CTASection from '../components/landing/CTASection'

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PriceTicker />
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <MarketPreview />
      <CTASection />
      <Footer />
    </div>
  )
}

export default Landing
