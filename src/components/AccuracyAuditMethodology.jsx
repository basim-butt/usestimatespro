import React from 'react'

export default function AccuracyAuditMethodology() {
  return (
    <section className="section bg-light accuracy-audit-section" id="audit-methodology">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Quality Assurance Standards</span>
          <h2 className="section-title">
            How We Document &amp; Verify Our <span className="text-red">98.7% Bid Accuracy</span>
          </h2>
          <p className="section-desc">
            We don't use arbitrary marketing numbers. Our 98.7% material takeoff accuracy is calculated from post-bid audit reconciliations across 1,840+ completed contractor bids, tracking the variance between our quantified Bluebeam takeoffs and actual supplier purchase orders.
          </p>
        </div>

        <div className="audit-protocol-grid">
          <div className="audit-card">
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              background: 'rgba(220, 38, 38, 0.1)',
              color: 'var(--red)',
              fontSize: '1.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              fontWeight: '900'
            }}>01</div>
            <h4 style={{ color: 'var(--navy-darkest)', fontFamily: 'var(--font-heading)', fontSize: '1.15rem', marginBottom: '8px', fontWeight: '700' }}>
              Digital Plan Calibration
            </h4>
            <p style={{ color: 'var(--text-body)', fontSize: '0.92rem', lineHeight: '1.55' }}>
              Before measuring, estimators verify vector scale by measuring multiple known dimension callouts on both horizontal and vertical axes to prevent PDF conversion scaling distortions.
            </p>
          </div>

          <div className="audit-card">
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              background: 'rgba(220, 38, 38, 0.1)',
              color: 'var(--red)',
              fontSize: '1.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              fontWeight: '900'
            }}>02</div>
            <h4 style={{ color: 'var(--navy-darkest)', fontFamily: 'var(--font-heading)', fontSize: '1.15rem', marginBottom: '8px', fontWeight: '700' }}>
              Industry Wastage &amp; Laps
            </h4>
            <p style={{ color: 'var(--text-body)', fontSize: '0.92rem', lineHeight: '1.55' }}>
              We apply calibrated, trade-standard material wastage factors: 5% for rebar splice overlaps, 7% for gypsum cutting, and 10% for custom tile layout cuts, avoiding unexpected site shortages.
            </p>
          </div>

          <div className="audit-card">
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              background: 'rgba(220, 38, 38, 0.1)',
              color: 'var(--red)',
              fontSize: '1.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              fontWeight: '900'
            }}>03</div>
            <h4 style={{ color: 'var(--navy-darkest)', fontFamily: 'var(--font-heading)', fontSize: '1.15rem', marginBottom: '8px', fontWeight: '700' }}>
              Dual-Estimator Peer Review
            </h4>
            <p style={{ color: 'var(--text-body)', fontSize: '0.92rem', lineHeight: '1.55' }}>
              Every deliverable is reviewed by a second senior estimator who audits plan callouts, specification addenda, and formula cells in Microsoft Excel before dispatch.
            </p>
          </div>

          <div className="audit-card">
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              background: 'rgba(220, 38, 38, 0.1)',
              color: 'var(--red)',
              fontSize: '1.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              fontWeight: '900'
            }}>04</div>
            <h4 style={{ color: 'var(--navy-darkest)', fontFamily: 'var(--font-heading)', fontSize: '1.15rem', marginBottom: '8px', fontWeight: '700' }}>
              Post-Bid Variance Reconciliation
            </h4>
            <p style={{ color: 'var(--text-body)', fontSize: '0.92rem', lineHeight: '1.55' }}>
              We regularly reconcile bid tabs and supplier invoices with our contractor partners after bid submittal to maintain real-world pricing calibration and benchmarked accuracy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
