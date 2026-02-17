import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import NeonCard from '../components/NeonCard'
import GlowButton from '../components/GlowButton'

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
      calculatePasswordStrength(value)
    }
  }

  const calculatePasswordStrength = (password) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++
    if (password.match(/\d/)) strength++
    if (password.match(/[^a-zA-Z\d]/)) strength++
    setPasswordStrength(strength)
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 1) return 'bg-loss'
    if (passwordStrength <= 2) return 'bg-yellow-500'
    return 'bg-neon-green'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend only - just navigate to dashboard
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple rounded-full blur-3xl"></div>
      </div>
      
      <Navbar />
      <div className="pt-24 pb-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Branding */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              <h1 className="text-5xl font-bold text-text mb-6">
                Welcome to <span className="neon-text-gradient">CoinFrame</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Access your futuristic trading terminal. Track your cryptocurrency 
                portfolio with real-time data and advanced analytics.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full" style={{ boxShadow: '0 0 8px rgba(0, 240, 255, 0.6)' }}></div>
                  <span className="text-text-secondary">Real-time portfolio tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full" style={{ boxShadow: '0 0 8px rgba(157, 0, 255, 0.6)' }}></div>
                  <span className="text-text-secondary">Advanced charts and analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-green rounded-full" style={{ boxShadow: '0 0 8px rgba(0, 255, 133, 0.6)' }}></div>
                  <span className="text-text-secondary">Secure transaction management</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <NeonCard className="p-8 max-w-md mx-auto" glowColor="blue">
                <div className="flex gap-4 mb-8">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all relative ${
                      isLogin
                        ? 'bg-gradient-neon-blue text-white'
                        : 'bg-card text-text-secondary hover:text-neon-blue border border-gray-700'
                    }`}
                    style={isLogin ? { boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)' } : {}}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all relative ${
                      !isLogin
                        ? 'bg-gradient-neon-blue text-white'
                        : 'bg-card text-text-secondary hover:text-neon-blue border border-gray-700'
                    }`}
                    style={!isLogin ? { boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)' } : {}}
                  >
                    Register
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2 font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="neon-input w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2 font-semibold">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="••••••••"
                        className="neon-input w-full pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-neon-blue transition-colors text-sm"
                      >
                        {showPassword ? 'Hide' : 'Show'}
                      </button>
                    </div>
                    {!isLogin && formData.password && (
                      <div className="mt-2">
                        <div className="flex gap-1 mb-1">
                          {[1, 2, 3, 4].map((level) => (
                            <div
                              key={level}
                              className={`h-1 flex-1 rounded transition-all ${
                                level <= passwordStrength
                                  ? getPasswordStrengthColor()
                                  : 'bg-gray-700'
                              }`}
                              style={level <= passwordStrength ? { boxShadow: `0 0 4px ${level <= passwordStrength ? (passwordStrength <= 1 ? '#FF3B3B' : passwordStrength <= 2 ? '#FFD700' : '#00FF85') : 'transparent'}` } : {}}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-text-secondary">
                          Password strength: {passwordStrength === 0 ? 'Weak' : passwordStrength <= 2 ? 'Medium' : 'Strong'}
                        </p>
                      </div>
                    )}
                  </div>

                  {!isLogin && (
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2 font-semibold">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        placeholder="••••••••"
                        className="neon-input w-full"
                      />
                      {formData.confirmPassword &&
                        formData.password !== formData.confirmPassword && (
                          <p className="mt-1 text-sm text-loss text-glow-red">
                            Passwords do not match
                          </p>
                        )}
                    </div>
                  )}

                  {isLogin && (
                    <div className="flex justify-end">
                      <a
                        href="#"
                        className="text-sm text-neon-blue hover:text-neon-purple transition-colors"
                      >
                        Forgot password?
                      </a>
                    </div>
                  )}

                  <GlowButton type="submit" variant="primary" className="w-full">
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </GlowButton>
                </form>
              </NeonCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth

