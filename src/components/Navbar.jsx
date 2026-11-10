import React, { useState } from 'react'

/**
 * Custom American Shield & Blueprint Drafting Emblem
 * Distinctive, premium, and unique to US Estimates Pro
 */
export function BrandLogo() {
  return (
    <div className="custom-brand-logo">
      <svg
        className="brand-emblem-svg"
        viewBox="0 0 54 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="shieldExactB">
            <path d="M27 2L50 9V24C50 34.5 39 40.5 27 43.5C15 40.5 4 34.5 4 24V9L27 2Z" />
          </clipPath>
        </defs>

        {/* Shield Base Outline */}
        <path
          d="M27 2L50 9V24C50 34.5 39 40.5 27 43.5C15 40.5 4 34.5 4 24V9L27 2Z"
          fill="#081426"
          stroke="#1e3a63"
          strokeWidth="1.8"
        />

        {/* Exact 100% American Flag inside Shield */}
        <g clipPath="url(#shieldExactB)">
          {/* 13 Alternating Red & White Horizontal Stripes */}
          <rect x="0" y="2.0" width="54" height="3.2" fill="#B22234" />
          <rect x="0" y="5.2" width="54" height="3.2" fill="#FFFFFF" />
          <rect x="0" y="8.4" width="54" height="3.2" fill="#B22234" />
          <rect x="0" y="11.6" width="54" height="3.2" fill="#FFFFFF" />
          <rect x="0" y="14.8" width="54" height="3.2" fill="#B22234" />
          <rect x="0" y="18.0" width="54" height="3.2" fill="#FFFFFF" />
          <rect x="0" y="21.2" width="54" height="3.2" fill="#B22234" />
          <rect x="0" y="24.4" width="54" height="3.2" fill="#FFFFFF" />
          <rect x="0" y="27.6" width="54" height="3.2" fill="#B22234" />
          <rect x="0" y="30.8" width="54" height="3.2" fill="#FFFFFF" />
          <rect x="0" y="34.0" width="54" height="3.2" fill="#B22234" />
          <rect x="0" y="37.2" width="54" height="3.2" fill="#FFFFFF" />
          <rect x="0" y="40.4" width="54" height="4.0" fill="#B22234" />

          {/* Authentic Upper-Left Navy Blue Canton */}
          <rect x="0" y="0" width="26" height="24.4" fill="#0c2340" />

          {/* Constellation Grid of 50-State White Stars */}
          <g fill="#ffffff">
            {/* Row 1 */}
            <polygon points="5,5 5.4,6 6.5,6 5.6,6.7 6,7.8 5,7.1 4,7.8 4.4,6.7 3.5,6 4.6,6" />
            <polygon points="9.5,5 9.9,6 11,6 10.1,6.7 10.5,7.8 9.5,7.1 8.5,7.8 8.9,6.7 8,6 9.1,6" />
            <polygon points="14,5 14.4,6 15.5,6 14.6,6.7 15,7.8 14,7.1 13,7.8 13.4,6.7 12.5,6 13.6,6" />
            <polygon points="18.5,5 18.9,6 20,6 19.1,6.7 19.5,7.8 18.5,7.1 17.5,7.8 17.9,6.7 17,6 18.1,6" />
            <polygon points="23,5 23.4,6 24.5,6 23.6,6.7 24,7.8 23,7.1 22,7.8 22.4,6.7 21.5,6 22.6,6" />
            {/* Row 2 */}
            <polygon points="7.25,9 7.65,10 8.75,10 7.85,10.7 8.25,11.8 7.25,11.1 6.25,11.8 6.65,10.7 5.75,10 6.85,10" />
            <polygon points="11.75,9 12.15,10 13.25,10 12.35,10.7 12.75,11.8 11.75,11.1 10.75,11.8 11.15,10.7 10.25,10 11.35,10" />
            <polygon points="16.25,9 16.65,10 17.75,10 16.85,10.7 17.25,11.8 16.25,11.1 15.25,11.8 15.65,10.7 14.75,10 15.85,10" />
            <polygon points="20.75,9 21.15,10 22.25,10 21.35,10.7 21.75,11.8 20.75,11.1 19.75,11.8 20.15,10.7 19.25,10 20.35,10" />
            {/* Row 3 */}
            <polygon points="5,13 5.4,14 6.5,14 5.6,14.7 6,15.8 5,15.1 4,15.8 4.4,14.7 3.5,14 4.6,14" />
            <polygon points="9.5,13 9.9,14 11,14 10.1,14.7 10.5,15.8 9.5,15.1 8.5,15.8 8.9,14.7 8,14 9.1,14" />
            <polygon points="14,13 14.4,14 15.5,14 14.6,14.7 15,15.8 14,15.1 13,15.8 13.4,14.7 12.5,14 13.6,14" />
            <polygon points="18.5,13 18.9,14 20,14 19.1,14.7 19.5,15.8 18.5,15.1 17.5,15.8 17.9,14.7 17,14 18.1,14" />
            <polygon points="23,13 23.4,14 24.5,14 23.6,14.7 24,15.8 23,15.1 22,15.8 22.4,14.7 21.5,14 22.6,14" />
            {/* Row 4 */}
            <polygon points="7.25,17 7.65,18 8.75,18 7.85,18.7 8.25,19.8 7.25,19.1 6.25,19.8 6.65,18.7 5.75,18 6.85,18" />
            <polygon points="11.75,17 12.15,18 13.25,18 12.35,18.7 12.75,19.8 11.75,19.1 10.75,19.8 11.15,18.7 10.25,18 11.35,18" />
            <polygon points="16.25,17 16.65,18 17.75,18 16.85,18.7 17.25,19.8 16.25,19.1 15.25,19.8 15.65,18.7 14.75,18 15.85,18" />
            <polygon points="20.75,17 21.15,18 22.25,18 21.35,18.7 21.75,19.8 20.75,19.1 19.75,19.8 20.15,18.7 19.25,18 20.35,18" />
            {/* Row 5 */}
            <polygon points="5,21 5.4,22 6.5,22 5.6,22.7 6,23.8 5,23.1 4,23.8 4.4,22.7 3.5,22 4.6,22" />
            <polygon points="9.5,21 9.9,22 11,22 10.1,22.7 10.5,23.8 9.5,23.1 8.5,23.8 8.9,22.7 8,22 9.1,22" />
            <polygon points="14,21 14.4,22 15.5,22 14.6,22.7 15,23.8 14,23.1 13,23.8 13.4,22.7 12.5,22 13.6,22" />
            <polygon points="18.5,21 18.9,22 20,22 19.1,22.7 19.5,23.8 18.5,23.1 17.5,23.8 17.9,22.7 17,22 18.1,22" />
            <polygon points="23,21 23.4,22 24.5,22 23.6,22.7 24,23.8 23,23.1 22,23.8 22.4,22.7 21.5,22 22.6,22" />
          </g>
        </g>
      </svg>

      <div className="brand-text-block">
        <div className="brand-primary-row">
          <span className="brand-us">US</span>
          <span className="brand-sep">·</span>
          <span className="brand-estimates">ESTIMATES</span>
          <span className="brand-pro-badge">PRO</span>
        </div>
        <div className="brand-tagline-text">
          Precision Takeoffs & Bid Consulting
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Services')

  const scrollTo = (id, label) => {
    setActiveItem(label)
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 85
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  // Exactly 5 clean, essential, high-priority navigation items
  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Trades Covered', id: 'trades' },
    { label: 'How It Works', id: 'process' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Contact', id: 'quote' },
  ]

  return (
    <header className="header-wrapper">
      {/* Top Notification Bar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-inner">
            <div className="topbar-left">
              <span className="topbar-item highlight-item">
                <span className="star-icon">★</span> Serving Contractors Nationwide Across All 50 States
              </span>
              <span className="topbar-divider">•</span>
              <span className="topbar-item">
                Headquarters: <strong>New York, NY</strong>
              </span>
              <span className="topbar-divider">•</span>
              <span className="topbar-item">
                Mon–Fri: 9:00am–5:00pm EST
              </span>
            </div>

            <div className="topbar-right">
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
            <div
              className="logo-clickable"
              onClick={() => scrollTo('hero', 'Overview')}
              role="button"
              tabIndex={0}
            >
              <BrandLogo />
            </div>

            {/* Exactly 5 Essential Menu Links */}
            <ul className="nav-menu">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeItem === item.label ? 'active' : ''}`}
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

            {/* Action Button */}
            <div className="nav-actions">
              <button
                className="btn btn-red btn-header-cta"
                onClick={() => scrollTo('quote', 'Contact')}
              >
                <span>Get a Quote</span>
                <span className="cta-arrow">→</span>
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

      {/* Modern Accent Border */}
      <div className="header-stripes-modern" />

      {/* Mobile Menu */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={`#${item.id}`}
                className={activeItem === item.label ? 'active' : ''}
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
          style={{ width: '100%', marginTop: '14px' }}
          onClick={() => scrollTo('quote', 'Contact')}
        >
          Get a Quote →
        </button>
      </div>
    </header>
  )
}
