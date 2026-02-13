import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { mockMarketData } from '../data/mockData'

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
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-text mb-8">Market</h1>

            {/* Search and Filters */}
            <div className="bg-card rounded-2xl p-6 card-shadow mb-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <input
                  type="text"
                  placeholder="Search coins..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 w-full md:w-auto px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleSort('marketCap')}
                    className={`px-4 py-2 rounded-xl font-medium transition-all ${
                      sortBy === 'marketCap'
                        ? 'bg-accent text-white'
                        : 'bg-gray-100 text-text hover:bg-gray-200'
                    }`}
                  >
                    Market Cap
                  </button>
                  <button
                    onClick={() => handleSort('price')}
                    className={`px-4 py-2 rounded-xl font-medium transition-all ${
                      sortBy === 'price'
                        ? 'bg-accent text-white'
                        : 'bg-gray-100 text-text hover:bg-gray-200'
                    }`}
                  >
                    Price
                  </button>
                  <button
                    onClick={() => handleSort('change24h')}
                    className={`px-4 py-2 rounded-xl font-medium transition-all ${
                      sortBy === 'change24h'
                        ? 'bg-accent text-white'
                        : 'bg-gray-100 text-text hover:bg-gray-200'
                    }`}
                  >
                    24h Change
                  </button>
                </div>
              </div>
            </div>

            {/* Market Table */}
            <div className="bg-card rounded-2xl p-6 card-shadow">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Coin
                      </th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">
                        Price
                      </th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">
                        Market Cap
                      </th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">
                        24h Change
                      </th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">
                        Volume
                      </th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">
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
                        className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-semibold text-text">{coin.name}</p>
                            <p className="text-sm text-gray-500">{coin.symbol}</p>
                          </div>
                        </td>
                        <td className="text-right py-4 px-4 font-medium text-text">
                          {formatPrice(coin.price)}
                        </td>
                        <td className="text-right py-4 px-4 text-gray-600">
                          {formatMarketCap(coin.marketCap)}
                        </td>
                        <td className="text-right py-4 px-4">
                          <span
                            className={`font-semibold ${
                              coin.change24h >= 0 ? 'text-gain' : 'text-loss'
                            }`}
                          >
                            {coin.change24h >= 0 ? '+' : ''}
                            {coin.change24h.toFixed(2)}%
                          </span>
                        </td>
                        <td className="text-right py-4 px-4 text-gray-600">
                          {formatVolume(coin.volume)}
                        </td>
                        <td className="text-right py-4 px-4">
                          <button className="px-4 py-2 text-sm bg-accent text-white rounded-lg hover:opacity-90 transition-opacity">
                            Add
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Market

