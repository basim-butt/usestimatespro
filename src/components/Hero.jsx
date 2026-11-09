import React, { useState, useEffect } from 'react'

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const dynamicWords = ['You Build.', 'You Win Bids.', 'You Scale.', 'We Deliver.']

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % dynamicWords.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [dynamicWords.length])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-video-section" id="hero">
      {/* Background Video */}
      <div className="video-background-wrapper">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1920&q=80"
        >
          {/* High-quality construction site & crane sunset video loops */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-craters-working-in-a-construction-site-4266-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay" />
        <div className="hero-grid-pattern" />
      </div>

      {/* Foreground Content */}
      <div className="container hero-content-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="flag-emoji">🇺🇸</span>
            <span>America's Leading Construction Cost Estimation & Takeoff Partner</span>
          </div>

          <h1 className="hero-tagline">
            We Estimate.
          </h1>

          <div className="hero-subtagline">
            <span className="dynamic-word">{dynamicWords[wordIndex]}</span>
          </div>

          <p className="hero-description">
            Professional quantity takeoffs and material cost estimates for General Contractors,
            Subcontractors, and Developers. Certified human senior estimators utilizing RSMeans
            regional data for all 50 states with a guaranteed 24 to 48-hour turnaround.
          </p>

          <div className="hero-cta-group">
            <button className="btn btn-red btn-lg" onClick={() => scrollTo('quote')}>
              Request Quote (1-Hour Response) →
            </button>
            <button className="btn btn-outline-white btn-lg" onClick={() => scrollTo('trades')}>
              Explore CSI Divisions
            </button>
          </div>

          {/* Trust Metric Badges */}
          <div className="hero-stats-row">
            <div className="hero-stat-card">
              <div className="hero-stat-number">24–48<span>hr</span></div>
              <div className="hero-stat-label">Fastest Turnaround Guaranteed</div>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-number">98.4<span>%</span></div>
              <div className="hero-stat-label">Verified Bid Accuracy Rate</div>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-number">50<span>/50</span></div>
              <div className="hero-stat-label">US States & RSMeans Indexes</div>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-number">100<span>%</span></div>
              <div className="hero-stat-label">Senior Human Estimators</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
