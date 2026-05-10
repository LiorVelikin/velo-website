import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const SPRING = { type: 'spring', stiffness: 220, damping: 26 }

const faqs = [
  {
    q: 'כמה עולים השירותים שלכם?',
    a: 'המחיר תלוי בשירותים שאתם צריכים ובגודל הפרויקט. אנחנו לא עובדים עם מחירונים קבועים כי כל עסק שונה. האבחון החינמי עוזר לנו להבין מה מתאים לכם ולהציע מחיר שהגיוני לשני הצדדים.',
  },
  {
    q: 'כמה זמן לוקח לראות תוצאות?',
    a: 'ברוב המקרים מתחילים לראות תנועה ולידים תוך 30 עד 45 יום. תוצאות משמעותיות מגיעות בדרך כלל תוך 60 עד 90 יום — תלוי בתחום ובנקודת ההתחלה של העסק שלכם.',
  },
  {
    q: 'האם אתם מתאימים לעסק קטן?',
    a: 'כן. רוב הלקוחות שלנו הם עסקים קטנים עד בינוניים שרוצים לגדול בלי לגייס צוות שיווק שלם. אנחנו מחליפים את כל המחלקה.',
  },
  {
    q: 'מה ההבדל בינכם לבין סוכנות רגילה?',
    a: 'סוכנות רגילה עושה דבר אחד — פרסום, או עיצוב, או תוכן. אנחנו עושים את הכל ביחד ומחברים את החלקים. התוכן שאנחנו יוצרים מגיע לאתר שאנחנו בנינו ולקמפיין שאנחנו מנהלים. הכל עובד ביחד.',
  },
  {
    q: 'האם יש חוזה מחייב?',
    a: 'לא. אנחנו עובדים בהסכמים חודשיים עם הודעה מוקדמת של 30 יום. אנחנו מאמינים שלקוח שמרוצה לא צריך חוזה כדי להישאר.',
  },
  {
    q: 'אתם עובדים עם כל תחום?',
    a: 'עבדנו עם אופנה, ביוטי, נדלן, מסעדות, טכנולוגיה, קליניקות ועוד. אם העסק שלכם מוכר ללקוחות — אנחנו יכולים לעזור לו לגדול.',
  },
  {
    q: 'מה זה האבחון החינמי בדיוק?',
    a: 'שיחה של 20 עד 30 דקות שבה אנחנו מסתכלים על העסק שלכם, מזהים מה עוצר את הצמיחה ומציעים כיוון. אתם יוצאים עם תובנות שימושיות גם אם תחליטו לא לעבוד איתנו.',
  },
  {
    q: 'איך מתחילים?',
    a: 'ממלאים את הטופס בתחתית העמוד — שם, טלפון ושם העסק. אנחנו חוזרים אליכם תוך יום עסקים ומתאמים שיחה קצרה. זהו.',
  },
]

function FAQItem({ faq, index, isOpen, onToggle }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...SPRING, delay: index * 0.05 }}
      style={{ borderBottom: '1px solid rgba(255,255,255,0.055)' }}
    >
      <button
        onClick={() => onToggle(index)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '22px 0',
          textAlign: 'right',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          gap: 20,
          direction: 'rtl',
        }}
        aria-expanded={isOpen}
      >
        <span style={{
          color: isOpen ? '#E8F4FF' : 'rgba(220,235,255,0.82)',
          fontWeight: 700,
          fontSize: 'clamp(0.97rem, 1.5vw, 1.08rem)',
          lineHeight: 1.4,
          textAlign: 'right',
          flex: 1,
          transition: 'color 0.2s ease',
        }}>
          {faq.q}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: 26, height: 26, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: isOpen ? 'rgba(26,111,255,0.14)' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${isOpen ? 'rgba(26,111,255,0.35)' : 'rgba(255,255,255,0.1)'}`,
            borderRadius: '50%',
            color: isOpen ? '#4d9fff' : 'rgba(200,220,255,0.4)',
            transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              color: 'rgba(200,220,255,0.65)',
              fontSize: '0.88rem',
              lineHeight: 1.8,
              padding: '0 0 22px',
              direction: 'rtl',
              textAlign: 'right',
              margin: 0,
              maxWidth: 660,
            }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section
      id="faq"
      style={{ padding: 'clamp(56px,7vw,96px) 0', direction: 'rtl', position: 'relative' }}
    >
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 500,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(26,111,255,0.04) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 clamp(16px,4vw,40px)', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: 52 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ height: 1, width: 48, background: 'linear-gradient(90deg, transparent, #1a6fff)' }} />
            <div className="tag-pill">שאלות נפוצות</div>
            <div style={{ height: 1, width: 48, background: 'linear-gradient(270deg, transparent, #1a6fff)' }} />
          </div>
          <h2 className="font-black leading-tight" style={{
            fontSize: 'clamp(1.9rem, 4vw, 3.1rem)',
            letterSpacing: '-0.02em',
            color: '#E8F4FF',
          }}>
            כל מה שרצית לדעת{' '}
            <span className="gradient-text">לפני שמתחילים</span>
          </h2>
        </motion.div>

        {/* Clean accordion — no heavy card wrapper */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.055)' }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={handleToggle}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
