# CoinFrame – Minimal Crypto Portfolio Tracker

A clean, minimal cryptocurrency portfolio tracking application built with React, TailwindCSS, and modern web technologies.

## Features

- **Real-time Portfolio Tracking** - Monitor your cryptocurrency investments with live price updates
- **Beautiful Charts** - Visualize portfolio growth and asset allocation
- **Simple Transaction Management** - Add buy/sell transactions with ease
- **Market Overview** - Browse top cryptocurrencies with search and sorting
- **Clean, Minimal Design** - Apple-inspired UI with focus on clarity

## Tech Stack

- **React** (Vite)
- **TailwindCSS** - Styling
- **Recharts** - Data visualization
- **Framer Motion** - Animations
- **React Router** - Navigation

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── StatCard.jsx
│   ├── PriceTicker.jsx
│   ├── PortfolioChart.jsx
│   ├── AllocationPie.jsx
│   ├── CoinTable.jsx
│   └── TransactionForm.jsx
├── pages/           # Page components
│   ├── Landing.jsx
│   ├── Auth.jsx
│   ├── Dashboard.jsx
│   ├── AddTransaction.jsx
│   └── Market.jsx
├── data/            # Mock data
│   └── mockData.js
├── App.jsx          # Main app component with routing
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

## Pages

1. **Landing Page** (`/`) - Hero section, features, and call-to-action
2. **Auth Page** (`/auth`) - Login and registration forms
3. **Dashboard** (`/dashboard`) - Portfolio overview with charts and holdings
4. **Add Transaction** (`/add-transaction`) - Form to add buy/sell transactions
5. **Market** (`/market`) - Browse and search cryptocurrencies

## Design Principles

- **Minimal & Clean** - Apple-inspired design with lots of white space
- **Neutral Colors** - Soft background (#F5F5F7), white cards, subtle shadows
- **Large Typography** - Inter font with clear hierarchy
- **Smooth Animations** - Subtle Framer Motion transitions
- **Professional Look** - Production-ready fintech aesthetic

## Phase 1 Status

✅ Frontend complete with hardcoded mock data
- All 5 pages implemented
- Reusable components created
- Responsive design
- Smooth animations
- Form validation (frontend only)

## Phase 2 (Future)

- Node.js + Express backend
- MongoDB database
- JWT authentication
- CoinGecko API integration
- Real-time price updates
- Server-side portfolio calculations

## License

This project is for educational purposes.
