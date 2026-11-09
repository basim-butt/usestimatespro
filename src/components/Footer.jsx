import React from 'react'
import { BrandLogo } from './Navbar'

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 85
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="main-footer" id="contact">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div
              className="logo-clickable"
              onClick={() => scrollTo('hero')}
              style={{ cursor: 'pointer', display: 'inline-block' }}
            >
              <BrandLogo />
            </div>

            <p className="footer-about-text">
              US Estimates Pro is an independent American construction estimating consultancy.
              We supply General Contractors, Developers, and Subcontractors with verifiable,
              CSI-compliant quantity takeoffs and regional cost models across all 50 states.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span className="footer-badge-tag">🇺🇸 ASPE Guidelines</span>
              <span className="footer-badge-tag">📊 RSMeans Local Rates</span>
              <span className="footer-badge-tag">⚡ 24–48h Bid Delivery</span>
              <span className="footer-badge-tag">🔒 Strict NDA Protection</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-links-list">
              <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero') }}>Overview</a></li>
              <li><a href="#why-us" onClick={(e) => { e.preventDefault(); scrollTo('why-us') }}>Why Choose Us</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Estimating Services</a></li>
              <li><a href="#quick-estimator" onClick={(e) => { e.preventDefault(); scrollTo('quick-estimator') }}>Takeoff Calculator</a></li>
              <li><a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>Trades Covered</a></li>
              <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('process') }}>Our Workflow</a></li>
              <li><a href="#quote" onClick={(e) => { e.preventDefault(); scrollTo('quote') }}>Submit Plans</a></li>
            </ul>
          </div>

          {/* Core CSI Divisions */}
          <div>
            <h4 className="footer-col-title">Trade Scopes</h4>
            <ul className="footer-links-list">
              <li><a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>Division 03 — Concrete & Slabs</a></li>
              <li><a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>Division 04 — Masonry & Stone</a></li>
              <li><a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>Division 05 — Structural Steel</a></li>
              <li><a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>Division 06 — Framing & Timber</a></li>
              <li><a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>Division 09 — Drywall & Finishes</a></li>
              <li><a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>Divisions 21–28 — Full MEP Packages</a></li>
              <li><a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>Divisions 31–33 — Site & Civil Works</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">Direct Offices</h4>
            <div className="footer-contact-row">
              <span className="icon">📍</span>
              <div>
                <strong>National Headquarters:</strong><br />
                Financial District, New York, NY 10005<br />
                <span style={{ color: '#94a3b8', fontSize: '0.82rem' }}>Operations Hub: Austin, TX</span>
              </div>
            </div>
            <div className="footer-contact-row">
              <span className="icon">📞</span>
              <div>
                <strong>Direct Estimating Line:</strong><br />
                <a href="tel:+18005550199" style={{ color: '#f87171', fontWeight: 700, fontSize: '1rem' }}>
                  (800) 555-0199
                </a>
              </div>
            </div>
            <div className="footer-contact-row">
              <span className="icon">✉️</span>
              <div>
                <strong>Plan Submission Email:</strong><br />
                <a href="mailto:bids@usestimatespro.com" style={{ color: '#e2e8f0' }}>
                  bids@usestimatespro.com
                </a>
              </div>
            </div>
            <div className="footer-contact-row">
              <span className="icon">🕒</span>
              <div>
                <strong>Hours:</strong><br />
                Mon–Sat: 6:30 AM – 8:00 PM EST<br />
                Emergency Weekend Bid Support On Demand
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-inner">
            <div>
              © {new Date().getFullYear()} <strong>US Estimates Pro</strong>. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Bid Standards</a>
              <a href="#">Non-Disclosure Agreement (NDA)</a>
              <a href="#">Client Portal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
