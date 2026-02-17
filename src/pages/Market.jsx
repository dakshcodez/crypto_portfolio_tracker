import { useState } from 'react'
import { mockMarketData } from '../data/mockData'
import TradingCard from '../components/TradingCard'

const Market = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('marketCap')
  const [sortOrder, setSortOrder] = useState('desc')
  const [selectedId, setSelectedId] = useState(null)

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
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue
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
    if (cap >= 1e9) return `$${(cap / 1e9).toFixed(2)}B`
    if (cap >= 1e6) return `$${(cap / 1e6).toFixed(2)}M`
    return `$${cap.toLocaleString()}`
  }

  const formatVolume = (volume) => {
    if (volume >= 1e9) return `$${(volume / 1e9).toFixed(2)}B`
    if (volume >= 1e6) return `$${(volume / 1e6).toFixed(2)}M`
    return `$${volume.toLocaleString()}`
  }

  const sortBtn = (field, label) => (
    <button
      onClick={() => handleSort(field)}
      className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
        sortBy === field
          ? 'bg-binance-yellow/20 border-binance-yellow text-binance-yellow'
          : 'bg-background-secondary border-gray-700 text-text-secondary hover:text-text'
      }`}
    >
      {label}
    </button>
  )

  return (
    <div className="space-y-4">
      <h1 className="text-sm font-semibold text-text uppercase tracking-wider">Market</h1>

      <TradingCard className="p-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
          <input
            type="text"
            placeholder="Search coins..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="trading-input flex-1 max-w-xs"
          />
          <div className="flex gap-2">
            {sortBtn('marketCap', 'Market Cap')}
            {sortBtn('price', 'Price')}
            {sortBtn('change24h', '24h %')}
          </div>
        </div>
      </TradingCard>

      <TradingCard className="p-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-2 px-3 text-xs uppercase tracking-wider font-medium text-text-secondary">Coin</th>
              <th className="text-right py-2 px-3 text-xs uppercase tracking-wider font-medium text-text-secondary">Price</th>
              <th className="text-right py-2 px-3 text-xs uppercase tracking-wider font-medium text-text-secondary">Market Cap</th>
              <th className="text-right py-2 px-3 text-xs uppercase tracking-wider font-medium text-text-secondary">24h %</th>
              <th className="text-right py-2 px-3 text-xs uppercase tracking-wider font-medium text-text-secondary">Volume</th>
              <th className="text-right py-2 px-3 text-xs uppercase tracking-wider font-medium text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSorted.map((coin) => (
              <tr
                key={coin.id}
                onClick={() => setSelectedId(selectedId === coin.id ? null : coin.id)}
                className={`border-b border-gray-700/50 transition-colors cursor-pointer ${
                  selectedId === coin.id ? 'bg-binance-yellow/10' : 'hover:bg-gray-800/50'
                }`}
              >
                <td className="py-2 px-3">
                  <div>
                    <p className="font-medium text-text">{coin.name}</p>
                    <p className="text-xs text-text-secondary">{coin.symbol}</p>
                  </div>
                </td>
                <td className="text-right py-2 px-3 font-medium text-text">
                  {formatPrice(coin.price)}
                </td>
                <td className="text-right py-2 px-3 text-text-secondary">
                  {formatMarketCap(coin.marketCap)}
                </td>
                <td className="text-right py-2 px-3">
                  <span className={coin.change24h >= 0 ? 'text-binance-green' : 'text-binance-red'}>
                    {coin.change24h >= 0 ? '+' : ''}{coin.change24h.toFixed(2)}%
                  </span>
                </td>
                <td className="text-right py-2 px-3 text-text-secondary">
                  {formatVolume(coin.volume)}
                </td>
                <td className="text-right py-2 px-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      // no-op for frontend
                    }}
                    className="btn-primary text-xs py-1.5 px-3"
                  >
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TradingCard>
    </div>
  )
}

export default Market
