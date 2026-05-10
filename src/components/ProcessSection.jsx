import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SPRING = { type: 'spring', stiffness: 220, damping: 26 }

const steps = [
  {
    num: '01',
    title: 'שיחת ייעוץ ואפיון ללא עלות',
    body: 'שיחה של 20–30 דקות שבה אנחנו מסתכלים על העסק שלכם ביחד. מזהים מה עוצר את הצמיחה, מה אפשר לשפר, ואיך נראה המסלול הנכון עבורכם.',
    detail: 'אתם יוצאים עם תמונה ברורה — גם אם תחליטו לא לעבוד יחד.',
    color: '#4d9fff',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'אסטרטגיה מותאמת',
    body: 'בונים יחד תוכנית עבודה ברורה — אילו שירותים מתאימים, מה הסדר הנכון, ומה המטרות הריאליות לשלושת החודשים הראשונים. כל שירות זמין גם בנפרד וגם כחבילה משולבת.',
    detail: 'אין תבניות מוכנות. כל עסק מקבל פתרון שנבנה בשבילו.',
    color: '#1a6fff',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'ביצוע, תוצאות וצמיחה',
    body: 'אנחנו מבצעים — תוכן, אתר, קמפיינים. אתם מקבלים עדכונים שוטפים וגישה ישירה אליי בכל שלב. המטרה תמיד היא צמיחה מדידה ושקופה.',
    detail: 'תוצאות שניתן למדוד — לידים, ROAS, המרות. לא "חשיפות".',
    color: '#00d4ff',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
]

function ProcessStep({ step, index, isLast }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        gap: 24,
        direction: 'rtl',
        position: 'relative',
      }}
    >
      {/* Timeline spine — icon + connecting line (appears on RIGHT in RTL) */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0,
        paddingTop: 2,
      }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ ...SPRING, delay: index * 0.14 + 0.08 }}
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: `${step.color}10`,
            border: `1.5px solid ${step.color}32`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: step.color,
            flexShrink: 0,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {step.icon}
        </motion.div>

        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.14 + 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: 1,
              flex: 1,
              minHeight: 52,
              background: `linear-gradient(180deg, ${step.color}22 0%, rgba(255,255,255,0.03) 100%)`,
              margin: '8px 0',
              transformOrigin: 'top',
            }}
          />
        )}
      </div>

      {/* Step content (appears to the LEFT of the dot in RTL) */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ ...SPRING, delay: index * 0.14 }}
        style={{
          flex: 1,
          paddingBottom: isLast ? 0 : 52,
          paddingTop: 4,
          minWidth: 0,
        }}
      >
        {/* Step label */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 10,
        }}>
          <span style={{
            fontWeight: 900,
            fontSize: '0.62rem',
            color: step.color,
            letterSpacing: '0.14em',
            opacity: 0.65,
          }}>
            STEP {step.num}
          </span>
          <div style={{
            flex: 1,
            height: 1,
            background: `linear-gradient(90deg, ${step.color}18 0%, transparent 100%)`,
          }} />
        </div>

        <h3 style={{
          color: '#E8F4FF',
          fontWeight: 800,
          fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
          letterSpacing: '-0.02em',
          marginBottom: 10,
          lineHeight: 1.25,
        }}>
          {step.title}
        </h3>

        <p style={{
          color: 'rgba(210,230,255,0.65)',
          fontSize: '0.87rem',
          lineHeight: 1.78,
          marginBottom: 12,
          maxWidth: 560,
        }}>
          {step.body}
        </p>

        <p style={{
          color: step.color,
          fontSize: '0.77rem',
          fontWeight: 700,
          opacity: 0.8,
          margin: 0,
        }}>
          {step.detail}
        </p>
      </motion.div>
    </div>
  )
}

export default function ProcessSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const noteRef = useRef(null)
  const noteInView = useInView(noteRef, { once: true, margin: '-60px' })

  return (
    <section
      id="process"
      style={{ padding: 'clamp(60px,8vw,100px) 0', direction: 'rtl', position: 'relative' }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '40%', right: '-5%',
        width: 480, height: 480,
        background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(16px,4vw,40px)', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 18 }}>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg, transparent, #00d4ff)' }} />
            <div className="tag-pill">איך עובדים איתי</div>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(270deg, transparent, #00d4ff)' }} />
          </div>
          <h2 className="font-black leading-tight" style={{
            fontSize: 'clamp(2rem,4vw,3.2rem)',
            letterSpacing: '-0.02em', marginBottom: 14, color: '#E8F4FF',
          }}>
            שלושה שלבים לצמיחה{' '}
            <span className="gradient-text">אמיתית</span>
          </h2>
          <p style={{
            color: 'rgba(230,240,255,0.65)',
            fontSize: 'clamp(0.95rem,1.5vw,1.05rem)',
            maxWidth: 500, margin: '0 auto', lineHeight: 1.7,
          }}>
            תהליך פשוט, ברור ומחושב — מהשיחה הראשונה ועד לתוצאות שאפשר למדוד.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          {steps.map((step, i) => (
            <ProcessStep key={i} step={step} index={i} isLast={i === steps.length - 1} />
          ))}
        </div>

        {/* Individual services note */}
        <motion.div
          ref={noteRef}
          initial={{ opacity: 0 }}
          animate={noteInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{ marginTop: 52, textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 20px',
            borderRadius: 100,
            border: '1px solid rgba(255,255,255,0.07)',
            background: 'rgba(255,255,255,0.02)',
          }}>
            <div style={{
              width: 5, height: 5, borderRadius: '50%',
              background: 'rgba(0,212,255,0.5)',
              flexShrink: 0,
            }} />
            <p style={{ color: 'rgba(200,220,255,0.38)', fontSize: '0.82rem', margin: 0 }}>
              כל שירות זמין גם בנפרד — עיצוב אתר, יצירת תוכן, ניהול קמפיינים — בלי לקחת את החבילה כולה.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
