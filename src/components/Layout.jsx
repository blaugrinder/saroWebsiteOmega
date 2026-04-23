import { Ambulance, Menu, PhoneCall, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'A propos', to: '/about' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

function navClass({ isActive }) {
  return `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`
}

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="site-shell">
      <div className="site-topbar">
        <div className="site-container site-topbar__inner">
          <p>Interventions, transports medicalises et assistances evenementielles sur tout Madagascar</p>
          <a href="tel:+261340500034" className="site-topbar__phone">
            +261 34 05 000 34
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="site-container site-header__inner">
          <NavLink to="/" className="site-brand">
            <Ambulance className="site-brand__icon" />
            <span className="site-brand__name">SARO Ambulances</span>
          </NavLink>

          <nav className="site-nav site-nav--desktop">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="site-header__actions">
            <a
              href="tel:+261340500034"
              className="site-cta site-cta--desktop"
            >
              <PhoneCall className="site-cta__icon" />
              Appel d'urgence
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="site-menu-button"
              aria-label="Ouvrir le menu"
            >
              {mobileOpen ? <X className="site-menu-button__icon" /> : <Menu className="site-menu-button__icon" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="site-mobile-menu">
            <nav className="site-nav site-nav--mobile">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={navClass}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <a
              href="tel:+261340500034"
              className="site-cta site-cta--mobile"
            >
              <PhoneCall className="site-cta__icon" />
              Appel d'urgence
            </a>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-container site-footer__inner">
          <div className="site-footer__company">
            <p className="site-footer__title">SARO - Services d'Ambulances et de Reanimation Operationnelle</p>
            <p>Ligne d'urgence : +261 34 05 000 34 - Service 24h/24 et 7j/7</p>
          </div>
          <div className="site-footer__legal">
            <p>Agreee par MSANP - Ndeg96/SG/DGS/DDS/SMLDP du 16/05/2012</p>
            <p>Ndeg statistique : 85199 11 2009 0 10731</p>
            <p>NIF : 4000715654 du 24/01/2012</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
