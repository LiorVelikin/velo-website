import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SPRING = { type: 'spring', stiffness: 200, damping: 28 }

const STATS = [
  { num: '×4.8',  he: 'החזר על השקעה',   sub: 'ממוצע ללקוחות פעילים' },
  { num: '+312%', he: 'יותר מכירות',     sub: 'גידול ממוצע אחרי שנה' },
  { num: '42',    he: 'עסקים שצמחו',     sub: 'איתנו מאז 2024' },
  { num: '12',    he: 'שפות לתוכן',      sub: 'לכל שוק וקהל' },
]

function Stat({ stat, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...SPRING, delay: index * 0.08 }}
      className="stats-item"
      style={{ padding: '8px 0', textAlign: 'center', position: 'relative', direction: 'rtl' }}
    >
      <div
        className="tabular gradient-accent"
        style={{
          fontSize: 'clamp(2.6rem, 5.5vw, 4rem)',
          lineHeight: 1,
          marginBottom: 14,
        }}
      >
        {stat.num}
      </div>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.96rem',
        fontWeight: 700,
        color: 'var(--ink-100)',
        marginBottom: 4,
      }}>
        {stat.he}
      </div>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.78rem',
        color: 'var(--ink-500)',
      }}>
        {stat.sub}
      </div>
    </motion.div>
  )
}

export default function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section style={{ padding: 'clamp(40px, 5vw, 80px) 0', position: 'relative', direction: 'rtl' }}>
      <div ref={ref} style={{ maxWidth: 1180, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)' }}>
        <div
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            borderTop: '1px solid var(--hairline)',
            borderBottom: '1px solid var(--hairline)',
            padding: '38px 0',
            position: 'relative',
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className="stats-cell"
              style={{ borderLeft: i < STATS.length - 1 ? '1px solid var(--hairline)' : 'none' }}
            >
              <Stat stat={s} index={i} inView={inView} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-cell:nth-child(2) { border-left: none !important; }
          .stats-cell:nth-child(1), .stats-cell:nth-child(2) {
            border-bottom: 1px solid var(--hairline);
            padding-bottom: 28px;
            margin-bottom: 28px;
          }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .stats-cell { border-left: none !important; border-bottom: 1px solid var(--hairline) !important; padding: 22px 0 !important; margin: 0 !important; }
          .stats-cell:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  )
}
