import React, { useState } from 'react'

export function AmericanFlagIcon() {
  return (
    <svg className="logo-flag-icon" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 13 Stripes */}
      <rect width="48" height="32" rx="3" fill="#ffffff" />
      <rect y="0.0" width="48" height="2.46" fill="#dc2626" />
      <rect y="4.92" width="48" height="2.46" fill="#dc2626" />
      <rect y="9.84" width="48" height="2.46" fill="#dc2626" />
      <rect y="14.76" width="48" height="2.46" fill="#dc2626" />
      <rect y="19.68" width="48" height="2.46" fill="#dc2626" />
      <rect y="24.6" width="48" height="2.46" fill="#dc2626" />
      <rect y="29.52" width="48" height="2.48" fill="#dc2626" />
      
      {/* Canton (Blue Field) */}
      <rect width="22" height="17.2" rx="2" fill="#0b1a30" />
      
      {/* Stars */}
      <g fill="#ffffff" fontSize="4.2" fontFamily="sans-serif">
        <text x="3" y="5.5">★</text>
        <text x="8.5" y="5.5">★</text>
        <text x="14" y="5.5">★</text>
        <text x="5.8" y="9.8">★</text>
        <text x="11.2" y="9.8">★</text>
        <text x="3" y="14">★</text>
        <text x="8.5" y="14">★</text>
        <text x="14" y="14">★</text>
      </g>
    </svg>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Home')

  const scrollTo = (id, tabName) => {
    setActiveTab(tabName)
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'why-us' },
    { label: 'Services', id: 'services' },
    { label: 'Estimator', id: 'quick-estimator' },
    { label: 'Portfolio', id: 'trades' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'quote' },
  ]

  return (
    <header className="header-wrapper">
      {/* Patriotic Top Bar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-inner">
            <div className="topbar-left">
              <span className="topbar-item">
                <span style={{ color: '#f87171' }}>★</span> Serving all 50 US states
              </span>
              <span className="topbar-divider">|</span>
              <span className="topbar-item">
                Offices in New York City & Dallas
              </span>
              <span className="topbar-divider">|</span>
              <span className="topbar-item">
                Mon–Fri, 7am–7pm EST
              </span>
            </div>

            <div className="topbar-right">
              <a href="tel:+18005550199" className="topbar-link">
                <span>📞</span> +1 (800) 555-0199
              </a>
              <span className="topbar-divider">|</span>
              <a href="mailto:info@usestimatespro.com" className="topbar-link">
                <span>✉️</span> info@usestimatespro.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-inner">
            {/* Logo */}
            <div className="logo-container" onClick={() => scrollTo('hero', 'Home')}>
              <AmericanFlagIcon />
              <div className="logo-text-group">
                <div className="logo-brand-name">
                  US-ESTIMATES<span>PRO</span>
                </div>
                <div className="logo-tagline">
                  Cost Estimation & Takeoffs
                </div>
              </div>
            </div>

            {/* Nav Menu */}
            <ul className="nav-menu">
              {navItems.map(item => (
                <li key={item.label}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeTab === item.label ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(item.id, item.label)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Action */}
            <div className="nav-actions">
              <button
                className="btn btn-red"
                onClick={() => scrollTo('quote', 'Contact')}
              >
                Request Quote →
              </button>

              <button
                className="mobile-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* American Red & Blue Accent Line */}
      <div className="header-stripes" />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map(item => (
            <li key={item.label}>
              <a
                href={`#${item.id}`}
                className={activeTab === item.label ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(item.id, item.label)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="btn btn-red"
          style={{ width: '100%' }}
          onClick={() => scrollTo('quote', 'Contact')}
        >
          Request Quote →
        </button>
      </div>
    </header>
  )
}
