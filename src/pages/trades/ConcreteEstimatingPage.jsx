import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import AccuracyAuditMethodology from '../../components/AccuracyAuditMethodology'

export default function ConcreteEstimatingPage() {
  const pageTitle = 'Concrete Takeoff & Estimating Services | US Estimates Pro'
  const pageDesc = 'Accurate concrete takeoff services: footings, slabs, rebar tonnage, and formwork SFCA. Certified estimators, 24–48 hour turnaround nationwide.'

  const faqList = [
    {
      q: 'What CSI Division 03 concrete items do your estimators quantify?',
      a: 'We quantify continuous footings, isolated spread footings, grade beams, slab-on-grade (SOG), elevated slab-on-metal-deck (SOMD), formwork contact area (SFCA), deformed reinforcing steel (rebar #3 to #11), welded wire fabric (WWF), vapor retarders, expansion joints, and concrete pumping allowances.',
    },
    {
      q: 'How do you calculate rebar weights and lap splices?',
      a: 'We calculate linear feet of rebar per bar size callout, convert to standard ASTM pounds and US tons, and add standardized structural lap splice factors (typically 30x–40x bar diameter or 5%–8% waste allowance depending on structural notes).',
    },
    {
      q: 'Do you separate formwork surface contact area (SFCA)?',
      a: 'Yes. Formwork is itemized separately in Square Feet of Contact Area (SFCA) for foundations, columns, retaining walls, and slab edges, including stripping and multiple-pour reuse allowances.',
    },
    {
      q: 'How fast can I get a concrete takeoff completed?',
      a: 'Standard turnarounds are 24 to 48 hours for residential foundations and commercial podiums. 24-hour rush turnaround is available for urgent bid deadlines.',
    },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Concrete Takeoff & Estimating Services',
    'serviceType': 'CSI Division 03 Concrete Takeoffs',
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
        canonicalPath="/trades/concrete-estimating"
      />

      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/trades">Trades</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Concrete Estimating</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">CSI Division 03</span>
            <h1 className="subpage-hero-title">
              Commercial Concrete Takeoff &amp; Estimating Services
            </h1>
            <p className="subpage-hero-desc">
              Accurate, verified quantity takeoffs for commercial and residential concrete contractors. From foundation footings and grade beams to post-tensioned elevated decks, rebar tonnage, and formwork SFCA.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Structural Plans →
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
            <span className="section-tag">Division 03 Scope</span>
            <h2 className="section-title">
              What We Quantify for <span className="text-red">Concrete Contractors</span>
            </h2>
            <p className="section-desc">
              Detailed unit counts and volume calculations with zero hidden guesswork. Every measurement is tied directly to marked structural foundation drawings.
            </p>
          </div>

          <div className="service-detail-split" style={{ marginTop: '30px' }}>
            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Foundations &amp; Superstructure Takeoffs
              </h3>
              <ul className="service-bullet-list">
                <li>Continuous, strip, and spread footings (CY volume &amp; trench formwork)</li>
                <li>Drilled concrete piers, caissons, and grade beams</li>
                <li>Slab-on-Grade (SOG) with thickened edges, vapor retarders, and screeding</li>
                <li>Elevated Slab-on-Metal-Deck (SOMD) with concrete pumping allowances</li>
                <li>Cast-in-place retaining walls, elevator core shear walls, and pits</li>
                <li>Concrete finishing types (broom finish, troweled, polished, hardener sealers)</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Rebar &amp; Formwork Standards
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                Reinforcement and form contact area make up the bulk of subcontract concrete labor:
              </p>
              <div className="file-pills-wrap">
                <div className="file-pill">📐 Formwork Surface Contact Area (SFCA) itemized separately</div>
                <div className="file-pill">⚙️ Rebar schedules by bar size (#3–#11) converted to LBS &amp; TONS</div>
                <div className="file-pill">🧱 Welded Wire Fabric (WWF mesh) rolls &amp; overlap allowances</div>
                <div className="file-pill">📊 Unlocked Microsoft Excel workbook with formula cells</div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', color: 'var(--navy-dark)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Related Trade Scopes:
                </h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to="/trades/masonry-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Masonry Estimating →</Link>
                  <Link to="/trades/structural-steel-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Structural Steel →</Link>
                  <Link to="/trades/sitework-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Sitework &amp; Excavation →</Link>
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
              Concrete Estimating <span className="text-red">Frequently Asked Questions</span>
            </h2>
            <p className="section-desc">
              How our certified human estimators deliver accurate concrete takeoffs for bidding.
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
              <h2>Need a Concrete Takeoff for an Upcoming Bid?</h2>
              <p>Upload your structural and foundation sheets. We'll examine your drawings and deliver an exact proposal in 1–2 hours.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Concrete Plans →
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
