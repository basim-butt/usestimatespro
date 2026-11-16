import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import AccuracyAuditMethodology from '../../components/AccuracyAuditMethodology'

export default function QuantityTakeoffsPage() {
  const pageTitle = 'Quantity Takeoff Services | US Estimates Pro'
  const pageDesc = 'Accurate, CSI-itemized material & quantity takeoff services in 24–48 hours. Color-coded Bluebeam PDFs and unlocked Excel sheets. Get a quote.'

  const faqList = [
    {
      q: 'What deliverables are included with your quantity takeoff services?',
      a: 'Every quantity takeoff includes unlocked Microsoft Excel (.xlsx) workbooks containing itemized line items and formulas, high-resolution color-coded Bluebeam marked-up PDFs with matching legend layers, and a CSI MasterFormat executive summary sheet.',
    },
    {
      q: 'How fast can I receive a completed quantity takeoff?',
      a: 'Our standard turnaround is 24 to 48 hours for most residential and commercial projects. For time-sensitive bid deadlines, emergency 24-hour rush estimating squads are available upon request.',
    },
    {
      q: 'What software do your senior estimators use for takeoffs?',
      a: 'We utilize industry-standard digitizing platforms including Bluebeam Revu, PlanSwift, and Trimble Accubid, ensuring seamless compatibility with your in-house estimating workflows.',
    },
    {
      q: 'Do you include material wastage and overlap allowances?',
      a: 'Yes. We apply calibrated trade-standard wastage factors based on CSI guidelines: 5% for rebar splice overlaps, 7% for drywall cutting and trimming, and 10% for custom ceramic tile patterns, clearly separated so you can adjust them as needed.',
    },
    {
      q: 'Can you handle single-trade takeoffs as well as full-scope packages?',
      a: 'Yes. We frequently work with specialized trade subcontractors who only need one scope (e.g., concrete or drywall) as well as General Contractors requiring a complete multi-division takeoff package.',
    },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Quantity Takeoff Services',
    'serviceType': 'Construction Material Takeoffs',
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
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Takeoff Deliverables',
      'itemListElement': [
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Unlocked Excel Material Sheet' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Color-Coded Bluebeam PDF Markups' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'CSI Division MasterFormat Summary' } },
      ],
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
        canonicalPath="/services/quantity-takeoffs"
      />

      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/services">Services</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Quantity Takeoff Services</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">CSI Divisions 02–33</span>
            <h1 className="subpage-hero-title">
              Construction Quantity Takeoff Services
            </h1>
            <p className="subpage-hero-desc">
              Accurate, line-by-line material, labor, and equipment takeoffs delivered in 24 to 48 hours. Audited by senior human estimators using Bluebeam Revu and PlanSwift with 100% unlocked formulas in Microsoft Excel.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Blueprints for Takeoff →
              </Link>
              <Link to="/takeoff-calculator" className="btn btn-outline-white btn-lg">
                Calculate Estimate Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Scope Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Verifiable Deliverables</span>
            <h2 className="section-title">
              What Is Included in Our <span className="text-red">Quantity Takeoff Packages</span>
            </h2>
            <p className="section-desc">
              Every takeoff is built so subcontractors and general contractors can verify calculations instantly, bid aggressively, and eliminate costly site shortages.
            </p>
          </div>

          <div className="service-detail-split" style={{ marginTop: '30px' }}>
            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Itemized Line-Item Breakdown
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                We quantify architectural, structural, civil, and MEP plans down to individual components. Every line item is tagged by CSI MasterFormat division and trade code.
              </p>
              <ul className="service-bullet-list">
                <li>Earthwork cut &amp; fill calculations in Cubic Yards (CY)</li>
                <li>Concrete foundations, slab-on-grade, and formwork contact area (SFCA)</li>
                <li>Structural steel framing, joists, and metal decking in LBS and TONS</li>
                <li>Lumber framing, engineered beams (LVL/glulam), and sheathing in MBF/SF</li>
                <li>Exterior thermal envelopes, roofing squares (SQ), and fluid-applied barriers</li>
                <li>Interior drywall, acoustical ceiling tiles (ACT), and flooring assemblies</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Visual Plan Markups &amp; Standards
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                Never guess where a number came from. You receive color-coded PDF drawings matching our spreadsheet line by line.
              </p>
              <div className="file-pills-wrap">
                <div className="file-pill">📊 Unlocked Microsoft Excel (.xlsx) with formulas</div>
                <div className="file-pill">📑 Color-Coded Bluebeam PDF drawing markups</div>
                <div className="file-pill">📐 CSI Division-by-division executive summary</div>
                <div className="file-pill">⚡ 24–48 Hour standard delivery turnaround</div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', color: 'var(--navy-dark)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Related Trade Scopes:
                </h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to="/trades/concrete-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Concrete Estimating →</Link>
                  <Link to="/trades/mep-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>MEP Estimating →</Link>
                  <Link to="/trades/structural-steel-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Steel Takeoffs →</Link>
                  <Link to="/trades/drywall-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Drywall Takeoffs →</Link>
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
              Quantity Takeoff <span className="text-red">Frequently Asked Questions</span>
            </h2>
            <p className="section-desc">
              Common questions contractors ask about our material takeoff process, file formats, and turnaround times.
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
              <h2>Ready for an Accurate Material Takeoff?</h2>
              <p>Upload your plans or share your plan room link. Our senior estimators will review your drawings and provide an exact quote in 1–2 hours.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Plans for Quote →
              </Link>
              <Link to="/services/rsmeans-cost-estimating" className="btn btn-outline-white btn-lg">
                RSMeans Cost Estimating →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
