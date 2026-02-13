import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
import PortfolioChart from '../components/PortfolioChart'
import AllocationPie from '../components/AllocationPie'
import CoinTable from '../components/CoinTable'
import {
  mockPortfolio,
  mockHoldings,
  mockPortfolioGrowth,
} from '../data/mockData'

const Dashboard = () => {
  const [holdings, setHoldings] = useState(mockHoldings)

  const handleDelete = (id) => {
    setHoldings((prev) => prev.filter((holding) => holding.id !== id))
  }

  const formatCurrency = (value) => {
    return `$${value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Portfolio Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-text mb-2">Portfolio</h1>
            <div className="flex items-baseline gap-4">
              <p className="text-5xl font-bold text-text">
                {formatCurrency(mockPortfolio.totalValue)}
              </p>
              <p
                className={`text-xl font-semibold ${
                  mockPortfolio.change24h >= 0 ? 'text-gain' : 'text-loss'
                }`}
              >
                {mockPortfolio.change24h >= 0 ? '+' : ''}
                {mockPortfolio.change24h.toFixed(2)}%
              </p>
              <span className="text-gray-500">24h</span>
            </div>
          </motion.div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              title="Total Invested"
              value={formatCurrency(mockPortfolio.invested)}
            />
            <StatCard
              title="Current Value"
              value={formatCurrency(mockPortfolio.currentValue)}
            />
            <StatCard
              title="Total P&L"
              value={formatCurrency(mockPortfolio.pnL)}
              subtitle={`${mockPortfolio.pnLPercent >= 0 ? '+' : ''}${mockPortfolio.pnLPercent.toFixed(2)}%`}
              trend={mockPortfolio.pnL >= 0 ? 'up' : 'down'}
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <PortfolioChart data={mockPortfolioGrowth} />
            <AllocationPie holdings={holdings} />
          </div>

          {/* Holdings Table */}
          <CoinTable holdings={holdings} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

