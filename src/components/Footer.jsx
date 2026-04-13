import { Link } from 'react-router-dom'
import VeloLogo from './VeloLogo'

const InstagramIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
const FacebookIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
const LinkedInIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
const TikTokIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.51a8.16 8.16 0 004.77 1.52V7.58a4.85 4.85 0 01-1-.89z"/></svg>

const socials = [
  { name: 'Instagram', icon: <InstagramIcon />, href: 'https://instagram.com' },
  { name: 'Facebook',  icon: <FacebookIcon />,  href: 'https://facebook.com' },
  { name: 'LinkedIn',  icon: <LinkedInIcon />,  href: 'https://linkedin.com' },
  { name: 'TikTok',    icon: <TikTokIcon />,    href: 'https://tiktok.com'   },
]

const servicesLinks = [
  { label: 'עיצוב אתרים',    to: '/services/web-design'    },
  { label: 'דפי נחיתה',      to: '/services/landing-pages' },
  { label: 'חנויות Shopify',  to: '/services/ecommerce'     },
  { label: 'יצירת תוכן AI',  to: '/services/ai-content'    },
  { label: 'ניהול קמפיינים', to: '/services/paid-ads'      },
  { label: 'קידום SEO',      to: '/services/seo'           },
]

const pageLinks = [
  { label: 'ראשי',           to: '/'        },
  { label: 'כל השירותים',   to: '/services' },
  { label: 'עלינו',          to: '/about'   },
  { label: 'צור קשר',        to: '/contact' },
]

const colTitle = (title) => (
  <h4 style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 20 }}>{title}</h4>
)

const linkStyle = { color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', textDecoration: 'none', display: 'block', marginBottom: 10, transition: 'color 0.2s ease' }

export default function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden', direction: 'rtl' }}>
      <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(48px,6vw,80px) clamp(16px,4vw,48px) 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'clamp(32px, 4vw, 56px)', marginBottom: 56 }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <VeloLogo style={{ height: 44, width: 'auto', mixBlendMode: 'screen' }} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.83rem', lineHeight: 1.65, marginBottom: 24, maxWidth: 220 }}>
              בונים עסקים דיגיטליים מאפס ועד תוצאות. שיטת Velocity.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                  style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.45)', transition: 'all 0.2s ease', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#4d9fff'; e.currentTarget.style.background = 'rgba(26,111,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(26,111,255,0.3)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            {colTitle('שירותים')}
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {servicesLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} style={linkStyle}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            {colTitle('ניווט')}
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {pageLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} style={linkStyle}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            {colTitle('צור קשר')}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
              {[
                { icon: '📞', text: '050-0000000' },
                { icon: '✉️', text: 'hello@velo-studio.com' },
                { icon: '📍', text: 'ישראל' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: '0.8rem' }}>{item.icon}</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>{item.text}</span>
                </div>
              ))}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', marginBottom: 12, fontWeight: 600 }}>רוצים לדבר עכשיו?</p>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ fontSize: '0.82rem', padding: '10px 20px' }}>
                <span>קבלו אבחון חינם</span>
              </button>
            </Link>
          </div>

        </div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 24 }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 8, paddingBottom: 8 }}>
          <p style={{ color: 'rgba(255,255,255,0.22)', fontSize: '0.72rem' }}>© 2026 VELO Studio. כל הזכויות שמורות.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e', animation: 'orbPulse 2s ease-in-out infinite' }} />
            <span style={{ color: 'rgba(255,255,255,0.22)', fontSize: '0.72rem' }}>כל המערכות פעילות</span>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden', lineHeight: 0 }}>
        <div style={{ textAlign: 'center', fontWeight: 900, pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap', fontSize: 'clamp(60px, 14vw, 180px)', letterSpacing: '-0.04em', lineHeight: 0.9, background: 'linear-gradient(180deg, rgba(26,111,255,0.09) 0%, rgba(0,212,255,0.025) 60%, transparent 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '-0.12em' }}>
          VELO STUDIO
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', background: 'linear-gradient(0deg, #060b14 0%, transparent 100%)' }} />
      </div>
    </footer>
  )
}
