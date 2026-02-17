import { Outlet } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar'

const navItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/market', label: 'Market' },
  { path: '/add-transaction', label: 'Add Transaction' },
]

const AppLayout = () => {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <aside className="w-52 border-r border-gray-700 bg-background-secondary flex-shrink-0 hidden md:block">
          <div className="sticky top-14 py-4 px-3">
            <nav className="space-y-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-card text-binance-yellow border border-gray-700'
                      : 'text-text-secondary hover:text-text hover:bg-card'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>
        <main className="flex-1 min-w-0 min-h-0 py-4 px-4 md:px-6 flex flex-col">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
