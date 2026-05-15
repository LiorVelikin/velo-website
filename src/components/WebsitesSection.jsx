import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'

const BASE = import.meta.env.BASE_URL
const SPRING       = { type: 'spring', stiffness: 220, damping: 26 }
const HOVER_SPRING = { type: 'spring', stiffness: 380, damping: 28 }

const METRICS   = [
  { num: '+140%',   lbl: 'יותר רכישות' },
  { num: '1.4s',    lbl: 'זמן טעינה' },
  { num: '100/100', lbl: 'נגישות מלאה' },
]
const TECH_STACK = ['Figma', 'Shopify', 'Next.js', 'Webflow', 'Framer', 'WordPress']

/*
  6 portfolio images — each already carries its own device frame (MacBook / iPhone / monitor).
  We display them raw with drop-shadow so the device chrome stays crisp.
*/
const PORTFOLIO = [
  { src: `${BASE}images/portfolio/zano-laptop.png`,    name: 'Zano Studio',   label: 'Next.js'   },
  { src: `${BASE}images/portfolio/geva-laptop.png`,    name: 'Geva',          label: 'Next.js'   },
  { src: `${BASE}images/portfolio/beauty-laptop.png`,  name: 'Lilach',        label: 'WordPress' },
  { src: `${BASE}images/portfolio/zenora-monitor.png`, name: 'Zenora',        label: 'Shopify'   },
  { src: `${BASE}images/portfolio/zenora-phone-1.png`, name: 'Zenora Mobile', label: 'Mobile'    },
  { src: `${BASE}images/portfolio/zenora-phone-2.png`, name: 'Zenora Mobile', label: 'Mobile'    },
]

/*
  Scattered layout — no fixed rows or columns.

  Size hierarchy:
    Zano laptop    58%  — dominant hero (widest, darkest, most dramatic)
    COCO laptop    46%  — secondary (elegant, center)
    Beauty laptop  40%  — mid size
    Zenora monitor 34%  — receding
    iPhone 1       21%  — tall accent (portrait)
    iPhone 2       19%  — small accent (portrait)

  All items are `position: absolute` in a container with overflow: visible.
  Tops and lefts are deliberately staggered so no three items align.
*/
/*
  2×2 grid feel — Zano spans the top row, Geva + Zenora share the second row.
  Giant portrait iPhones on the left/right edges as accent layers.
*/
const LAYOUT = [
  { i: 0, left: '12%', top:  '2%', w: '75%', rot: -1.0, z: 3, delay: 0.18 }, // Zano — top row (wide)
  { i: 1, left: '10%', top: '46%', w: '72%', rot:  1.0, z: 4, delay: 0.22 }, // Geva — second row (wide, like Zano)
  { i: 3, left: '48%', top: '44%', w: '50%', rot: -0.8, z: 3, delay: 0.30 }, // Zenora — second row right (same line as Geva)
  { i: 4, left: '-8%', top:  '5%', w: '52%', rot:  -4,  z: 6, delay: 0.20 }, // left iPhone
  { i: 5, left: '56%', top: '22%', w: '50%', rot:   3,  z: 6, delay: 0.26 }, // right iPhone
]

/* Single portfolio item — just the image, no badges */
function PortfolioItem({ item }) {
  return (
    <img
      src={item.src}
      alt={item.name}
      draggable={false}
      style={{
        width: '100%',
        display: 'block',
        filter: 'drop-shadow(0 18px 44px rgba(0,0,0,0.55)) drop-shadow(0 4px 12px rgba(0,0,0,0.32))',
        userSelect: 'none',
      }}
    />
  )
}

export default function WebsitesSection() {
  const ref        = useRef(null)
  const collageRef = useRef(null)
  const inView     = useInView(ref, { once: true, margin: '-80px' })

  /* track container width so absolute % positions work at all breakpoints */
  const [colW, setColW] = useState(540)
  useEffect(() => {
    const el = collageRef.current
    if (!el) return
    setColW(el.getBoundingClientRect().width)
    const ro = new ResizeObserver(([entry]) => setColW(entry.contentRect.width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <section
      id="websites"
      style={{ padding: 'clamp(60px, 8vw, 120px) 0', position: 'relative', direction: 'rtl', overflow: 'hidden' }}
    >
      {/* Colour blobs — left side (collage column) */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '10%', left: '-8%', width: 520, height: 480, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(34,211,238,0.22) 0%, transparent 65%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '2%', width: 460, height: 420, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(26,111,255,0.20) 0%, transparent 65%)', filter: 'blur(75px)' }} />
      </div>

      <div ref={ref} style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)', position: 'relative', zIndex: 1 }}>
        <div className="web-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 100px)', alignItems: 'center' }}>

          {/* ── TEXT COLUMN (right in RTL, order 0) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...SPRING }}
            style={{ order: 0 }}
          >
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4.4vw, 3.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: 'var(--ink-100)',
              marginBottom: 22,
            }}>
              אתרים שמוכרים <br />
              <span className="gradient-accent">גם בזמן שאתם ישנים.</span>
            </h2>

            <p style={{
              color: 'var(--ink-300)',
              fontSize: 'clamp(0.97rem, 1.5vw, 1.08rem)',
              lineHeight: 1.78,
              marginBottom: 28,
              maxWidth: 480,
            }}>
              אנחנו בונים אתרים מהבסיס — לא תבניות, לא העתק־הדבק. כל פרט מתוכנן כדי להפוך את המבקר ללקוח: מהירות, מבנה ברור, ומסר שמדבר אל הקהל שלכם. אתם מקבלים אתר שמוכר בעצמו, גם בלילה, גם בסוף שבוע.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
              {METRICS.map((m) => (
                <span key={m.lbl} className="metric-chip">
                  <span className="num">{m.num}</span>
                  <span className="lbl">{m.lbl}</span>
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 32 }}>
              {TECH_STACK.map((t) => <span key={t} className="tech-chip">{t}</span>)}
            </div>

            <a
              href="/services/web-design"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                color: 'var(--cyan)', fontSize: '0.94rem', fontWeight: 600,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => e.currentTarget.querySelector('.arr').style.transform = 'translateX(-4px)'}
              onMouseLeave={(e) => e.currentTarget.querySelector('.arr').style.transform = 'none'}
            >
              <span>ראו עוד אתרים שבנינו</span>
              <span className="arr" style={{ transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)' }}>←</span>
            </a>
          </motion.div>

          {/* ── PORTFOLIO COLLAGE (left in RTL, order 1) ── */}
          <motion.div
            ref={collageRef}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            style={{
              position: 'relative',
              order: 1,
              minHeight: 'clamp(860px, 108vw, 1100px)',
            }}
          >
            {/* Ambient glow */}
            <div style={{
              position: 'absolute',
              top: '-10%', left: '-15%', right: '-5%', bottom: '-10%',
              background: 'radial-gradient(ellipse at 40% 40%, rgba(34,211,238,0.10) 0%, rgba(26,111,255,0.06) 45%, transparent 70%)',
              filter: 'blur(55px)',
              pointerEvents: 'none',
            }} />

            {LAYOUT.map(({ i, left, top, w, rot, z, delay }) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, transition: HOVER_SPRING }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...SPRING, delay }}
                style={{
                  position: 'absolute',
                  left, top,
                  width: w,
                  zIndex: z,
                  rotate: rot,
                  willChange: 'transform',
                }}
              >
                <PortfolioItem item={PORTFOLIO[i]} />
              </motion.div>
            ))}

          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .web-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
