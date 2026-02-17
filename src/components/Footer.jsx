import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-gray-800/50 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold neon-text-gradient mb-4">CoinFrame</h3>
            <p className="text-text-secondary text-sm">
              Track your crypto portfolio. Dominate the market.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-4 uppercase text-xs tracking-wider">Product</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link to="/dashboard" className="hover:text-neon-blue transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/market" className="hover:text-neon-blue transition-colors">
                  Market
                </Link>
              </li>
              <li>
                <Link to="/add-transaction" className="hover:text-neon-blue transition-colors">
                  Add Transaction
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-4 uppercase text-xs tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-4 uppercase text-xs tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800/50 text-center text-sm text-text-secondary">
          <p>© 2024 CoinFrame. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

