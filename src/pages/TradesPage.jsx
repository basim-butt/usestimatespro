import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function TradesPage() {
  const [selectedDivision, setSelectedDivision] = useState('all')

  const tradeDivisions = [
    {
      id: 'concrete',
      division: 'Division 03',
      name: 'Concrete & Slabs',
      icon: '🧱',
      units: ['CY (Cubic Yards)', 'SF (Square Feet)', 'LBS / TONS (Rebar)', 'SFCA (Formwork)'],
      description: 'Comprehensive quantity takeoffs for subgrade and superstructure cast-in-place concrete, post-tensioned decks, and precast assemblies.',
      items: [
        'Continuous & spread footings, grade beams, and pier foundations',
        'Slab-on-Grade (SOG) and elevated Slab-on-Metal-Deck (SOMD)',
        'Formwork surface contact area (SFCA) and stripping allowances',
        'Reinforcing steel (deformed rebar #3 to #11, WWF welded wire mesh)',
        'Concrete pumping, finishing, vapor barriers, expansion joints & sealants',
        'Cast-in-place retaining walls, elevator pits, and shear wall cores',
      ],
    },
    {
      id: 'masonry',
      division: 'Division 04',
      name: 'Masonry & Stone',
      icon: '🏗️',
      units: ['EA (Block/Brick Count)', 'SF (Wall Surface Area)', 'CY (Grout Fill)', 'LF (Lintels)'],
      description: 'Complete unit count, mortar volume, bond beams, and reinforcing calculations for structural and architectural masonry.',
      items: [
        'Concrete Masonry Units (CMU): 4", 6", 8", 10", and 12" standard & lightweight',
        'Architectural face brick, modular brick, and cavity wall ties',
        'Horizontal joint reinforcing (ladder and truss wire) and bond beams',
        'Solid grouting and core fill concrete volumes with pump allowances',
        'Precast concrete lintels, stone sills, flashing, and weep holes',
        'Manufactured stone veneer, limestone panels, and seismic ties',
      ],
    },
    {
      id: 'metals',
      division: 'Division 05',
      name: 'Structural Steel & Metals',
      icon: '⚙️',
      units: ['TONS (Total Weight)', 'LBS (Weight)', 'LF (Linear Feet)', 'EA (Anchor Bolts)'],
      description: 'Fabrication and erection estimates covering heavy structural framing, steel joists, metal decking, and miscellaneous ornamental ironwork.',
      items: [
        'Wide-flange columns and beams (W-shapes, channels, angles)',
        'HSS hollow structural sections and moment connection hardware',
        'Open-web steel joists (K, LH, and DLH series) and bridging',
        'Composite corrugated metal floor and roof decking (1.5", 2", 3")',
        'Miscellaneous metals: pan stairs, handrails, guardrails, and ladders',
        'Anchor bolt groups, embed plates, base plates, and field erection labor',
      ],
    },
    {
      id: 'woods',
      division: 'Division 06',
      name: 'Carpentry & Framing',
      icon: '🪚',
      units: ['MBF (Thousand Board Feet)', 'SF (Sheathing)', 'LF (Plates/Studs)', 'EA (Trusses)'],
      description: 'Precise dimensional lumber, engineered wood products, timber framing, and architectural casework modeling.',
      items: [
        'Light-frame exterior and interior wall studs (2x4, 2x6, 2x8 lumber)',
        'Engineered wood products: LVL, PSL, glulam beams, and I-joists',
        'Roof and floor trusses with hurricane ties and connector hardware',
        'Floor and roof sheathing: CDX plywood, OSB, and Zip System panels',
        'Rough carpentry blocking, nailers, furring, and subfloor adhesives',
        'Architectural millwork, trim, baseboards, crown molding, and casework',
      ],
    },
    {
      id: 'thermal-moisture',
      division: 'Division 07',
      name: 'Thermal & Moisture Protection',
      icon: '🏠',
      units: ['SQ (Roofing Squares = 100 SF)', 'SF (Surface Area)', 'LF (Flashing/Sealants)'],
      description: 'Full weatherization envelope estimates: commercial flat roofing, steep roofing, dampproofing, and insulation assemblies.',
      items: [
        'Commercial low-slope roofing: TPO, EPDM, PVC, and Modified Bitumen',
        'Steep-slope roofing: architectural shingles, standing seam metal, tile',
        'Polyiso rigid insulation boards, batt insulation, and closed-cell spray foam',
        'Sheet waterproofing, fluid-applied air/vapor barriers, and dampproofing',
        'Sheet metal flashing, copings, counter-flashings, and gutters/downspouts',
        'Exterior insulation and finish systems (EIFS) and cementitious siding',
      ],
    },
    {
      id: 'openings',
      division: 'Division 08',
      name: 'Doors, Windows & Glazing',
      icon: '🚪',
      units: ['EA (Door/Window Units)', 'SF (Storefront/Curtainwall)', 'SETS (Hardware Sets)'],
      description: 'Door and window schedule takeoffs cross-referenced with architectural floor plans, elevations, and hardware sets.',
      items: [
        'Hollow metal doors, knock-down frames, and welded masonry frames',
        'Solid-core architectural wood doors (birch, oak, fire-rated cores)',
        'Aluminum storefront systems, entrance doors, and thermal glazing',
        'Commercial curtain wall framing, spandrel glass, and shadow boxes',
        'Commercial hardware schedules: locksets, panics, closers, hinges, sweeps',
        'Skylights, roof access hatches, and coiling overhead service doors',
      ],
    },
    {
      id: 'finishes',
      division: 'Division 09',
      name: 'Drywall, Ceilings & Finishes',
      icon: '🎨',
      units: ['SF (Surface Area)', 'LF (Studs/Trim)', 'SY (Square Yards Flooring)'],
      description: 'High-speed, granular area takeoffs for commercial dry construction, acoustical ceilings, flooring, and coatings.',
      items: [
        'Cold-formed light-gauge metal stud framing (track, studs, RC channel)',
        'Gypsum drywall: 1/2", 5/8" Type X, moisture-resistant, mold-tough board',
        'Taping, mudding, Level 3 to Level 5 drywall finish labor allowances',
        'Acoustical ceiling tile (ACT): 2x2 and 2x4 grid systems and tiles',
        'Commercial flooring: resilient LVT, VCT, broadloom carpet, ceramic tile',
        'Interior and exterior painting, primer coats, epoxy coatings, and wall coverings',
      ],
    },
    {
      id: 'mep',
      division: 'Divisions 21–28',
      name: 'Complete MEP Systems',
      icon: '⚡',
      units: ['LF (Piping/Conduit/Duct)', 'LBS (Sheet Metal)', 'EA (Fixtures/Equipment)'],
      description: 'Turnkey Mechanical, Electrical, Plumbing, and Fire Suppression takeoff models for specialized and General Contractors.',
      items: [
        'Div 21 Fire Suppression: wet/dry pipe, sprinkler heads, riser assemblies',
        'Div 22 Plumbing: DWV sanitary piping, water supply, fixtures, water heaters',
        'Div 23 HVAC: ductwork (sheet metal weight in lbs), diffusers, RTUs, VAVs, chillers',
        'Div 26 Electrical: switchgear, panelboards, branch conduit, wire runs, lighting',
        'Div 27 Telecom & Data: Cat6 cabling, patch panels, data drops, server racks',
        'Div 28 Electronic Safety: fire alarm pull stations, smoke detectors, CCTV, card access',
      ],
    },
    {
      id: 'civil',
      division: 'Divisions 31–33',
      name: 'Civil, Site Work & Utilities',
      icon: '🚜',
      units: ['CY (Cut & Fill)', 'SF / SY (Paving)', 'LF (Trenching & Pipe Run)'],
      description: 'Earthwork volumes, sitework grading, paving, and underground wet/dry utility takeoffs from civil site plan sheets.',
      items: [
        'Site clearing, grubbing, topsoil stripping, and erosion control BMPs',
        'Earthwork cut/fill balance, mass excavation, and structural backfill',
        'Asphalt paving, aggregate base courses, concrete curbs, and sidewalks',
        'Stormwater management: catch basins, manholes, retention ponds, RCP pipe',
        'Underground utilities: domestic water service, sewer mains, gas service trenches',
        'Exterior chain link fencing, bollards, pavement markings, and site signage',
      ],
    },
  ]

  const filteredDivisions = selectedDivision === 'all' 
    ? tradeDivisions 
    : tradeDivisions.filter(t => t.id === selectedDivision)

  return (
    <div className="subpage-wrapper">
      {/* Subpage Hero Banner */}
      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Trades Covered</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">All 50 US States</span>
            <h1 className="subpage-hero-title">
              Complete CSI MasterFormat <span className="text-red">Trade Coverage</span>
            </h1>
            <p className="subpage-hero-desc">
              Whether you need a dedicated single-trade takeoff or a turnkey multi-division commercial estimate, our certified human senior estimators deliver precise quantities and RSMeans localized labor and material pricing.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Blueprints for Takeoff →
              </Link>
              <Link to="/services" className="btn btn-outline-white btn-lg">
                View Estimating Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section bg-light" style={{ paddingBottom: '30px' }}>
        <div className="container">
          <div className="trades-filter-bar">
            <button 
              className={`trade-filter-btn ${selectedDivision === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedDivision('all')}
            >
              All Trades (Div 02–33)
            </button>
            <button 
              className={`trade-filter-btn ${selectedDivision === 'concrete' ? 'active' : ''}`}
              onClick={() => setSelectedDivision('concrete')}
            >
              Concrete (Div 03)
            </button>
            <button 
              className={`trade-filter-btn ${selectedDivision === 'masonry' ? 'active' : ''}`}
              onClick={() => setSelectedDivision('masonry')}
            >
              Masonry (Div 04)
            </button>
            <button 
              className={`trade-filter-btn ${selectedDivision === 'metals' ? 'active' : ''}`}
              onClick={() => setSelectedDivision('metals')}
            >
              Metals & Steel (Div 05)
            </button>
            <button 
              className={`trade-filter-btn ${selectedDivision === 'finishes' ? 'active' : ''}`}
              onClick={() => setSelectedDivision('finishes')}
            >
              Drywall & Finishes (Div 09)
            </button>
            <button 
              className={`trade-filter-btn ${selectedDivision === 'mep' ? 'active' : ''}`}
              onClick={() => setSelectedDivision('mep')}
            >
              MEP (Div 21–28)
            </button>
            <button 
              className={`trade-filter-btn ${selectedDivision === 'civil' ? 'active' : ''}`}
              onClick={() => setSelectedDivision('civil')}
            >
              Civil & Earthwork (Div 31–33)
            </button>
          </div>
        </div>
      </section>

      {/* Trades Grid */}
      <section className="section bg-light" style={{ paddingTop: '10px' }}>
        <div className="container">
          <div className="trades-cards-grid">
            {filteredDivisions.map((trade) => (
              <div className="trade-scope-card" key={trade.id} id={trade.id}>
                <div className="trade-card-top">
                  <div className="trade-icon-large">{trade.icon}</div>
                  <div>
                    <span className="trade-division-pill">{trade.division}</span>
                    <h3 className="trade-card-title">{trade.name}</h3>
                  </div>
                </div>

                <p className="trade-card-desc">{trade.description}</p>

                <div className="trade-units-box">
                  <span className="trade-units-label">Measurement Units:</span>
                  <div className="trade-units-tags">
                    {trade.units.map((u, i) => (
                      <span className="unit-tag" key={i}>{u}</span>
                    ))}
                  </div>
                </div>

                <div className="trade-items-block">
                  <h4 className="trade-items-title">What We Quantify:</h4>
                  <ul className="trade-items-list">
                    {trade.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="trade-card-footer">
                  <Link to="/contact" className="btn btn-red btn-sm" style={{ width: '100%', textAlign: 'center' }}>
                    Request Quote for {trade.name} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurement Standards & Methodology */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">Industry Rigor</span>
            <h2 className="section-title">
              Our Measurement <span className="text-red">Standards & Tolerances</span>
            </h2>
            <p className="section-desc">
              We abide strictly by the guidelines set forth by the American Society of Professional Estimators (ASPE) and the Construction Specifications Institute (CSI).
            </p>
          </div>

          <div className="methodology-grid">
            <div className="methodology-card">
              <div className="methodology-icon">📐</div>
              <h4>Direct Digital Calibration</h4>
              <p>Every drawing sheet is calibrated against known dimension callouts before takeoff initiation to avoid scale distortion errors from PDF conversion.</p>
            </div>
            <div className="methodology-card">
              <div className="methodology-icon">📊</div>
              <h4>Wastage & Lap Factors</h4>
              <p>We apply standardized material-specific laps and wastage: 5% for rebar splice overlaps, 7% for drywall cutting, 10% for commercial ceramic tile cuts.</p>
            </div>
            <div className="methodology-card">
              <div className="methodology-icon">🔍</div>
              <h4>Dual-Estimator Peer Check</h4>
              <p>Every high-value takeoff undergoes an independent peer review by a second senior estimator to verify quantity sums against specification notes.</p>
            </div>
            <div className="methodology-card">
              <div className="methodology-icon">⚡</div>
              <h4>Addenda & RFI Support</h4>
              <p>If project engineers release addenda or change bulletins during bidding, we update your marked plans and quantity sheets promptly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="section-cta-banner">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-text">
              <h2>Need a Trade-Specific Estimate on a Tight Deadline?</h2>
              <p>Send us your drawing set or scope sheet. We'll examine the plans and reply with a confirmed turnaround time and customized quote.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Plans for Quote →
              </Link>
              <Link to="/takeoff-calculator" className="btn btn-outline-white btn-lg">
                Estimate Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

