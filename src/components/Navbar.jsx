import { useState, useEffect } from 'react'
import VeloLogo from './VeloLogo'

const navLinks = [
  { label: 'שירותים',    href: '#services'     },
  { label: 'השיטה שלנו', href: '#process'      },
  { label: 'פרויקטים',   href: '#results-flow' },
  { label: 'צור קשר',   href: '#contact'      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
        /* Taller when at top so logo has room */
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
        {/* Logo — large when at top, shrinks on scroll */}
        <a href="#hero" className="flex items-center">
          <VeloLogo
            style={{
              height: scrolled ? '68px' : '116px',
              width: 'auto',
              transition: 'height 0.45s cubic-bezier(0.16,1,0.3,1)',
              objectFit: 'contain',
              mixBlendMode: 'screen',
            }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#8ba3c7] hover:text-white text-sm font-medium transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 right-0 h-px bg-gradient-to-l from-[#1a6fff] to-[#00d4ff] w-0 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact">
            <button className="btn-primary text-sm">
              <span>קבלו אבחון חינם</span>
            </button>
          </a>
        </div>

        {/* Mobile menu toggle */}
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
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#8ba3c7] hover:text-white text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            <button className="btn-primary w-full mt-2 text-sm">
              <span>קבלו אבחון חינם</span>
            </button>
          </a>
        </div>
      </div>
    </header>
  )
}
