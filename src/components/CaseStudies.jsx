import { useEffect, useRef, useState } from 'react'

const BASE = import.meta.env.BASE_URL

const WA_LINK = 'https://wa.me/972544286018?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9C%D7%99%D7%90%D7%95%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%94%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D%20%D7%A9%D7%9C%D7%9A'

const cases = [
  {
    id: 'zenora',
    name: 'זנורה תכשיטים',
    tag: 'אי-קומרס · AI תוכן · פרסום',
    color: '#1a6fff',
    accent: 'rgba(26,111,255,0.08)',
    border: 'rgba(26,111,255,0.18)',
    img: `${BASE}images/shopify/store-1.png`,
    challenge: 'מותג תכשיטים שרצה לבנות נוכחות דיגיטלית מאפס — ללא תוכן, ללא חנות, ללא קמפיינים.',
    solution: [
      'בניית חנות Shopify מותאמת למותג',
      'יצירת תוכן UGC ב-AI — נשים מדברות עברית מחזיקות את התכשיטים האמיתיים',
      'ניהול קמפיינים ממומנים ב-Meta',
    ],
    results: [
      { value: '×7.26', label: 'ROAS קמפיין ראשון' },
      { value: '×8.53', label: 'ROAS קמפיין שני' },
      { value: 'AI UGC', label: 'תוכן שלא ראיתם בישראל' },
    ],
  },
  {
    id: 'windows4u',
    name: 'Windows4U',
    tag: 'אתר עסקי · AI אווטאר · ניהול לידים',
    color: '#00b96b',
    accent: 'rgba(0,185,107,0.08)',
    border: 'rgba(0,185,107,0.18)',
    img: `${BASE}images/websites/zano.png`,
    challenge: 'חברת חלונות שהסתמכה אך ורק על פה לאוזן. ללא אתר, ללא תוכן, ללא מערכת לידים.',
    solution: [
      'בניית אתר עסקי ממיר עם מסר ברור',
      'יצירת אווטאר AI של בעל העסק להפקת תוכן פרסומי',
      'ניהול קמפיין לידים ב-Meta',
    ],
    results: [
      { value: '42',     label: 'לידים בחודש אחד' },
      { value: '$37.80', label: 'עלות לליד' },
      { value: '$1,587', label: 'תקציב חודשי' },
    ],
  },
]

function Tag({ children, color }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '3px 10px',
      borderRadius: 100,
      fontSize: '0.7rem',
      fontWeight: 700,
      color,
      background: `${color}14`,
      border: `1px solid ${color}28`,
      marginLeft: 6,
      marginBottom: 4,
    }}>
      {children}
    </span>
  )
}

function CaseCard({ c, index, triggered }) {
  const tags = c.tag.split(' · ')

  return (
    <div style={{
      flex: '1 1 420px',
      background: '#fff',
      border: `1px solid rgba(10,15,30,0.09)`,
      borderRadius: 22,
      overflow: 'hidden',
      boxShadow: '0 4px 32px rgba(0,0,0,0.06)',
      opacity: triggered ? 1 : 0,
      transform: triggered ? 'none' : 'translateY(24px)',
      transition: `opacity 0.6s ease ${index * 150}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 150}ms`,
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Screenshot */}
      <div style={{
        position: 'relative',
        height: 220,
        overflow: 'hidden',
        background: '#f0f2f8',
        flexShrink: 0,
      }}>
        <img
          src={c.img}
          alt={c.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.45) 100%)',
        }} />
        {/* Name on image */}
        <div style={{
          position: 'absolute', bottom: 16, right: 18,
        }}>
          <div style={{
            color: '#fff', fontWeight: 800,
            fontSize: 'clamp(1.1rem,2vw,1.3rem)',
            letterSpacing: '-0.02em',
            textShadow: '0 2px 12px rgba(0,0,0,0.4)',
          }}>
            {c.name}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 5 }}>
            {tags.map(t => <Tag key={t} color="#fff">{t}</Tag>)}
          </div>
        </div>
        {/* Top accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, ${c.color}, ${c.color}88)`,
        }} />
      </div>

      {/* Body */}
      <div style={{ padding: '28px 28px 24px', flex: 1, display: 'flex', flexDirection: 'column', direction: 'rtl' }}>

        {/* Challenge */}
        <div style={{ marginBottom: 20 }}>
          <div style={{
            fontSize: '0.7rem', fontWeight: 700, color: '#9aabb8',
            letterSpacing: '0.08em', marginBottom: 8, textTransform: 'uppercase',
          }}>
            האתגר
          </div>
          <p style={{ color: '#3a4a60', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
            {c.challenge}
          </p>
        </div>

        {/* Solution */}
        <div style={{ marginBottom: 24 }}>
          <div style={{
            fontSize: '0.7rem', fontWeight: 700, color: '#9aabb8',
            letterSpacing: '0.08em', marginBottom: 8, textTransform: 'uppercase',
          }}>
            הפתרון
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
            {c.solution.map((s, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                <div style={{
                  width: 18, height: 18, borderRadius: '50%', flexShrink: 0, marginTop: 2,
                  background: c.accent,
                  border: `1px solid ${c.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke={c.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{ color: '#3a4a60', fontSize: '0.87rem', lineHeight: 1.55 }}>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Results */}
        <div style={{
          display: 'flex', gap: 2,
          background: c.accent,
          border: `1px solid ${c.border}`,
          borderRadius: 14,
          overflow: 'hidden',
          marginTop: 'auto',
        }}>
          {c.results.map((r, i) => (
            <div key={i} style={{
              flex: 1,
              padding: '14px 12px',
              textAlign: 'center',
              borderLeft: i > 0 ? `1px solid ${c.border}` : 'none',
            }}>
              <div style={{
                color: c.color, fontWeight: 900,
                fontSize: 'clamp(1rem,1.8vw,1.25rem)',
                letterSpacing: '-0.03em', lineHeight: 1,
                marginBottom: 5,
              }}>
                {r.value}
              </div>
              <div style={{ color: '#4a5d7a', fontSize: '0.68rem', fontWeight: 600, lineHeight: 1.3 }}>
                {r.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default function CaseStudies() {
  const ref = useRef(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTriggered(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="case-studies"
      ref={ref}
      style={{ padding: '100px 0', direction: 'rtl' }}
    >
      {/* Subtle bg */}
      <div style={{
        position: 'absolute', left: 0, right: 0,
        height: '100%', pointerEvents: 'none',
        background: 'linear-gradient(180deg, #f8faff 0%, #fff 100%)',
        zIndex: -1,
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(16px,4vw,40px)' }}>

        {/* Header */}
        <div style={{
          textAlign: 'center', marginBottom: 56,
          opacity: triggered ? 1 : 0,
          transform: triggered ? 'none' : 'translateY(18px)',
          transition: 'opacity 0.55s ease, transform 0.55s ease',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 18 }}>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg, transparent, #1a6fff)' }} />
            <div className="tag-pill">תיק עבודות</div>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(270deg, transparent, #1a6fff)' }} />
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', letterSpacing: '-0.02em', marginBottom: 14 }}>
            תוצאות שאפשר{' '}
            <span className="gradient-text">למדוד</span>
          </h2>
          <p style={{ color: '#4a5d7a', fontSize: 'clamp(0.95rem,1.5vw,1.05rem)', maxWidth: 520, margin: '0 auto' }}>
            שני לקוחות שלקחו את הפתרון המלא — תוכן, אתר וניהול פרסום תחת קורת גג אחת.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {cases.map((c, i) => (
            <CaseCard key={c.id} c={c} index={i} triggered={triggered} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center', marginTop: 48,
          opacity: triggered ? 1 : 0,
          transition: 'opacity 0.55s ease 0.4s',
        }}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              padding: '12px 28px',
              background: 'linear-gradient(135deg,#1a6fff 0%,#0055ee 100%)',
              color: '#fff', border: 'none', borderRadius: 12,
              fontFamily: 'Heebo, sans-serif',
              fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(26,111,255,0.35)',
              transition: 'transform 0.18s ease, box-shadow 0.18s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(26,111,255,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(26,111,255,0.35)' }}
            >
              <span>רוצים תוצאות כאלה? בואו נדבר</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
            </button>
          </a>
        </div>

      </div>
    </section>
  )
}
