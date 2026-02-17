import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import NeonStatCard from '../components/NeonStatCard'
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-neon-blue rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple rounded-full blur-3xl"
        ></motion.div>
      </div>

      <Navbar />
      <div className="pt-24 pb-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Portfolio Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-text mb-2 uppercase tracking-wider">Portfolio</h1>
            <div className="flex items-baseline gap-4">
              <p className="text-5xl md:text-6xl font-bold neon-text-gradient">
                {formatCurrency(mockPortfolio.totalValue)}
              </p>
              <p
                className={`text-xl font-semibold ${
                  mockPortfolio.change24h >= 0 
                    ? 'text-neon-green text-glow-green' 
                    : 'text-loss text-glow-red'
                }`}
              >
                {mockPortfolio.change24h >= 0 ? '+' : ''}
                {mockPortfolio.change24h.toFixed(2)}%
              </p>
              <span className="text-text-secondary text-sm uppercase tracking-wider">24h</span>
            </div>
          </motion.div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <NeonStatCard
              title="Total Invested"
              value={formatCurrency(mockPortfolio.invested)}
              glowColor="blue"
            />
            <NeonStatCard
              title="Current Value"
              value={formatCurrency(mockPortfolio.currentValue)}
              glowColor="purple"
            />
            <NeonStatCard
              title="Total P&L"
              value={formatCurrency(mockPortfolio.pnL)}
              subtitle={`${mockPortfolio.pnLPercent >= 0 ? '+' : ''}${mockPortfolio.pnLPercent.toFixed(2)}%`}
              trend={mockPortfolio.pnL >= 0 ? 'up' : 'down'}
              glowColor="green"
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

