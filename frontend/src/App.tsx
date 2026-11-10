import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminLayout } from './components/AdminLayout'
import { Layout } from './components/Layout'
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage'
import { AdminDocumentsPage } from './pages/admin/AdminDocumentsPage'
import { AdminLeadsPage } from './pages/admin/AdminLeadsPage'
import { AdminMediaPage } from './pages/admin/AdminMediaPage'
import { AdminPropertiesPage } from './pages/admin/AdminPropertiesPage'
import { AdminTeamPage } from './pages/admin/AdminTeamPage'
import { AdminVisitsPage } from './pages/admin/AdminVisitsPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { LocationsPage } from './pages/LocationsPage'
import { PropertiesPage } from './pages/PropertiesPage'
import { PropertyDetailPage } from './pages/PropertyDetailPage'
import { ServicesPage } from './pages/ServicesPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/properties/:propertyId" element={<PropertyDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboardPage />} />
        <Route path="properties" element={<AdminPropertiesPage />} />
        <Route path="leads" element={<AdminLeadsPage />} />
        <Route path="visits" element={<AdminVisitsPage />} />
        <Route path="media" element={<AdminMediaPage />} />
        <Route path="documents" element={<AdminDocumentsPage />} />
        <Route path="team" element={<AdminTeamPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
