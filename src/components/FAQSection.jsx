import { useEffect, useRef, useState } from 'react'

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
  return (
    <div style={{
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      borderRight: isOpen ? '2px solid #1a6fff' : '2px solid transparent',
      transition: 'border-color 0.3s ease',
      background: isOpen ? 'rgba(26,111,255,0.025)' : 'transparent',
    }}>
      <button
        onClick={() => onToggle(index)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 20px',
          textAlign: 'right',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          gap: 16,
          direction: 'rtl',
        }}
        aria-expanded={isOpen}
      >
        <span style={{
          color: '#ffffff',
          fontWeight: 700,
          fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
          lineHeight: 1.4,
          textAlign: 'right',
          flex: 1,
        }}>
          {faq.q}
        </span>
        {/* Plus / minus icon */}
        <div style={{
          width: 28, height: 28, flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: isOpen ? 'rgba(26,111,255,0.15)' : 'rgba(255,255,255,0.05)',
          border: `1px solid ${isOpen ? 'rgba(26,111,255,0.35)' : 'rgba(255,255,255,0.08)'}`,
          borderRadius: '50%',
          transition: 'all 0.3s ease',
          color: isOpen ? '#4d9fff' : 'rgba(255,255,255,0.5)',
        }}>
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
            style={{ transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(45deg)' : 'none' }}
          >
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </div>
      </button>

      {/* Answer — smooth expand */}
      <div style={{
        maxHeight: isOpen ? 300 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
      }}>
        <p style={{
          color: '#8ba3c7',
          fontSize: '0.92rem',
          lineHeight: 1.75,
          padding: '0 20px 20px',
          direction: 'rtl',
          textAlign: 'right',
        }}>
          {faq.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const sectionRef = useRef(null)
  const [headVis, setHeadVis] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeadVis(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const handleToggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-14 relative overflow-hidden"
      style={{ direction: 'rtl' }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 500,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(26,111,255,0.055) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* ── Headline ── */}
        <div style={{
          textAlign: 'center', marginBottom: 56,
          opacity: headVis ? 1 : 0,
          transform: headVis ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.55s ease, transform 0.55s ease',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ height: 1, width: 48, background: 'linear-gradient(90deg, transparent, #1a6fff)' }} />
            <div className="tag-pill">שאלות נפוצות</div>
            <div style={{ height: 1, width: 48, background: 'linear-gradient(270deg, transparent, #1a6fff)' }} />
          </div>
          <h2 className="font-black leading-tight" style={{
            fontSize: 'clamp(1.9rem, 4vw, 3.2rem)',
            letterSpacing: '-0.02em',
          }}>
            כל מה שרצית לדעת{' '}
            <span className="gradient-text">לפני שמתחילים</span>
          </h2>
        </div>

        {/* ── Accordion ── */}
        <div style={{
          maxWidth: 720, margin: '0 auto',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 16,
          overflow: 'hidden',
          background: 'rgba(255,255,255,0.018)',
          backdropFilter: 'blur(12px)',
        }}>
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
