import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import QuickEstimator from '../components/QuickEstimator'

export default function TakeoffCalculatorPage() {
  const [projectSqFt, setProjectSqFt] = useState('15000')
  const [buildingType, setBuildingType] = useState('commercial')
  const [region, setRegion] = useState('northeast')

  // Benchmark regional cost multipliers
  const regionMultipliers = {
    northeast: { label: 'Northeast / Mid-Atlantic (NY, NJ, MA, PA)', mult: 1.24, baseLabor: '$78/hr' },
    west: { label: 'West Coast (CA, WA, OR, NV)', mult: 1.21, baseLabor: '$74/hr' },
    midwest: { label: 'Midwest (IL, OH, MI, IN, MO)', mult: 1.06, baseLabor: '$62/hr' },
    southeast: { label: 'Southeast (FL, GA, NC, SC, TN)', mult: 0.94, baseLabor: '$52/hr' },
    southwest: { label: 'Southwest / Texas (TX, AZ, NM, CO)', mult: 0.97, baseLabor: '$54/hr' },
  }

  const buildingRates = {
    residential: { name: 'Single & Multi-Family Residential', baseSqFt: 185, takeoffHours: '16–24 hrs' },
    commercial: { name: 'Commercial & Retail Shell/Fitout', baseSqFt: 245, takeoffHours: '24–36 hrs' },
    industrial: { name: 'Industrial / Warehouse / Flex', baseSqFt: 160, takeoffHours: '20–30 hrs' },
    institutional: { name: 'Educational / Healthcare / Municipal', baseSqFt: 340, takeoffHours: '36–48 hrs' },
  }

  const numericSqFt = parseFloat(projectSqFt) || 0
  const currentRate = buildingRates[buildingType]
  const currentRegion = regionMultipliers[region]
  const estimatedConstructionCost = Math.round(numericSqFt * currentRate.baseSqFt * currentRegion.mult)

  return (
    <div className="subpage-wrapper">
      {/* Subpage Hero Banner */}
      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Takeoff Calculator</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Interactive Estimating Tool</span>
            <h1 className="subpage-hero-title">
              Construction Takeoff & <span className="text-red">Cost Modeling Calculator</span>
            </h1>
            <p className="subpage-hero-desc">
              Estimate your project turnaround time and conceptual cost benchmarks using our interactive estimation tool. When you are ready for a line-item blueprint takeoff, submit your drawings for a confirmed proposal within 1–2 hours.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Blueprints for Exact Quote →
              </Link>
              <Link to="/trades" className="btn btn-outline-white btn-lg">
                View Trade Scopes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Tool Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">Instant Estimator</span>
            <h2 className="section-title">
              Quick Turnaround & <span className="text-navy">Pricing Guide</span>
            </h2>
            <p className="section-desc">
              Select your trade scope, building type, and square footage to review estimated turnaround timelines.
            </p>
          </div>

          <QuickEstimator />
        </div>
      </section>

      {/* Conceptual Regional Cost Benchmark Tool */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">RSMeans Regional Modeling</span>
            <h2 className="section-title">
              Conceptual Regional <span className="text-red">Cost Factor Calculator</span>
            </h2>
            <p className="section-desc">
              RSMeans City Cost Indexes (CCI) adjust baseline national averages based on local union wage scales and regional supplier transport indexes.
            </p>
          </div>

          <div className="calculator-widget-box">
            <div className="calc-controls-grid">
              <div className="calc-input-group">
                <label>Total Gross Floor Area (SF):</label>
                <input 
                  type="number" 
                  value={projectSqFt}
                  onChange={(e) => setProjectSqFt(e.target.value)}
                  className="calc-input"
                  min="500"
                  step="500"
                />
              </div>

              <div className="calc-input-group">
                <label>Facility / Building Type:</label>
                <select 
                  value={buildingType} 
                  onChange={(e) => setBuildingType(e.target.value)}
                  className="calc-input"
                >
                  <option value="residential">Single & Multi-Family Residential</option>
                  <option value="commercial">Commercial / Retail Office</option>
                  <option value="industrial">Industrial / Warehouse</option>
                  <option value="institutional">Educational / Healthcare / Municipal</option>
                </select>
              </div>

              <div className="calc-input-group">
                <label>Project Geographic Region:</label>
                <select 
                  value={region} 
                  onChange={(e) => setRegion(e.target.value)}
                  className="calc-input"
                >
                  <option value="northeast">Northeast / Mid-Atlantic (Index: 1.24x)</option>
                  <option value="west">West Coast (Index: 1.21x)</option>
                  <option value="midwest">Midwest (Index: 1.06x)</option>
                  <option value="southeast">Southeast (Index: 0.94x)</option>
                  <option value="southwest">Southwest / Texas (Index: 0.97x)</option>
                </select>
              </div>
            </div>

            <div className="calc-results-display">
              <div className="calc-result-item">
                <span className="calc-result-label">Benchmark Base Cost:</span>
                <span className="calc-result-value">${currentRate.baseSqFt} / SF</span>
              </div>
              <div className="calc-result-item">
                <span className="calc-result-label">Regional RSMeans Multiplier:</span>
                <span className="calc-result-value">{currentRegion.mult}x</span>
              </div>
              <div className="calc-result-item">
                <span className="calc-result-label">Estimated Takeoff Turnaround:</span>
                <span className="calc-result-value">{currentRate.takeoffHours}</span>
              </div>
              <div className="calc-result-item highlight">
                <span className="calc-result-label">Modeled Budget Range:</span>
                <span className="calc-result-value font-bold">${estimatedConstructionCost.toLocaleString()}</span>
              </div>
            </div>

            <div className="calc-footnote">
              <p>
                * Note: Conceptual calculators provide general order-of-magnitude estimates. For a verifiable, bid-ready takeoff with exact material counts and marked drawings, please submit your architectural and engineering plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="section-cta-banner">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-text">
              <h2>Need an Exact, Line-Item Blueprint Takeoff?</h2>
              <p>Skip the rough estimates. Upload your drawings today and receive a detailed, fixed-price proposal within 1–2 hours.</p>
            </div>
            <div className="cta-banner-buttons">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Plans for Quote →
              </Link>
              <Link to="/how-it-works" className="btn btn-outline-white btn-lg">
                See Our Workflow
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

