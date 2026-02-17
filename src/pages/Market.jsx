import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { mockMarketData } from '../data/mockData'
import NeonCard from '../components/NeonCard'
import GlowButton from '../components/GlowButton'

const Market = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('marketCap')
  const [sortOrder, setSortOrder] = useState('desc')

  const filteredAndSorted = mockMarketData
    .filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      let aValue, bValue
      if (sortBy === 'price') {
        aValue = a.price
        bValue = b.price
      } else if (sortBy === 'marketCap') {
        aValue = a.marketCap
        bValue = b.marketCap
      } else if (sortBy === 'change24h') {
        aValue = a.change24h
        bValue = b.change24h
      } else {
        return 0
      }

      if (sortOrder === 'asc') {
        return aValue - bValue
      } else {
        return bValue - aValue
      }
    })

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('desc')
    }
  }

  const formatPrice = (price) => {
    return `$${price.toLocaleString(undefined, {
      minimumFractionDigits: price < 1 ? 4 : 2,
      maximumFractionDigits: price < 1 ? 4 : 2,
    })}`
  }

  const formatMarketCap = (cap) => {
    if (cap >= 1e9) {
      return `$${(cap / 1e9).toFixed(2)}B`
    } else if (cap >= 1e6) {
      return `$${(cap / 1e6).toFixed(2)}M`
    }
    return `$${cap.toLocaleString()}`
  }

  const formatVolume = (volume) => {
    if (volume >= 1e9) {
      return `$${(volume / 1e9).toFixed(2)}B`
    } else if (volume >= 1e6) {
      return `$${(volume / 1e6).toFixed(2)}M`
    }
    return `$${volume.toLocaleString()}`
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      <div className="pt-24 pb-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-text mb-8 uppercase tracking-wider">
              <span className="neon-text-gradient">Market</span>
            </h1>

            {/* Search and Filters */}
            <NeonCard className="p-6 mb-6" glowColor="purple">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <input
                  type="text"
                  placeholder="Search coins..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="neon-input flex-1 w-full md:w-auto"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleSort('marketCap')}
                    className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                      sortBy === 'marketCap'
                        ? 'bg-gradient-neon-blue text-white'
                        : 'bg-card text-text-secondary hover:text-neon-blue border border-gray-700'
                    }`}
                    style={sortBy === 'marketCap' ? { boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)' } : {}}
                  >
                    Market Cap
                  </button>
                  <button
                    onClick={() => handleSort('price')}
                    className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                      sortBy === 'price'
                        ? 'bg-gradient-neon-blue text-white'
                        : 'bg-card text-text-secondary hover:text-neon-blue border border-gray-700'
                    }`}
                    style={sortBy === 'price' ? { boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)' } : {}}
                  >
                    Price
                  </button>
                  <button
                    onClick={() => handleSort('change24h')}
                    className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                      sortBy === 'change24h'
                        ? 'bg-gradient-neon-blue text-white'
                        : 'bg-card text-text-secondary hover:text-neon-blue border border-gray-700'
                    }`}
                    style={sortBy === 'change24h' ? { boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)' } : {}}
                  >
                    24h Change
                  </button>
                </div>
              </div>
            </NeonCard>

            {/* Market Table */}
            <NeonCard className="p-6" glowColor="blue">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-xs uppercase tracking-wider font-semibold text-text-secondary">
                        Coin
                      </th>
                      <th className="text-right py-3 px-4 text-xs uppercase tracking-wider font-semibold text-text-secondary">
                        Price
                      </th>
                      <th className="text-right py-3 px-4 text-xs uppercase tracking-wider font-semibold text-text-secondary">
                        Market Cap
                      </th>
                      <th className="text-right py-3 px-4 text-xs uppercase tracking-wider font-semibold text-text-secondary">
                        24h Change
                      </th>
                      <th className="text-right py-3 px-4 text-xs uppercase tracking-wider font-semibold text-text-secondary">
                        Volume
                      </th>
                      <th className="text-right py-3 px-4 text-xs uppercase tracking-wider font-semibold text-text-secondary">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAndSorted.map((coin, index) => (
                      <motion.tr
                        key={coin.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.02 }}
                        className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-semibold text-text">{coin.name}</p>
                            <p className="text-sm text-text-secondary">{coin.symbol}</p>
                          </div>
                        </td>
                        <td className="text-right py-4 px-4 font-medium text-text">
                          {formatPrice(coin.price)}
                        </td>
                        <td className="text-right py-4 px-4 text-text-secondary">
                          {formatMarketCap(coin.marketCap)}
                        </td>
                        <td className="text-right py-4 px-4">
                          <span
                            className={`font-semibold ${
                              coin.change24h >= 0 
                                ? 'text-neon-green text-glow-green' 
                                : 'text-loss text-glow-red'
                            }`}
                          >
                            {coin.change24h >= 0 ? '+' : ''}
                            {coin.change24h.toFixed(2)}%
                          </span>
                        </td>
                        <td className="text-right py-4 px-4 text-text-secondary">
                          {formatVolume(coin.volume)}
                        </td>
                        <td className="text-right py-4 px-4">
                          <GlowButton variant="primary" className="text-sm px-4 py-2">
                            Add
                          </GlowButton>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </NeonCard>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Market

