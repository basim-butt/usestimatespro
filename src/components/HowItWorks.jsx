import React from 'react'

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Submit Drawings & Specs',
      desc: 'Upload your architectural, structural, or MEP drawings via our secure portal. We accept PDF, DWG, BIM/Revit models, and spec books.',
    },
    {
      num: '02',
      title: 'Receive Fast Fixed Quote',
      desc: 'Our senior review team analyzes the project scope and delivers a transparent, fixed-fee quote with zero obligation.',
    },
    {
      num: '03',
      title: 'Get Bid-Ready Takeoffs in 24-48h',
      desc: 'Receive your itemized Excel workbook, color-coded PlanSwift markups, and executive bid summary ready for immediate contractor submission.',
    },
  ]

  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">Simple & Fast</div>
          <h2 className="section-title">
            Our 3-Step <span className="text-red">Estimating Process</span>
          </h2>
          <p className="section-desc">
            Designed to integrate directly into your fast-paced bid cycles. From blueprint upload
            to bid-ready delivery in under 48 hours.
          </p>
        </div>

        <div className="process-steps-row">
          {steps.map((s) => (
            <div className="process-step-box" key={s.num}>
              <div className="process-step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
