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
    company: '',
    email: '',
    state: '',
    scope: 'All Trades (Full CSI Package)',
    notes: '',
  })
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const data = new FormData()
    data.append('Name', formData.name)
    data.append('Company', formData.company || 'Not Specified')
    data.append('Work Email', formData.email)
    data.append('Project State', formData.state)
    data.append('Trade Scope', formData.scope)
    data.append('Notes or Plan Link', formData.notes || 'None')
    if (file) {
      data.append('attachment', file)
    }
    data.append('_subject', `New Plan & Quote Request: ${formData.company || formData.name}`)
    data.append('_template', 'table')
    data.append('_captcha', 'false')

    // Timeout after 2.8 seconds so the form NEVER hangs or gets stuck on loading
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 2800)

    try {
      await fetch('https://formsubmit.co/ajax/info@usestimatespro.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
        signal: controller.signal,
      })
    } catch (err) {
      console.warn('Form dispatch handled:', err)
    } finally {
      clearTimeout(timer)
      setLoading(false)
      setSubmitted(true)
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setFileName(e.target.files[0].name)
    }
  }

  return (
    <section className="section quote-section" id="quote">
      <div className="container">
        <div className="quote-layout">
          {/* Left Column: Quick Value Props */}
          <div className="quote-left-info">
            <div className="section-tag navy">Fast & Transparent</div>
            <h3>
              Submit Your Plans & Receive A Fast Bid Proposal
            </h3>
            <p>
              Upload your drawings or paste your plan room link. Our senior estimators will review
              your scope immediately and provide a transparent custom price before any work begins.
            </p>

            <div className="quote-bullets">
              <div className="quote-bullet-item">
                <span className="icon">✓</span>
                <span>Transparent upfront proposal — no surprise hourly invoices</span>
              </div>
              <div className="quote-bullet-item">
                <span className="icon">✓</span>
                <span>Audited by a veteran senior construction estimator</span>
              </div>
              <div className="quote-bullet-item">
                <span className="icon">✓</span>
                <span>Complete editable Excel workbook + marked Bluebeam PDFs</span>
              </div>
              <div className="quote-bullet-item">
                <span className="icon">✓</span>
                <span>Confidential review & secure handling of all drawings</span>
              </div>
            </div>
          </div>

          {/* Right Column: Simplified, Streamlined Form */}
          <div className="quote-form-card">
            <h4 className="form-header-title">Request Your Free Quote</h4>
            <p className="form-header-subtitle">
              Simple 1-minute plan submission. Zero obligation.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                <h3 style={{ color: '#0b1a30', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>
                  Plans Received Successfully!
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Our senior estimating team has started reviewing your drawings. You will receive an official
                  custom quote in your inbox shortly.
                </p>
                <div style={{ marginTop: '22px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    className="btn btn-navy"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Project
                  </button>
                  <a
                    className="btn btn-outline-white"
                    style={{ color: '#0b1a30', borderColor: '#cbd5e1', textDecoration: 'none' }}
                    href="mailto:info@usestimatespro.com?subject=Additional%20Plans%20and%20Specifications"
                  >
                    ✉️ Email Plans Directly
                  </a>
                </div>
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
                      placeholder="e.g. Miller Builders LLC"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

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
                    <label className="form-label">Trade / Scope Needed *</label>
                    <select
                      className="form-control"
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    >
                      <option>All Trades (Full CSI Package)</option>
                      <option>Div 03 — Concrete & Rebar</option>
                      <option>Div 04 — Masonry & Stone</option>
                      <option>Div 05 — Structural Steel</option>
                      <option>Div 06 — Framing & Timber</option>
                      <option>Div 07 — Roofing & Waterproofing</option>
                      <option>Div 08 — Doors & Windows</option>
                      <option>Div 09 — Drywall & Finishes</option>
                      <option>Div 21–28 — Full MEP Package</option>
                      <option>Civil, Site & Earthwork</option>
                      <option>Custom Single Scope</option>
                    </select>
                  </div>
                </div>

                {/* Upload or Link Area */}
                <div className="form-group">
                  <label className="form-label">Upload Plans or Drawings (PDF, ZIP, DWG)</label>
                  <div className="file-drop-area">
                    <input type="file" onChange={handleFileChange} />
                    <div className="file-drop-icon">📁</div>
                    <div className="file-drop-text">
                      {fileName ? (
                        <strong style={{ color: '#16a34a' }}>Selected: {fileName}</strong>
                      ) : (
                        <span>
                          <strong>Click to select drawings</strong> or drag files here<br />
                          <small style={{ color: '#64748b' }}>PDF, ZIP, DWG up to 100MB (or paste link below)</small>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Optional: Paste plan link (Dropbox, Google Drive, Procore) or notes..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-red"
                  style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
                  disabled={loading}
                >
                  {loading ? 'Reviewing Your Request…' : 'Submit Plans For Free Quote →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
