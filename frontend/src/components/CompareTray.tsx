import { Link } from 'react-router-dom'
import { properties } from '../data/properties'
import { useCompareProperties } from '../hooks/useCompareProperties'

export function CompareTray() {
  const { clearCompare, compareCount, compareIds, maxCompare, toggleCompared } = useCompareProperties()

  if (compareCount === 0) {
    return null
  }

  const compareItems = compareIds
    .map((id) => properties.find((property) => property.id === id))
    .filter((property): property is NonNullable<typeof property> => Boolean(property))

  return (
    <div className="compare-tray" role="region" aria-label="Compare tray">
      <div className="container compare-tray-wrap">
        <div className="compare-tray-summary">
          <strong>Compare Tray</strong>
          <span>{compareCount}/{maxCompare} selected</span>
        </div>

        <div className="compare-tray-items">
          {compareItems.map((property) => (
            <button
              key={property.id}
              type="button"
              className="compare-tray-item"
              onClick={() => toggleCompared(property.id)}
              title={`Remove ${property.title} from compare`}
            >
              <span>{property.id}</span>
              <small>{property.title}</small>
            </button>
          ))}
        </div>

        <div className="compare-tray-actions">
          <button type="button" className="button ghost" onClick={clearCompare}>
            Clear
          </button>
          <Link className="button" to="/compare">
            Open Compare
          </Link>
        </div>
      </div>
    </div>
  )
}
