import { motion } from 'framer-motion'

const StatCard = ({ title, value, subtitle, trend }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all"
    >
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <p className="text-3xl font-bold text-text mb-1">{value}</p>
      {subtitle && (
        <p className={`text-sm font-medium ${
          trend === 'up' ? 'text-gain' : trend === 'down' ? 'text-loss' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default StatCard

