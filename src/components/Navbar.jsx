import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import VeloLogo from './VeloLogo'

const SERVICE_LINKS = [
  { label: 'עיצוב אתרים',     desc: 'אתרים ממוקדי המרות',      path: '/services/web-design',    color: '#4d9fff' },
  { label: 'דפי נחיתה',       desc: 'קליקים ללידים',            path: '/services/landing-pages', color: '#00c8ff' },
  { label: 'חנויות Shopify',  desc: 'איקומרס שמוכר',            path: '/services/ecommerce',     color: '#00d4b8' },
  { label: 'תוכן AI',         desc: 'הפקה פרימיום בקצב גבוה',   path: '/services/ai-content',    color: '#a07dff' },
  { label: 'ניהול קמפיינים',  desc: 'Meta ו-Google Ads',        path: '/services/paid-ads',      color: '#00d478' },
  { label: 'קידום SEO',       desc: 'להופיע ראשון בגוגל',       path: '/services/seo',           color: '#ffb347' },
]

const NAV_LINKS = [
  { label: 'שירותים',  hash: '#services' },
  { label: 'עבודות',   hash: '#case-studies' },
  { label: 'תהליך',    hash: '#process' },
  { label: 'הסוכנות',  hash: '#agency' },
  { label: 'שאלות',    hash: '#faq' },
]

const Chevron = ({ open }) => (
  <svg
    width="11" height="11" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
    style={{ transition: 'transform 0.25s ease', transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0 }}
  >
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

const NAV_LINK_COLOR  = 'rgba(230,240,255,0.6)'
const NAV_LINK_ACTIVE = '#E8F4FF'
const NAV_LINK_HOVER  = '#00d4ff'

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]       = useState(false)
  const [dropOpen,       setDropOpen]       = useState(false)
  const [mobileServOpen, setMobileServOpen] = useState(false)
  const [hoveredSvc,     setHoveredSvc]     = useState(null)
  const dropTimerRef = useRef(null)
  const location     = useLocation()
  const isHome       = location.pathname === '/' || location.pathname === ''

  useEffect(() => {
    setMenuOpen(false)
    setMobileServOpen(false)
    setDropOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleHashNav = (hash, e) => {
    if (isHome && hash) {
      e.preventDefault()
      setMenuOpen(false)
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openDrop  = () => { clearTimeout(dropTimerRef.current); setDropOpen(true)  }
  const closeDrop = () => { dropTimerRef.current = setTimeout(() => setDropOpen(false), 120) }

  const isServiceActive = location.pathname.startsWith('/services')

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
        height: scrolled ? '64px' : '88px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        background: scrolled
          ? 'rgba(6,11,24,0.85)'
          : menuOpen ? 'rgba(6,11,24,0.97)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(20px) saturate(160%)' : 'none',
        WebkitBackdropFilter: scrolled || menuOpen ? 'blur(20px) saturate(160%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">

        {/* Logo */}
        <Link to="/" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
          <VeloLogo style={{
            height: scrolled ? '52px' : '78px',
            width: 'auto',
            transition: 'height 0.45s cubic-bezier(0.16,1,0.3,1)',
            objectFit: 'contain',
          }} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" style={{ direction: 'rtl' }}>

          {/* Services dropdown */}
          <div style={{ position: 'relative' }} onMouseEnter={openDrop} onMouseLeave={closeDrop}>
            <button
              style={{
                display: 'flex', alignItems: 'center', gap: 5,
                padding: '6px 12px',
                color: isServiceActive ? NAV_LINK_HOVER : dropOpen ? NAV_LINK_HOVER : NAV_LINK_COLOR,
                fontSize: '0.85rem', fontWeight: 500,
                background: 'transparent',
                border: 'none', cursor: 'pointer', borderRadius: 8,
                transition: 'color 0.2s ease',
                whiteSpace: 'nowrap',
                fontFamily: 'inherit',
              }}
            >
              שירותים
              <Chevron open={dropOpen} />
            </button>

            {/* Dropdown */}
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 12px)',
              right: 0,
              width: 460,
              background: 'linear-gradient(160deg, rgba(10,18,42,0.98) 0%, rgba(6,10,24,0.99) 100%)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderTopColor: 'rgba(0,212,255,0.3)',
              borderRadius: 14,
              boxShadow: '0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,255,0.05)',
              backdropFilter: 'blur(24px)',
              overflow: 'hidden',
              opacity: dropOpen ? 1 : 0,
              transform: dropOpen ? 'translateY(0)' : 'translateY(-8px)',
              pointerEvents: dropOpen ? 'auto' : 'none',
              transition: 'opacity 0.2s ease, transform 0.2s cubic-bezier(0.16,1,0.3,1)',
              zIndex: 100,
            }}>
              <div style={{ padding: '14px 18px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="mono-label" style={{ margin: 0 }}>
                  <span className="num">·</span> <span>all services</span>
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, padding: '8px' }}>
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
                      background: hoveredSvc === svc.path ? `${svc.color}10` : 'transparent',
                      border: hoveredSvc === svc.path ? `1px solid ${svc.color}25` : '1px solid transparent',
                      transition: 'all 0.18s ease',
                      direction: 'rtl',
                    }}>
                      <div style={{
                        width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                        background: svc.color,
                        boxShadow: hoveredSvc === svc.path ? `0 0 12px ${svc.color}` : 'none',
                        transition: 'box-shadow 0.18s ease',
                      }} />
                      <div>
                        <p style={{
                          color: hoveredSvc === svc.path ? svc.color : '#e8edf6',
                          fontSize: '0.86rem', fontWeight: 600, margin: 0, lineHeight: 1.2,
                          transition: 'color 0.18s ease',
                        }}>
                          {svc.label}
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', margin: 0, marginTop: 2 }}>
                          {svc.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Section anchor links */}
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={isHome ? link.hash : `/${link.hash}`}
              onClick={(e) => isHome && handleHashNav(link.hash, e)}
              style={{
                padding: '6px 12px', color: NAV_LINK_COLOR,
                fontSize: '0.85rem', fontWeight: 500,
                textDecoration: 'none', borderRadius: 8,
                transition: 'color 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => e.currentTarget.style.color = NAV_LINK_HOVER}
              onMouseLeave={e => e.currentTarget.style.color = NAV_LINK_COLOR}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA — minimal hairline button matching Aurora */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#cta"
            onClick={(e) => { e.preventDefault(); document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '9px 18px',
              border: '1px solid rgba(0,212,255,0.35)',
              background: 'rgba(0,212,255,0.06)',
              borderRadius: 100,
              color: '#E8F4FF',
              fontSize: '0.82rem',
              fontWeight: 500,
              fontFamily: 'inherit',
              transition: 'all 0.25s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(0,212,255,0.12)'
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.55)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(0,212,255,0.06)'
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)'
            }}
          >
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00d4ff', boxShadow: '0 0 8px #00d4ff' }} />
            <span>שיחת אבחון</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="תפריט"
          style={{ flexShrink: 0, background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span className={`block w-6 h-0.5 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ background: 'rgba(255,255,255,0.8)' }} />
          <span className={`block w-6 h-0.5 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: 'rgba(255,255,255,0.8)' }} />
          <span className={`block w-6 h-0.5 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: 'rgba(255,255,255,0.8)' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: menuOpen ? '600px' : 0,
          transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div style={{
          background: 'rgba(6,11,24,0.98)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '12px 24px 20px',
          display: 'flex', flexDirection: 'column', gap: 2,
          direction: 'rtl',
        }}>

          {/* Services accordion */}
          <div>
            <button
              onClick={() => setMobileServOpen(v => !v)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 8px',
                color: mobileServOpen || isServiceActive ? NAV_LINK_HOVER : NAV_LINK_ACTIVE,
                fontSize: '1rem', fontWeight: 500,
                background: 'none', border: 'none', cursor: 'pointer',
                borderBottom: mobileServOpen ? 'none' : '1px solid var(--hairline)',
                direction: 'rtl',
                fontFamily: 'inherit',
              }}
            >
              <span>שירותים</span>
              <Chevron open={mobileServOpen} />
            </button>

            <div style={{
              maxHeight: mobileServOpen ? '500px' : 0,
              overflow: 'hidden',
              transition: 'max-height 0.3s ease',
            }}>
              <div style={{
                paddingRight: 12, paddingBottom: 8,
                display: 'flex', flexDirection: 'column', gap: 2,
                borderBottom: '1px solid var(--hairline)',
                borderRight: '2px solid rgba(0,212,255,0.2)',
              }}>
                {SERVICE_LINKS.map((svc) => (
                  <Link key={svc.path} to={svc.path} onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 8px', direction: 'rtl' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: svc.color, flexShrink: 0 }} />
                      <div>
                        <p style={{ color: NAV_LINK_ACTIVE, fontSize: '0.88rem', fontWeight: 500, margin: 0 }}>{svc.label}</p>
                        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', margin: 0 }}>{svc.desc}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={isHome ? link.hash : `/${link.hash}`}
              onClick={(e) => { isHome && handleHashNav(link.hash, e); setMenuOpen(false) }}
              style={{
                padding: '14px 8px', color: NAV_LINK_ACTIVE,
                fontSize: '1rem', fontWeight: 500,
                textDecoration: 'none', display: 'block',
                borderBottom: '1px solid var(--hairline)',
              }}
            >
              {link.label}
            </a>
          ))}

          <div style={{ paddingTop: 16 }}>
            <a
              href="#cta"
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                textDecoration: 'none', width: '100%',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '14px 22px',
                border: '1px solid rgba(0,212,255,0.4)',
                background: 'rgba(0,212,255,0.08)',
                borderRadius: 100, color: '#E8F4FF', fontSize: '0.95rem', fontWeight: 500,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00d4ff', boxShadow: '0 0 10px #00d4ff' }} />
              <span>שיחת אבחון</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
