const leads = [
  {
    name: 'Arjun Mehta',
    requirement: '3 BHK Residential',
    location: 'Sector 88 Gurgaon',
    stage: 'Qualified',
    owner: 'Riya S.',
  },
  {
    name: 'Sana Khan',
    requirement: 'Commercial Office',
    location: 'Golf Course Extension',
    stage: 'Visit Scheduled',
    owner: 'Rohit V.',
  },
  {
    name: 'Deepak Arora',
    requirement: 'Industrial Unit',
    location: 'IMT Manesar',
    stage: 'Contacted',
    owner: 'Nitin P.',
  },
]

export function AdminLeadsPage() {
  return (
    <section className="admin-card">
      <div className="admin-inline-tabs">
        <span className="active">All Leads</span>
        <span>New</span>
        <span>Contacted</span>
        <span>Qualified</span>
        <span>Site Visit</span>
        <span>Converted</span>
      </div>

      <div className="section-head">
        <div>
          <h2>Lead Management</h2>
          <p className="muted">Track and move leads through the conversion pipeline.</p>
        </div>
        <div className="lead-actions">
          <button className="button secondary" type="button">Assign</button>
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.name}>
              <td>{lead.name}</td>
              <td>{lead.requirement}</td>
              <td>{lead.location}</td>
              <td><span className="chip">{lead.stage}</span></td>
              <td>{lead.owner}</td>
              <td>
                <button className="button ghost" type="button">Open</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
