import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Auth from './pages/Auth'
import AppLayout from './components/AppLayout'
import Dashboard from './pages/Dashboard'
import AddTransaction from './pages/AddTransaction'
import Market from './pages/Market'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-transaction" element={<AddTransaction />} />
          <Route path="/market" element={<Market />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

