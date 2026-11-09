import React, { useState } from 'react'

const allTrades = [
  { div: 'DIV 01', title: 'General Requirements', desc: 'Permits, temp facilities, superintendent, safety & mobilization.' },
  { div: 'DIV 02', title: 'Existing Conditions', desc: 'Demolition, site clearing, grading, remediation & earthwork.' },
  { div: 'DIV 03', title: 'Concrete', desc: 'Footings, slabs on grade, elevated decks, rebar & precast.' },
  { div: 'DIV 04', title: 'Masonry', desc: 'CMU block, brick veneer, stone, tuckpointing & lintels.' },
  { div: 'DIV 05', title: 'Metals', desc: 'Structural steel columns, beams, bar joists, deck & metal stairs.' },
  { div: 'DIV 06', title: 'Wood & Plastics', desc: 'Rough framing, lumber, architectural casework & millwork.' },
  { div: 'DIV 07', title: 'Thermal & Moisture', desc: 'TPO/EPDM roofing, shingles, waterproofing & wall insulation.' },
  { div: 'DIV 08', title: 'Openings', desc: 'Storefronts, curtain walls, hollow metal doors & hardware.' },
  { div: 'DIV 09', title: 'Finishes', desc: 'Drywall, metal framing, acoustic ceilings, paint & flooring.' },
  { div: 'DIV 10', title: 'Specialties', desc: 'Toilet partitions, fire extinguishers, signage & lockers.' },
  { div: 'DIV 11', title: 'Equipment', desc: 'Commercial kitchen, medical appliances & loading dock gear.' },
  { div: 'DIV 12', title: 'Furnishings', desc: 'Window shades, laboratory counters & fixed seating.' },
  { div: 'DIV 21', title: 'Fire Suppression', desc: 'Wet/dry sprinkler systems, pumps & standpipe connections.' },
  { div: 'DIV 22', title: 'Plumbing', desc: 'Sanitary waste, domestic water lines, vents & plumbing fixtures.' },
  { div: 'DIV 23', title: 'HVAC (Mechanical)', desc: 'Rooftop units, ductwork, piping, VAV boxes & chillers.' },
  { div: 'DIV 26', title: 'Electrical', desc: 'Switchgear, distribution panels, conduit, wire & lighting fixtures.' },
  { div: 'DIV 27', title: 'Communications', desc: 'Structured cabling, server racks, fiber & low voltage lines.' },
  { div: 'DIV 28', title: 'Electronic Safety', desc: 'Fire alarm, access control, CCTV & intrusion detection.' },
  { div: 'DIV 31', title: 'Earthwork', desc: 'Excavation, trenching, backfill & site compaction.' },
  { div: 'DIV 32', title: 'Exterior Improvements', desc: 'Asphalt paving, concrete curbs, fencing & landscaping.' },
  { div: 'DIV 33', title: 'Utilities', desc: 'Stormwater management, sanitary sewer & water mains.' },
]

export default function Trades() {
  const [filter, setFilter] = useState('all')

  const filteredTrades = allTrades.filter((t) => {
    if (filter === 'structural') return ['DIV 02', 'DIV 03', 'DIV 04', 'DIV 05', 'DIV 06'].includes(t.div)
    if (filter === 'envelope') return ['DIV 07', 'DIV 08'].includes(t.div)
    if (filter === 'finishes') return ['DIV 09', 'DIV 10', 'DIV 11', 'DIV 12'].includes(t.div)
    if (filter === 'mep') return ['DIV 21', 'DIV 22', 'DIV 23', 'DIV 26', 'DIV 27', 'DIV 28'].includes(t.div)
    if (filter === 'civil') return ['DIV 31', 'DIV 32', 'DIV 33'].includes(t.div)
    return true
  })

  return (
    <section className="section trades-section" id="trades">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">CSI MasterFormat Expertise</div>
          <h2 className="section-title">
            All Construction Trades & <span className="text-red">Divisions Covered</span>
          </h2>
          <p className="section-desc">
            We adhere strictly to CSI MasterFormat standards, ensuring seamless integration into
            your estimating workflows, Procore, PlanSwift, or Bluebeam sets.
          </p>

          <div className="trades-filter-bar">
            <button
              className={`trade-filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Trades (16/50 Divs)
            </button>
            <button
              className={`trade-filter-btn ${filter === 'structural' ? 'active' : ''}`}
              onClick={() => setFilter('structural')}
            >
              Structural (Div 02-06)
            </button>
            <button
              className={`trade-filter-btn ${filter === 'envelope' ? 'active' : ''}`}
              onClick={() => setFilter('envelope')}
            >
              Building Envelope (Div 07-08)
            </button>
            <button
              className={`trade-filter-btn ${filter === 'finishes' ? 'active' : ''}`}
              onClick={() => setFilter('finishes')}
            >
              Interiors & Finishes (Div 09-12)
            </button>
            <button
              className={`trade-filter-btn ${filter === 'mep' ? 'active' : ''}`}
              onClick={() => setFilter('mep')}
            >
              MEP Systems (Div 21-28)
            </button>
            <button
              className={`trade-filter-btn ${filter === 'civil' ? 'active' : ''}`}
              onClick={() => setFilter('civil')}
            >
              Site & Civil (Div 31-33)
            </button>
          </div>
        </div>

        <div className="trades-grid">
          {filteredTrades.map((trade) => (
            <div className="trade-item-card" key={trade.div}>
              <div className="trade-div-badge">{trade.div}</div>
              <div className="trade-item-info">
                <h4>{trade.title}</h4>
                <p>{trade.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
