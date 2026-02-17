import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PriceTicker from '../components/PriceTicker'
import NeonCard from '../components/NeonCard'
import GlowButton from '../components/GlowButton'

const Landing = () => {
  const features = [
    {
      title: 'Real-time Tracking',
      description: 'Monitor your portfolio value with live price updates and instant calculations.',
      glowColor: 'blue',
    },
    {
      title: 'Beautiful Charts',
      description: 'Visualize your portfolio growth and asset allocation with clean, intuitive charts.',
      glowColor: 'purple',
    },
    {
      title: 'Advanced Analytics',
      description: 'Deep insights into your trading performance with cyberpunk-styled visualizations.',
      glowColor: 'green',
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <Navbar />
      <PriceTicker />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="neon-text-gradient">Track Your Crypto.</span>
            <br />
            <span className="text-text">Dominate the Market.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto"
          >
            A futuristic trading terminal for tracking your cryptocurrency investments.
            Real-time data. Advanced analytics. Cyberpunk aesthetics.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/auth">
              <GlowButton variant="primary" className="text-lg px-8 py-4">
                Get Started
              </GlowButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-text text-center mb-16"
          >
            <span className="neon-text-gradient">Everything You Need</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <NeonCard key={index} glowColor={feature.glowColor} className="p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-neon-blue mb-4 opacity-20"></div>
                  <h3 className="text-2xl font-bold text-text mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <NeonCard className="p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-text mb-4">
                Ready to <span className="neon-text-gradient">Dominate</span>?
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                Start tracking your portfolio in seconds.
              </p>
              <Link to="/auth">
                <GlowButton variant="primary" className="text-lg px-8 py-4">
                  Create Account
                </GlowButton>
              </Link>
            </motion.div>
          </NeonCard>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Landing

