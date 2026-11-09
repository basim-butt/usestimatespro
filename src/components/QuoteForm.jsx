import React, { useState } from 'react'

const usStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming'
]

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    state: '',
    projectType: 'Commercial',
    scope: 'All Trades (Full Project)',
    turnaround: 'Standard (24-48 Hours)',
    notes: '',
  })
  const [fileName, setFileName] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  return (
    <section className="section quote-section" id="quote">
      <div className="container">
        <div className="quote-layout">
          {/* Left Column */}
          <div className="quote-left-info">
            <div className="section-tag navy">Free Project Review</div>
            <h3>
              Submit Your Plans & Receive A Fixed Fee Proposal In <span style={{ color: '#f87171' }}>1 Hour</span>
            </h3>
            <p>
              Upload your blueprints, architectural sets, and scope specifications. We will review
              your drawings immediately and provide a flat-rate quote before any work starts.
            </p>

            <div className="quote-bullets">
              <div className="quote-bullet-item">
                <span className="icon">✓</span>
                <span>Fixed flat pricing with no hidden hourly surcharges</span>
              </div>
              <div className="quote-bullet-item">
                <span className="icon">✓</span>
                <span>Reviewed by a certified human senior construction estimator</span>
              </div>
              <div className="quote-bullet-item">
                <span className="icon">✓</span>
                <span>Full Excel takeoff workbook + marked Bluebeam PDF sets</span>
              </div>
              <div className="quote-bullet-item">
                <span className="icon">✓</span>
                <span>Strict Non-Disclosure (NDA) protection for all client drawings</span>
              </div>
            </div>

            <div className="quote-direct-contact">
              <div style={{ color: '#cbd5e1', fontSize: '0.88rem' }}>
                Need Immediate Assistance or have an urgent bid closing today?
              </div>
              <a href="tel:+18005550199" className="phone-number">
                📞 (800) 555-0199
              </a>
              <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '4px' }}>
                Senior Estimators on call Mon–Fri, 9:00am–5:00pm EST
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="quote-form-card">
            <h4 className="form-header-title">Request a Quick Quote</h4>
            <p className="form-header-subtitle">
              Fill out your project specifications below. Zero obligation.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                <h3 style={{ color: '#0b1a30', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>
                  Plans Received Successfully!
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Our senior estimating team is reviewing your project details. You will receive an official
                  fixed-fee quote in your inbox within <strong>60 minutes</strong>.
                </p>
                <button
                  className="btn btn-navy"
                  style={{ marginTop: '20px' }}
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. John Miller"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company / Contractor Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Miller Construction GC"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Work Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="john@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="(555) 000-0000"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Project State *</label>
                    <select
                      className="form-control"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    >
                      <option value="">Select Project State</option>
                      {usStates.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Project Type</label>
                    <select
                      className="form-control"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    >
                      <option>Commercial</option>
                      <option>Residential</option>
                      <option>Industrial / Warehouse</option>
                      <option>Civil / Infrastructure</option>
                      <option>Healthcare</option>
                      <option>Education / Public</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Scope / CSI Divisions Required</label>
                    <select
                      className="form-control"
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    >
                      <option>All Trades (Full Project)</option>
                      <option>Div 03 — Concrete & Rebar</option>
                      <option>Div 04 — Masonry</option>
                      <option>Div 05 — Structural & Misc Steel</option>
                      <option>Div 06 — Framing & Millwork</option>
                      <option>Div 07 — Roofing & Waterproofing</option>
                      <option>Div 08 — Doors & Windows</option>
                      <option>Div 09 — Drywall, Paint & Finishes</option>
                      <option>Div 21–28 — Full MEP Package</option>
                      <option>Single Custom Division</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Turnaround Urgency</label>
                    <select
                      className="form-control"
                      value={formData.turnaround}
                      onChange={(e) => setFormData({ ...formData, turnaround: e.target.value })}
                    >
                      <option>Standard (24–48 Hours)</option>
                      <option>Priority Rush (Same Day / 24h)</option>
                      <option>Flexible / Preliminary Budget</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Upload Blueprints / Drawings / Link (PDF, ZIP, DWG)</label>
                  <div className="file-drop-area">
                    <input type="file" onChange={handleFileChange} />
                    <div className="file-drop-icon">📁</div>
                    <div className="file-drop-text">
                      {fileName ? (
                        <strong style={{ color: '#16a34a' }}>Selected: {fileName}</strong>
                      ) : (
                        <span>
                          <strong>Click here to upload files</strong> or drag and drop plans<br />
                          <small style={{ color: '#64748b' }}>PDF, ZIP, DWG, BIM up to 100MB (Or paste Dropbox/Drive link below)</small>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Notes or Online Plan Room Link</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder="Provide any specific addenda, bid date, or plan download link (Google Drive, Dropbox, BuildingConnected)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-red"
                  style={{ width: '100%', padding: '15px' }}
                  disabled={loading}
                >
                  {loading ? 'Submitting Drawings…' : 'Submit For 1-Hour Quote →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
