import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GlowCard from './GlowCard'

const SPRING = { type: 'spring', stiffness: 220, damping: 26 }

const CASES = [
  {
    num: '01',
    name: 'Zenora Jewelry',
    cat: 'תכשיטים · יוקרה',
    metric: '×4.2',
    metricLbl: 'החזר השקעה',
    period: '4 חודשים',
    tags: ['חנות Shopify', 'קמפיינים', 'תוכן'],
    accent: '#22D3EE',
  },
  {
    num: '02',
    name: 'Taylors Wine',
    cat: 'יין · DTC',
    metric: '+180%',
    metricLbl: 'יותר הזמנות',
    period: 'רבעון אחד',
    tags: ['Shopify', 'קמפיינים', 'תוכן'],
    accent: '#3D8BFF',
  },
  {
    num: '03',
    name: 'Zano Studio',
    cat: 'סטודיו הפקה',
    metric: 'אתר חדש',
    metricLbl: 'מהיסוד',
    period: '30 ימים',
    tags: ['עיצוב', 'פיתוח', 'תדמית'],
    accent: '#1A6FFF',
  },
  {
    num: '04',
    name: 'Lilach',
    cat: 'עיצוב שיער',
    metric: '+90%',
    metricLbl: 'יותר פניות',
    period: '60 ימים',
    tags: ['אתר', 'SEO', 'קמפיינים'],
    accent: '#6AA6FF',
  },
]

function CaseCard({ c, index, inView }) {
  return (
    <motion.a
      href="#"
      onClick={(e) => e.preventDefault()}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...SPRING, delay: index * 0.07 }}
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 380, damping: 30 } }}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <GlowCard
        radius={14}
        spotSize={320}
        bgOpacity={0.12}
        alwaysOnBorderTint="rgba(34,211,238,0.14)"
        alwaysOnFillTint="rgba(15,16,20,0.5)"
        style={{ padding: '22px 22px 18px', direction: 'rtl' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
            <span style={{ color: c.accent }}>{c.num}</span>
            <span style={{ color: 'rgba(245,245,247,0.25)', margin: '0 4px' }}>⁄</span>
            <span style={{ color: 'rgba(245,245,247,0.4)' }}>12</span>
          </div>
          <span style={{ color: c.accent, fontSize: '1.1rem' }}>↗</span>
        </div>

        <div style={{ marginBottom: 28 }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.55rem',
            fontWeight: 800,
            color: 'var(--ink-100)',
            letterSpacing: '-0.03em',
            marginBottom: 4,
          }}>
            {c.name}
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.82rem',
            color: 'var(--ink-500)',
            margin: 0,
          }}>
            {c.cat}
          </p>
        </div>

        <div style={{ marginBottom: 28 }}>
          <div className="tabular gradient-accent" style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            lineHeight: 1,
            marginBottom: 6,
          }}>
            {c.metric}
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--font-body)',
            fontSize: '0.84rem',
            color: 'var(--ink-300)',
          }}>
            <span>{c.metricLbl}</span>
            <span style={{ color: 'rgba(245,245,247,0.25)' }}>·</span>
            <span style={{ color: 'var(--ink-500)' }}>{c.period}</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {c.tags.map(t => <span key={t} className="tech-chip">{t}</span>)}
        </div>
      </GlowCard>
    </motion.a>
  )
}

export default function CaseStudies() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="case-studies" style={{ padding: 'clamp(60px, 8vw, 120px) 0', position: 'relative', direction: 'rtl' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)' }}>
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginBottom: 48,
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            flexWrap: 'wrap', gap: 20,
          }}
        >
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4.8vw, 3.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: 'var(--ink-100)',
              margin: 0,
              marginBottom: 12,
            }}>
              עסקים שצמחו <span className="gradient-accent">איתנו.</span>
            </h2>
            <p style={{ color: 'var(--ink-300)', fontSize: '1rem', lineHeight: 1.6, margin: 0, maxWidth: 480 }}>
              כמה דוגמאות מהעבודות האחרונות שלנו — תוצאות אמיתיות מלקוחות אמיתיים.
            </p>
          </div>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: 'var(--cyan)', fontSize: '0.94rem', fontWeight: 600,
              textDecoration: 'none', padding: '8px 0',
            }}
            onMouseEnter={(e) => e.currentTarget.querySelector('.arr').style.transform = 'translateX(-4px)'}
            onMouseLeave={(e) => e.currentTarget.querySelector('.arr').style.transform = 'none'}
          >
            <span>כל הפרויקטים</span>
            <span className="arr" style={{ transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)' }}>←</span>
          </a>
        </motion.div>

        <div className="cases-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {CASES.map((c, i) => <CaseCard key={c.num} c={c} index={i} inView={inView} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .cases-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 520px) { .cases-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
