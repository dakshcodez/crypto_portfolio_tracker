import { motion } from 'framer-motion'

const stats = [
  { label: '24h Trading Volume', value: '$2.4B', suffix: '' },
  { label: 'Total Users', value: '125K', suffix: '+' },
  { label: 'Supported Coins', value: '200', suffix: '+' },
  { label: 'Total Transactions', value: '1.2M', suffix: '+' },
]

const StatsSection = () => {
  return (
    <section className="py-8 px-4 border-b border-gray-700 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <p className="text-2xl md:text-3xl font-semibold text-text mb-1">
                {stat.value}
                {stat.suffix && <span className="text-text-secondary">{stat.suffix}</span>}
              </p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
