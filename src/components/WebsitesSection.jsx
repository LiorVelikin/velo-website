import { useEffect, useRef, useState, useCallback } from 'react'

/* ─────────────────────────────────────────────
   Project data — swap img: null → import path
   when real screenshots are ready
───────────────────────────────────────────── */
const projects = {
  shopify: [
    { name: 'חנות אופנה',    result: '₪280K בחודש הראשון', tag: 'Shopify',  color: '#0a4f3f', img: null },
    { name: 'מותג ביוטי',    result: 'המיר ב4.2%',          tag: 'Shopify',  color: '#1a3a2a', img: null },
    { name: 'חנות תכשיטים', result: 'ROAS x5.1',            tag: 'Shopify',  color: '#0d3528', img: null },
  ],
  websites: [
    { name: 'דף נחיתה נדלן',   result: '240 לידים בחודש',     tag: 'דף נחיתה',  color: '#0a1628', img: null },
    { name: 'אתר קליניקה',     result: 'פגישות x3',            tag: 'אתר עסקי',  color: '#0f1f3d', img: null },
    { name: 'דף השקת מוצר',   result: '1,200 רשומים ביום',    tag: 'דף נחיתה',  color: '#162544', img: null },
  ],
}

/* ─────────────────────────────────────────────
   Skeleton — simulates a real webpage layout
───────────────────────────────────────────── */
function WebsiteSkeleton({ color, isShopify }) {
  const hi = 'rgba(255,255,255,0.08)'
  const lo = 'rgba(255,255,255,0.04)'
  const acc = isShopify ? 'rgba(0,200,140,0.25)' : 'rgba(26,111,255,0.25)'

  return (
    <div style={{
      width: '100%',
      height: '170%',           /* taller than the viewport → gives room to scroll */
      background: `linear-gradient(180deg, ${color} 0%, ${color}cc 60%, #060b14 100%)`,
      padding: '28px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      direction: 'rtl',
    }}>
      {/* nav bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <div style={{ width: 70, height: 10, borderRadius: 6, background: hi }} />
        <div style={{ display: 'flex', gap: 10 }}>
          {[50, 44, 38].map((w, i) => <div key={i} style={{ width: w, height: 8, borderRadius: 5, background: lo }} />)}
        </div>
        <div style={{ width: 56, height: 22, borderRadius: 6, background: acc }} />
      </div>

      {/* hero block */}
      <div style={{ height: 120, borderRadius: 10, background: hi, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 30% 50%, ${acc} 0%, transparent 60%)` }} />
        <div style={{ position: 'absolute', bottom: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ width: 160, height: 14, borderRadius: 6, background: 'rgba(255,255,255,0.18)' }} />
          <div style={{ width: 110, height: 9,  borderRadius: 5, background: 'rgba(255,255,255,0.10)' }} />
          <div style={{ width: 72,  height: 22, borderRadius: 6, background: acc, marginTop: 4 }} />
        </div>
      </div>

      {/* product / feature row */}
      <div style={{ display: 'flex', gap: 10 }}>
        {[1,2,3].map(i => (
          <div key={i} style={{ flex: 1, borderRadius: 8, background: lo, padding: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ height: 52, borderRadius: 6, background: hi }} />
            <div style={{ width: '80%', height: 7, borderRadius: 4, background: hi }} />
            <div style={{ width: '55%', height: 7, borderRadius: 4, background: lo }} />
            <div style={{ width: 48,   height: 16, borderRadius: 5, background: acc, marginTop: 2 }} />
          </div>
        ))}
      </div>

      {/* trust bar */}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', padding: '8px 0' }}>
        {[60, 80, 70, 90].map((w, i) => <div key={i} style={{ width: w, height: 8, borderRadius: 5, background: lo }} />)}
      </div>

      {/* second content block */}
      <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
        <div style={{ flex: 1, height: 80, borderRadius: 8, background: hi }} />
        <div style={{ flex: 1.4, display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center' }}>
          {[140, 100, 120, 80].map((w, i) => (
            <div key={i} style={{ width: w, height: 7, borderRadius: 4, background: i === 0 ? hi : lo }} />
          ))}
          <div style={{ width: 64, height: 18, borderRadius: 5, background: acc, marginTop: 4 }} />
        </div>
      </div>

      {/* testimonial row */}
      <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
        {[1,2].map(i => (
          <div key={i} style={{ flex: 1, borderRadius: 8, background: lo, padding: 12 }}>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 8 }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: hi }} />
              <div style={{ width: 60, height: 7, borderRadius: 4, background: hi }} />
            </div>
            {[90, 70, 80].map((w, j) => <div key={j} style={{ width: `${w}%`, height: 6, borderRadius: 4, background: lo, marginBottom: 5 }} />)}
          </div>
        ))}
      </div>

      {/* footer */}
      <div style={{ marginTop: 8, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: 80, height: 8, borderRadius: 5, background: lo }} />
        <div style={{ display: 'flex', gap: 8 }}>
          {[40,40,40].map((w,i) => <div key={i} style={{ width: w, height: 8, borderRadius: 5, background: lo }} />)}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Browser chrome + scrolling mockup
───────────────────────────────────────────── */
function BrowserMockup({ project, tabKey, visible }) {
  const [fading, setFading] = useState(false)
  const [displayed, setDisplayed] = useState(project)
  const [displayedTab, setDisplayedTab] = useState(tabKey)
  const timerRef = useRef(null)

  useEffect(() => {
    if (project === displayed && tabKey === displayedTab) return
    clearTimeout(timerRef.current)
    setFading(true)
    timerRef.current = setTimeout(() => {
      setDisplayed(project)
      setDisplayedTab(tabKey)
      setFading(false)
    }, 280)
    return () => clearTimeout(timerRef.current)
  }, [project, tabKey])

  const isShopify = displayedTab === 'shopify'
  const fakeUrl   = isShopify ? 'yourstore.myshopify.com' : 'yourbrand.co.il'

  return (
    <div style={{
      width: '100%',
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(24px)',
      transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s',
      position: 'relative',
    }}>
      {/* Glow behind the frame */}
      <div style={{
        position: 'absolute',
        inset: '-6% -4%',
        borderRadius: 24,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(26,111,255,0.20) 0%, rgba(0,160,255,0.08) 45%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'orbPulse 6s ease-in-out infinite',
      }} />

      {/* Browser outer frame */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        borderRadius: 14,
        border: '1.5px solid rgba(255,255,255,0.10)',
        background: '#0d1525',
        boxShadow: '0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(0,0,0,0.9)',
        overflow: 'hidden',
      }}>
        {/* Browser chrome */}
        <div style={{
          height: 42,
          background: '#111827',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          gap: 12,
          flexShrink: 0,
        }}>
          {/* Traffic lights */}
          <div style={{ display: 'flex', gap: 6 }}>
            {['#ff5f57','#febc2e','#28c840'].map((c, i) => (
              <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.8 }} />
            ))}
          </div>

          {/* URL bar */}
          <div style={{
            flex: 1, maxWidth: 360, margin: '0 auto',
            height: 24, borderRadius: 6,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.07)',
            display: 'flex', alignItems: 'center',
            paddingRight: 10, paddingLeft: 10,
            gap: 6,
          }}>
            {/* Lock icon */}
            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" style={{ opacity: 0.4 }}>
              <rect x="1" y="4" width="7" height="6" rx="1.5" stroke="white" strokeWidth="1.2"/>
              <path d="M2.5 4V3a2 2 0 014 0v1" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.38)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em' }}>
              {fakeUrl}
            </span>
          </div>

          {/* Three dots */}
          <div style={{ display: 'flex', gap: 3, marginRight: 4 }}>
            {[0,1,2].map(i => <div key={i} style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.28)' }} />)}
          </div>
        </div>

        {/* Screen viewport — fixed height, overflow hidden */}
        <div style={{ height: 'clamp(280px, 38vw, 480px)', overflow: 'hidden', position: 'relative' }}>
          <div style={{
            opacity: fading ? 0 : 1,
            transition: 'opacity 0.28s ease',
            animation: !fading ? 'websiteScroll 12s linear infinite' : 'none',
            transformOrigin: 'top center',
            willChange: 'transform',
          }}>
            {displayed?.img ? (
              <img src={displayed.img} alt={displayed.name}
                style={{ width: '100%', display: 'block' }} />
            ) : (
              <WebsiteSkeleton color={displayed?.color ?? '#0a1628'} isShopify={isShopify} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Thumbnail card
───────────────────────────────────────────── */
function Thumbnail({ project, isActive, onClick, isShopify, visible, delay }) {
  return (
    <div
      onClick={onClick}
      style={{
        flex: '0 0 clamp(150px, 22%, 200px)',
        borderRadius: 12,
        border: `1.5px solid ${isActive ? 'rgba(26,111,255,0.65)' : 'rgba(255,255,255,0.1)'}`,
        background: isActive ? 'rgba(26,111,255,0.10)' : 'linear-gradient(160deg, rgba(14,22,44,0.85) 0%, rgba(8,12,24,0.9) 100%)',
        boxShadow: isActive ? '0 0 20px rgba(26,111,255,0.22), 0 0 0 1px rgba(26,111,255,0.15)' : '0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(26,111,255,0.04)',
        transform: isActive ? 'scale(1.04)' : 'scale(1)',
        transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
        cursor: 'pointer',
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Preview strip */}
      <div style={{
        height: 72,
        background: `linear-gradient(160deg, ${project.color} 0%, ${project.color}99 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Mini skeleton suggestion */}
        <div style={{ position: 'absolute', inset: 0, padding: '10px 10px' }}>
          <div style={{ width: '65%', height: 7, borderRadius: 4, background: 'rgba(255,255,255,0.12)', marginBottom: 6 }} />
          <div style={{ display: 'flex', gap: 4 }}>
            {[1,2,3].map(i => <div key={i} style={{ flex: 1, height: 28, borderRadius: 4, background: 'rgba(255,255,255,0.07)' }} />)}
          </div>
        </div>
        {isActive && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 50% 30%, rgba(26,111,255,0.25) 0%, transparent 70%)',
          }} />
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '10px 12px 12px' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, color: isActive ? '#fff' : '#c8dcf5', marginBottom: 4 }}>
          {project.name}
        </p>
        <p style={{ fontSize: '10px', color: isActive ? '#4d9fff' : '#6a88ad', fontWeight: 600, marginBottom: 7 }}>
          {project.result}
        </p>
        <span style={{
          fontSize: '9px', fontWeight: 700,
          color: isActive ? '#1a6fff' : '#3d5070',
          background: isActive ? 'rgba(26,111,255,0.15)' : 'rgba(255,255,255,0.04)',
          border: `1px solid ${isActive ? 'rgba(26,111,255,0.35)' : 'rgba(255,255,255,0.08)'}`,
          borderRadius: 100, padding: '2px 8px',
          letterSpacing: '0.04em',
        }}>
          {project.tag}
        </span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Main section
───────────────────────────────────────────── */
export default function WebsitesSection() {
  const sectionRef  = useRef(null)
  const [tab, setTab]             = useState('shopify')
  const [activeIdx, setActiveIdx] = useState(0)
  const [headVis, setHeadVis]     = useState(false)
  const [mockupVis, setMockupVis] = useState(false)
  const [thumbVis, setThumbVis]   = useState(false)
  const mockupRef = useRef(null)
  const thumbRef  = useRef(null)

  const handleTabSwitch = (newTab) => {
    if (newTab === tab) return
    setTab(newTab)
    setActiveIdx(0)
  }

  useEffect(() => {
    const observers = []

    const headObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeadVis(true) }, { threshold: 0.2 })
    if (sectionRef.current) { headObs.observe(sectionRef.current); observers.push(headObs) }

    const mockObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setMockupVis(true) }, { threshold: 0.1 })
    if (mockupRef.current) { mockObs.observe(mockupRef.current); observers.push(mockObs) }

    const thumbObs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setThumbVis(true) }, { threshold: 0.1 })
    if (thumbRef.current) { thumbObs.observe(thumbRef.current); observers.push(thumbObs) }

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const list = projects[tab]
  const activeProject = list[activeIdx]

  return (
    <>
      {/* Scoped keyframe for the slow upward scroll inside browser */}
      <style>{`
        @keyframes websiteScroll {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-41%); }
        }
      `}</style>

      <section
        ref={sectionRef}
        id="websites"
        style={{ padding: '120px 0 120px', position: 'relative', overflow: 'visible' }}
      >
        {/* Ambient center glow */}
        <div style={{
          position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '600px',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(26,111,255,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
        }} />

        <div className="relative max-w-6xl mx-auto px-6" style={{ zIndex: 1 }}>

          {/* ── Narrative bridge from previous section ── */}
          <div style={{
            textAlign: 'center',
            marginBottom: 48,
            opacity: headVis ? 0.45 : 0,
            transition: 'opacity 0.6s ease',
          }}>
            <p style={{ color: '#6a88ad', fontSize: '0.88rem', letterSpacing: '0.01em' }}>
              והתוכן הזה צריך מקום שממיר
            </p>
          </div>

          {/* ── Headline ── */}
          <div style={{
            textAlign: 'center',
            marginBottom: 52,
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

            <p style={{ color: '#8ba3c7', fontSize: 'clamp(1rem,1.8vw,1.15rem)', maxWidth: 520, margin: '0 auto' }}>
              כל התנועה שנוצרת מהתוכן והפרסום זורמת לאתר שנבנה בצורה מדויקת. עם מסר ברור, מבנה נכון וחוויית משתמש שמובילה לפעולה.
            </p>
          </div>

          {/* ── Tab toggle ── */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 48,
            opacity: headVis ? 1 : 0,
            transition: 'opacity 0.55s ease 0.2s',
          }}>
            <div style={{
              display: 'flex',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 100,
              padding: 4,
              gap: 4,
            }}>
              {[
                { key: 'shopify',  label: 'חנויות Shopify' },
                { key: 'websites', label: 'אתרים ודפי נחיתה' },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => handleTabSwitch(key)}
                  style={{
                    padding: '8px 24px',
                    borderRadius: 100,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Heebo, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    letterSpacing: '-0.01em',
                    transition: 'all 0.2s ease',
                    background: tab === key
                      ? 'linear-gradient(135deg,#1a6fff 0%,#0055ee 100%)'
                      : 'transparent',
                    color: tab === key ? '#fff' : '#6a88ad',
                    boxShadow: tab === key ? '0 0 16px rgba(26,111,255,0.35)' : 'none',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Browser mockup ── */}
          <div
            ref={mockupRef}
            style={{ width: '75%', margin: '0 auto 40px', minWidth: 300 }}
            className="max-md:w-full"
          >
            <BrowserMockup
              project={activeProject}
              tabKey={tab}
              visible={mockupVis}
            />
          </div>

          {/* ── Thumbnail row ── */}
          <div
            ref={thumbRef}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(10px, 1.8vw, 18px)',
              flexWrap: 'nowrap',
              overflowX: 'auto',
              padding: '8px 4px 16px',
              scrollbarWidth: 'none',
            }}
          >
            {list.map((project, i) => (
              <Thumbnail
                key={`${tab}-${i}`}
                project={project}
                isActive={activeIdx === i}
                onClick={() => setActiveIdx(i)}
                isShopify={tab === 'shopify'}
                visible={thumbVis}
                delay={i * 80}
              />
            ))}
          </div>

          {/* ── Bottom narrative bridge ── */}
          <div style={{
            textAlign: 'center',
            marginTop: 64,
            opacity: thumbVis ? 1 : 0,
            transition: 'opacity 0.6s ease 0.4s',
          }}>
            {/* Portfolio CTA */}
            <p style={{
              color: '#8ba3c7',
              fontSize: '0.9rem',
              marginBottom: 10,
            }}>
              רוצים לראות את כל הפרויקטים שלנו?
            </p>
            <a
              href="#"
              style={{
                color: '#4d9fff',
                fontSize: '0.9rem',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                marginBottom: 40,
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

            <p style={{
              color: '#6a88ad',
              fontSize: 'clamp(0.92rem,1.5vw,1.05rem)',
              letterSpacing: '-0.01em',
              marginBottom: 28,
            }}>
            </p>

            {/* Bouncing chevron */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'phoneFloat 2s ease-in-out infinite',
              opacity: 0.45,
            }}>
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
                <path d="M1 1L11 12L21 1" stroke="#4d9fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
