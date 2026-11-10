import { NavLink, Outlet } from 'react-router-dom'

const adminNav = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/properties', label: 'Properties' },
  { to: '/admin/leads', label: 'Leads' },
  { to: '/admin/visits', label: 'Site Visits' },
  { to: '/admin/media', label: 'Media' },
  { to: '/admin/documents', label: 'Documents' },
  { to: '/admin/team', label: 'Team' },
]

export function AdminLayout() {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <NavLink to="/" className="admin-brand">
          Maple Enterprises
        </NavLink>
        <p className="admin-meta">Admin Portal</p>

        <nav className="admin-nav" aria-label="Admin">
          {adminNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `admin-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <section className="admin-main">
        <header className="admin-header">
          <div>
            <h1>Operations Console</h1>
            <p className="muted">Manage listings, leads, and site visits with real-time visibility.</p>
          </div>
          <div className="admin-header-actions">
            <button className="button secondary" type="button">Export Report</button>
            <button className="button accent" type="button">Add Property</button>
          </div>
        </header>

        <Outlet />
      </section>
    </div>
  )
}
