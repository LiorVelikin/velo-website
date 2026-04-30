import { useEffect, useRef, useState } from 'react'

const BASE = import.meta.env.BASE_URL

/* ─── Shopify store screenshots ─── */
const shopifyStores = [
  { name: 'Zenora Jewelry',  img: `${BASE}images/shopify/store-1.png`, color: '#1a1228' },
  { name: 'Taylors Wine',    img: `${BASE}images/shopify/store-2.png`, color: '#0a1a10' },
  { name: 'Chrome Japan',    img: `${BASE}images/shopify/store-3.png`, color: '#0d1520' },
  { name: 'Recycled Cotton', img: `${BASE}images/shopify/store-4.png`, color: '#1a1008' },
]

/* ─── Website / landing-page projects ─── */
const websiteProjects = [
  { name: 'Zano — סטודיו הפקה',  tag: 'אתר תדמית', color: '#1a1208', img: `${BASE}images/websites/zano.png`   },
  { name: 'Lilach — עיצוב שיער', tag: 'אתר עסקי',  color: '#1a0818', img: `${BASE}images/websites/lilach.png` },
  { name: 'Windows 4U',           tag: 'דף נחיתה',  color: '#0a1428', img: null },
]

/* ─── Placeholder for items without a screenshot ─── */
function Placeholder({ color, isShopify }) {
  const acc = isShopify ? 'rgba(0,200,140,0.22)' : 'rgba(26,111,255,0.22)'
  const hi  = 'rgba(255,255,255,0.07)'
  const lo  = 'rgba(255,255,255,0.04)'
  return (
    <div style={{
      width: '100%', height: '100%',
      background: `linear-gradient(160deg, ${color} 0%, ${color}99 60%, #060b14 100%)`,
      display: 'flex', flexDirection: 'column', gap: 10, padding: '20px 18px',
      direction: 'rtl',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: 60, height: 8, borderRadius: 5, background: hi }} />
        <div style={{ width: 48, height: 18, borderRadius: 5, background: acc }} />
      </div>
      <div style={{ flex: 1, borderRadius: 8, background: hi, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 30% 50%, ${acc} 0%, transparent 60%)` }} />
        <div style={{ position: 'absolute', bottom: 16, right: 16, display: 'flex', flexDirection: 'column', gap: 7 }}>
          <div style={{ width: 120, height: 10, borderRadius: 5, background: 'rgba(255,255,255,0.16)' }} />
          <div style={{ width: 80,  height: 7,  borderRadius: 4, background: 'rgba(255,255,255,0.09)' }} />
          <div style={{ width: 56,  height: 18, borderRadius: 5, background: acc, marginTop: 2 }} />
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {[1,2,3].map(i => <div key={i} style={{ flex: 1, height: 40, borderRadius: 6, background: lo }} />)}
      </div>
    </div>
  )
}

/* ─── Main section ─── */
export default function WebsitesSection() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  const [tab, setTab]         = useState('shopify')
  const [activeIdx, setActiveIdx] = useState(0)
  const [headVis, setHeadVis]   = useState(false)
  const [contentVis, setContentVis] = useState(false)
  const [fading, setFading]   = useState(false)

  const list      = tab === 'shopify' ? shopifyStores : websiteProjects
  const active    = list[activeIdx]
  const isShopify = tab === 'shopify'
  const thumbs    = list.map((p, i) => ({ ...p, i })).filter(({ i }) => i !== activeIdx)

  const handleSwitch = (idx) => {
    if (idx === activeIdx) return
    setFading(true)
    setTimeout(() => { setActiveIdx(idx); setFading(false) }, 200)
  }

  const handleTabSwitch = (newTab) => {
    if (newTab === tab) return
    setFading(true)
    setTimeout(() => { setTab(newTab); setActiveIdx(0); setFading(false) }, 200)
  }

  useEffect(() => {
    const headObs    = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeadVis(true) },    { threshold: 0.2 })
    const contentObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setContentVis(true) }, { threshold: 0.1 })
    if (sectionRef.current) headObs.observe(sectionRef.current)
    if (contentRef.current) contentObs.observe(contentRef.current)
    return () => { headObs.disconnect(); contentObs.disconnect() }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="websites"
      style={{ padding: '120px 0 120px', position: 'relative' }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '600px',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(26,111,255,0.07) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="relative max-w-6xl mx-auto px-6" style={{ zIndex: 1 }}>

        {/* Narrative bridge */}
        <div style={{
          textAlign: 'center', marginBottom: 48,
          opacity: headVis ? 0.45 : 0,
          transition: 'opacity 0.6s ease',
        }}>
          <p style={{ color: '#6a88ad', fontSize: '0.88rem', letterSpacing: '0.01em' }}>
            והתוכן הזה צריך מקום שממיר
          </p>
        </div>

        {/* Headline */}
        <div style={{
          textAlign: 'center', marginBottom: 52,
          opacity: headVis ? 1 : 0,
          transform: headVis ? 'none' : 'translateY(18px)',
          transition: 'opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg, transparent, #1a6fff)' }} />
            <div className="tag-pill">אתרים ותשתיות</div>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(270deg, transparent, #1a6fff)' }} />
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', marginBottom: 18 }}>
            דפי נחיתה, חנויות ואתרים{' '}
            <span className="gradient-text">שנבנו להמיר</span>
          </h2>
          <p style={{ color: '#4a5d7a', fontSize: 'clamp(1rem,1.8vw,1.15rem)', maxWidth: 520, margin: '0 auto' }}>
            כל התנועה שנוצרת מהתוכן והפרסום זורמת לאתר שנבנה בצורה מדויקת. עם מסר ברור, מבנה נכון וחוויית משתמש שמובילה לפעולה.
          </p>
        </div>

        {/* Tab toggle */}
        <div style={{
          display: 'flex', justifyContent: 'center', marginBottom: 44,
          opacity: headVis ? 1 : 0,
          transition: 'opacity 0.55s ease 0.2s',
        }}>
          <div style={{
            display: 'flex',
            background: 'rgba(10,15,30,0.12)',
            border: '1px solid rgba(10,15,30,0.14)',
            borderRadius: 100, padding: 4, gap: 4,
          }}>
            {[
              { key: 'shopify',  label: 'חנויות Shopify' },
              { key: 'websites', label: 'אתרים ודפי נחיתה' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => handleTabSwitch(key)}
                style={{
                  padding: '8px 24px', borderRadius: 100, border: 'none',
                  cursor: 'pointer', fontFamily: 'Heebo, sans-serif',
                  fontWeight: 700, fontSize: '0.875rem', letterSpacing: '-0.01em',
                  transition: 'all 0.2s ease',
                  background: tab === key ? 'linear-gradient(135deg,#1a6fff 0%,#0055ee 100%)' : 'transparent',
                  color: tab === key ? '#fff' : '#6a88ad',
                  boxShadow: tab === key ? '0 0 16px rgba(26,111,255,0.35)' : 'none',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Hero + Thumbnails ── */}
        <div ref={contentRef}>

          {/* Hero */}
          <div style={{
            position: 'relative',
            borderRadius: 18,
            overflow: 'hidden',
            aspectRatio: '16/9',
            border: '1.5px solid rgba(255,255,255,0.16)',
            borderTopColor: 'rgba(77,159,255,0.30)',
            boxShadow: '0 28px 80px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.08) inset',
            marginBottom: 14,
            opacity: contentVis ? 1 : 0,
            transform: contentVis ? 'none' : 'translateY(28px)',
            transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)',
          }}>
            {active.img ? (
              <img
                src={active.img}
                alt={active.name}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'top',
                  display: 'block',
                  opacity: fading ? 0 : 1,
                  transition: 'opacity 0.2s ease',
                }}
              />
            ) : (
              <div style={{ width: '100%', height: '100%', opacity: fading ? 0 : 1, transition: 'opacity 0.2s ease' }}>
                <Placeholder color={active.color} isShopify={isShopify} />
              </div>
            )}

            {/* Name label bottom-right */}
            <div style={{
              position: 'absolute', bottom: 14, right: 16,
              opacity: fading ? 0 : 1, transition: 'opacity 0.2s ease',
            }}>
              <span style={{
                fontSize: '12px', fontWeight: 700, color: '#fff',
                background: 'rgba(8,12,24,0.70)', backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 100, padding: '5px 14px',
                letterSpacing: '0.02em',
              }}>
                {active.name}
              </span>
            </div>

            {/* Dot nav bottom-center */}
            <div style={{
              position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)',
              display: 'flex', gap: 5,
            }}>
              {list.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSwitch(i)}
                  style={{
                    width: i === activeIdx ? 20 : 7, height: 7,
                    borderRadius: 100,
                    background: i === activeIdx ? '#fff' : 'rgba(255,255,255,0.38)',
                    border: 'none', cursor: 'pointer', padding: 0,
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div style={{
            display: 'flex',
            gap: 12,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            padding: '2px 1px 4px',
          }}>
            {thumbs.map(({ img, color, name, i }, ti) => (
              <div
                key={i}
                onClick={() => handleSwitch(i)}
                style={{
                  flex: '1 1 0',
                  minWidth: 'clamp(140px, 28%, 320px)',
                  aspectRatio: '16/9',
                  borderRadius: 13,
                  overflow: 'hidden',
                  border: '1.5px solid rgba(255,255,255,0.10)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
                  cursor: 'pointer',
                  position: 'relative',
                  flexShrink: 0,
                  opacity: contentVis ? 1 : 0,
                  transition: `opacity 0.5s ease ${ti * 90 + 160}ms`,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transition = 'transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease'
                  el.style.transform = 'translateY(-5px)'
                  el.style.borderColor = 'rgba(77,159,255,0.55)'
                  el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.50), 0 0 24px rgba(26,111,255,0.20)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transition = 'transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease'
                  el.style.transform = ''
                  el.style.borderColor = 'rgba(255,255,255,0.10)'
                  el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.35)'
                }}
              >
                {img ? (
                  <img
                    src={img}
                    alt={name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                  />
                ) : (
                  <Placeholder color={color} isShopify={isShopify} />
                )}

                {/* Hover overlay */}
                <div
                  style={{ position: 'absolute', inset: 0, transition: 'background 0.22s ease' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(10,15,30,0.22)'}
                  onMouseLeave={e => e.currentTarget.style.background = ''}
                />

                {/* Name label */}
                <div style={{
                  position: 'absolute', bottom: 9, right: 10,
                  fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.90)',
                  background: 'rgba(8,12,24,0.65)', backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 100, padding: '3px 10px',
                  letterSpacing: '0.02em', pointerEvents: 'none',
                }}>
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bridge */}
        <div style={{
          textAlign: 'center', marginTop: 60,
          opacity: contentVis ? 1 : 0,
          transition: 'opacity 0.6s ease 0.5s',
        }}>
          <p style={{ color: '#4a5d7a', fontSize: '0.9rem', marginBottom: 10 }}>
            רוצים לראות את כל הפרויקטים שלנו?
          </p>
          <a
            href="#"
            style={{
              color: '#4d9fff', fontSize: '0.9rem', fontWeight: 700,
              textDecoration: 'none', display: 'inline-flex',
              alignItems: 'center', gap: 6, marginBottom: 40,
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <span>לפורטפוליו המלא</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
          </a>

        </div>

      </div>
    </section>
  )
}
