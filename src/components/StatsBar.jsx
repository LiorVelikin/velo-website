import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 42,    suffix: '',   prefix: '',   label: 'לידים בחודש אחד',            sub: 'Windows4U — אפריל 2026',        color: '#1a6fff' },
  { value: 8.5,   suffix: '×', prefix: '',   label: 'ROAS — החזר על פרסום',        sub: 'זנורה תכשיטים — ממוצע קמפיינים', color: '#00b96b' },
  { value: 100,   suffix: '%', prefix: '',   label: 'AI UGC — תוכן שלא ראיתם פה', sub: 'ראשונים בישראל בסטנדרט הזה',    color: '#a07dff' },
]

function useCountUp(target, decimals = 0, triggered) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!triggered) return
    const duration = 1400
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      const current = parseFloat((eased * target).toFixed(decimals))
      setVal(current)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [triggered, target, decimals])
  return val
}

function Stat({ value, suffix, prefix, label, sub, color, triggered, index }) {
  const decimals = Number.isInteger(value) ? 0 : 1
  const count = useCountUp(value, decimals, triggered)

  return (
    <div className="stats-item" style={{
      flex: '1 1 200px',
      textAlign: 'center',
      padding: '32px 24px',
      opacity: triggered ? 1 : 0,
      transform: triggered ? 'none' : 'translateY(16px)',
      transition: `opacity 0.55s ease ${index * 120}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${index * 120}ms`,
      position: 'relative',
    }}>
      {/* Divider (not on last) */}
      {index < stats.length - 1 && (
        <div className="stats-divider" style={{
          position: 'absolute', top: '20%', bottom: '20%',
          left: 0, width: 1,
          background: 'rgba(0,212,255,0.1)',
        }} />
      )}

      <div style={{
        fontSize: 'clamp(2.4rem,4vw,3.4rem)',
        fontWeight: 900,
        letterSpacing: '-0.04em',
        lineHeight: 1,
        color,
        marginBottom: 10,
        fontFamily: 'Heebo, sans-serif',
      }}>
        {prefix}{decimals === 0 ? count : count.toFixed(1)}{suffix}
      </div>

      <div style={{
        color: '#E8F4FF',
        fontWeight: 700,
        fontSize: 'clamp(0.85rem,1.4vw,0.95rem)',
        marginBottom: 6,
        lineHeight: 1.3,
      }}>
        {label}
      </div>
      <div style={{
        color: 'rgba(200,220,255,0.55)',
        fontSize: '0.73rem',
        fontWeight: 500,
        lineHeight: 1.4,
      }}>
        {sub}
      </div>
    </div>
  )
}

export default function StatsBar() {
  const ref = useRef(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTriggered(true) },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} style={{ padding: '0 0 20px', direction: 'rtl' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(16px,4vw,40px)' }}>

        {/* Card */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          borderRadius: 20,
          border: '1px solid rgba(255,255,255,0.07)',
          borderTopColor: 'rgba(0,212,255,0.22)',
          background: 'linear-gradient(160deg, rgba(13,22,44,0.92) 0%, rgba(7,11,24,0.96) 100%)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(0,212,255,0.08)',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* Top accent line */}
          <div style={{
            position: 'absolute', top: 0, left: '5%', right: '5%', height: 2,
            background: 'linear-gradient(90deg, transparent, #00d4ff, #a07dff, transparent)',
            borderRadius: 1,
          }} />

          {stats.map((s, i) => (
            <Stat key={i} {...s} triggered={triggered} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
