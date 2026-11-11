import React from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicyPage() {
  return (
    <div className="subpage-wrapper">
      <section className="subpage-hero">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Privacy Policy</span>
          </nav>
          <div className="subpage-hero-content">
            <span className="subpage-badge">Legal & Security</span>
            <h1 className="subpage-hero-title">Privacy Policy & Client Data Protection</h1>
            <p className="subpage-hero-subtitle">
              How US Estimates Pro handles architectural drawings, project specifications, and proprietary contractor data with bank-grade confidentiality and strict non-disclosure.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="policy-card" style={{
            background: 'var(--white)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            padding: '42px 46px',
            boxShadow: 'var(--shadow-sm)',
            lineHeight: '1.75'
          }}>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              <strong>Effective Date:</strong> January 1, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> November 2026
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--navy-darkest)', marginTop: '28px', marginBottom: '12px' }}>
              1. Commitment to Contractor Confidentiality
            </h2>
            <p style={{ color: 'var(--text-body)', marginBottom: '18px' }}>
              At <strong>US Estimates Pro</strong> ("we", "us", or "our"), safeguarding your competitive bidding information is central to our business. We understand that plan sets, trade subcontractor quotes, bid packages, and owner documents represent sensitive intellectual property. All submitted plans, specifications, addenda, and project correspondence are handled under strict confidentiality protocols.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--navy-darkest)', marginTop: '28px', marginBottom: '12px' }}>
              2. Information We Collect
            </h2>
            <p style={{ color: 'var(--text-body)', marginBottom: '14px' }}>
              When you submit a quote request, communicate via email, or upload architectural files, we collect:
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--text-body)', marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Contact Information:</strong> Full name, company / contractor business name, work email address, and phone number.</li>
              <li><strong>Project Documentation:</strong> PDF plan sets, CAD/BIM drawing files, geotechnical reports, project manuals, and CSI specification documents.</li>
              <li><strong>Project Scope Details:</strong> Selected CSI divisions, project location / US state, bid deadline, and special estimating requirements.</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--navy-darkest)', marginTop: '28px', marginBottom: '12px' }}>
              3. How We Use Your Data
            </h2>
            <p style={{ color: 'var(--text-body)', marginBottom: '14px' }}>
              Your project documentation is utilized solely to:
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--text-body)', marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Perform quantity takeoffs and mathematical measurement calculations.</li>
              <li>Generate localized RSMeans material, equipment, and union/open-shop labor pricing models.</li>
              <li>Prepare your final deliverable files (Excel workbooks and highlighted PDF markup sheets).</li>
              <li>Communicate directly regarding scope clarifications, RFIs, and project revisions.</li>
            </ul>
            <p style={{ color: 'var(--text-body)', marginBottom: '18px', fontWeight: '600' }}>
              We never sell, rent, license, or disclose your client data, bid figures, or drawing files to third parties or competing contractors.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--navy-darkest)', marginTop: '28px', marginBottom: '12px' }}>
              4. Non-Disclosure & Mutual NDA
            </h2>
            <p style={{ color: 'var(--text-body)', marginBottom: '18px' }}>
              Every plan submitted through our website is automatically treated as confidential proprietary material. Furthermore, we readily execute bilateral or contractor-provided <strong>Mutual Non-Disclosure Agreements (NDAs)</strong> prior to reviewing private bid packages or pre-construction sets.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--navy-darkest)', marginTop: '28px', marginBottom: '12px' }}>
              5. File Retention & Deletion
            </h2>
            <p style={{ color: 'var(--text-body)', marginBottom: '18px' }}>
              Upon delivery and client sign-off of your completed estimate, project files are archived on encrypted, access-restricted storage for 90 days to accommodate addenda or scope adjustments. Following 90 days, drawing files may be permanently purged upon contractor request.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--navy-darkest)', marginTop: '28px', marginBottom: '12px' }}>
              6. Contact Data Protection Officer
            </h2>
            <p style={{ color: 'var(--text-body)', marginBottom: '8px' }}>
              For data inquiries, NDA execution, or file purge requests, contact:
            </p>
            <p style={{ color: 'var(--navy-darkest)', fontWeight: '600', marginBottom: '4px' }}>
              US Estimates Pro — Compliance & Legal Department
            </p>
            <p style={{ color: 'var(--text-body)', margin: 0 }}>
              244 5th Avenue, Suite B-102, New York, NY 10001<br />
              Email: <a href="mailto:info@usestimatespro.com" style={{ color: 'var(--red)', fontWeight: '700' }}>info@usestimatespro.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
