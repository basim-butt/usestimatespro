import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import AccuracyAuditMethodology from '../../components/AccuracyAuditMethodology'

export default function BidPackagePrepPage() {
  const pageTitle = 'Bid Package Preparation Services | US Estimates Pro'
  const pageDesc = 'Turnkey bid package preparation services for general contractors & subs. AIA G702/G703 aligned summaries, clarifications & CSI cost models in 48 hrs.'

  const faqList = [
    {
      q: 'What is included in a turnkey construction bid package?',
      a: 'Our bid packages include an Executive Project Cost Summary, a CSI MasterFormat Division-by-Division cost schedule, explicit Inclusions & Exclusions clauses to prevent scope creep, Subcontractor scope-of-work sheets, and AIA Document G702/G703 compatible billing formats.',
    },
    {
      q: 'How do your bid packages prevent change orders and disputes?',
      a: 'We author comprehensive scope clarification notes that specifically detail what is in the bid price and what is excluded (e.g., permits, utility tap fees, unforeseen rock excavation). This eliminates ambiguity when owners or GCs review your tender.',
    },
    {
      q: 'Can you format bid packages for municipal or public agency RFPs?',
      a: 'Yes. We frequently prepare bid packages meeting federal, state, and city agency standards, including certified payroll breakdowns, MWBE/DBE subcontractor utilization tracking, and bond cost calculations.',
    },
    {
      q: 'What happens if the architect issues addenda before bid day?',
      a: 'If project addenda, bulletins, or RFI responses are released during bidding, our estimators update your takeoff quantities and price schedules immediately so your submission reflects the latest plan revisions.',
    },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Bid Package Preparation Services',
    'serviceType': 'Construction Bid Preparation',
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
        canonicalPath="/services/bid-package-preparation"
      />

      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/services">Services</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Bid Package Preparation</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Win More Contracts</span>
            <h1 className="subpage-hero-title">
              Construction Bid Package Preparation Services
            </h1>
            <p className="subpage-hero-desc">
              Win more commercial and residential bids with professionally formatted proposal packages. Eliminate scope gaps, protect profit margins, and submit clean, defensible tenders that instill total confidence in project owners and General Contractors.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Request a Bid Package Proposal →
              </Link>
              <Link to="/services/value-engineering" className="btn btn-outline-white btn-lg">
                Value Engineering Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Package Components */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Turnkey Submittals</span>
            <h2 className="section-title">
              Key Components of Our <span className="text-red">Contractor Bid Packages</span>
            </h2>
            <p className="section-desc">
              Engineered to satisfy rigorous architect and owner RFP guidelines while locking in your subcontract profits.
            </p>
          </div>

          <div className="service-detail-split" style={{ marginTop: '30px' }}>
            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Complete Tender Documentation
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                Every proposal package includes the complete documentation required by commercial owners and public agencies:
              </p>
              <ul className="service-bullet-list">
                <li>Executive Summary with clear project milestones and phase expenditures</li>
                <li>Division-by-division CSI MasterFormat cost breakdown</li>
                <li>Comprehensive scope inclusions, exclusions, and assumption notes</li>
                <li>Subcontractor quotation scope alignment matrices</li>
                <li>AIA Document G702/G703 ready Schedule of Values</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Scope Risk Mitigation
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                Bid errors happen when scopes fall through the cracks between trades. We cross-audit civil, structural, architectural, and MEP plans to guarantee 100% scope coverage.
              </p>
              <div className="file-pills-wrap">
                <div className="file-pill">📑 Unlocked Executive Excel workbook with formula references</div>
                <div className="file-pill">🛡️ Clear legal exclusion clauses preventing change order disputes</div>
                <div className="file-pill">⏱️ Rapid 48-hour turnarounds for bid submittal deadlines</div>
                <div className="file-pill">🔄 Addenda &amp; bulletin updates incorporated seamlessly</div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', color: 'var(--navy-dark)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Related Services:
                </h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to="/services/quantity-takeoffs" className="unit-tag" style={{ textDecoration: 'none' }}>Quantity Takeoffs →</Link>
                  <Link to="/services/rsmeans-cost-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>RSMeans Estimating →</Link>
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
              Bid Package <span className="text-red">Frequently Asked Questions</span>
            </h2>
            <p className="section-desc">
              How our turnkey bid preparation helps general contractors and subcontractors win high-margin projects.
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
              <h2>Have an Upcoming Bid Cutoff Date?</h2>
              <p>Upload your plans or invitation to bid (ITB). Our senior estimating team will review your specifications and reply with an intake proposal in 1–2 hours.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Bid Plans →
              </Link>
              <Link to="/services/quantity-takeoffs" className="btn btn-outline-white btn-lg">
                Quantity Takeoffs →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
