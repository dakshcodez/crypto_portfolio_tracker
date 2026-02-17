import { motion } from 'framer-motion'
import NeonCard from './NeonCard'

const NeonStatCard = ({ title, value, subtitle, trend, glowColor = 'blue' }) => {
  const trendColors = {
    up: 'text-neon-green text-glow-green',
    down: 'text-loss text-glow-red',
    neutral: 'text-text-secondary',
  }

  return (
    <NeonCard glowColor={glowColor} className="p-6">
      <p className="text-xs uppercase tracking-wider text-text-secondary mb-3">{title}</p>
      <p className="text-3xl font-bold text-text mb-2">{value}</p>
      {subtitle && (
        <p className={`text-sm font-semibold ${trendColors[trend] || trendColors.neutral}`}>
          {subtitle}
        </p>
      )}
    </NeonCard>
  )
}

export default NeonStatCard

