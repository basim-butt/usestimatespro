import React from 'react'
import { Link } from 'react-router-dom'

export default function TermsPage() {
  return (
    <div className="subpage-wrapper">
      <section className="subpage-hero">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Terms &amp; Bid Standards</span>
          </nav>
          <div className="subpage-hero-content">
            <span className="subpage-badge">Professional Standards</span>
            <h1 className="subpage-hero-title">Terms of Service &amp; Estimating Standards</h1>
            <p className="subpage-hero-subtitle">
              Professional guidelines, CSI MasterFormat classification rules, RSMeans cost calibration principles, and deliverables specifications governing all estimating engagements.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="terms-card" style={{
            background: 'var(--white)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            padding: '42px 46px',
            boxShadow: 'var(--shadow-sm)',
            lineHeight: '1.75'
          }}>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              <strong>Effective Date:</strong> January 1, 2026 &nbsp;|&nbsp; <strong>Governing Jurisdiction:</strong> State of New York, USA
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--navy-darkest)', marginTop: '28px', marginBottom: '12px' }}>
              1. Engagement &amp; Scope of Estimating Services
            </h2>
            <p style={{ color: 'var(--text-body)', marginBottom: '18px' }}>
              <strong>US Estimates Pro</strong> provides professional construction quantity takeoffs, cost models, and bid preparation consulting. Our services are based upon architectural and engineering drawings, project specifications, geotechnical reports, and addenda furnished directly by the client. Quotes provided prior to project kickoff detail the agreed CSI scope, delivery timeline, and customized project fee.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--navy-darkest)', marginTop: '28px', marginBottom: '12px' }}>
              2. CSI MasterFormat® Standards Compliance
            </h2>
            <p style={{ color: 'var(--text-body)', marginBottom: '14px' }}>
              All quantity takeoffs and material measurement schedules are classified strictly according to the latest <strong>CSI MasterFormat (50-Division)</strong> specifications, including:
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--text-body)', marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Division 03:</strong> Concrete (volume in cubic yards, rebar in tons, formwork contact area in SF).</li>
              <li><strong>Division 04:</strong> Masonry (CMU block counts, brick veneer SF, mortar and grout volume).</li>
              <li><strong>Division 05:</strong> Structural Metals (steel tonnage, connection plates, decking SF).</li>
              <li><strong>Divisions 21–28:</strong> MEP trades (linear foot counts by pipe/conduit diameter, fixture and equipment counts).</li>
              <li><strong>Divisions 31–33:</strong> Earthwork and Utilities (cut/fill net calculations, trenching volume, compaction CY).</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--navy-darkest)', marginTop: '28px', marginBottom: '12px' }}>
              3. RSMeans® &amp; Regional Cost Calibration
            </h2>
            <p style={{ color: 'var(--text-body)', marginBottom: '18px' }}>
              Cost models incorporate current quarterly <strong>Gordian / RSMeans®</strong> localized cost indices aligned with the project's zip code, municipal tax rates, local labor rates (union prevailing wage or open-shop), and current freight surcharges. Material unit prices reflect real-time market distributor benchmarks.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--navy-darkest)', marginTop: '28px', marginBottom: '12px' }}>
              4. Deliverables &amp; Post-Delivery Addenda Support
            </h2>
            <p style={{ color: 'var(--text-body)', marginBottom: '18px' }}>
              Every delivered estimate package includes:
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--text-body)', marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>An editable Microsoft Excel workbook (.xlsx) with standard formulas, breakdown sheets, and summary tab.</li>
              <li>Color-coded Bluebeam Revu marked PDF drawing sheets showing exact takeoff paths and counts.</li>
              <li>Scope summary memo detailing itemized inclusions, exclusions, and takeoff assumptions.</li>
            </ul>
            <p style={{ color: 'var(--text-body)', marginBottom: '18px' }}>
              We provide prompt revision support for architectural addenda, architect RFIs, and scope updates issued prior to bid closing.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--navy-darkest)', marginTop: '28px', marginBottom: '12px' }}>
              5. Professional Disclaimers &amp; Bid Responsibility
            </h2>
            <p style={{ color: 'var(--text-body)', marginBottom: '18px' }}>
              While US Estimates Pro maintains a rigorous multi-tier senior QA review ensuring 98%+ measurement precision, our estimates serve as expert pre-construction advisory work. The submitting contractor retains final responsibility for applying contractor markups, profit margins, contingency allowances, and executing final bid submission to project owners.
            </p>

            <div style={{
              background: 'var(--bg-light)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)',
              padding: '20px 24px',
              marginTop: '28px'
            }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--navy-darkest)', marginBottom: '8px' }}>
                Questions Concerning Bid Standards?
              </h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.94rem', margin: 0 }}>
                Speak directly with our senior estimating desk at{' '}
                <a href="mailto:info@usestimatespro.com" style={{ color: 'var(--red)', fontWeight: '700' }}>
                  info@usestimatespro.com
                </a>{' '}
                or call us at 244 5th Avenue, Suite B-102, New York, NY 10001.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
