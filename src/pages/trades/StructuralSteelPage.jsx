import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import AccuracyAuditMethodology from '../../components/AccuracyAuditMethodology'

export default function StructuralSteelPage() {
  const pageTitle = 'Structural Steel Estimating & Takeoffs | US Estimates Pro'
  const pageDesc = 'Granular structural steel estimating: W-shapes, HSS columns, joists, metal decking & misc ironwork. RSMeans labor & material pricing nationwide.'

  const faqList = [
    {
      q: 'What structural steel items are quantified in Division 05?',
      a: 'We quantify wide-flange beams and columns (W-shapes), hollow structural sections (HSS tube steel), structural angles and channels, open-web steel joists (K, LH, DLH series), composite corrugated floor and roof metal decking, and anchor bolt embed groups.',
    },
    {
      q: 'How do you calculate structural steel tonnage and connection hardware?',
      a: 'We measure linear lengths per member profile, compute theoretical weights based on AISC manual specifications, and add allowances for connection clip angles, gusset plates, shear tabs, base plates, and field erection hardware (typically 8% to 15% allowance unless fully detailed).',
    },
    {
      q: 'Do you quantify miscellaneous metals like pan stairs and guardrails?',
      a: 'Yes. Miscellaneous metals are itemized in separate scope tables: commercial pan stairs, pipe handrails, guardrails, ladders with safety cages, bollards, and elevator divider beams.',
    },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Structural Steel Estimating & Takeoffs',
    'serviceType': 'CSI Division 05 Structural Steel Estimating',
    'provider': {
      '@type': 'ProfessionalService',
      'name': 'US Estimates Pro',
      'url': 'https://www.usestimatespro.com',
      'telephone': '+1-800-555-0199',
    },
    'description': pageDesc,
    'areaServed': {
      '@type': 'Country',
      'name': 'United States',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqList.map((f) => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.a,
      },
    })),
  }

  return (
    <div className="subpage-wrapper">
      <SEO
        title={pageTitle}
        description={pageDesc}
        schema={{ '@graph': [schemaData, faqSchema] }}
        canonicalPath="/trades/structural-steel-estimating"
      />

      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/trades">Trades</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Structural Steel</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">CSI Division 05</span>
            <h1 className="subpage-hero-title">
              Structural Steel Estimating &amp; Metal Takeoff Services
            </h1>
            <p className="subpage-hero-desc">
              Accurate fabrication and erection takeoffs for steel fabricators, erectors, and General Contractors. AISC-compliant tonnage counts for heavy framing, open-web joists, metal decking, and miscellaneous iron.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Structural Steel Plans →
              </Link>
              <Link to="/trades" className="btn btn-outline-white btn-lg">
                All Construction Trades
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Breakdown */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Division 05 Scope</span>
            <h2 className="section-title">
              Heavy Structural Steel &amp; <span className="text-red">Miscellaneous Metals</span>
            </h2>
            <p className="section-desc">
              Every profile weight is calculated using AISC standards and cross-checked against structural general notes and schedules.
            </p>
          </div>

          <div className="service-detail-split" style={{ marginTop: '30px' }}>
            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Primary Framing &amp; Decking Takeoffs
              </h3>
              <ul className="service-bullet-list">
                <li>Wide-flange beams, girders, and columns (W-shapes in LBS &amp; TONS)</li>
                <li>Hollow Structural Sections (HSS square, rectangular, and round tubes)</li>
                <li>Structural channels, angles, and moment connection details</li>
                <li>Open-web steel joists (K, LH, DLH series) and horizontal bridging</li>
                <li>Composite corrugated floor and roof metal decking (1.5", 2", 3" profiles)</li>
                <li>Base plates, anchor bolt templates, embed plates, and shear studs</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Miscellaneous Iron &amp; Erection
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                Fabrication shop labor and field crane erection labor modeled with precision:
              </p>
              <div className="file-pills-wrap">
                <div className="file-pill">🪜 Steel pan stairs, landings &amp; diamond plate treads</div>
                <div className="file-pill">🛡️ Industrial pipe handrails, guardrails &amp; safety gates</div>
                <div className="file-pill">🏗️ Crane mobilization, rigging &amp; field erection crews</div>
                <div className="file-pill">📊 Unlocked Microsoft Excel workbook with formulas</div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', color: 'var(--navy-dark)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Related Trade Scopes:
                </h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to="/trades/concrete-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Concrete Estimating →</Link>
                  <Link to="/trades/roofing-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Roofing Estimating →</Link>
                  <Link to="/trades/drywall-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Drywall &amp; Framing →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accuracy Verification Protocol */}
      <AccuracyAuditMethodology />

      {/* Frequently Asked Questions */}
      <section className="section bg-light" id="faq">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Got Questions?</span>
            <h2 className="section-title">
              Steel Estimating <span className="text-red">Frequently Asked Questions</span>
            </h2>
            <p className="section-desc">
              How our certified human estimators deliver precise steel takeoffs for fabricators and erectors.
            </p>
          </div>

          <div className="faq-accordion-list">
            {faqList.map((item, i) => (
              <div className="faq-item-card" key={i}>
                <h3 className="faq-question">{item.q}</h3>
                <p className="faq-answer">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-cta-banner">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-text">
              <h2>Need a Structural Steel Takeoff for an Upcoming Tender?</h2>
              <p>Upload your structural plan sheets. We'll examine your drawings and deliver an exact proposal in 1–2 hours.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Steel Plans →
              </Link>
              <Link to="/services/quantity-takeoffs" className="btn btn-outline-white btn-lg">
                Quantity Takeoffs Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
