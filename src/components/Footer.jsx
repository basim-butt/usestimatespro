import React from 'react'
import { AmericanFlagIcon } from './Navbar'

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="main-footer" id="contact">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="logo-container" onClick={() => scrollTo('hero')}>
              <AmericanFlagIcon />
              <div className="logo-text-group">
                <div className="logo-brand-name">
                  US-ESTIMATES<span>PRO</span>
                </div>
                <div className="logo-tagline" style={{ color: '#94a3b8' }}>
                  Cost Estimation & Takeoffs
                </div>
              </div>
            </div>

            <p className="footer-about-text">
              US Estimates Pro is an American outsourced construction cost estimating and material
              takeoff partner for General Contractors, Subcontractors, and Developers. Operating across
              all 50 US states with human senior estimators and RSMeans certified cost data.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <span style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '4px', fontSize: '0.78rem', color: '#e2e8f0', fontWeight: 600 }}>
                🇺🇸 ASPE Standards
              </span>
              <span style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '4px', fontSize: '0.78rem', color: '#e2e8f0', fontWeight: 600 }}>
                📊 RSMeans Data
              </span>
              <span style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '4px', fontSize: '0.78rem', color: '#e2e8f0', fontWeight: 600 }}>
                ⚡ 24-48h Delivery
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero') }}>Home</a></li>
              <li><a href="#why-us" onClick={(e) => { e.preventDefault(); scrollTo('why-us') }}>About Our Estimators</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Estimating Services</a></li>
              <li><a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>CSI Trade Divisions</a></li>
              <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('process') }}>Our 3-Step Process</a></li>
              <li><a href="#quote" onClick={(e) => { e.preventDefault(); scrollTo('quote') }}>Request Free Quote</a></li>
            </ul>
          </div>

          {/* Trades Covered */}
          <div>
            <h4 className="footer-col-title">Core Divisions</h4>
            <ul className="footer-links-list">
              <li><a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>Division 03 — Concrete</a></li>
              <li><a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>Division 04 — Masonry</a></li>
              <li><a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>Division 05 — Structural Steel</a></li>
              <li><a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>Division 06 — Wood Framing</a></li>
              <li><a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>Division 09 — Drywall & Paint</a></li>
              <li><a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>Division 21-28 — Full MEP</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">Contact & Offices</h4>
            <div className="footer-contact-row">
              <span className="icon">📍</span>
              <div>
                <strong>Headquarters:</strong><br />
                Wall Street Financial District<br />
                New York, NY 10005
              </div>
            </div>
            <div className="footer-contact-row">
              <span className="icon">📞</span>
              <div>
                <strong>Toll-Free Phone:</strong><br />
                <a href="tel:+18005550199" style={{ color: '#f87171', fontWeight: 700 }}>
                  +1 (800) 555-0199
                </a>
              </div>
            </div>
            <div className="footer-contact-row">
              <span className="icon">✉️</span>
              <div>
                <strong>Email:</strong><br />
                <a href="mailto:info@usestimatespro.com" style={{ color: '#e2e8f0' }}>
                  info@usestimatespro.com
                </a>
              </div>
            </div>
            <div className="footer-contact-row">
              <span className="icon">🕒</span>
              <div>
                <strong>Working Hours:</strong><br />
                Monday – Friday: 7:00 AM – 7:00 PM EST<br />
                Saturday: Emergency Bid Coverage Available
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-inner">
            <div>
              © {new Date().getFullYear()} <strong>US Estimates Pro</strong> (usestimatespro.com). All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Non-Disclosure Agreement (NDA)</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
