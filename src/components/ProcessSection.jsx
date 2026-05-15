import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SPRING = { type: 'spring', stiffness: 220, damping: 26 }

const STEPS = [
  {
    num: '01',
    title: 'מתחילים בשיחה',
    desc: 'פגישה כנה של 20 דקות. מבינים את העסק, את הקהל ואת היעדים שלכם. בלי מצגות, בלי שטויות.',
    color: '#3D8BFF',
  },
  {
    num: '02',
    title: 'בונים תוכנית',
    desc: 'מציגים לכם תמהיל מותאם של שירותים, תקציב ולוח זמנים. אתם רואים בדיוק מה הולך לקרות, מתי, ולמה.',
    color: '#1A6FFF',
  },
  {
    num: '03',
    title: 'יוצאים לדרך',
    desc: 'אתרים, תוכן וקמפיינים מתחילים לרוץ. אתם רואים הכל בלוח בקרה אחד — בזמן אמת, בלי אימיילים אינסופיים.',
    color: '#22D3EE',
  },
  {
    num: '04',
    title: 'משפרים בלי הפסקה',
    desc: 'דוח שבועי ברור, ניסויים מתמידים, וכל מה שעובד — מקבל יותר תקציב ויותר תשומת לב.',
    color: '#6AA6FF',
  },
]

function Step({ step, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...SPRING, delay: index * 0.06 }}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 24,
        padding: '32px 0',
        borderBottom: index < STEPS.length - 1 ? '1px solid var(--hairline)' : 'none',
        direction: 'rtl',
      }}
    >
      <div style={{
        flex: '0 0 80px',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
        fontWeight: 800,
        color: 'rgba(245,245,247,0.10)',
        lineHeight: 1,
        letterSpacing: '-0.04em',
        userSelect: 'none',
      }}>
        {step.num}
      </div>

      <div style={{ flex: 1, paddingTop: 6 }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 2.5vw, 1.95rem)',
          fontWeight: 800,
          color: 'var(--ink-100)',
          letterSpacing: '-0.03em',
          marginBottom: 10,
        }}>
          {step.title}
        </h3>
        <p style={{
          color: 'var(--ink-300)',
          fontSize: '0.97rem',
          lineHeight: 1.72,
          margin: 0,
          maxWidth: 620,
        }}>
          {step.desc}
        </p>
      </div>

      <div style={{
        flex: '0 0 12px',
        height: 12, width: 12, borderRadius: '50%',
        background: step.color,
        boxShadow: `0 0 18px ${step.color}80`,
        marginTop: 16,
        opacity: inView ? 1 : 0,
        transition: 'opacity 0.35s cubic-bezier(0.23,1,0.32,1)',
      }} />
    </motion.div>
  )
}

export default function ProcessSection() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="process" style={{ padding: 'clamp(60px, 8vw, 120px) 0', position: 'relative', direction: 'rtl' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)' }}>
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
          style={{ marginBottom: 48 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4.8vw, 3.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: 'var(--ink-100)',
            marginBottom: 14,
            maxWidth: 720,
          }}>
            מהשיחה הראשונה <br />
            <span className="gradient-accent">ועד הלקוחות הראשונים.</span>
          </h2>
          <p style={{ color: 'var(--ink-300)', fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', lineHeight: 1.7, maxWidth: 560 }}>
            אנחנו מאמינים בתהליך פשוט וברור. בלי הפתעות, בלי מסמכים מסובכים, ובלי הבטחות שלא ניתן לעמוד בהן.
          </p>
        </motion.div>

        <div style={{ borderTop: '1px solid var(--hairline)' }}>
          {STEPS.map((s, i) => <Step key={s.num} step={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
