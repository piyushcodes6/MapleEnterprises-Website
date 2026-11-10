import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { properties } from '../data/properties'
import { useCompareProperties } from '../hooks/useCompareProperties'
import { useSavedProperties } from '../hooks/useSavedProperties'

export function PropertyDetailPage() {
  const [showMap, setShowMap] = useState(false)
  const { isSaved, toggleSaved } = useSavedProperties()
  const { canAddMore, isCompared, toggleCompared } = useCompareProperties()
  const { propertyId } = useParams()
  const property = properties.find((item) => item.id === propertyId)

  if (!property) {
    return (
      <section className="section">
        <div className="container">
          <h2>Property not found</h2>
          <p className="muted">The listing may have been updated or archived.</p>
          <Link to="/properties" className="button">Back to Listings</Link>
        </div>
      </section>
    )
  }

  const inquiryMessage = encodeURIComponent(`Hi, I am interested in ${property.title} (${property.id}). Please share full details.`)
  const saved = isSaved(property.id)
  const compared = isCompared(property.id)
  const compareDisabled = !compared && !canAddMore
  const { lat, lng } = property.coordinates
  const lngOffset = 0.02
  const latOffset = 0.01
  const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - lngOffset}%2C${lat - latOffset}%2C${lng + lngOffset}%2C${lat + latOffset}&layer=mapnik&marker=${lat}%2C${lng}`
  const mapOpenUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=14/${lat}/${lng}`
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`

  return (
    <section className="section">
      <div className="container detail-layout">
        <div>
          <img className="detail-image" src={property.image} alt={property.title} />
          <div className="detail-trust-ribbon">
            <span>Verified Listing</span>
            <span>RERA Documentation</span>
            <span>Advisor Assisted Deal Support</span>
          </div>
          <h1>{property.title}</h1>
          <p className="muted">{property.id} | {property.locality} | {property.category}</p>
          <p className="price">{property.priceLabel}</p>
          <p className="muted">{property.pricePerSqft} | {property.area}</p>

          <div className="fact-grid">
            <article>
              <h4>Availability</h4>
              <p>{property.status}</p>
            </article>
            <article>
              <h4>Property Type</h4>
              <p>{property.category}</p>
            </article>
            <article>
              <h4>Price Band</h4>
              <p>{property.priceLabel}</p>
            </article>
          </div>

          <div className="detail-block">
            <h3>Description</h3>
            <p>
              Premium project with excellent connectivity, strong social infrastructure, and legal documentation support through the Maple advisory desk.
            </p>
          </div>

          <div className="detail-block">
            <h3>Commercial Information</h3>
            <ul>
              <li>Asking Price: {property.priceLabel}</li>
              <li>Price Per Sq Ft: {property.pricePerSqft}</li>
              <li>Maintenance Charges: On request</li>
              <li>Brokerage: Applicable as per deal terms</li>
            </ul>
          </div>

          <div className="detail-block">
            <h3>Documents</h3>
            <ul>
              <li>RERA registration details</li>
              <li>Brochure and floor plans</li>
              <li>Registry/legal checklist</li>
            </ul>
          </div>
        </div>

        <aside className="cta-panel">
          <h3>Take the next step</h3>
          <p className="muted">Average consultant callback within 30 minutes.</p>
          <a className="button accent" href={`https://wa.me/919999999999?text=${inquiryMessage}`} target="_blank" rel="noreferrer">
            Enquire on WhatsApp
          </a>
          <Link className="button" to="/contact">
            Schedule Site Visit
          </Link>
          <button className="button secondary" type="button" onClick={() => toggleSaved(property.id)}>
            {saved ? 'Remove from Saved' : 'Save Property'}
          </button>
          <button className="button secondary" type="button" onClick={() => setShowMap((current) => !current)}>
            {showMap ? 'Hide Map' : 'Show Map'}
          </button>
          <button
            className={`button ghost compare-toggle${compared ? ' active' : ''}`}
            type="button"
            onClick={() => toggleCompared(property.id)}
            disabled={compareDisabled}
          >
            {compared ? 'Remove from Compare' : compareDisabled ? 'Compare Limit Reached' : 'Add to Compare'}
          </button>
          <Link className="button secondary" to="/compare">
            Open Compare
          </Link>

          {showMap ? (
            <div className="property-map-panel">
              <h4>Property Location</h4>
              <p>{property.locality}</p>
              <iframe
                className="property-map-frame"
                title={`${property.title} map`}
                src={mapEmbedUrl}
                loading="lazy"
              />
              <div className="property-map-links">
                <a className="property-map-link" href={googleMapsUrl} target="_blank" rel="noreferrer">
                  Open on Google Maps
                </a>
                <a className="property-map-link" href={mapOpenUrl} target="_blank" rel="noreferrer">
                  Open on OpenStreetMap
                </a>
              </div>
            </div>
          ) : null}
        </aside>
      </div>
    </section>
  )
}
