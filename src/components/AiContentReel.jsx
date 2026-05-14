import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import IPhoneMockup from './IPhoneMockup'

const BASE = import.meta.env.BASE_URL
const SPRING       = { type: 'spring', stiffness: 220, damping: 26 }
const HOVER_SPRING = { type: 'spring', stiffness: 380, damping: 28 }

/* iPhone 15-pro outer dims: spec.w(393) + bezel(12)*2 = 417 × spec.h(852) + 24 = 876 */
const PHONE_OUTER_W = 417

const METRICS = [
  { num: '×8',   lbl: 'מהר יותר מהפקה רגילה' },
  { num: '+64%', lbl: 'יותר קליקים' },
  { num: '12',   lbl: 'שפות לכל קהל' },
]

const REEL = [
  { src: `${BASE}videos/ai-avatar-1.mp4`,        label: 'אוואטר AI'           },
  { src: `${BASE}videos/ai-avatar-2.mp4`,        label: 'אוואטר AI'           },
  { src: `${BASE}videos/ai-avatar-3.mp4`,        label: 'אוואטר AI'           },
  { src: `${BASE}videos/maya-ugc.mp4`,           label: 'UGC קריאייטיב'       },
  { src: `${BASE}videos/michal-ugc.mp4`,         label: 'UGC קריאייטיב'       },
  { src: `${BASE}videos/noa-ugc.mp4`,            label: 'UGC קריאייטיב'       },
  { src: `${BASE}videos/alo-yoga-ad.mp4`,        label: 'פרסומת לייפסטייל'    },
  { src: `${BASE}videos/luxury-unboxing.mp4`,    label: 'אנבוקסינג יוקרה'     },
  { src: `${BASE}videos/channel-perfume-ad.mp4`, label: 'פרסומת מותג'         },
]

/* Video + label rendered inside the phone screen (safeArea=false → fills edge-to-edge) */
function PhoneContent({ tile, phoneScale }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const obs = new IntersectionObserver(
      ([e]) => { e.isIntersecting ? v.play().catch(() => {}) : v.pause() },
      { threshold: 0.15 }
    )
    obs.observe(v)
    return () => obs.disconnect()
  }, [])

  /* Scale-correct the label so it reads at ~10px visually regardless of phone size */
  const fs  = Math.round(10 / phoneScale)
  const pv  = Math.round(3  / phoneScale)
  const ph  = Math.round(8  / phoneScale)
  const br  = Math.round(5  / phoneScale)
  const bot = Math.round((852 * 0.11))   /* 11% of spec screen height in unscaled px */

  return (
    <>
      <video
        ref={videoRef}
        src={tile.src}
        muted loop playsInline preload="metadata"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div style={{
        position: 'absolute', bottom: bot, left: 0, right: 0,
        display: 'flex', justifyContent: 'center',
        pointerEvents: 'none', zIndex: 2,
      }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: fs,
          fontWeight: 700,
          color: 'rgba(255,255,255,0.92)',
          background: 'rgba(0,0,0,0.52)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderRadius: br,
          padding: `${pv}px ${ph}px`,
          direction: 'rtl',
          whiteSpace: 'nowrap',
        }}>
          {tile.label}
        </span>
      </div>
    </>
  )
}

/*
  True circle — 8 phones on a ring of radius 26 %, centre (52 %, 35 %).
  Positions computed via: left = cx + r·sin(θ), top = cy − r·cos(θ).
  Right edge of rightmost phone lands at exactly 100 % (no hard clip on right).
  Bottom phones overflow ~3 % (clipped by section overflow:hidden).
  Front phones (z ≥ 5): ai-avatar-1 (right), lifestyle (lower-right),
  maya-ugc (bottom), HERO luxury-unboxing (centre).
*/
const LAYOUT = [
  /* ring — clockwise from top (θ = 0° … 320°, Δ = 40°) */
  { i: 1, left: '52%', top:  '9%', w: '21%', rot:  2, z: 2, delay: 0.26 }, //  0° top
  { i: 8, left: '69%', top: '15%', w: '21%', rot:  6, z: 3, delay: 0.18 }, // 40° top-right
  { i: 0, left: '78%', top: '31%', w: '22%', rot:  9, z: 6, delay: 0.24 }, // 80° right (AI front)
  { i: 6, left: '75%', top: '48%', w: '22%', rot:  5, z: 5, delay: 0.28 }, // 120° lower-right (lifestyle)
  { i: 3, left: '61%', top: '59%', w: '23%', rot:  2, z: 5, delay: 0.32 }, // 160° bottom (ugc front)
  { i: 4, left: '43%', top: '59%', w: '21%', rot: -3, z: 3, delay: 0.38 }, // 200° bottom-left
  { i: 5, left: '30%', top: '48%', w: '21%', rot: -5, z: 2, delay: 0.44 }, // 240° left
  { i: 2, left: '26%', top: '31%', w: '21%', rot: -8, z: 2, delay: 0.36 }, // 280° upper-left
  /* centre hero */
  { i: 7, left: '40%', top: '22%', w: '26%', rot: -1, z: 8, delay: 0.20 },
]

export default function AiContentReel() {
  const sectionRef = useRef(null)
  const collageRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  /* Measure collage container width for accurate phone scale */
  const [colW, setColW] = useState(540)
  useEffect(() => {
    const el = collageRef.current
    if (!el) return
    setColW(el.getBoundingClientRect().width)
    const ro = new ResizeObserver(([entry]) => setColW(entry.contentRect.width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  /* scale = desired visual width / phone's natural DOM width */
  const scaleFor = useCallback(
    (pct) => (colW * parseFloat(pct) / 100) / PHONE_OUTER_W,
    [colW]
  )

  return (
    <section
      id="ai-content"
      ref={sectionRef}
      style={{ padding: 'clamp(60px, 8vw, 120px) 0', position: 'relative', direction: 'rtl', overflow: 'hidden' }}
    >
      {/* Colour blobs */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '8%', right: '-6%', width: 520, height: 480, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(34,211,238,0.20) 0%, transparent 65%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '4%', width: 460, height: 420, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(61,139,255,0.18) 0%, transparent 65%)', filter: 'blur(75px)' }} />
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)', position: 'relative', zIndex: 1 }}>
        <div className="ai-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(88px, 11vw, 155px)', alignItems: 'center' }}>

          {/* ── PHONE COLLAGE ── */}
          <motion.div
            ref={collageRef}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ position: 'relative', order: 0, minHeight: 'clamp(480px, 60vw, 640px)' }}
          >
            {/* Ambient glow — centred on the hero phone */}
            <div style={{
              position: 'absolute',
              top: '5%', left: '30%', right: '-10%', bottom: '-10%',
              background: 'radial-gradient(ellipse at 55% 38%, rgba(34,211,238,0.11) 0%, rgba(61,139,255,0.07) 40%, transparent 70%)',
              filter: 'blur(55px)', pointerEvents: 'none',
            }} />

            {/* Slow clockwise drift for the whole cluster */}
            <motion.div
              style={{ position: 'absolute', inset: 0, transformOrigin: '52% 35%' }}
              animate={inView ? { rotate: [0, 5, 0, -2, 0] } : {}}
              transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
            >
              {LAYOUT.map(({ i, left, top, w, rot, z, delay }) => {
                const ps = scaleFor(w)
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6, transition: HOVER_SPRING }}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ ...SPRING, delay }}
                    style={{
                      position: 'absolute',
                      left, top,
                      zIndex: z,
                      rotate: rot,
                      willChange: 'transform',
                    }}
                  >
                    <IPhoneMockup
                      model="15-pro"
                      color="space-black"
                      scale={ps}
                      safeArea={false}
                      shadow={`0 ${Math.round(40/ps)}px ${Math.round(80/ps)}px rgba(0,0,0,0.65), 0 ${Math.round(6/ps)}px ${Math.round(18/ps)}px rgba(0,0,0,0.45)`}
                      innerShadow
                      showHomeIndicator
                    >
                      <PhoneContent tile={REEL[i]} phoneScale={ps} />
                    </IPhoneMockup>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* ── TEXT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...SPRING }}
            style={{ order: 1 }}
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
              תוכן ברמה של פרסום גדול. <br />
              <span className="gradient-accent">בעלות של פוסט אחד.</span>
            </h2>

            <p style={{
              color: 'var(--ink-300)',
              fontSize: 'clamp(0.97rem, 1.5vw, 1.08rem)',
              lineHeight: 1.78,
              marginBottom: 28,
              maxWidth: 480,
            }}>
              סרטוני פרסומת ותוכן שיווקי שיוצרו בעזרת בינה מלאכותית — לא מבדילים אותם מהפקה אמיתית. שחקנים סינתטיים שמתאימים לקהל שלכם בדיוק, בכל שפה ובכל סגנון. הפקה תוך 48 שעות, לא 6 שבועות.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
              {METRICS.map((m) => (
                <span key={m.lbl} className="metric-chip">
                  <span className="num">{m.num}</span>
                  <span className="lbl">{m.lbl}</span>
                </span>
              ))}
            </div>

            <a
              href="/services/ai-content"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                color: 'var(--cyan)', fontSize: '0.94rem', fontWeight: 600,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => e.currentTarget.querySelector('.arr').style.transform = 'translateX(-4px)'}
              onMouseLeave={(e) => e.currentTarget.querySelector('.arr').style.transform = 'none'}
            >
              <span>ראו עוד דוגמאות</span>
              <span className="arr" style={{ transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)' }}>←</span>
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .ai-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
