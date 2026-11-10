import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { properties } from '../data/properties'
import { useSavedProperties } from '../hooks/useSavedProperties'

const categoryRail = [
  'Residential',
  'Commercial',
  'Plots/Land',
  'Industrial',
  'Rental',
  'Luxury',
]

const advisoryBlocks = [
  {
    title: 'Acquisition Advisory',
    text: 'Project shortlisting, legal checks, and deal strategy designed around your timeline.',
    timeline: '2-4 days',
    output: 'Shortlist + risk brief',
  },
  {
    title: 'Portfolio Expansion',
    text: 'Data-backed recommendations for investors building rental and long-term growth assets.',
    timeline: '5-7 days',
    output: 'Yield + location model',
  },
  {
    title: 'End-to-End Closing',
    text: 'Documentation, valuation support, and assisted negotiation until handover completion.',
    timeline: '14-21 days',
    output: 'Closure and handover',
  },
]

const marketStats = [
  { label: 'Verified listings this month', value: '420+', note: '+12% vs last month' },
  { label: 'Average site visits per week', value: '165', note: 'Demand remains strong' },
  { label: 'Average closing timeline', value: '21 days', note: 'Assisted documentation' },
  { label: 'Client satisfaction score', value: '4.9/5', note: 'Post-sale support included' },
]

const marketSignals = [
  { zone: 'Noida Extension', score: 86, insight: 'High family demand, stable inventory absorption' },
  { zone: 'Golf Course Ext.', score: 79, insight: 'Premium launches, investor-led activity' },
  { zone: 'Sohna Corridor', score: 72, insight: 'Growth-led opportunity with infra upside' },
]

const trustMetrics = [
  { value: '96%', label: 'Deal transparency score' },
  { value: '24h', label: 'Avg. response SLA' },
  { value: '350+', label: 'Families advised' },
  { value: '0 hidden', label: 'Fee policy clarity' },
]

function AdvisorIcon() {
  return (
    <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M6.8 18.5C7.9 15.7 10 14.2 12 14.2C14 14.2 16.1 15.7 17.2 18.5" />
      <path d="M4.8 13.6L2.8 12.4L4 10" />
      <path d="M19.2 13.6L21.2 12.4L20 10" />
    </svg>
  )
}

function VerifiedIcon() {
  return (
    <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3L19 6V11.2C19 15.6 16.2 19.6 12 21C7.8 19.6 5 15.6 5 11.2V6L12 3Z" />
      <path d="M9 12L11.2 14.2L15.2 10.2" />
    </svg>
  )
}

function GuidanceIcon() {
  return (
    <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20V10" />
      <path d="M12 10L8.5 13.5" />
      <path d="M12 10L15.5 13.5" />
      <circle cx="12" cy="7" r="3" />
    </svg>
  )
}

function SupportIcon() {
  return (
    <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 12.2C6 8.8 8.7 6 12 6C15.3 6 18 8.8 18 12.2" />
      <rect x="4.2" y="11.4" width="2.8" height="5.8" rx="1.2" />
      <rect x="17" y="11.4" width="2.8" height="5.8" rx="1.2" />
      <path d="M10.2 18.8H13.8" />
    </svg>
  )
}

const testimonials = [
  {
    quote:
      'Their team filtered exactly what we needed and helped us close a family home in under three weeks.',
    name: 'Ritika Sharma',
    role: 'Homebuyer, Noida Extension',
  },
  {
    quote:
      'Straightforward process, transparent numbers, and strong market insight for our second investment property.',
    name: 'Aman Malhotra',
    role: 'Investor, Greater Noida West',
  },
]

export function HomePage() {
  const navigate = useNavigate()
  const { isSaved, toggleSaved } = useSavedProperties()
  const heroImage =
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80'
  const featuredListings = (() => {
    if (properties.length === 0) {
      return []
    }

    const items = [...properties]
    let index = 0

    while (items.length < 6) {
      items.push(properties[index % properties.length])
      index += 1
    }

    return items.slice(0, 6)
  })()
  const [searchType, setSearchType] = useState('All')
  const [searchLocation, setSearchLocation] = useState('All')
  const [searchBudget, setSearchBudget] = useState('Any')

  const handleSearch = () => {
    const params = new URLSearchParams()

    if (searchType !== 'All') {
      params.set('type', searchType)
    }

    if (searchLocation !== 'All') {
      params.set('location', searchLocation)
    }

    if (searchBudget !== 'Any') {
      params.set('budget', searchBudget)
    }

    const query = params.toString()
    navigate(query ? `/properties?${query}` : '/properties')
  }

  return (
    <section className="section home-reference-wrap">
      <div className="container home-reference-shell">
        <section className="hero-slab" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-backdrop"></div>

          <div className="hero-content-reference">
            <h1>Find Your Dream Property</h1>
            <p>Premium Properties. Trusted Consultancy.</p>

            <div className="hero-form-inline">
              <select value={searchType} onChange={(event) => setSearchType(event.target.value)}>
                <option>All</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Industrial</option>
                <option>Plots/Land</option>
              </select>
              <select value={searchLocation} onChange={(event) => setSearchLocation(event.target.value)}>
                <option>All</option>
                <option>Greater Noida</option>
                <option>Noida</option>
                <option>Ghaziabad</option>
                <option>Gurgaon</option>
              </select>
              <select value={searchBudget} onChange={(event) => setSearchBudget(event.target.value)}>
                <option>Any</option>
                <option>50L - 1Cr</option>
                <option>1Cr - 2Cr</option>
                <option>2Cr+</option>
              </select>
              <button className="button search-hero-button" type="button" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </section>

        <section className="trust-inline">
          <article>
            <AdvisorIcon />
            Trusted Advisor
          </article>
          <article>
            <VerifiedIcon />
            Verified Listings
          </article>
          <article>
            <GuidanceIcon />
            Expert Guidance
          </article>
          <article>
            <SupportIcon />
            Dedicated Support
          </article>
        </section>

        <section className="featured-mini">
          <div className="section-head compact-head">
            <div>
              <p className="section-kicker">Curated Selection</p>
              <h2>Featured Properties</h2>
            </div>
            <Link to="/properties" className="text-link">View all</Link>
          </div>

          <div className="featured-mini-grid">
            {featuredListings.map((property, index) => {
              const inquiryMessage = encodeURIComponent(`Hi, I am interested in ${property.title} (${property.id}). Please share details.`)
              const saved = isSaved(property.id)

              return (
                <article className="featured-mini-card" key={`${property.id}-${index}`}>
                  <div className="featured-mini-media">
                    <img src={property.image} alt={property.title} />
                    <span className="featured-badge">{property.status}</span>
                    <button
                      type="button"
                      className={`featured-quick-add${saved ? ' active' : ''}`}
                      aria-label={`${saved ? 'Remove' : 'Save'} ${property.title}`}
                      onClick={() => toggleSaved(property.id)}
                    >
                      {saved ? '✓' : '+'}
                    </button>
                  </div>

                  <div className="featured-mini-body">
                    <div className="featured-mini-topline">
                      <span>{property.category}</span>
                      <small>{property.id}</small>
                    </div>

                    <h3>{property.title}</h3>
                    <p>{property.locality}</p>

                    <strong>{property.priceLabel}</strong>
                    <p className="featured-mini-detail-row">{property.pricePerSqft} | {property.area}</p>

                    <div className="featured-mini-tags">
                      {property.tags.slice(0, 3).map((tag) => (
                        <span key={`${property.id}-${tag}`}>{tag}</span>
                      ))}
                    </div>

                    <div className="featured-mini-actions">
                      <Link to={`/properties/${property.id}`} className="featured-action primary">
                        View Details
                      </Link>
                      <a
                        href={`https://wa.me/919999999999?text=${inquiryMessage}`}
                        target="_blank"
                        rel="noreferrer"
                        className="featured-action secondary"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="advisory-stack engineering-block">
          <div className="section-head compact-head">
            <div>
              <p className="section-kicker">Consulting Framework</p>
              <h2>Advisory Engine</h2>
            </div>
            <Link to="/services" className="text-link">Explore services</Link>
          </div>

          <div className="advisory-engine-layout">
            <article className="advisory-method-card">
              <h3>How We Engineer Better Decisions</h3>
              <ol className="method-list">
                <li>Define objective: end-use, rental, or long-term capital growth.</li>
                <li>Run risk filters: legality, developer quality, and location momentum.</li>
                <li>Compare options: price efficiency, livability, and liquidity outlook.</li>
                <li>Execute with control: negotiation, paperwork, and post-sale handover.</li>
              </ol>
            </article>

            <div className="advisory-service-grid">
              {advisoryBlocks.map((item, index) => (
                <article key={item.title} className="advisory-stack-card">
                  <span className="card-index">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="service-meta">
                    <span>{item.timeline}</span>
                    <span>{item.output}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="market-snapshot engineering-block">
          <div className="section-head compact-head">
            <div>
              <p className="section-kicker">Intelligence Layer</p>
              <h2>Market Snapshot</h2>
            </div>
            <Link to="/locations" className="text-link">Location insights</Link>
          </div>

          <div className="market-engine-layout">
            <div className="market-snapshot-grid">
              {marketStats.map((stat) => (
                <article key={stat.label} className="market-snapshot-card">
                  <strong>{stat.value}</strong>
                  <p>{stat.label}</p>
                  <small>{stat.note}</small>
                </article>
              ))}
            </div>

            <article className="market-index-card">
              <h3>Zone Momentum Index</h3>
              <div className="signal-list">
                {marketSignals.map((signal) => (
                  <div key={signal.zone} className="signal-row">
                    <div className="signal-head">
                      <h4>{signal.zone}</h4>
                      <span>{signal.score}/100</span>
                    </div>
                    <div className="signal-meter">
                      <span style={{ width: `${signal.score}%` }}></span>
                    </div>
                    <p>{signal.insight}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="client-voices engineering-block">
          <div className="section-head compact-head">
            <div>
              <p className="section-kicker">Trust and Outcomes</p>
              <h2>Client Evidence</h2>
            </div>
            <Link to="/contact" className="text-link">Book consultation</Link>
          </div>

          <div className="trust-engine-layout">
            <article className="trust-proof-board">
              <h3>Confidence Metrics</h3>
              <div className="proof-metric-grid">
                {trustMetrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <p>{metric.label}</p>
                  </div>
                ))}
              </div>
            </article>

            <div className="client-voices-grid">
              {testimonials.map((item) => (
                <article key={item.name} className="client-voice-card">
                  <p className="voice-rating">5.0 Client Rating</p>
                  <p className="client-voice-quote">"{item.quote}"</p>
                  <h3>{item.name}</h3>
                  <p className="client-voice-role">{item.role}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="home-cta-strip engineered-cta">
            <p>Need a curated shortlist for your budget and location?</p>
            <Link className="button" to="/contact">
              Talk to an Advisor
            </Link>
          </div>
        </section>

        <section className="category-rail reference-categories">
          <span className="category-label">Browse by asset class:</span>
          {categoryRail.map((item) => (
            <span key={item} className="category-rail-item">
              <span className="category-dot"></span>
              {item}
            </span>
          ))}
        </section>
      </div>
    </section>
  )
}
