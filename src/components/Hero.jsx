import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BeamsBackground } from './ui/beams-background'
import portraitSrc from '../assets/portrait.png'

/* ── SVG icons for growth badges ── */
const TrendUpIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
)
const UsersIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
)
const ZapIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

/* ── Floating growth-indicator badge ── */
function GrowthBadge({ icon, label, sublabel, color, animDelay, style }) {
  return (
    <div style={{
      position: 'absolute',
      background: 'linear-gradient(160deg, rgba(10,18,40,0.96) 0%, rgba(6,11,22,0.98) 100%)',
      border: `1px solid ${color}22`,
      borderTopColor: `${color}45`,
      borderRadius: 14,
      padding: '10px 14px',
      boxShadow: `0 8px 32px rgba(0,0,0,0.48), 0 0 0 1px ${color}08`,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      animation: 'phoneFloat 4s ease-in-out infinite',
      animationDelay: animDelay,
      zIndex: 10,
      ...style,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <div style={{
          width: 30, height: 30, borderRadius: 8,
          background: `${color}14`,
          border: `1px solid ${color}25`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color, flexShrink: 0,
        }}>
          {icon}
        </div>
        <div>
          <div style={{ color: 'rgba(225,238,255,0.9)', fontWeight: 700, fontSize: '0.76rem', lineHeight: 1.2, whiteSpace: 'nowrap' }}>
            {label}
          </div>
          <div style={{ color, fontSize: '0.6rem', fontWeight: 600, marginTop: 2, opacity: 0.75, whiteSpace: 'nowrap' }}>
            {sublabel}
          </div>
        </div>
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
          direction: 'ltr',
          gap: isLg ? 'clamp(32px, 5vw, 64px)' : 40,
          alignItems: isLg ? 'center' : 'center',
          width: '100%',
          position: 'relative',
          zIndex: 5,
        }}>

          {/* ── LEFT column — portrait + floating badges ── */}
          <div style={{
            flex: isLg ? '0 0 clamp(220px, 28%, 340px)' : '0 0 auto',
            width: isLg ? undefined : 'clamp(200px, 55vw, 280px)',
            position: 'relative',
            opacity: vis ? 1 : 0,
            transform: vis ? 'none' : (isLg ? 'translateX(-24px)' : 'translateY(16px)'),
            transition: 'opacity 0.75s ease 0.15s, transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.15s',
          }}>

            {/* Ambient glow — stays behind portrait, no visible box */}
            <div style={{
              position: 'absolute', inset: '-15% -20%',
              background: 'radial-gradient(ellipse at 50% 55%, rgba(26,100,220,0.26) 0%, rgba(0,160,255,0.07) 55%, transparent 72%)',
              filter: 'blur(56px)', pointerEvents: 'none', zIndex: 0,
              animation: 'orbPulse 6s ease-in-out infinite',
            }} />

            {/* Portrait — no border-radius box, fades into background on all edges */}
            <img
              src={portraitSrc}
              alt="ליאור וליקין — מייסד VELO Studio, סוכנות שיווק דיגיטלי"
              style={{
                width: '100%', display: 'block',
                objectFit: 'cover', objectPosition: 'top center',
                position: 'relative', zIndex: 1,
                /* Multi-directional blend: fades bottom + right edge into background */
                maskImage: [
                  'linear-gradient(to bottom, black 42%, transparent 88%)',
                  'linear-gradient(to right, rgba(0,0,0,0.6) 0%, black 18%, black 55%, transparent 86%)',
                ].join(', '),
                WebkitMaskImage: [
                  'linear-gradient(to bottom, black 42%, transparent 88%)',
                  'linear-gradient(to right, rgba(0,0,0,0.6) 0%, black 18%, black 55%, transparent 86%)',
                ].join(', '),
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
              }}
            />

            {/* ── Floating growth-indicator badges ── */}
            <GrowthBadge
              icon={<TrendUpIcon />}
              label="ROAS גבוה"
              sublabel="תוצאות פרסום מדידות"
              color="#00d478"
              animDelay="0s"
              style={{ top: '16%', right: isLg ? '-32px' : '-12px' }}
            />
            <GrowthBadge
              icon={<UsersIcon />}
              label="לידים איכותיים"
              sublabel="לקוחות חדשים כל חודש"
              color="#4d9fff"
              animDelay="1.3s"
              style={{ top: '45%', left: isLg ? '-16px' : '-8px' }}
            />
            <GrowthBadge
              icon={<ZapIcon />}
              label="המרות גבוהות"
              sublabel="אתר שמוכר בשבילכם"
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

            {/* H1 — SEO-optimized: primary keyword-first, outcome-focused */}
            <h1
              className="font-black leading-tight"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.6rem)',
                letterSpacing: '-0.03em',
                marginBottom: 20,
                lineHeight: 1.12,
              }}
            >
              שיווק דיגיטלי לעסקים בישראל —{' '}
              <span className="gradient-text">תוכן, אתרים ופרסום</span>
              {' '}שמביאים לקוחות
            </h1>

            {/* Subtitle */}
            <p style={{
              color: '#8ba3c7',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.08rem)',
              lineHeight: 1.75,
              marginBottom: 32,
              maxWidth: isLg ? 520 : 'none',
            }}>
              VELO Studio בונה מערכת שיווק שלמה לעסקים — תוכן AI, אתרים ממירים, ניהול קמפיינים וקידום SEO. הכל עובד ביחד, הכל ניתן למדידה.
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
