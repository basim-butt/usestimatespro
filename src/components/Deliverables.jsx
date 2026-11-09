import React from 'react'

export default function Deliverables() {
  const items = [
    {
      icon: '📊',
      title: 'Itemized Excel Workbooks',
      desc: 'Complete Excel files organized by CSI divisions with intact formulas, customizable labor rates, markup percentages, and trade summaries.',
    },
    {
      icon: '🎨',
      title: 'Color-Coded Marked Plans',
      desc: 'High-resolution PDF drawing markups illustrating exactly what was measured, counted, and color-coded by trade for effortless site verification.',
    },
    {
      icon: '📑',
      title: 'Executive Bid Summaries',
      desc: 'Clean, professional summary reports ready to paste into your bid submissions for clients, GCs, lenders, or public review boards.',
    },
    {
      icon: '🔍',
      title: 'Senior Estimator Sign-Off',
      desc: 'Every file is peer-reviewed and signed off by a licensed/certified senior estimator to guarantee zero omissions or scope gaps.',
    },
  ]

  return (
    <section className="section" id="deliverables">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">Deliverables</div>
          <h2 className="section-title">
            What You Receive In Every <span className="text-red">Bid Package</span>
          </h2>
          <p className="section-desc">
            We don't hand you raw software exports. You receive polished, fully editable,
            field-ready documentation ready for procurement and bid day.
          </p>
        </div>

        <div className="deliverables-grid">
          {items.map((item) => (
            <div className="deliverable-box" key={item.title}>
              <div className="deliverable-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
