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
        viewBox="0 0 54 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0" y1="0" x2="54" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0f274a" />
            <stop offset="100%" stopColor="#081426" />
          </linearGradient>
          <linearGradient id="redGrad" x1="0" y1="0" x2="30" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
          <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* Shield / Keystone Base */}
        <path
          d="M27 2L50 9V24C50 34.5 39 40.5 27 43.5C15 40.5 4 34.5 4 24V9L27 2Z"
          fill="url(#shieldGrad)"
          stroke="#1e3a63"
          strokeWidth="1.5"
          filter="url(#badgeShadow)"
        />

        {/* Patriotic Stripes across the right side */}
        <clipPath id="shieldClip">
          <path d="M27 2L50 9V24C50 34.5 39 40.5 27 43.5C15 40.5 4 34.5 4 24V9L27 2Z" />
        </clipPath>

        <g clipPath="url(#shieldClip)">
          {/* Alternating Red and White angled stripes */}
          <rect x="25" y="0" width="30" height="4.5" fill="url(#redGrad)" transform="rotate(8 25 0)" />
          <rect x="25" y="8" width="30" height="4.5" fill="#ffffff" transform="rotate(8 25 8)" />
          <rect x="25" y="16" width="30" height="4.5" fill="url(#redGrad)" transform="rotate(8 25 16)" />
          <rect x="25" y="24" width="30" height="4.5" fill="#ffffff" transform="rotate(8 25 24)" />
          <rect x="25" y="32" width="30" height="5" fill="url(#redGrad)" transform="rotate(8 25 32)" />
        </g>

        {/* Left Field Divider (Gold Blueprint line) */}
        <path d="M25 3L25 43" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 1.5" />

        {/* Blue Canton with Precision Star & Construction Compass Chevron */}
        <path
          d="M14 14L19 23H9L14 14Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="23" r="1.5" fill="#f59e0b" />

        {/* Top Centered Gold Star */}
        <polygon
          points="14,6 15.3,9.5 19,9.5 16,11.8 17.2,15.2 14,13 10.8,15.2 12,11.8 9,9.5 12.7,9.5"
          fill="#f59e0b"
        />
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
  const [activeItem, setActiveItem] = useState('Overview')

  const scrollTo = (id, label) => {
    setActiveItem(label)
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 85
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  // Refined, distinct navigation labels (not direct replicas of usestimation)
  const navItems = [
    { label: 'Overview', id: 'hero' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Services', id: 'services' },
    { label: 'Takeoff Calculator', id: 'quick-estimator', isBadge: true },
    { label: 'Trades Covered', id: 'trades' },
    { label: 'Workflow', id: 'process' },
    { label: 'Contact', id: 'quote' },
  ]

  return (
    <header className="header-wrapper">
      {/* Top Banner Bar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-inner">
            <div className="topbar-left">
              <span className="topbar-item highlight-item">
                <span className="star-icon">★</span> Serving General Contractors & Subs Nationwide
              </span>
              <span className="topbar-divider">•</span>
              <span className="topbar-item">
                Regional Hubs: <strong>Austin, TX</strong> & <strong>New York, NY</strong>
              </span>
              <span className="topbar-divider">•</span>
              <span className="topbar-item time-badge">
                Mon–Sat, 6:30am–8:00pm EST
              </span>
            </div>

            <div className="topbar-right">
              <span className="guarantee-pill">⚡ 1-Hour Bid Review</span>
              <a href="tel:+18005550199" className="topbar-link phone-link">
                <span>📞</span> (800) 555-0199
              </a>
              <span className="topbar-divider">|</span>
              <a href="mailto:bids@usestimatespro.com" className="topbar-link">
                <span>✉️</span> bids@usestimatespro.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-inner">
            {/* Unique Redesigned Logo */}
            <div
              className="logo-clickable"
              onClick={() => scrollTo('hero', 'Overview')}
              role="button"
              tabIndex={0}
            >
              <BrandLogo />
            </div>

            {/* Menu Links with Distinct Wordings */}
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
                    {item.isBadge && <span className="nav-pill-new">TOOL</span>}
                  </a>
                </li>
              ))}
            </ul>

            {/* Redesigned Action Area */}
            <div className="nav-actions">
              <button
                className="btn btn-red btn-header-cta"
                onClick={() => scrollTo('quote', 'Contact')}
              >
                <span>Submit Plans Now</span>
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

      {/* Dual Red & Navy Architectural Border */}
      <div className="header-stripes-modern" />

      {/* Mobile Drawer */}
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
          style={{ width: '100%', marginTop: '12px' }}
          onClick={() => scrollTo('quote', 'Contact')}
        >
          Submit Plans Now (1-Hr Quote) →
        </button>
      </div>
    </header>
  )
}
