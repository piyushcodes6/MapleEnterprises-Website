export function AdminPropertiesPage() {
  return (
    <section className="admin-card">
      <div className="admin-inline-tabs">
        <span className="active">All Listings</span>
        <span>Draft</span>
        <span>Review</span>
        <span>Published</span>
      </div>

      <div className="section-head">
        <div>
          <h2>Property Management</h2>
          <p className="muted">Add, edit, publish, and track property listing readiness.</p>
        </div>
        <button className="button accent" type="button">New Listing</button>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Property ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Media</th>
            <th>Documents</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MPE-101</td>
            <td>Lakeview Residences Phase II</td>
            <td><span className="chip">Published</span></td>
            <td>24 assets</td>
            <td>Complete</td>
            <td><button className="button ghost" type="button">Edit</button></td>
          </tr>
          <tr>
            <td>MPE-203</td>
            <td>Maple Business Square</td>
            <td><span className="chip">Review</span></td>
            <td>18 assets</td>
            <td>Pending</td>
            <td><button className="button ghost" type="button">Review</button></td>
          </tr>
          <tr>
            <td>MPE-412</td>
            <td>Greenfield Plots Collective</td>
            <td><span className="chip">Draft</span></td>
            <td>9 assets</td>
            <td>Pending</td>
            <td><button className="button ghost" type="button">Complete</button></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
