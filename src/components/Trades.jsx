import React from 'react'

const tradePillars = [
  {
    icon: '🏗️',
    title: 'Structural & Core',
    divs: 'DIV 02 – 06',
    desc: 'Foundations, framing, and heavy core construction scopes.',
    items: ['Concrete & Rebar', 'Masonry & CMU', 'Structural Steel', 'Lumber & Framing', 'Earthwork & Demo'],
  },
  {
    icon: '🏢',
    title: 'Building Envelope',
    divs: 'DIV 07 – 08',
    desc: 'Exterior skin, moisture barriers, and architectural openings.',
    items: ['Roofing (TPO/EPDM)', 'Waterproofing', 'Curtain Walls', 'Doors & Windows', 'Metal Panels & Siding'],
  },
  {
    icon: '🎨',
    title: 'Interior Finishes',
    divs: 'DIV 09 – 12',
    desc: 'Complete architectural fit-out and commercial interior trades.',
    items: ['Drywall & Metal Studs', 'Paint & Wall Coverings', 'Acoustical Ceilings', 'Flooring & Tile', 'Millwork & Specialties'],
  },
  {
    icon: '⚡',
    title: 'MEP Systems',
    divs: 'DIV 21 – 28',
    desc: 'Complete mechanical, electrical, plumbing & life safety.',
    items: ['HVAC & Ductwork', 'Plumbing & Piping', 'Electrical & Switchgear', 'Fire Protection', 'Low Voltage & Security'],
  },
]

export default function Trades() {
  const scrollToQuote = () => {
    const el = document.getElementById('quote')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 85
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="section trades-section" id="trades">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">CSI MasterFormat Coverage</div>
          <h2 className="section-title">
            All Construction Trades <span className="text-red">Covered</span>
          </h2>
          <p className="section-desc" style={{ marginBottom: '36px' }}>
            From single-trade subcontractors to full General Contractor CSI packages.
            Every division is itemized, verified, and bid-ready.
          </p>
        </div>

        {/* Concise 4-Pillar Grid */}
        <div className="trades-pillar-grid">
          {tradePillars.map((p) => (
            <div className="trade-pillar-card" key={p.title}>
              <div className="pillar-header">
                <span className="pillar-icon">{p.icon}</span>
                <span className="pillar-div-tag">{p.divs}</span>
              </div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
              
              <div className="pillar-chips">
                {p.items.map((item) => (
                  <span className="pillar-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <button
                className="pillar-action-link"
                onClick={scrollToQuote}
              >
                Estimate This Scope →
              </button>
            </div>
          ))}
        </div>

        {/* Concise Bottom Trust Strip */}
        <div className="trades-compact-footer">
          <span>✓ All 16 & 50 MasterFormat Divisions Available</span>
          <span className="dot-sep">•</span>
          <span>✓ Subcontractor Trade Packages</span>
          <span className="dot-sep">•</span>
          <span>✓ Full GC Turnkey Takeoffs</span>
        </div>
      </div>
    </section>
  )
}
