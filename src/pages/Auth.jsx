import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import TradingCard from '../components/TradingCard'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (name === 'password') {
      let strength = 0
      if (value.length >= 8) strength++
      if (value.match(/[a-z]/) && value.match(/[A-Z]/)) strength++
      if (value.match(/\d/)) strength++
      if (value.match(/[^a-zA-Z\d]/)) strength++
      setPasswordStrength(strength)
    }
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 1) return 'bg-binance-red'
    if (passwordStrength <= 2) return 'bg-binance-yellow'
    return 'bg-binance-green'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="py-10 px-4 flex justify-center items-start">
        <TradingCard className="p-4 w-full max-w-md">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                isLogin
                  ? 'bg-binance-yellow text-gray-900'
                  : 'bg-background-secondary text-text-secondary hover:text-text border border-gray-700'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                !isLogin
                  ? 'bg-binance-yellow text-gray-900'
                  : 'bg-background-secondary text-text-secondary hover:text-text border border-gray-700'
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-text-secondary mb-1.5 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="trading-input w-full"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-text-secondary mb-1.5 font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="trading-input w-full pr-20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text text-xs"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {!isLogin && formData.password && (
                <div className="mt-1.5">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-sm ${level <= passwordStrength ? getPasswordStrengthColor() : 'bg-gray-700'}`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-text-muted mt-0.5">
                    Strength: {passwordStrength <= 1 ? 'Weak' : passwordStrength <= 2 ? 'Medium' : 'Strong'}
                  </p>
                </div>
              )}
            </div>

            {!isLogin && (
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-secondary mb-1.5 font-medium">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="trading-input w-full"
                />
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="mt-1 text-xs text-binance-red">Passwords do not match</p>
                )}
              </div>
            )}

            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-xs text-binance-yellow hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            <button type="submit" className="w-full btn-primary py-2.5">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </TradingCard>
      </div>
    </div>
  )
}

export default Auth
