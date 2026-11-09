import React from 'react'

const servicesData = [
  {
    icon: '📐',
    title: 'Quantity Takeoffs',
    desc: 'Precision material and labor counts generated from architectural and structural drawings. Itemized by CSI division for seamless bid compilation.',
    bullets: [
      'Line-by-line itemization',
      'Material wastage factors included',
      'Digital color-coded plan markups',
    ],
  },
  {
    icon: '💲',
    title: 'RSMeans Cost Estimating',
    desc: 'Cost models backed by regional RSMeans data, incorporating zip-code specific union and non-union labor rates, equipment, and current material pricing.',
    bullets: [
      'All 50 US State City Cost Indexes',
      'Union & open-shop labor rate models',
      'Equipment & overhead adjustments',
    ],
  },
  {
    icon: '📋',
    title: 'Complete Bid Packages',
    desc: 'Bid-ready proposals formatted for General Contractors and Subcontractors to submit immediately to project owners, developers, or municipal agencies.',
    bullets: [
      'CSI MasterFormat Master Sheets',
      'Executive Summary & Inclusions/Exclusions',
      'General Conditions & Overhead Allocations',
    ],
  },
  {
    icon: '💡',
    title: 'Value Engineering (VE)',
    desc: 'Strategic cost-reduction alternatives analyzing material substitutions, assembly methods, and schedule optimizations to preserve margin and win contracts.',
    bullets: [
      'Alternative material cost comparisons',
      'Constructability review notes',
      'Budget balancing without quality loss',
    ],
  },
  {
    icon: '🏗️',
    title: 'Single-Trade Estimates',
    desc: 'Specialized takeoff packages tailored specifically for trade subcontractors needing rapid, high-accuracy numbers for targeted bid packages.',
    bullets: [
      'Concrete, Masonry, Framing & Drywall',
      'Complete MEP (Div 21, 22, 23, 26, 28)',
      'Roofing, Insulation & Siding',
    ],
  },
  {
    icon: '⚡',
    title: 'Rush 24-Hour Delivery',
    desc: 'Fast-track estimating team ready to handle pressing bid deadlines. Emergency turnaround without sacrificing an ounce of precision or senior review.',
    bullets: [
      'Dedicated senior estimator assigned',
      'Same-day or 24-hour turnaround',
      'Continuous direct priority support',
    ],
  },
]

export default function Services() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">Core Capabilities</div>
          <h2 className="section-title">
            Professional Estimating Services <span className="text-red">You Can Bid On</span>
          </h2>
          <p className="section-desc">
            We deliver thorough, verifiable estimates backed by senior estimators with 10+ years
            of field experience. No guesswork. No software-only estimates.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon-box">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-bullets">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <button
                className="service-link"
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                onClick={() => scrollTo('quote')}
              >
                Request Quote For This Trade →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
