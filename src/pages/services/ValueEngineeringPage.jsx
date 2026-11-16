import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import AccuracyAuditMethodology from '../../components/AccuracyAuditMethodology'

export default function ValueEngineeringPage() {
  const pageTitle = 'Value Engineering Construction Services | US Estimates Pro'
  const pageDesc = 'Practical value engineering services for commercial construction. Reduce project costs while preserving structural integrity and design intent. Inquire today.'

  const faqList = [
    {
      q: 'What is value engineering in commercial construction?',
      a: 'Value engineering (VE) is a structured review of architectural, structural, and MEP assemblies to identify material substitutions, construction phasing optimizations, and alternative methods that lower total capital expenditure without sacrificing performance, safety, or design aesthetics.',
    },
    {
      q: 'How does value engineering protect design intent and code compliance?',
      a: 'We do not simply recommend cheaper products. Our senior estimators evaluate ASTM standards, local building codes, fire ratings, and thermal performance to ensure any suggested substitution meets or exceeds original project specifications.',
    },
    {
      q: 'When should a contractor or owner initiate value engineering?',
      a: 'Value engineering is most effective during schematic design or right after the initial bid round when preliminary pricing exceeds budget thresholds. However, VE reviews can also be performed during pre-construction buyout to maximize contractor margins.',
    },
    {
      q: 'Do you provide side-by-side cost delta calculations?',
      a: 'Yes. Every VE recommendation includes an itemized cost delta table showing material cost differences, associated labor savings or additions, and the net overall impact on project budget.',
    },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Value Engineering Construction Services',
    'serviceType': 'Construction Value Engineering',
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
        canonicalPath="/services/value-engineering"
      />

      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/services">Services</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Value Engineering</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Cost Optimization</span>
            <h1 className="subpage-hero-title">
              Value Engineering &amp; Constructability Review Services
            </h1>
            <p className="subpage-hero-desc">
              When initial project budgets exceed owner caps, our senior human estimators identify practical material substitutions, assembly optimizations, and constructability solutions that cut costs without compromising structural safety or design intent.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Request a VE Consultation →
              </Link>
              <Link to="/services/quantity-takeoffs" className="btn btn-outline-white btn-lg">
                View Quantity Takeoffs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VE Capabilities */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Practical Solutions</span>
            <h2 className="section-title">
              How We Identify Real <span className="text-red">Cost Reductions</span>
            </h2>
            <p className="section-desc">
              We look beyond unit price slashing to examine lifecycle durability, installation labor, and lead-time impacts.
            </p>
          </div>

          <div className="service-detail-split" style={{ marginTop: '30px' }}>
            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Structural &amp; Architectural VE Options
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                Our team audits your specifications against current market availability and trade practices:
              </p>
              <ul className="service-bullet-list">
                <li>Alternative structural framing assemblies (steel joists vs light-gauge trusses vs heavy timber)</li>
                <li>Commercial building envelope optimizations (single-ply TPO vs multi-ply modified bitumen)</li>
                <li>Interior wall partition studs and drywall thickness adjustments for non-loadbearing partitions</li>
                <li>Finish substitutions (high-performance LVT flooring vs terrazzo or imported ceramic tile)</li>
                <li>MEP equipment sizing and duct routing revisions to eliminate unnecessary fittings</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Verifiable Cost Delta Reporting
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                Every suggestion is presented with complete financial documentation for client and architect review:
              </p>
              <div className="file-pills-wrap">
                <div className="file-pill">📊 Side-by-side alternative material comparison tables</div>
                <div className="file-pill">💡 Detailed net cost delta calculations per square foot</div>
                <div className="file-pill">🔍 Constructability clash and lead-time risk assessments</div>
                <div className="file-pill">📑 Fully compatible with AIA G702/G703 format schedules</div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', color: 'var(--navy-dark)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Explore Related Estimating:
                </h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to="/services/quantity-takeoffs" className="unit-tag" style={{ textDecoration: 'none' }}>Quantity Takeoffs →</Link>
                  <Link to="/services/rsmeans-cost-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>RSMeans Costing →</Link>
                  <Link to="/services/bid-package-preparation" className="unit-tag" style={{ textDecoration: 'none' }}>Bid Packages →</Link>
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
              Value Engineering <span className="text-red">Frequently Asked Questions</span>
            </h2>
            <p className="section-desc">
              Understand our approach to protecting architectural design intent while optimizing project budgets.
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
              <h2>Need to Align Drawings With a Strict Budget?</h2>
              <p>Upload your plans or project specifications. Our senior estimators will review your drawings and highlight viable value engineering opportunities.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Plans for Review →
              </Link>
              <Link to="/services/rsmeans-cost-estimating" className="btn btn-outline-white btn-lg">
                RSMeans Cost Modeling →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
