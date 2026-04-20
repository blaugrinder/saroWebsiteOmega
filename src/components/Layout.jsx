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
  return `text-sm font-medium transition-colors duration-300 ${
    isActive ? 'text-medical-red' : 'text-slate-700 hover:text-medical-blue'
  }`
}

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <div className="border-b border-blue-100 bg-medical-blue text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs md:px-6">
          <p>Interventions, transports medicalises et assistances evenementielles sur tout Madagascar</p>
          <a href="tel:+261341234567" className="font-semibold text-blue-100 hover:text-white">
            +261 34 12 345 67
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-white/30 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <NavLink to="/" className="flex items-center gap-2 text-medical-blue">
            <Ambulance className="h-6 w-6" />
            <span className="text-base font-semibold tracking-tight">SARO Ambulances</span>
          </NavLink>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+261341234567"
              className="hidden items-center gap-2 rounded-full bg-medical-red px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5 hover:bg-red-700 md:inline-flex"
            >
              <PhoneCall className="h-4 w-4" />
              Appel d'urgence
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="rounded-lg border border-slate-200 bg-white p-2 text-medical-blue md:hidden"
              aria-label="Ouvrir le menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
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
              href="tel:+261341234567"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-medical-red px-4 py-2.5 text-sm font-semibold text-white"
            >
              <PhoneCall className="h-4 w-4" />
              Appel d'urgence
            </a>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200/70 bg-white py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 text-sm text-slate-700 md:grid-cols-2 md:px-6">
          <div className="space-y-2">
            <p className="font-semibold text-medical-blue">SARO - Services d'Ambulances et de Reanimation Operationnelle</p>
            <p>Ligne d'urgence : +261 34 12 345 67 - Service 24h/24 et 7j/7</p>
          </div>
          <div className="space-y-1 text-xs text-slate-500 md:text-right">
            <p>Agreee par MSANP - Ndeg96/SG/DGS/DDS/SMLDP du 16/05/2012</p>
            <p>Ndeg statistique : 85199 11 2009 0 10731</p>
            <p>NIF : 4000715654 du 24/01/2012</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
