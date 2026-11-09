import React from 'react'

const testimonials = [
  {
    quote:
      "US Estimates Pro turned around our 45,000 sq ft commercial retail estimate in 36 hours. The CSI division breakdown matched our bid forms exactly, and the regional pricing for Houston was dead on. We won the $4.2M contract.",
    name: 'Robert Vance',
    role: 'Chief Estimator — Lone Star Commercial Builders, TX',
    initials: 'RV',
  },
  {
    quote:
      "As an MEP subcontractor, accurate piping and ductwork linear takeoffs are everything. These guys caught two structural clashes in the drawings before we bid. Easily the most reliable estimating service in the country.",
    name: 'Anthony Rossi',
    role: 'President — Liberty Mechanical & HVAC, NJ',
    initials: 'AR',
  },
  {
    quote:
      "The color-coded Bluebeam markups are worth their weight in gold. My field superintendents actually use them during construction. We have completely eliminated full-time in-house estimating overhead.",
    name: 'Sarah Jenkins',
    role: 'Vice President of Preconstruction — Apex Dev Group, FL',
    initials: 'SJ',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">Contractor Reviews</div>
          <h2 className="section-title">
            Trusted by Over 2,000 <span className="text-red">American Contractors</span>
          </h2>
          <p className="section-desc">
            See why commercial general contractors, trade subs, and developers rely on US Estimates Pro
            for their most critical bid deadlines.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="test-card" key={t.name}>
              <div className="test-stars">★★★★★</div>
              <p className="test-quote">"{t.quote}"</p>
              <div className="test-contractor-info">
                <div className="contractor-avatar">{t.initials}</div>
                <div>
                  <div className="contractor-name">{t.name}</div>
                  <div className="contractor-company">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
