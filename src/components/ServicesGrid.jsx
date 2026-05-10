import { useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import veloLogoSrc from '../assets/velo_logo.png'

/* ── Spring config ── */
const SPRING = { type: 'spring', stiffness: 220, damping: 26 }
const HOVER_SPRING = { type: 'spring', stiffness: 400, damping: 30 }

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const tile = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: SPRING },
}

/* ── Spotlight cursor tracking ── */
function useSpotlight() {
  const ref = useRef(null)
  const onMouseMove = useCallback((e) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--sx', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--sy', `${e.clientY - r.top}px`)
  }, [])
  return { ref, onMouseMove }
}

/* ── Icon SVGs ── */
const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 4.6 4.5 1-4.5 1-1.5 4.6-1.5-4.6-4.5-1 4.5-1L12 3z"/>
    <path d="M5.5 19.5l.5-1.5 1.5-.5-1.5-.5-.5-1.5-.5 1.5-1.5.5 1.5.5.5 1.5z"/>
    <path d="M19 13.5l.4-1.2 1.2-.4-1.2-.4-.4-1.2-.4 1.2-1.2.4 1.2.4.4 1.2z"/>
  </svg>
)
const MonitorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
  </svg>
)
const LayoutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 9h20M9 21V9"/>
  </svg>
)
const ShopIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
  </svg>
)
const TrendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
)
const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7"/>
  </svg>
)

/* ── Featured AI Content tile (2×2) ── */
function FeaturedTile({ visible }) {
  const { ref, onMouseMove } = useSpotlight()
  return (
    <motion.div
      variants={tile}
      style={{ gridColumn: 'span 2', gridRow: 'span 2' }}
      whileHover={{ y: -7, transition: HOVER_SPRING }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        style={{
          height: '100%', minHeight: 340,
          position: 'relative', overflow: 'hidden',
          borderRadius: 20,
          border: '1px solid rgba(255,255,255,0.08)',
          borderTop: '1px solid rgba(0,212,255,0.32)',
          background: 'linear-gradient(150deg, rgba(6,10,28,0.98) 0%, rgba(8,14,36,0.99) 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 12px 48px rgba(0,0,0,0.4)',
          cursor: 'default',
        }}
      >
        {/* Spotlight overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
          background: 'radial-gradient(300px circle at var(--sx,-400px) var(--sy,-400px), rgba(26,111,255,0.07) 0%, transparent 65%)',
        }} />

        {/* Top accent beam */}
        <div style={{
          position: 'absolute', top: 0, left: '8%', right: '8%', height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.6), transparent)',
          zIndex: 2,
        }} />

        {/* Ambient glow */}
        <div style={{
          position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
          width: '80%', height: '60%',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(26,111,255,0.12) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div style={{ position: 'relative', zIndex: 3, padding: 'clamp(28px,3.5vw,40px)', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Tag */}
          <span style={{
            alignSelf: 'flex-start',
            background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
            borderRadius: 100, padding: '4px 12px',
            fontSize: '0.66rem', fontWeight: 700, color: '#00d4ff', letterSpacing: '0.08em',
          }}>
            AI CONTENT
          </span>

          {/* Icon */}
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: 'rgba(26,111,255,0.1)', border: '1px solid rgba(26,111,255,0.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#4d9fff',
          }}>
            <SparklesIcon />
          </div>

          <div>
            <h3 style={{
              color: '#E8F4FF', fontWeight: 800,
              fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)',
              lineHeight: 1.2, margin: '0 0 12px',
              letterSpacing: '-0.03em',
            }}>
              יצירת תוכן AI מתקדם
            </h3>
            <p style={{
              color: 'rgba(210,225,255,0.58)',
              fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
              lineHeight: 1.75, margin: 0, maxWidth: 440,
            }}>
              תוכן שנוצר בקצב גבוה, בלי תלות בהפקות יקרות, ומותאם לתחום ולקהל שלכם. מוצר, תדמית, פרסומות ו-UGC — מיתוג פרימיום שמוכר.
            </p>
          </div>

          {/* Sub-tags */}
          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
            {['תוכן מוצר', 'UGC', 'פרסומות', 'AI Avatar'].map(f => (
              <span key={f} style={{
                background: 'rgba(77,159,255,0.06)', border: '1px solid rgba(77,159,255,0.14)',
                borderRadius: 8, padding: '4px 11px',
                fontSize: '0.68rem', fontWeight: 600,
                color: 'rgba(140,185,255,0.7)', letterSpacing: '0.02em',
              }}>{f}</span>
            ))}
          </div>

          {/* Link */}
          <div style={{ marginTop: 'auto' }}>
            <Link to="/services/ai-content" style={{ textDecoration: 'none' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                color: '#4d9fff', fontSize: '0.78rem', fontWeight: 700,
                opacity: 0.8, transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}
              >
                ראו כיצד זה עובד <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Compact service tile ── */
function ServiceTile({ icon, name, desc, accent, path, gridColumn, gridRow }) {
  const { ref, onMouseMove } = useSpotlight()
  return (
    <motion.div
      variants={tile}
      style={{ gridColumn, gridRow }}
      whileHover={{ y: -7, transition: HOVER_SPRING }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        style={{
          height: '100%', position: 'relative', overflow: 'hidden',
          borderRadius: 20,
          border: '1px solid rgba(255,255,255,0.07)',
          borderTop: `1px solid ${accent}30`,
          background: 'linear-gradient(150deg, rgba(8,14,34,0.98) 0%, rgba(5,9,22,0.99) 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.35)',
          padding: '24px 22px', boxSizing: 'border-box',
          display: 'flex', flexDirection: 'column', gap: 14,
          cursor: 'default',
          transition: 'border-color 0.25s ease, box-shadow 0.35s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${accent}25`
          e.currentTarget.style.borderTopColor = `${accent}55`
          e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.09), 0 24px 56px rgba(0,0,0,0.5), 0 0 0 1px ${accent}0A`
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
          e.currentTarget.style.borderTopColor = `${accent}30`
          e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.35)'
        }}
      >
        {/* Spotlight */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `radial-gradient(220px circle at var(--sx,-300px) var(--sy,-300px), ${accent}09 0%, transparent 65%)`,
        }} />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 14, height: '100%' }}>
          <div style={{
            width: 42, height: 42, borderRadius: 11, flexShrink: 0,
            background: `${accent}10`, border: `1px solid ${accent}22`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: accent,
          }}>
            {icon}
          </div>

          <h3 style={{ color: '#E8F4FF', fontWeight: 700, fontSize: '1rem', lineHeight: 1.3, margin: 0, letterSpacing: '-0.02em' }}>
            {name}
          </h3>

          <p style={{ color: 'rgba(200,220,255,0.52)', fontSize: '0.82rem', lineHeight: 1.7, margin: 0, flex: 1 }}>
            {desc}
          </p>

          <Link to={path} style={{ textDecoration: 'none', marginTop: 'auto' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              color: accent, fontSize: '0.72rem', fontWeight: 700,
              opacity: 0.75, transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.75'}
            >
              למידע נוסף <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Section header ── */
function SectionHeader({ inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ textAlign: 'center', marginBottom: 52 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg,transparent,#00d4ff)' }} />
        <div className="tag-pill">השירותים שלנו</div>
        <div style={{ height: 1, width: 44, background: 'linear-gradient(270deg,transparent,#00d4ff)' }} />
      </div>
      <h2 className="font-black" style={{
        fontSize: 'clamp(2rem,4.5vw,3.4rem)',
        letterSpacing: '-0.03em', marginBottom: 14, color: '#E8F4FF', lineHeight: 1.1,
      }}>
        כל הכלים לצמיחה —
        <br />
        <span className="gradient-text">תחת קורת גג אחת</span>
      </h2>
      <p style={{ color: 'rgba(230,240,255,0.48)', fontSize: '1rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
        כל שירות חזק לבד. ביחד הם מכונה שלמה. אנחנו עובדים לפי מה שמתאים לכם.
      </p>
    </motion.div>
  )
}

/* ── Bottom package strip ── */
function PackageStrip({ inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        marginTop: 16,
        borderRadius: 20,
        border: '1px solid rgba(255,255,255,0.07)',
        borderTop: '1px solid rgba(77,159,255,0.2)',
        background: 'linear-gradient(150deg, rgba(8,14,34,0.97) 0%, rgba(5,9,22,0.99) 100%)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
        padding: '24px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 20,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <img src={veloLogoSrc} alt="VELO" style={{ height: 36, objectFit: 'contain', mixBlendMode: 'screen', opacity: 0.9 }} />
        <div>
          <p style={{ color: '#E8F4FF', fontWeight: 700, fontSize: '0.95rem', margin: '0 0 3px', letterSpacing: '-0.01em' }}>
            חבילה מלאה — או לפי הצורך שלכם
          </p>
          <p style={{ color: 'rgba(200,220,255,0.45)', fontSize: '0.78rem', margin: 0 }}>
            כל שירות זמין בנפרד, בשניים, או כמעטפת שיווק מלאה. נבנה יחד את מה שמתאים.
          </p>
        </div>
      </div>
      <a href="#contact" style={{ textDecoration: 'none' }}>
        <button className="btn-primary" style={{ fontSize: '0.85rem' }}>
          <span>שיחת ייעוץ ואפיון</span>
        </button>
      </a>
    </motion.div>
  )
}

/* ── Main export ── */
export default function ServicesGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const services = [
    { icon: <MonitorIcon />, name: 'עיצוב אתרים לעסקים', desc: 'אתרים שנבנים מתוך חשיבה מותגית עם דגש על עיצוב וחווית לקוח.', accent: '#4d9fff', path: '/services/web-design' },
    { icon: <LayoutIcon />, name: 'עיצוב דפי נחיתה', desc: 'דפי נחיתה ממותגים וממוקדים ליצירת לידים רלוונטיים ואיכותיים.', accent: '#00d4ff', path: '/services/landing-pages' },
    { icon: <ShopIcon />, name: 'חנויות Shopify', desc: 'חנויות שמוכרות. מהמבנה ועד לחוויית הקנייה, ממוקד להמרות.', accent: '#4d9fff', path: '/services/ecommerce' },
    { icon: <TrendIcon />, name: 'ניהול קמפיינים', desc: 'ניהול פרסום בפלטפורמות הרלוונטיות, מקצה לקצה עם אוטומציות.', accent: '#00d4ff', path: '/services/paid-ads' },
  ]

  return (
    <section id="services" style={{ padding: 'clamp(60px,8vw,100px) 0', position: 'relative' }}>
      {/* Ambient orbs */}
      <div style={{ position: 'absolute', top: '10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,111,255,0.08) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <SectionHeader inView={inView} />

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto auto',
            gap: 14,
          }}
          className="services-bento"
        >
          {/* Featured — col 1-2, row 1-2 */}
          <FeaturedTile visible={inView} />

          {/* Web Design — col 3, row 1 */}
          <ServiceTile {...services[0]} gridColumn="3" gridRow="1" />

          {/* Landing Pages — col 3, row 2 */}
          <ServiceTile {...services[1]} gridColumn="3" gridRow="2" />

          {/* Ecommerce — col 1, row 3 */}
          <ServiceTile {...services[2]} gridColumn="1" gridRow="3" />

          {/* Campaigns — col 2-3, row 3 (spans wider for visual balance) */}
          <motion.div
            variants={tile}
            style={{ gridColumn: '2 / span 2', gridRow: '3' }}
            whileHover={{ y: -7, transition: HOVER_SPRING }}
          >
            <div style={{
              height: '100%', position: 'relative', overflow: 'hidden',
              borderRadius: 20,
              border: '1px solid rgba(255,255,255,0.07)',
              borderTop: '1px solid rgba(77,159,255,0.3)',
              background: 'linear-gradient(150deg, rgba(8,14,34,0.98) 0%, rgba(5,9,22,0.99) 100%)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.35)',
              padding: '24px 28px', boxSizing: 'border-box',
              display: 'flex', flexDirection: 'column', gap: 14, cursor: 'default',
              transition: 'border-color 0.25s, box-shadow 0.35s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(77,159,255,0.2)'
                e.currentTarget.style.borderTopColor = 'rgba(77,159,255,0.55)'
                e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.09), 0 24px 56px rgba(0,0,0,0.5)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.borderTopColor = 'rgba(77,159,255,0.3)'
                e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.35)'
              }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 11,
                background: 'rgba(77,159,255,0.1)', border: '1px solid rgba(77,159,255,0.22)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4d9fff',
              }}>
                <TrendIcon />
              </div>
              <h3 style={{ color: '#E8F4FF', fontWeight: 700, fontSize: '1rem', lineHeight: 1.3, margin: 0, letterSpacing: '-0.02em' }}>
                ניהול קמפיינים ופרסום
              </h3>
              <p style={{ color: 'rgba(200,220,255,0.52)', fontSize: '0.82rem', lineHeight: 1.7, margin: 0 }}>
                ניהול הפרסום בפלטפורמות הרלוונטיות מקצה לקצה — Meta, Google, TikTok. יצירת אוטומציות לניהול לידים ומעקב תוצאות.
              </p>
              <Link to="/services/paid-ads" style={{ textDecoration: 'none', marginTop: 'auto' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: '#4d9fff', fontSize: '0.72rem', fontWeight: 700, opacity: 0.75, transition: 'opacity 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0.75'}
                >
                  למידע נוסף <ArrowIcon />
                </span>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <PackageStrip inView={inView} />
      </div>

      {/* Mobile override */}
      <style>{`
        @media (max-width: 768px) {
          .services-bento {
            grid-template-columns: 1fr !important;
          }
          .services-bento > * {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1023px) {
          .services-bento {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .services-bento > *:first-child {
            grid-column: span 2 !important;
            grid-row: auto !important;
          }
          .services-bento > *:last-child {
            grid-column: span 2 !important;
          }
        }
      `}</style>
    </section>
  )
}
