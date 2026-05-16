import { Link } from 'react-router-dom'

const PHONE_RAW = '972544286018'
const PHONE_DISPLAY = '054-428-6018'
const EMAIL = 'Liorvelikin1@gmail.com'
const WA_LINK = `https://wa.me/${PHONE_RAW}?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9C%D7%99%D7%90%D7%95%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%A4%D7%92%D7%99%D7%A9%D7%AA%20%D7%99%D7%99%D7%A2%D7%95%D7%A5`

const SOCIAL = [
  {
    lbl: 'Instagram',
    href: 'https://instagram.com/velo.digital',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    lbl: 'LinkedIn',
    href: 'https://linkedin.com/company/velo-digital',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    lbl: 'Behance',
    href: 'https://behance.net/velo-digital',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.202.491 1.708 1.313 1.708.805 0 1.261-.436 1.442-1.369l2.001.69zM15.998 13h3.455c-.066-1.089-.498-1.636-1.702-1.636-1.21 0-1.643.547-1.753 1.636zM7.508 13.75c.732 0 1.288.287 1.288 1.069 0 .826-.548 1.181-1.288 1.181H4.42V13.75h3.088zm-.396-4.5c.664 0 1.142.301 1.142.989 0 .695-.45 1.011-1.142 1.011H4.42V9.25h2.692zM2 19h5.898c1.891 0 3.575-.832 3.575-2.838 0-1.327-.671-2.159-1.765-2.517.79-.43 1.257-1.166 1.257-2.205C11 9.4 9.503 8 7.515 8H2v11z"/>
      </svg>
    ),
  },
  {
    lbl: 'X (Twitter)',
    href: 'https://x.com/velodigital',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.213 5.567 5.95-5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    lbl: 'WhatsApp',
    href: WA_LINK,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
]

const COL_SERVICES = [
  { lbl: 'Web Design',     to: '/services/web-design' },
  { lbl: 'AI Content',     to: '/services/ai-content' },
  { lbl: 'Paid Media',     to: '/services/paid-ads' },
  { lbl: 'דפי נחיתה',      to: '/services/landing-pages' },
  { lbl: 'חנויות Shopify', to: '/services/ecommerce' },
  { lbl: 'קידום SEO',      to: '/services/seo' },
]

const COL_AGENCY = [
  { lbl: 'הסוכנות',  hash: '#agency' },
  { lbl: 'תהליך',   hash: '#process' },
  { lbl: 'עבודות',  hash: '#case-studies' },
  { lbl: 'שאלות',   hash: '#faq' },
]

const scrollTo = (hash) => (e) => {
  e.preventDefault()
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        paddingTop: 'clamp(60px, 8vw, 100px)',
        paddingBottom: 0,
        direction: 'rtl',
        overflow: 'hidden',
        borderTop: '1px solid var(--hairline)',
      }}
    >
      {/* Top columns */}
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: '0 clamp(20px, 5vw, 48px)',
      }}>
        <div className="footer-cols" style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: 'clamp(28px, 4vw, 56px)',
          marginBottom: 56,
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem', fontWeight: 700,
              color: 'var(--ink-100)',
              letterSpacing: '-0.025em',
              marginBottom: 12,
            }}>
              VELO <span style={{ fontWeight: 400, color: 'var(--ink-300)' }}>Digital</span>
            </div>
            <p style={{
              color: 'var(--ink-300)',
              fontSize: '0.88rem',
              lineHeight: 1.65,
              marginBottom: 22,
              maxWidth: 320,
            }}>
              סוכנות שיווק דיגיטלי תחת קורת גג אחת. אתרים, תוכן וקמפיינים שמביאים לקוחות אמיתיים, עם תוצאות שאפשר למדוד.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {SOCIAL.map((s) => (
                <a
                  key={s.lbl}
                  href={s.href}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={s.lbl}
                  style={{
                    width: 36, height: 36, borderRadius: 9,
                    border: '1px solid var(--hairline)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--ink-500)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'
                    e.currentTarget.style.color = 'var(--cyan)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--hairline)'
                    e.currentTarget.style.color = 'var(--ink-500)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="mono-label" style={{ marginBottom: 16, display: 'flex', gap: 4 }}>
              <span style={{ color: 'var(--cyan)' }}>·</span>
              <span>services</span>
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {COL_SERVICES.map((l) => (
                <li key={l.lbl}>
                  <Link
                    to={l.to}
                    style={{
                      color: 'var(--ink-300)',
                      fontSize: '0.86rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      fontFamily: 'var(--font-body)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cyan)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink-300)'}
                  >
                    {l.lbl}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agency */}
          <div>
            <p className="mono-label" style={{ marginBottom: 16, display: 'flex', gap: 4 }}>
              <span style={{ color: 'var(--cyan)' }}>·</span>
              <span>agency</span>
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {COL_AGENCY.map((l) => (
                <li key={l.lbl}>
                  <a
                    href={l.hash}
                    onClick={scrollTo(l.hash)}
                    style={{
                      color: 'var(--ink-300)',
                      fontSize: '0.86rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-body)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cyan)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink-300)'}
                  >
                    {l.lbl}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mono-label" style={{ marginBottom: 16, display: 'flex', gap: 4 }}>
              <span style={{ color: 'var(--cyan)' }}>·</span>
              <span>contact</span>
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  style={{
                    color: 'var(--ink-100)',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cyan)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink-100)'}
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${PHONE_RAW}`}
                  style={{
                    color: 'var(--ink-300)',
                    fontSize: '0.86rem',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    transition: 'color 0.2s',
                    direction: 'ltr',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cyan)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink-300)'}
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li style={{ marginTop: 4 }}>
                <a
                  href="#cta"
                  onClick={scrollTo('#cta')}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    color: 'var(--cyan)',
                    fontSize: '0.84rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <span>קבעו שיחת אבחון</span>
                  <span>↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar — copyright only */}
      <div style={{
        borderTop: '1px solid var(--hairline)',
        padding: '20px clamp(20px, 5vw, 48px)',
      }}>
        <div style={{
          maxWidth: 1180, margin: '0 auto',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            color: 'var(--ink-500)',
            letterSpacing: '0.01em',
          }}>
            © 2026 VELO DIGITAL · all rights reserved
          </span>
        </div>
      </div>
    </footer>
  )
}
