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
              Submit Your Plans — Receive a Guaranteed <span className="text-red">Fixed Quote in 1–2 Hours</span>
            </h1>
            <p className="subpage-hero-desc">
              Upload your project drawings and scope requirements. Our senior estimating team will review your plan set, confirm the CSI divisions, and reply with an exact fixed proposal and turnaround schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="section bg-light" id="quote">
        <div className="container">
          <div className="contact-page-layout">
            {/* Left: Contact Info & Submission Guidelines */}
            <div className="contact-info-panel">
              <div className="contact-panel-card">
                <h3 className="contact-panel-title">Direct Offices & Intake</h3>
                <p className="contact-panel-desc">
                  We work with General Contractors, Subcontractors, and Developers across all 50 US states. Our senior estimators are ready to review your blueprints.
                </p>

                <div className="contact-detail-items">
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <div>
                      <strong>Headquarters:</strong>
                      <p>244 5th Avenue, Suite B-102<br />New York, NY 10001</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <div>
                      <strong>Direct Estimating Email:</strong>
                      <p>
                        <a href="mailto:info@usestimatespro.com" style={{ color: '#dc2626', fontWeight: '600' }}>
                          info@usestimatespro.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <span className="contact-icon">🕒</span>
                    <div>
                      <strong>Operating Hours:</strong>
                      <p>Monday – Friday: 9:00 AM – 5:00 PM EST<br /><span style={{ fontSize: '0.85rem', color: '#64748b' }}>*Rush 24-hr teams active through bid deadlines</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drawing Checklist */}
              <div className="contact-panel-card" style={{ marginTop: '24px' }}>
                <h4 className="contact-panel-title" style={{ fontSize: '1.1rem' }}>Plan Submission Checklist:</h4>
                <ul className="submission-checklist">
                  <li>✅ Architectural plans (Floor plans, elevations, sections)</li>
                  <li>✅ Structural sheets (Foundation, framing, structural general notes)</li>
                  <li>✅ MEP drawings (If estimating Divisions 21, 22, 23, or 26)</li>
                  <li>✅ Project specifications or Scope of Work narrative</li>
                  <li>✅ Target bid submission cutoff date & time</li>
                </ul>
                <div className="nda-note">
                  🔒 <strong>Confidentiality Guaranteed:</strong> All client drawings and bid documents are held strictly confidential under our standard Non-Disclosure Agreement (NDA).
                </div>
              </div>
            </div>

            {/* Right: The Actual Quote Form */}
            <div className="contact-form-panel">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

