import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BASE = import.meta.env.BASE_URL
const SPRING = { type: 'spring', stiffness: 220, damping: 26 }
const HOVER_SPRING = { type: 'spring', stiffness: 380, damping: 28 }

const allProjects = [
  { name: 'Zenora Jewelry',       label: 'חנות Shopify',  img: `${BASE}images/shopify/store-1.png`, color: '#1a1228' },
  { name: 'Taylors Wine',         label: 'חנות Shopify',  img: `${BASE}images/shopify/store-2.png`, color: '#0a1a10' },
  { name: 'Chrome Japan',         label: 'חנות Shopify',  img: `${BASE}images/shopify/store-3.png`, color: '#0d1520' },
  { name: 'Recycled Cotton',      label: 'חנות Shopify',  img: `${BASE}images/shopify/store-4.png`, color: '#1a1008' },
  { name: 'Zano — סטודיו הפקה',  label: 'אתר תדמית',     img: `${BASE}images/websites/zano.png`,   color: '#1a1208' },
  { name: 'Lilach — עיצוב שיער', label: 'אתר עסקי',      img: `${BASE}images/websites/lilach.png`, color: '#1a0818' },
  { name: 'Windows 4U',           label: 'דף נחיתה',       img: null,                                color: '#0a1428' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const itemVariant = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: SPRING },
}

/* ── Placeholder screen for projects without a screenshot ── */
function Placeholder({ color }) {
  const acc = 'rgba(26,111,255,0.25)'
  return (
    <div style={{
      width: '100%', height: '100%',
      background: `linear-gradient(155deg, ${color} 0%, #060b14 100%)`,
      display: 'flex', flexDirection: 'column', gap: 8, padding: '14px 12px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: 44, height: 6, borderRadius: 4, background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ width: 36, height: 14, borderRadius: 4, background: acc }} />
      </div>
      <div style={{ flex: 1, borderRadius: 5, background: 'rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 35% 55%, ${acc} 0%, transparent 65%)` }} />
        <div style={{ position: 'absolute', bottom: 10, right: 10, display: 'flex', flexDirection: 'column', gap: 5 }}>
          <div style={{ width: 80, height: 7, borderRadius: 4, background: 'rgba(255,255,255,0.14)' }} />
          <div style={{ width: 52, height: 5, borderRadius: 3, background: 'rgba(255,255,255,0.07)' }} />
          <div style={{ width: 38, height: 14, borderRadius: 4, background: acc, marginTop: 2 }} />
        </div>
      </div>
      <div style={{ display: 'flex', gap: 5 }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ flex: 1, height: 28, borderRadius: 4, background: 'rgba(255,255,255,0.04)' }} />
        ))}
      </div>
    </div>
  )
}

/* ── MacBook frame — single unified size ── */
function MacBookFrame({ img, color, name }) {
  return (
    <div style={{ width: '100%', position: 'relative' }}>
      {/* Screen lid */}
      <div style={{
        background: 'linear-gradient(180deg, #58585a 0%, #444446 55%, #383838 100%)',
        borderRadius: '10px 10px 2px 2px',
        padding: '2.5px 2.5px 1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08), 0 12px 40px rgba(0,0,0,0.55)',
      }}>
        <div style={{
          background: '#0d0d0f',
          borderRadius: '8px 8px 1px 1px',
          padding: '7px 4px 4px',
        }}>
          {/* Camera dot */}
          <div style={{
            width: 4, height: 4, borderRadius: '50%',
            background: '#252528',
            margin: '0 auto 5px',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.55)',
            position: 'relative',
          }}>
            <div style={{
              width: '38%', height: '38%', borderRadius: '50%',
              background: '#3a3a3e',
              position: 'absolute', top: '31%', left: '31%',
            }} />
          </div>

          {/* Screen */}
          <div style={{
            aspectRatio: '16/10',
            background: '#000',
            borderRadius: 2,
            overflow: 'hidden',
            position: 'relative',
          }}>
            {img ? (
              <img
                src={img}
                alt={name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />
            ) : (
              <Placeholder color={color} />
            )}

            {/* Name pill inside screen */}
            <div style={{
              position: 'absolute', bottom: 6, right: 6, zIndex: 2, pointerEvents: 'none',
            }}>
              <span style={{
                fontSize: '8px', fontWeight: 700, color: '#fff',
                background: 'rgba(6,10,22,0.78)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.13)',
                borderRadius: 100,
                padding: '2px 7px',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}>
                {name}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hinge */}
      <div style={{
        height: 2,
        background: 'linear-gradient(180deg, #111113 0%, #222224 100%)',
        margin: '0 1.5%',
        boxShadow: '0 1px 2px rgba(0,0,0,0.5)',
      }} />

      {/* Base */}
      <div style={{
        background: 'linear-gradient(180deg, #4c4c4e 0%, #3a3a3c 55%, #2c2c2e 100%)',
        borderRadius: '0 0 5px 5px',
        height: 14,
        width: '108%',
        marginLeft: '-4%',
        border: '1px solid rgba(0,0,0,0.4)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        position: 'relative',
        boxShadow: '0 6px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}>
        {/* Trackpad notch */}
        <div style={{
          width: '22%', height: 6,
          background: 'linear-gradient(180deg, #424244 0%, #363638 100%)',
          border: '1px solid rgba(0,0,0,0.35)',
          borderRadius: 2,
          position: 'absolute',
          bottom: 3, left: '50%',
          transform: 'translateX(-50%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
        }} />
      </div>
    </div>
  )
}

export default function WebsitesSection() {
  const headerRef = useRef(null)
  const gridRef   = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const gridInView   = useInView(gridRef,   { once: true, margin: '-60px' })

  return (
    <section
      id="websites"
      style={{ padding: 'clamp(60px,8vw,120px) 0 clamp(48px,6vw,100px)', position: 'relative' }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 600,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(26,111,255,0.07) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="relative max-w-6xl mx-auto px-6" style={{ zIndex: 1 }}>

        {/* Headline */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 18 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: 52 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg, transparent, #1a6fff)' }} />
            <div className="tag-pill">אתרים ותשתיות</div>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(270deg, transparent, #1a6fff)' }} />
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', marginBottom: 18, color: '#E8F4FF' }}>
            דפי נחיתה, חנויות ואתרים{' '}
            <span className="gradient-text">שנבנו להמיר</span>
          </h2>
          <p style={{ color: 'rgba(210,230,255,0.68)', fontSize: 'clamp(1rem,1.8vw,1.1rem)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            כל התנועה שנוצרת מהתוכן והפרסום זורמת לאתר שנבנה בצורה מדויקת. מסר ברור, מבנה נכון וחוויה שמובילה לפעולה.
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          ref={gridRef}
          variants={container}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="portfolio-grid"
        >
          {allProjects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariant}
              whileHover={{ y: -8, transition: HOVER_SPRING }}
              className="portfolio-item"
            >
              <MacBookFrame
                img={project.img}
                color={project.color}
                name={project.name}
              />

              {/* Label below */}
              <div style={{ textAlign: 'center', marginTop: 10 }}>
                <p style={{
                  color: 'rgba(220,235,255,0.75)',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  margin: '0 0 2px',
                  letterSpacing: '-0.01em',
                }}>
                  {project.name}
                </p>
                <p style={{
                  color: 'rgba(200,220,255,0.35)',
                  fontSize: '0.66rem',
                  fontWeight: 600,
                  margin: 0,
                  letterSpacing: '0.03em',
                }}>
                  {project.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Responsive grid styles */}
      <style>{`
        .portfolio-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }
        .portfolio-item {
          width: calc(25% - 15px);
          min-width: 0;
          flex-shrink: 0;
        }
        @media (max-width: 1024px) {
          .portfolio-item { width: calc(33.33% - 14px); }
        }
        @media (max-width: 680px) {
          .portfolio-item { width: calc(50% - 10px); }
          .portfolio-grid { gap: 14px; }
        }
        @media (max-width: 380px) {
          .portfolio-item { width: 100%; }
        }
      `}</style>
    </section>
  )
}
