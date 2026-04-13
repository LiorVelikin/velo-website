import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import VeloLogo from './VeloLogo'

const navLinks = [
  { label: 'שירותים',    hash: '#services',     path: '/services'  },
  { label: 'השיטה שלנו', hash: '#process',      path: '/#process'  },
  { label: 'פרויקטים',   hash: '#results-flow', path: '/#results-flow' },
  { label: 'עלינו',      hash: null,            path: '/about'     },
  { label: 'צור קשר',   hash: '#contact',      path: '/contact'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/' || location.pathname === ''

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (link, e) => {
    setMenuOpen(false)
    if (isHome && link.hash) {
      e.preventDefault()
      document.querySelector(link.hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
        height: scrolled ? '72px' : '108px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: scrolled ? 'rgba(6,11,20,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(160%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(160%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 0 rgba(26,111,255,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <VeloLogo
            style={{
              height: scrolled ? '68px' : '116px',
              width: 'auto',
              transition: 'height 0.45s cubic-bezier(0.16,1,0.3,1)',
              objectFit: 'contain',
              mixBlendMode: 'screen',
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const href = isHome && link.hash ? link.hash : link.path
            const isExternal = href.startsWith('#')
            return isExternal ? (
              <a
                key={link.label}
                href={href}
                onClick={(e) => handleNavClick(link, e)}
                className="text-[#8ba3c7] hover:text-white text-sm font-medium transition-colors duration-200 relative group"
                style={{ textDecoration: 'none' }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 right-0 h-px bg-gradient-to-l from-[#1a6fff] to-[#00d4ff] w-0 group-hover:w-full transition-all duration-300" />
              </a>
            ) : (
              <Link
                key={link.label}
                to={href}
                onClick={() => setMenuOpen(false)}
                className="text-[#8ba3c7] hover:text-white text-sm font-medium transition-colors duration-200 relative group"
                style={{ textDecoration: 'none' }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 right-0 h-px bg-gradient-to-l from-[#1a6fff] to-[#00d4ff] w-0 group-hover:w-full transition-all duration-300" />
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button className="btn-primary text-sm">
              <span>קבלו אבחון חינם</span>
            </button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="תפריט"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="nav-glass border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const href = isHome && link.hash ? link.hash : link.path
            const isExternal = href.startsWith('#')
            return isExternal ? (
              <a
                key={link.label}
                href={href}
                onClick={(e) => handleNavClick(link, e)}
                className="text-[#8ba3c7] hover:text-white text-base font-medium transition-colors"
                style={{ textDecoration: 'none' }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={href}
                onClick={() => setMenuOpen(false)}
                className="text-[#8ba3c7] hover:text-white text-base font-medium transition-colors"
                style={{ textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            )
          })}
          <Link to="/contact" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none' }}>
            <button className="btn-primary w-full mt-2 text-sm">
              <span>קבלו אבחון חינם</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
