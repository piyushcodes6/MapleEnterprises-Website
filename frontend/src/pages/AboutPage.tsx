export function AboutPage() {
  return (
    <section className="section">
      <div className="container page-hero">
        <p className="eyebrow">About Maple Enterprises</p>
        <h1>Premium real estate consultancy with execution discipline.</h1>
        <p>
          Maple Enterprises combines advisory, legal-first screening, and property discovery so every decision is backed by data, documentation, and local market context.
        </p>
      </div>

      <div className="container service-grid">
        <article className="service-card">
          <h3>Documentation First</h3>
          <p>RERA and legal readiness checks are embedded before every high-intent transaction stage.</p>
        </article>
        <article className="service-card">
          <h3>Advisory-Led Search</h3>
          <p>Residential, commercial, industrial, and land options are mapped against budget and risk profile.</p>
        </article>
        <article className="service-card">
          <h3>Deal Support</h3>
          <p>From site visit planning to negotiation and closure coordination through a dedicated consultant.</p>
        </article>
      </div>

      <div className="container about-timeline">
        <article>
          <h4>1. Discovery</h4>
          <p>Understand objective, timeline, and budget with locality-level precision.</p>
        </article>
        <article>
          <h4>2. Curation</h4>
          <p>Shortlist verified opportunities with clear commercial comparables.</p>
        </article>
        <article>
          <h4>3. Closure</h4>
          <p>Coordinate site visits, documentation, and transaction readiness.</p>
        </article>
      </div>
    </section>
  )
}
