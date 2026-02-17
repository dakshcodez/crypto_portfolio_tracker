import { useState } from 'react'
import { motion } from 'framer-motion'
import { availableCoins } from '../data/mockData'

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    coin: '',
    type: 'buy',
    amount: '',
    price: '',
    date: new Date().toISOString().split('T')[0],
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const calculateTotal = () => {
    if (formData.amount && formData.price) {
      return (parseFloat(formData.amount) * parseFloat(formData.price)).toFixed(2)
    }
    return '0.00'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setFormData({
        coin: '',
        type: 'buy',
        amount: '',
        price: '',
        date: new Date().toISOString().split('T')[0],
      })
    }, 3000)
  }

  const inputClass =
    'w-full bg-background-secondary border border-gray-700 rounded-md px-3 py-2.5 text-sm text-text placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-binance-yellow focus:border-binance-yellow transition-colors'

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      whileHover={{ y: -2 }}
      className="w-full max-w-[480px] bg-card border border-gray-700 rounded-md shadow-sm"
    >
      <div className="p-5">
        <h2 className="text-base font-semibold text-text uppercase tracking-wider mb-5">
          Add Transaction
        </h2>

        {showSuccess && (
          <div className="mb-4 p-3 bg-binance-green/10 border border-binance-green rounded-md text-binance-green text-sm">
            Transaction added successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <section>
            <label className="block text-[11px] uppercase tracking-wider text-text-secondary mb-1.5 font-medium">
              Coin
            </label>
            <select
              name="coin"
              value={formData.coin}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Select a coin</option>
              {availableCoins.map((coin) => (
                <option key={coin.id} value={coin.symbol}>
                  {coin.name} ({coin.symbol})
                </option>
              ))}
            </select>
          </section>

          <div className="border-t border-gray-700 pt-5">
            <label className="block text-[11px] uppercase tracking-wider text-text-secondary mb-2 font-medium">
              Type
            </label>
            <div className="flex rounded-md border border-gray-700 overflow-hidden bg-background-secondary">
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, type: 'buy' }))}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                  formData.type === 'buy'
                    ? 'bg-binance-green text-gray-900'
                    : 'text-text-secondary hover:text-text'
                }`}
              >
                Buy
              </button>
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, type: 'sell' }))}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors border-l border-gray-700 ${
                  formData.type === 'sell'
                    ? 'bg-binance-red text-white'
                    : 'text-text-secondary hover:text-text'
                }`}
              >
                Sell
              </button>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-5 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-text-secondary mb-1.5 font-medium">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                step="any"
                min="0"
                placeholder="0.00"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-text-secondary mb-1.5 font-medium">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                step="any"
                min="0"
                placeholder="0.00"
                className={inputClass}
              />
            </div>
          </div>

          <div className="border-t border-gray-700 pt-5">
            <label className="block text-[11px] uppercase tracking-wider text-text-secondary mb-1.5 font-medium">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div className="border-t border-gray-700 pt-5">
            <div className="bg-background-secondary border border-gray-700 rounded-md px-4 py-3 flex justify-between items-center">
              <span className="text-xs uppercase tracking-wider text-text-secondary font-medium">
                Total
              </span>
              <span className="text-xl font-semibold text-binance-yellow">
                ${calculateTotal()}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-binance-yellow text-gray-900 font-semibold py-3 rounded-md text-sm hover:opacity-90 transition-opacity"
          >
            Add Transaction
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default TransactionForm
