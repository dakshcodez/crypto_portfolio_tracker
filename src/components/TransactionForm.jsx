import { useState } from 'react'
import { motion } from 'framer-motion'
import { availableCoins } from '../data/mockData'
import NeonCard from './NeonCard'
import GlowButton from './GlowButton'

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
    <NeonCard className="p-8 max-w-2xl mx-auto" glowColor="blue">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-text mb-8 uppercase tracking-wider">
          Add <span className="neon-text-gradient">Transaction</span>
        </h2>

        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-neon-green/10 border border-neon-green rounded-xl text-neon-green text-glow-green"
          >
            Transaction added successfully!
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2 font-semibold">
              Coin
            </label>
            <select
              name="coin"
              value={formData.coin}
              onChange={handleChange}
              required
              className="neon-input w-full"
            >
              <option value="">Select a coin</option>
              {availableCoins.map((coin) => (
                <option key={coin.id} value={coin.symbol} className="bg-card">
                  {coin.name} ({coin.symbol})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2 font-semibold">
              Type
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, type: 'buy' }))}
                className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${
                  formData.type === 'buy'
                    ? 'bg-gradient-neon-green text-white'
                    : 'bg-card text-text-secondary hover:text-neon-green border border-gray-700'
                }`}
                style={formData.type === 'buy' ? { boxShadow: '0 0 15px rgba(0, 255, 133, 0.4)' } : {}}
              >
                Buy
              </button>
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, type: 'sell' }))}
                className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${
                  formData.type === 'sell'
                    ? 'bg-gradient-neon-pink text-white'
                    : 'bg-card text-text-secondary hover:text-neon-pink border border-gray-700'
                }`}
                style={formData.type === 'sell' ? { boxShadow: '0 0 15px rgba(255, 0, 140, 0.4)' } : {}}
              >
                Sell
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2 font-semibold">
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
                className="neon-input w-full"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2 font-semibold">
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
                className="neon-input w-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2 font-semibold">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="neon-input w-full"
            />
          </div>

          <div className="bg-background-secondary rounded-xl p-4 border border-gray-700">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Total</span>
              <span className="text-2xl font-bold neon-text-gradient">
                ${calculateTotal()}
              </span>
            </div>
          </div>

          <GlowButton type="submit" variant="primary" className="w-full">
            Add Transaction
          </GlowButton>
        </form>
      </motion.div>
    </NeonCard>
  )
}

export default TransactionForm

