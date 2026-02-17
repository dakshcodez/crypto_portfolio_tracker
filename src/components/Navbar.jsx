import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const isAuthPage = location.pathname === '/auth'
  const isLandingPage = location.pathname === '/'
  const isApp = !isLandingPage && !isAuthPage

  return (
    <nav className="h-14 border-b border-gray-700 bg-background-secondary flex-shrink-0">
      <div className="h-full max-w-full mx-auto px-4 flex items-center justify-between">
        <Link to={isApp ? '/dashboard' : '/'} className="text-lg font-semibold text-text">
          CoinFrame
        </Link>
        {isLandingPage || isAuthPage ? (
          <div className="flex items-center gap-3">
            <Link
              to="/auth"
              className="text-sm text-text-secondary hover:text-text px-3 py-1.5"
            >
              Sign In
            </Link>
            <Link
              to="/auth"
              className="btn-primary text-sm"
            >
              Get Started
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2 md:hidden">
            <Link
              to="/dashboard"
              className={`px-3 py-1.5 rounded-md text-sm ${
                location.pathname === '/dashboard' ? 'text-binance-yellow bg-card' : 'text-text-secondary hover:text-text'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/market"
              className={`px-3 py-1.5 rounded-md text-sm ${
                location.pathname === '/market' ? 'text-binance-yellow bg-card' : 'text-text-secondary hover:text-text'
              }`}
            >
              Market
            </Link>
            <Link
              to="/add-transaction"
              className={`px-3 py-1.5 rounded-md text-sm ${
                location.pathname === '/add-transaction' ? 'text-binance-yellow bg-card' : 'text-text-secondary hover:text-text'
              }`}
            >
              Add
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
