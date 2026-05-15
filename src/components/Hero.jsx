import { useRef } from 'react'
import { motion } from 'framer-motion'
import HeroGradientAnimation from './HeroGradientAnimation'

const SPRING = { type: 'spring', stiffness: 200, damping: 28 }

const CLIENTS = [
  'Zenora Jewelry',
  'Taylors Wine',
  'Zano Studio',
  'Lilach',
  'Chrome Japan',
]

export default function Hero() {
  const scrollToWork = (e) => { e.preventDefault(); document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' }) }
  const scrollToCta  = (e) => { e.preventDefault(); document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        paddingTop: 'clamp(120px, 16vh, 180px)',
        paddingBottom: 'clamp(80px, 8vh, 120px)',
        direction: 'rtl',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Hero aurora — goo filter, mouse-reactive */}
      <HeroGradientAnimation />

      <div style={{
        maxWidth: 1100, margin: '0 auto',
        padding: '0 clamp(20px, 5vw, 48px)',
        position: 'relative', zIndex: 5,
        textAlign: 'center',
        width: '100%',
      }}>
        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.05 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem, 7vw, 5.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.045em',
            lineHeight: 1.02,
            color: 'var(--ink-100)',
            maxWidth: 980,
            margin: '0 auto 26px',
          }}
        >
          השיווק הדיגיטלי שלך, <br />
          <span className="gradient-accent">תחת קורת גג אחת.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.18 }}
          style={{
            color: 'var(--ink-300)',
            fontSize: 'clamp(1.05rem, 1.7vw, 1.25rem)',
            lineHeight: 1.65,
            maxWidth: 660,
            margin: '0 auto 40px',
          }}
        >
          אתרים שמוכרים, תוכן שמושך עיניים וקמפיינים שמביאים לקוחות —
          הכל מנוהל בשבילכם, מהיום הראשון. אתם מתעסקים בעסק, אנחנו דואגים לכל השאר.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.28 }}
          style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 28 }}
        >
          <a href="#cta" onClick={scrollToCta} className="btn-aurora">
            <span>בואו נדבר</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#case-studies" onClick={scrollToWork} className="btn-ghost">
            <span>ראו את העבודות שלנו</span>
          </a>
        </motion.div>

        {/* Trust micro-line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          style={{
            color: 'var(--ink-500)',
            fontSize: '0.88rem',
            margin: '0 0 56px',
          }}
        >
          פגישת ייעוץ ראשונית — חינם, ללא התחייבות.
        </motion.p>

        {/* Client brands strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--ink-500)',
            marginBottom: 16,
          }}>
            עבדנו עם
          </p>
          <div style={{
            display: 'flex',
            gap: 'clamp(18px, 4vw, 44px)',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            {CLIENTS.map((name) => (
              <span
                key={name}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.78rem, 1.2vw, 0.92rem)',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  color: 'rgba(245,245,247,0.22)',
                  whiteSpace: 'nowrap',
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
