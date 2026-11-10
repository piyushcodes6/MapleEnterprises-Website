import { NavLink, Outlet } from 'react-router-dom'
import { CompareTray } from './CompareTray'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/saved', label: 'Saved' },
  { to: '/services', label: 'Services' },
  { to: '/locations', label: 'Locations' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  return (
    <div className="site-shell">
      <header className="top-nav">
        <div className="container nav-wrap">
          <NavLink to="/" className="brand brand-block">
            <span className="brand-mark">ME</span>
            <span>
              <strong>Maple Enterprises</strong>
              <small>Real Estate. Made Personal.</small>
            </span>
          </NavLink>
          <nav className="main-nav" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/admin" className="nav-link">
              Admin Portal
            </NavLink>
          </nav>
          <div className="nav-utility-wrap" aria-label="Quick actions">
            <a className="nav-contact-pill" href="https://wa.me/919999999999" target="_blank" rel="noreferrer" aria-label="Contact on WhatsApp">
              <span className="contact-dot" aria-hidden="true"></span>
              +91 99999 99999
            </a>
            <NavLink className="nav-premium-cta" to="/contact">
              Schedule Consultation
            </NavLink>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <CompareTray />

      <footer className="site-footer">
        <div className="container footer-shell">
          <div className="footer-grid">
            <div className="footer-brand-col">
              <h3>Maple Enterprises</h3>
              <p>Professional real estate consultancy and curated property marketplace focused on trust, clarity, and guided decisions.</p>
              <div className="footer-trust-tags">
                <span>RERA Aligned</span>
                <span>Verified Inventory</span>
                <span>Advisory First</span>
              </div>
            </div>

            <div>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/properties">Properties</NavLink></li>
                <li><NavLink to="/saved">Saved</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/locations">Locations</NavLink></li>
              </ul>
            </div>

            <div>
              <h4>Company</h4>
              <ul className="footer-links">
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/admin">Admin Portal</NavLink></li>
                <li><a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">WhatsApp Support</a></li>
              </ul>
            </div>

            <div>
              <h4>Reach Us</h4>
              <ul className="footer-contact-list">
                <li>Delhi NCR Coverage</li>
                <li>+91 99999 99999</li>
                <li>advisory@mapleenterprises.in</li>
                <li>Mon - Sat | 9:30 AM - 7:30 PM</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <p>2026 Maple Enterprises. All rights reserved.</p>
            <div>
              <span>Privacy Policy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
