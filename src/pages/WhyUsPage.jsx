import React from 'react'
import { Link } from 'react-router-dom'

export default function WhyUsPage() {
  const pillars = [
    {
      num: '01',
      title: '100% Certified Senior Human Estimators',
      subtitle: 'Zero automated AI guesswork. Zero offshore handoffs.',
      desc: 'Every takeoff is executed and audited by veteran estimators with at least 10 years of commercial construction field experience. We know what drawings omit, how materials assemble on site, and where change orders hide.',
    },
    {
      num: '02',
      title: '98.7% Verified Post-Bid Accuracy',
      subtitle: 'Tracked against real contractor buyouts and project audits',
      desc: 'Our estimates match real-world subcontractor buyouts within 1.3% on average. That means you win jobs with confidence knowing your estimated margins will hold true throughout construction.',
    },
    {
      num: '03',
      title: '24–48 Hour Standard Turnaround',
      subtitle: 'Emergency same-day and 24-hr rush teams ready to deploy',
      desc: 'Bid deadlines do not wait. We consistently beat submission cutoffs with standard 24–48 hour delivery and active pre-bid addenda revision support, keeping your bid pipeline full.',
    },
    {
      num: '04',
      title: '50-State RSMeans Cost Localization',
      subtitle: 'Zip-code specific labor burdens, union scales, and supply chain data',
      desc: 'National averages lose bids. We calibrate material and labor rates to your project city index, accounting for local union agreements, prevailing wage laws, equipment rates, and regional delivery charges.',
    },
    {
      num: '05',
      title: 'Fractional Estimating Cost Advantage',
      subtitle: 'Save up to 70% compared to maintaining full-time in-house staff',
      desc: 'A full-time senior estimator costs $95,000–$130,000 in salary, plus 401(k), healthcare, paid leave, and software licenses. With US Estimates Pro, you pay only for the bids you choose to pursue.',
    },
  ]

  const comparisonData = [
    {
      feature: 'Estimator Experience Level',
      usEstimates: 'Senior Estimators (10+ Years Field Experience)',
      inHouse: 'Varies; High recruitment & retention turnover',
      aiOnly: 'Algorithmic code; zero practical field experience',
    },
    {
      feature: 'Fixed Overhead & Annual Cost',
      usEstimates: 'Zero Overhead (Pay only per project / bid)',
      inHouse: '$95K–$130K/yr salary + $35K benefits & licenses',
      aiOnly: 'Monthly recurring subscription with high manual review required',
    },
    {
      feature: 'Turnaround Time',
      usEstimates: '24–48 Hours Guaranteed (Rush 24h available)',
      inHouse: 'Subject to internal workload bottlenecks & PTO',
      aiOnly: 'Fast initial output, but requires hours of human error-checking',
    },
    {
      feature: '50-State RSMeans Localization',
      usEstimates: 'Yes — Zip-code exact union & open-shop databases',
      inHouse: 'Rarely subscribed to nationwide regional data',
      aiOnly: 'Generic national pricing algorithms with high error margins',
    },
    {
      feature: 'Deliverable File Format',
      usEstimates: '100% Unlocked Excel (.xlsx) + Color Markups',
      inHouse: 'Internal custom spreadsheets',
      aiOnly: 'Proprietary locked viewer or static summary PDFs',
    },
    {
      feature: 'Addenda & Pre-Bid Revisions',
      usEstimates: 'Included — Prompt turnaround on scope bulletins',
      inHouse: 'Handled internally if time permits',
      aiOnly: 'Requires completely restarting the upload/parsing process',
    },
  ]

  const sectorsServed = [
    { title: 'General Contractors', desc: 'Comprehensive multi-division bid packages, CSI MasterFormat summaries, and subcontractor scope validation for commercial and public works.' },
    { title: 'Trade Subcontractors', desc: 'Fast, laser-focused single-trade material and labor takeoffs for drywall, concrete, steel, framing, roofing, and complete MEP contractors.' },
    { title: 'Real Estate Developers', desc: 'Conceptual cost modeling, pro forma budgeting, schematic design reviews, and contractor bid validation to secure construction financing.' },
    { title: 'Architects & Engineers', desc: 'Early-stage schematic and design-development budget checks to keep architectural concepts aligned with owner capital caps.' },
  ]

  return (
    <div className="subpage-wrapper">
      {/* Subpage Hero Banner */}
      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Why Choose Us</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">America's Estimating Partner</span>
            <h1 className="subpage-hero-title">
              Why America's Winning Contractors <span className="text-red">Rely On US Estimates Pro</span>
            </h1>
            <p className="subpage-hero-desc">
              We combine senior construction field expertise with advanced digital takeoff technology and localized RSMeans cost modeling. The result: verifiable numbers, faster bid submissions, and protected profit margins.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Your First Project →
              </Link>
              <Link to="/services" className="btn btn-outline-white btn-lg">
                View Estimating Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Pillars Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">Our Competitive Edge</span>
            <h2 className="section-title">
              The 5 Pillars of Our <span className="text-navy">98.7% Accuracy Rate</span>
            </h2>
            <p className="section-desc">
              Here is how we consistently deliver reliable, defensible construction takeoffs across thousands of residential, commercial, and industrial bids nationwide.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((p) => (
              <div className="pillar-card" key={p.num}>
                <div className="pillar-num">{p.num}</div>
                <h3 className="pillar-title">{p.title}</h3>
                <h4 className="pillar-subtitle">{p.subtitle}</h4>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Matrix */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">Direct Comparison</span>
            <h2 className="section-title">
              US Estimates Pro vs <span className="text-red">Alternative Solutions</span>
            </h2>
            <p className="section-desc">
              Compare our fractional estimating service against the cost of maintaining in-house personnel or relying on automated AI software.
            </p>
          </div>

          <div className="specs-table-container">
            <table className="specs-table comparison-table">
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>Key Capability</th>
                  <th style={{ width: '28%', background: '#0b1a30', color: '#fff' }}>US Estimates Pro</th>
                  <th style={{ width: '23%' }}>In-House Estimator</th>
                  <th style={{ width: '24%' }}>AI-Only / Automated Software</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx}>
                    <td><strong>{row.feature}</strong></td>
                    <td className="highlight-col">✅ {row.usEstimates}</td>
                    <td>{row.inHouse}</td>
                    <td>{row.aiOnly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Client Sectors */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">Who We Serve</span>
            <h2 className="section-title">
              Tailored Solutions for <span className="text-navy">Construction Leaders</span>
            </h2>
          </div>

          <div className="methodology-grid">
            {sectorsServed.map((s, idx) => (
              <div className="methodology-card" key={idx}>
                <div className="methodology-icon">🏢</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="section-cta-banner">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-text">
              <h2>Ready to Experience the US Estimates Pro Difference?</h2>
              <p>Send us your drawings today and receive a guaranteed delivery quote within 1–2 hours. No obligation.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Plans Now →
              </Link>
              <Link to="/takeoff-calculator" className="btn btn-outline-white btn-lg">
                Try Takeoff Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

