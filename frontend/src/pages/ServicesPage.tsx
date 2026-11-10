const services = [
  'Residential acquisition consulting',
  'Commercial leasing and investment advisory',
  'Industrial and warehousing solutions',
  'Plot and land discovery with legal due diligence',
]

const serviceHighlights = [
  'Advisor-led investment and end-user paths',
  'Documentation and compliance readiness',
  'Property comparison and risk notes',
  'Negotiation and closure support',
]

export function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-hero compact">
          <p className="eyebrow">Service Stack</p>
          <h1>Our Services</h1>
          <p className="muted">Advisory-led services designed for buyers, sellers, investors, and tenants.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service}>
              <h3>{service}</h3>
              <p>End-to-end support with market analysis, negotiations, and documentation oversight.</p>
            </article>
          ))}
        </div>

        <section className="service-highlight-panel">
          <h3>What Every Engagement Includes</h3>
          <div className="check-grid">
            {serviceHighlights.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
