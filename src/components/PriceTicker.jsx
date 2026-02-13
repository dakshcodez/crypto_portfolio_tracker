import { motion } from 'framer-motion'
import { mockTickerData } from '../data/mockData'

const PriceTicker = () => {
  return (
    <div className="bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-8 animate-scroll">
          {mockTickerData.map((coin, index) => (
            <motion.div
              key={coin.symbol}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <span className="font-semibold text-text">{coin.symbol}</span>
              <span className="text-gray-600">
                ${coin.price.toLocaleString(undefined, {
                  minimumFractionDigits: coin.price < 1 ? 4 : 2,
                  maximumFractionDigits: coin.price < 1 ? 4 : 2,
                })}
              </span>
              <span
                className={`text-sm font-medium ${
                  coin.change >= 0 ? 'text-gain' : 'text-loss'
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

