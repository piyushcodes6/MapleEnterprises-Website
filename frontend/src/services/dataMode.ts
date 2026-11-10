export type DataMode = 'local' | 'api-stub'

const rawMode = String(import.meta.env.VITE_DATA_MODE ?? 'local').toLowerCase()

export const dataMode: DataMode = rawMode === 'api' || rawMode === 'api-stub' ? 'api-stub' : 'local'
