import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import AccuracyAuditMethodology from '../../components/AccuracyAuditMethodology'

export default function MepEstimatingPage() {
  const pageTitle = 'MEP Estimating Services (Divisions 21–28) | US Estimates Pro'
  const pageDesc = 'Complete MEP estimating services: HVAC ductwork weight, electrical conduit, branch wiring, plumbing DWV & fire sprinklers. Fast 24–48 hr quotes.'

  const faqList = [
    {
      q: 'Which MEP divisions are included in your estimating services?',
      a: 'We cover Division 21 Fire Suppression, Division 22 Plumbing, Division 23 HVAC & Sheet Metal, Division 26 Electrical, Division 27 Communications & Data, and Division 28 Electronic Safety & Security.',
    },
    {
      q: 'How do you calculate HVAC ductwork takeoffs?',
      a: 'We measure rectangular, round, and spiral ductwork in linear feet and square feet of sheet metal surface area, converting to pounds (LBS) based on specified gauges. All dampers, diffusers, VAV boxes, RTUs, and insulation wraps are itemized.',
    },
    {
      q: 'Do you count electrical branch wiring, conduit, and panels?',
      a: 'Yes. We quantify main switchgear, distribution panels, feeders, branch EMT/MC cable runs, lighting fixtures, occupancy sensors, receptacles, and fire alarm devices directly from riser diagrams and reflected ceiling plans.',
    },
    {
      q: 'Can mechanical or electrical subcontractors request a single-trade quote?',
      a: 'Absolutely. Subcontractors frequently hire us solely for plumbing takeoff, HVAC sheet metal, or electrical branch counts, as well as full turnkey MEP packages for General Contractors.',
    },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'MEP Estimating Services',
    'serviceType': 'CSI Divisions 21-28 MEP Estimating',
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
        canonicalPath="/trades/mep-estimating"
      />

      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/trades">Trades</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">MEP Estimating</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Divisions 21–28</span>
            <h1 className="subpage-hero-title">
              Turnkey MEP Estimating Services (Divisions 21–28)
            </h1>
            <p className="subpage-hero-desc">
              Comprehensive Mechanical, Electrical, Plumbing, and Fire Suppression takeoff models. From ductwork sheet metal poundage and branch conduit to plumbing DWV fixtures and fire alarm devices.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit MEP Plans →
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
            <span className="section-tag">Turnkey MEP Solutions</span>
            <h2 className="section-title">
              Mechanical, Electrical &amp; <span className="text-red">Plumbing Scopes</span>
            </h2>
            <p className="section-desc">
              Detailed takeoff schedules cross-referenced against mechanical floor plans, riser schematics, and equipment schedules.
            </p>
          </div>

          <div className="service-detail-split" style={{ marginTop: '30px' }}>
            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                HVAC &amp; Plumbing Systems (Div 22–23)
              </h3>
              <ul className="service-bullet-list">
                <li>Ductwork quantification (rectangular, spiral, round) in linear feet and sheet metal LBS</li>
                <li>Air distribution: diffusers, grilles, registers, fire dampers, and VAV terminal boxes</li>
                <li>Equipment schedules: RTUs, chillers, boilers, cooling towers, and split DX units</li>
                <li>Domestic cold/hot water supply piping (copper, PEX, CPVC) with insulation</li>
                <li>Sanitary DWV waste &amp; vent piping (cast iron, PVC) with cleanouts and drains</li>
                <li>Plumbing fixtures: water closets, lavatories, sinks, water heaters, and interceptors</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Electrical &amp; Fire Life Safety (Div 21, 26–28)
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                High-density electrical counts and life safety systems itemized with precision:
              </p>
              <div className="file-pills-wrap">
                <div className="file-pill">⚡ Switchgear, distribution panels, transformers &amp; feeders</div>
                <div className="file-pill">💡 Lighting fixtures, emergency packs &amp; dimming controls</div>
                <div className="file-pill">🔌 Branch circuit conduit (EMT, MC cable, wire runs) in LF</div>
                <div className="file-pill">🚨 Fire alarm pull stations, smoke detectors &amp; strobe counts</div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', color: 'var(--navy-dark)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Related Trade Scopes:
                </h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to="/trades/concrete-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Concrete Estimating →</Link>
                  <Link to="/trades/structural-steel-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Structural Steel →</Link>
                  <Link to="/trades/drywall-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Drywall &amp; Ceilings →</Link>
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
              MEP Estimating <span className="text-red">Frequently Asked Questions</span>
            </h2>
            <p className="section-desc">
              How our certified human estimators handle complex commercial and residential MEP drawings.
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
              <h2>Need an MEP Estimate on a Tight Turnaround?</h2>
              <p>Upload your mechanical, electrical, and plumbing drawings. Our senior estimators will review your plan set and send a customized quote in 1–2 hours.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit MEP Drawings →
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
