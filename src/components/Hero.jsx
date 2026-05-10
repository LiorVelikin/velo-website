import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import portraitSrc from '../assets/lior-portrait.webp'

const WA_LINK = 'https://wa.me/972544286018?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9C%D7%99%D7%90%D7%95%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%94%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D%20%D7%A9%D7%9C%D7%9A'

const SPRING = { type: 'spring', stiffness: 200, damping: 28 }

function StatBadge({ value, label, color, delay, style }) {
  return (
    <motion.div
      className="hero-stat-badge"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ...SPRING, delay }}
      style={{
        position: 'absolute',
        background: 'rgba(8,14,32,0.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderTop: `1px solid ${color}35`,
        borderRadius: 12,
        padding: '10px 15px',
        boxShadow: `0 8px 28px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)`,
        zIndex: 10,
        direction: 'rtl',
        ...style,
      }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.5 }}
      >
        <div style={{ color, fontWeight: 800, fontSize: '1rem', lineHeight: 1.1, whiteSpace: 'nowrap' }}>
          {value}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.62rem', fontWeight: 600, marginTop: 3, whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
          {label}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const [isLg, setIsLg] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const upd = () => setIsLg(mq.matches)
    mq.addEventListener('change', upd)
    return () => mq.removeEventListener('change', upd)
  }, [])

  return (
    <div className="w-full" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(0,212,255,0.09) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse 80% 65% at 50% 25%, black 0%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 25%, black 0%, transparent 100%)',
      }} />

      {/* Right orb */}
      <div style={{
        position: 'absolute', top: '-8%', right: '-8%', pointerEvents: 'none',
        width: 'clamp(300px, 40vw, 560px)', height: 'clamp(300px, 40vw, 560px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,111,255,0.13) 0%, rgba(0,212,255,0.04) 50%, transparent 70%)',
        filter: 'blur(55px)',
      }} />

      {/* Bottom-left accent */}
      <div style={{
        position: 'absolute', bottom: '-8%', left: '8%', pointerEvents: 'none',
        width: 380, height: 380, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
        filter: 'blur(70px)',
      }} />

      <section
        id="hero"
        style={{
          minHeight: '100svh',
          paddingTop: isLg ? 'clamp(90px,11vh,120px)' : 'clamp(80px,10vh,100px)',
          paddingBottom: 'clamp(72px,6vh,80px)',
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
          gap: isLg ? 'clamp(28px,3.5vw,52px)' : 36,
          alignItems: 'center',
          width: '100%',
          position: 'relative', zIndex: 5,
        }}>

          {/* Portrait column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...SPRING, delay: 0.1 }}
            style={{
              flex: isLg ? '0 0 clamp(230px,28%,340px)' : '0 0 auto',
              width: isLg ? undefined : 'clamp(180px,52vw,260px)',
              position: 'relative',
            }}
          >
            {/* Portrait glow */}
            <div style={{
              position: 'absolute', inset: '-20% -25%',
              background: 'radial-gradient(ellipse at 50% 55%, rgba(26,111,255,0.16) 0%, rgba(0,212,255,0.06) 50%, transparent 72%)',
              filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0,
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
                  'linear-gradient(to right, rgba(0,0,0,0.4) 0%, black 22%, black 62%, transparent 88%)',
                ].join(', '),
                WebkitMaskImage: [
                  'linear-gradient(to bottom, black 45%, transparent 90%)',
                  'linear-gradient(to right, rgba(0,0,0,0.4) 0%, black 22%, black 62%, transparent 88%)',
                ].join(', '),
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
              }}
            />

            {/* Floating stat badges */}
            <StatBadge
              value="נוכחות מובילה"
              label="נוכחות שמובילה בשוק"
              color="#4d9fff"
              delay={0.55}
              style={{ top: '18%', right: isLg ? '-26px' : '-8px' }}
            />
            <StatBadge
              value="ROI גבוה"
              label="החזר השקעה מוכח"
              color="#00d4ff"
              delay={0.72}
              style={{ top: '47%', left: isLg ? '-10px' : '-4px' }}
            />
            <StatBadge
              value="יותר לידים"
              label="לקוחות שמגיעים אליכם"
              color="#4d9fff"
              delay={0.62}
              style={{ bottom: '22%', right: isLg ? '-18px' : '-6px' }}
            />

            {/* Founder label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              style={{
                position: 'relative', zIndex: 3, marginTop: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
              }}
            >
              <div style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#00d4ff', boxShadow: '0 0 10px rgba(0,212,255,0.7)',
                animation: 'orbPulse 2s ease-in-out infinite', flexShrink: 0,
              }} />
              <span style={{ color: 'rgba(255,255,255,0.32)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.02em' }}>
                ליאור וליקין — מייסד VELO DIGITAL
              </span>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <div style={{
            flex: 1, minWidth: 0,
            direction: 'rtl',
            textAlign: isLg ? 'right' : 'center',
          }}>

            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING, delay: 0.18 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22,
                justifyContent: isLg ? 'flex-start' : 'center',
              }}
            >
              <div className="tag-pill">מעטפת שיווק מלאה תחת קורת גג אחת</div>
              <div style={{ height: 1, width: 32, background: 'linear-gradient(90deg, #00d4ff, transparent)' }} />
            </motion.div>

            {/* H1 */}
            <motion.h1
              className="font-black leading-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING, delay: 0.26 }}
              style={{
                fontSize: 'clamp(2.2rem, 4.8vw, 4.2rem)',
                letterSpacing: '-0.04em',
                marginBottom: 22,
                lineHeight: 1.08,
                color: '#E8F4FF',
              }}
            >
              אני בונה מעטפת שיווק<br />
              שמביאה עסקים{' '}
              <span className="gradient-text">לצמיחה אמיתית</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING, delay: 0.34 }}
              style={{
                color: 'rgba(230,240,255,0.58)',
                fontSize: 'clamp(0.97rem,1.6vw,1.1rem)',
                lineHeight: 1.82,
                marginBottom: 38,
                maxWidth: isLg ? 500 : 'none',
              }}
            >
              תוכן AI המוביל בישראל, אתרים וחנויות ברמה שמגיע לכם וקמפיינים שמביאים תוצאות — הכל תחת מעטפת אחת של צמיחה מבוססת תוצאות.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING, delay: 0.42 }}
              style={{
                display: 'flex', gap: 14, flexWrap: 'wrap',
                justifyContent: isLg ? 'flex-start' : 'center',
                marginBottom: 30,
              }}
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
                  <span>צרו קשר עכשיו</span>
                </button>
              </a>

              <a
                href="#websites"
                style={{ textDecoration: 'none' }}
                onClick={e => { e.preventDefault(); document.querySelector('#websites')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                <button className="btn-outline">
                  <span>ראו תוצאות</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 5l-7 7 7 7"/>
                  </svg>
                </button>
              </a>
            </motion.div>

            {/* Trust note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.58, duration: 0.5 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                justifyContent: isLg ? 'flex-start' : 'center',
                color: 'rgba(200,220,255,0.45)', fontSize: '0.77rem', fontWeight: 500,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <circle cx="6" cy="6" r="5" stroke="rgba(0,212,255,0.45)" strokeWidth="1"/>
                <polyline points="3.5,6 5.2,7.8 8.5,4.2" stroke="#00d4ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <span>שיחת ייעוץ ואפיון ללא עלות</span>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}
