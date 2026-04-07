import { useEffect, useRef, useState } from 'react'
import veloLogoSrc from '../assets/velo_logo.png'

/* ══════════════════════════════════════════════════════════════
   GRID LAYOUT (desktop lg+)
   ┌──────────────┬──────────────┬──────────────┐
   │  Web Design  │ Landing Page │  Ecom Store  │  row 1
   ├──────────────┼──────────────┼──────────────┤
   │  AI Content  │  LOGO CARD   │  Campaigns   │  row 2
   └──────────────┴──────────────┴──────────────┘

   Tablet (md): 2-col auto-placement
   Mobile: single column
   ════════════════════════════════════════════════════════════ */

/* ── Icon SVG components ── */
const MonitorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>
)

const LayoutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="18" rx="2"/>
    <path d="M2 9h20M9 21V9"/>
  </svg>
)

const ShoppingBagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
)

const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 4.6 4.5 1-4.5 1-1.5 4.6-1.5-4.6-4.5-1 4.5-1L12 3z"/>
    <path d="M5.5 19.5l.5-1.5 1.5-.5-1.5-.5-.5-1.5-.5 1.5-1.5.5 1.5.5.5 1.5z"/>
    <path d="M19 13.5l.4-1.2 1.2-.4-1.2-.4-.4-1.2-.4 1.2-1.2.4 1.2.4.4 1.2z"/>
  </svg>
)

const TrendingUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
)

/* ── Service data array ── */
const SERVICES = [
  {
    icon: <MonitorIcon />, name: 'עיצוב אתרים לעסקים וחברות', tag: 'עיצוב',
    desc: 'אתרים שנבנים מתוך חשיבה מותגית עם דגש על עיצוב וחווית לקוח פרימיום.',
    col: 1, row: 1,
  },
  {
    icon: <LayoutIcon />, name: 'עיצוב דפי נחיתה', tag: 'עיצוב',
    desc: 'דפי נחיתה ממותגים וממוקדים להמרות ויצירת לידים רלוונטיים ואיכותיים.',
    col: 2, row: 1,
  },
  {
    icon: <ShoppingBagIcon />, name: 'עיצוב חנויות איקומרס - shopify', tag: 'איקומרס',
    desc: 'חנויות Shopify שמוכרות. מהמבנה ועד לחוויית הקנייה, תהליך ממוקד להמרות ברווחיות גבוהה.',
    col: 3, row: 1,
  },
  {
    icon: <SparklesIcon />, name: 'יצירת תוכן AI מתקדם', tag: 'תוכן',
    desc: 'תוכן איכותי שמיוצר בקצב גבוה, בלי תלות בהפקות יקרות, ומותאם לתחום ולקהל שלכם. מוצר, תדמית, פרסומות ו-UGC — ליצירת מיתוג פרימיום.',
    col: 1, row: 2,
  },
  {
    icon: <TrendingUpIcon />, name: 'ניהול קמפיינים', tag: 'פרסום',
    desc: 'ניהול הפרסום בפלטפורמות הרלוונטיות מקצה לקצה, יצירת אוטומציות לניהול לידים ולקוחות.',
    col: 3, row: 2,
  },
]

/* ── Category tag colors ── */
const TAG_COLORS = {
  'עיצוב':      { bg: 'rgba(26,111,255,0.1)',   border: 'rgba(26,111,255,0.25)',  text: '#4d9fff' },
  'איקומרס':   { bg: 'rgba(0,180,255,0.1)',    border: 'rgba(0,180,255,0.25)',   text: '#00c8ff' },
  'תוכן':       { bg: 'rgba(120,80,255,0.12)',  border: 'rgba(120,80,255,0.28)',  text: '#a07dff' },
  'פרסום':      { bg: 'rgba(0,212,120,0.1)',    border: 'rgba(0,212,120,0.25)',   text: '#00d478' },
  'טכנולוגיה': { bg: 'rgba(255,160,50,0.1)',   border: 'rgba(255,160,50,0.25)',  text: '#ffb347' },
}

/* ── Single service card ── */
function ServiceCard({ svc, visible, index, isLg }) {
  const { icon, name, desc, tag, col, row } = svc
  const tc = TAG_COLORS[tag] ?? TAG_COLORS['עיצוב']

  return (
    <div
      style={{
        gridColumn: isLg ? col : undefined,
        gridRow:    isLg ? row : undefined,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 80}ms`,
      }}
    >
      <div className="svc-card" style={{ height: '100%', cursor: 'default' }}>
        <div style={{
          position: 'relative', zIndex: 2,
          padding: '28px 26px 24px',
          display: 'flex', flexDirection: 'column', gap: 16, height: '100%',
          boxSizing: 'border-box',
        }}>
          <div className="svc-icon-wrap" style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            background: 'rgba(26,111,255,0.1)',
            border: '1px solid rgba(26,111,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#4d9fff',
          }}>
            {icon}
          </div>

          <h3 style={{
            color: '#fff', fontWeight: 700,
            fontSize: 'clamp(1rem,1.6vw,1.18rem)',
            lineHeight: 1.25, margin: 0,
          }}>
            {name}
          </h3>

          <p className="svc-desc" style={{
            color: '#8ba3c7', fontSize: '0.84rem',
            lineHeight: 1.65, margin: 0, flex: 1,
          }}>
            {desc}
          </p>

          <div style={{ marginTop: 'auto' }}>
            <span style={{
              display: 'inline-block',
              background: tc.bg, border: `1px solid ${tc.border}`,
              borderRadius: 100, padding: '3px 11px',
              fontSize: '0.7rem', fontWeight: 700,
              color: tc.text, letterSpacing: '0.05em',
            }}>
              {tag}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Logo card ── */
function LogoCard({ visible, index, isLg }) {
  return (
    <div
      style={{
        gridColumn: isLg ? 2 : undefined,
        gridRow:    isLg ? 2 : undefined,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 80}ms`,
      }}
    >
      <div style={{
        height: '100%',
        borderRadius: 16,
        border: '1px solid rgba(99,179,255,0.15)',
        background: 'radial-gradient(circle at 50% 45%, #0d1e38 0%, #050810 100%)',
        boxShadow: '0 0 48px rgba(26,111,255,0.12), inset 0 1px 0 rgba(255,255,255,0.06)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '28px 20px',
        gap: 14, textAlign: 'center',
        position: 'relative', overflow: 'hidden',
        minHeight: 200,
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(26,111,255,0.09) 0%, transparent 72%)',
          pointerEvents: 'none',
        }} />

        <img
          src={veloLogoSrc}
          alt="VELO"
          style={{ width: 'clamp(100px, 68%, 140px)', objectFit: 'contain', position: 'relative', zIndex: 1 }}
        />

        <p style={{
          color: '#ffffff', fontSize: '0.97rem',
          fontWeight: 700, letterSpacing: '0.03em',
          lineHeight: 1.5, position: 'relative', zIndex: 1, margin: 0,
        }}>
          הכל תחת קורת גג אחת
        </p>

        <div style={{
          display: 'flex', gap: 6, flexWrap: 'wrap',
          justifyContent: 'center', position: 'relative', zIndex: 1,
        }}>
          {['עיצוב', 'תוכן', 'פרסום'].map(cat => (
            <span key={cat} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 100, padding: '2px 9px',
              fontSize: '0.64rem', fontWeight: 600,
              color: 'rgba(150,185,220,0.5)',
              letterSpacing: '0.04em',
            }}>
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Section export ── */
export default function ServicesGrid() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  /* ── Responsive breakpoints ── */
  const [isLg, setIsLg] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  )
  const [isMd, setIsMd] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 640px)').matches
  )

  useEffect(() => {
    const lgMq = window.matchMedia('(min-width: 1024px)')
    const mdMq = window.matchMedia('(min-width: 640px)')
    const updateLg = () => setIsLg(lgMq.matches)
    const updateMd = () => setIsMd(mdMq.matches)
    lgMq.addEventListener('change', updateLg)
    mdMq.addEventListener('change', updateMd)
    return () => {
      lgMq.removeEventListener('change', updateLg)
      mdMq.removeEventListener('change', updateMd)
    }
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  /* Grid columns: lg=3, md=2, mobile=1 */
  const gridCols = isLg ? 'repeat(3, 1fr)' : (isMd ? 'repeat(2, 1fr)' : '1fr')

  return (
    <section id="services" ref={sectionRef} className="py-12 relative overflow-hidden">
      <div className="orb orb-blue  w-[500px] h-[500px] -top-10 -right-32 opacity-10" />
      <div className="orb orb-cyan  w-[380px] h-[380px]  bottom-10 -left-20  opacity-8" />

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <div style={{
          textAlign: 'center', marginBottom: 56,
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.55s ease, transform 0.55s ease',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ height: 1, width: 48, background: 'linear-gradient(90deg,transparent,#1a6fff)' }} />
            <div className="tag-pill">איך אנחנו יכולים לעזור לכם?</div>
            <div style={{ height: 1, width: 48, background: 'linear-gradient(270deg,transparent,#1a6fff)' }} />
          </div>

          <h2 className="font-black leading-tight" style={{
            fontSize: 'clamp(2rem,4.5vw,3.4rem)', letterSpacing: '-0.02em', marginBottom: 16,
          }}>
            <span className="gradient-text">השירותים</span> שלנו
          </h2>

          <p style={{ color: '#8ba3c7', fontSize: '1.05rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
            כל שירות נבנה כחלק מהמערכת, לא כפעולה עצמאית
          </p>
        </div>

        {/* ── Responsive grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: gridCols,
          gridAutoRows: 'minmax(220px, auto)',
          gap: '18px',
        }}>
          {/* Service cards 0–3 */}
          {[0, 1, 2, 3].map(i => (
            <ServiceCard key={i} svc={SERVICES[i]} visible={visible} index={i} isLg={isLg} />
          ))}

          {/* Logo card — col 2 row 2 on desktop, auto on smaller */}
          <LogoCard visible={visible} index={4} isLg={isLg} />

          {/* Service card 4 — Campaign Mgmt */}
          <ServiceCard svc={SERVICES[4]} visible={visible} index={5} isLg={isLg} />
        </div>

        {/* ── CTA nudge below grid ── */}
        <div style={{
          textAlign: 'center',
          marginTop: 40,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.6s ease 0.55s',
        }}>
          <p style={{ color: '#6a88ad', fontSize: '0.92rem', marginBottom: 14 }}>
            לא בטוחים איזה שירות מתאים לכם?
          </p>
          <a href="#contact">
            <button className="btn-primary" style={{ fontSize: '0.88rem' }}>
              <span>דברו איתנו ונבין יחד</span>
            </button>
          </a>
        </div>

      </div>
    </section>
  )
}
