import React from 'react'

export default function WhyUs() {
  const comparisons = [
    { feature: 'Turnaround Time', us: '24–48 Hours', inhouse: '2–3 Weeks', freelance: 'Unpredictable' },
    { feature: 'Senior Human Review', us: '100% Guaranteed', inhouse: 'Dependent on staff', freelance: 'Rarely checked' },
    { feature: 'Software Licensing Costs', us: '$0 (We handle it)', inhouse: '$15,000+/yr', freelance: '$0' },
    { feature: 'RSMeans Regional Rates', us: 'All 50 States', inhouse: 'Manual research', freelance: 'Outdated rates' },
    { feature: 'Upfront Quote Guarantee', us: 'Upfront in 1 Hour', inhouse: 'High overhead', freelance: 'Hourly overruns' },
    { feature: 'Deliverable Formats', us: 'Excel + Markups + PDF', inhouse: 'Varies', freelance: 'Often messy' },
  ]

  return (
    <section className="section section-light" id="why-us">
      <div className="container">
        <div className="why-us-grid">
          <div>
            <div className="section-tag">Why US Estimates Pro</div>
            <h2 className="section-title">
              Why American Contractors <span className="text-red">Choose Us</span>
            </h2>
            <p className="section-desc" style={{ margin: '0 0 32px' }}>
              Construction estimating requires real field intuition, code familiarity, and meticulous
              attention to detail. We combine veteran estimators with rigorous multi-tier quality checks.
            </p>

            <div className="why-feature-list">
              <div className="why-feature-item">
                <div className="why-feature-icon">🛡️</div>
                <div className="why-feature-text">
                  <h4>100% Human Veteran Estimators</h4>
                  <p>
                    Every line item is counted and audited by credentialed senior estimators with
                    at least a decade of actual general contracting and field experience.
                  </p>
                </div>
              </div>

              <div className="why-feature-item">
                <div className="why-feature-icon">📍</div>
                <div className="why-feature-text">
                  <h4>RSMeans City Cost Indexes (50 States)</h4>
                  <p>
                    Labor productivity and material rates adjusted specifically to your county and zip code,
                    including prevailing wage and union scales.
                  </p>
                </div>
              </div>

              <div className="why-feature-item">
                <div className="why-feature-icon">⚙️</div>
                <div className="why-feature-text">
                  <h4>Industry-Standard Estimating Tools</h4>
                  <p>
                    We work in Bluebeam Revu, PlanSwift, FastPIPE, and On-Screen Takeoff (OST),
                    ensuring direct compatibility with your existing software workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="contractor-card-wrap">
              <div className="contractor-card-title">
                <span>Contractor Benchmarking</span>
                <span style={{ fontSize: '0.85rem', color: '#f87171', fontWeight: 600 }}>🇺🇸 High Performance</span>
              </div>

              {comparisons.map((c) => (
                <div className="contractor-row" key={c.feature}>
                  <span style={{ color: '#cbd5e1', fontWeight: 600 }}>{c.feature}</span>
                  <span className="check-val">✓ {c.us}</span>
                </div>
              ))}

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.15)', textAlign: 'center' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '14px' }}>
                  Save up to 60% compared to maintaining an in-house full-time estimating department.
                </p>
                <a href="#quote" className="btn btn-red" style={{ width: '100%' }}>
                  Request Free Assessment →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
