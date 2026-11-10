export function AdminMediaPage() {
  return (
    <section className="admin-card">
      <div className="admin-inline-tabs">
        <span className="active">Photos</span>
        <span>Videos</span>
        <span>Brochures</span>
      </div>

      <div className="section-head">
        <div>
          <h2>Media Manager</h2>
          <p className="muted">Upload photos, videos, and brochures linked to property listings.</p>
        </div>
        <button className="button accent" type="button">Upload Media</button>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Property</th>
            <th>Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tower-front-elevation.jpg</td>
            <td>MPE-101</td>
            <td>Image</td>
            <td><span className="chip">Published</span></td>
            <td><button className="button ghost" type="button">Manage</button></td>
          </tr>
          <tr>
            <td>commercial-walkthrough.mp4</td>
            <td>MPE-203</td>
            <td>Video</td>
            <td><span className="chip">Review</span></td>
            <td><button className="button ghost" type="button">Review</button></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
