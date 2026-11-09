import React, { useState } from 'react'

export default function QuickEstimator() {
  const [trade, setTrade] = useState('full')
  const [type, setType] = useState('commercial')

  const scrollToQuote = () => {
    const el = document.getElementById('quote')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="quick-tool-bar" id="quick-estimator">
      <div className="container">
        <div className="tool-bar-inner">
          <div className="tool-bar-heading">
            <h3>⚡ Instant Scope Estimator & Plan Review</h3>
            <p>Select your project details for an immediate turnaround estimate & fee proposal.</p>
          </div>

          <div className="tool-bar-inputs">
            <select
              className="tool-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="commercial">🏢 Commercial Building</option>
              <option value="residential">🏘️ Residential Single/Multi-Family</option>
              <option value="industrial">🏭 Industrial & Warehouse</option>
              <option value="healthcare">🏥 Healthcare & Hospital</option>
              <option value="civic">🏛️ Public & Civil Works</option>
            </select>

            <select
              className="tool-select"
              value={trade}
              onChange={(e) => setTrade(e.target.value)}
            >
              <option value="full">All 16/50 CSI Divisions (Full GC)</option>
              <option value="concrete">Div 03 — Concrete & Rebar</option>
              <option value="masonry">Div 04 — Masonry & Stone</option>
              <option value="metals">Div 05 — Structural Steel & Framing</option>
              <option value="mep">Div 21–28 — MEP (Mechanical/Plumbing/Elec)</option>
              <option value="finishes">Div 09 — Drywall, Paint & Finishes</option>
              <option value="thermal">Div 07 — Roofing & Waterproofing</option>
            </select>

            <button className="btn btn-red" onClick={scrollToQuote}>
              Get Fixed Price Quote →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

