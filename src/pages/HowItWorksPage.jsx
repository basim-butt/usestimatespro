import React from 'react'
import { Link } from 'react-router-dom'

export default function HowItWorksPage() {
  const steps = [
    {
      step: '01',
      title: 'Submit Drawings & Project Parameters',
      subtitle: 'Upload your plan sets via our secure portal or cloud links',
      description: 'Send us your architectural, structural, civil, or MEP drawings in PDF, DWG, or ZIP format. Include your project zip code, scope instructions (e.g. specific trades or turnkey full-scope), labor model (Union, Open-Shop, or Prevailing Wage), and target bid deadline.',
      details: [
        'Supported formats: Vector PDFs, AutoCAD (.dwg), Revit (.rvt), or cloud links (Dropbox, Google Drive, Procore, PlanGrid)',
        'Specify single-trade takeoff or complete general contractor multi-division estimate',
        'Upload project specifications, geotechnical reports, and addenda if available',
        'Strict NDA protection guarantees your bidding privacy and plan confidentiality',
      ],
      timeframe: 'Instant / Same-Day',
    },
    {
      step: '02',
      title: 'Scope Review & Guaranteed Fixed Quote',
      subtitle: 'Receive a transparent proposal within 1 to 2 hours of review',
      description: 'A certified senior estimator performs an immediate sheet count and complexity assessment. We formulate a guaranteed, fixed-price fee with zero hidden charges and commit to an exact delivery date prior to your bid deadline.',
      details: [
        'Detailed scope confirmation letter outlining exact CSI divisions covered',
        'Guaranteed turnaround commitment (typically 24 to 48 hours for standard projects)',
        'Transparent fixed pricing — never any unexpected hourly billing or surcharges',
        'Direct estimator contact assigned to answer technical inquiries',
      ],
      timeframe: 'Within 60–120 Minutes',
    },
    {
      step: '03',
      title: 'Precision Takeoff & Localized Cost Modeling',
      subtitle: 'Digital takeoff execution backed by senior peer quality control',
      description: 'Your project is assigned to a senior estimator with direct field experience in your specific trades. We calibrate drawings in Bluebeam Revu, trace every assembly, apply verified material wastage factors, and apply RSMeans zip-code localized cost indexes.',
      details: [
        'Digital on-screen takeoff using industry-leading software: Bluebeam Revu and PlanSwift',
        'Formulas embedded into every Excel line item for full auditability and live editing',
        'Hyper-localized RSMeans pricing reflecting current city labor wage burdens and material supply',
        'Mandatory dual-peer review: every estimate is checked by a second senior estimator before release',
      ],
      timeframe: '24–48 Hours',
    },
    {
      step: '04',
      title: 'Final Delivery & Active Pre-Bid Consultation',
      subtitle: 'Receive editable workbooks, marked-up drawings, and addenda support',
      description: 'We deliver your complete bid package formatted for immediate client or owner submittal. If the project owner or architect issues an addendum or scope clarification before bid day, we update your numbers promptly.',
      details: [
        'Unlocked Microsoft Excel (.xlsx) workbook with dynamic formulas and CSI summary tabs',
        'High-resolution, color-coded PDF drawings with highlighted callouts and measurement legends',
        'Clarifications, inclusions, and exclusions document to safeguard your profit margins',
        'Full addenda support: we revise quantities if revised plan sets are issued prior to tender',
      ],
      timeframe: 'Ahead of Bid Cutoff',
    },
  ]

  const softwareStack = [
    { name: 'Bluebeam Revu 21', category: 'Plan Calibration & PDF Markup', desc: 'Digital vector measurement with exact layer separation and color-coded takeoff callouts.' },
    { name: 'PlanSwift Professional', category: 'Takeoff Automation & Assemblies', desc: 'Detailed component assembly modeling for complex framing, drywall, and concrete elements.' },
    { name: 'RSMeans Localized Online', category: 'Regional Cost Database', desc: 'Quarterly updated city cost indexes across all 50 states, reflecting open-shop and union wage burdens.' },
    { name: 'Microsoft Excel Pro', category: 'Dynamic Formulas & CSI Formats', desc: 'Fully unlocked workbooks structured around CSI MasterFormat 16/50 divisions for effortless accounting export.' },
  ]

  const faqs = [
    {
      q: 'How fast can I receive my completed estimate?',
      a: 'Standard commercial and residential estimates are delivered within 24 to 48 hours. For urgent bids with tight cutoffs, our expedited 24-hour rush service deploys parallel estimator squads to beat your submission deadline.',
    },
    {
      q: 'Are the delivered Excel spreadsheets locked or restricted?',
      a: 'Never. All our deliverable workbooks are 100% unlocked with all formulas, quantities, and unit rates accessible. You can easily adjust your markups, change wage rates, or insert your proprietary subcontractor numbers.',
    },
    {
      q: 'What happens if the architect issues an addendum before the bid date?',
      a: 'We provide active pre-bid support. Simply email us the addendum drawings or scope bulletins, and our estimators will update the affected line items and marked plans promptly.',
    },
    {
      q: 'Do you cover both union and non-union (open shop) projects?',
      a: 'Yes. Through our RSMeans database and localized labor models, we can configure your estimate for prevailing wage / Davis-Bacon Act public projects, union agreements, or local private open-shop rates.',
    },
    {
      q: 'Are our plans and project data kept confidential?',
      a: 'Strictly confidential. We operate under rigorous non-disclosure protocols and secure encrypted cloud storage. Your proprietary bid pricing, drawing files, and project strategies are never shared or made public.',
    },
  ]

  return (
    <div className="subpage-wrapper">
      {/* Subpage Hero Banner */}
      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Our Workflow</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Tested & Proven Workflow</span>
            <h1 className="subpage-hero-title">
              From Blueprint to Bid-Ready in <span className="text-red">24 to 48 Hours</span>
            </h1>
            <p className="subpage-hero-desc">
              A transparent, streamlined estimating workflow designed by veteran construction estimators. We eliminate guesswork, prevent scope gaps, and deliver rock-solid numbers that win bids and protect profits.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Plans to Start →
              </Link>
              <Link to="/services" className="btn btn-outline-white btn-lg">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Deep Dive */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">Step-by-Step Blueprint</span>
            <h2 className="section-title">
              How US Estimates Pro <span className="text-navy">Delivers Precision</span>
            </h2>
            <p className="section-desc">
              Every stage of our process is built around accuracy, transparency, and strict adherence to industry estimating guidelines.
            </p>
          </div>

          <div className="workflow-steps-vertical">
            {steps.map((s) => (
              <div className="workflow-step-card" key={s.step}>
                <div className="workflow-step-num-col">
                  <div className="workflow-number-badge">{s.step}</div>
                  <div className="workflow-timeline-pill">{s.timeframe}</div>
                </div>

                <div className="workflow-step-content-col">
                  <div className="workflow-step-header">
                    <h3 className="workflow-step-title">{s.title}</h3>
                    <p className="workflow-step-subtitle">{s.subtitle}</p>
                  </div>

                  <p className="workflow-step-body">{s.description}</p>

                  <div className="workflow-step-details">
                    <h4 className="workflow-step-details-heading">Key Safeguards & Protocols:</h4>
                    <ul className="workflow-step-list">
                      {s.details.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Tools Stack */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">Technology Stack</span>
            <h2 className="section-title">
              Industry-Standard <span className="text-red">Estimating Tools</span>
            </h2>
            <p className="section-desc">
              We leverage the construction industry's most trusted software platforms to guarantee plan calibration precision and seamless file exchange.
            </p>
          </div>

          <div className="software-grid">
            {softwareStack.map((sw, i) => (
              <div className="software-card" key={i}>
                <span className="software-category">{sw.category}</span>
                <h4 className="software-name">{sw.name}</h4>
                <p className="software-desc">{sw.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process FAQs */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">
              Common Questions About <span className="text-navy">Our Estimating Process</span>
            </h2>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((f, i) => (
              <div className="faq-item-card" key={i}>
                <h4 className="faq-question">❓ {f.q}</h4>
                <p className="faq-answer">{f.a}</p>
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
              <h2>Have an Upcoming Bid Date?</h2>
              <p>Send your drawings over right now. We'll examine the plan set and provide a guaranteed delivery timeline and fixed proposal.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Your Drawings →
              </Link>
              <Link to="/why-us" className="btn btn-outline-white btn-lg">
                Why Contractors Choose Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

