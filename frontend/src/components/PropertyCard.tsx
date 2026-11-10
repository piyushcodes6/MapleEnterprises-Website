import { Link } from 'react-router-dom'
import type { Property } from '../data/properties'

type PropertyCardProps = {
  property: Property
  compact?: boolean
}

export function PropertyCard({ property, compact = false }: PropertyCardProps) {
  if (compact) {
    return (
      <article className="property-card property-card-compact">
        <div className="property-image-wrap">
          <img src={property.image} alt={property.title} className="property-image" />
          <span className="compact-status">{property.status}</span>
          <button className="property-save" type="button" aria-label="Save property">Save</button>
        </div>
        <div className="property-body compact-body">
          <h3>{property.title}</h3>
          <p className="muted">{property.locality}</p>
          <div className="compact-meta">
            <span>{property.category}</span>
            <span>{property.id}</span>
          </div>
          <p className="price compact-price">{property.priceLabel}</p>
          <p className="muted compact-area">{property.area}</p>
        </div>
      </article>
    )
  }

  return (
    <article className="property-card">
      <div className="property-image-wrap">
        <img src={property.image} alt={property.title} className="property-image" />
        <div className="property-overlay"></div>
        <span className="status-badge">{property.status}</span>
      </div>
      <div className="property-body">
        <div className="property-meta-row">
          <span className="category-pill">{property.category}</span>
          <span className="muted">{property.id}</span>
        </div>
        <div className="property-tags">
          {property.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
        <h3>{property.title}</h3>
        <p className="muted">{property.locality}</p>
        <p className="price">{property.priceLabel}</p>
        <p className="muted">{property.pricePerSqft} | {property.area}</p>
        <div className="card-actions">
          <Link className="button" to={`/properties/${property.id}`}>
            View Details
          </Link>
          <a className="button secondary" href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}
