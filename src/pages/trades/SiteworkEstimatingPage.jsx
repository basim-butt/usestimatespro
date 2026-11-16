import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import AccuracyAuditMethodology from '../../components/AccuracyAuditMethodology'

export default function SiteworkEstimatingPage() {
  const pageTitle = 'Sitework & Civil Estimating Services | US Estimates Pro'
  const pageDesc = 'Cut & fill earthwork volume calculations, utility trenching, asphalt paving, and civil site work estimating services. Fast 24–48 hour turnaround.'

  const faqList = [
    {
      q: 'What civil and earthwork scopes are quantified in Divisions 31–33?',
      a: 'We quantify site clearing and grubbing (acres / SF), topsoil stripping and respread, mass cut and fill earthwork balance (CY), trench excavation and backfill, underground utilities (storm sewer, sanitary sewer, water main, gas trenches in LF), asphalt paving, aggregate base course, concrete curbs, and site erosion control BMPs.',
    },
    {
      q: 'How do you calculate cut and fill earthwork balance?',
      a: 'We model existing vs proposed topographical contour lines using digital civil takeoff software to calculate exact cut volumes, fill requirements, net import or export cubic yards (CY), and apply realistic soil compaction/shrinkage and swell factors.',
    },
    {
      q: 'Do you separate utility trenching and pipe bedding?',
      a: 'Yes. Utility runs are measured in linear feet (LF) grouped by pipe diameter and depth bracket (0–6 ft, 6–10 ft, 10+ ft), calculating trench rock allowances, bedding stone, pipe material, and compacted backfill volumes.',
    },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Sitework & Civil Estimating Services',
    'serviceType': 'CSI Divisions 31-33 Civil Estimating',
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
        canonicalPath="/trades/sitework-estimating"
      />

      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/trades">Trades</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Sitework Estimating</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Divisions 31–33</span>
            <h1 className="subpage-hero-title">
              Sitework, Civil &amp; Earthwork Estimating Services
            </h1>
            <p className="subpage-hero-desc">
              Accurate 3D earthwork cut and fill calculations, utility trenching, asphalt paving, and civil site development takeoffs for general engineering and site subcontractors.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Civil Plans →
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
            <span className="section-tag">Divisions 31–33 Scope</span>
            <h2 className="section-title">
              Earthwork, Utilities &amp; <span className="text-red">Paving Scopes</span>
            </h2>
            <p className="section-desc">
              From site grading and stormwater management to underground utility connections and asphalt surfaces.
            </p>
          </div>

          <div className="service-detail-split" style={{ marginTop: '30px' }}>
            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Earthwork &amp; Site Preparation
              </h3>
              <ul className="service-bullet-list">
                <li>Site clearing, grubbing, tree protection, and demolition in acres / SF</li>
                <li>Topsoil stripping (6", 8", 12") and finished grading respread volumes</li>
                <li>Mass excavation, structural backfill, and net cut/fill balance in Cubic Yards (CY)</li>
                <li>Erosion control: silt fencing, inlet protection, construction entrance tracking pads</li>
                <li>Soil stabilization, geotextile fabric rolls, and lime/cement stabilization</li>
                <li>Retaining wall excavation, drainage rock backfill, and perforated drain tile</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Utilities &amp; Paving Surfaces
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                Underground utility runs and paving cross-sections calculated with depth profiling:
              </p>
              <div className="file-pills-wrap">
                <div className="file-pill">🚜 Storm drainage: catch basins, manholes, RCP pipe in LF</div>
                <div className="file-pill">💧 Water main supply (DIP, C900 PVC), fire hydrants &amp; meters</div>
                <div className="file-pill">🛣️ Asphalt binder &amp; wearing courses (SY/Tons) + aggregate base</div>
                <div className="file-pill">📊 Unlocked Microsoft Excel workbook with formulas</div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', color: 'var(--navy-dark)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Related Trade Scopes:
                </h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to="/trades/concrete-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Concrete Estimating →</Link>
                  <Link to="/trades/mep-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>MEP Estimating →</Link>
                  <Link to="/trades/structural-steel-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Structural Steel →</Link>
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
              Civil Estimating <span className="text-red">Frequently Asked Questions</span>
            </h2>
            <p className="section-desc">
              How our certified human estimators calculate reliable earthwork volumes and utility budgets.
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
              <h2>Need a Civil Sitework Takeoff on a Tight Turnaround?</h2>
              <p>Upload your civil grading, utility, and paving sheets. We will analyze your site plans and deliver an exact proposal in 1–2 hours.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Civil Plans →
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
