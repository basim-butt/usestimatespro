import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import AccuracyAuditMethodology from '../../components/AccuracyAuditMethodology'

export default function DrywallEstimatingPage() {
  const pageTitle = 'Drywall Estimating Services & Takeoffs | US Estimates Pro'
  const pageDesc = 'Precision drywall estimating services: metal stud framing, gypsum board, ACT acoustical ceilings & Level 3–5 finishing labor. 24–48 hr delivery.'

  const faqList = [
    {
      q: 'What interior finishes are quantified in Division 09?',
      a: 'We quantify cold-formed metal stud framing (track, studs, furring channel), gypsum drywall (1/2", 5/8" Type X, mold-resistant, cementitious backer board), taping & mudding labor allowances (Level 3, Level 4, Level 5), acoustical ceiling tile (ACT 2x2 and 2x4 grids), batt insulation, resilient flooring, and interior painting.',
    },
    {
      q: 'How do you calculate metal stud framing and track counts?',
      a: 'We measure partition linear feet multiplied by partition height types, calculating stud spacing (12", 16", 24" O.C.), top/bottom track, deflection track at deck joints, door/window rough opening king/jack studs, and box headers.',
    },
    {
      q: 'Do you separate drywall finish levels for pricing labor?',
      a: 'Yes. Drywall square footage is categorized by specified finish levels: Level 1 (fire-taped plenum), Level 3 (heavy texture/tile prep), Level 4 (standard commercial paint prep), and Level 5 (skim coat for critical lighting areas).',
    },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Drywall Estimating Services & Takeoffs',
    'serviceType': 'CSI Division 09 Drywall & Finishes Estimating',
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
        canonicalPath="/trades/drywall-estimating"
      />

      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/trades">Trades</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Drywall Estimating</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">CSI Division 09</span>
            <h1 className="subpage-hero-title">
              Commercial Drywall Estimating &amp; Metal Stud Takeoffs
            </h1>
            <p className="subpage-hero-desc">
              Accurate, granular partition takeoffs for drywall and framing subcontractors. Cold-formed light-gauge metal framing, gypsum board sheet counts, acoustical ceiling grids, and Level 3–5 finishing labor.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Drywall Plans →
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
            <span className="section-tag">Division 09 Scope</span>
            <h2 className="section-title">
              Drywall Framing, Sheathing &amp; <span className="text-red">Ceiling Scopes</span>
            </h2>
            <p className="section-desc">
              Calculated directly from reflected ceiling plans, architectural partition types, and door/window schedules.
            </p>
          </div>

          <div className="service-detail-split" style={{ marginTop: '30px' }}>
            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Framing &amp; Board Assemblies
              </h3>
              <ul className="service-bullet-list">
                <li>Light-gauge metal studs (2-1/2", 3-5/8", 6" in 20, 18, 16 gauge)</li>
                <li>Top track, bottom runner track, deflection track, and slip clips</li>
                <li>Standard 5/8" Type X fire-rated drywall, 1/2" regular, and green board</li>
                <li>DensGlass exterior sheathing, cementitious backer board, and soundboard</li>
                <li>Thermal &amp; acoustic fiberglass batt insulation (R-11, R-13, R-19, R-30)</li>
                <li>Corner bead, J-bead, expansion joints, and acoustic caulking in LF</li>
              </ul>
            </div>

            <div style={{ background: 'var(--white)', padding: '32px 28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.3rem', marginBottom: '14px' }}>
                Ceilings &amp; Surface Finishes
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '18px' }}>
                Acoustical suspended grids and labor finish levels quantified for accurate bidding:
              </p>
              <div className="file-pills-wrap">
                <div className="file-pill">📐 Acoustical ceiling tile (ACT 2x2, 2x4) and suspension tees</div>
                <div className="file-pill">🎨 Level 3, 4, and 5 drywall finishing labor hours</div>
                <div className="file-pill">📊 Unlocked Microsoft Excel workbook with formula references</div>
                <div className="file-pill">📑 Color-coded Bluebeam partition markup layers</div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', color: 'var(--navy-dark)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Related Trade Scopes:
                </h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Link to="/trades/masonry-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Masonry Estimating →</Link>
                  <Link to="/trades/roofing-estimating" className="unit-tag" style={{ textDecoration: 'none' }}>Roofing Estimating →</Link>
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
              Drywall Estimating <span className="text-red">Frequently Asked Questions</span>
            </h2>
            <p className="section-desc">
              How our certified human estimators deliver accurate drywall takeoffs for bidding.
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
              <h2>Need a Drywall &amp; Framing Takeoff for Bid Day?</h2>
              <p>Upload your architectural partition plans and reflected ceiling plans. We will deliver an exact proposal in 1–2 hours.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Drywall Plans →
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
