import { useMemo, useState } from 'react'
import { useLeadQueue } from '../../hooks/useLeadQueue'
import { type LeadStage } from '../../services/leadQueueStore'

type PipelineLead = {
  id: string
  name: string
  requirement: string
  location: string
  stage: LeadStage
  owner: string
  source: 'Web' | 'CRM'
  createdAt?: string
  phone?: string
  budget?: string
  timeline?: string
}

const pipelineStages: LeadStage[] = [
  'New (Web)',
  'Contacted',
  'Qualified',
  'Visit Scheduled',
  'Converted',
  'Closed',
]

const leads: PipelineLead[] = [
  {
    id: 'CRM-001',
    name: 'Arjun Mehta',
    requirement: '3 BHK Residential',
    location: 'Sector 88 Gurgaon',
    stage: 'Qualified',
    owner: 'Riya S.',
    source: 'CRM',
    createdAt: '2026-11-05T11:10:00.000Z',
  },
  {
    id: 'CRM-002',
    name: 'Sana Khan',
    requirement: 'Commercial Office',
    location: 'Golf Course Extension',
    stage: 'Visit Scheduled',
    owner: 'Rohit V.',
    source: 'CRM',
    createdAt: '2026-11-06T09:35:00.000Z',
  },
  {
    id: 'CRM-003',
    name: 'Deepak Arora',
    requirement: 'Industrial Unit',
    location: 'IMT Manesar',
    stage: 'Contacted',
    owner: 'Nitin P.',
    source: 'CRM',
    createdAt: '2026-11-07T16:05:00.000Z',
  },
]

export function AdminLeadsPage() {
  const [activeStage, setActiveStage] = useState<'All Leads' | LeadStage>('All Leads')
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null)
  const {
    leads: queuedLeads,
    removeLead,
    updateLeadOwner,
    updateLeadStage,
  } = useLeadQueue()

  const combinedLeads = useMemo<PipelineLead[]>(
    () => [
      ...queuedLeads.map((lead) => ({
        id: lead.id,
        name: lead.name,
        requirement: lead.requirement,
        location: lead.preferredLocation,
        stage: lead.stage,
        owner: lead.owner,
        source: 'Web' as const,
        createdAt: lead.createdAt,
        phone: lead.phone,
        budget: lead.budget,
        timeline: lead.timeline,
      })),
      ...leads,
    ],
    [queuedLeads],
  )

  const visibleLeads = useMemo(() => {
    if (activeStage === 'All Leads') {
      return combinedLeads
    }

    return combinedLeads.filter((lead) => lead.stage === activeStage)
  }, [activeStage, combinedLeads])

  const selectedLead = useMemo(
    () => combinedLeads.find((lead) => lead.id === selectedLeadId) ?? null,
    [combinedLeads, selectedLeadId],
  )

  const formatLeadDateTime = (value?: string) => {
    if (!value) {
      return 'Not available'
    }

    const parsed = new Date(value)
    if (Number.isNaN(parsed.getTime())) {
      return 'Not available'
    }

    return parsed.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const handleArchiveLead = (leadId: string) => {
    removeLead(leadId)

    if (selectedLeadId === leadId) {
      setSelectedLeadId(null)
    }
  }

  const exportLeadsCsv = () => {
    if (visibleLeads.length === 0) {
      return
    }

    const header = ['Name', 'Requirement', 'Preferred Location', 'Stage', 'Owner', 'Source', 'Phone', 'Budget', 'Timeline']
    const rows = visibleLeads.map((lead) => [
      lead.name,
      lead.requirement,
      lead.location,
      lead.stage,
      lead.owner,
      lead.source,
      lead.phone ?? '-',
      lead.budget ?? '-',
      lead.timeline ?? '-',
    ])

    const toCsvCell = (value: string) => `"${value.replace(/"/g, '""')}"`
    const csvContent = [header, ...rows].map((row) => row.map(toCsvCell).join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const objectUrl = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = objectUrl
    anchor.download = 'mpe-leads-export.csv'
    anchor.click()
    URL.revokeObjectURL(objectUrl)
  }

  return (
    <section className="admin-card">
      <div className="admin-inline-tabs">
        <button
          type="button"
          className={activeStage === 'All Leads' ? 'active' : ''}
          onClick={() => setActiveStage('All Leads')}
        >
          All Leads
        </button>
        {pipelineStages.map((stage) => (
          <button
            key={stage}
            type="button"
            className={activeStage === stage ? 'active' : ''}
            onClick={() => setActiveStage(stage)}
          >
            {stage}
          </button>
        ))}
      </div>

      <div className="section-head">
        <div>
          <h2>Lead Management</h2>
          <p className="muted">Track and move leads through the conversion pipeline. Web enquiries are auto-queued and editable.</p>
        </div>
        <div className="lead-actions">
          <button className="button secondary" type="button" onClick={exportLeadsCsv}>
            Export CSV
          </button>
          <button className="button" type="button">Schedule Visit</button>
        </div>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Lead Name</th>
            <th>Requirement</th>
            <th>Preferred Location</th>
            <th>Stage</th>
            <th>Owner</th>
            <th>Source</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {visibleLeads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.requirement}</td>
              <td>{lead.location}</td>
              <td>
                {lead.source === 'Web' ? (
                  <select
                    className="admin-lead-stage-select"
                    value={lead.stage}
                    onChange={(event) => updateLeadStage(lead.id, event.target.value as LeadStage)}
                  >
                    {pipelineStages.map((stage) => (
                      <option key={stage} value={stage}>
                        {stage}
                      </option>
                    ))}
                  </select>
                ) : (
                  <span className="chip">{lead.stage}</span>
                )}
              </td>
              <td>
                {lead.source === 'Web' ? (
                  <input
                    className="admin-lead-owner-input"
                    type="text"
                    value={lead.owner}
                    onChange={(event) => updateLeadOwner(lead.id, event.target.value)}
                  />
                ) : (
                  lead.owner
                )}
              </td>
              <td>
                <span className={`admin-source-chip ${lead.source === 'Web' ? 'web' : 'crm'}`}>
                  {lead.source}
                </span>
              </td>
              <td>
                <div className="admin-lead-actions">
                  <button className="button ghost" type="button" onClick={() => setSelectedLeadId(lead.id)}>
                    Open
                  </button>
                  {lead.source === 'Web' ? (
                    <button className="button ghost" type="button" onClick={() => handleArchiveLead(lead.id)}>
                      Archive
                    </button>
                  ) : null}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedLead ? (
        <section className="admin-lead-drawer" aria-live="polite">
          <div className="admin-lead-drawer-head">
            <div>
              <h3>{selectedLead.name}</h3>
              <p className="muted">{selectedLead.requirement} • {selectedLead.location}</p>
            </div>
            <button className="button secondary" type="button" onClick={() => setSelectedLeadId(null)}>
              Close
            </button>
          </div>
          <div className="admin-lead-drawer-grid">
            <div>
              <strong>Lead ID</strong>
              <p>{selectedLead.id}</p>
            </div>
            <div>
              <strong>Source</strong>
              <p>{selectedLead.source === 'Web' ? 'Website Enquiry' : 'CRM Pipeline'}</p>
            </div>
            <div>
              <strong>Submitted At</strong>
              <p>{formatLeadDateTime(selectedLead.createdAt)}</p>
            </div>
            <div>
              <strong>Stage</strong>
              <p>{selectedLead.stage}</p>
            </div>
            <div>
              <strong>Owner</strong>
              <p>{selectedLead.owner}</p>
            </div>
            <div>
              <strong>Phone</strong>
              <p>{selectedLead.phone ?? 'Not available'}</p>
            </div>
            <div>
              <strong>Budget</strong>
              <p>{selectedLead.budget ?? 'Not specified'}</p>
            </div>
            <div>
              <strong>Timeline</strong>
              <p>{selectedLead.timeline ?? 'Not specified'}</p>
            </div>
            <div>
              <strong>Next Step</strong>
              <p>
                {selectedLead.stage === 'New (Web)'
                  ? 'Initial qualification call pending'
                  : 'Continue progress through pipeline'}
              </p>
            </div>
          </div>
        </section>
      ) : null}
    </section>
  )
}
