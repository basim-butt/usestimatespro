import React from 'react'
import { Link } from 'react-router-dom'

export default function ServicesPage() {
  const coreServices = [
    {
      id: 'takeoffs',
      icon: '📐',
      title: 'Comprehensive Quantity Takeoffs (MTO)',
      subtitle: 'Line-by-line material, labor, and equipment counts itemized by CSI Division',
      description: 'Our senior estimators use Bluebeam Revu and PlanSwift to digitize your architectural, structural, civil, and MEP drawings. Every measurement is verifiable through color-coded plan markups, ensuring full transparency when you review your bid.',
      highlights: [
        'Itemized line-item counts with precise formulas in unlocked Microsoft Excel (.xlsx)',
        'Accurate trade-standard material wastage factors (3% to 10% based on material type)',
        'High-resolution, color-coded PDF drawing markups with matching legend layers',
        'CSI MasterFormat division tagging for instant accounting and software import',
      ],
      turnaround: '24–48 Hours',
      deliverables: ['Excel Material Workbook', 'Color-Coded Marked Up PDFs', 'Summary Sheet'],
    },
    {
      id: 'rsmeans',
      icon: '💲',
      title: 'RSMeans Regional Cost Estimating',
      subtitle: 'Hyper-localized pricing adjusted to your project zip code and labor environment',
      description: 'Raw quantities are only half the battle. We apply up-to-date regional RSMeans City Cost Indexes (CCI) to calculate exact local labor burdens, equipment rates, and localized supplier material costs across all 50 US states.',
      highlights: [
        'Zip-code specific labor models: Prevailing Wage, Davis-Bacon, Union, and Open-Shop rates',
        'Current supplier material price databases updated monthly to reflect market volatility',
        'Equipment productivity and mobilization costs tailored to local site conditions',
        'Overhead, profit, bonding, and general conditions calculated per project scope',
      ],
      turnaround: '24–48 Hours',
      deliverables: ['Regional Cost Model', 'Labor Burden Matrix', 'Equipment Schedule'],
    },
    {
      id: 'bid-packages',
      icon: '📋',
      title: 'Complete Bid-Ready Proposal Packages',
      subtitle: 'Turnkey submittals formatted for immediate submission to Owners, GCs & Public Agencies',
      description: 'Win more bids with professionally formatted proposals that eliminate scope gaps. We prepare comprehensive bid packages that protect your margins, satisfy strict RFP requirements, and give project owners total confidence.',
      highlights: [
        'Executive project summary with division-by-division cost breakdown',
        'Explicit inclusions, exclusions, and scope clarification notes to prevent change orders',
        'Alternates, allowances, and phase-by-phase expenditure schedules',
        'Formatted to AIA Document G702/G703 standards and CSI MasterFormat',
      ],
      turnaround: '48–72 Hours',
      deliverables: ['Bid Proposal Package', 'Clarifications Document', 'AIA-Ready Schedule'],
    },
    {
      id: 'value-engineering',
      icon: '💡',
      title: 'Value Engineering & Constructability Review',
      subtitle: 'Strategic cost reductions that protect design intent and restore tight budgets',
      description: 'When project budgets exceed owner caps, our senior estimators identify practical material substitutions, assembly optimizations, and phasing alternatives that cut costs without compromising safety, code compliance, or quality.',
      highlights: [
        'Side-by-side alternative material comparison tables with cost deltas',
        'Constructability notes highlighting potential field clashes and long-lead risks',
        'Life-cycle cost assessments balancing initial capital expenditure against durability',
        'Negotiation-ready documentation for owner-contractor budget alignment sessions',
      ],
      turnaround: '48 Hours',
      deliverables: ['VE Comparison Table', 'Constructability Notes', 'Budget Savings Report'],
    },
    {
      id: 'single-trade',
      icon: '🏗️',
      title: 'Single-Trade Subcontractor Takeoffs',
      subtitle: 'Tailored estimating scopes built specifically for specialized trade contractors',
      description: 'Subcontractors often only need specific divisions estimated under tight deadlines. We provide laser-focused takeoffs for single trades, giving you the exact quantities and labor hours needed to quote General Contractors rapidly.',
      highlights: [
        'Dedicated packages: Concrete, Masonry, Framing, Drywall, Roofing, Paint, Steel, MEP',
        'Labor hour models based on crew production rates and site access conditions',
        'Fast-track delivery designed around competitive subcontractor tender deadlines',
        'Assistance with RFIs (Requests for Information) on drawing ambiguities',
      ],
      turnaround: '24 Hours',
      deliverables: ['Trade-Specific Excel', 'Subcontractor Bid Sheet', 'Annotated Plans'],
    },
    {
      id: 'rush-delivery',
      icon: '⚡',
      title: 'Rush 24-Hour Emergency Estimating',
      subtitle: 'Rapid turnaround squad for looming bid deadlines without sacrificing accuracy',
      description: 'When an unexpected bid deadline lands on your desk, our emergency response team mobilizes immediately. We assign multiple senior estimators in tandem to deliver fully audited, high-precision numbers on time.',
      highlights: [
        'Immediate project intake and drawing triage within 60 minutes of upload',
        'Parallel takeoff workflows across divisions by dedicated senior peer estimators',
        'Continuous communication via email and direct portal tracking',
        'Guaranteed delivery ahead of your formal submission cutoff',
      ],
      turnaround: 'Same-Day / 24 Hours',
      deliverables: ['Priority Delivery', 'Dual-Peer Review Audit', 'Full Bid File'],
    },
  ]

  const deliverableSpecs = [
    { deliverable: 'Excel Quantity Sheet', format: '.XLSX (Unlocked Formulas)', standard: 'CSI MasterFormat (16 & 50 Divisions)', usage: 'Editable workbook with live formulas for easy contractor adjustments' },
    { deliverable: 'Color-Coded Plan Markups', format: 'Vector PDF (Layers Intact)', standard: 'Bluebeam Revu / PlanSwift Standard', usage: 'Audit drawings showing exact highlighted takeoffs and measurement callouts' },
    { deliverable: 'Pricing & Cost Model', format: '.XLSX & Summary PDF', standard: 'RSMeans Localized City Index', usage: 'Detailed labor wage, material supply, and equipment rate schedules' },
    { deliverable: 'Inclusions & Exclusions', format: 'Formatted PDF & Word', standard: 'AIA & AGC Best Practice Guidelines', usage: 'Legal scope protection defining exactly what was quantified and assumed' },
  ]

  return (
    <div className="subpage-wrapper">
      {/* Subpage Hero Banner */}
      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Estimating Services</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Full-Scope Capabilities</span>
            <h1 className="subpage-hero-title">
              Professional Construction Estimating Services <span className="text-red">You Can Bid On</span>
            </h1>
            <p className="subpage-hero-desc">
              From fast single-trade material takeoffs to complex multi-million dollar commercial bid packages, our certified senior estimators deliver verifiable, RSMeans-backed numbers across all 50 states within 24 to 48 hours.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Plans for Quote →
              </Link>
              <Link to="/takeoff-calculator" className="btn btn-outline-white btn-lg">
                Takeoff Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Detailed Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">What We Deliver</span>
            <h2 className="section-title">
              Comprehensive Estimating Solutions for <span className="text-navy">Every Project Phase</span>
            </h2>
            <p className="section-desc">
              Every estimate is prepared by senior estimators with a minimum of 10 years of commercial field experience. We never rely on automated AI guesses or unchecked software algorithms.
            </p>
          </div>

          <div className="service-detail-list">
            {coreServices.map((service, index) => (
              <div className="service-detail-card" key={service.id} id={service.id}>
                <div className="service-detail-header">
                  <div className="service-detail-icon">{service.icon}</div>
                  <div className="service-detail-title-block">
                    <div className="service-detail-meta">
                      <span className="service-index">0{index + 1}</span>
                      <span className="service-turnaround-badge">⏱ Turnaround: {service.turnaround}</span>
                    </div>
                    <h3 className="service-detail-title">{service.title}</h3>
                    <p className="service-detail-sub">{service.subtitle}</p>
                  </div>
                </div>

                <p className="service-detail-body">{service.description}</p>

                <div className="service-detail-split">
                  <div className="service-detail-highlights">
                    <h4 className="service-block-heading">Core Scope & Inclusions:</h4>
                    <ul className="service-bullet-list">
                      {service.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-detail-files">
                    <h4 className="service-block-heading">Included Files:</h4>
                    <div className="file-pills-wrap">
                      {service.deliverables.map((d, i) => (
                        <span className="file-pill" key={i}>
                          📁 {d}
                        </span>
                      ))}
                    </div>
                    <Link to="/contact" className="btn btn-outline-navy btn-sm" style={{ marginTop: '16px', display: 'inline-block' }}>
                      Request Scope Quote →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverable Specifications Table */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">Transparency Guaranteed</span>
            <h2 className="section-title">
              Standard Deliverable <span className="text-red">Specifications</span>
            </h2>
            <p className="section-desc">
              All client deliverables are fully unlocked and formatted to seamlessly integrate with your existing workflow and accounting software.
            </p>
          </div>

          <div className="specs-table-container">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Deliverable Item</th>
                  <th>File Format</th>
                  <th>Industry Standard</th>
                  <th>Primary Application</th>
                </tr>
              </thead>
              <tbody>
                {deliverableSpecs.map((row, idx) => (
                  <tr key={idx}>
                    <td><strong>{row.deliverable}</strong></td>
                    <td><code>{row.format}</code></td>
                    <td>{row.standard}</td>
                    <td>{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="section-cta-banner">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-text">
              <h2>Ready to Bid With Total Confidence?</h2>
              <p>Upload your architectural blueprints today and receive a detailed quote and scope breakdown within 1 to 2 hours.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Plans Now →
              </Link>
              <Link to="/trades" className="btn btn-outline-white btn-lg">
                Explore Trades Covered
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

