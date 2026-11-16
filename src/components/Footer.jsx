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

            <div style={{ marginTop: '12px', fontSize: '0.84rem', color: '#cbd5e1' }}>
              <strong>Regional Hub:</strong>{' '}
              <Link to="/locations/new-york" style={{ color: '#fca5a5', textDecoration: 'underline' }}>
                New York &amp; NYC Estimating Desk →
              </Link>
            </div>
          </div>

          {/* Core Services Navigation */}
          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li><Link to="/services/quantity-takeoffs">Quantity Takeoff Services</Link></li>
              <li><Link to="/services/rsmeans-cost-estimating">RSMeans Cost Estimating</Link></li>
              <li><Link to="/services/bid-package-preparation">Bid Package Preparation</Link></li>
              <li><Link to="/services/value-engineering">Value Engineering</Link></li>
              <li><Link to="/takeoff-calculator">Takeoff Calculator</Link></li>
              <li><Link to="/how-it-works">Our 3-Step Process</Link></li>
              <li><Link to="/blog">Contractor Guides</Link></li>
            </ul>
          </div>

          {/* Dedicated Trade Divisions */}
          <div>
            <h4 className="footer-col-title">Trade Takeoffs</h4>
            <ul className="footer-links-list">
              <li><Link to="/trades/concrete-estimating">Division 03 — Concrete &amp; Slabs</Link></li>
              <li><Link to="/trades/masonry-estimating">Division 04 — Masonry &amp; Stone</Link></li>
              <li><Link to="/trades/structural-steel-estimating">Division 05 — Structural Steel</Link></li>
              <li><Link to="/trades/roofing-estimating">Division 07 — Roofing Takeoffs</Link></li>
              <li><Link to="/trades/drywall-estimating">Division 09 — Drywall &amp; Finishes</Link></li>
              <li><Link to="/trades/mep-estimating">Divisions 21–28 — MEP Estimating</Link></li>
              <li><Link to="/trades/sitework-estimating">Divisions 31–33 — Sitework &amp; Civil</Link></li>
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
            <div style={{ marginTop: '16px' }}>
              <Link to="/contact" className="btn btn-red btn-sm" style={{ textDecoration: 'none', display: 'inline-block', width: '100%', textAlign: 'center' }}>
                Submit Plans for Quote →
              </Link>
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
              <Link to="/blog">Knowledge Base</Link>
              <Link to="/locations/new-york">NYC Office</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
