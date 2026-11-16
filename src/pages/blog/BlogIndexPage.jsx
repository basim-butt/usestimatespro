import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

export default function BlogIndexPage() {
  const pageTitle = 'Contractor Estimating Guides & Resources | US Estimates Pro'
  const pageDesc = 'Practical guides, checklists, and cost modeling tips for construction estimators, General Contractors, and trade subcontractors. Written by senior estimators.'

  const articles = [
    {
      slug: 'how-to-do-a-quantity-takeoff',
      title: 'How to Do a Construction Quantity Takeoff (Step-by-Step Guide)',
      category: 'Estimating Fundamentals',
      date: 'November 2026',
      readTime: '6 min read',
      excerpt: 'Learn the exact 6-step method senior estimators use to digitize blueprints, measure linear and area scopes, calculate material wastage, and compile bid-ready spreadsheets.',
    },
    {
      slug: 'in-house-vs-outsourced-estimating',
      title: 'In-House Estimator vs. Outsourced Estimating: Cost & Accuracy Analysis',
      category: 'Contractor Operations',
      date: 'November 2026',
      readTime: '7 min read',
      excerpt: 'Compare the real salary, overhead, software subscription, and error liability costs of employing a full-time in-house estimator versus partnering with an on-demand estimating service.',
    },
    {
      slug: 'what-is-included-in-a-construction-bid-package',
      title: 'What Is Included in a Commercial Construction Bid Package?',
      category: 'Bid Management',
      date: 'November 2026',
      readTime: '5 min read',
      excerpt: 'A comprehensive checklist of every document, schedule of values, scope inclusion, and exclusion clause required to submit a winning tender without margin risk.',
    },
  ]

  return (
    <div className="subpage-wrapper">
      <SEO
        title={pageTitle}
        description={pageDesc}
        canonicalPath="/blog"
      />

      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Contractor Estimating Knowledge Base</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Industry Resources</span>
            <h1 className="subpage-hero-title">
              Construction Estimating Guides &amp; Insights
            </h1>
            <p className="subpage-hero-desc">
              Practical, actionable guides authored by certified senior estimators. Learn professional takeoff methodologies, bid management strategies, and localized cost modeling techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="blog-grid">
            {articles.map((art) => (
              <article
                key={art.slug}
                className="blog-card"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '0.74rem',
                    fontWeight: '700',
                    color: 'var(--red)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    background: 'rgba(220, 38, 38, 0.08)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                  }}>
                    {art.category}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{art.readTime}</span>
                </div>

                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--navy-darkest)',
                  marginBottom: '10px',
                  lineHeight: '1.35',
                }}>
                  <Link to={`/blog/${art.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {art.title}
                  </Link>
                </h2>

                <p style={{ color: 'var(--text-body)', fontSize: '0.92rem', lineHeight: '1.55', marginBottom: '20px', flex: '1' }}>
                  {art.excerpt}
                </p>

                <div>
                  <Link
                    to={`/blog/${art.slug}`}
                    className="btn btn-navy btn-sm"
                    style={{ width: '100%', textAlign: 'center', textDecoration: 'none', padding: '10px 14px' }}
                  >
                    Read Guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
