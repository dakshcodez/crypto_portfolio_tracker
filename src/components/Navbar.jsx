import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import GlowButton from './GlowButton'

const Navbar = () => {
  const location = useLocation()
  const isAuthPage = location.pathname === '/auth'
  const isLandingPage = location.pathname === '/'

  if (isLandingPage || isAuthPage) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold neon-text-gradient">
              CoinFrame
            </Link>
            <div className="flex items-center gap-4">
              <Link
                to="/auth"
                className="px-4 py-2 text-text-secondary hover:text-neon-blue transition-colors"
              >
                Sign In
              </Link>
              <Link to="/auth">
                <GlowButton variant="primary">Get Started</GlowButton>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/dashboard" className="text-2xl font-bold neon-text-gradient">
            CoinFrame
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/dashboard"
              className={`px-4 py-2 rounded-lg transition-all relative ${
                location.pathname === '/dashboard'
                  ? 'text-neon-blue font-semibold'
                  : 'text-text-secondary hover:text-neon-blue'
              }`}
            >
              {location.pathname === '/dashboard' && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-blue"
                  style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)' }}
                />
              )}
              Dashboard
            </Link>
            <Link
              to="/add-transaction"
              className={`px-4 py-2 rounded-lg transition-all relative ${
                location.pathname === '/add-transaction'
                  ? 'text-neon-blue font-semibold'
                  : 'text-text-secondary hover:text-neon-blue'
              }`}
            >
              {location.pathname === '/add-transaction' && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-blue"
                  style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)' }}
                />
              )}
              Add Transaction
            </Link>
            <Link
              to="/market"
              className={`px-4 py-2 rounded-lg transition-all relative ${
                location.pathname === '/market'
                  ? 'text-neon-blue font-semibold'
                  : 'text-text-secondary hover:text-neon-blue'
              }`}
            >
              {location.pathname === '/market' && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-blue"
                  style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)' }}
                />
              )}
              Market
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

