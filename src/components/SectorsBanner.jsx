import { useReveal, useStagger } from '../hooks/useReveal'

const SECTORS = [
  { icon: '🏢', label: 'Commercial' },
  { icon: '🏘️', label: 'Residential' },
  { icon: '🏭', label: 'Industrial' },
  { icon: '🏥', label: 'Healthcare' },
  { icon: '🏫', label: 'Education' },
  { icon: '🏛️', label: 'Public / Civic' },
]

export default function SectorsBanner() {
  const labelRef = useReveal()
  const rowRef = useStagger()

  return (
    <section className="sectors-banner">
      <div className="container">
        <p className="sectors-label reveal" ref={labelRef}>We Serve Every Construction Sector</p>
        <div className="sectors-row stagger" ref={rowRef}>
          {SECTORS.map(s => (
            <div className="sector-pill" key={s.label}>
              {s.icon} {s.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

