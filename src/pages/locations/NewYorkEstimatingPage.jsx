import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import AccuracyAuditMethodology from '../../components/AccuracyAuditMethodology'

export default function NewYorkEstimatingPage() {
  const pageTitle = 'Construction Estimator New York | US Estimates Pro'
  const pageDesc = 'NYC construction estimating services for general contractors & developers. Real NYC DOB code knowledge, prevailing wage rates & local union cost models.'

  const faqList = [
    {
      q: 'Why are construction estimating costs in New York City significantly higher than national baselines?',
      a: 'NYC construction costs are typically 30% to 45% above national averages according to RSMeans City Cost Indexes (CCI). This premium is driven by NYC Comptroller Article 8 prevailing wages, union fringe benefits, strict Department of Buildings (DOB) inspection mandates, complex site logistics (crane permits, sidewalk bridge permits, debris carting fees), and tight urban staging constraints.',
    },
    {
      q: 'How do you handle New York City Prevailing Wage vs Open-Shop bids?',
      a: 'We calibrate labor burden models based on whether your project is private commercial, public school (SCA), NYCHA housing, MTA transit, or Port Authority. We reference current NYC Comptroller wage schedules for all 32 trade classifications, incorporating specific union benefit funds, supplemental benefits, and overtime rules.',
    },
    {
      q: 'Do you estimate projects across all five NYC boroughs and the tri-state area?',
      a: 'Yes. We actively estimate commercial and residential projects across Manhattan, Brooklyn, Queens, The Bronx, and Staten Island, as well as Long Island (Nassau/Suffolk), Westchester County, and Northern New Jersey.',
    },
    {
      q: 'How does Local Law 97 impact commercial estimating in New York?',
      a: 'NYC Local Law 97 mandates strict greenhouse gas emissions caps on buildings over 25,000 SF. We help GCs and owners estimate high-efficiency thermal envelope assemblies, continuous exterior insulation, triple-pane window systems, and electrified heat-pump HVAC conversions required to avoid municipal carbon fines.',
    },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'US Estimates Pro - New York Construction Estimating',
    'description': pageDesc,
    'url': 'https://www.usestimatespro.com/locations/new-york',
    'telephone': '+1-800-555-0199',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '244 5th Avenue, Suite B-102',
      'addressLocality': 'New York',
      'addressRegion': 'NY',
      'postalCode': '10001',
      'addressCountry': 'US',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 40.7441,
      'longitude': -73.9877,
    },
    'areaServed': [
      { '@type': 'City', 'name': 'New York' },
      { '@type': 'AdministrativeArea', 'name': 'Manhattan' },
      { '@type': 'AdministrativeArea', 'name': 'Brooklyn' },
      { '@type': 'AdministrativeArea', 'name': 'Queens' },
      { '@type': 'AdministrativeArea', 'name': 'Bronx' },
      { '@type': 'AdministrativeArea', 'name': 'Staten Island' },
    ],
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
        canonicalPath="/locations/new-york"
      />

      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Locations</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">New York Construction Estimating</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Headquartered in New York City</span>
            <h1 className="subpage-hero-title">
              Construction Estimating Services in New York &amp; NYC
            </h1>
            <p className="subpage-hero-desc">
              Precision quantity takeoffs and hyper-localized RSMeans cost modeling built for the complexities of New York City construction. Real DOB code expertise, Comptroller prevailing wage rates, and 5-borough logistical models.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit NYC Plans for Quote →
              </Link>
              <Link to="/services/rsmeans-cost-estimating" className="btn btn-outline-white btn-lg">
                RSMeans Cost Modeling
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Knowledge Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Local Construction Dynamics</span>
            <h2 className="section-title">
              Why Generic Estimating Fails in the <span className="text-red">New York Market</span>
            </h2>
            <p className="section-desc">
              National estimating firms regularly underbid New York projects because they fail to account for NYC Department of Buildings (DOB) compliance, localized union labor rules, and urban site staging fees.
            </p>
          </div>

          <div className="service-detail-split" style={{ marginTop: '30px' }}>
            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                NYC Wage Burdens &amp; Union Rules
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                Labor is the largest financial risk on any New York project. We build defensible labor models:
              </p>
              <ul className="service-bullet-list">
                <li>NYC Comptroller Article 8 Prevailing Wage schedules (Electricians Local 3, Plumbers Local 1, Carpenters, Steamfitters Local 638)</li>
                <li>Supplemental benefit funds, union welfare assessments, and apprentice ratio requirements</li>
                <li>Shift differential premiums (second/third shift rates for occupied commercial fit-outs)</li>
                <li>Open-shop prevailing rate compliance for public housing and municipal subcontracts</li>
                <li>Site safety manager (SSM) and construction superintendent staffing allocations per NYC Building Code</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Urban Logistics &amp; Regulatory Fees
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                Manhattan and outer-borough site conditions demand line-item logistical allowances:
              </p>
              <div className="file-pills-wrap">
                <div className="file-pill">🏗️ NYC DOT street occupancy, crane permits &amp; lane closure fees</div>
                <div className="file-pill">🪵 Sidewalk shed (bridge) &amp; construction fence rental allowances</div>
                <div className="file-pill">🚛 Debris carting, tipping fees &amp; LEED recycling container logistics</div>
                <div className="file-pill">🌱 Local Law 97 envelope &amp; high-efficiency equipment specifications</div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', color: 'var(--navy-dark)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Explore Trade Specializations:
                </h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to="/trades/concrete-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Concrete Estimating →</Link>
                  <Link to="/trades/mep-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>MEP Estimating →</Link>
                  <Link to="/trades/drywall-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Drywall &amp; Finishes →</Link>
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
              New York Estimating <span className="text-red">Frequently Asked Questions</span>
            </h2>
            <p className="section-desc">
              Key considerations for bidding commercial and residential projects in New York City.
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
              <h2>Bidding a New York City Project?</h2>
              <p>Send us your drawings or plan room link. Our senior estimators will review your plan set and deliver a localized proposal in 1–2 hours.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit NYC Plans →
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
