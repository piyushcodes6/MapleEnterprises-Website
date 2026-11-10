export function AdminVisitsPage() {
  return (
    <section className="admin-card">
      <div className="admin-inline-tabs">
        <span className="active">Today</span>
        <span>This Week</span>
        <span>Reschedule</span>
        <span>Completed</span>
      </div>

      <div className="section-head">
        <div>
          <h2>Site Visits</h2>
          <p className="muted">Schedule, reassign, and track property visit outcomes.</p>
        </div>
        <button className="button" type="button">Schedule Visit</button>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Lead</th>
            <th>Property</th>
            <th>Consultant</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2026-11-09 11:30</td>
            <td>Arjun Mehta</td>
            <td>MPE-101</td>
            <td>Riya S.</td>
            <td><span className="chip">Confirmed</span></td>
          </tr>
          <tr>
            <td>2026-11-09 15:00</td>
            <td>Sana Khan</td>
            <td>MPE-203</td>
            <td>Rohit V.</td>
            <td><span className="chip">Reschedule</span></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
