import { Link } from 'react-router-dom'

const SOCIAL = [
  { lbl: 'IG', href: 'https://instagram.com/velo.digital' },
  { lbl: 'IN', href: 'https://linkedin.com/company/velo-digital' },
  { lbl: 'BE', href: 'https://behance.net/velo-digital' },
  { lbl: 'X',  href: 'https://x.com/velodigital' },
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
            <div style={{ display: 'flex', gap: 8 }}>
              {SOCIAL.map((s) => (
                <a
                  key={s.lbl}
                  href={s.href}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    width: 34, height: 34, borderRadius: 8,
                    border: '1px solid var(--hairline)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--ink-500)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: 500,
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
                  {s.lbl}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="mono-label" style={{ marginBottom: 16, justifyContent: 'flex-start', display: 'flex' }}>
              <span style={{ color: 'var(--cyan)' }}>·</span>
              <span style={{ color: 'rgba(220,235,255,0.55)' }}>services</span>
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
                      transition: 'color 0.2s ease',
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
            <p className="mono-label" style={{ marginBottom: 16, justifyContent: 'flex-start', display: 'flex' }}>
              <span style={{ color: 'var(--cyan)' }}>·</span>
              <span style={{ color: 'rgba(220,235,255,0.55)' }}>agency</span>
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
                      transition: 'color 0.2s ease',
                      cursor: 'pointer',
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
            <p className="mono-label" style={{ marginBottom: 16, justifyContent: 'flex-start', display: 'flex' }}>
              <span style={{ color: 'var(--cyan)' }}>·</span>
              <span style={{ color: 'rgba(220,235,255,0.55)' }}>contact</span>
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li>
                <a
                  href="mailto:hello@velo.agency"
                  style={{
                    color: 'var(--ink-100)',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                  }}
                >
                  hello@velo.agency
                </a>
              </li>
              <li style={{ color: 'var(--ink-300)', fontSize: '0.86rem' }}>+972 50 123 4567</li>
              <li style={{ color: 'var(--ink-300)', fontSize: '0.86rem' }}>הברזל 7, תל אביב</li>
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

      {/* Massive VELO wordmark */}
      <div style={{
        textAlign: 'center',
        margin: '0 auto',
        paddingTop: 32,
        overflow: 'hidden',
        position: 'relative',
      }}>
        <h2 className="velo-wordmark" style={{ margin: 0 }}>
          VELO
        </h2>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid var(--hairline)',
        padding: '20px clamp(20px, 5vw, 48px)',
      }}>
        <div style={{
          maxWidth: 1180, margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }} className="footer-bottom">
          <span className="mono-label" style={{ margin: 0 }}>
            © 2026 VELO DIGITAL Agency · all rights reserved
          </span>
          <span className="mono-label" style={{ margin: 0 }}>
            tel-aviv · 32.0853° N, 34.7818° E
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-cols { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-cols { grid-template-columns: 1fr !important; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  )
}
