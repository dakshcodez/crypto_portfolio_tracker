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
    // Frontend only - just show success message
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-2xl p-8 card-shadow max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-text mb-8">Add Transaction</h2>

      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-gain/10 border border-gain rounded-xl text-gain"
        >
          Transaction added successfully!
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-text mb-2">
            Coin
          </label>
          <select
            name="coin"
            value={formData.coin}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          >
            <option value="">Select a coin</option>
            {availableCoins.map((coin) => (
              <option key={coin.id} value={coin.symbol}>
                {coin.name} ({coin.symbol})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-text mb-2">
            Type
          </label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, type: 'buy' }))}
              className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all ${
                formData.type === 'buy'
                  ? 'bg-gain text-white'
                  : 'bg-gray-100 text-text hover:bg-gray-200'
              }`}
            >
              Buy
            </button>
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, type: 'sell' }))}
              className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all ${
                formData.type === 'sell'
                  ? 'bg-loss text-white'
                  : 'bg-gray-100 text-text hover:bg-gray-200'
              }`}
            >
              Sell
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-text mb-2">
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
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text mb-2">
              Price per Coin
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
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-text mb-2">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-600">Total</span>
            <span className="text-2xl font-bold text-text">
              ${calculateTotal()}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-4 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
        >
          Add Transaction
        </button>
      </form>
    </motion.div>
  )
}

export default TransactionForm

