import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PriceTicker from '../components/PriceTicker'

const Landing = () => {
  const features = [
    {
      title: 'Real-time Tracking',
      description: 'Monitor your portfolio value with live price updates and instant calculations.',
      icon: '📊',
    },
    {
      title: 'Beautiful Charts',
      description: 'Visualize your portfolio growth and asset allocation with clean, intuitive charts.',
      icon: '📈',
    },
    {
      title: 'Simple & Clean',
      description: 'Focus on what matters with a minimal, distraction-free interface.',
      icon: '✨',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PriceTicker />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl font-bold text-text mb-6 leading-tight"
          >
            Track your crypto portfolio.
            <br />
            Simply.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            A minimal, beautiful way to track your cryptocurrency investments.
            No clutter. No noise. Just your portfolio.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/auth"
              className="inline-block px-8 py-4 bg-accent text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-text text-center mb-16"
          >
            Everything you need
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-12 card-shadow"
          >
            <h2 className="text-4xl font-bold text-text mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start tracking your portfolio in seconds.
            </p>
            <Link
              to="/auth"
              className="inline-block px-8 py-4 bg-accent text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Create Account
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Landing

