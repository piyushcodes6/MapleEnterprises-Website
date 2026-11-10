import { useCallback, useEffect, useMemo, useState } from 'react'
import { leadQueueStore, type LeadEnquiry, type LeadStage } from '../services/leadQueueStore'

type NewLeadPayload = Omit<
  LeadEnquiry,
  'id' | 'createdAt' | 'source' | 'stage' | 'owner'
>

export function useLeadQueue() {
  const [leads, setLeads] = useState<LeadEnquiry[]>(() => leadQueueStore.list())

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    leadQueueStore.save(leads)
  }, [leads])

  const addLead = useCallback((lead: NewLeadPayload) => {
    const payload: LeadEnquiry = {
      ...lead,
      id: `L-${Date.now()}`,
      createdAt: new Date().toISOString(),
      source: 'contact-page',
      stage: 'New (Web)',
      owner: 'Unassigned',
    }

    setLeads((current) => [payload, ...current])
  }, [])

  const queuedCount = useMemo(() => leads.length, [leads])
  
  const updateLead = useCallback((leadId: string, updates: Partial<Pick<LeadEnquiry, 'stage' | 'owner'>>) => {
    setLeads((current) =>
      current.map((lead) => (lead.id === leadId ? { ...lead, ...updates } : lead)),
    )
  }, [])

  const removeLead = useCallback((leadId: string) => {
    setLeads((current) => current.filter((lead) => lead.id !== leadId))
  }, [])

  const updateLeadStage = useCallback((leadId: string, stage: LeadStage) => {
    updateLead(leadId, { stage })
  }, [updateLead])

  const updateLeadOwner = useCallback((leadId: string, owner: string) => {
    updateLead(leadId, { owner: owner.trim() || 'Unassigned' })
  }, [updateLead])

  return {
    leads,
    queuedCount,
    addLead,
    removeLead,
    updateLeadOwner,
    updateLeadStage,
  }
}
