import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const SPRING = { type: 'spring', stiffness: 220, damping: 26 }

const faqs = [
  {
    q: 'תוך כמה זמן רואים תוצאות?',
    a: 'תוך שבועיים אתם כבר רואים את הקמפיין באוויר ואת הפניות הראשונות. תוצאות אמיתיות שאפשר למדוד — בין חודש לחודשיים. אתר חדש לוקח קצת יותר, אבל אם יש לכם אתר קיים, אפשר להתחיל עם פרסום ותוכן תוך שבוע.',
  },
  {
    q: 'מה ההבדל בין סרטון רגיל לסרטון שיוצר ב־AI?',
    a: 'במבחן עיוור — קשה להבדיל. ההבדל הגדול הוא במהירות ובמחיר. הפקה רגילה של חמישה סרטונים לוקחת 4–6 שבועות ועולה עשרות אלפי שקלים. אנחנו מספקים את אותו הפלט תוך כמה ימים, בשבריר מהמחיר.',
  },
  {
    q: 'אני יכול לקחת רק שירות אחד?',
    a: 'בטח. הרבה לקוחות מתחילים עם פרסום בלבד או רק עם תוכן. בפגישת הייעוץ נבין יחד מה הכי מתאים לכם, ונמליץ על מה להתחיל לפי היעדים שלכם.',
  },
  {
    q: 'כמה זה עולה?',
    a: 'תלוי במה אתם צריכים. אתרים — מחיר פרויקט קבוע. תוכן וקמפיינים — חבילה חודשית. בפגישת הייעוץ אנחנו מציגים הצעה מותאמת אחרי שמבינים את הצרכים שלכם — ללא הפתעות, ללא אותיות קטנות.',
  },
  {
    q: 'אתם עובדים גם עם עסקים בחו"ל?',
    a: 'כן. אנחנו עובדים עם עסקים בכל העולם. תוכן ב־AI אנחנו מפיקים ב־12 שפות שונות, וקמפיינים אנחנו מנהלים בכל מדינה. את התקשורת אפשר לנהל בעברית או באנגלית.',
  },
  {
    q: 'מה ההבדל בינכם לסוכנות שיווק רגילה?',
    a: 'אנחנו עושים את הכל באותו מקום — אתרים, תוכן וקמפיינים. אין ניתוקים, אין "זה לא באחריותנו". כל מה שאתם צריכים בשביל הצמיחה הדיגיטלית של העסק — אצלנו, תחת קורת גג אחת, עם איש קשר אחד.',
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
      style={{ borderBottom: '1px solid var(--hairline)' }}
    >
      <button
        onClick={() => onToggle(index)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 0',
          textAlign: 'right',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          gap: 20,
          direction: 'rtl',
          fontFamily: 'inherit',
        }}
        aria-expanded={isOpen}
      >
        <span style={{
          color: isOpen ? 'var(--ink-100)' : 'var(--ink-300)',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(1.05rem, 1.6vw, 1.18rem)',
          lineHeight: 1.4,
          textAlign: 'right',
          flex: 1,
          letterSpacing: '-0.015em',
          transition: 'color 0.18s cubic-bezier(0.23,1,0.32,1)',
        }}>
          {faq.q}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: 28, height: 28, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: isOpen ? 'rgba(34,211,238,0.14)' : 'rgba(245,245,247,0.05)',
            border: `1px solid ${isOpen ? 'rgba(34,211,238,0.35)' : 'rgba(245,245,247,0.1)'}`,
            borderRadius: '50%',
            color: isOpen ? '#22D3EE' : 'rgba(245,245,247,0.4)',
            transition: 'background 0.18s cubic-bezier(0.23,1,0.32,1), border-color 0.18s, color 0.18s',
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
              color: 'var(--ink-300)',
              fontSize: '0.96rem',
              lineHeight: 1.78,
              padding: '0 0 24px',
              direction: 'rtl',
              textAlign: 'right',
              margin: 0,
              maxWidth: 720,
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
      style={{ padding: 'clamp(60px, 8vw, 120px) 0', direction: 'rtl', position: 'relative' }}
    >
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)' }}>
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
          style={{ marginBottom: 48, textAlign: 'right' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4.8vw, 3.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: 'var(--ink-100)',
            marginBottom: 16,
          }}>
            שאלות <span className="gradient-accent">נפוצות.</span>
          </h2>
          <p style={{ color: 'var(--ink-300)', fontSize: '0.98rem', lineHeight: 1.7, margin: 0 }}>
            לא מצאתם תשובה?{' '}
            <a href="#cta" onClick={(e) => { e.preventDefault(); document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' }) }} style={{ color: 'var(--cyan)', textDecoration: 'none' }}>
              קבעו פגישת ייעוץ קצרה
            </a>
            {' '}— נענה על כל שאלה.
          </p>
        </motion.div>

        <div style={{ borderTop: '1px solid var(--hairline)' }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} isOpen={openIndex === i} onToggle={handleToggle} />
          ))}
        </div>
      </div>
    </section>
  )
}
