import React from 'react'
import { Link } from 'react-router-dom'
import QuoteForm from '../components/QuoteForm'

export default function ContactPage() {
  return (
    <div className="subpage-wrapper">
      {/* Subpage Hero Banner */}
      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Submit Plans & Contact</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Direct Estimator Intake</span>
            <h1 className="subpage-hero-title">
              Submit Your Plans — Receive a Guaranteed <span className="text-red">Custom Quote in 1–2 Hours</span>
            </h1>
            <p className="subpage-hero-desc">
              Upload your project drawings and scope requirements. Our senior estimating team will review your plan set, confirm the CSI divisions, and reply with an exact customized proposal and turnaround schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Contact Cards Row (Spacious & Clean) */}
      <section className="section-contact-cards">
        <div className="container">
          <div className="contact-cards-row">
            <div className="contact-info-card">
              <div className="contact-card-icon">📍</div>
              <div className="contact-card-text">
                <span className="contact-card-label">Headquarters</span>
                <strong className="contact-card-value">New York, NY</strong>
                <p>244 5th Avenue, Suite B-102<br />New York, NY 10001</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon">✉️</div>
              <div className="contact-card-text">
                <span className="contact-card-label">Estimating Desk</span>
                <strong className="contact-card-value">Direct Email</strong>
                <p>
                  <a href="mailto:info@usestimatespro.com" className="contact-email-link">
                    info@usestimatespro.com
                  </a>
                  <span className="contact-subtext">Replies in 1–2 hours during business hours</span>
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon">🕒</div>
              <div className="contact-card-text">
                <span className="contact-card-label">Operating Hours</span>
                <strong className="contact-card-value">Mon–Fri: 9am–5pm EST</strong>
                <p>Active 50-State Coverage<br /><span className="contact-subtext">*Emergency 24-hr rush squads active for bid cutoffs</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacious, Un-nested Quote Form Section */}
      <section className="contact-form-section" id="quote">
        <QuoteForm />
      </section>

      {/* Submission Guidelines & Confidentiality Guarantee */}
      <section className="section bg-light" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="submission-guidelines-box">
            <div className="guidelines-col">
              <h4 className="guidelines-title">📋 Recommended Submission Checklist:</h4>
              <ul className="guidelines-list">
                <li><span>✓</span> Architectural drawings (Dimensioned floor plans, elevations, wall sections)</li>
                <li><span>✓</span> Structural plans (Foundation sheets, framing plans, structural general notes)</li>
                <li><span>✓</span> MEP sheets (If requesting Divisions 21 Fire, 22 Plumbing, 23 HVAC, or 26 Electrical)</li>
                <li><span>✓</span> Scope of Work / Addenda / Project specifications (if available)</li>
                <li><span>✓</span> Target bid submittal date and time</li>
              </ul>
            </div>

            <div className="guidelines-col nda-col">
              <div className="nda-shield-badge">🔒 100% Confidential</div>
              <h4 className="guidelines-title">Non-Disclosure & Privacy Guarantee</h4>
              <p className="nda-desc">
                We operate under strict Non-Disclosure Agreements (NDAs). Your drawings, trade markups, and proprietary bid strategies are never shared, published, or outsourced. All files are hosted on encrypted, SOC-2 compliant US cloud storage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
