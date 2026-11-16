import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import AccuracyAuditMethodology from '../../components/AccuracyAuditMethodology'

export default function MasonryEstimatingPage() {
  const pageTitle = 'Masonry Estimating Services & Takeoffs | US Estimates Pro'
  const pageDesc = 'Expert masonry estimating services: CMU block counts, architectural brick, mortar volumes, grout fill & rebar ties. CSI-compliant estimates.'

  const faqList = [
    {
      q: 'What masonry scopes are itemized in Division 04?',
      a: 'We quantify Concrete Masonry Units (4", 6", 8", 10", and 12" CMU), architectural face brick, stone veneer, mortar volume (bags / cubic yards), horizontal joint reinforcing (truss and ladder wire), bond beams, grout fill concrete volume, precast lintels, wall ties, and seismic cavity flashing.',
    },
    {
      q: 'How do you calculate CMU block counts and grout volumes?',
      a: 'We calculate net wall surface area (SF) deducting window and door rough openings, apply modular unit formulas (1.125 blocks per SF for standard 8x8x16 CMU), and calculate core grout fill volume in cubic yards (CY) based on solid-grouting vs specified cell spacing (e.g., 24", 32", 48" O.C.).',
    },
    {
      q: 'Do you include mortar waste and pump allowances?',
      a: 'Yes. We apply standardized trade wastage: 10%–12% for mortar joint loss and CMU end cuts, and 5%–8% for grout pumping and core overfill.',
    },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Masonry Estimating Services & Takeoffs',
    'serviceType': 'CSI Division 04 Masonry Estimating',
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
        canonicalPath="/trades/masonry-estimating"
      />

      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/trades">Trades</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Masonry Estimating</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">CSI Division 04</span>
            <h1 className="subpage-hero-title">
              CSI Division 04 Masonry Estimating Services
            </h1>
            <p className="subpage-hero-desc">
              Accurate unit count and material volume takeoffs for masonry subcontractors. CMU block counts, modular architectural brick, core grout fill volumes, bond beams, and reinforcing calculations.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Masonry Plans →
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
            <span className="section-tag">Division 04 Scope</span>
            <h2 className="section-title">
              CMU, Brick &amp; <span className="text-red">Stone Veneer Scopes</span>
            </h2>
            <p className="section-desc">
              Every elevation and section sheet is digitized to calculate unit counts, mortar cubic yards, and reinforcing steel.
            </p>
          </div>

          <div className="service-detail-split" style={{ marginTop: '30px' }}>
            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Unit Counts &amp; Structural Assemblies
              </h3>
              <ul className="service-bullet-list">
                <li>Concrete Masonry Units: 4", 6", 8", 10", 12" regular, lightweight, and split-face</li>
                <li>Architectural modular brick counts (SF of wall surface area and unit count)</li>
                <li>Grout fill concrete volume in Cubic Yards (CY) with pump loss allowances</li>
                <li>Horizontal joint reinforcing (ladder &amp; truss wire) and bond beam blocks</li>
                <li>Precast concrete lintels, sill stones, and steel shelf angles</li>
                <li>Manufactured stone veneer, natural limestone panels, and anchor ties</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Mortar &amp; Moisture Control
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                Mortar volumes and cavity wall weatherization accessories are quantified in detail:
              </p>
              <div className="file-pills-wrap">
                <div className="file-pill">🧱 Type M, S, and N mortar batch volume calculations</div>
                <div className="file-pill">💧 Cavity drainage mats, weep vents &amp; copper through-wall flashing</div>
                <div className="file-pill">📊 Unlocked Microsoft Excel workbook with formulas</div>
                <div className="file-pill">📑 Color-coded Bluebeam wall elevation markups</div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', color: 'var(--navy-dark)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Related Trade Scopes:
                </h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to="/trades/concrete-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Concrete Estimating →</Link>
                  <Link to="/trades/drywall-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Drywall &amp; Finishes →</Link>
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
              Masonry Estimating <span className="text-red">Frequently Asked Questions</span>
            </h2>
            <p className="section-desc">
              How our certified human estimators deliver accurate masonry takeoffs for bidding.
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
              <h2>Need a Masonry Takeoff on a Tight Turnaround?</h2>
              <p>Upload your architectural elevations and structural wall details. We will examine your drawings and deliver an exact proposal in 1–2 hours.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Masonry Plans →
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
