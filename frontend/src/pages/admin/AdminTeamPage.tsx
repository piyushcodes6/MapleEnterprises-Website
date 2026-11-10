export function AdminTeamPage() {
  return (
    <section className="admin-card">
      <div className="admin-inline-tabs">
        <span className="active">Team Members</span>
        <span>Roles</span>
        <span>Permissions</span>
      </div>

      <div className="section-head">
        <div>
          <h2>Team and Permissions</h2>
          <p className="muted">Manage admin users, sales agents, and role-based permissions.</p>
        </div>
        <button className="button accent" type="button">Invite Team Member</button>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Region</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Riya Sharma</td>
            <td>Sales Manager</td>
            <td>Gurgaon</td>
            <td><span className="chip">Active</span></td>
            <td><button className="button ghost" type="button">Edit Role</button></td>
          </tr>
          <tr>
            <td>Rohit Verma</td>
            <td>Sales Agent</td>
            <td>Noida</td>
            <td><span className="chip">Active</span></td>
            <td><button className="button ghost" type="button">Edit Role</button></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
