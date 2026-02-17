import { motion } from 'framer-motion'

const GlowButton = ({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false 
}) => {
  const variants = {
    primary: 'bg-gradient-neon-blue text-white',
    green: 'bg-gradient-neon-green text-white',
    pink: 'bg-gradient-neon-pink text-white',
    outline: 'border-2 border-neon-blue text-neon-blue bg-transparent',
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`glow-button ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </motion.button>
  )
}

export default GlowButton

