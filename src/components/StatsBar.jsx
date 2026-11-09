import { useReveal } from '../hooks/useReveal'
import { useCounter } from '../hooks/useCounter'

function StatItem({ target, suffix, label }) {
  const { ref, value } = useCounter(target, suffix)
  const revealRef = useReveal()

  return (
    <div className="stat-item reveal" ref={revealRef}>
      <div className="stat-number" ref={ref}>{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          <StatItem target={2000} suffix="+" label="Projects Completed" />
          <StatItem target={98} suffix="%" label="Estimation Accuracy" />
          <StatItem target={50} suffix="" label="US States Covered" />
          <StatItem target={1} suffix=" hr" label="Quote Response Time" />
        </div>
      </div>
    </section>
  )
}

