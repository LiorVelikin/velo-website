import { useEffect, useState } from 'react'
import portraitSrc from '../assets/lior-portrait.webp'

/* ── Update this number to Lior's real WhatsApp ── */
const WA_LINK = 'https://wa.me/972544286018?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9C%D7%99%D7%90%D7%95%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%94%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D%20%D7%A9%D7%9C%D7%9A'

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

/* ── Floating stat badges ── */
function StatBadge({ value, label, color, animDelay, style }) {
  return (
    <div style={{
      position: 'absolute',
      background: 'rgba(255,255,255,0.96)',
      border: '1px solid rgba(10,15,30,0.08)',
      borderRadius: 14,
      padding: '10px 16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.08)',
      animation: 'phoneFloat 4s ease-in-out infinite',
      animationDelay: animDelay,
      zIndex: 10,
      direction: 'rtl',
      ...style,
    }}>
      <div style={{ color, fontWeight: 800, fontSize: '1.05rem', lineHeight: 1.1, whiteSpace: 'nowrap' }}>
        {value}
      </div>
      <div style={{ color: '#7a8fa8', fontSize: '0.65rem', fontWeight: 600, marginTop: 3, whiteSpace: 'nowrap' }}>
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  const [vis, setVis] = useState(false)
  const [isLg, setIsLg] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const upd = () => setIsLg(mq.matches)
    mq.addEventListener('change', upd)
    return () => mq.removeEventListener('change', upd)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setVis(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="w-full" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(26,111,255,0.07) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 0%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 0%, transparent 100%)',
      }} />

      {/* Soft blue orb top-right */}
      <div style={{
        position: 'absolute', top: '-5%', right: '-8%', pointerEvents: 'none',
        width: 'clamp(280px, 38vw, 520px)', height: 'clamp(280px, 38vw, 520px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,111,255,0.09) 0%, transparent 70%)',
        filter: 'blur(50px)',
      }} />

      <section
        id="hero"
        style={{
          minHeight: '100svh',
          paddingTop: isLg ? 'clamp(90px,11vh,120px)' : 'clamp(80px,10vh,100px)',
          paddingBottom: 'clamp(48px,7vh,80px)',
          display: 'flex', alignItems: 'center',
          position: 'relative',
        }}
      >
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          padding: '0 clamp(20px,5vw,48px)',
          display: 'flex',
          flexDirection: isLg ? 'row' : 'column-reverse',
          direction: 'ltr',
          gap: isLg ? 'clamp(32px,4vw,56px)' : 40,
          alignItems: 'center',
          width: '100%',
          position: 'relative', zIndex: 5,
        }}>

          {/* ── Portrait column ── */}
          <div style={{
            flex: isLg ? '0 0 clamp(240px,30%,360px)' : '0 0 auto',
            width: isLg ? undefined : 'clamp(200px,58vw,280px)',
            position: 'relative',
            opacity: vis ? 1 : 0,
            transform: vis ? 'none' : (isLg ? 'translateX(-20px)' : 'translateY(16px)'),
            transition: 'opacity 0.75s ease 0.1s, transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}>

            {/* Glow behind portrait */}
            <div style={{
              position: 'absolute', inset: '-20% -25%',
              background: 'radial-gradient(ellipse at 50% 55%, rgba(26,111,255,0.13) 0%, rgba(0,180,255,0.05) 55%, transparent 72%)',
              filter: 'blur(52px)', pointerEvents: 'none', zIndex: 0,
              animation: 'orbPulse 6s ease-in-out infinite',
            }} />

            {/* Portrait */}
            <img
              src={portraitSrc}
              alt="ליאור וליקין — מייסד VELO DIGITAL"
              style={{
                width: '100%', display: 'block',
                objectFit: 'cover', objectPosition: 'top center',
                position: 'relative', zIndex: 1,
                maskImage: [
                  'linear-gradient(to bottom, black 45%, transparent 90%)',
                  'linear-gradient(to right, rgba(0,0,0,0.5) 0%, black 20%, black 60%, transparent 88%)',
                ].join(', '),
                WebkitMaskImage: [
                  'linear-gradient(to bottom, black 45%, transparent 90%)',
                  'linear-gradient(to right, rgba(0,0,0,0.5) 0%, black 20%, black 60%, transparent 88%)',
                ].join(', '),
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
              }}
            />

            {/* Floating stat badges */}
            <StatBadge
              value="×8.5 ROAS"
              label="החזר על פרסום — זנורה"
              color="#1a6fff"
              animDelay="0s"
              style={{ top: '18%', right: isLg ? '-28px' : '-10px' }}
            />
            <StatBadge
              value="42 לידים"
              label="בחודש אחד — Windows4U"
              color="#00b96b"
              animDelay="1.4s"
              style={{ top: '46%', left: isLg ? '-12px' : '-6px' }}
            />
            <StatBadge
              value="AI תוכן"
              label="ראשונים בישראל בסטנדרט הזה"
              color="#a07dff"
              animDelay="0.8s"
              style={{ bottom: '22%', right: isLg ? '-20px' : '-8px' }}
            />

            {/* Founder label */}
            <div style={{
              position: 'relative', zIndex: 3, marginTop: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.6s ease 0.55s',
            }}>
              <div style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#1a6fff', boxShadow: '0 0 8px rgba(26,111,255,0.6)',
                animation: 'orbPulse 2s ease-in-out infinite', flexShrink: 0,
              }} />
              <span style={{ color: '#6a80a0', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.02em' }}>
                ליאור וליקין — מייסד VELO DIGITAL
              </span>
            </div>
          </div>

          {/* ── Text column ── */}
          <div style={{
            flex: 1, minWidth: 0,
            direction: 'rtl',
            textAlign: isLg ? 'right' : 'center',
            opacity: vis ? 1 : 0,
            transform: vis ? 'none' : (isLg ? 'translateX(20px)' : 'translateY(-12px)'),
            transition: 'opacity 0.75s ease 0.22s, transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.22s',
          }}>

            {/* Tag */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
              justifyContent: isLg ? 'flex-start' : 'center',
            }}>
              <div className="tag-pill">שותף הצמיחה הדיגיטלית שלכם</div>
              <div style={{ height: 1, width: 36, background: 'linear-gradient(90deg, #1a6fff, transparent)' }} />
            </div>

            {/* H1 */}
            <h1
              className="font-black leading-tight"
              style={{
                fontSize: 'clamp(2rem,4.2vw,3.8rem)',
                letterSpacing: '-0.03em',
                marginBottom: 20,
                lineHeight: 1.1,
                color: '#0a0f1e',
              }}
            >
              אני בונה מערכות שיווק<br />
              שמביאות עסקים{' '}
              <span className="gradient-text">לצמוח</span>
            </h1>

            {/* Sub */}
            <p style={{
              color: '#4a5d7a',
              fontSize: 'clamp(0.97rem,1.6vw,1.1rem)',
              lineHeight: 1.8,
              marginBottom: 36,
              maxWidth: isLg ? 500 : 'none',
            }}>
              תוכן AI שלא ראיתם בישראל, אתרים שממירים וקמפיינים שמביאים תוצאות — הכל ממקום אחד, עם גישה ישירה אליי.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex', gap: 14, flexWrap: 'wrap',
              justifyContent: isLg ? 'flex-start' : 'center',
              marginBottom: 32,
            }}>
              {/* Primary — WhatsApp */}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button style={{
                  display: 'inline-flex', alignItems: 'center', gap: 9,
                  padding: '13px 26px',
                  background: '#25d366',
                  color: '#fff',
                  border: 'none', borderRadius: 12,
                  fontFamily: 'Heebo, sans-serif',
                  fontWeight: 700, fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
                  transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                  whiteSpace: 'nowrap',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.45)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.35)' }}
                >
                  <WhatsAppIcon />
                  <span>שלחו הודעה עכשיו</span>
                </button>
              </a>

              {/* Secondary */}
              <a href="#case-studies" style={{ textDecoration: 'none' }}
                onClick={e => { e.preventDefault(); document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                <button style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 24px',
                  background: 'transparent',
                  color: '#0a0f1e',
                  border: '1.5px solid rgba(10,15,30,0.15)',
                  borderRadius: 12,
                  fontFamily: 'Heebo, sans-serif',
                  fontWeight: 600, fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'border-color 0.18s ease, color 0.18s ease',
                  whiteSpace: 'nowrap',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#1a6fff'; e.currentTarget.style.color = '#1a6fff' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(10,15,30,0.15)'; e.currentTarget.style.color = '#0a0f1e' }}
                >
                  <span>ראו תוצאות</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 5l-7 7 7 7"/>
                  </svg>
                </button>
              </a>
            </div>

            {/* Trust note */}
            <p style={{
              color: '#9aabb8', fontSize: '0.78rem', fontWeight: 500,
              textAlign: isLg ? 'right' : 'center',
            }}>
              ✓ שיחת ייעוץ חינמית &nbsp;·&nbsp; ✓ ללא התחייבות &nbsp;·&nbsp; ✓ תשובה תוך שעות
            </p>

          </div>
        </div>
      </section>
    </div>
  )
}
