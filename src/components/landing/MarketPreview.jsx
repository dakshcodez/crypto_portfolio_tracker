import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TradingCard from '../TradingCard'
import { mockMarketData } from '../../data/mockData'

const MarketPreview = () => {
  const topCoins = mockMarketData.slice(0, 5)

  const formatPrice = (price) => {
    return `$${price.toLocaleString(undefined, {
      minimumFractionDigits: price < 1 ? 4 : 2,
      maximumFractionDigits: price < 1 ? 4 : 2,
    })}`
  }

  return (
    <section className="py-12 md:py-16 px-4 border-b border-gray-700">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-6"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-text mb-2">Market Overview</h2>
            <p className="text-text-secondary text-sm">Top cryptocurrencies by market cap</p>
          </div>
          <Link
            to="/market"
            className="text-binance-yellow hover:opacity-80 text-sm font-medium transition-opacity"
          >
            View All →
          </Link>
        </motion.div>
        <TradingCard className="p-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-3 text-xs uppercase tracking-wider font-medium text-text-secondary">Coin</th>
                <th className="text-right py-3 px-3 text-xs uppercase tracking-wider font-medium text-text-secondary">Price</th>
                <th className="text-right py-3 px-3 text-xs uppercase tracking-wider font-medium text-text-secondary">24h Change</th>
                <th className="text-right py-3 px-3 text-xs uppercase tracking-wider font-medium text-text-secondary">Action</th>
              </tr>
            </thead>
            <tbody>
              {topCoins.map((coin, index) => (
                <motion.tr
                  key={coin.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-b border-gray-700/50 hover:bg-gray-800/30 transition-colors"
                >
                  <td className="py-3 px-3">
                    <div>
                      <p className="font-medium text-text">{coin.name}</p>
                      <p className="text-xs text-text-secondary">{coin.symbol}</p>
                    </div>
                  </td>
                  <td className="text-right py-3 px-3 font-medium text-text">
                    {formatPrice(coin.price)}
                  </td>
                  <td className="text-right py-3 px-3">
                    <span className={coin.change24h >= 0 ? 'text-binance-green' : 'text-binance-red'}>
                      {coin.change24h >= 0 ? '+' : ''}{coin.change24h.toFixed(2)}%
                    </span>
                  </td>
                  <td className="text-right py-3 px-3">
                    <Link
                      to="/add-transaction"
                      className="bg-binance-yellow text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity inline-block"
                    >
                      Trade
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </TradingCard>
      </div>
    </section>
  )
}

export default MarketPreview
