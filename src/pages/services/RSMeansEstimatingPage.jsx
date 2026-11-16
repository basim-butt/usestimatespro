import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import AccuracyAuditMethodology from '../../components/AccuracyAuditMethodology'

export default function RSMeansEstimatingPage() {
  const pageTitle = 'RSMeans Cost Estimating Services | US Estimates Pro'
  const pageDesc = 'Localized RSMeans cost estimating services across all 50 US states. Zip-code adjusted labor burdens, material pricing & equipment costs in 24–48 hrs.'

  const faqList = [
    {
      q: 'How does RSMeans localized cost data work?',
      a: 'RSMeans tracks labor rates, equipment rental fees, and building material prices in over 700 US locations. We apply specific City Cost Indexes (CCI) to adjust national baselines to your exact project zip code, accounting for local wage variations and regional supplier costs.',
    },
    {
      q: 'Do you estimate prevailing wage, union, and open-shop labor rates?',
      a: 'Yes. Depending on whether your project is private commercial, public works, or Davis-Bacon Act funded, we calibrate labor burdens according to local collective bargaining agreements, state prevailing wages, or open-shop competitive averages.',
    },
    {
      q: 'How frequently is your supplier material pricing updated?',
      a: 'Material pricing is cross-referenced quarterly against RSMeans construction cost databases and verified against regional wholesale suppliers for high-volatility materials like structural steel, lumber, and copper conduit.',
    },
    {
      q: 'Can you provide cost models for preliminary conceptual budgets?',
      a: 'Yes. We deliver conceptual square-foot estimates (SF) and parametric cost models for developers and architects during schematic design before final construction documents are fully completed.',
    },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'RSMeans Cost Estimating Services',
    'serviceType': 'Construction Cost Modeling',
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
        canonicalPath="/services/rsmeans-cost-estimating"
      />

      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/services">Services</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">RSMeans Cost Estimating</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Zip-Code Localized</span>
            <h1 className="subpage-hero-title">
              RSMeans Cost Estimating Services Across All 50 States
            </h1>
            <p className="subpage-hero-desc">
              Raw material quantities are only half the bid equation. Our certified human senior estimators combine comprehensive takeoffs with localized RSMeans City Cost Indexes (CCI) for defensible labor, equipment, and material budgets.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Request a Cost Estimate →
              </Link>
              <Link to="/services/quantity-takeoffs" className="btn btn-outline-white btn-lg">
                View Quantity Takeoffs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Localized Accuracy</span>
            <h2 className="section-title">
              How RSMeans Regional <span className="text-red">Cost Modeling Protects Your Margin</span>
            </h2>
            <p className="section-desc">
              Construction costs vary drastically between New York, Texas, Florida, and California. We calibrate every line item to your specific county and trade union parameters.
            </p>
          </div>

          <div className="service-detail-split" style={{ marginTop: '30px' }}>
            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Labor Burden &amp; Wage Schedules
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                Underestimating labor productivity or using national average wages causes bid losses or contract defaults. We build real-world labor models tailored to your business:
              </p>
              <ul className="service-bullet-list">
                <li>Davis-Bacon and municipal Prevailing Wage schedules</li>
                <li>Union master agreements and benefit fringe rate calculations</li>
                <li>Open-shop competitive local subcontract wage rates</li>
                <li>Crew productivity, mobilization, and daily output allowances</li>
                <li>Worker's compensation, liability insurance, and payroll taxes</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Equipment &amp; Material Indexing
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                Heavy equipment mobilization and volatile material pricing are modeled directly from regional data sources.
              </p>
              <div className="file-pills-wrap">
                <div className="file-pill">📍 Zip-Code Specific City Cost Index (CCI) adjustment</div>
                <div className="file-pill">🚜 Heavy equipment rental rates, fuel &amp; operating costs</div>
                <div className="file-pill">💼 Overhead, General Conditions &amp; target profit margins</div>
                <div className="file-pill">⏱️ 24–48 Hour turnaround for standard commercial sets</div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', color: 'var(--navy-dark)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Explore Regional &amp; Trade Details:
                </h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to="/locations/new-york" className="unit-tag" style={{ textDecoration: 'none' }}>New York Estimating →</Link>
                  <Link to="/services/bid-package-preparation" className="unit-tag" style={{ textDecoration: 'none' }}>Bid Packages →</Link>
                  <Link to="/services/value-engineering" className="unit-tag" style={{ textDecoration: 'none' }}>Value Engineering →</Link>
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
              RSMeans Estimating <span className="text-red">Frequently Asked Questions</span>
            </h2>
            <p className="section-desc">
              Understand how our estimators apply City Cost Indexes to create winning contractor proposals.
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
              <h2>Need a Zip-Code Specific Construction Cost Estimate?</h2>
              <p>Send us your drawings and project location. We will analyze your scope and provide a transparent, upfront proposal in 1–2 hours.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Blueprints →
              </Link>
              <Link to="/services/bid-package-preparation" className="btn btn-outline-white btn-lg">
                Bid Packages →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
