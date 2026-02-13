import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const location = useLocation()
  const isAuthPage = location.pathname === '/auth'
  const isLandingPage = location.pathname === '/'

  if (isLandingPage || isAuthPage) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-text">
              CoinFrame
            </Link>
            <div className="flex items-center gap-4">
              <Link
                to="/auth"
                className="px-4 py-2 text-text hover:text-accent transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/auth"
                className="px-6 py-2 bg-accent text-white rounded-xl hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/dashboard" className="text-2xl font-bold text-text">
            CoinFrame
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/dashboard"
              className={`px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/dashboard'
                  ? 'text-accent font-medium'
                  : 'text-text hover:text-accent'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/add-transaction"
              className={`px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/add-transaction'
                  ? 'text-accent font-medium'
                  : 'text-text hover:text-accent'
              }`}
            >
              Add Transaction
            </Link>
            <Link
              to="/market"
              className={`px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/market'
                  ? 'text-accent font-medium'
                  : 'text-text hover:text-accent'
              }`}
            >
              Market
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

