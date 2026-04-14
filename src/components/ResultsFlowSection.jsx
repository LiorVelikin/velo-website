import { useEffect, useRef, useState, useCallback } from 'react'

/* ── Featured projects — replace colors/stats/names with real data ── */
const projects = [
  {
    color: '#0a4f3f',
    niche: 'אופנה', type: 'חנות Shopify',
    name: 'מותג אופנה — XXXXXX',
    stats: ['ROAS x4.8', '₪280K', '45 יום'],
  },
  {
    color: '#0a1628',
    niche: 'נדלן', type: 'דף נחיתה',
    name: 'פרויקט נדלן — XXXXXX',
    stats: ['320 לידים', 'עלות ליד -60%', '30 יום'],
  },
  {
    color: '#1a0a2e',
    niche: 'ביוטי', type: 'קמפיין AI',
    name: 'מותג ביוטי — XXXXXX',
    stats: ['ROAS x5.1', '₪340K', '60 יום'],
  },
]

/* ── Card data — replace with real client results when ready ── */
const cards = [
  {
    niche: 'אופנה',    project: 'חנות Shopify',
    prefix: 'x',  num: 4.8,  decimals: 1, suffix: '',
    label: 'החזר על הוצאות פרסום',
    timeframe: 'תוך 45 יום מהשקה',
    service: 'תוכן AI + חנות Shopify',
  },
  {
    niche: 'ביוטי',   project: 'דף נחיתה',
    prefix: '₪', num: 340,   decimals: 0, suffix: 'K',
    label: 'הכנסה בחודש הראשון',
    timeframe: 'בחודש הראשון',
    service: 'רילס + דף נחיתה',
  },
  {
    niche: 'נדלן',    project: 'קמפיין לידים',
    prefix: '',   num: 320,   decimals: 0, suffix: '',
    label: 'לידים חמים בחודש',
    timeframe: 'תוך 30 יום',
    service: 'סרטוני AI + ניהול קמפיין',
  },
  {
    niche: 'מסעדה',   project: 'סושיאל ומיתוג',
    prefix: '+',  num: 210,   decimals: 0, suffix: '%',
    label: 'גידול בהגעה האורגנית',
    timeframe: 'תוך 60 יום',
    service: 'תוכן סושיאל + רילס',
  },
  {
    niche: 'טק',      project: 'אתר עסקי',
    prefix: '+',  num: 180,   decimals: 0, suffix: '%',
    label: 'גידול בהמרות האתר',
    timeframe: 'תוך 90 יום',
    service: 'אתר + פרסומות AI',
  },
  {
    niche: 'תכשיטים', project: 'חנות Shopify',
    prefix: 'x',  num: 5.1,  decimals: 1, suffix: '',
    label: 'החזר על הוצאות פרסום',
    timeframe: 'בחודש השני',
    service: 'תוכן AI + חנות Shopify',
  },
]

/* ── Count-up hook ── */
function useCountUp(target, decimals, triggered) {
  const [val, setVal] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!triggered) return
    const DURATION = 1500
    const start = performance.now()

    const tick = (now) => {
      const t = Math.min((now - start) / DURATION, 1)
      const eased = 1 - Math.pow(1 - t, 3)   // ease-out cubic
      setVal(eased * target)
      if (t < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [triggered, target])

  return decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toString()
}

/* ── Single result card ── */
function ResultCard({ card, triggered, index, visible }) {
  const displayNum = useCountUp(card.num, card.decimals, triggered)

  return (
    <div
      style={{
        flex: '0 0 clamp(268px, 30vw, 320px)',
        background: 'linear-gradient(160deg, rgba(14,24,46,0.92) 0%, rgba(8,13,28,0.96) 100%)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderTopColor: 'rgba(77,159,255,0.28)',
        borderRadius: 18,
        padding: '28px 26px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        direction: 'rtl',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(26,111,255,0.05)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateX(36px)',
        transition: `opacity 0.55s ease ${index * 90}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${index * 90}ms`,
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: '15%', right: '15%', height: 2,
        background: 'linear-gradient(90deg, transparent, rgba(26,111,255,0.55), transparent)',
        pointerEvents: 'none',
      }} />

      {/* 1 — Niche + project pills */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 22, flexWrap: 'wrap' }}>
        <span style={{
          fontSize: '10px', fontWeight: 700,
          color: '#4d9fff',
          background: 'rgba(26,111,255,0.12)',
          border: '1px solid rgba(26,111,255,0.22)',
          borderRadius: 100, padding: '3px 10px',
          letterSpacing: '0.04em',
        }}>
          {card.niche}
        </span>
        <span style={{
          fontSize: '10px', fontWeight: 700,
          color: '#6a88ad',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: 100, padding: '3px 10px',
          letterSpacing: '0.04em',
        }}>
          {card.project}
        </span>
      </div>

      {/* 2 — Main result number */}
      <div style={{ marginBottom: 10, lineHeight: 1 }}>
        <span style={{
          fontSize: 'clamp(50px, 5.5vw, 64px)',
          fontWeight: 900,
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '-0.04em',
          background: 'linear-gradient(135deg, #ffffff 0%, #7ec8ff 50%, #00d4ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          {card.prefix}{displayNum}{card.suffix}
        </span>
      </div>

      {/* 3 — Result label */}
      <p style={{
        color: '#8ba3c7',
        fontSize: '0.82rem',
        fontWeight: 500,
        lineHeight: 1.5,
        marginBottom: 8,
      }}>
        {card.label}
      </p>

      {/* 4 — Timeframe */}
      <p style={{
        color: 'rgba(100,130,170,0.55)',
        fontSize: '0.72rem',
        letterSpacing: '0.01em',
        marginBottom: 20,
      }}>
        {card.timeframe}
      </p>

      {/* 5 — Divider */}
      <div style={{
        height: 1,
        background: 'rgba(255,255,255,0.06)',
        marginBottom: 16,
      }} />

      {/* 6 — Service context */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {/* Small icon */}
        <div style={{
          width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
          background: 'rgba(26,111,255,0.15)',
          border: '1px solid rgba(26,111,255,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4d9fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        </div>
        <span style={{ color: '#5a7a9a', fontSize: '0.75rem', fontWeight: 600 }}>
          {card.service}
        </span>
      </div>
    </div>
  )
}

/* ── Scroll arrow button ── */
function ArrowBtn({ dir, visible, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%', transform: 'translateY(-50%)',
        [dir === 'right' ? 'left' : 'right']: -20,
        zIndex: 10,
        width: 40, height: 40, borderRadius: '50%',
        background: 'rgba(26,111,255,0.14)',
        border: '1px solid rgba(26,111,255,0.30)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.25s ease',
        backdropFilter: 'blur(8px)',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4d9fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {dir === 'right'
          ? <path d="M15 18l-6-6 6-6"/>   /* chevron-right (points left visually) */
          : <path d="M9 18l6-6-6-6"/>      /* chevron-left (points right visually) */
        }
      </svg>
    </button>
  )
}

/* ── Main section ── */
export default function ResultsFlowSection() {
  const sectionRef  = useRef(null)
  const rowRef      = useRef(null)
  const dragRef     = useRef({ active: false, startX: 0, scrollLeft: 0 })

  const [headVis,    setHeadVis]    = useState(false)
  const [cardsVis,   setCardsVis]   = useState(false)
  const [triggered,  setTriggered]  = useState(false)
  const [canLeft,    setCanLeft]    = useState(false)
  const [canRight,   setCanRight]   = useState(true)

  /* ── IntersectionObserver ── */
  useEffect(() => {
    const headObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeadVis(true) },
      { threshold: 0.2 }
    )
    const cardsObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setCardsVis(true)
          setTriggered(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) headObs.observe(sectionRef.current)
    if (rowRef.current)     cardsObs.observe(rowRef.current)
    return () => { headObs.disconnect(); cardsObs.disconnect() }
  }, [])

  /* ── Scroll indicator sync ── */
  const syncArrows = useCallback(() => {
    const el = rowRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 4)
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }, [])

  useEffect(() => {
    const el = rowRef.current
    if (!el) return
    syncArrows()
    el.addEventListener('scroll', syncArrows, { passive: true })
    return () => el.removeEventListener('scroll', syncArrows)
  }, [syncArrows])

  /* ── Drag-to-scroll (desktop) ── */
  const onMouseDown = useCallback((e) => {
    const el = rowRef.current
    if (!el) return
    dragRef.current = { active: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft }
    el.style.cursor = 'grabbing'
    el.style.userSelect = 'none'
  }, [])

  const onMouseMove = useCallback((e) => {
    if (!dragRef.current.active) return
    e.preventDefault()
    const el = rowRef.current
    if (!el) return
    const x    = e.pageX - el.offsetLeft
    const walk = x - dragRef.current.startX
    el.scrollLeft = dragRef.current.scrollLeft - walk
  }, [])

  const onMouseUp = useCallback(() => {
    const el = rowRef.current
    if (!el) return
    dragRef.current.active = false
    el.style.cursor = 'grab'
    el.style.userSelect = ''
  }, [])

  useEffect(() => {
    window.addEventListener('mouseup',   onMouseUp)
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mouseup',   onMouseUp)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [onMouseMove, onMouseUp])

  const scrollBy = (dir) => {
    rowRef.current?.scrollBy({ left: dir * 330, behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="results-flow"
      style={{ padding: '120px 0 120px', position: 'relative', overflow: 'visible' }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '900px', height: '600px',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(26,111,255,0.07) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="relative max-w-6xl mx-auto px-6" style={{ zIndex: 1 }}>

        {/* ── Narrative bridge ── */}
        <div style={{
          textAlign: 'center', marginBottom: 48,
          opacity: headVis ? 0.45 : 0,
          transition: 'opacity 0.6s ease',
        }}>
          <p style={{ color: '#6a88ad', fontSize: '0.88rem', letterSpacing: '0.01em' }}>
            וכשתוכן חכם פוגש אתר שממיר
          </p>
        </div>

        {/* ── Headline ── */}
        <div style={{
          textAlign: 'center', marginBottom: 56,
          opacity: headVis ? 1 : 0,
          transform: headVis ? 'none' : 'translateY(18px)',
          transition: 'opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg, transparent, #1a6fff)' }} />
            <div className="tag-pill">התוצאות שלנו</div>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(270deg, transparent, #1a6fff)' }} />
          </div>

          <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', marginBottom: 18 }}>
            עסקים שהתחילו לפעול אחרת{' '}
            <span className="gradient-text">רואים תוצאות מהר</span>
          </h2>

          <p style={{ color: '#8ba3c7', fontSize: 'clamp(1rem,1.8vw,1.15rem)', maxWidth: 520, margin: '0 auto' }}>
            כאשר הכל עובד כמערכת אחת, התוצאות משתנות. יותר פניות, תהליך מכירה מסודר ויכולת אמיתית לגדול בצורה יציבה.
          </p>
        </div>

        {/* ── Cards row wrapper (relative — for arrows + edge fades) ── */}
        <div style={{ position: 'relative' }}>

          {/* Left edge fade */}
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: 80,
            background: 'linear-gradient(to right, transparent, #060b14)',
            pointerEvents: 'none', zIndex: 4,
          }} />
          {/* Right edge fade */}
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: 80,
            background: 'linear-gradient(to left, transparent, #060b14)',
            pointerEvents: 'none', zIndex: 4,
            opacity: canLeft ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }} />

          {/* Scroll arrows */}
          <ArrowBtn dir="right" visible={canRight} onClick={() => scrollBy(1)} />
          <ArrowBtn dir="left"  visible={canLeft}  onClick={() => scrollBy(-1)} />

          {/* Scrollable row */}
          <div
            ref={rowRef}
            onMouseDown={onMouseDown}
            style={{
              display: 'flex',
              gap: 16,
              overflowX: 'auto',
              scrollbarWidth: 'none',
              padding: '12px 8px 20px',
              cursor: 'grab',
              direction: 'ltr',       /* keeps scrollLeft predictable */
            }}
          >
            {cards.map((card, i) => (
              <ResultCard
                key={i}
                card={card}
                triggered={triggered}
                index={i}
                visible={cardsVis}
              />
            ))}
          </div>
        </div>

        {/* ── Divider + "עבודות נבחרות" label ── */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 16,
          margin: '72px 0 48px',
          opacity: cardsVis ? 1 : 0,
          transition: 'opacity 0.6s ease 0.4s',
        }}>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08))' }} />
          <div className="tag-pill">עבודות נבחרות</div>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, transparent, rgba(255,255,255,0.08))' }} />
        </div>

        {/* ── Project cards grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          marginBottom: 72,
        }}>
          {projects.map((proj, i) => (
            <div
              key={i}
              style={{
                background: 'linear-gradient(160deg, rgba(14,24,46,0.92) 0%, rgba(8,13,28,0.96) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderTopColor: 'rgba(77,159,255,0.28)',
                borderRadius: 16,
                overflow: 'hidden',
                direction: 'rtl',
                boxShadow: '0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(26,111,255,0.05)',
                opacity: cardsVis ? 1 : 0,
                transform: cardsVis ? 'none' : 'translateY(20px)',
                transition: `opacity 0.55s ease ${0.45 + i * 0.1}s, transform 0.55s ease ${0.45 + i * 0.1}s`,
              }}
            >
              {/* Screenshot placeholder */}
              <div style={{
                height: 160,
                background: proj.color,
                position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
              }}>
                {/* Skeleton layout lines */}
                <div style={{ position: 'absolute', inset: 0, padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ height: 12, width: '60%', background: 'rgba(255,255,255,0.08)', borderRadius: 4, marginRight: 'auto' }} />
                  <div style={{ height: 8,  width: '90%', background: 'rgba(255,255,255,0.05)', borderRadius: 4, marginRight: 'auto' }} />
                  <div style={{ height: 8,  width: '75%', background: 'rgba(255,255,255,0.05)', borderRadius: 4, marginRight: 'auto' }} />
                  <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                    <div style={{ flex: 2, height: 40, background: 'rgba(255,255,255,0.06)', borderRadius: 6 }} />
                    <div style={{ flex: 1, height: 40, background: 'rgba(255,255,255,0.06)', borderRadius: 6 }} />
                  </div>
                  <div style={{ height: 8, width: '50%', background: 'rgba(255,255,255,0.04)', borderRadius: 4, marginRight: 'auto' }} />
                </div>
                {/* Subtle glow center */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />
              </div>

              {/* Card body */}
              <div style={{ padding: '20px 22px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {/* Niche + type pills */}
                <div style={{ display: 'flex', gap: 6 }}>
                  <span style={{
                    fontSize: '10px', fontWeight: 700, color: '#4d9fff',
                    background: 'rgba(26,111,255,0.12)', border: '1px solid rgba(26,111,255,0.22)',
                    borderRadius: 100, padding: '3px 10px', letterSpacing: '0.04em',
                  }}>{proj.niche}</span>
                  <span style={{
                    fontSize: '10px', fontWeight: 700, color: '#6a88ad',
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)',
                    borderRadius: 100, padding: '3px 10px', letterSpacing: '0.04em',
                  }}>{proj.type}</span>
                </div>

                {/* Project name */}
                <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', margin: 0, lineHeight: 1.3 }}>
                  {proj.name}
                </h4>

                {/* Stat pills */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {proj.stats.map((stat, si) => (
                    <span key={si} style={{
                      fontSize: '0.72rem', fontWeight: 700,
                      color: si === 0 ? '#7ec8ff' : '#8ba3c7',
                      background: si === 0 ? 'rgba(26,111,255,0.1)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${si === 0 ? 'rgba(26,111,255,0.2)' : 'rgba(255,255,255,0.07)'}`,
                      borderRadius: 100, padding: '4px 10px',
                    }}>{stat}</span>
                  ))}
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />

                {/* CTA link */}
                <a href="#" style={{
                  color: 'rgba(100,140,190,0.6)', fontSize: '0.78rem', fontWeight: 600,
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5,
                  transition: 'color 0.2s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#4d9fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(100,140,190,0.6)'}
                >
                  <span>לפרויקט המלא</span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 5l-7 7 7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA bridge ── */}
        <div style={{
          textAlign: 'center',
          marginTop: 0,
          opacity: cardsVis ? 1 : 0,
          transition: 'opacity 0.6s ease 0.5s',
        }}>
          <h3 style={{
            fontSize: 'clamp(1.5rem,3vw,2.2rem)',
            fontWeight: 800,
            marginBottom: 12,
            letterSpacing: '-0.02em',
          }}>
            העסק שלכם יכול להיות הבא.
          </h3>
          <p style={{
            color: '#6a88ad',
            fontSize: '1rem',
            marginBottom: 32,
          }}>
            השאלה היחידה היא מתי תחליטו להתקדם
          </p>
          <a href="#contact">
            <button className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ flexShrink: 0 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span>אני רוצה תוצאות כאלה</span>
            </button>
          </a>
        </div>

      </div>
    </section>
  )
}
