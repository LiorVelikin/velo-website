import { useEffect, useRef, useState, Fragment } from 'react'

/* ── Step data ── */
const steps = [
  {
    num: '01',
    name: 'אפיון והבנת העסק',
    desc: 'לומדים ביחד איתכם את העסק, הקהל והמטרות — ומגדירים כיוון ברור לפני שמתחילים לבנות דבר.',
    tags: ['אפיון', 'אסטרטגיה', 'מפת דרכים'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4d9fff"
           strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
  },
  {
    num: '02',
    name: 'בניית המערכת',
    desc: 'מחברים בין תוכן, אתר, שיווק ותהליכים למערכת אחת — שבה כל חלק תומך בחלק האחר.',
    tags: ['תוכן AI', 'עיצוב ופיתוח', 'אוטומציות'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4d9fff"
           strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.5 4.6 4.5 1-4.5 1-1.5 4.6-1.5-4.6-4.5-1 4.5-1L12 3z"/>
        <path d="M5.5 19.5l.5-1.5 1.5-.5-1.5-.5-.5-1.5-.5 1.5-1.5.5 1.5.5.5 1.5z"/>
        <path d="M19 13.5l.4-1.2 1.2-.4-1.2-.4-.4-1.2-.4 1.2-1.2.4 1.2.4.4 1.2z"/>
      </svg>
    ),
  },
  {
    num: '03',
    name: 'השקה ושיפור מתמיד',
    desc: 'עולים לאוויר, מודדים, מדייקים ומשפרים את התוצאות לאורך זמן. דיווח שקוף ותהליך שמשתפר כל שבוע.',
    tags: ['השקה', 'אופטימיזציה', 'דיווח שוטף'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4d9fff"
           strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
]

/* ── Single step card ── */
function StepCard({ step, index, visible }) {
  return (
    <div style={{
      flex: '1 1 0',
      minWidth: 0,
      background: 'linear-gradient(160deg, rgba(14,24,48,0.92) 0%, rgba(8,12,26,0.96) 100%)',
      border: '1px solid rgba(255,255,255,0.09)',
      borderTopColor: 'rgba(77,159,255,0.28)',
      borderRadius: 16,
      padding: '36px 28px 28px',
      position: 'relative',
      overflow: 'hidden',
      direction: 'rtl',
      boxShadow: '0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(26,111,255,0.06)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(28px)',
      transition: `opacity 0.6s ease ${index * 150}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 150}ms`,
    }}>

      {/* Top-edge highlight */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%', height: 2,
        background: 'linear-gradient(90deg, transparent, rgba(26,111,255,0.35), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Watermark step number */}
      <div style={{
        position: 'absolute',
        top: 8, right: 16,
        fontSize: 'clamp(72px, 8vw, 96px)',
        fontWeight: 900,
        color: 'rgba(77,159,255,0.1)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '-0.05em',
      }}>
        {step.num}
      </div>

      {/* Icon */}
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: 'rgba(26,111,255,0.14)',
        border: '1px solid rgba(26,111,255,0.3)',
        boxShadow: '0 0 20px rgba(26,111,255,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 20,
      }}>
        {step.icon}
      </div>

      {/* Step name */}
      <h3 style={{
        color: '#ffffff', fontWeight: 700,
        fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
        lineHeight: 1.25, marginBottom: 12,
      }}>
        {step.name}
      </h3>

      {/* Description */}
      <p style={{
        color: '#8ba3c7', fontSize: '0.88rem',
        lineHeight: 1.7, marginBottom: 24,
      }}>
        {step.desc}
      </p>

      {/* Output tags */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {step.tags.map(tag => (
          <span key={tag} style={{
            fontSize: '0.68rem', fontWeight: 700,
            color: '#4d9fff',
            background: 'rgba(26,111,255,0.12)',
            border: '1px solid rgba(26,111,255,0.25)',
            borderRadius: 100, padding: '3px 10px',
            letterSpacing: '0.03em',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Main section ── */
export default function VelocitySection() {
  const sectionRef = useRef(null)
  const [headVis,  setHeadVis]  = useState(false)
  const [cardsVis, setCardsVis] = useState(false)
  const [linesVis, setLinesVis] = useState(false)

  useEffect(() => {
    const headObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeadVis(true) },
      { threshold: 0.15 }
    )
    const cardsObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setCardsVis(true)
          // lines draw in after cards start appearing
          setTimeout(() => setLinesVis(true), 300)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      headObs.observe(sectionRef.current)
      cardsObs.observe(sectionRef.current)
    }
    return () => { headObs.disconnect(); cardsObs.disconnect() }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-14 relative"
      style={{ direction: 'rtl' }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 500,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(26,111,255,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* ── Headline ── */}
        <div style={{
          textAlign: 'center', marginBottom: 64,
          opacity: headVis ? 1 : 0,
          transform: headVis ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.55s ease, transform 0.55s ease',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ height: 1, width: 48, background: 'linear-gradient(90deg, transparent, #1a6fff)' }} />
            <div className="tag-pill">התהליך שלנו</div>
            <div style={{ height: 1, width: 48, background: 'linear-gradient(270deg, transparent, #1a6fff)' }} />
          </div>

          <h2 className="font-black leading-tight" style={{
            fontSize: 'clamp(2rem,4.5vw,3.4rem)', letterSpacing: '-0.02em', marginBottom: 16,
          }}>
            מה אנחנו <span className="gradient-text">עושים</span>
          </h2>

          <p style={{ color: '#4a5d7a', fontSize: 'clamp(0.95rem,1.6vw,1.1rem)', maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>
            תהליך ברור, תקשורת שקופה, תוצאות שאפשר למדוד — בכל שלב
          </p>
        </div>

        {/* ── Steps row — desktop: flex row with lines, mobile: column ── */}

        {/* Desktop layout */}
        <div className="hidden md:flex" style={{ alignItems: 'stretch', gap: 0 }}>
          {steps.map((step, i) => (
            <Fragment key={step.num}>
              <StepCard step={step} index={i} visible={cardsVis} />
              {i < steps.length - 1 && (
                <div
                  className="process-line-h"
                  style={{
                    opacity: linesVis ? 1 : 0,
                    transition: `opacity 0.5s ease ${i * 200 + 400}ms`,
                  }}
                />
              )}
            </Fragment>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden flex-col" style={{ gap: 0 }}>
          {steps.map((step, i) => (
            <Fragment key={step.num}>
              <StepCard step={step} index={i} visible={cardsVis} />
              {i < steps.length - 1 && (
                <div className="process-line-v" style={{ opacity: linesVis ? 0.6 : 0, transition: 'opacity 0.5s ease 0.5s' }} />
              )}
            </Fragment>
          ))}
        </div>

        {/* ── Reassurance line ── */}
        <div style={{
          textAlign: 'center', marginTop: 52,
          opacity: cardsVis ? 1 : 0,
          transition: 'opacity 0.6s ease 0.6s',
        }}>
          <p style={{
            color: 'rgba(100,140,190,0.5)',
            fontSize: '0.92rem',
            fontStyle: 'italic',
            letterSpacing: '0.01em',
            marginBottom: 28,
          }}>
            אין חוזים ארוכים. אין הפתעות. רק עבודה שמדברת בעד עצמה.
          </p>
          <p style={{
            color: '#0a0f1e',
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: 16,
          }}>
            מוכנים להתחיל? השלב הראשון לוקח 5 דקות.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#contact">
              <button className="btn-primary">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span>קבלו אבחון חינם</span>
              </button>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span className="urgency-dot" />
              <span style={{ color: '#f59e0b', fontSize: '0.8rem', fontWeight: 500 }}>
                מספר הפרויקטים בחודש מוגבל
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
