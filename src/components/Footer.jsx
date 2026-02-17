import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-gray-700 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-text mb-2">CoinFrame</h3>
            <p className="text-text-secondary text-xs">
              Trade smarter. Track better.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Product</h4>
            <ul className="space-y-1 text-xs text-text-secondary">
              <li><Link to="/dashboard" className="hover:text-binance-yellow transition-colors">Dashboard</Link></li>
              <li><Link to="/market" className="hover:text-binance-yellow transition-colors">Market</Link></li>
              <li><Link to="/add-transaction" className="hover:text-binance-yellow transition-colors">Add Transaction</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Company</h4>
            <ul className="space-y-1 text-xs text-text-secondary">
              <li><a href="#" className="hover:text-binance-yellow transition-colors">About</a></li>
              <li><a href="#" className="hover:text-binance-yellow transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-binance-yellow transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">Legal</h4>
            <ul className="space-y-1 text-xs text-text-secondary">
              <li><a href="#" className="hover:text-binance-yellow transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-binance-yellow transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-xs text-text-muted">
          © 2024 CoinFrame. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
