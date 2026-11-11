import React from 'react'
import { Link } from 'react-router-dom'
import { BrandLogo } from './Navbar'

export default function Footer() {
  return (
    <footer className="main-footer" id="contact">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link
              to="/"
              className="logo-clickable"
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              <BrandLogo />
            </Link>

            <p className="footer-about-text">
              US Estimates Pro is an independent American construction estimating consultancy.
              We supply General Contractors, Developers, and Subcontractors with verifiable,
              CSI-compliant quantity takeoffs and regional cost models across all 50 states.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Overview</Link></li>
              <li><Link to="/why-us">Why Choose Us</Link></li>
              <li><Link to="/services">Estimating Services</Link></li>
              <li><Link to="/takeoff-calculator">Takeoff Calculator</Link></li>
              <li><Link to="/trades">Trades Covered</Link></li>
              <li><Link to="/how-it-works">Our Workflow</Link></li>
              <li><Link to="/contact">Submit Plans</Link></li>
            </ul>
          </div>

          {/* Core CSI Divisions */}
          <div>
            <h4 className="footer-col-title">Trade Scopes</h4>
            <ul className="footer-links-list">
              <li><Link to="/trades#concrete">Division 03 — Concrete & Slabs</Link></li>
              <li><Link to="/trades#masonry">Division 04 — Masonry & Stone</Link></li>
              <li><Link to="/trades#metals">Division 05 — Structural Steel</Link></li>
              <li><Link to="/trades#woods">Division 06 — Framing & Timber</Link></li>
              <li><Link to="/trades#finishes">Division 09 — Drywall & Finishes</Link></li>
              <li><Link to="/trades#mep">Divisions 21–28 — Full MEP Packages</Link></li>
              <li><Link to="/trades#civil">Divisions 31–33 — Site & Civil Works</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">GET IN TOUCH</h4>
            <div className="footer-contact-row">
              <span className="icon">📍</span>
              <div>
                <strong>Headquarters:</strong><br />
                244 5th Avenue, Suite B-102<br />
                New York, NY 10001
              </div>
            </div>
            <div className="footer-contact-row">
              <span className="icon">✉️</span>
              <div>
                <a href="mailto:info@usestimatespro.com" style={{ color: '#e2e8f0' }}>
                  info@usestimatespro.com
                </a>
              </div>
            </div>
            <div className="footer-contact-row">
              <span className="icon">🕒</span>
              <div>
                <strong>Hours:</strong><br />
                Monday – Friday: 9:00 AM – 5:00 PM EST
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
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms">Terms &amp; Bid Standards</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
