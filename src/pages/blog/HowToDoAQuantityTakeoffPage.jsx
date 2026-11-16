import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

export default function HowToDoAQuantityTakeoffPage() {
  const pageTitle = 'How to Do a Construction Quantity Takeoff | US Estimates Pro'
  const pageDesc = 'Step-by-step contractor guide on how to perform an accurate quantity takeoff: drawing calibration, count itemization, wastage factors, and spreadsheets.'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Do a Construction Quantity Takeoff (Step-by-Step Guide)',
    'description': pageDesc,
    'author': {
      '@type': 'Organization',
      'name': 'US Estimates Pro',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'US Estimates Pro',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.usestimatespro.com/og-image.svg',
      },
    },
    'datePublished': '2026-11-16',
  }

  return (
    <div className="subpage-wrapper">
      <SEO
        title={pageTitle}
        description={pageDesc}
        schema={articleSchema}
        canonicalPath="/blog/how-to-do-a-quantity-takeoff"
      />

      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/blog">Blog</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">How to Do a Quantity Takeoff</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Estimating Fundamentals</span>
            <h1 className="subpage-hero-title">
              How to Do a Construction Quantity Takeoff: Step-by-Step Guide
            </h1>
            <p className="subpage-hero-desc">
              Whether you are estimating concrete foundations, commercial drywall, or structural framing, an accurate material takeoff forms the bedrock of every profitable construction bid.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="blog-post-card" style={{ background: 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', lineHeight: '1.75', color: 'var(--text-body)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.45rem', marginBottom: '14px' }}>
              Step 1: Thoroughly Review the Specification Notes &amp; Addenda
            </h2>
            <p style={{ marginBottom: '22px' }}>
              Before measuring a single line, read the architectural general notes, structural general notes, and CSI division specifications. Check the plan index against the actual sheets provided to ensure no addenda bulletins or revision clouds are missed.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.45rem', marginBottom: '14px' }}>
              Step 2: Calibrate Your Digital Drawing Scale
            </h2>
            <p style={{ marginBottom: '22px' }}>
              One of the most frequent errors in modern estimating is assuming that a PDF drawing scale (e.g., 1/4" = 1'-0") remains 100% accurate after vector PDF export or scanning. Always use the calibration tool in Bluebeam Revu or PlanSwift to measure a known dimension callout—such as a 30-foot gridline dimension—on both horizontal and vertical axes.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.45rem', marginBottom: '14px' }}>
              Step 3: Organize Scopes by CSI MasterFormat Divisions
            </h2>
            <p style={{ marginBottom: '22px' }}>
              Follow standard Construction Specifications Institute (CSI) division structures. This ensures your line items seamlessly map to contractor accounting software and subcontractor trade scopes:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '22px' }}>
              <li><strong>Division 03:</strong> Concrete footings, slabs, and rebar tonnage</li>
              <li><strong>Division 04:</strong> CMU blocks, face brick, and grout cubic yards</li>
              <li><strong>Division 05:</strong> Structural steel beams, joists, and metal decking</li>
              <li><strong>Division 09:</strong> Metal stud framing, gypsum board, and acoustical ceilings</li>
              <li><strong>Divisions 21–28:</strong> Mechanical ductwork, plumbing piping, and electrical conduit</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.45rem', marginBottom: '14px' }}>
              Step 4: Digitize Measurements (Counts, Linear Feet, Area &amp; Volume)
            </h2>
            <p style={{ marginBottom: '22px' }}>
              Group your takeoffs into four distinct measurement classes:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '22px' }}>
              <li><strong>Each (EA):</strong> Doors, light fixtures, plumbing fixtures, RTU equipment</li>
              <li><strong>Linear Feet (LF):</strong> Stud partition walls, pipe runs, conduit, flashing, baseboards</li>
              <li><strong>Square Footage (SF / SQ):</strong> Flooring, roofing squares (100 SF), ceiling tile, drywall</li>
              <li><strong>Cubic Yards (CY):</strong> Excavation cut/fill, concrete volume, stone backfill</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.45rem', marginBottom: '14px' }}>
              Step 5: Apply Calibrated Trade Wastage Factors
            </h2>
            <p style={{ marginBottom: '22px' }}>
              Net takeoff dimensions never equal the raw materials purchased. Experienced estimators always incorporate trade-standard waste allowances:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '22px' }}>
              <li><strong>Rebar:</strong> 5% to 8% for splice laps, corner bends, and offcut waste</li>
              <li><strong>Drywall &amp; Sheathing:</strong> 7% to 10% for layout cuts, window penetrations, and edge trimming</li>
              <li><strong>Ceramic Tile &amp; Flooring:</strong> 10% to 15% for diagonal patterns and perimeter cuts</li>
              <li><strong>Ready-Mix Concrete:</strong> 5% for spillage, trench irregularities, and pump line cleanout</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.45rem', marginBottom: '14px' }}>
              Step 6: Perform a Independent Senior Peer Audit
            </h2>
            <p style={{ marginBottom: '28px' }}>
              Before finalizing the bid, have a second estimator cross-check total square footages against building footprint gross areas. If your total interior partition drywall area doesn't align proportionally with building gross floor area, you may have double-counted or omitted an entire floor.
            </p>

            <div style={{ background: 'var(--bg-light)', padding: '24px 22px', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--red)', marginTop: '30px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy-darkest)', fontSize: '1.15rem', marginBottom: '8px' }}>
                Need Fast, Professional Takeoffs?
              </h3>
              <p style={{ marginBottom: '14px', fontSize: '0.94rem' }}>
                Save time and eliminate takeoff risk. US Estimates Pro delivers certified Bluebeam markups and unlocked Excel sheets in 24 to 48 hours.
              </p>
              <Link to="/contact" className="btn btn-red btn-sm" style={{ textDecoration: 'none' }}>
                Submit Drawings for a Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
