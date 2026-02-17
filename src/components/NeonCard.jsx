import { motion } from 'framer-motion'

const NeonCard = ({ children, className = '', hover = true, glowColor = 'blue' }) => {
  const glowClasses = {
    blue: 'hover:border-neon-blue hover:shadow-neon-blue',
    purple: 'hover:border-neon-purple hover:shadow-neon-purple',
    green: 'hover:border-neon-green hover:shadow-neon-green',
    pink: 'hover:border-neon-pink hover:shadow-neon-pink',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
      className={`neon-card ${glowClasses[glowColor]} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default NeonCard

