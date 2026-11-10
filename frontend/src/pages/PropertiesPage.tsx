import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { properties } from '../data/properties'
import { useCompareProperties } from '../hooks/useCompareProperties'
import { useSavedProperties } from '../hooks/useSavedProperties'

export function PropertiesPage() {
  const { isSaved, savedCount, savedIds, toggleSaved } = useSavedProperties()
  const { canAddMore, compareCount, isCompared, maxCompare, toggleCompared } = useCompareProperties()
  const [searchParams, setSearchParams] = useSearchParams()
  const categories = ['All', 'Residential', 'Commercial', 'Plots/Land', 'Industrial'] as const
  const budgetOptions = ['Any', '50L - 1Cr', '1Cr - 2Cr', '2Cr+'] as const
  const locationOptions = ['All', 'Gurgaon', 'Noida', 'Greater Noida', 'Ghaziabad', 'Manesar', 'Sohna'] as const
  const sortOptions = ['featured', 'priceLow', 'priceHigh'] as const

  const getSafeValue = <T extends readonly string[]>(
    value: string | null,
    options: T,
    fallback: T[number],
  ): T[number] => {
    if (!value) {
      return fallback
    }

    return options.includes(value as T[number]) ? (value as T[number]) : fallback
  }

  const [category, setCategory] = useState<(typeof categories)[number]>(() =>
    getSafeValue(searchParams.get('type'), categories, 'All'),
  )
  const [query, setQuery] = useState(searchParams.get('q') ?? '')
  const [sortBy, setSortBy] = useState<(typeof sortOptions)[number]>(() =>
    getSafeValue(searchParams.get('sort'), sortOptions, 'featured'),
  )
  const [budget, setBudget] = useState<(typeof budgetOptions)[number]>(() =>
    getSafeValue(searchParams.get('budget'), budgetOptions, 'Any'),
  )
  const [location, setLocation] = useState<(typeof locationOptions)[number]>(() =>
    getSafeValue(searchParams.get('location'), locationOptions, 'All'),
  )
  const [showSavedOnly, setShowSavedOnly] = useState(() => searchParams.get('saved') === '1')
  const [currentPage, setCurrentPage] = useState(() => {
    const raw = Number(searchParams.get('page') ?? '1')
    return Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : 1
  })
  const pageSize = 6
  const isMountedRef = useRef(false)

  const extractPriceValue = (priceLabel: string) => {
    const cleaned = priceLabel.replace(/,/g, '')
    const match = cleaned.match(/(\d+(?:\.\d+)?)/)
    const value = match ? Number(match[1]) : 0

    if (cleaned.includes('Cr')) {
      return value * 100
    }

    if (cleaned.includes('L')) {
      return value
    }

    return value
  }

  const matchesBudget = (priceLabel: string) => {
    if (budget === 'Any') {
      return true
    }

    const valueInLakh = extractPriceValue(priceLabel)

    if (budget === '50L - 1Cr') {
      return valueInLakh >= 50 && valueInLakh <= 100
    }

    if (budget === '1Cr - 2Cr') {
      return valueInLakh >= 100 && valueInLakh <= 200
    }

    return valueInLakh > 200
  }

  const filtered = useMemo(() => {
    const savedSet = new Set(savedIds)
    const term = query.trim().toLowerCase()

    const matchesLocation = (value: string) => {
      if (location === 'All') {
        return true
      }

      return value.toLowerCase().includes(location.toLowerCase())
    }

    if (category === 'All') {
      return properties.filter((property) => {
        if (showSavedOnly && !savedSet.has(property.id)) {
          return false
        }

        if (!matchesBudget(property.priceLabel)) {
          return false
        }

        const searchText = `${property.title} ${property.locality} ${property.category}`

        if (!matchesLocation(searchText)) {
          return false
        }

        return !term || searchText.toLowerCase().includes(term)
      })
    }

    return properties.filter((property) => {
      if (showSavedOnly && !savedSet.has(property.id)) {
        return false
      }

      const inCategory = property.category === category
      if (!inCategory) {
        return false
      }

      if (!matchesBudget(property.priceLabel)) {
        return false
      }

      const searchText = `${property.title} ${property.locality} ${property.category}`

      if (!matchesLocation(searchText)) {
        return false
      }

      if (!term) {
        return true
      }

      return searchText.toLowerCase().includes(term)
    })
  }, [budget, category, location, query, savedIds, showSavedOnly])

  const visible = useMemo(() => {
    if (sortBy === 'featured') {
      return filtered
    }

    return [...filtered].sort((a, b) => {
      const aPrice = extractPriceValue(a.priceLabel)
      const bPrice = extractPriceValue(b.priceLabel)
      return sortBy === 'priceLow' ? aPrice - bPrice : bPrice - aPrice
    })
  }, [filtered, sortBy])

  const categoryCounts = useMemo(() => {
    return categories.reduce<Record<string, number>>((acc, item) => {
      if (item === 'All') {
        acc[item] = properties.length
        return acc
      }

      acc[item] = properties.filter((property) => property.category === item).length
      return acc
    }, {})
  }, [categories])

  const totalPages = Math.max(1, Math.ceil(visible.length / pageSize))

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true
      return
    }

    setCurrentPage(1)
  }, [budget, category, location, query, showSavedOnly, sortBy])

  useEffect(() => {
    const params = new URLSearchParams()

    if (category !== 'All') {
      params.set('type', category)
    }

    if (location !== 'All') {
      params.set('location', location)
    }

    if (budget !== 'Any') {
      params.set('budget', budget)
    }

    if (query.trim()) {
      params.set('q', query.trim())
    }

    if (sortBy !== 'featured') {
      params.set('sort', sortBy)
    }

    if (showSavedOnly) {
      params.set('saved', '1')
    }

    if (currentPage > 1) {
      params.set('page', String(currentPage))
    }

    setSearchParams(params, { replace: true })
  }, [budget, category, currentPage, location, query, setSearchParams, showSavedOnly, sortBy])

  const resetFilters = () => {
    setCategory('All')
    setLocation('All')
    setBudget('Any')
    setQuery('')
    setSortBy('featured')
    setShowSavedOnly(false)
    setCurrentPage(1)
  }

  const pageStart = (currentPage - 1) * pageSize
  const pageItems = visible.slice(pageStart, pageStart + pageSize)
  const spotlight = pageItems[0]
  const collection = pageItems.slice(1)
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <section className="section property-showcase-page">
      <div className="container property-showcase-shell">
        <div className="property-breadcrumb">Home &gt; Properties</div>

        <div className="property-showcase-hero">
          <div>
            <h1>Curated Property Collection</h1>
            <p>High-quality residential and commercial opportunities with complete clarity on pricing, status, and location.</p>
          </div>
          <div className="hero-kpis">
            <article>
              <strong>{properties.length}</strong>
              <span>Live Listings</span>
            </article>
            <article>
              <strong>4.9/5</strong>
              <span>Client Rating</span>
            </article>
            <article>
              <strong>24h</strong>
              <span>Response Time</span>
            </article>
          </div>
        </div>

        <div className="catalog-layout">
          <aside className="catalog-rail">
            <label className="catalog-search" htmlFor="propertySearch">
              Search
              <input
                id="propertySearch"
                type="search"
                placeholder="Project, locality, or type"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>

            <label className="catalog-sort" htmlFor="propertySort">
              Sort
              <select
                id="propertySort"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value as (typeof sortOptions)[number])}
              >
                <option value="featured">Featured</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
              </select>
            </label>

            <label className="catalog-sort" htmlFor="propertyLocation">
              Location
              <select
                id="propertyLocation"
                value={location}
                onChange={(event) => setLocation(event.target.value as (typeof locationOptions)[number])}
              >
                {locationOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>

            <div className="rail-block">
              <p>Budget</p>
              <div className="rail-chip-grid" role="tablist" aria-label="Budget filters">
                {budgetOptions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`rail-chip${budget === item ? ' active' : ''}`}
                    onClick={() => {
                      setBudget(item)
                      setCurrentPage(1)
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="rail-block">
              <p>Property Type</p>
              <div className="rail-type-list" role="tablist" aria-label="Property categories">
                {categories.map((item) => (
                  <button
                    key={item}
                    className={`rail-type${category === item ? ' active' : ''}`}
                    type="button"
                    onClick={() => {
                      setCategory(item)
                      setCurrentPage(1)
                    }}
                  >
                    <span>{item}</span>
                    <strong>{categoryCounts[item]}</strong>
                  </button>
                ))}
              </div>
            </div>

            <div className="rail-note">
              <h3>Why clients choose us</h3>
              <p>Verified inventory, transparent pricing, and consultative support until final closure.</p>
            </div>

            <div className="toolbar-actions">
              <button type="button" className="button secondary" onClick={resetFilters}>
                Reset filters
              </button>
            </div>
          </aside>

          <div className="catalog-content">
            <div className="property-meta-bar">
              <p>{visible.length} properties curated for your search</p>
              <div className="property-meta-right">
                <span className="property-meta-chip">Updated today</span>
                <button
                  type="button"
                  className={`property-meta-chip property-meta-toggle${showSavedOnly ? ' active' : ''}`}
                  onClick={() => setShowSavedOnly((current) => !current)}
                >
                  Saved Only
                </button>
                <span className="property-meta-chip saved">Saved: {savedCount}</span>
                <span className="property-meta-chip saved">Compare: {compareCount}/{maxCompare}</span>
              </div>
            </div>

            {spotlight ? (
              <article className="spotlight-card">
                <img src={spotlight.image} alt={spotlight.title} className="spotlight-image" />
                <div className="spotlight-body">
                  {(() => {
                    const compared = isCompared(spotlight.id)
                    const compareDisabled = !compared && !canAddMore

                    return (
                      <>
                  <span className="spotlight-label">Spotlight Listing</span>
                  <h2>{spotlight.title}</h2>
                  <p>{spotlight.locality} | {spotlight.status}</p>
                  <p className="spotlight-price">{spotlight.priceLabel}</p>
                  <p className="spotlight-secondary">{spotlight.pricePerSqft} | {spotlight.area}</p>
                  <div className="showcase-tags">
                    {spotlight.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="spotlight-actions">
                    <Link className="button" to={`/properties/${spotlight.id}`}>
                      View Spotlight
                    </Link>
                    <a
                      className="button secondary"
                      href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi, I am interested in ${spotlight.title} (${spotlight.id}). Please share details.`)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                  <button
                    type="button"
                    className={`button ghost compare-toggle${compared ? ' active' : ''}`}
                    onClick={() => toggleCompared(spotlight.id)}
                    disabled={compareDisabled}
                  >
                    {compared ? 'Remove from Compare' : compareDisabled ? 'Compare Limit Reached' : 'Add to Compare'}
                  </button>
                      </>
                    )
                  })()}
                </div>
              </article>
            ) : null}

            {collection.length > 0 ? (
              <div className="property-showcase-grid">
                {collection.map((property) => {
                  const saved = isSaved(property.id)
                  const compared = isCompared(property.id)
                  const compareDisabled = !compared && !canAddMore
                  const inquiryMessage = encodeURIComponent(`Hi, I am interested in ${property.title} (${property.id}). Please share details.`)

                  return (
                    <article key={property.id} className="showcase-card">
                    <div className="showcase-media">
                      <img src={property.image} alt={property.title} className="showcase-image" />
                      <span className="showcase-status">{property.status}</span>
                      <button
                        type="button"
                        className={`showcase-fav${saved ? ' active' : ''}`}
                        aria-label={`${saved ? 'Remove saved' : 'Save'} property`}
                        title={saved ? 'Remove from Saved' : 'Save to Shortlist'}
                        onClick={() => toggleSaved(property.id)}
                      >
                        {saved ? '✓' : '+'}
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
                      <p className="showcase-secondary">{property.pricePerSqft} | {property.area}</p>
                      <div className="showcase-tags">
                        {property.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <div className="showcase-actions">
                        <Link className="button" to={`/properties/${property.id}`}>
                          View Details
                        </Link>
                        <a className="button secondary" href={`https://wa.me/919999999999?text=${inquiryMessage}`} target="_blank" rel="noreferrer">
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
              <div className="property-empty">No properties found in this category.</div>
            )}

            {visible.length > pageSize ? (
              <div className="catalog-pagination" aria-label="Pagination">
                <button
                  type="button"
                  className="pagination-button"
                  onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                <div className="pagination-pages">
                  {pageNumbers.map((page) => (
                    <button
                      key={page}
                      type="button"
                      className={`pagination-page${page === currentPage ? ' active' : ''}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="pagination-button"
                  onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
