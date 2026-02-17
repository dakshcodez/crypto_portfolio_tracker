import { motion } from 'framer-motion'
import TradingCard from '../TradingCard'
import FeatureIcon from './FeatureIcon'

const features = [
  {
    title: 'Secure & Reliable',
    description: 'Bank-level security with encrypted data storage and secure transaction processing.',
    icon: 'shield',
  },
  {
    title: 'Real-time Portfolio Tracking',
    description: 'Monitor your holdings with live price updates and instant portfolio calculations.',
    icon: 'chart',
  },
  {
    title: 'Advanced Market Data',
    description: 'Access comprehensive market analytics, charts, and trading insights.',
    icon: 'analytics',
  },
  {
    title: 'Low Fees',
    description: 'Transparent pricing with competitive rates. No hidden charges or surprises.',
    icon: 'dollar',
  },
]

const FeatureSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 border-b border-gray-700">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-text mb-3">
            Why Choose CoinFrame
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-2xl mx-auto">
            Built for traders and investors who demand precision, security, and professional-grade tools.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <TradingCard className="p-5 h-full hover:bg-gray-800/30 transition-colors">
                <FeatureIcon icon={feature.icon} />
                <h3 className="text-base font-semibold text-text mb-2 mt-4">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
              </TradingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
