const kpis = [
  { label: 'New Leads', value: '148', delta: '+12% this week' },
  { label: 'Qualified Leads', value: '64', delta: '+7% this week' },
  { label: 'Site Visits', value: '29', delta: '8 scheduled today' },
  { label: 'Active Listings', value: '312', delta: '14 pending review' },
]

const alerts = [
  '9 leads need follow-up in next 2 hours',
  '4 listings missing mandatory legal documents',
  '3 site visits require consultant reassignment',
]

export function AdminDashboardPage() {
  return (
    <div className="admin-content-grid">
      <section className="admin-module-tabs">
        <span className="active">Dashboard</span>
        <span>Properties</span>
        <span>Leads</span>
        <span>Site Visits</span>
        <span>Documents</span>
      </section>

      <section className="admin-kpi-grid">
        {kpis.map((item) => (
          <article className="admin-card" key={item.label}>
            <p className="admin-kpi-label">{item.label}</p>
            <h2>{item.value}</h2>
            <p className="muted">{item.delta}</p>
          </article>
        ))}
      </section>

      <section className="admin-two-col">
        <article className="admin-card">
          <h3>Lead Funnel Snapshot</h3>
          <ul className="admin-list">
            <li>New: 148</li>
            <li>Contacted: 96</li>
            <li>Qualified: 64</li>
            <li>Visit Scheduled: 29</li>
            <li>Negotiation: 11</li>
          </ul>
        </article>

        <article className="admin-card">
          <h3>Priority Alerts</h3>
          <ul className="admin-list">
            {alerts.map((alert) => (
              <li key={alert}>{alert}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="admin-two-col">
        <article className="admin-card">
          <h3>Upcoming Site Visits</h3>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Lead</th>
                <th>Property</th>
                <th>Time</th>
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arjun Mehta</td>
                <td>MPE-101</td>
                <td>11:30 AM</td>
                <td>Riya S.</td>
              </tr>
              <tr>
                <td>Sana Khan</td>
                <td>MPE-203</td>
                <td>2:00 PM</td>
                <td>Rohit V.</td>
              </tr>
              <tr>
                <td>Deepak Arora</td>
                <td>MPE-412</td>
                <td>4:45 PM</td>
                <td>Nitin P.</td>
              </tr>
            </tbody>
          </table>
        </article>

        <article className="admin-card">
          <h3>Pending Listing Reviews</h3>
          <ul className="admin-list">
            <li>MPE-520: documents check pending</li>
            <li>MPE-534: media quality review</li>
            <li>MPE-541: commercials missing maintenance field</li>
            <li>MPE-552: legal compliance verification</li>
          </ul>
        </article>
      </section>
    </div>
  )
}
