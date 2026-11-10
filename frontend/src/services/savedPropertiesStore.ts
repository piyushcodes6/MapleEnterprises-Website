import { readJson, writeJson } from './browserStorage'
import { dataMode } from './dataMode'

const LOCAL_STORAGE_KEY = 'mpe-saved-properties'
const API_STUB_STORAGE_KEY = 'mpe-api-saved-properties'

export type SavedPropertiesStore = {
  list: () => string[]
  save: (ids: string[]) => void
}

const sanitizeIds = (value: unknown): string[] => {
  if (!Array.isArray(value)) {
    return []
  }

  return value.filter((item): item is string => typeof item === 'string')
}

export const localSavedPropertiesStore: SavedPropertiesStore = {
  list: () => sanitizeIds(readJson<unknown>(LOCAL_STORAGE_KEY, [])),
  save: (ids) => writeJson(LOCAL_STORAGE_KEY, ids),
}

export const apiStubSavedPropertiesStore: SavedPropertiesStore = {
  list: () => sanitizeIds(readJson<unknown>(API_STUB_STORAGE_KEY, [])),
  save: (ids) => writeJson(API_STUB_STORAGE_KEY, ids),
}

export const savedPropertiesStore =
  dataMode === 'api-stub' ? apiStubSavedPropertiesStore : localSavedPropertiesStore
