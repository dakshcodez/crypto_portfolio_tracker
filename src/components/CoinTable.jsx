import { useState } from 'react'
import { motion } from 'framer-motion'

const CoinTable = ({ holdings, onDelete }) => {
  const formatPrice = (price) => {
    return `$${price.toLocaleString(undefined, {
      minimumFractionDigits: price < 1 ? 4 : 2,
      maximumFractionDigits: price < 1 ? 4 : 2,
    })}`
  }

  const formatAmount = (amount) => {
    return amount.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 8,
    })
  }

  return (
    <div className="bg-card rounded-2xl p-6 card-shadow">
      <h3 className="text-xl font-bold text-text mb-6">Holdings</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Coin</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Amount</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Avg Price</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Current Price</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">PnL</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((holding, index) => (
              <motion.tr
                key={holding.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-4 px-4">
                  <div>
                    <p className="font-semibold text-text">{holding.coin}</p>
                    <p className="text-sm text-gray-500">{holding.symbol}</p>
                  </div>
                </td>
                <td className="text-right py-4 px-4 font-medium text-text">
                  {formatAmount(holding.amount)}
                </td>
                <td className="text-right py-4 px-4 text-gray-600">
                  {formatPrice(holding.avgPrice)}
                </td>
                <td className="text-right py-4 px-4 font-medium text-text">
                  {formatPrice(holding.currentPrice)}
                </td>
                <td className="text-right py-4 px-4">
                  <div>
                    <p className={`font-semibold ${
                      holding.pnL >= 0 ? 'text-gain' : 'text-loss'
                    }`}>
                      {holding.pnL >= 0 ? '+' : ''}
                      {formatPrice(holding.pnL)}
                    </p>
                    <p className={`text-sm ${
                      holding.pnLPercent >= 0 ? 'text-gain' : 'text-loss'
                    }`}>
                      {holding.pnLPercent >= 0 ? '+' : ''}
                      {holding.pnLPercent.toFixed(2)}%
                    </p>
                  </div>
                </td>
                <td className="text-right py-4 px-4">
                  <button
                    onClick={() => onDelete(holding.id)}
                    className="px-4 py-2 text-sm text-loss hover:bg-loss/10 rounded-lg transition-colors"
                  >
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CoinTable

