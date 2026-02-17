import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TradingCard from '../TradingCard'
import TradingPreview from './TradingPreview'

const HeroSection = () => {
  const [email, setEmail] = useState('')

  return (
    <section className="py-12 md:py-16 px-4 border-b border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-text mb-4 leading-tight">
              Buy & Track Crypto
              <br />
              <span className="text-binance-yellow">with Confidence.</span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg mb-8 max-w-lg">
              Professional portfolio tracking platform. Real-time data, advanced analytics, and secure transaction management.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background-secondary border border-gray-700 rounded-md px-4 py-3 text-sm text-text placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-binance-yellow focus:border-binance-yellow"
                />
                <Link
                  to="/auth"
                  className="bg-binance-yellow text-gray-900 font-semibold px-6 py-3 rounded-md text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Get Started
                </Link>
              </div>
              <Link
                to="/market"
                className="text-text-secondary hover:text-binance-yellow text-sm transition-colors inline-block"
              >
                View Markets →
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Generic Trading Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:block"
          >
            <TradingCard className="p-4">
              <TradingPreview />
            </TradingCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
