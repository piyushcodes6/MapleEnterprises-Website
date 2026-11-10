import { readJson, writeJson } from './browserStorage'
import { dataMode } from './dataMode'

const LOCAL_STORAGE_KEY = 'mpe-enquiry-leads'
const API_STUB_STORAGE_KEY = 'mpe-api-enquiry-leads'

export type LeadStage = 'New (Web)' | 'Contacted' | 'Qualified' | 'Visit Scheduled' | 'Converted' | 'Closed'

export type LeadEnquiry = {
  id: string
  name: string
  phone: string
  requirement: string
  message: string
  preferredLocation: string
  budget: string
  timeline: string
  createdAt: string
  source: 'contact-page'
  stage: LeadStage
  owner: string
}

export type LeadQueueStore = {
  list: () => LeadEnquiry[]
  save: (leads: LeadEnquiry[]) => void
}

const isLeadEnquiry = (item: unknown): item is LeadEnquiry => {
  if (!item || typeof item !== 'object') {
    return false
  }

  const value = item as Record<string, unknown>

  return (
    typeof value.id === 'string' &&
    typeof value.name === 'string' &&
    typeof value.phone === 'string' &&
    typeof value.requirement === 'string' &&
    typeof value.message === 'string' &&
    typeof value.preferredLocation === 'string' &&
    typeof value.budget === 'string' &&
    typeof value.timeline === 'string' &&
    typeof value.createdAt === 'string' &&
    value.source === 'contact-page' &&
    typeof value.stage === 'string' &&
    typeof value.owner === 'string'
  )
}

const sanitizeLeads = (value: unknown): LeadEnquiry[] => {
  if (!Array.isArray(value)) {
    return []
  }

  return value.filter(isLeadEnquiry)
}

export const localLeadQueueStore: LeadQueueStore = {
  list: () => sanitizeLeads(readJson<unknown>(LOCAL_STORAGE_KEY, [])),
  save: (leads) => writeJson(LOCAL_STORAGE_KEY, leads),
}

export const apiStubLeadQueueStore: LeadQueueStore = {
  list: () => sanitizeLeads(readJson<unknown>(API_STUB_STORAGE_KEY, [])),
  save: (leads) => writeJson(API_STUB_STORAGE_KEY, leads),
}

export const leadQueueStore =
  dataMode === 'api-stub' ? apiStubLeadQueueStore : localLeadQueueStore
