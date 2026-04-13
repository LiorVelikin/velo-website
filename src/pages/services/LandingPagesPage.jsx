import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'

const painPoints = [
  { icon: '📉', text: 'מביאים תנועה — אבל אף אחד לא ממיר ללידים' },
  { icon: '💰', text: 'מוציאים על פרסום אבל עלות ליד גבוהה מדי' },
  { icon: '🎯', text: 'הדף לא מחובר לקהל — מסר כללי שלא פוגע ב"כאב"' },
  { icon: '⏳', text: 'הדף לאט — ומאבד גולשים לפני שקראו שורה אחת' },
]

const features = [
  { title: 'מבנה CRO מוכח', desc: 'כותרת שתופסת → כאב → הבטחה → הוכחה → CTA. מבנה שנבדק על אלפי עמודים.' },
  { title: 'כותרת שתופסת תוך 3 שניות', desc: 'יש לכם 3 שניות לשכנע גולש להישאר. הכותרת שלנו עושה את זה בדיוק.' },
  { title: 'הוכחה חברתית חזקה', desc: 'ביקורות, תוצאות, ולוגואים — כי ישראלים קונים מ"ראיתי שהם עשו לחבר שלי".' },
  { title: 'A/B Testing מובנה', desc: 'בודקים כותרות, CTAs ותמונות — ומשאירים רק מה שממיר יותר.' },
  { title: 'מהירות טעינה קריטית', desc: '95+ ב-PageSpeed. כל שנייה שלא נטענת = עוד 20% נטישה.' },
  { title: 'פיקסל ו-Tracking מלא', desc: 'Meta Pixel, Google Tag Manager — כל ליד נמדד ומיוחס לקמפיין הנכון.' },
]

const results = [
  { metric: '3.2×', label: 'עלייה ממוצעת בשיעור ההמרה' },
  { metric: '-41%', label: 'ירידה בעלות לליד' },
  { metric: '< 2s', label: 'זמן טעינה ממוצע' },
]

const faqs = [
  { q: 'מה ההבדל בין דף נחיתה לאתר רגיל?', a: 'דף נחיתה מיועד לפעולה אחת ספציפית — מילוי טופס, שיחת טלפון, או רכישה. אין תפריט, אין הסחות דעת. רק המסר ה-CTA.' },
  { q: 'כמה זמן לוקח לבנות דף נחיתה?', a: 'דף נחיתה סטנדרטי — 5-10 ימים עסקיים מהאישור ועד ההשקה.' },
  { q: 'האם אתם כותבים את הטקסט?', a: 'כן. הקופי הוא חלק מהפרויקט. אנחנו כותבים עברית ואנגלית המותאמת לקהל היעד ולפלטפורמת הפרסום.' },
  { q: 'האם אפשר לחבר לקמפיין Meta/Google?', a: 'בהחלט. זו המטרה. בונים את הדף כך שיהיה מסונכרן עם המסר של הקמפיין.' },
]

export default function LandingPagesPage() {
  const [ref, visible] = useReveal()
  const [resultsRef, resultsVisible] = useReveal()

  return (
    <>
      <Helmet>
        <title>עיצוב דפי נחיתה | VELO Studio — דפים שהופכים קליקים ללידים</title>
        <meta name="description" content="עיצוב דפי נחיתה ממוקדי המרות לעסקים בישראל. מבנה CRO, A/B testing, ומהירות טעינה שמורידה עלות לליד. VELO Studio בונה דפים שמביאים לקוחות." />
        <meta name="keywords" content="דף נחיתה, עיצוב דף נחיתה, דפי נחיתה ממירים, landing page ישראל, הורדת עלות ליד" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services/landing-pages" />
      </Helmet>

      <PageHero
        tag="דפי נחיתה"
        title="קליקים שהופכים ללידים"
        accent="ללידים"
        subtitle="דף נחיתה טוב לא מחכה שהגולש יחליט — הוא מוביל אותו לפעולה. מבנה CRO, מהירות ומסר מדויק."
      />

      {/* Pain Points */}
      <section style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em', marginBottom: 12 }}>
              למה הדף שלכם <span className="gradient-text">לא ממיר?</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {painPoints.map((p, i) => (
              <div key={i} className="glass-card" style={{ padding: '20px 22px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{p.icon}</span>
                <p style={{ color: '#8ba3c7', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results stats */}
      <section ref={resultsRef} style={{ padding: 'clamp(32px,5vw,60px) 0', direction: 'rtl' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32, textAlign: 'center' }}>
            {results.map((r, i) => (
              <div key={i} style={{ opacity: resultsVisible ? 1 : 0, transform: resultsVisible ? 'none' : 'translateY(16px)', transition: `opacity 0.5s ease ${i * 120}ms, transform 0.5s ease ${i * 120}ms` }}>
                <div style={{ color: '#1a6fff', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1 }}>{r.metric}</div>
                <div style={{ color: '#8ba3c7', fontSize: '0.88rem', marginTop: 10, lineHeight: 1.5 }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={ref} style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>מה כולל הפרויקט</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              דף שבנוי <span className="gradient-text">להמרה</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {features.map((f, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '26px 24px',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'none' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
              >
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(0,200,255,0.1)', border: '1px solid rgba(0,200,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00c8ff' }} />
                </div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: '#8ba3c7', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-black" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', letterSpacing: '-0.02em', marginBottom: 32, textAlign: 'center' }}>
            שאלות <span className="gradient-text">נפוצות</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card" style={{ padding: '22px 24px' }}>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8 }}>{faq.q}</h3>
                <p style={{ color: '#8ba3c7', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', letterSpacing: '-0.02em', marginBottom: 12 }}>
              רוצים דף שמוריד את <span className="gradient-text">עלות הליד?</span>
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '0.95rem', lineHeight: 1.65 }}>
              ספרו לנו על הקמפיין — ונגיד לכם מה הדף שלכם צריך לשנות.
            </p>
          </div>
          <ContactForm source="landing-pages-page" />
        </div>
      </section>
    </>
  )
}
