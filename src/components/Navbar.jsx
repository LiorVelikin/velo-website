import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import VeloLogo from './VeloLogo'

/* ── Service sub-links (dropdown) ── */
const SERVICE_LINKS = [
  {
    label: 'עיצוב אתרים', desc: 'אתרים ממוקדי המרות',
    path: '/services/web-design', color: '#4d9fff',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    label: 'דפי נחיתה', desc: 'קליקים ללידים',
    path: '/services/landing-pages', color: '#00c8ff',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 9h20M9 21V9"/>
      </svg>
    ),
  },
  {
    label: 'חנויות Shopify', desc: 'איקומרס שמוכר',
    path: '/services/ecommerce', color: '#00d4b8',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
  },
  {
    label: 'תוכן AI', desc: 'הפקה פרימיום בקצב גבוה',
    path: '/services/ai-content', color: '#a07dff',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.5 4.6 4.5 1-4.5 1-1.5 4.6-1.5-4.6-4.5-1 4.5-1L12 3z"/>
        <path d="M5.5 19.5l.5-1.5 1.5-.5-1.5-.5-.5-1.5-.5 1.5-1.5.5 1.5.5.5 1.5z"/>
      </svg>
    ),
  },
  {
    label: 'ניהול קמפיינים', desc: 'Meta ו-Google Ads',
    path: '/services/paid-ads', color: '#00d478',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    label: 'קידום SEO', desc: 'להופיע ראשון בגוגל',
    path: '/services/seo', color: '#ffb347',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
  },
]

/* ── Regular nav links (non-dropdown) ── */
const NAV_LINKS = [
  { label: 'בית',        path: '/',          hash: null             },
  { label: 'תיק עבודות', path: '/',          hash: '#case-studies'  },
  { label: 'איך עובדים', path: '/',          hash: '#process'       },
  { label: 'צור קשר',   path: '/contact',   hash: null             },
]

/* ── Chevron icon ── */
const Chevron = ({ open }) => (
  <svg
    width="11" height="11" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
    style={{ transition: 'transform 0.25s ease', transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0 }}
  >
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]       = useState(false)
  const [dropOpen,       setDropOpen]       = useState(false)  // desktop hover state
  const [mobileServOpen, setMobileServOpen] = useState(false)  // mobile services accordion
  const [hoveredSvc,     setHoveredSvc]     = useState(null)
  const dropTimerRef = useRef(null)
  const location     = useLocation()
  const isHome       = location.pathname === '/' || location.pathname === ''

  /* ── Close menu on route change ── */
  useEffect(() => {
    setMenuOpen(false)
    setMobileServOpen(false)
    setDropOpen(false)
  }, [location.pathname])

  /* ── Scroll detection ── */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  /* ── Smooth-scroll on home hash links ── */
  const handleHashNav = (hash, e) => {
    if (isHome && hash) {
      e.preventDefault()
      setMenuOpen(false)
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  /* ── Desktop dropdown — slight delay prevents flash on fast mouse-pass ── */
  const openDrop  = () => { clearTimeout(dropTimerRef.current); setDropOpen(true)  }
  const closeDrop = () => { dropTimerRef.current = setTimeout(() => setDropOpen(false), 120) }

  const isServiceActive = location.pathname.startsWith('/services')

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
        height: scrolled ? '68px' : '100px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        background: scrolled
          ? 'rgba(224,231,244,0.92)'
          : menuOpen ? 'rgba(224,231,244,0.97)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(24px) saturate(160%)' : 'none',
        WebkitBackdropFilter: scrolled || menuOpen ? 'blur(24px) saturate(160%)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(10,15,30,0.08)'
          : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 0 rgba(26,111,255,0.06), 0 4px 16px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">

        {/* ── Logo ── */}
        <Link to="/" style={{ flexShrink: 0 }}>
          <VeloLogo style={{
            height: scrolled ? '62px' : '100px',
            width: 'auto',
            transition: 'height 0.45s cubic-bezier(0.16,1,0.3,1)',
            objectFit: 'contain',
          }} />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-1" style={{ direction: 'rtl' }}>

          {/* Home */}
          <Link
            to="/"
            style={{
              padding: '6px 12px',
              color: location.pathname === '/' ? '#0a0f1e' : '#4a5d7a',
              fontSize: '0.875rem', fontWeight: 600,
              textDecoration: 'none', borderRadius: 8,
              transition: 'color 0.2s ease, background 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#1a6fff'; e.currentTarget.style.background = 'rgba(26,111,255,0.06)' }}
            onMouseLeave={e => {
              e.currentTarget.style.color = location.pathname === '/' ? '#0a0f1e' : '#4a5d7a'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            בית
          </Link>

          {/* Services dropdown trigger */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={openDrop}
            onMouseLeave={closeDrop}
          >
            <button
              style={{
                display: 'flex', alignItems: 'center', gap: 5,
                padding: '6px 12px',
                color: isServiceActive ? '#1a6fff' : dropOpen ? '#1a6fff' : '#4a5d7a',
                fontSize: '0.875rem', fontWeight: 600,
                background: dropOpen ? 'rgba(26,111,255,0.06)' : 'transparent',
                border: 'none', cursor: 'pointer', borderRadius: 8,
                transition: 'color 0.2s ease, background 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              שירותים
              <Chevron open={dropOpen} />
            </button>

            {/* Dropdown panel */}
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 12px)',
              right: 0,
              width: 480,
              background: 'linear-gradient(160deg, rgba(10,18,42,0.98) 0%, rgba(6,10,24,0.99) 100%)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderTopColor: 'rgba(26,111,255,0.35)',
              borderRadius: 16,
              boxShadow: '0 8px 40px rgba(0,0,0,0.45), 0 24px 64px rgba(0,0,0,0.25)',
              backdropFilter: 'blur(24px)',
              overflow: 'hidden',
              opacity: dropOpen ? 1 : 0,
              transform: dropOpen ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.98)',
              pointerEvents: dropOpen ? 'auto' : 'none',
              transition: 'opacity 0.2s ease, transform 0.2s cubic-bezier(0.16,1,0.3,1)',
              zIndex: 100,
            }}>

              {/* Top accent */}
              <div style={{
                position: 'absolute', top: 0, left: '10%', right: '10%', height: 2,
                background: 'linear-gradient(90deg, transparent, rgba(26,111,255,0.7), rgba(0,212,255,0.5), transparent)',
              }} />

              {/* Header */}
              <div style={{
                padding: '16px 20px 12px',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}>
                <p style={{ color: '#4d9fff', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', margin: 0 }}>
                  כל השירותים שלנו
                </p>
              </div>

              {/* 2×3 grid of services */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: 2, padding: '8px',
              }}>
                {SERVICE_LINKS.map((svc) => (
                  <Link
                    key={svc.path}
                    to={svc.path}
                    style={{ textDecoration: 'none' }}
                    onMouseEnter={() => setHoveredSvc(svc.path)}
                    onMouseLeave={() => setHoveredSvc(null)}
                  >
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '12px 14px', borderRadius: 10,
                      background: hoveredSvc === svc.path ? `${svc.color}14` : 'transparent',
                      border: hoveredSvc === svc.path
                        ? `1px solid ${svc.color}30`
                        : '1px solid transparent',
                      transition: 'all 0.18s ease',
                      direction: 'rtl',
                    }}>
                      <div style={{
                        width: 34, height: 34, borderRadius: 9, flexShrink: 0,
                        background: `${svc.color}18`,
                        border: `1px solid ${svc.color}35`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: svc.color,
                        boxShadow: hoveredSvc === svc.path ? `0 0 12px ${svc.color}30` : 'none',
                        transition: 'box-shadow 0.18s ease',
                      }}>
                        {svc.icon}
                      </div>
                      <div>
                        <p style={{
                          color: hoveredSvc === svc.path ? svc.color : '#e8edf6',
                          fontSize: '0.84rem', fontWeight: 700, margin: 0, lineHeight: 1.2,
                          transition: 'color 0.18s ease',
                        }}>
                          {svc.label}
                        </p>
                        <p style={{ color: '#6a80a0', fontSize: '0.7rem', margin: 0, marginTop: 2 }}>
                          {svc.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Footer link to all services */}
              <div style={{
                padding: '10px 20px 14px',
                borderTop: '1px solid rgba(255,255,255,0.07)',
              }}>
                <Link to="/services" style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    color: '#4d9fff', fontSize: '0.78rem', fontWeight: 700,
                    padding: '6px 0',
                    transition: 'opacity 0.2s ease',
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <span>לכל השירותים</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 5l-7 7 7 7"/>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Other nav links */}
          {NAV_LINKS.filter(l => l.label !== 'בית').map((link) => {
            const href     = isHome && link.hash ? link.hash : link.path
            const isActive = !link.hash && location.pathname === link.path
            return link.hash && isHome ? (
              <a
                key={link.label}
                href={href}
                onClick={(e) => handleHashNav(link.hash, e)}
                style={{
                  padding: '6px 12px', color: '#4a5d7a',
                  fontSize: '0.875rem', fontWeight: 600,
                  textDecoration: 'none', borderRadius: 8,
                  transition: 'color 0.2s ease, background 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#1a6fff'; e.currentTarget.style.background = 'rgba(26,111,255,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#4a5d7a'; e.currentTarget.style.background = 'transparent' }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                style={{
                  padding: '6px 12px',
                  color: isActive ? '#1a6fff' : '#4a5d7a',
                  fontSize: '0.875rem', fontWeight: 600,
                  textDecoration: 'none', borderRadius: 8,
                  transition: 'color 0.2s ease, background 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#1a6fff'; e.currentTarget.style.background = 'rgba(26,111,255,0.06)' }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = isActive ? '#1a6fff' : '#4a5d7a'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/972544286018?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9C%D7%99%D7%90%D7%95%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%94%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D%20%D7%A9%D7%9C%D7%9A"
            target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '9px 20px',
              background: '#25d366', color: '#fff',
              border: 'none', borderRadius: 10,
              fontFamily: 'Heebo, sans-serif',
              fontWeight: 700, fontSize: '0.84rem', cursor: 'pointer',
              boxShadow: '0 2px 12px rgba(37,211,102,0.3)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 12px rgba(37,211,102,0.3)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>דברו עם ליאור</span>
            </button>
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="תפריט"
          style={{ flexShrink: 0 }}
        >
          <span className={`block w-6 h-0.5 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ background: '#0a0f1e' }} />
          <span className={`block w-6 h-0.5 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: '#0a0f1e' }} />
          <span className={`block w-6 h-0.5 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: '#0a0f1e' }} />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: menuOpen ? '600px' : 0,
          transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div style={{
          background: 'rgba(224,231,244,0.98)',
          borderTop: '1px solid rgba(10,15,30,0.08)',
          padding: '12px 24px 20px',
          display: 'flex', flexDirection: 'column', gap: 2,
          direction: 'rtl',
        }}>

          {/* Home */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            style={{
              padding: '12px 8px', color: '#0a0f1e',
              fontSize: '1rem', fontWeight: 600,
              textDecoration: 'none', display: 'block',
              borderBottom: '1px solid rgba(10,15,30,0.06)',
            }}
          >
            בית
          </Link>

          {/* Services accordion */}
          <div>
            <button
              onClick={() => setMobileServOpen(v => !v)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 8px',
                color: mobileServOpen || isServiceActive ? '#1a6fff' : '#0a0f1e',
                fontSize: '1rem', fontWeight: 600,
                background: 'none', border: 'none', cursor: 'pointer',
                borderBottom: mobileServOpen ? 'none' : '1px solid rgba(10,15,30,0.06)',
                direction: 'rtl',
              }}
            >
              <span>שירותים</span>
              <Chevron open={mobileServOpen} />
            </button>

            {/* Service sub-items */}
            <div style={{
              maxHeight: mobileServOpen ? '500px' : 0,
              overflow: 'hidden',
              transition: 'max-height 0.3s ease',
            }}>
              <div style={{
                paddingRight: 12, paddingBottom: 8,
                display: 'flex', flexDirection: 'column', gap: 2,
                borderBottom: '1px solid rgba(10,15,30,0.06)',
                borderRight: '2px solid rgba(26,111,255,0.25)',
              }}>
                {SERVICE_LINKS.map((svc) => (
                  <Link
                    key={svc.path}
                    to={svc.path}
                    onClick={() => setMenuOpen(false)}
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '9px 8px', borderRadius: 8,
                      direction: 'rtl',
                    }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: 7, flexShrink: 0,
                        background: `${svc.color}18`,
                        border: `1px solid ${svc.color}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: svc.color,
                      }}>
                        {svc.icon}
                      </div>
                      <div>
                        <p style={{ color: '#0a0f1e', fontSize: '0.88rem', fontWeight: 600, margin: 0 }}>
                          {svc.label}
                        </p>
                        <p style={{ color: '#6a80a0', fontSize: '0.72rem', margin: 0 }}>
                          {svc.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    textDecoration: 'none', padding: '8px 8px',
                    color: '#4d9fff', fontSize: '0.8rem', fontWeight: 700,
                  }}
                >
                  לכל השירותים ←
                </Link>
              </div>
            </div>
          </div>

          {/* Other links */}
          {NAV_LINKS.filter(l => l.label !== 'בית').map((link) => {
            const href = isHome && link.hash ? link.hash : link.path
            return link.hash && isHome ? (
              <a
                key={link.label}
                href={href}
                onClick={(e) => handleHashNav(link.hash, e)}
                style={{
                  padding: '12px 8px', color: '#0a0f1e',
                  fontSize: '1rem', fontWeight: 600,
                  textDecoration: 'none', display: 'block',
                  borderBottom: '1px solid rgba(10,15,30,0.06)',
                }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '12px 8px', color: '#0a0f1e',
                  fontSize: '1rem', fontWeight: 600,
                  textDecoration: 'none', display: 'block',
                  borderBottom: '1px solid rgba(10,15,30,0.06)',
                }}
              >
                {link.label}
              </Link>
            )
          })}

          {/* Mobile CTA */}
          <div style={{ paddingTop: 12 }}>
            <Link to="/contact" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem' }}>
                <span>קבלו אבחון חינם</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
