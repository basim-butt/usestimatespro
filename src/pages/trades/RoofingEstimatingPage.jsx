import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import AccuracyAuditMethodology from '../../components/AccuracyAuditMethodology'

export default function RoofingEstimatingPage() {
  const pageTitle = 'Roofing Estimating Services & Takeoffs | US Estimates Pro'
  const pageDesc = 'Commercial roofing estimating services: TPO, EPDM, PVC, modified bitumen & architectural shingles. Accurate square counts & flashing takeoffs.'

  const faqList = [
    {
      q: 'Which roofing systems do your estimators quantify in Division 07?',
      a: 'We quantify commercial low-slope roofing systems (TPO, EPDM, PVC, Built-Up Roofing BUR, and 2-ply Modified Bitumen), steep-slope systems (architectural fiberglass shingles, standing seam metal, cedar shakes, slate, concrete/clay tile), and fluid-applied elastomeric coatings.',
    },
    {
      q: 'How do you measure roof area, pitch factors, and waste allowances?',
      a: 'We calculate true 3D surface area factoring in roof pitch multipliers (e.g., 4:12, 8:12), convert net square footage to standard roofing squares (1 SQ = 100 SF), and apply standardized waste factors (10% to 15% for hips, valleys, rakes, and dormers).',
    },
    {
      q: 'Are flashings, copings, and insulation boards included?',
      a: 'Yes. Every takeoff details polyiso rigid insulation boards, tapered insulation drainage packages, cover boards (DensDeck/Securock), parapet wall flashing, drip edges, gutter/downspout LF, and walk pads.',
    },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Roofing Estimating Services & Takeoffs',
    'serviceType': 'CSI Division 07 Roofing Estimating',
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
        canonicalPath="/trades/roofing-estimating"
      />

      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/trades">Trades</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Roofing Estimating</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">CSI Division 07</span>
            <h1 className="subpage-hero-title">
              Commercial Roofing Estimating &amp; Takeoff Services
            </h1>
            <p className="subpage-hero-desc">
              Accurate roof square takeoffs for commercial and residential roofing contractors. Low-slope single-ply TPO/EPDM membranes, tapered insulation layouts, metal copings, and steep-slope shingle takeoffs.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Roof Plans →
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
            <span className="section-tag">Division 07 Scope</span>
            <h2 className="section-title">
              Complete Thermal &amp; <span className="text-red">Moisture Protection Scopes</span>
            </h2>
            <p className="section-desc">
              Every detail itemized in standard roofing squares (100 SF) and linear feet of accessories.
            </p>
          </div>

          <div className="service-detail-split" style={{ marginTop: '30px' }}>
            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Low-Slope &amp; Steep-Slope Systems
              </h3>
              <ul className="service-bullet-list">
                <li>Commercial flat roofing: TPO (45/60/80 mil), EPDM ballasted/adhered, PVC membranes</li>
                <li>Modified bitumen 2-ply torch-down and cold-applied systems</li>
                <li>Architectural laminated shingles, underlayment felt, and ice/water shield</li>
                <li>Standing seam metal roofing with clips, ridge caps, and snow guards</li>
                <li>Tapered polyiso insulation packages with crickets and drain sumps</li>
                <li>Parapet wall counter-flashings, coping caps, scuppers, and conductor heads</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Accessories &amp; Edge Details
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                Perimeter edge metal and penetration flashings are frequently where margin is won or lost:
              </p>
              <div className="file-pills-wrap">
                <div className="file-pill">🏠 Total Roofing Squares (SQ) with pitch factor adjustments</div>
                <div className="file-pill">🛡️ Parapet coping, gravel stops &amp; drip edges in Linear Feet</div>
                <div className="file-pill">🔍 Pipe penetration boots, pitch pans &amp; curb flashings</div>
                <div className="file-pill">📊 Unlocked Microsoft Excel workbook with formula references</div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', color: 'var(--navy-dark)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Related Trade Scopes:
                </h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to="/trades/structural-steel-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Structural Steel →</Link>
                  <Link to="/trades/drywall-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Drywall &amp; Finishes →</Link>
                  <Link to="/trades/concrete-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Concrete Estimating →</Link>
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
              Roofing Estimating <span className="text-red">Frequently Asked Questions</span>
            </h2>
            <p className="section-desc">
              How our certified human estimators deliver accurate roofing takeoffs for bidding.
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
              <h2>Need a Roofing Takeoff for an Upcoming Bid Deadline?</h2>
              <p>Upload your architectural roof plan and details. We will examine your drawings and deliver an exact proposal in 1–2 hours.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Roofing Plans →
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
