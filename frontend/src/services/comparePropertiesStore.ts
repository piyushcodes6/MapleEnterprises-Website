import { readJson, writeJson } from './browserStorage'
import { dataMode } from './dataMode'

const LOCAL_STORAGE_KEY = 'mpe-compare-properties'
const API_STUB_STORAGE_KEY = 'mpe-api-compare-properties'

export const MAX_COMPARE = 3

export type ComparePropertiesStore = {
  list: () => string[]
  save: (ids: string[]) => void
}

const sanitizeIds = (value: unknown): string[] => {
  if (!Array.isArray(value)) {
    return []
  }

  return value
    .filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
    .slice(0, MAX_COMPARE)
}

export const localComparePropertiesStore: ComparePropertiesStore = {
  list: () => sanitizeIds(readJson<unknown>(LOCAL_STORAGE_KEY, [])),
  save: (ids) => writeJson(LOCAL_STORAGE_KEY, sanitizeIds(ids)),
}

export const apiStubComparePropertiesStore: ComparePropertiesStore = {
  list: () => sanitizeIds(readJson<unknown>(API_STUB_STORAGE_KEY, [])),
  save: (ids) => writeJson(API_STUB_STORAGE_KEY, sanitizeIds(ids)),
}

export const comparePropertiesStore =
  dataMode === 'api-stub' ? apiStubComparePropertiesStore : localComparePropertiesStore
