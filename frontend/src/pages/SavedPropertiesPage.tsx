import { Link } from 'react-router-dom'
import { properties } from '../data/properties'
import { useCompareProperties } from '../hooks/useCompareProperties'
import { useSavedProperties } from '../hooks/useSavedProperties'

export function SavedPropertiesPage() {
  const { savedIds, toggleSaved } = useSavedProperties()
  const { canAddMore, compareCount, isCompared, maxCompare, toggleCompared } = useCompareProperties()

  const savedListings = properties.filter((property) => savedIds.includes(property.id))

  return (
    <section className="section property-showcase-page">
      <div className="container property-showcase-shell">
        <div className="property-breadcrumb">Home &gt; Saved Properties</div>

        <div className="saved-page-head">
          <div>
            <h1>Saved Properties</h1>
            <p>Your shortlisted listings in one place for faster comparison and follow-up.</p>
          </div>
          <div className="saved-page-actions">
            <span className="property-meta-chip saved">Saved: {savedListings.length}</span>
            <span className="property-meta-chip saved">Compare: {compareCount}/{maxCompare}</span>
            <Link className="button secondary" to="/compare">
              Open Compare
            </Link>
            <Link className="button secondary" to="/properties">
              Explore More
            </Link>
          </div>
        </div>

        {savedListings.length > 0 ? (
          <div className="property-showcase-grid">
            {savedListings.map((property) => {
              const compared = isCompared(property.id)
              const compareDisabled = !compared && !canAddMore
              const inquiryMessage = encodeURIComponent(
                `Hi, I am interested in ${property.title} (${property.id}). Please share details.`,
              )

              return (
                <article key={property.id} className="showcase-card">
                  <div className="showcase-media">
                    <img src={property.image} alt={property.title} className="showcase-image" />
                    <span className="showcase-status">{property.status}</span>
                    <button
                      type="button"
                      className="showcase-fav active"
                      aria-label="Remove saved property"
                      onClick={() => toggleSaved(property.id)}
                    >
                      ✓
                    </button>
                  </div>

                  <div className="showcase-body">
                    <div className="showcase-top-meta">
                      <span className="showcase-category">{property.category}</span>
                      <span className="showcase-id">{property.id}</span>
                    </div>
                    <h3>{property.title}</h3>
                    <p className="showcase-location">{property.locality}</p>
                    <p className="showcase-price">{property.priceLabel}</p>
                    <p className="showcase-secondary">
                      {property.pricePerSqft} | {property.area}
                    </p>
                    <div className="showcase-tags">
                      {property.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="showcase-actions">
                      <Link className="button" to={`/properties/${property.id}`}>
                        View Details
                      </Link>
                      <a
                        className="button secondary"
                        href={`https://wa.me/919999999999?text=${inquiryMessage}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        WhatsApp
                      </a>
                    </div>
                    <button
                      type="button"
                      className={`button ghost compare-toggle${compared ? ' active' : ''}`}
                      onClick={() => toggleCompared(property.id)}
                      disabled={compareDisabled}
                    >
                      {compared ? 'Remove from Compare' : compareDisabled ? 'Compare Limit Reached' : 'Add to Compare'}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="property-empty saved-empty">
            <h3>No saved properties yet</h3>
            <p>Use the + or save buttons on listings to build your shortlist.</p>
            <Link className="button" to="/properties">
              Browse Properties
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
