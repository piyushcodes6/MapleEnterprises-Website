import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { properties } from '../data/properties'
import { useCompareProperties } from '../hooks/useCompareProperties'

export function ComparePropertiesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [shareFeedback, setShareFeedback] = useState('')
  const hasHydratedFromUrl = useRef(false)
  const { clearCompare, compareCount, compareIds, replaceCompareIds, toggleCompared } = useCompareProperties()

  const parseRate = (value: string) => {
    const numeric = Number(value.replace(/[^\d.]/g, ''))
    return Number.isFinite(numeric) ? numeric : 0
  }

  const parseAreaUpper = (value: string) => {
    const parts = value.match(/\d+/g)
    if (!parts || parts.length === 0) {
      return 0
    }

    return Number(parts[parts.length - 1])
  }

  useEffect(() => {
    if (hasHydratedFromUrl.current) {
      return
    }

    const idsRaw = searchParams.get('ids')
    if (!idsRaw) {
      hasHydratedFromUrl.current = true
      return
    }

    const ids = idsRaw
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)

    if (ids.length === 0) {
      hasHydratedFromUrl.current = true
      return
    }

    replaceCompareIds(ids)
    hasHydratedFromUrl.current = true
  }, [replaceCompareIds, searchParams])

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    const currentIds = params.get('ids') ?? ''
    const nextIds = compareIds.join(',')

    if (currentIds === nextIds) {
      return
    }

    if (compareIds.length > 0) {
      params.set('ids', nextIds)
    } else {
      params.delete('ids')
    }

    setSearchParams(params, { replace: true })
  }, [compareIds, searchParams, setSearchParams])

  const copyShareLink = async () => {
    if (compareIds.length === 0) {
      return
    }

    const url = `${window.location.origin}/compare?ids=${compareIds.join(',')}`

    try {
      await window.navigator.clipboard.writeText(url)
      setShareFeedback('Share link copied')
      window.setTimeout(() => setShareFeedback(''), 1800)
    } catch {
      setShareFeedback('Copy failed, please copy from address bar')
    }
  }

  const compareListings = useMemo(
    () =>
      compareIds
        .map((id) => properties.find((property) => property.id === id))
        .filter((property): property is NonNullable<typeof property> => Boolean(property)),
    [compareIds],
  )

  const bestValueRate = useMemo(() => {
    if (compareListings.length === 0) {
      return Number.POSITIVE_INFINITY
    }

    return Math.min(...compareListings.map((property) => parseRate(property.pricePerSqft)))
  }, [compareListings])

  const bestAreaUpper = useMemo(() => {
    if (compareListings.length === 0) {
      return 0
    }

    return Math.max(...compareListings.map((property) => parseAreaUpper(property.area)))
  }, [compareListings])

  return (
    <section className="section property-showcase-page">
      <div className="container property-showcase-shell">
        <div className="property-breadcrumb">Home &gt; Compare Properties</div>

        <div className="saved-page-head">
          <div>
            <h1>Compare Properties</h1>
            <p>Review shortlisted options side-by-side before taking the next advisory step.</p>
          </div>
          <div className="saved-page-actions">
            <span className="property-meta-chip saved">Comparing: {compareCount}</span>
            <button type="button" className="button secondary" onClick={copyShareLink} disabled={compareCount === 0}>
              Share Compare Link
            </button>
            <button type="button" className="button secondary" onClick={clearCompare} disabled={compareCount === 0}>
              Clear Compare
            </button>
          </div>
        </div>

        {shareFeedback ? <p className="compare-share-feedback">{shareFeedback}</p> : null}

        {compareListings.length >= 2 ? (
          <div className="compare-grid">
            {compareListings.map((property) => {
              const rate = parseRate(property.pricePerSqft)
              const areaUpper = parseAreaUpper(property.area)
              const isBestValue = rate === bestValueRate
              const isBestArea = areaUpper === bestAreaUpper
              const inquiryMessage = encodeURIComponent(
                `Hi, I want to compare and discuss ${property.title} (${property.id}). Please guide me.`,
              )

              return (
                <article key={property.id} className="compare-card">
                  <img src={property.image} alt={property.title} className="compare-image" />
                  <div className="compare-body">
                    <div className="showcase-top-meta">
                      <span className="showcase-category">{property.category}</span>
                      <span className="showcase-id">{property.id}</span>
                    </div>
                    <h3>{property.title}</h3>
                    <p className="showcase-location">{property.locality}</p>

                    <div className="compare-facts">
                      <div><span>Price</span><strong>{property.priceLabel}</strong></div>
                      <div className={isBestValue ? 'compare-fact-best' : ''}>
                        <span>Rate</span>
                        <strong>{property.pricePerSqft}{isBestValue ? ' (Best Value)' : ''}</strong>
                      </div>
                      <div className={isBestArea ? 'compare-fact-best' : ''}>
                        <span>Area</span>
                        <strong>{property.area}{isBestArea ? ' (Best Space)' : ''}</strong>
                      </div>
                      <div><span>Status</span><strong>{property.status}</strong></div>
                    </div>

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

                    <button type="button" className="button ghost compare-toggle" onClick={() => toggleCompared(property.id)}>
                      Remove from Compare
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="property-empty saved-empty">
            <h3>Select at least two properties</h3>
            <p>Add listings to compare from Properties, Saved, or Property Detail pages.</p>
            <div className="saved-page-actions">
              <Link className="button" to="/saved">
                Go to Saved
              </Link>
              <Link className="button secondary" to="/properties">
                Browse Listings
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
