import { useCallback, useEffect, useMemo, useState } from 'react'
import { comparePropertiesStore, MAX_COMPARE } from '../services/comparePropertiesStore'

const sanitizeCompareIds = (ids: string[]) => {
  return ids
    .filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
    .slice(0, MAX_COMPARE)
}

export function useCompareProperties() {
  const [compareIds, setCompareIds] = useState<string[]>(() => comparePropertiesStore.list())

  useEffect(() => {
    comparePropertiesStore.save(compareIds)
  }, [compareIds])

  const isCompared = useCallback(
    (propertyId: string) => compareIds.includes(propertyId),
    [compareIds],
  )

  const toggleCompared = useCallback((propertyId: string) => {
    setCompareIds((current) => {
      if (current.includes(propertyId)) {
        return current.filter((id) => id !== propertyId)
      }

      if (current.length >= MAX_COMPARE) {
        return current
      }

      return [...current, propertyId]
    })
  }, [])

  const clearCompare = useCallback(() => {
    setCompareIds([])
  }, [])

  const replaceCompareIds = useCallback((ids: string[]) => {
    setCompareIds(sanitizeCompareIds(ids))
  }, [])

  const canAddMore = useMemo(() => compareIds.length < MAX_COMPARE, [compareIds])

  return {
    compareIds,
    compareCount: compareIds.length,
    maxCompare: MAX_COMPARE,
    canAddMore,
    isCompared,
    toggleCompared,
    clearCompare,
    replaceCompareIds,
  }
}
