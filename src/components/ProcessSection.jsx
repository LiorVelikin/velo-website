import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    num: '01',
    title: 'שיחת אבחון חינמית',
    body: 'שיחה של 20–30 דקות שבה אנחנו מסתכלים על העסק שלכם ביחד. מזהים מה עוצר את הצמיחה, מה אפשר לשפר, ואיך נראה המסלול הנכון עבורכם.',
    detail: 'אתם יוצאים עם תמונה ברורה — גם אם תחליטו לא לעבוד יחד.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    color: '#1a6fff',
  },
  {
    num: '02',
    title: 'אסטרטגיה מותאמת',
    body: 'בונים יחד תוכנית עבודה ברורה — אילו שירותים מתאימים, מה הסדר הנכון, ומה המטרות הריאליות לשלושה החודשים הראשונים.',
    detail: 'אין תבניות מוכנות. כל עסק מקבל פתרון שנבנה בשבילו.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ),
    color: '#a07dff',
  },
  {
    num: '03',
    title: 'ביצוע, תוצאות וצמיחה',
    body: 'אנחנו מבצעים — תוכן, אתר, קמפיינים. אתם מקבלים עדכונים שוטפים וגישה ישירה אליי בכל שלב. המטרה תמיד היא צמיחה מדידה.',
    detail: 'ריטיינר חודשי ללא חוזה מחייב. נשארים כי התוצאות מצדיקות.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    color: '#00b96b',
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTriggered(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="process"
      ref={ref}
      style={{ padding: '100px 0', direction: 'rtl', position: 'relative' }}
    >
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, #fff 0%, #f4f7ff 50%, #fff 100%)',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(16px,4vw,40px)', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{
          textAlign: 'center', marginBottom: 60,
          opacity: triggered ? 1 : 0,
          transform: triggered ? 'none' : 'translateY(18px)',
          transition: 'opacity 0.55s ease, transform 0.55s ease',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 18 }}>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg, transparent, #1a6fff)' }} />
            <div className="tag-pill">איך עובדים איתי</div>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(270deg, transparent, #1a6fff)' }} />
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', letterSpacing: '-0.02em', marginBottom: 14 }}>
            שלושה שלבים לצמיחה{' '}
            <span className="gradient-text">אמיתית</span>
          </h2>
          <p style={{ color: '#4a5d7a', fontSize: 'clamp(0.95rem,1.5vw,1.05rem)', maxWidth: 480, margin: '0 auto' }}>
            תהליך פשוט, ברור ומחושב — מהשיחה הראשונה ועד לתוצאות שאפשר למדוד.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 20,
          position: 'relative',
        }}>

          {/* Connecting line (desktop) */}
          <div style={{
            position: 'absolute',
            top: 36,
            right: '16.5%',
            left: '16.5%',
            height: 1,
            background: 'linear-gradient(90deg, #1a6fff33, #a07dff33, #00b96b33)',
            display: 'none',  /* shown via CSS on wide screens */
            pointerEvents: 'none',
          }} />

          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                flex: '1 1 260px',
                background: '#fff',
                border: '1px solid rgba(10,15,30,0.08)',
                borderRadius: 20,
                padding: '32px 28px',
                position: 'relative',
                boxShadow: '0 2px 20px rgba(0,0,0,0.04)',
                opacity: triggered ? 1 : 0,
                transform: triggered ? 'none' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${i * 130}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 130}ms`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
                e.currentTarget.style.transition = 'transform 0.22s ease, box-shadow 0.22s ease'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = '0 2px 20px rgba(0,0,0,0.04)'
                e.currentTarget.style.transition = 'transform 0.22s ease, box-shadow 0.22s ease'
              }}
            >
              {/* Top accent */}
              <div style={{
                position: 'absolute', top: 0, right: '15%', left: '15%', height: 2,
                background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`,
                borderRadius: 1,
              }} />

              {/* Number + icon row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                  background: `${step.color}12`,
                  border: `1.5px solid ${step.color}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: step.color,
                }}>
                  {step.icon}
                </div>
                <div style={{
                  fontWeight: 900, fontSize: '2rem', color: 'rgba(10,15,30,0.07)',
                  letterSpacing: '-0.04em', lineHeight: 1,
                  fontFamily: 'Heebo, sans-serif',
                }}>
                  {step.num}
                </div>
              </div>

              <h3 style={{
                color: '#0a0f1e', fontWeight: 800,
                fontSize: 'clamp(1rem,1.6vw,1.15rem)',
                letterSpacing: '-0.02em',
                marginBottom: 12, lineHeight: 1.3,
              }}>
                {step.title}
              </h3>

              <p style={{ color: '#4a5d7a', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: 14 }}>
                {step.body}
              </p>

              <p style={{
                color: step.color, fontSize: '0.78rem', fontWeight: 700,
                lineHeight: 1.5,
                paddingTop: 12,
                borderTop: `1px solid ${step.color}18`,
              }}>
                {step.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
