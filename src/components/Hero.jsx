import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BeamsBackground } from './ui/beams-background'
import portraitSrc from '../assets/portrait.png'

/* ── Floating stat badge ── */
function StatBadge({ value, label, color, animDelay, style }) {
  return (
    <div style={{
      position: 'absolute',
      background: 'linear-gradient(160deg, rgba(10,18,40,0.96) 0%, rgba(6,11,22,0.98) 100%)',
      border: `1px solid ${color}28`,
      borderTopColor: `${color}50`,
      borderRadius: 12,
      padding: '10px 14px',
      boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px ${color}10`,
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      animation: 'phoneFloat 4s ease-in-out infinite',
      animationDelay: animDelay,
      zIndex: 10,
      minWidth: 120,
      ...style,
    }}>
      <div style={{
        fontSize: 'clamp(1.05rem,2vw,1.25rem)', fontWeight: 900,
        color, lineHeight: 1, marginBottom: 3,
        fontFamily: 'Inter, sans-serif', letterSpacing: '-0.04em',
      }}>
        {value}
      </div>
      <div style={{ fontSize: '0.62rem', color: 'rgba(160,185,215,0.65)', fontWeight: 600, whiteSpace: 'nowrap' }}>
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  const [vis, setVis] = useState(false)

  /* ── Responsive: stack on mobile ── */
  const [isLg, setIsLg] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  )
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const upd = () => setIsLg(mq.matches)
    mq.addEventListener('change', upd)
    return () => mq.removeEventListener('change', upd)
  }, [])

  /* ── Entrance animation trigger ── */
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 80)
    return () => clearTimeout(t)
  }, [])

  const services = ['עיצוב אתרים', 'דפי נחיתה', 'Shopify', 'תוכן AI', 'קמפיינים', 'SEO']

  return (
    <BeamsBackground className="w-full">
      <section
        id="hero"
        style={{
          minHeight: '100svh',
          paddingTop: isLg ? 'clamp(90px, 11vh, 120px)' : 'clamp(80px, 10vh, 100px)',
          paddingBottom: 'clamp(48px, 7vh, 80px)',
          overflow: 'visible',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Navbar top fade */}
        <div style={{
          position: 'absolute', inset: '0 0 auto 0', height: 180,
          background: 'linear-gradient(to bottom, rgba(6,11,20,0.6) 0%, transparent 100%)',
          zIndex: 4, pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 48px)',
          display: 'flex',
          flexDirection: isLg ? 'row' : 'column-reverse',
          gap: isLg ? 'clamp(32px, 5vw, 64px)' : 40,
          alignItems: isLg ? 'center' : 'center',
          width: '100%',
          position: 'relative',
          zIndex: 5,
        }}>

          {/* ── LEFT column — portrait + floating badges ── */}
          <div style={{
            flex: isLg ? '0 0 clamp(280px, 38%, 440px)' : '0 0 auto',
            width: isLg ? undefined : 'clamp(240px, 70vw, 340px)',
            position: 'relative',
            opacity: vis ? 1 : 0,
            transform: vis ? 'none' : (isLg ? 'translateX(-24px)' : 'translateY(16px)'),
            transition: 'opacity 0.75s ease 0.15s, transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.15s',
          }}>

            {/* Ambient glow behind portrait */}
            <div style={{
              position: 'absolute', inset: '-12% -18%',
              background: 'radial-gradient(ellipse at 50% 60%, rgba(26,100,220,0.32) 0%, rgba(0,160,255,0.1) 50%, transparent 70%)',
              filter: 'blur(48px)', pointerEvents: 'none', zIndex: 0,
              animation: 'orbPulse 6s ease-in-out infinite',
            }} />

            {/* Portrait image */}
            <img
              src={portraitSrc}
              alt="ליאור וליקין — מייסד VELO Studio, סוכנות שיווק דיגיטלי"
              style={{
                width: '100%', display: 'block',
                objectFit: 'cover', objectPosition: 'top center',
                borderRadius: 24, position: 'relative', zIndex: 1,
                maskImage: 'linear-gradient(to bottom, black 52%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 52%, transparent 100%)',
              }}
            />

            {/* Right-edge gradient — blends into background */}
            {isLg && (
              <div style={{
                position: 'absolute', top: 0, right: 0, bottom: 0, width: '40%',
                background: 'linear-gradient(to right, transparent, #060b14)',
                pointerEvents: 'none', zIndex: 2,
              }} />
            )}

            {/* ── Floating stat badges ── */}
            <StatBadge
              value="x4.8"
              label="ROAS ממוצע — Shopify"
              color="#00d478"
              animDelay="0s"
              style={{ top: '16%', right: isLg ? '-32px' : '-12px' }}
            />
            <StatBadge
              value="320"
              label="לידים בחודש — נדלן"
              color="#4d9fff"
              animDelay="1.3s"
              style={{ top: '44%', left: isLg ? '-16px' : '-8px' }}
            />
            <StatBadge
              value="+180%"
              label="גידול בהמרות — 90 יום"
              color="#a07dff"
              animDelay="0.7s"
              style={{ bottom: '24%', right: isLg ? '-24px' : '-8px' }}
            />

            {/* Founder label */}
            <div style={{
              position: 'relative', zIndex: 3, marginTop: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.6s ease 0.6s',
            }}>
              <div style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#1a6fff', boxShadow: '0 0 8px #1a6fff',
                animation: 'orbPulse 2s ease-in-out infinite',
                flexShrink: 0,
              }} />
              <span style={{ color: '#c8dcf5', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.02em' }}>
                ליאור וליקין — מייסד VELO Studio
              </span>
            </div>
          </div>

          {/* ── RIGHT column — text + CTA ── */}
          <div style={{
            flex: 1, minWidth: 0,
            direction: 'rtl',
            textAlign: isLg ? 'right' : 'center',
            opacity: vis ? 1 : 0,
            transform: vis ? 'none' : (isLg ? 'translateX(24px)' : 'translateY(-12px)'),
            transition: 'opacity 0.75s ease 0.25s, transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.25s',
          }}>

            {/* Agency tag pill */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22,
              justifyContent: isLg ? 'flex-start' : 'center',
            }}>
              <div className="tag-pill">סוכנות שיווק דיגיטלי</div>
              <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg, #1a6fff, transparent)' }} />
            </div>

            {/* H1 — SEO-optimized, short, punchy */}
            <h1
              className="font-black leading-tight"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.6rem)',
                letterSpacing: '-0.03em',
                marginBottom: 20,
                lineHeight: 1.12,
              }}
            >
              תוכן, אתר ופרסום{' '}
              <span className="gradient-text">שמביאים לקוחות</span>
              {' '}— לא רק תנועה
            </h1>

            {/* Subtitle */}
            <p style={{
              color: '#8ba3c7',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.08rem)',
              lineHeight: 1.75,
              marginBottom: 32,
              maxWidth: isLg ? 520 : 'none',
            }}>
              VELO Studio בונה עבורכם מערכת שיווק שלמה לעסקים בישראל — תוכן AI, אתרים ממירים, ניהול קמפיינים וקידום SEO. הכל עובד ביחד, הכל ניתן למדידה.
            </p>

            {/* Service pills */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36,
              justifyContent: isLg ? 'flex-start' : 'center',
            }}>
              {services.map(s => (
                <span key={s} style={{
                  padding: '4px 12px', borderRadius: 100,
                  fontSize: '0.7rem', fontWeight: 700,
                  color: '#4d9fff',
                  background: 'rgba(26,111,255,0.1)',
                  border: '1px solid rgba(26,111,255,0.22)',
                }}>
                  {s}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{
              display: 'flex', gap: 14, flexWrap: 'wrap',
              justifyContent: isLg ? 'flex-start' : 'center',
              marginBottom: 28,
            }}>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <button className="btn-primary">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ flexShrink: 0 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  <span>קבלו אבחון חינם</span>
                </button>
              </Link>
              <a href="#services" style={{ textDecoration: 'none' }}>
                <button className="btn-outline"><span>השירותים שלנו</span></button>
              </a>
            </div>

            {/* Social proof nudge */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              justifyContent: isLg ? 'flex-start' : 'center',
            }}>
              {/* Avatar stack */}
              <div style={{ display: 'flex' }}>
                {['#0d2a4e', '#0a3028', '#251050'].map((bg, i) => (
                  <div key={i} style={{
                    width: 26, height: 26, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${bg} 0%, ${bg}dd 100%)`,
                    border: '2px solid #060b14',
                    marginLeft: i > 0 ? -8 : 0,
                  }} />
                ))}
              </div>
              <span style={{ color: 'rgba(140,170,210,0.6)', fontSize: '0.76rem', fontWeight: 500 }}>
                60+ עסקים שצמחו איתנו
              </span>
            </div>
          </div>

        </div>
      </section>
    </BeamsBackground>
  )
}
