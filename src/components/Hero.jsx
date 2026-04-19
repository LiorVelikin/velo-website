import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import portraitSrc from '../assets/portrait.webp'

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
      background: 'rgba(232,237,246,0.95)',
      border: `1px solid rgba(10,15,30,0.1)`,
      borderRadius: 14,
      padding: '10px 14px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.1)',
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
          <div style={{ color: '#0a0f1e', fontWeight: 700, fontSize: '0.76rem', lineHeight: 1.2, whiteSpace: 'nowrap' }}>
            {label}
          </div>
          <div style={{ color, fontSize: '0.6rem', fontWeight: 600, marginTop: 2, whiteSpace: 'nowrap' }}>
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
    <div className="w-full" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(26,111,255,0.08) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, black 0%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, black 0%, transparent 100%)',
      }} />
      {/* Mesh orbs */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%', pointerEvents: 'none',
        width: 'clamp(300px,42vw,580px)', height: 'clamp(300px,42vw,580px)', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,111,255,0.07) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '0%', left: '5%', pointerEvents: 'none',
        width: 'clamp(200px,28vw,360px)', height: 'clamp(200px,28vw,360px)', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,200,255,0.05) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

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
          position: 'absolute', inset: '0 0 auto 0', height: 100,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, transparent 100%)',
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
            flex: isLg ? '0 0 clamp(260px, 33%, 400px)' : '0 0 auto',
            width: isLg ? undefined : 'clamp(220px, 62vw, 310px)',
            position: 'relative',
            opacity: vis ? 1 : 0,
            transform: vis ? 'none' : (isLg ? 'translateX(-24px)' : 'translateY(16px)'),
            transition: 'opacity 0.75s ease 0.15s, transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.15s',
          }}>

            {/* Ambient glow — stays behind portrait, no visible box */}
            <div style={{
              position: 'absolute', inset: '-15% -20%',
              background: 'radial-gradient(ellipse at 50% 55%, rgba(26,111,255,0.14) 0%, rgba(0,180,255,0.05) 55%, transparent 72%)',
              filter: 'blur(56px)', pointerEvents: 'none', zIndex: 0,
              animation: 'orbPulse 6s ease-in-out infinite',
            }} />

            {/* Portrait — no border-radius box, fades into background on all edges */}
            <img
              src={portraitSrc}
              alt="ליאור וליקין — מייסד VELO DIGITAL, סוכנות שיווק דיגיטלי"
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
              <span style={{ color: '#6a80a0', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.02em' }}>
                ליאור וליקין — מייסד VELO DIGITAL
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

            {/* H1 */}
            <h1
              className="font-black leading-tight"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.6rem)',
                letterSpacing: '-0.03em',
                marginBottom: 20,
                lineHeight: 1.12,
              }}
            >
              שיווק דיגיטלי לעסקים,<br />
              <span className="gradient-text">תוכן אתרים ופרסום</span>
              {' '}שמביאים תוצאות
            </h1>

            {/* Subtitle */}
            <p style={{
              color: '#4a5d7a',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.08rem)',
              lineHeight: 1.75,
              marginBottom: 32,
              maxWidth: isLg ? 520 : 'none',
            }}>
              אנחנו ב־VELO DIGITAL בונים מערכות שיווק שלמות לעסקים — תוכן AI, אתרים וחנויות ממירות, ניהול קמפיינים וקידום ממומן. הכל עובד ביחד.
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
                  color: '#1a6fff',
                  background: 'rgba(26,111,255,0.08)',
                  border: '1px solid rgba(26,111,255,0.18)',
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

          </div>

        </div>
      </section>
    </div>
  )
}
