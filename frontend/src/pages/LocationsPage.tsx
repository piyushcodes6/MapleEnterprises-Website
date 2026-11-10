const locationCards = [
  { area: 'Golf Course Extension Road', focus: 'Premium residential and commercial towers', trend: '+4.2% QoQ' },
  { area: 'Sohna Road', focus: 'Growth corridor for plotted and mixed-use assets', trend: '+5.7% QoQ' },
  { area: 'IMT Manesar', focus: 'Industrial and logistics opportunity zone', trend: '+6.1% QoQ' },
]

export function LocationsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-hero compact">
          <p className="eyebrow">Location Intelligence</p>
          <h1>Locations We Cover</h1>
          <p className="muted">Area-level discovery supported by project pipelines and price trend context.</p>
        </div>

        <div className="service-grid">
          {locationCards.map((item) => (
            <article key={item.area} className="service-card">
              <h3>{item.area}</h3>
              <p>{item.focus}</p>
              <p className="location-trend">Market signal: {item.trend}</p>
            </article>
          ))}
        </div>

        <section className="service-highlight-panel">
          <h3>Coverage Includes</h3>
          <div className="check-grid">
            <p>Residential projects and gated communities</p>
            <p>Commercial office and retail corridors</p>
            <p>Industrial and warehousing clusters</p>
            <p>Plotted developments and land pockets</p>
          </div>
        </section>
      </div>
    </section>
  )
}
