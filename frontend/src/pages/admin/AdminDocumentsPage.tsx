export function AdminDocumentsPage() {
  return (
    <section className="admin-card">
      <div className="admin-inline-tabs">
        <span className="active">RERA</span>
        <span>Legal</span>
        <span>Brochures</span>
        <span>Registry</span>
      </div>

      <div className="section-head">
        <div>
          <h2>Document Vault</h2>
          <p className="muted">Manage legal documents, RERA records, and brochure files by listing.</p>
        </div>
        <button className="button accent" type="button">Add Document</button>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Document Name</th>
            <th>Category</th>
            <th>Property</th>
            <th>Validity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RERA-Certificate-MPE101.pdf</td>
            <td>RERA</td>
            <td>MPE-101</td>
            <td>Valid</td>
            <td><button className="button ghost" type="button">Preview</button></td>
          </tr>
          <tr>
            <td>Registry-Pack-MPE203.zip</td>
            <td>Legal</td>
            <td>MPE-203</td>
            <td>Pending Review</td>
            <td><button className="button ghost" type="button">Review</button></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
