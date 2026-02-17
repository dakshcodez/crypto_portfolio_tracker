import { motion } from 'framer-motion'
import { mockTickerData } from '../data/mockData'

const PriceTicker = () => {
  return (
    <div className="bg-background-secondary border-y border-gray-800/50 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-neon-purple/5"></div>
      <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center gap-8">
          {mockTickerData.map((coin, index) => (
            <motion.div
              key={coin.symbol}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <span className="font-semibold text-text">{coin.symbol}</span>
              <span className="px-3 py-1 bg-card rounded-full border border-gray-700/50 text-text-secondary text-sm">
                ${coin.price.toLocaleString(undefined, {
                  minimumFractionDigits: coin.price < 1 ? 4 : 2,
                  maximumFractionDigits: coin.price < 1 ? 4 : 2,
                })}
              </span>
              <span
                className={`text-sm font-semibold px-2 py-1 rounded ${
                  coin.change >= 0 
                    ? 'text-neon-green text-glow-green' 
                    : 'text-loss text-glow-red'
                }`}
              >
                {coin.change >= 0 ? '+' : ''}
                {coin.change.toFixed(2)}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PriceTicker

