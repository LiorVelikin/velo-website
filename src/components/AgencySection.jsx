import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import portraitSrc from '../assets/lior-portrait.webp'

const SPRING = { type: 'spring', stiffness: 200, damping: 28 }

const CREDENTIALS = [
  { num: '7+',  lbl: 'שנות ניסיון בשיווק' },
  { num: '42',  lbl: 'עסקים שצמחו איתנו' },
  { num: '12',  lbl: 'שפות לתוכן בכל קהל' },
]

export default function AgencySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="agency" style={{ padding: 'clamp(60px, 8vw, 120px) 0', position: 'relative', direction: 'rtl', overflow: 'hidden' }}>
      {/* Blob behind the portrait (right side in RTL) — text column on left stays dark */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: 500, height: 500, pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(34,211,238,0.18) 0%, transparent 65%)',
        filter: 'blur(80px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', right: '5%',
        width: 400, height: 380, pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(26,111,255,0.16) 0%, transparent 65%)',
        filter: 'blur(75px)',
      }} />

      <div ref={ref} style={{ maxWidth: 1180, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)', position: 'relative', zIndex: 1 }}>
        <div className="agency-grid" style={{
          display: 'grid',
          gridTemplateColumns: '0.85fr 1.15fr',
          gap: 'clamp(28px, 4vw, 64px)',
          alignItems: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...SPRING, delay: 0.1 }}
            style={{ position: 'relative', order: 0 }}
          >
            <div style={{
              position: 'relative',
              borderRadius: 16,
              overflow: 'hidden',
              aspectRatio: '4 / 5',
            }}>
              <img
                src={portraitSrc}
                alt="ליאור וליקין — מייסד VELO DIGITAL"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  position: 'relative', zIndex: 1,
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)',
                }}
              />

              <div style={{
                position: 'absolute', bottom: 16, left: 16, right: 16,
                zIndex: 2,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '10px 14px',
                background: 'rgba(6,7,10,0.78)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10,
                direction: 'rtl',
              }}>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem', fontWeight: 700,
                    color: 'var(--ink-100)', margin: 0, letterSpacing: '-0.01em',
                  }}>
                    ליאור וליקין
                  </p>
                  <p className="mono-label" style={{ margin: 0, fontSize: '0.62rem' }}>
                    founder &amp; creative director
                  </p>
                </div>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: '#22D3EE',
                  boxShadow: '0 0 10px rgba(34,211,238,0.7)',
                  animation: 'orbPulse 2.2s ease-in-out infinite',
                }} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...SPRING, delay: 0.2 }}
            style={{ order: 1 }}
          >
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.9rem, 4.2vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: 'var(--ink-100)',
              marginBottom: 24,
            }}>
              צוות שלם בשבילכם, <br />
              <span className="gradient-accent">בלי בלגן ובלי אגו.</span>
            </h2>

            <p style={{
              color: 'var(--ink-300)',
              fontSize: 'clamp(0.97rem, 1.5vw, 1.08rem)',
              lineHeight: 1.78,
              marginBottom: 18,
            }}>
              VELO זו לא עוד סוכנות שיווק. אנחנו עובדים אחד על אחד עם בעלי העסק — אסטרטגיה, עיצוב, תוכן וקמפיינים יוצאים מאותו ראש. אין צוות שמתנגש, אין חיוב על שעות פגישה, אין מצגות שאף אחד לא קורא.
            </p>

            <p style={{
              color: 'var(--ink-300)',
              fontSize: 'clamp(0.97rem, 1.5vw, 1.08rem)',
              lineHeight: 1.78,
              marginBottom: 32,
            }}>
              עובדים מתל אביב, עם עסקים בישראל ובחו"ל — בתחומי אופנה, יופי, נדל"ן, מסעדנות, אונליין ועוד.
            </p>

            <div className="cred-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 18,
              padding: '20px 0',
              borderTop: '1px solid var(--hairline)',
              borderBottom: '1px solid var(--hairline)',
            }}>
              {CREDENTIALS.map((c, i) => (
                <div key={i} style={{
                  borderLeft: i < CREDENTIALS.length - 1 ? '1px solid var(--hairline)' : 'none',
                  paddingRight: i === 0 ? 0 : 14,
                  paddingLeft: 14,
                }}>
                  <div className="tabular" style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                    color: 'var(--ink-100)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: 6,
                  }}>
                    {c.num}
                  </div>
                  <div className="mono-label" style={{ margin: 0, fontSize: '0.66rem' }}>
                    {c.lbl}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .agency-grid { grid-template-columns: 1fr !important; }
          .cred-grid { grid-template-columns: 1fr 1fr !important; }
          .cred-grid > div:nth-child(2) { border-left: none !important; }
          .cred-grid > div:nth-child(3) { border-top: 1px solid var(--hairline); padding-top: 16px; margin-top: 8px; grid-column: span 2; border-left: none !important; }
        }
      `}</style>
    </section>
  )
}
