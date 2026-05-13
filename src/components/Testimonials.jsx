import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GlowCard from './GlowCard'

const SPRING = { type: 'spring', stiffness: 220, damping: 26 }

const QUOTES = [
  {
    quote: 'התחלנו לראות תוצאות תוך פחות מחודשיים. הקמפיינים החזירו את עצמם פי כמה, והאתר החדש פשוט מוכר לבד גם בלילה.',
    name: 'נועה כהן',
    role: 'בעלים · Zenora Jewelry',
  },
  {
    quote: 'מה שאהבתי הכי הרבה זה שהם מסבירים הכל בעברית פשוטה. כל שבוע מקבל דוח ברור, יודע בדיוק מה עובד ומה לא — בלי מילים גדולות.',
    name: 'דניאל ברק',
    role: 'מייסד · Taylors Wine',
  },
  {
    quote: 'הכי חשוב — הם לא מבטיחים לכם הרים וגבעות. מציגים תוכנית ריאלית, עומדים בה, ואז גם משפרים אותה. עובדים איתם כבר שנה ולא הולכת לשום מקום.',
    name: 'מיכל לוי',
    role: 'מנהלת שיווק · Lilach',
  },
]

const Star = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#22D3EE" style={{ flexShrink: 0 }}>
    <path d="M12 2l2.96 6.91 7.04.83-5 5.18 1.18 7.08L12 18.5l-6.18 3.5L7 14.92 2 9.74l7.04-.83z" />
  </svg>
)

function QuoteCard({ q, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...SPRING, delay: index * 0.08 }}
      style={{ height: '100%' }}
    >
      <GlowCard
        radius={14}
        spotSize={340}
        bgOpacity={0.10}
        alwaysOnBorderTint="rgba(34,211,238,0.14)"
        alwaysOnFillTint="rgba(15,16,20,0.5)"
        style={{
          padding: '32px 28px 26px',
          direction: 'rtl',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div style={{ display: 'flex', gap: 2, marginBottom: 22 }}>
          {[0, 1, 2, 3, 4].map(i => <Star key={i} />)}
        </div>

        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.02rem, 1.5vw, 1.15rem)',
          fontWeight: 500,
          lineHeight: 1.6,
          color: 'var(--ink-100)',
          marginBottom: 28,
          flex: 1,
          letterSpacing: '-0.005em',
        }}>
          <span style={{ color: 'rgba(34,211,238,0.5)', fontSize: '1.4em', verticalAlign: '-0.1em', marginLeft: 4 }}>“</span>
          {q.quote}
        </p>

        <div style={{ borderTop: '1px solid rgba(34,211,238,0.12)', paddingTop: 16 }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.96rem',
            fontWeight: 700,
            color: 'var(--ink-100)',
            margin: 0,
            marginBottom: 2,
          }}>
            {q.name}
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.82rem',
            color: 'var(--ink-500)',
            margin: 0,
          }}>
            {q.role}
          </p>
        </div>
      </GlowCard>
    </motion.div>
  )
}

export default function Testimonials() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section style={{ padding: 'clamp(60px, 8vw, 120px) 0', position: 'relative', direction: 'rtl' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)' }}>
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 48, maxWidth: 720 }}
        >
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
            לא רק עובדים בשבילם. <br />
            <span className="gradient-accent">צומחים יחד.</span>
          </h2>
          <p style={{ color: 'var(--ink-300)', fontSize: '1rem', lineHeight: 1.65, margin: 0 }}>
            מה שלקוחות שלנו אומרים אחרי חצי שנה של עבודה משותפת.
          </p>
        </motion.div>

        <div className="quotes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {QUOTES.map((q, i) => <QuoteCard key={i} q={q} index={i} inView={inView} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .quotes-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
