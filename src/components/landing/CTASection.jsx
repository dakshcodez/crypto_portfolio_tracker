import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-background-secondary border-b border-gray-700">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-text mb-4">
            Start Trading Today
          </h2>
          <p className="text-text-secondary text-base md:text-lg mb-8 max-w-xl mx-auto">
            Join thousands of traders using CoinFrame to track their portfolios and make informed decisions.
          </p>
          <Link
            to="/auth"
            className="bg-binance-yellow text-gray-900 font-semibold px-8 py-4 rounded-md text-base hover:opacity-90 transition-opacity inline-block"
          >
            Create Free Account
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
