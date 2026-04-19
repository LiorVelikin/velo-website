import { useEffect, useRef, useState } from 'react'

function useCountUp(target, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, shouldStart])

  return count
}

const stats = [
  {
    prefix: '',
    value: 60,
    suffix: '+',
    label: 'אבחונים בוצעו',
    sub: 'עסקים שכבר קיבלו כיוון ברור',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    prefix: '',
    value: 45,
    suffix: '',
    label: 'ימים לתוצאות ראשונות',
    sub: 'ברוב הפרויקטים שלנו',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    prefix: '',
    value: 2,
    suffix: '',
    label: 'מדינות פעילות',
    sub: 'ישראל וארצות הברית',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
]

function StatCard({ stat, index }) {
  const [started, setStarted] = useState(false)
  const cardRef = useRef(null)
  const count = useCountUp(stat.value, 1800, started)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '28px 20px',
        position: 'relative',
      }}
    >
      {/* Vertical divider — hidden on first item */}
      {index > 0 && (
        <div style={{
          position: 'absolute',
          right: 0, top: '20%', bottom: '20%',
          width: 1,
          background: 'linear-gradient(180deg, transparent, rgba(10,15,30,0.12), transparent)',
        }} />
      )}

      {/* Icon */}
      <div style={{
        width: 44, height: 44, borderRadius: 12,
        background: 'rgba(26,111,255,0.08)',
        border: '1px solid rgba(26,111,255,0.18)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#4d9fff',
        marginBottom: 16,
      }}>
        {stat.icon}
      </div>

      {/* Number */}
      <div style={{
        fontSize: 'clamp(2.2rem, 4vw, 3rem)',
        fontWeight: 900,
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '-0.04em',
        lineHeight: 1,
        marginBottom: 8,
        background: 'linear-gradient(135deg, #1a6fff 0%, #00c8ff 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        {stat.prefix}{count}{stat.suffix}
      </div>

      {/* Label */}
      <p style={{ color: '#0a0f1e', fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>
        {stat.label}
      </p>

      {/* Sub */}
      <p style={{ color: '#6a80a0', fontSize: '0.78rem', lineHeight: 1.4 }}>
        {stat.sub}
      </p>
    </div>
  )
}

export default function Stats() {
  return (
    <section style={{ padding: '0 0 16px', position: 'relative', overflow: 'hidden' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(220,230,248,0.5) 100%)',
          border: '1px solid rgba(255,255,255,0.55)',
          borderRadius: 20,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06), 0 8px 32px rgba(26,111,255,0.08)',
        }}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
