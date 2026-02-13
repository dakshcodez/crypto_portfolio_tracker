import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-text mb-4">CoinFrame</h3>
            <p className="text-gray-600 text-sm">
              Track your crypto portfolio. Simply.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/dashboard" className="hover:text-accent transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/market" className="hover:text-accent transition-colors">
                  Market
                </Link>
              </li>
              <li>
                <Link to="/add-transaction" className="hover:text-accent transition-colors">
                  Add Transaction
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-600">
          <p>© 2024 CoinFrame. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

