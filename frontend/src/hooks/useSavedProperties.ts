import { useCallback, useEffect, useMemo, useState } from 'react'
import { savedPropertiesStore } from '../services/savedPropertiesStore'

export function useSavedProperties() {
  const [savedIds, setSavedIds] = useState<string[]>(() => savedPropertiesStore.list())

  useEffect(() => {
    savedPropertiesStore.save(savedIds)
  }, [savedIds])

  const isSaved = useCallback(
    (propertyId: string) => savedIds.includes(propertyId),
    [savedIds],
  )

  const toggleSaved = useCallback((propertyId: string) => {
    setSavedIds((current) =>
      current.includes(propertyId)
        ? current.filter((id) => id !== propertyId)
        : [...current, propertyId],
    )
  }, [])

  const savedCount = useMemo(() => savedIds.length, [savedIds])

  return {
    savedIds,
    savedCount,
    isSaved,
    toggleSaved,
  }
}
