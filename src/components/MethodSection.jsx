import { useEffect, useRef, useState } from 'react'
import portraitSrc from '../assets/portrait.webp'

/* Graceful logo import — renders text fallback if file not yet placed */
const _vl = import.meta.glob('../assets/Velocity-logo.png', { eager: true })
const velocityLogoSrc = Object.values(_vl)[0]?.default ?? null

/* ── bullet data ── */
const bullets = [
  {
    icon: 'lightning',
    text: 'תוכן AI שמציג את העסק כמוביל בתחום — מבלי להוציא עשרות אלפים על קמפיין צילומים',
  },
  {
    icon: 'target',
    text: 'דפי נחיתה, אתרים וחנויות איקומרס שמהונדסים להמיר גולשים ללקוחות',
  },
  {
    icon: 'refresh',
    text: 'חיבור נכון בין שיווק לתשתיות ליצירת מעטפת המרה שעובדת ברצף',
  },
  {
    icon: 'flow',
    text: 'תהליך ברור שאפשר למדוד, לשפר ולהגדיל לאורך זמן',
  },
]

const ICONS = {
  lightning: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  refresh: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 4v6h-6"/><path d="M1 20v-6h6"/>
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
    </svg>
  ),
  target: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  flow: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
    </svg>
  ),
}

function Bullet({ icon, text, delay }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{
      display: 'flex', alignItems: 'flex-start', gap: 14,
      opacity: vis ? 1 : 0,
      transform: vis ? 'none' : 'translateY(10px)',
      transition: `opacity 0.3s ease ${delay}ms, transform 0.3s ease ${delay}ms`,
    }}>
      <div style={{
        flexShrink: 0, marginTop: 3,
        width: 28, height: 28, borderRadius: '50%',
        background: 'linear-gradient(135deg,#1a6fff 0%,#00d4ff 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff',
        boxShadow: '0 0 12px rgba(26,111,255,0.45)',
      }}>
        {ICONS[icon]}
      </div>
      <p style={{ color: '#b8ccde', fontSize: '0.92rem', lineHeight: 1.7, paddingTop: 4 }}>
        {text}
      </p>
    </div>
  )
}

export default function MethodSection() {
  const contentRef = useRef(null)
  const [contentVis, setContentVis] = useState(false)

  /* ── Responsive breakpoint ── */
  const [isLg, setIsLg] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  )
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsLg(mq.matches)
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setContentVis(true) },
      { threshold: 0 }
    )
    if (contentRef.current) obs.observe(contentRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section style={{ padding: '40px 0 60px', position: 'relative', overflow: 'visible' }}>


      {/* ── Two columns — responsive: row on desktop, column on mobile ── */}
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-6"
        style={{
          display: 'flex',
          flexDirection: isLg ? 'row' : 'column',
          gap: isLg ? 64 : 40,
          alignItems: 'flex-start',
        }}
      >

        {/* ── Text column ── */}
        <div style={{
          flex: 1,
          minWidth: 0,
          position: 'relative',
          zIndex: 9,
          opacity: contentVis ? 1 : 0,
          transform: contentVis ? 'none' : 'translateX(-20px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}>

          {/* ── Section heading: label + VELOCITY logo on same line ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
            <div style={{ height: 1, width: 36, background: 'linear-gradient(270deg,transparent,#1a6fff)', flexShrink: 0 }} />
            <span style={{ color: '#4d9fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              מה אנחנו עושים
            </span>

            {/* VELOCITY logo — inline with label */}
            {velocityLogoSrc ? (
              <img
                src={velocityLogoSrc}
                alt="VELOCITY"
                style={{
                  height: 'clamp(44px, 5.5vw, 66px)',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'drop-shadow(0 0 20px rgba(26,111,255,0.60)) drop-shadow(0 0 8px rgba(0,212,255,0.40))',
                  mixBlendMode: 'screen',
                }}
              />
            ) : (
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.6rem,3.5vw,2.4rem)',
                letterSpacing: '0.18em',
                background: 'linear-gradient(90deg,#1a6fff,#00d4ff,#fff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>VELOCITY</span>
            )}
          </div>

          {/* H2 + subtext */}
          <div style={{ marginBottom: 36 }}>
            <h2 className="font-black leading-tight" style={{
              fontSize: 'clamp(1.8rem,3.5vw,2.8rem)',
              letterSpacing: '-0.02em',
              marginBottom: 16,
            }}>
              כל מה שהעסק שלכם צריך כדי לגדול{' '}
              <span className="gradient-text">בצורה חכמה ונכונה</span>
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '0.95rem', lineHeight: 1.78 }}>
              רוב העסקים כבר משקיעים בתוכן, בפרסום ובאתר. אבל האם הם באמת יודעים אילו תוצאות הם מביאים?
              לרוב כל חלק עובד בנפרד, בלי חיבור אמיתי ביניהם — וזה יוצר חוסר עקביות, תוצאות לא יציבות ובזבוז של זמן ותקציב.
            </p>
            <p style={{ color: '#8ba3c7', fontSize: '0.95rem', lineHeight: 1.78, marginTop: 12 }}>
              כדי לייצר צמיחה לאורך זמן, צריך לבנות מערכת שבה כל החלקים עובדים יחד — ולא עוד פעולה נקודתית ומנותקת.
            </p>
          </div>

          {/* bullets header */}
          <p style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: 20, letterSpacing: '-0.01em' }}>
            המערכת כוללת
          </p>

          {/* bullets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {bullets.map((b, i) => (
              <Bullet key={i} icon={b.icon} text={b.text} delay={i * 60} />
            ))}
          </div>

          {/* closing statement */}
          <div style={{ marginTop: 44 }}>
            <p style={{
              fontSize: 'clamp(1.1rem,1.8vw,1.4rem)',
              fontWeight: 800,
              lineHeight: 1.45,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(90deg, #ffffff 0%, #7ec8ff 60%, #00d4ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              כשכל החלקים עובדים יחד —<br />
              התוצאות הופכות להיות צפויות, ולא מקריות.
            </p>
          </div>
        </div>

        {/* ── Portrait column ── */}
        <div style={{
          flexShrink: 0,
          width: isLg ? 'clamp(293px,34%,390px)' : '100%',
          maxWidth: isLg ? 'none' : '340px',
          marginInline: isLg ? 0 : 'auto',
          position: 'relative',
          zIndex: 9,
          opacity: contentVis ? 1 : 0,
          transform: contentVis ? 'none' : 'translateX(20px)',
          transition: 'opacity 0.3s ease 0.08s, transform 0.3s ease 0.08s',
        }}>

          {/* subtle light-blue portrait bg — sits at bottom, blurred edges */}
          <div style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-15%',
            right: '-15%',
            height: '70%',
            background: 'radial-gradient(ellipse at 50% 100%, rgba(26,100,220,0.38) 0%, rgba(0,160,255,0.14) 50%, transparent 75%)',
            filter: 'blur(28px)',
            pointerEvents: 'none',
            zIndex: 0,
          }} />

          {/* portrait — frameless, floating */}
          <img
            src={portraitSrc}
            alt="ליאור וליקין"
            style={{
              width: '100%',
              display: 'block',
              objectFit: 'cover',
              objectPosition: 'top center',
              borderRadius: 20,
              position: 'relative',
              zIndex: 1,
              marginTop: isLg ? 36 : 0,
              WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
            }}
          />

          {/* name + title */}
          <div style={{
            marginTop: 10,
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 7,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#1a6fff',
              boxShadow: '0 0 8px #1a6fff',
              animation: 'orbPulse 2s ease-in-out infinite',
              flexShrink: 0,
            }} />
            <span style={{ color: '#c8dcf5', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.02em' }}>
              ליאור וליקין — מייסד VELO DIGITAL
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}
