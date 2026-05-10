import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WA_LINK = 'https://wa.me/972544286018?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9C%D7%99%D7%90%D7%95%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%94%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D%20%D7%A9%D7%9C%D7%9A'

const SPRING = { type: 'spring', stiffness: 220, damping: 26 }

const features = [
  {
    num: '01',
    title: 'אתם עובדים ישירות איתי',
    body: 'אין אנשי מכירות, אין מנהלי לקוחות. ליאור בונה, כותב ועונה — אתם תמיד עם מי שעושה את העבודה בפועל.',
    accent: '#4d9fff',
    tag: 'גישה ישירה',
  },
  {
    num: '02',
    title: 'תוכן AI שלא ראיתם בישראל',
    body: 'ראשונים בישראל ברמת ה-UGC וה-AI content שאנחנו מייצרים — איכות שמתחרה בהפקות גדולות, בשבריר המחיר.',
    accent: '#1a6fff',
    tag: 'ייחודי לחלוטין',
  },
  {
    num: '03',
    title: 'הכל תחת קורת גג אחת',
    body: 'תוכן, אתר וקמפיין שעובדים ביחד. כשצוות אחד מנהל את כל השיווק — אין פערים, אין ספקים שמאשימים אחד את השני.',
    accent: '#00d4ff',
    tag: 'מעטפת מלאה',
  },
  {
    num: '04',
    title: 'תוצאות שקופות ומדידות',
    body: 'לא עושים "חשיפות". כל פרויקט מגיע עם מדדים ברורים — לידים, ROAS, המרות. אתם תמיד יודעים מה קורה עם הכסף שלכם.',
    accent: '#4d9fff',
    tag: '100% שקוף',
  },
]

function FeatureRow({ feat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...SPRING, delay: index * 0.09 }}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 24,
        padding: '30px 0',
        borderBottom: '1px solid rgba(255,255,255,0.055)',
        direction: 'rtl',
        position: 'relative',
      }}
    >
      {/* Ghost step number — appears on RIGHT in RTL flex (first child) */}
      <div style={{
        width: 64,
        flexShrink: 0,
        fontWeight: 900,
        fontSize: '2.8rem',
        color: feat.accent,
        opacity: 0.08,
        letterSpacing: '-0.04em',
        lineHeight: 1,
        paddingTop: 4,
        fontFamily: 'Heebo, sans-serif',
        userSelect: 'none',
      }}>
        {feat.num}
      </div>

      {/* Content — fills remaining space */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 10,
          flexWrap: 'wrap',
        }}>
          <h3 style={{
            color: '#E8F4FF',
            fontWeight: 800,
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            margin: 0,
          }}>
            {feat.title}
          </h3>
          <span style={{
            background: `${feat.accent}12`,
            border: `1px solid ${feat.accent}28`,
            borderRadius: 100,
            padding: '3px 10px',
            fontSize: '0.63rem',
            fontWeight: 700,
            color: feat.accent,
            letterSpacing: '0.05em',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}>
            {feat.tag}
          </span>
        </div>
        <p style={{
          color: 'rgba(200,220,255,0.58)',
          fontSize: '0.87rem',
          lineHeight: 1.75,
          margin: 0,
          maxWidth: 560,
        }}>
          {feat.body}
        </p>
      </div>

      {/* Accent bar — on the LEFT in RTL (last child) */}
      <div style={{
        width: 2,
        alignSelf: 'stretch',
        background: `linear-gradient(180deg, ${feat.accent}30 0%, transparent 100%)`,
        borderRadius: 1,
        flexShrink: 0,
        minHeight: 40,
      }} />
    </motion.div>
  )
}

export default function WhyUsSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })

  return (
    <section
      id="why-us"
      style={{ padding: 'clamp(60px,8vw,100px) 0', direction: 'rtl', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '10%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(26,111,255,0.06) 0%, transparent 70%)',
        filter: 'blur(90px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(16px,4vw,40px)', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg,transparent,#00d4ff)' }} />
            <div className="tag-pill">למה לבחור ב-VELO?</div>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(270deg,transparent,#00d4ff)' }} />
          </div>
          <h2 className="font-black leading-tight" style={{
            fontSize: 'clamp(2rem,4.5vw,3.4rem)',
            letterSpacing: '-0.03em', marginBottom: 14, color: '#E8F4FF',
          }}>
            למה עסקים{' '}
            <span className="gradient-text">סומכים עלינו</span>
          </h2>
          <p style={{
            color: 'rgba(210,230,255,0.65)',
            fontSize: 'clamp(1rem,1.7vw,1.1rem)',
            maxWidth: 540, margin: '0 auto', lineHeight: 1.7,
          }}>
            כשצוות אחד מנהל את התוכן, האתר והקמפיין — הכל עובד ביחד. זה ההבדל בין שיווק שנראה טוב לשיווק שמביא תוצאות.
          </p>
        </motion.div>

        {/* Editorial rows */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.055)' }}>
          {features.map((feat, i) => (
            <FeatureRow key={i} feat={feat} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: 40,
            padding: '22px 28px',
            borderRadius: 16,
            border: '1px solid rgba(0,212,255,0.14)',
            borderTopColor: 'rgba(0,212,255,0.28)',
            background: 'linear-gradient(155deg, rgba(10,16,36,0.65) 0%, rgba(6,10,22,0.85) 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 20,
          }}
        >
          <div>
            <p style={{ color: '#E8F4FF', fontWeight: 800, fontSize: '0.97rem', margin: '0 0 4px', letterSpacing: '-0.01em' }}>
              שקיפות מלאה — תמיד יודעים מה קורה
            </p>
            <p style={{ color: 'rgba(200,220,255,0.5)', fontSize: '0.81rem', margin: 0 }}>
              עדכונים שוטפים, גישה ישירה לליאור, ודוחות ברורים. לא מסתירים כלום.
            </p>
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <button className="btn-primary" style={{ fontSize: '0.85rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
              <span>שיחה עם ליאור</span>
            </button>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
