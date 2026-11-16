import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

export default function WhatIsIncludedInABidPackagePage() {
  const pageTitle = 'What Is in a Construction Bid Package? | US Estimates Pro'
  const pageDesc = 'Essential checklist of everything included in a professional contractor bid package: CSI division sheets, scope inclusions, exclusions, and tender forms.'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What Is Included in a Commercial Construction Bid Package?',
    'description': pageDesc,
    'author': {
      '@type': 'Organization',
      'name': 'US Estimates Pro',
    },
    'datePublished': '2026-11-16',
  }

  return (
    <div className="subpage-wrapper">
      <SEO
        title={pageTitle}
        description={pageDesc}
        schema={articleSchema}
        canonicalPath="/blog/what-is-included-in-a-construction-bid-package"
      />

      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/blog">Blog</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">What Is in a Bid Package?</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Bid Management Checklist</span>
            <h1 className="subpage-hero-title">
              What Is Included in a Commercial Construction Bid Package?
            </h1>
            <p className="subpage-hero-desc">
              Submitting a winning commercial bid requires far more than a single lump-sum number. A professional bid package establishes credibility and protects you against scope disputes.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="blog-post-card" style={{ background: 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', lineHeight: '1.75', color: 'var(--text-body)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.45rem', marginBottom: '14px' }}>
              1. Executive Project Summary Sheet
            </h2>
            <p style={{ marginBottom: '22px' }}>
              Project executives and owners don't have time to wade through 40 pages of takeoffs on bid day. The executive summary provides an immediate high-level overview: total base contract amount, duration in calendar days, mobilization schedule, and breakdown of major trade packages.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.45rem', marginBottom: '14px' }}>
              2. CSI MasterFormat Division-by-Division Cost Breakdown
            </h2>
            <p style={{ marginBottom: '22px' }}>
              Itemized by standard Construction Specifications Institute (CSI) codes. For example, separating Division 03 (Concrete), Division 05 (Structural Steel), and Division 09 (Finishes). This allows General Contractors and architects to compare your numbers line-by-line against competing bids without assuming hidden contingencies.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.45rem', marginBottom: '14px' }}>
              3. Explicit Scope Inclusions &amp; Clarifications
            </h2>
            <p style={{ marginBottom: '22px' }}>
              Specify exactly what your pricing covers down to the detail. For example: "Includes 4,000 PSI concrete mix design, continuous vapor barrier, wire mesh reinforcement, and pump truck fees for 4 foundation pours." Ambiguity in inclusions leads to finger-pointing once work begins.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.45rem', marginBottom: '14px' }}>
              4. Critical Exclusions List (Your Financial Armor)
            </h2>
            <p style={{ marginBottom: '22px' }}>
              Exclusion clauses protect you from unexpected site costs and unreasonable change order disputes. Common standard exclusions include:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '22px' }}>
              <li>Permit, plan review, and municipal utility connection fees</li>
              <li>Unforeseen subsurface rock excavation or contaminated soil remediation</li>
              <li>Winter weather protection, heated enclosures, or ground thawing</li>
              <li>Weekend or night-shift overtime labor unless explicitly accepted as an alternate</li>
              <li>Final architectural cleaning and punch-list work outside specified trade scope</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.45rem', marginBottom: '14px' }}>
              5. Addenda &amp; RFI Acknowledgement Record
            </h2>
            <p style={{ marginBottom: '28px' }}>
              Always list every architect addendum, bulletin, and formal RFI response reviewed during bid preparation. If the architect issues Addendum #3 adding shear walls, but your proposal does not state whether Addendum #3 is included, the owner may attempt to legally enforce the added scope under your base bid price.
            </p>

            <div style={{ background: 'var(--bg-light)', padding: '24px 22px', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--red)', marginTop: '30px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.15rem', marginBottom: '8px' }}>
                Need Turnkey Bid Package Preparation?
              </h3>
              <p style={{ marginBottom: '14px', fontSize: '0.94rem' }}>
                US Estimates Pro formats complete, professional tender proposals aligned with AIA Document standards. Upload your drawings today.
              </p>
              <Link to="/services/bid-package-preparation" className="btn btn-red btn-sm" style={{ textDecoration: 'none' }}>
                Explore Bid Package Services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
