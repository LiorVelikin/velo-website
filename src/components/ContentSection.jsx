import { useEffect, useRef, useState } from 'react'

/* ─── Video data — fill src when real videos are ready ─── */
const videos = [
  { src: '', label: 'רילס למכירות',  color: '#1a1a2e', glow: 'rgba(26,111,255,0.55)'  },
  { src: '', label: 'פרסומת AI',     color: '#16213e', glow: 'rgba(0,160,255,0.55)'   },
  { src: '', label: 'תוכן אורגני',   color: '#0f3460', glow: 'rgba(77,159,255,0.60)'  },
  { src: '', label: 'סרטון מוצר',    color: '#0a2a6e', glow: 'rgba(0,200,255,0.60)'  },
  { src: '', label: 'סטורי ממיר',    color: '#1a1a2e', glow: 'rgba(0,212,255,0.55)'   },
  { src: '', label: 'קמפיין ליד',    color: '#16213e', glow: 'rgba(26,111,255,0.50)'  },
  { src: '', label: 'וידאו מותג',    color: '#0f3460', glow: 'rgba(0,180,255,0.50)'   },
]

/* ─── Per-phone layout config ─── */
const phoneConfigs = [
  { rotate: -8, translateY: 42,  scale: 0.75, opacity: 0.55, floatDelay: '0s'   },
  { rotate: -5, translateY: 24,  scale: 0.84, opacity: 0.76, floatDelay: '1.2s' },
  { rotate: -2, translateY: 10,  scale: 0.93, opacity: 0.92, floatDelay: '0.6s' },
  { rotate:  0, translateY:  0,  scale: 1.00, opacity: 1.00, floatDelay: '0.3s', center: true },
  { rotate:  2, translateY: 10,  scale: 0.93, opacity: 0.92, floatDelay: '1.8s' },
  { rotate:  5, translateY: 24,  scale: 0.84, opacity: 0.76, floatDelay: '0.9s' },
  { rotate:  8, translateY: 42,  scale: 0.75, opacity: 0.55, floatDelay: '1.5s' },
]

/* ─── Base iPhone dimensions (center phone, before scale) ─── */
const BASE_W = 152
const BASE_H = 318

function IPhoneMockup({ video, config, index, entered }) {
  const isCenter = config.center

  return (
    <div
      style={{
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transform: `rotate(${config.rotate}deg) translateY(${config.translateY}px) scale(${config.scale})`,
        opacity: entered ? config.opacity : 0,
        transition: `opacity 0.55s ease ${index * 60}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${index * 60}ms`,
        /* entrance slide: phones start lower and rise in */
        ...(entered ? {} : { transform: `rotate(${config.rotate}deg) translateY(${config.translateY + 40}px) scale(${config.scale})` }),
        cursor: 'default',
        position: 'relative',
      }}
    >
      {/* Ambient glow behind center phone */}
      {isCenter && (
        <div style={{
          position: 'absolute',
          inset: '-40%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at 50% 55%, rgba(26,111,255,0.30) 0%, rgba(0,160,255,0.12) 45%, transparent 70%)',
          filter: 'blur(44px)',
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'orbPulse 5s ease-in-out infinite',
        }} />
      )}

      {/* Float wrapper */}
      <div style={{
        animation: 'phoneFloat 4s ease-in-out infinite',
        animationDelay: config.floatDelay,
        position: 'relative',
        zIndex: 1,
      }}>
        {/* iPhone body */}
        <div style={{
          width:  `${BASE_W}px`,
          height: `${BASE_H}px`,
          borderRadius: '34px',
          background: '#0a0a0f',
          border: '1.5px solid rgba(255,255,255,0.12)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: [
            '0 0 0 1px rgba(0,0,0,0.9)',
            '0 24px 60px rgba(0,0,0,0.7)',
            isCenter ? `0 0 60px ${video.glow.replace(/[\d.]+\)$/, '0.22)')}` : '',
          ].filter(Boolean).join(', '),
        }}>

          {/* Dynamic island */}
          <div style={{
            position: 'absolute', top: 12, left: '50%',
            transform: 'translateX(-50%)',
            width: 58, height: 18,
            background: '#000',
            borderRadius: 12,
            zIndex: 10,
          }} />

          {/* Screen: video or color placeholder */}
          {video.src ? (
            <video
              src={video.src}
              autoPlay muted loop playsInline
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <>
              {/* Placeholder background */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(160deg, ${video.color} 0%, ${video.color}cc 60%, #050510 100%)`,
              }} />
              {/* Subtle grid overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
              }} />
              {/* Glow overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(ellipse at 50% 35%, ${video.glow.replace(/[\d.]+\)$/, '0.20)')} 0%, transparent 60%)`,
              }} />
              {/* Play icon */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: 42, height: 42,
                  borderRadius: '50%',
                  border: '1.5px solid rgba(255,255,255,0.45)',
                  background: 'rgba(255,255,255,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backdropFilter: 'blur(8px)',
                }}>
                  <svg width="14" height="16" viewBox="0 0 12 14" fill="white" style={{ marginRight: '-2px' }}>
                    <path d="M1 1L11 7L1 13V1Z" />
                  </svg>
                </div>
              </div>
              {/* Bottom gradient */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
                background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)',
              }} />
              {/* Content type hint at bottom */}
              <div style={{
                position: 'absolute', bottom: 14, left: 12, right: 12,
                fontSize: '8px', color: 'rgba(255,255,255,0.38)',
                textAlign: 'right', letterSpacing: '0.06em',
              }}>
                {video.label}
              </div>
            </>
          )}

          {/* Side hardware buttons */}
          <div style={{ position: 'absolute', right: -2, top: 62,  width: 2, height: 24, background: 'rgba(255,255,255,0.07)', borderRadius: 1 }} />
          <div style={{ position: 'absolute', right: -2, top: 96,  width: 2, height: 40, background: 'rgba(255,255,255,0.07)', borderRadius: 1 }} />
          <div style={{ position: 'absolute', left:  -2, top: 80,  width: 2, height: 52, background: 'rgba(255,255,255,0.07)', borderRadius: 1 }} />
        </div>
      </div>

      {/* Label pill beneath phone */}
      <div style={{
        marginTop: 16,
        padding: '4px 12px',
        borderRadius: 100,
        border: `1px solid ${video.glow.replace(/[\d.]+\)$/, '0.28)')}`,
        background: `${video.glow.replace(/[\d.]+\)$/, '0.08)')}`,
        boxShadow: `0 0 10px ${video.glow.replace(/[\d.]+\)$/, '0.15)')}`,
        backdropFilter: 'blur(8px)',
        opacity: entered ? 1 : 0,
        transition: `opacity 0.55s ease ${index * 60 + 200}ms`,
      }}>
        <span style={{
          fontSize: '10px', fontWeight: 700,
          color: '#0a0f1e',
          letterSpacing: '0.04em',
          whiteSpace: 'nowrap',
        }}>
          {video.label}
        </span>
      </div>
    </div>
  )
}

export default function ContentSection() {
  const sectionRef  = useRef(null)
  const phonesRef   = useRef(null)
  const [entered, setEntered] = useState(false)
  const [headVis, setHeadVis] = useState(false)

  useEffect(() => {
    /* Headline reveal */
    const headObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeadVis(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) headObs.observe(sectionRef.current)

    /* Phones entrance */
    const phoneObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setEntered(true) },
      { threshold: 0.15 }
    )
    if (phonesRef.current) phoneObs.observe(phonesRef.current)

    return () => { headObs.disconnect(); phoneObs.disconnect() }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="content"
      style={{ padding: '120px 0 120px', position: 'relative', overflow: 'visible' }}
    >
      {/* Page-level ambient glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '900px', height: '600px',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(26,111,255,0.07) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Edge fades — fully transparent so global background shows through */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse 35% 100% at 0% 50%, rgba(255,255,255,0.92) 0%, transparent 70%),
          radial-gradient(ellipse 35% 100% at 100% 50%, rgba(255,255,255,0.92) 0%, transparent 70%)
        `,
        zIndex: 2,
      }} />

      <div className="relative max-w-7xl mx-auto px-6" style={{ zIndex: 3 }}>

        {/* ── Headline ── */}
        <div style={{
          textAlign: 'center',
          marginBottom: 80,
          opacity: headVis ? 1 : 0,
          transform: headVis ? 'none' : 'translateY(18px)',
          transition: 'opacity 0.55s ease, transform 0.55s ease',
        }}>
          {/* Label pill */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg, transparent, #1a6fff)' }} />
            <div className="tag-pill">מה אנחנו יוצרים?</div>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(270deg, transparent, #1a6fff)' }} />
          </div>

          <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', marginBottom: 18 }}>
            התוכן שמניע{' '}
            <span className="gradient-text">עסקים קדימה</span>
          </h2>

          <p style={{ color: '#4a5d7a', fontSize: 'clamp(1rem,1.8vw,1.15rem)', maxWidth: 600, margin: '0 auto' }}>
            היום תוכן הוא נקודת ההתחלה של כל מערכת שיווקית. אנחנו מתמחים ביצירת תוכן AI אותנטי שמושך תשומת לב, מייצר עניין ומחזק אמון, תוך שימוש בכלים שמאפשרים לייצר תוכן בכמות גדולה, במהירות ובעלות נמוכה יותר.
          </p>
        </div>

        {/* ── iPhone row ── */}
        <div
          ref={phonesRef}
          style={{
            /* Mobile: scroll horizontally; Desktop: centered flex */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: 'clamp(14px, 2.4vw, 28px)',
            padding: '40px 24px 60px',
            overflow: 'visible',
          }}
        >
          {videos.map((video, i) => (
            <IPhoneMockup
              key={i}
              video={video}
              config={phoneConfigs[i]}
              index={i}
              entered={entered}
            />
          ))}
        </div>

        {/* ── Bottom narrative bridge ── */}
        <div style={{
          textAlign: 'center',
          marginTop: 16,
          opacity: entered ? 1 : 0,
          transition: 'opacity 0.55s ease 0.5s',
        }}>
          <p style={{
            color: '#6a88ad',
            fontSize: 'clamp(0.92rem,1.5vw,1.05rem)',
            letterSpacing: '-0.01em',
            marginBottom: 28,
          }}>
            זה מה שמייצר תנועה איכותית לתוך המערכת.
          </p>

          {/* Bouncing chevron */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'phoneFloat 2s ease-in-out infinite',
            opacity: 0.45,
          }}>
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
              <path d="M1 1L11 12L21 1" stroke="#4d9fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  )
}
